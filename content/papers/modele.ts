import type { WorkingPaper } from "@/content/papers/types";

export const modele: WorkingPaper = {
  slug: "modele",
  title: "Modèle France 2040",
  lang: "fr",
  summary: "Tableur exploratoire v0.1. Les hypothèses sont modifiables. Ce n’est pas une prévision.",
  currentVersionId: "2026-09-28",
  attachments: [
    {
      href: "/sources/modele-france-2040-v0.1.xlsx",
      label: "Télécharger le tableur v0.1",
    },
  ],
  versions: [
    {
      id: "2026-09-28",
      published: "2026-09-28",
      status: "working-paper",
      verdict: "Exploratoire. Ce n’est pas une prévision.",
      file: "content/papers/modele/v2026-09-28.md",
      sha256: "7635ed4db538913dceab714fdb6b8bcced70dcb7faee72e3a81697cee9e9f92c",
      note: "Première version publique. Le tableur est la pièce jointe. Les cellules vides restent vides.",
    },
  ],
  progress: [
    { id: "product", label: "0,65 × 0,35", state: "Saisie, non testée" },
    { id: "probes", label: "Sondes 25 / 50 / 75 %", state: "Posées, pas un cas central" },
    { id: "french", label: "Part française", state: "Vide" },
    { id: "minimum", label: "Transmission minimum", state: "Vide" },
    { id: "success", label: "Critère de succès", state: "Non défini" },
  ],
  sources: [
    {
      id: "sheet",
      citation: "Classeur France 2040 v0.1, feuille Conversion probes. Les sondes ne mesurent pas le PIB français.",
    },
  ],
};
