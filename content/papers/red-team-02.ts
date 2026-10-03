import type { WorkingPaper } from "@/content/papers/types";

export const redTeam02: WorkingPaper = {
  slug: "red-team-02",
  title: "Épreuve contradictoire EC-02 — Transformation du crédit en dépense",
  lang: "fr",
  summary:
    "Que font les ménages de l’euro tiré ? Verdict : non tranché. Un tirage n’est pas une demande ; le scalaire 25 / 50 / 75 % n’est pas un panier d’usages.",
  currentVersionId: "2026-10-03",
  versions: [
    {
      id: "2026-09-28",
      published: "2026-09-28",
      status: "superseded",
      verdict: "Passé au sens étroit. La transmission n’est pas démontrée.",
      file: "content/papers/red-team-02/v2026-09-28.md",
      sha256: "019f4afb8d77476ca305e605ad10d293fa447c1d1d48ee35e5d64c45bb44725b",
      note: "Première version. Effet richesse ≠ canal de liquidité. Sondes 25 / 50 / 75 % encore un scalaire. Remplacée.",
    },
    {
      id: "2026-10-03",
      published: "2026-10-03",
      status: "working-paper",
      verdict:
        "Non tranché. Le coefficient unique est remplacé par un vecteur d’usages ; les parts restent vides.",
      file: "content/papers/red-team-02/v2026-10-03.md",
      sha256: "264ddbefba9dea3e33fefdbefb9ac1523f973f562f25f9dd57165ca2b3e0de3c",
      note: "Identité d’allocation. Dépense supplémentaire = rénovation + consommation + investissement productif nouveau. 25 / 50 / 75 % ne sont plus un cas. UK en contre-épreuve, pas en prior. Suite : EC-03.",
    },
  ],
  progress: [
    { id: "narrow", label: "Test étroit (effet richesse)", state: "Passé — ne tue pas" },
    { id: "vector", label: "Vecteur d’usages", state: "Posé ; parts vides" },
    { id: "spend", label: "Dépense supplémentaire", state: "Non démontrée" },
    { id: "gdp", label: "Production française", state: "Renvoyée à EC-03" },
    { id: "cells", label: "Parts du vecteur dans le modèle", state: "Vides" },
  ],
  sources: [
    {
      id: "arrondel",
      citation:
        "Arrondel, Lamarche et Savignac, Économie et Statistique n° 472-473, 2014. Effet de richesse, pas le canal du Pacte.",
    },
    {
      id: "insee-focus-371",
      citation:
        "Insee, Focus n° 371, enquête Histoire de vie et Patrimoine 2023-2024. Ménages 50–79 ans : 50 % des ménages, 61 % du patrimoine brut ; 10 % les mieux dotés : 48 % de la masse.",
      href: "https://www.insee.fr/fr/statistiques/8672665",
    },
    {
      id: "causa-oecd-1588",
      citation:
        "Causa, Woloszko et Leite, OECD Economics Department Working Paper n° 1588, 16 décembre 2019, figure 16 (HFCS). Usages du collatéral hors achat/rénovation de la résidence : souvent autre immobilier ; activité professionnelle fréquente en France. Pas un programme de mobilisation du capital immobilier net.",
      href: "https://doi.org/10.1787/86954c10-en",
    },
    {
      id: "boe-qb-2004-q3",
      citation:
        "Banque d’Angleterre, Quarterly Bulletin T3 2004 (Benito et Power). L’essentiel des retraits bruts n’est pas consommé à court terme ; parmi ceux qui dépensent, les travaux dominent. Contre-épreuve, pas une preuve pour le Pacte.",
      href: "https://www.bankofengland.co.uk/quarterly-bulletin/2004/q3/housing-equity-and-consumption-insights-from-the-survey-of-english-housing",
    },
    {
      id: "benito-boe-381",
      citation:
        "Benito, Housing equity as a buffer, Bank of England Working Paper n° 381, 2007. Motif dominant déclaré : amélioration du logement (investissement, pas consommation). Contre-épreuve.",
      href: "https://www.bankofengland.co.uk/working-paper/2007/housing-equity-as-a-buffer-evidence-from-uk-households",
    },
  ],
};
