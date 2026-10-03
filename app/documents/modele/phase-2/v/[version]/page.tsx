import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { WorkingPaperView } from "@/components/WorkingPaperView";
import { documentMetadata } from "@/lib/paperMeta";
import { getPaperVersion, getWorkingPaper, loadPaperBlocks } from "@/lib/papers";

const SLUG = "modele-phase-2";

type PageProps = {
  params: Promise<{ version: string }>;
};

export function generateStaticParams() {
  const paper = getWorkingPaper(SLUG);
  return (paper?.versions ?? []).map((version) => ({ version: version.id }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { version: versionId } = await params;
  const paper = getWorkingPaper(SLUG);
  const version = paper ? getPaperVersion(paper, versionId) : undefined;
  if (!paper || !version) return { title: "Version introuvable" };
  return documentMetadata(paper, version);
}

export default async function ModelePhase2VersionPage({ params }: PageProps) {
  const { version: versionId } = await params;
  const paper = getWorkingPaper(SLUG);
  const version = paper ? getPaperVersion(paper, versionId) : undefined;
  if (!paper || !version) notFound();
  return (
    <WorkingPaperView
      paper={paper}
      versionId={version.id}
      blocks={loadPaperBlocks(version)}
      placement="version"
    />
  );
}
