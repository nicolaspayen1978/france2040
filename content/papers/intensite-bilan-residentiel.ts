import type { WorkingPaper } from "@/content/papers/types";

export const intensiteBilanResidentiel: WorkingPaper = {
  slug: "intensite-bilan-residentiel",
  kind: "working-paper",
  listKicker: "Note de benchmark · intensité de bilan",
  title: "Intensité du bilan résidentiel",
  lang: "fr",
  summary:
    "700 Md€ ≈ 8 % de 8 850 Md€. Aux Pays-Bas, l’encours à intérêts seuls est de l’ordre de 16 % des résidences principales. 1 400 Md€ est un benchmark, pas un scénario. Les 700 Md€ restent une saisie.",
  currentVersionId: "2026-10-03",
  versions: [
    {
      id: "2026-10-03",
      published: "2026-10-03",
      status: "working-paper",
      verdict:
        "Benchmark de bilan, pas de politique. 700 Md€ restent un scénario. Les Pays-Bas ne sont pas à copier. Le 16 % néerlandais est un ordre de grandeur, millésimes à aligner.",
      file: "content/papers/intensite-bilan-residentiel/v2026-10-03.md",
      sha256: "970c73e883583fd556fa49f7762c0a5707d995fc5c7bc5c8c9fd442a258f37d9",
      note: "8 % vs ≈ 16 %. 1 400 Md€ = échelle externe. Figure En images.",
    },
  ],
  progress: [
    { id: "france-8", label: "700 / 8 850", state: "≈ 8 %, scénario" },
    { id: "nl-16", label: "Ratio agrégé NL", state: "≈ 16 %, millésimes à aligner" },
    { id: "copy", label: "Copier les Pays-Bas", state: "Non" },
  ],
  sources: [
    {
      id: "insee-2081",
      citation: "Insee Première n° 2081. Logements et terrains bâtis des ménages : 8 850 Md€, fin 2024.",
      href: "https://www.insee.fr/fr/statistiques/8661938",
    },
    {
      id: "dnb-press-2026",
      citation: "DNB, 3 mars 2026. Intérêts seuls ≈ 40 % de la dette hypothécaire.",
      href: "https://www.dnb.nl/algemeen-nieuws/persbericht-2026/verruiming-leennormen-voor-huizenkopers-onwenselijk/",
    },
    {
      id: "cbs-2024",
      citation: "CBS, 1er janvier 2024 (provisoire). Résidences principales 2 180,7 Md€.",
      href: "https://opendata.cbs.nl/CBS/nl/dataset/83834NED/table",
    },
    {
      id: "ec01",
      citation: "Épreuve contradictoire EC-01. Objection du collatéral agrégé : a résisté.",
      href: "/documents/red-team-01/v/2026-10-03-2",
    },
  ],
};
