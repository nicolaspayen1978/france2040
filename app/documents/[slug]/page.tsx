import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { WorkingPaperView } from "@/components/WorkingPaperView";
import { documentMetadata } from "@/lib/paperMeta";
import { getPaperVersion, getWorkingPaper, getWorkingPapers, loadPaperBlocks } from "@/lib/papers";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return getWorkingPapers().map((paper) => ({ slug: paper.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const paper = getWorkingPaper(slug);
  const version = paper ? getPaperVersion(paper, paper.currentVersionId) : undefined;

  if (!paper || !version) {
    return { title: "Document introuvable" };
  }

  return documentMetadata(paper, version);
}

export default async function DocumentPage({ params }: PageProps) {
  const { slug } = await params;
  const paper = getWorkingPaper(slug);
  const version = paper ? getPaperVersion(paper, paper.currentVersionId) : undefined;

  if (!paper || !version) {
    notFound();
  }

  return (
    <WorkingPaperView
      paper={paper}
      versionId={version.id}
      blocks={loadPaperBlocks(version)}
      placement="alias"
    />
  );
}
