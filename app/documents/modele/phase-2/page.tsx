import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { WorkingPaperView } from "@/components/WorkingPaperView";
import { documentMetadata } from "@/lib/paperMeta";
import { getPaperVersion, getWorkingPaper, loadPaperBlocks } from "@/lib/papers";

const SLUG = "modele-phase-2";

export async function generateMetadata(): Promise<Metadata> {
  const paper = getWorkingPaper(SLUG);
  const version = paper ? getPaperVersion(paper, paper.currentVersionId) : undefined;
  if (!paper || !version) return { title: "Document introuvable" };
  return documentMetadata(paper, version);
}

export default function ModelePhase2Page() {
  const paper = getWorkingPaper(SLUG);
  const version = paper ? getPaperVersion(paper, paper.currentVersionId) : undefined;
  if (!paper || !version) notFound();
  return (
    <WorkingPaperView
      paper={paper}
      versionId={version.id}
      blocks={loadPaperBlocks(version)}
      placement="alias"
    />
  );
}
