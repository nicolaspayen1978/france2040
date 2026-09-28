export type DocumentKind = "note" | "rapport" | "cadre";

export type PolicyDocument = {
  slug: string;
  title: string;
  /** Calendar date, YYYY-MM-DD. Shown in French on the site. */
  date: string;
  kind: DocumentKind;
  /** English. Shown under the title in the list and on the document page. */
  summary: string;
  /** English body, one string per paragraph. */
  paragraphs: string[];
};

/**
 * Key documents. Titles, summaries, and paragraphs stay in English.
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
