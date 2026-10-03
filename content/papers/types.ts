export type PaperKind = "proposition" | "working-paper" | "red-team" | "model" | "simulation-result";

export type DocumentStatus = "working-paper" | "under-review" | "frozen" | "superseded";

/** A display treatment; it never changes the immutable snapshot text. */
export type PaperPresentation = "prose" | "dialogue";

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
  /** Public reading path. Defaults to `/documents/${slug}`. */
  publicPath?: string;
  kind?: PaperKind;
  /** Overrides the documents-index kicker (kind label). */
  listKicker?: string;
  title: string;
  lang: "fr" | "en";
  /** Defaults to the standard document treatment. */
  presentation?: PaperPresentation;
  summary: string;
  currentVersionId: string;
  versions: PaperVersion[];
  progress: PaperProgress[];
  sources: PaperSource[];
  attachments?: PaperAttachment[];
};
