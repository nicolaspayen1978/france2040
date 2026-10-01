import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { WorkingPaperView } from "@/components/WorkingPaperView";
import { getPaperVersion, getWorkingPaper, getWorkingPapers, loadPaperBlocks, versionPath } from "@/lib/papers";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return getWorkingPapers().map((paper) => ({ slug: paper.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const paper = getWorkingPaper(slug);

  if (!paper) {
    return { title: "Document introuvable" };
  }

  return {
    title: paper.title,
    description: paper.summary,
    alternates: {
      canonical: versionPath(paper, paper.currentVersionId),
    },
  };
}

export default async function DocumentPage({ params }: PageProps) {
  const { slug } = await params;
  const paper = getWorkingPaper(slug);
  const version = paper ? getPaperVersion(paper, paper.currentVersionId) : undefined;

  if (!paper || !version) {
    notFound();
  }

  return (
    <WorkingPaperView paper={paper} versionId={version.id} blocks={loadPaperBlocks(version)} />
  );
}
