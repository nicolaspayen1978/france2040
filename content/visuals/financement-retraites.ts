import type { Visual } from "@/content/visuals/types";

export const financementRetraites: Visual = {
  slug: "financement-retraites",
  title: "Financement des retraites",
  lang: "fr",
  summary:
    "Solde COR : −0,1 % du PIB en 2024, −0,2 % en 2030, −1,4 % en 2070. Cour : ~30 Md€ en 2045. Solde COR 2040 en % : non publié.",
  shows:
    "Dans le scénario de référence du COR (juin 2025), le solde du système de retraite est de −0,1 % du PIB en 2024 (−1,7 Md€), −0,2 % en 2030 (−6,6 Md€ courants) et −1,4 % en 2070. Les dépenses passent de 13,9 % à 14,2 % du PIB ; les ressources de 13,9 % à 12,8 %. La Cour des comptes (février 2025) situe le déficit autour de 30 Md€ (hors inflation) en 2045 ; la synthèse COR indique un solde quasiment identique à la Cour en 2030 et 2045. Aucun solde COR isolé en % du PIB n’est publié pour 2040 dans la synthèse.",
  doesNotEstablish:
    "Ce n’est pas le déficit public au sens Maastricht. Le graphique n’établit pas que le Pacte comble le besoin de financement des retraites. Pas de ventilation régime par régime. Pas de conversion du ~30 Md€ 2045 en % du PIB.",
  nature: "donnee",
  natureNote:
    "COR juin 2025 et Cour des comptes février 2025, cités via contexte-demographique v2026-10-02-2. Hors charges et produits financiers (COR).",
  units: "% du PIB (COR) ; Md€ (Cour 2045)",
  asOf: "COR juin 2025 · Cour février 2025 · lecture 2 octobre 2026",
  provenance:
    "Conseil d’orientation des retraites, rapport annuel juin 2025 ; Cour des comptes, mission flash février 2025. Lecture : note contexte-demographique, version 2026-10-02-2.",
  citations: [
    {
      href: "/documents/contexte-demographique/v/2026-10-02-2",
      label: "Contexte démographique et financement des retraites (2026-10-02-2)",
    },
  ],
  currentVersionId: "2026-10-02-2",
  versions: [
    {
      id: "2026-10-02",
      published: "2026-10-02",
      status: "superseded",
      figure: "content/visuals/financement-retraites/v2026-10-02.svg",
      sha256: "7cabab960c055dac165a3bb64ad0b09e11f6ca9b035259da9c6a63ccfa39c8db",
      note: "Première version. Remplacée : horizon fenêtre (2045 Cour) et cellule 2040 explicite.",
    },
    {
      id: "2026-10-02-2",
      published: "2026-10-02",
      status: "working",
      figure: "content/visuals/financement-retraites/v2026-10-02-2.svg",
      sha256: "ad730783d51ebc17bf40bb6d22fff24d9db142051731f7163bb95b0b9224824c",
      note: "Ajoute ~30 Md€ 2045 (Cour). Marque 2040 % PIB comme vide. Conserve COR 2024/2030/2070.",
    },
  ],
};
