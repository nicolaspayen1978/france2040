export type DocumentKind = "note" | "rapport" | "cadre";

export type PolicyDocument = {
  slug: string;
  title: string;
  /** Calendar date, YYYY-MM-DD. Shown in French on the site. */
  date: string;
  kind: DocumentKind;
  /** Shown under the title. Kept in the language of the source document. */
  summary: string;
  /** Body, one string per paragraph, in the language of the source document. */
  paragraphs: string[];
};

/**
 * Key documents, in the language they were written. The flagship reference is the French V2.
 * The surrounding site (navigation, labels, dates) is French.
 *
 * Example:
 * {
 *   slug: "strategic-note",
 *   title: "Strategic Note",
 *   date: "2026-09-28",
 *   kind: "note",
 *   summary: "One sentence in English.",
 *   paragraphs: ["First paragraph in English."],
 * }
 */
export const documents: PolicyDocument[] = [];
