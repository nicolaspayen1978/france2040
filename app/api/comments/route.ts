import { NextRequest, NextResponse } from "next/server";
import { createHash } from "node:crypto";
import { submitComment } from "@/lib/comments";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

function clientIpHash(request: NextRequest): string {
  const forwarded = request.headers.get("x-forwarded-for");
  const ip =
    forwarded?.split(",")[0]?.trim() ||
    request.headers.get("x-real-ip") ||
    "unknown";
  return createHash("sha256").update(ip).digest("hex").slice(0, 32);
}

export async function POST(request: NextRequest) {
  let body: Record<string, unknown>;
  try {
    body = (await request.json()) as Record<string, unknown>;
  } catch {
    return NextResponse.json({ error: "Corps JSON invalide." }, { status: 400 });
  }

  try {
    const result = await submitComment(
      {
        firstName: body.firstName,
        lastName: body.lastName,
        email: body.email,
        linkedin: body.linkedin,
        body: body.body,
        slug: body.slug,
        versionId: body.versionId,
        anchorId: body.anchorId,
        website: body.website,
      },
      clientIpHash(request),
    );
    return NextResponse.json(
      {
        ok: true,
        id: result.id,
        message:
          "Merci. Votre commentaire est enregistré et sera publié après modération.",
      },
      { status: 201 },
    );
  } catch (error) {
    const message = error instanceof Error ? error.message : "Erreur.";
    const status = message.includes("Trop de soumissions")
      ? 429
      : message.includes("n’est pas configuré")
        ? 503
        : 400;
    return NextResponse.json({ error: message }, { status });
  }
}
