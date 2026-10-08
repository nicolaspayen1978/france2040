import type { WorkingPaper } from "@/content/papers/types";

export const pacte: WorkingPaper = {
  slug: "pacte",
  listKicker: "Proposition · texte de référence",
  title: "Le Pacte du bilan français",
  lang: "fr",
  summary:
    "Texte de référence de la proposition. Fenêtre 2027–2040 : enveloppe 700 Md€, rythme conditionnel, usages selon leurs qualités. Hypothèse, non un programme arrêté.",
  currentVersionId: "2026-10-08",
  versions: [
    {
      id: "2026-09-28",
      published: "2026-09-28",
      status: "superseded",
      verdict: "Hypothèse, non un programme arrêté.",
      file: "content/papers/pacte/v2026-09-28.md",
      sha256: "41a752b2dcf2afec4cb0a5606ba3a96c7173005891d8948cc87189cbb0fdb9b6",
      note: "Première formulation publique — remplacée par Le Pacte (version actuelle). Conservée pour traçabilité.",
    },
    {
      id: "2026-10-03",
      published: "2026-10-03",
      status: "superseded",
      verdict: "Hypothèse, non un programme arrêté.",
      file: "content/papers/pacte/v2026-10-03.md",
      sha256: "0246d4b0f1e32b79ef51233ac45ab260b1d6d2a9984513e80276cf5603b630ca",
      note: "Plafond de la part à intérêts seuls, pas le LTV consolidé. 700 Md€ = origination. Usages par qualités.",
    },
    {
      id: "2026-10-03-2",
      published: "2026-10-03",
      status: "superseded",
      verdict: "Hypothèse, non un programme arrêté.",
      file: "content/papers/pacte/v2026-10-03-2.md",
      sha256: "fc3c5e0e963ab0a56e9a9d09022bd18a4238b56629286be9fdeb9a6c80015e93",
      note: "700 Md€ = enveloppe. Trajectoire indicative, règle de suivi liante.",
    },
    {
      id: "2026-10-03-3",
      published: "2026-10-03",
      status: "superseded",
      verdict: "Hypothèse, non un programme arrêté.",
      file: "content/papers/pacte/v2026-10-03-3.md",
      sha256: "8b707d5371e7f767673c40d36dba47a96a1761f3241056e71f47d51667c3aab0",
      note: "Texte de référence de la proposition. La V2 n’est plus présentée comme le texte canonique.",
    },
    {
      id: "2026-10-08",
      published: "2026-10-08",
      status: "working-paper",
      verdict: "Hypothèse, non un programme arrêté.",
      file: "content/papers/pacte/v2026-10-08.md",
      sha256: "a745312ede42d2d11c573457b203e7b600e0ee5db4f974c26f78e9802d0dd940",
      note: "La part à intérêts seuls est le mécanisme nouveau ; un prêt amortissable peut coexister sans être requis. Plafond de la part et dette totale distingués.",
    },
  ],
  progress: [
    { id: "canon", label: "Texte de référence", state: "Version actuelle" },
    { id: "tranche", label: "Part à intérêts seuls", state: "Plafond 40 % / 50 %" },
    { id: "pace", label: "Rythme", state: "Conditionnel ; suivi liant" },
    { id: "usages", label: "Usages", state: "Qualités, pas une liste de secteurs" },
    { id: "long", label: "Élaboration V2", state: "Document séparé, non canonique" },
    { id: "programme", label: "Programme arrêté", state: "Non" },
  ],
  sources: [
    {
      id: "insee-pib",
      citation: "Insee, comptes nationaux 2025. PIB : 2 991,1 Md€. Croissance réelle : 0,8 %.",
      href: "https://www.insee.fr/fr/statistiques/8988793",
    },
    {
      id: "insee-fp",
      citation: "Insee, finances publiques 2025. Déficit : 5,1 % du PIB. Dette : 115,6 % du PIB.",
      href: "https://www.insee.fr/fr/statistiques/8956575",
    },
    {
      id: "insee-wealth",
      citation: "Insee et Banque de France, patrimoine national 2024. Ménages : 14 953 Md€.",
      href: "https://www.insee.fr/fr/statistiques/8661938",
    },
    {
      id: "bdf-credit",
      citation: "Banque de France, crédits aux particuliers, juillet 2026. 99,4 % à taux fixe.",
      href: "https://www.banque-france.fr/fr/statistiques/credit/credits-aux-particuliers-2026-07",
    },
    {
      id: "ec08",
      citation: "Épreuve contradictoire EC-08. Le plafond de la part n’est pas le ratio consolidé.",
      href: "/documents/red-team-08/v/2026-10-03",
    },
  ],
};
