import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { VisualView } from "@/components/VisualView";
import { getVisual, getVisuals, getVisualVersion, visualPath } from "@/lib/visuals";
import { absoluteUrl, socialImage, socialTwitter } from "@/lib/site";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return getVisuals().map((visual) => ({ slug: visual.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const visual = getVisual(slug);
  if (!visual) return {};
  const version = getVisualVersion(visual, visual.currentVersionId);
  if (!version) return {};
  const path = visualPath(visual, version.id);

  return {
    title: visual.title,
    description: visual.summary,
    alternates: { canonical: absoluteUrl(path) },
    openGraph: {
      title: visual.title,
      description: visual.summary,
      url: absoluteUrl(path),
      locale: "fr_FR",
      type: "article",
      images: [socialImage],
    },
    twitter: socialTwitter(visual.title, visual.summary),
  };
}

export default async function EnImagePage({ params }: Props) {
  const { slug } = await params;
  const visual = getVisual(slug);
  if (!visual) notFound();

  return <VisualView visual={visual} versionId={visual.currentVersionId} />;
}
