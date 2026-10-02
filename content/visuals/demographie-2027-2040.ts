import type { Visual } from "@/content/visuals/types";

export const demographie20272040: Visual = {
  slug: "demographie-2027-2040",
  title: "Démographie 2027–2040",
  lang: "fr",
  summary:
    "Part des 65 ans ou plus : 21 % en 2021, 29 % en 2070. Fenêtre 2027–2040 marquée ; vieillissement jusqu’en 2040 quasi certain selon l’Insee.",
  shows:
    "La part des 65 ans ou plus passe de 21 % en 2021 à 29 % en 2070 (scénario central). D’ici 2070 : environ +5,7 millions de personnes de 75 ans ou plus, −5,0 millions de moins de 60 ans. La fenêtre 2027–2040 est située sur la trajectoire où l’Insee juge le vieillissement quasi certain.",
  doesNotEstablish:
    "Ce n’est pas une prévision France2040. La part exacte des 65 ans ou plus en 2040 n’est pas publiée sur cette figure. Le graphique n’établit pas que le Pacte corrige le vieillissement.",
  nature: "donnee",
  natureNote:
    "Projection officielle Insee Première 1881, citée via contexte-demographique v2026-10-02.",
  units: "% de la population (part 65+) ; millions de personnes (variations 2070)",
  asOf: "Projections Insee 2021–2070 · lecture 2 octobre 2026",
  provenance:
    "Insee Première n° 1881, 29 novembre 2021. Lecture : note contexte-demographique, version 2026-10-02.",
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
      figure: "content/visuals/demographie-2027-2040/v2026-10-02.svg",
      sha256: "ba00bf0d7634aa6fc6abdd27e385568e886889848e36184b0460355030a5e528",
      note: "Première version. Part 65+ 21 %→29 % ; fenêtre 2027–2040 ; variations 75+ / −60.",
    },
  ],
};
