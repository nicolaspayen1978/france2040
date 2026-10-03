import type { WorkingPaper } from "@/content/papers/types";

export const expliqueMoiLePacte: WorkingPaper = {
  slug: "explique-moi-le-pacte",
  kind: "working-paper",
  listKicker: "Lecture",
  title: "Explique-moi le Pacte",
  lang: "fr",
  presentation: "dialogue",
  summary:
    "J’ai 6 ans aujourd’hui. J’aurai 20 ans en 2040. Une lecture du Pacte : patrimoine enfermé dans les murs, liquidité contre une dette différée, enveloppe de 700 Md€, rythme conditionnel, test de 2040.",
  currentVersionId: "2026-10-03",
  versions: [
    {
      id: "2026-10-03",
      published: "2026-10-03",
      status: "working-paper",
      verdict: "Lecture. Ce n’est pas une prévision. Le pari reste à tester.",
      file: "content/papers/explique-moi-le-pacte/v2026-10-03.md",
      sha256: "0c52800a9eabafd0964d4c0ad8a4e9a51fc588e75af83bfe749400612ffc5259",
      note: "Texte d’entrée, avant le résumé exécutif. 700 Md€ = enveloppe, pas un objectif.",
    },
  ],
  progress: [
    { id: "lecture", label: "Lecture", state: "Publiée" },
    { id: "preuve", label: "Le pari tient-il ?", state: "Ouvert" },
  ],
  sources: [
    {
      id: "pacte",
      citation: "Le Pacte du bilan français — texte de référence.",
      href: "/documents/pacte",
    },
    {
      id: "resume",
      citation: "Résumé exécutif, version actuelle.",
      href: "/documents/resume-executif",
    },
    {
      id: "phase2",
      citation: "Résultat de simulation Phase 2. Scénario central : dépense supplémentaire 315 Md€.",
      href: "/documents/modele/phase-2",
    },
    {
      id: "intensite",
      citation: "Intensité du bilan résidentiel. 700 / 8 850 ≈ 8 %.",
      href: "/documents/intensite-bilan-residentiel",
    },
  ],
};
