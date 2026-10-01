import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { VisualView } from "@/components/VisualView";
import { getVisual, getVisuals, getVisualVersion, visualPath } from "@/lib/visuals";
import { absoluteUrl, socialImage, socialTwitter } from "@/lib/site";

type Props = {
  params: Promise<{ slug: string; version: string }>;
};

export function generateStaticParams() {
  return getVisuals().flatMap((visual) =>
    visual.versions.map((version) => ({ slug: visual.slug, version: version.id })),
  );
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug, version: versionId } = await params;
  const visual = getVisual(slug);
  if (!visual) return {};
  const version = getVisualVersion(visual, versionId);
  if (!version) return {};
  const path = visualPath(visual, version.id);
  const title = `${visual.title} — ${version.id}`;

  return {
    title,
    description: visual.summary,
    alternates: { canonical: absoluteUrl(path) },
    openGraph: {
      title,
      description: visual.summary,
      url: absoluteUrl(path),
      locale: "fr_FR",
      type: "article",
      images: [socialImage],
    },
    twitter: socialTwitter(title, visual.summary),
  };
}

export default async function EnImageVersionPage({ params }: Props) {
  const { slug, version: versionId } = await params;
  const visual = getVisual(slug);
  if (!visual) notFound();
  const version = getVisualVersion(visual, versionId);
  if (!version) notFound();

  return <VisualView visual={visual} versionId={versionId} />;
}
