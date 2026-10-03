import { formatDate } from "@/lib/documents";
import { getWorkingPapers, paperKindLabel, paperPath } from "@/lib/papers";

export type Publication = {
  href: string;
  title: string;
  version: string;
  date: string;
  summary: string;
};

export const publications: Publication[] = getWorkingPapers().map((paper) => {
  return {
    href: paperPath(paper),
    title: paper.title,
    version: paper.listKicker ?? paperKindLabel(paper),
    date: formatDate(paper.currentVersionId),
    summary: paper.summary,
  };
});
