import type { Visual } from "@/content/visuals/types";

export const picOriginationContreProduction: Visual = {
  slug: "pic-origination-contre-production",
  title: "90 Md€ au pic, à côté de 146,7 Md€ de production",
  lang: "fr",
  summary:
    "Au pic, le scénario demande 90 Md€ d’origination brute de la part, environ 61 % de la production habitat 2025 hors renégociations. Ce rapport n’est pas du crédit additionnel.",
  shows:
    "Deux flux mis côte à côte. Le pic gelé de la part à intérêts seuls est de 90 Md€ en 2031 et en 2032. La production de crédits à l’habitat en 2025, hors renégociations, est de 146,7 Md€. Le rapport 90 / 146,7 vaut environ 61 % de cette année observée. C’est la charge brute que le système aurait à écrire. La part de ces 90 Md€ qui remplacerait un encours, et celle qui serait du crédit nouveau, restent vides.",
  doesNotEstablish:
    "Ni une part de marché, ni un coefficient de capacité, ni la fraction additionnelle du pic. L’épreuve 05 avait déjà refusé de convertir 90 / 146,7 en capacité. Ce graphique ne revient pas sur ce refus. Il ne dit pas que les banques peuvent produire ce flux, ni qu’elles le voudraient.",
  nature: "simulation",
  natureNote:
    "Le pic de 90 Md€ est le scénario gelé. Les 146,7 Md€ sont la production observée par la Banque de France en 2025, hors renégociations.",
  units: "Md€ par an. 61 % est 90 / 146,7, arrondi, sur une seule année observée.",
  asOf: "23 octobre 2026 · production 2025 · pic de scénario 2031–2032",
  provenance:
    "Banque de France, panorama de mars 2026, pour 146,7 Md€. Chemin gelé France2040 pour 90 Md€. Note Économie bancaire et stabilité financière, version 2026-10-23.",
  citations: [
    {
      href: "/documents/economie-bancaire/v/2026-10-23#ce-que-le-systeme-doit-originer-chaque-annee",
      label: "Économie bancaire — ce que le système doit originer chaque année (2026-10-23)",
    },
    {
      href: "/documents/red-team-05/v/2026-10-03#la-france-d-abord",
      label: "Épreuve 05 — le pic à côté de la production ordinaire (2026-10-03)",
    },
  ],
  currentVersionId: "2026-10-23",
  versions: [
    {
      id: "2026-10-23",
      published: "2026-10-23",
      status: "working",
      figure: "content/visuals/pic-origination-contre-production/v2026-10-23.svg",
      sha256: "20cf48786003cca77ab1d6f4266368822541dbfa86df890e28d98f98f5bdd247",
      note: "Première version. Voisinage de flux. Pas un coefficient de capacité.",
    },
  ],
};
