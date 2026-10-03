import type { Visual } from "@/content/visuals/types";

export const intensiteBilanResidentiel: Visual = {
  slug: "intensite-bilan-residentiel",
  title: "France et Pays-Bas — intensité à intérêts seuls",
  lang: "fr",
  summary:
    "Scénario français ≈ 8 % du parc retenu. Encours néerlandais ≈ 16 % des résidences principales. 1 400 Md€ = benchmark, pas un scénario.",
  shows:
    "Le scénario de 700 Md€ d’origination / encours à intérêts seuls représente environ 8 % de 8 850 Md€ de logements et terrains bâtis. L’ordre de grandeur néerlandais est le double en intensité agrégée. À ce ratio, la France serait près de 1 400 Md€ — ce n’est pas une cible du Pacte.",
  doesNotEstablish:
    "Ni que le Pacte est prudent, ni qu’il faut copier les Pays-Bas, ni que 8 % passent emprunteur, HCSF, financement ou pertes. Le 16 % mélange encore des millésimes. EC-01 reste ouvert au-delà du collatéral agrégé.",
  nature: "simulation",
  natureNote:
    "La barre France est un scénario. La barre Pays-Bas est un ordre de grandeur observé. La troisième ligne n’est pas un scénario France 2040.",
  units: "Part de la valeur des logements (pour cent) ; montants en Md€",
  asOf: "3 octobre 2026 · collatéral FR fin 2024 · NL 2024–2025 à aligner",
  provenance:
    "Note Intensité du bilan résidentiel, 2026-10-03. Stock français : EC-01 / Insee Première 2081. Ratio NL : DNB mars 2026 et CBS 1er janvier 2024, ordre de grandeur.",
  citations: [
    {
      href: "/documents/intensite-bilan-residentiel/v/2026-10-03",
      label: "Intensité du bilan résidentiel (2026-10-03)",
    },
    {
      href: "/documents/red-team-01/v/2026-10-03-2",
      label: "Épreuve contradictoire EC-01 (2026-10-03-2)",
    },
  ],
  currentVersionId: "2026-10-03-2",
  versions: [
    {
      id: "2026-10-03",
      published: "2026-10-03",
      status: "superseded",
      figure: "content/visuals/intensite-bilan-residentiel/v2026-10-03.svg",
      sha256: "62d55597f1505712962140eae3a347d7ee35a4f5d0fa8b22759be65f8d96e968",
      note: "Première barre 8 % / 16 %. Remplacée pour le titre France / Pays-Bas.",
    },
    {
      id: "2026-10-03-2",
      published: "2026-10-03",
      status: "working",
      figure: "content/visuals/intensite-bilan-residentiel/v2026-10-03-2.svg",
      sha256: "86e2e3b3c41026eaa2adbf1b959d2d281195d17e34f6d677091b27af1d977d39",
      note: "France / Pays-Bas en titre. Barres 8 % et 16 % à la même échelle. Qualifier politique en rouge.",
    },
  ],
};
