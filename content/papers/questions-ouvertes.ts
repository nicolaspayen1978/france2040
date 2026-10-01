import type { WorkingPaper } from "@/content/papers/types";

export const questionsOuvertes: WorkingPaper = {
  slug: "questions-ouvertes",
  title: "Questions ouvertes",
  lang: "fr",
  summary:
    "Ce qui reste à établir. Les faits sourcés sont séparés des affirmations qui ne doivent pas être présentées comme telles.",
  currentVersionId: "2026-09-28",
  versions: [
    {
      id: "2026-09-28",
      published: "2026-09-28",
      status: "working-paper",
      verdict: "Liste ouverte. Ce n’est pas encore un dossier de preuves.",
      file: "content/papers/questions-ouvertes/v2026-09-28.md",
      sha256: "61594bab2722d4a86f36ab0888ad2216c46088a5214f46478c30ce1b9eb618fe",
      note: "Première version publique de la liste. Chaque point reste à trancher par une source, ou à abandonner.",
    },
  ],
  progress: [
    { id: "stock", label: "Stock national de logements", state: "Ne tue pas l’hypothèse" },
    { id: "borrower", label: "Distribution des emprunteurs", state: "Non établie" },
    { id: "rules", label: "Compatibilité réglementaire", state: "Non établie" },
    { id: "spend", label: "Crédit vers dépense, puis PIB", state: "Non établi" },
    { id: "cliff", label: "Falaise de 2040", state: "Non tranchée" },
    { id: "funding", label: "Financement de l’actif", state: "Ouvert" },
  ],
  sources: [
    {
      id: "insee-pib",
      citation: "Insee, comptes nationaux 2025.",
      href: "https://www.insee.fr/fr/statistiques/8988793",
    },
    {
      id: "insee-fp",
      citation: "Insee, finances publiques 2025.",
      href: "https://www.insee.fr/fr/statistiques/8956575",
    },
    {
      id: "insee-wealth",
      citation: "Insee et Banque de France, patrimoine national 2024.",
      href: "https://www.insee.fr/fr/statistiques/8661938",
    },
    {
      id: "insee-housing",
      citation: "Insee, conditions de logement début 2024.",
      href: "https://www.insee.fr/fr/statistiques/8727513",
    },
    {
      id: "hcsf",
      citation: "HCSF, décision du 29 septembre 2021.",
      href: "https://www.economie.gouv.fr/hcsf/mesures/mesure-relative-loctroi-de-credits-immobiliers",
    },
    {
      id: "bdf",
      citation: "Banque de France, crédits aux particuliers, juillet 2026.",
      href: "https://www.banque-france.fr/fr/statistiques/credit/credits-aux-particuliers-2026-07",
    },
  ],
};
