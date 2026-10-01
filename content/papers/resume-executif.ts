import type { WorkingPaper } from "@/content/papers/types";

export const resumeExecutif: WorkingPaper = {
  slug: "resume-executif",
  title: "Résumé exécutif",
  lang: "fr",
  summary:
    "La proposition du Pacte, et les chiffres qui la situent. Hypothèse, non un programme arrêté.",
  currentVersionId: "2026-10-01",
  versions: [
    {
      id: "2026-10-01",
      published: "2026-10-01",
      status: "working-paper",
      verdict: "Hypothèse, non un programme arrêté.",
      file: "content/papers/resume-executif/v2026-10-01.md",
      sha256: "012728494e7c3278b2ea7ab84866b8d3167799f9326b4d3b78b67f510e3e42e4",
      note: "Première version publique. Les chiffres sont ceux du brouillon du 28 septembre 2026. Ce n’est pas une prévision.",
    },
  ],
  progress: [
    { id: "proposition", label: "Proposition", state: "Hypothèse" },
    { id: "scenario", label: "700 Md€", state: "Scénario à éprouver" },
    { id: "test", label: "Test de 2040", state: "Ouvert" },
  ],
  sources: [
    {
      id: "insee-pib",
      citation: "Insee, comptes nationaux 2025. PIB : 2 991,1 Md€.",
      href: "https://www.insee.fr/fr/statistiques/8988793",
    },
    {
      id: "insee-fp",
      citation: "Insee, finances publiques 2025. Déficit : 5,1 % du PIB. Dette : 115,6 % du PIB. Dépenses : 57,2 % du PIB.",
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
  ],
};
