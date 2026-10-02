import {
  isKVConfigured,
  kvExpire,
  kvGetJson,
  kvIncr,
  kvSAdd,
  kvSMembers,
  kvSRem,
  kvSet,
} from "@/lib/kv/client";

export type CommentStatus = "pending" | "accepted" | "rejected";

export type CommentRecord = {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  linkedin: string | null;
  body: string;
  status: CommentStatus;
  submittedAt: string;
  slug: string | null;
  versionId: string | null;
  anchorId: string | null;
  moderatedAt: string | null;
};

/** Public shape: email never leaves the server for HTML. */
export type PublicComment = Omit<CommentRecord, "email">;

const INDEX: Record<CommentStatus, string> = {
  pending: "comments:pending",
  accepted: "comments:accepted",
  rejected: "comments:rejected",
};

const MAX_BODY = 4000;
const MAX_NAME = 80;
const MAX_LINKEDIN = 300;
const MAX_REF = 120;
const RATE_LIMIT_MAX = 5;
const RATE_LIMIT_WINDOW_SEC = 3600;

export function commentsAvailable(): boolean {
  return isKVConfigured();
}

function commentKey(id: string): string {
  return `comment:${id}`;
}

function indexKey(status: CommentStatus): string {
  return INDEX[status];
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
  slug?: unknown;
  versionId?: unknown;
  anchorId?: unknown;
  /** Honeypot — must be empty. */
  website?: unknown;
};

export async function submitComment(
  input: SubmitCommentInput,
  ipHash: string,
): Promise<{ id: string }> {
  if (!commentsAvailable()) {
    throw new Error("Le dépôt de commentaires n’est pas configuré.");
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

  const record: CommentRecord = {
    id: newId(),
    firstName: requireText(input.firstName, "Le prénom", MAX_NAME),
    lastName: requireText(input.lastName, "Le nom", MAX_NAME),
    email: normalizeEmail(input.email),
    linkedin: normalizeLinkedIn(input.linkedin),
    body: requireText(input.body, "Le commentaire", MAX_BODY),
    status: "pending",
    submittedAt: new Date().toISOString(),
    slug: trimOrNull(input.slug, MAX_REF),
    versionId: trimOrNull(input.versionId, MAX_REF),
    anchorId: trimOrNull(input.anchorId, MAX_REF),
    moderatedAt: null,
  };

  await kvSet(commentKey(record.id), record);
  await kvSAdd(indexKey("pending"), record.id);
  return { id: record.id };
}

async function loadByIds(ids: string[]): Promise<CommentRecord[]> {
  const records: CommentRecord[] = [];
  for (const id of ids) {
    const record = await kvGetJson<CommentRecord>(commentKey(id));
    if (record && record.id) records.push(record);
  }
  return records.sort((a, b) => (a.submittedAt < b.submittedAt ? 1 : -1));
}

export async function listCommentsByStatus(
  status: CommentStatus,
): Promise<CommentRecord[]> {
  if (!commentsAvailable()) return [];
  const ids = await kvSMembers(indexKey(status));
  return loadByIds(ids);
}

export async function listPublicComments(): Promise<PublicComment[]> {
  const accepted = await listCommentsByStatus("accepted");
  return accepted.map(toPublicComment);
}

export async function moderateComment(
  id: string,
  next: "accepted" | "rejected",
): Promise<CommentRecord> {
  if (!commentsAvailable()) {
    throw new Error("Le dépôt de commentaires n’est pas configuré.");
  }

  const safeId = String(id || "").trim();
  if (!safeId) throw new Error("Identifiant manquant.");

  const record = await kvGetJson<CommentRecord>(commentKey(safeId));
  if (!record) throw new Error("Commentaire introuvable.");

  const previous = record.status;
  if (previous === next) return record;

  record.status = next;
  record.moderatedAt = new Date().toISOString();

  await kvSet(commentKey(safeId), record);
  await kvSRem(indexKey(previous), safeId);
  await kvSAdd(indexKey(next), safeId);
  return record;
}
