import type { WorkingPaper } from "@/content/papers/types";

export const modele: WorkingPaper = {
  slug: "modele",
  kind: "model",
  title: "Modèle France 2040",
  lang: "fr",
  summary:
    "Phase 2 : modèle tagué qui produit le résultat de simulation. Succède au tableur v0.1, sans le modifier. Ce n’est pas une prévision.",
  currentVersionId: "2026-10-03",
  attachments: [
    {
      href: "/sources/modele-phase-2-2026-10-03.xlsx",
      label: "Classeur Phase 2 (cette version)",
    },
    {
      href: "/sources/modele-france-2040-v0.1.xlsx",
      label: "Tableur exploratoire v0.1 (2026-09-28)",
    },
  ],
  versions: [
    {
      id: "2026-09-28",
      published: "2026-09-28",
      status: "superseded",
      verdict: "Exploratoire. Ce n’est pas une prévision.",
      file: "content/papers/modele/v2026-09-28.md",
      sha256: "7635ed4db538913dceab714fdb6b8bcced70dcb7faee72e3a81697cee9e9f92c",
      note: "Première version publique. Tableur 0,65 × 0,35 et dette nominale constante. Remplacée comme version actuelle par la Phase 2 ; les octets restent.",
    },
    {
      id: "2026-10-03",
      published: "2026-10-03",
      status: "working-paper",
      verdict:
        "Scénarios tagués — pas une prévision. Ne clôt aucune épreuve. Produit le résultat de simulation Phase 2. N’est pas le brouillon V2 du Pacte.",
      file: "content/papers/modele/v2026-10-03.md",
      sha256: "48f0ca7c5d4e7c0f4c3ee0a7ecc2be5cb01ebe2f6b5bef3f41489566d2bc987c",
      note: "Deuxième version publique. Identités Phase 2. v0.1 inchangé.",
    },
  ],
  progress: [
    { id: "tags", label: "Tags O / S / Σ / ƒ", state: "En place" },
    { id: "path", label: "Chemin dette 2027–2040", state: "ƒ, scénario" },
    { id: "alloc", label: "Allocations nommées", state: "Σ" },
    { id: "vol", label: "Volume France (EC-03)", state: "Coefficients temporaires" },
    { id: "rec", label: "Recettes (EC-06)", state: "Coefficients temporaires" },
    { id: "capital", label: "Capital et économies récurrentes", state: "Vide" },
  ],
  sources: [
    {
      id: "sheet-p2",
      citation: "Classeur France 2040 Phase 2, 3 octobre 2026.",
      href: "/sources/modele-phase-2-2026-10-03.xlsx",
    },
    {
      id: "sheet-v01",
      citation: "Classeur France 2040 v0.1, 28 septembre 2026. Version antérieure.",
      href: "/sources/modele-france-2040-v0.1.xlsx",
    },
    {
      id: "result",
      citation: "Résultat de simulation Phase 2 — Que change le Pacte ?",
      href: "/documents/modele/phase-2",
    },
  ],
};
