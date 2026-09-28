import { documents, type DocumentKind, type PolicyDocument } from "@/content/documents";

const kindLabels: Record<DocumentKind, string> = {
  note: "Note",
  rapport: "Rapport",
  cadre: "Cadre",
};

export function getDocuments(): PolicyDocument[] {
  return [...documents].sort((a, b) => b.date.localeCompare(a.date));
}

export function getDocument(slug: string): PolicyDocument | undefined {
  return documents.find((document) => document.slug === slug);
}

export function kindLabel(kind: DocumentKind): string {
  return kindLabels[kind];
}

export function formatDate(isoDate: string): string {
  const [year, month, day] = isoDate.split("-").map(Number);
  return new Intl.DateTimeFormat("fr-FR", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  }).format(new Date(Date.UTC(year, month - 1, day)));
}
