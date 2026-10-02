import type { Visual } from "@/content/visuals/types";

export const financementRetraites: Visual = {
  slug: "financement-retraites",
  title: "Financement des retraites",
  lang: "fr",
  summary:
    "Solde du système de retraite COR : −0,1 % du PIB en 2024, −0,2 % en 2030, −1,4 % en 2070. Besoin persistant ; pas l’effet du Pacte.",
  shows:
    "Dans le scénario de référence du COR (juin 2025), le solde du système de retraite est de −0,1 % du PIB en 2024 (−1,7 Md€), −0,2 % en 2030 (−6,6 Md€ courants) et −1,4 % en 2070. Les dépenses passent de 13,9 % à 14,2 % du PIB ; les ressources de 13,9 % à 12,8 %.",
  doesNotEstablish:
    "Ce n’est pas le déficit public au sens Maastricht. Le graphique n’établit pas que le Pacte comble le besoin de financement des retraites. Pas de ventilation régime par régime.",
  nature: "donnee",
  natureNote:
    "Rapport annuel COR juin 2025, cité via contexte-demographique v2026-10-02. Hors charges et produits financiers.",
  units: "% du PIB ; Md€ pour 2024 et 2030",
  asOf: "COR juin 2025 · lecture 2 octobre 2026",
  provenance:
    "Conseil d’orientation des retraites, rapport annuel juin 2025. Lecture : note contexte-demographique, version 2026-10-02.",
  citations: [
    {
      href: "/documents/contexte-demographique/v/2026-10-02",
      label: "Contexte démographique et financement des retraites (2026-10-02)",
    },
  ],
  currentVersionId: "2026-10-02",
  versions: [
    {
      id: "2026-10-02",
      published: "2026-10-02",
      status: "working",
      figure: "content/visuals/financement-retraites/v2026-10-02.svg",
      sha256: "7cabab960c055dac165a3bb64ad0b09e11f6ca9b035259da9c6a63ccfa39c8db",
      note: "Première version. Soldes 2024 / 2030 / 2070 et écart dépenses–ressources.",
    },
  ],
};
