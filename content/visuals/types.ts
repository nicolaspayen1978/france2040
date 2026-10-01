export type VisualStatus = "working" | "frozen" | "superseded";

export type VisualNature = "donnee" | "simulation" | "schema";

export type VisualCitation = {
  href: string;
  label: string;
};

export type VisualVersion = {
  id: string;
  published: string;
  status: VisualStatus;
  /** Immutable figure bytes. A revision is a new file and a new hash. */
  figure: string;
  sha256: string;
  note: string;
};

export type Visual = {
  slug: string;
  title: string;
  lang: "fr";
  summary: string;
  shows: string;
  doesNotEstablish: string;
  nature: VisualNature;
  /** Secondary nature note when the figure mixes schéma and observed strip. */
  natureNote?: string;
  units: string;
  asOf: string;
  provenance: string;
  citations: VisualCitation[];
  currentVersionId: string;
  versions: VisualVersion[];
};
