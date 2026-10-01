export type DocumentStatus = "working-paper" | "under-review" | "frozen" | "superseded";

export type PaperVersion = {
  id: string;
  published: string;
  status: DocumentStatus;
  verdict: string;
  /** Immutable snapshot. A revision is a new file and a new hash. */
  file: string;
  sha256: string;
  note: string;
};

export type PaperSource = {
  id: string;
  citation: string;
  href?: string;
};

export type PaperProgress = {
  id: string;
  label: string;
  state: string;
};

export type PaperAttachment = {
  href: string;
  label: string;
};

export type WorkingPaper = {
  slug: string;
  title: string;
  lang: "fr" | "en";
  summary: string;
  currentVersionId: string;
  versions: PaperVersion[];
  progress: PaperProgress[];
  sources: PaperSource[];
  attachments?: PaperAttachment[];
};
