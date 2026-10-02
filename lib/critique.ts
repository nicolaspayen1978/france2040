export type CritiqueTargetKind = "paper" | "visual";

export type CritiqueTarget = {
  kind: CritiqueTargetKind;
  slug: string;
  versionId: string;
  anchorId: string;
  /** Human label for the nearest section / heading (review aid). */
  section?: string | null;
};

export function critiqueHref(target: CritiqueTarget): string {
  const params = new URLSearchParams();
  params.set("kind", target.kind);
  params.set("slug", target.slug);
  params.set("version", target.versionId);
  if (target.anchorId) params.set("anchor", target.anchorId);
  if (target.section?.trim()) params.set("section", target.section.trim().slice(0, 200));
  return `/commentaires?${params.toString()}`;
}

export function targetPassageHref(input: {
  kind?: string | null;
  slug?: string | null;
  versionId?: string | null;
  anchorId?: string | null;
}): string | null {
  const slug = input.slug?.trim();
  const versionId = input.versionId?.trim();
  if (!slug || !versionId) return null;

  const kind = input.kind === "visual" ? "visual" : "paper";
  const path =
    kind === "visual" ? `/en-images/${slug}/v/${versionId}` : `/documents/${slug}/v/${versionId}`;

  const anchor = input.anchorId?.trim();
  return anchor ? `${path}#${anchor}` : path;
}
