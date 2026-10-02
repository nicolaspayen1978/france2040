import type { Visual } from "@/content/visuals/types";

export const retraitesVsActifs: Visual = {
  slug: "retraites-vs-actifs",
  title: "Dépendance démographique",
  lang: "fr",
  summary:
    "65 ans ou plus pour 100 personnes de 20 à 64 ans : 37 en 2021, 51 en 2040. Rapport d’âge Insee, pas un compte d’emploi.",
  shows:
    "Le rapport de dépendance démographique (65 ans ou plus pour 100 personnes de 20 à 64 ans) passe de 37 en 2021 à 51 en 2040 dans le scénario central Insee. La fourchette 2040 selon les scénarios est d’environ 48 à 53.",
  doesNotEstablish:
    "Ce n’est pas « retraités vs employés ». Les 20–64 ans ne sont pas tous en emploi ; les 65 ans ou plus ne sont pas tous retraités. Le graphique n’établit pas d’écart fiscal, ni que le Pacte le comble.",
  nature: "donnee",
  natureNote:
    "Projection officielle Insee Première 1881, citée via contexte-demographique v2026-10-02. Emploi / chômage : cellule vide.",
  units: "Personnes de 65 ans ou plus pour 100 personnes de 20 à 64 ans",
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
      figure: "content/visuals/retraites-vs-actifs/v2026-10-02.svg",
      sha256: "269fb3a7a2a4c4ea785a5a146676a56757c5d7b40623949dcba0414e1087ff0b",
      note: "Première version. Dépendance démographique 37 → 51 ; anti-lecture emploi explicite.",
    },
  ],
};
