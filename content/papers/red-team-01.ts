import type { WorkingPaper } from "@/content/papers/types";

export const redTeam01: WorkingPaper = {
  slug: "red-team-01",
  title: "Épreuve contradictoire EC-01 — Le stock d’équité immobilière mobilisable est-il suffisant ?",
  lang: "fr",
  summary:
    "500 à 700 Md€ de part à intérêts seuls peuvent-ils être tirés de l’équité immobilière française à 40–50 % de ratio prêt sur valeur ? L’objection du collatéral agrégé a résisté. La capacité de l’emprunteur et la réglementation, non.",
  currentVersionId: "2026-10-01",
  versions: [
    {
      id: "2026-09-28",
      published: "2026-09-28",
      status: "superseded",
      verdict:
        "Objection du collatéral agrégé : elle a résisté. Capacité de l’emprunteur et compatibilité réglementaire : non tranchées.",
      file: "content/papers/red-team-01/v2026-09-28.md",
      sha256: "97d75e0589c53e543194a1273a78d764e8598c72154e96bc11d5c38fbf541026",
      note: "Première version publique, en français. La note de travail reste en anglais. 700 Md€ restent une saisie de scénario. Le chemin n’est pas révisé.",
    },
    {
      id: "2026-10-01",
      published: "2026-10-01",
      status: "working-paper",
      verdict: "Objection du collatéral agrégé : elle a résisté. Capacité de l’emprunteur et compatibilité réglementaire : non tranchées.",
      file: "content/papers/red-team-01/v2026-10-01.md",
      sha256: "53118377a7d07dff52ad90586ba5dbc17bf3d65e38c9703aecccc141703f082c",
      note: "Définition gelée : 700 Md€ = encours de la part à intérêts seuls. Arithmétique du résidu inchangée.",
    },
  ],
  progress: [
    { id: "collateral", label: "Collatéral agrégé", state: "A résisté" },
    { id: "borrower", label: "Capacité de l’emprunteur", state: "Non tranchée" },
    { id: "rules", label: "Compatibilité réglementaire", state: "Non tranchée, potentiellement contraignante" },
    { id: "path", label: "700 Md€", state: "Part à intérêts seuls, saisie de scénario" },
  ],
  sources: [
    {
      id: "insee-2081",
      citation: "Insee et Banque de France, Insee Première n° 2081, 6 novembre 2025. Bilan national fin 2024.",
    },
  ],
};
