import { formatDate } from "@/lib/documents";
import { getWorkingPapers, statusLabel } from "@/lib/papers";

export type Publication = {
  href: string;
  title: string;
  version: string;
  date: string;
  summary: string;
};

export const publications: Publication[] = getWorkingPapers().map((paper) => {
  const current = paper.versions.find((version) => version.id === paper.currentVersionId);

  return {
    href: `/documents/${paper.slug}`,
    title: paper.title,
    version: current ? statusLabel(current.status) : "Document de travail",
    date: formatDate(paper.currentVersionId),
    summary: paper.summary,
  };
});
