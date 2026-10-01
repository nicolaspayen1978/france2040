import type { WorkingPaper } from "@/content/papers/types";

export const redTeam01: WorkingPaper = {
  slug: "red-team-01",
  title: "Red Team 01 — Le stock d’équité immobilière mobilisable est-il suffisant ?",
  lang: "fr",
  summary:
    "500 à 700 Md€ de crédit hypothécaire peuvent-ils être tirés de l’équité immobilière française à 40–50 % de ratio prêt sur valeur ? L’objection du collatéral agrégé a résisté. La capacité de l’emprunteur et la réglementation, non.",
  currentVersionId: "2026-09-28",
  versions: [
    {
      id: "2026-09-28",
      published: "2026-09-28",
      status: "working-paper",
      verdict:
        "Objection du collatéral agrégé : elle a résisté. Capacité de l’emprunteur et compatibilité réglementaire : non tranchées.",
      file: "content/papers/red-team-01/v2026-09-28.md",
      sha256: "97d75e0589c53e543194a1273a78d764e8598c72154e96bc11d5c38fbf541026",
      note: "Première version publique, en français. La note de travail reste en anglais. 700 Md€ restent une saisie de scénario. Le chemin n’est pas révisé.",
    },
  ],
  progress: [
    { id: "collateral", label: "Collatéral agrégé", state: "A résisté" },
    { id: "borrower", label: "Capacité de l’emprunteur", state: "Non tranchée" },
    { id: "rules", label: "Compatibilité réglementaire", state: "Non tranchée, potentiellement contraignante" },
    { id: "path", label: "700 Md€", state: "Saisie de scénario, pas une estimation" },
  ],
  sources: [
    {
      id: "insee-2081",
      citation: "Insee et Banque de France, Insee Première n° 2081, 6 novembre 2025. Bilan national fin 2024.",
    },
  ],
};
