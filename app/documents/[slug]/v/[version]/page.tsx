import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { WorkingPaperView } from "@/components/WorkingPaperView";
import { getPaperVersion, getWorkingPaper, getWorkingPapers, loadPaperBlocks } from "@/lib/papers";

type PageProps = {
  params: Promise<{ slug: string; version: string }>;
};

export function generateStaticParams() {
  return getWorkingPapers().flatMap((paper) =>
    paper.versions.map((version) => ({ slug: paper.slug, version: version.id })),
  );
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug, version: versionId } = await params;
  const paper = getWorkingPaper(slug);
  const version = paper ? getPaperVersion(paper, versionId) : undefined;

  if (!paper || !version) {
    return { title: "Version introuvable" };
  }

  return {
    title: `${paper.title} — ${version.id}`,
    description: paper.summary,
  };
}

export default async function DocumentVersionPage({ params }: PageProps) {
  const { slug, version: versionId } = await params;
  const paper = getWorkingPaper(slug);
  const version = paper ? getPaperVersion(paper, versionId) : undefined;

  if (!paper || !version) {
    notFound();
  }

  return (
    <WorkingPaperView paper={paper} versionId={version.id} blocks={loadPaperBlocks(version)} />
  );
}
