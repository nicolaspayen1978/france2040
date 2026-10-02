import { NextRequest, NextResponse } from "next/server";
import { listCommentsByStatus, moderateComment, toPublicComment } from "@/lib/comments";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

function authorized(request: NextRequest): boolean {
  const secret = process.env.COMMENTS_MODERATION_SECRET?.trim();
  if (!secret) return false;

  const header = request.headers.get("authorization");
  if (header?.startsWith("Bearer ") && header.slice(7) === secret) return true;

  const fromQuery = request.nextUrl.searchParams.get("secret");
  if (fromQuery && fromQuery === secret) return true;

  return false;
}

export async function GET(request: NextRequest) {
  if (!authorized(request)) {
    return NextResponse.json({ error: "Non autorisé." }, { status: 401 });
  }

  const statusParam = request.nextUrl.searchParams.get("status") || "pending";
  const status =
    statusParam === "accepted" || statusParam === "rejected" || statusParam === "pending"
      ? statusParam
      : "pending";

  const records = await listCommentsByStatus(status);
  return NextResponse.json({
    comments: records.map((record) => ({
      ...toPublicComment(record),
      email: record.email,
    })),
  });
}

export async function POST(request: NextRequest) {
  if (!authorized(request)) {
    return NextResponse.json({ error: "Non autorisé." }, { status: 401 });
  }

  let body: Record<string, unknown>;
  try {
    body = (await request.json()) as Record<string, unknown>;
  } catch {
    return NextResponse.json({ error: "Corps JSON invalide." }, { status: 400 });
  }

  const id = typeof body.id === "string" ? body.id : "";
  const action = body.action === "accepted" || body.action === "rejected" ? body.action : null;
  if (!id || !action) {
    return NextResponse.json(
      { error: "Indiquez id et action (accepted | rejected)." },
      { status: 400 },
    );
  }

  try {
    const record = await moderateComment(id, action);
    return NextResponse.json({ ok: true, comment: { ...toPublicComment(record), email: record.email } });
  } catch (error) {
    const message = error instanceof Error ? error.message : "Erreur.";
    return NextResponse.json({ error: message }, { status: 400 });
  }
}
