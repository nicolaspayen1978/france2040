import { createHash, randomBytes } from "node:crypto";
import {
  isKVConfigured,
  kvDel,
  kvExpire,
  kvGetJson,
  kvIncr,
  kvSAdd,
  kvSMembers,
  kvSRem,
  kvSet,
  kvSetWithOptions,
} from "@/lib/kv/client";
import { isMailConfigured, sendCommentVerificationEmail } from "@/lib/mail";

export type CommentStatus = "unverified" | "pending" | "accepted" | "rejected";

export type CommentTargetKind = "paper" | "visual";

export type CommentRecord = {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  linkedin: string | null;
  body: string;
  status: CommentStatus;
  submittedAt: string;
  verifiedAt: string | null;
  kind: CommentTargetKind | null;
  slug: string | null;
  versionId: string | null;
  anchorId: string | null;
  section: string | null;
  moderatedAt: string | null;
};

type VerifyTokenRecord = {
  commentId: string;
  email: string;
  createdAt: string;
};

/** Public shape: email never leaves the server for HTML. */
export type PublicComment = Omit<CommentRecord, "email">;

const INDEX: Record<CommentStatus, string> = {
  unverified: "comments:unverified",
  pending: "comments:pending",
  accepted: "comments:accepted",
  rejected: "comments:rejected",
};

const MAX_BODY = COMMENT_BODY_MAX;
const MAX_NAME = 80;
const MAX_LINKEDIN = 300;
const MAX_REF = 120;
const RATE_LIMIT_MAX = 5;
const RATE_LIMIT_WINDOW_SEC = 3600;
const VERIFY_TTL_SEC = 48 * 60 * 60;

export function commentsAvailable(): boolean {
  return isKVConfigured() && isMailConfigured();
}

function commentKey(id: string): string {
  return `comment:${id}`;
}

function indexKey(status: CommentStatus): string {
  return INDEX[status];
}

function verifyTokenKey(token: string): string {
  return `comments:verify:${token}`;
}

function trimOrNull(value: unknown, max: number): string | null {
  if (typeof value !== "string") return null;
  const trimmed = value.trim();
  if (!trimmed) return null;
  return trimmed.slice(0, max);
}

function requireText(value: unknown, field: string, max: number): string {
  const trimmed = trimOrNull(value, max);
  if (!trimmed) throw new Error(`${field} est requis.`);
  return trimmed;
}

function normalizeEmail(value: unknown): string {
  const email = requireText(value, "L’adresse e-mail", 200).toLowerCase();
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    throw new Error("L’adresse e-mail n’est pas valide.");
  }
  return email;
}

/** Accept full LinkedIn URLs or in/username forms; store a https URL. Empty → null. */
export function normalizeLinkedIn(value: unknown): string | null {
  const raw = trimOrNull(value, MAX_LINKEDIN);
  if (!raw) return null;
  let candidate = raw;

  if (!/^https?:\/\//i.test(candidate)) {
    if (candidate.startsWith("linkedin.com/") || candidate.startsWith("www.linkedin.com/")) {
      candidate = `https://${candidate.replace(/^www\./, "")}`;
    } else if (candidate.startsWith("/in/") || candidate.startsWith("in/")) {
      const path = candidate.replace(/^\//, "");
      candidate = `https://www.linkedin.com/${path}`;
    } else if (/^[a-zA-Z0-9\-_%]+$/.test(candidate)) {
      candidate = `https://www.linkedin.com/in/${candidate}`;
    } else {
      throw new Error("Indiquez une URL LinkedIn ou un identifiant de profil.");
    }
  }

  let url: URL;
  try {
    url = new URL(candidate);
  } catch {
    throw new Error("L’URL LinkedIn n’est pas valide.");
  }

  if (!/(^|\.)linkedin\.com$/i.test(url.hostname)) {
    throw new Error("Le lien doit pointer vers linkedin.com.");
  }

  return url.toString().slice(0, MAX_LINKEDIN);
}

function newId(): string {
  return `c_${Date.now().toString(36)}_${Math.random().toString(36).slice(2, 10)}`;
}

function newVerifyToken(): string {
  return randomBytes(32).toString("hex");
}

export function toPublicComment(record: CommentRecord): PublicComment {
  const { email: _email, ...rest } = record;
  return rest;
}

export type SubmitCommentInput = {
  firstName: unknown;
  lastName: unknown;
  email: unknown;
  linkedin: unknown;
  body: unknown;
  kind?: unknown;
  slug?: unknown;
  versionId?: unknown;
  anchorId?: unknown;
  section?: unknown;
  /** Honeypot — must be empty. */
  website?: unknown;
};

function normalizeKind(value: unknown): CommentTargetKind | null {
  if (value === "visual" || value === "paper") return value;
  return null;
}

export async function submitComment(
  input: SubmitCommentInput,
  ipHash: string,
): Promise<{ id: string }> {
  if (!isKVConfigured()) {
    throw new Error("Le dépôt de commentaires n’est pas configuré.");
  }
  if (!isMailConfigured()) {
    throw new Error("La confirmation par e-mail n’est pas configurée.");
  }

  if (typeof input.website === "string" && input.website.trim()) {
    throw new Error("Soumission refusée.");
  }

  const rateKey = `comments:ratelimit:${ipHash || "unknown"}`;
  const count = await kvIncr(rateKey);
  if (count === 1) await kvExpire(rateKey, RATE_LIMIT_WINDOW_SEC);
  if (count > RATE_LIMIT_MAX) {
    throw new Error("Trop de soumissions. Réessayez plus tard.");
  }

  const slug = trimOrNull(input.slug, MAX_REF);
  const versionId = trimOrNull(input.versionId, MAX_REF);
  const kind = normalizeKind(input.kind) ?? (slug ? "paper" : null);

  const record: CommentRecord = {
    id: newId(),
    firstName: requireText(input.firstName, "Le prénom", MAX_NAME),
    lastName: requireText(input.lastName, "Le nom", MAX_NAME),
    email: normalizeEmail(input.email),
    linkedin: normalizeLinkedIn(input.linkedin),
    body: requireText(input.body, "Le commentaire", MAX_BODY),
    status: "unverified",
    submittedAt: new Date().toISOString(),
    verifiedAt: null,
    kind,
    slug,
    versionId,
    anchorId: trimOrNull(input.anchorId, MAX_REF),
    section: trimOrNull(input.section, 200),
    moderatedAt: null,
  };

  const token = newVerifyToken();
  const tokenRecord: VerifyTokenRecord = {
    commentId: record.id,
    email: record.email,
    createdAt: record.submittedAt,
  };

  await kvSet(commentKey(record.id), record);
  await kvSAdd(indexKey("unverified"), record.id);
  const tokenStored = await kvSetWithOptions(verifyTokenKey(token), tokenRecord, {
    nx: true,
    ex: VERIFY_TTL_SEC,
  });
  if (tokenStored !== true) {
    await kvSRem(indexKey("unverified"), record.id);
    await kvDel(commentKey(record.id));
    throw new Error("Impossible de créer le lien de confirmation. Réessayez.");
  }

  try {
    await sendCommentVerificationEmail({
      to: record.email,
      firstName: record.firstName,
      token,
    });
  } catch (error) {
    await kvDel(verifyTokenKey(token));
    await kvSRem(indexKey("unverified"), record.id);
    await kvDel(commentKey(record.id));
    throw error instanceof Error
      ? error
      : new Error("Échec d’envoi du message de confirmation.");
  }

  return { id: record.id };
}

async function loadByIds(ids: string[]): Promise<CommentRecord[]> {
  const records: CommentRecord[] = [];
  for (const id of ids) {
    const record = await kvGetJson<CommentRecord>(commentKey(id));
    if (record && record.id) {
      records.push({
        ...record,
        kind: record.kind ?? null,
        section: record.section ?? null,
        verifiedAt: record.verifiedAt ?? null,
        linkedin: record.linkedin ?? null,
        slug: record.slug ?? null,
        versionId: record.versionId ?? null,
        anchorId: record.anchorId ?? null,
        moderatedAt: record.moderatedAt ?? null,
      });
    }
  }
  return records.sort((a, b) => (a.submittedAt < b.submittedAt ? 1 : -1));
}

export async function listCommentsByStatus(
  status: CommentStatus,
): Promise<CommentRecord[]> {
  if (!isKVConfigured()) return [];
  const ids = await kvSMembers(indexKey(status));
  return loadByIds(ids);
}

export async function listPublicComments(): Promise<PublicComment[]> {
  const accepted = await listCommentsByStatus("accepted");
  return accepted.map(toPublicComment);
}

export async function verifyCommentToken(token: unknown): Promise<CommentRecord> {
  if (!isKVConfigured()) {
    throw new Error("Le dépôt de commentaires n’est pas configuré.");
  }

  const safeToken = typeof token === "string" ? token.trim() : "";
  if (!safeToken || safeToken.length > 128 || !/^[a-f0-9]+$/i.test(safeToken)) {
    throw new Error("Lien de confirmation invalide.");
  }

  const tokenKey = verifyTokenKey(safeToken);
  const tokenRecord = await kvGetJson<VerifyTokenRecord>(tokenKey);
  if (!tokenRecord?.commentId) {
    throw new Error("Ce lien de confirmation est invalide ou a expiré.");
  }

  const record = await kvGetJson<CommentRecord>(commentKey(tokenRecord.commentId));
  if (!record) {
    await kvDel(tokenKey);
    throw new Error("Commentaire introuvable.");
  }

  if (record.status === "pending" || record.status === "accepted" || record.status === "rejected") {
    await kvDel(tokenKey);
    return record;
  }

  if (record.status !== "unverified") {
    throw new Error("Ce commentaire ne peut plus être confirmé.");
  }

  if (record.email !== tokenRecord.email) {
    throw new Error("Lien de confirmation invalide.");
  }

  record.status = "pending";
  record.verifiedAt = new Date().toISOString();

  await kvSet(commentKey(record.id), record);
  await kvSRem(indexKey("unverified"), record.id);
  await kvSAdd(indexKey("pending"), record.id);
  await kvDel(tokenKey);

  return record;
}

export async function moderateComment(
  id: string,
  next: "accepted" | "rejected",
): Promise<CommentRecord> {
  if (!isKVConfigured()) {
    throw new Error("Le dépôt de commentaires n’est pas configuré.");
  }

  const safeId = String(id || "").trim();
  if (!safeId) throw new Error("Identifiant manquant.");

  const record = await kvGetJson<CommentRecord>(commentKey(safeId));
  if (!record) throw new Error("Commentaire introuvable.");

  if (record.status === "unverified") {
    throw new Error("Ce commentaire n’a pas encore confirmé son adresse e-mail.");
  }

  const previous = record.status;
  if (previous === next) return record;

  record.status = next;
  record.moderatedAt = new Date().toISOString();

  await kvSet(commentKey(safeId), record);
  await kvSRem(indexKey(previous), safeId);
  await kvSAdd(indexKey(next), safeId);
  return record;
}

/** Stable short hash for rate-limit keys (also used by the API route). */
export function hashClientIp(ip: string): string {
  return createHash("sha256").update(ip || "unknown").digest("hex").slice(0, 32);
}
