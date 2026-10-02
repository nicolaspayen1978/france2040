import type { WorkingPaper } from "@/content/papers/types";

/**
 * Short public context note for En images « Le problème ».
 * Do not edit a published snapshot. Publish a new version instead.
 */
export const contexteDemographique: WorkingPaper = {
  slug: "contexte-demographique",
  title: "Contexte démographique et financement des retraites",
  lang: "fr",
  summary:
    "Séries Insee (projections 2021–2070) et COR (juin 2025) pour situer la fenêtre 2027–2040. Contexte établi à partir des sources ; le Pacte n’y est pas démontré.",
  currentVersionId: "2026-10-02",
  versions: [
    {
      id: "2026-10-02",
      published: "2026-10-02",
      status: "working-paper",
      verdict:
        "Contexte établi à partir des sources citées. Les cellules absentes restent vides. Le lien au Pacte reste une lecture, pas un résultat",
      file: "content/papers/contexte-demographique/v2026-10-02.md",
      sha256: "a365ac08d072423f36285e4d085edb9a3001df79b1c662d6f0120bb642994c7b",
      note: "Première version publique. Tableaux Insee Première 1881 et COR juin 2025 pour les En images B→A→C.",
    },
  ],
  progress: [
    {
      id: "insee-dependency",
      label: "Rapport de dépendance démographique",
      state: "37 (2021) → 51 (2040) · Insee Première 1881",
    },
    {
      id: "insee-share65",
      label: "Part des 65 ans ou plus",
      state: "21 % (2021) → 29 % (2070) · scénario central",
    },
    {
      id: "cor-balance",
      label: "Solde / besoin de financement retraites",
      state: "2024 −0,1 % PIB · 2030 −0,2 % · 2070 −1,4 % · COR juin 2025",
    },
    {
      id: "employment-split",
      label: "Emploi / chômage croisé à l’âge",
      state: "Vide — hors sources de cette note",
    },
    {
      id: "pacte-link",
      label: "Lien au mécanisme du Pacte",
      state: "Lecture · non démontré",
    },
  ],
  sources: [
    {
      id: "insee-1881",
      citation:
        "Insee Première n° 1881, 29 novembre 2021. 68,1 millions d’habitants en 2070 : projections de population 2021–2070 pour la France. Part des 65 ans ou plus : 21 % (2021) → 29 % (2070). Rapport de dépendance : 37 (2021) → 51 (2040) pour 100 personnes de 20 à 64 ans.",
      href: "https://www.insee.fr/fr/statistiques/5893969",
    },
    {
      id: "cor-2025",
      citation:
        "Conseil d’orientation des retraites, Évolutions et perspectives des retraites en France, rapport annuel, juin 2025. Solde 2024 : −1,7 Md€ (−0,1 % du PIB). 2030 : −0,2 % du PIB (−6,6 Md€ courants). 2070 : −1,4 % du PIB. Dépenses 13,9 % → 14,2 % ; ressources 13,9 % → 12,8 %.",
      href: "https://www.cor-retraites.fr/rapports-du-cor/rapport-annuel-cor-juin-2025-evolutions-perspectives-retraites-france",
    },
  ],
};
