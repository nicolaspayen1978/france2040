import type { Visual } from "@/content/visuals/types";

export const demographie20272040: Visual = {
  slug: "demographie-2027-2040",
  title: "Démographie 2027–2040",
  lang: "fr",
  summary:
    "Part des 65 ans ou plus : 21 % en 2021, 26 % en 2040, 29 % en 2070. Fenêtre 2027–2040 marquée ; vieillissement jusqu’en 2040 quasi certain selon l’Insee.",
  shows:
    "La part des 65 ans ou plus passe de 21 % en 2021 à 26 % en 2040, puis 29 % en 2070 (scénario central Insee). D’ici 2070 : environ +5,7 millions de personnes de 75 ans ou plus, −5,0 millions de moins de 60 ans. Jusqu’en 2040, le vieillissement est quasi certain selon l’Insee.",
  doesNotEstablish:
    "Ce n’est pas une prévision France2040. Le graphique n’établit pas que le Pacte corrige le vieillissement.",
  nature: "donnee",
  natureNote:
    "Projection officielle Insee Première 1881, citée via contexte-demographique v2026-10-02-2.",
  units: "% de la population (part 65+) ; millions de personnes (variations 2070)",
  asOf: "Projections Insee 2021–2070 · lecture 2 octobre 2026",
  provenance:
    "Insee Première n° 1881, 29 novembre 2021. Lecture : note contexte-demographique, version 2026-10-02-2.",
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
      figure: "content/visuals/demographie-2027-2040/v2026-10-02.svg",
      sha256: "ba00bf0d7634aa6fc6abdd27e385568e886889848e36184b0460355030a5e528",
      note: "Première version. Remplacée : 26 % en 2040 manquant sur la figure.",
    },
    {
      id: "2026-10-02-2",
      published: "2026-10-02",
      status: "working",
      figure: "content/visuals/demographie-2027-2040/v2026-10-02-2.svg",
      sha256: "842ecbde0910e9796998b4551b9efd4d0c9f7d99cd5442c312f6393dae3e18b3",
      note: "Point 2040 : 26 %. Chronologie 21 % → 26 % → 29 %.",
    },
  ],
};
