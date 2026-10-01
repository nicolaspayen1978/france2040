import type { WorkingPaper } from "@/content/papers/types";

export const pacte: WorkingPaper = {
  slug: "pacte",
  title: "Le Pacte du bilan français",
  lang: "fr",
  summary:
    "Brouillon public. Mobiliser une seule fois une fraction du patrimoine privé, de 2027 à 2040. Hypothèse, non un programme arrêté.",
  currentVersionId: "2026-09-28",
  versions: [
    {
      id: "2026-09-28",
      published: "2026-09-28",
      status: "working-paper",
      verdict: "Hypothèse, non un programme arrêté.",
      file: "content/papers/pacte/v2026-09-28.md",
      sha256: "41a752b2dcf2afec4cb0a5606ba3a96c7173005891d8948cc87189cbb0fdb9b6",
      note: "Première version publique du brouillon. Le texte long de référence est la V2, à une autre adresse.",
    },
  ],
  progress: [
    { id: "draft", label: "Brouillon", state: "Publié pour être éprouvé" },
    { id: "reference", label: "Texte long", state: "V2, document séparé" },
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
  ],
};
