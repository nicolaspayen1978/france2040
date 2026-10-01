import type { Visual } from "@/content/visuals/types";

export const patrimoineVsEnveloppe: Visual = {
  slug: "patrimoine-vs-enveloppe",
  title: "Patrimoine et enveloppe mobilisable",
  lang: "fr",
  summary:
    "8 850 Md€ de logements et terrains ; résidu théorique 2 251 Md€ à 40 % LTV ; scénario 700 Md€ ≈ 31 % de ce résidu.",
  shows:
    "Le stock de logements et terrains bâtis fin 2024 est de 8 850 Md€. Le résidu comptable jusqu’à un ratio prêt sur valeur consolidé de 40 %, après le crédit habitat des particuliers, est de 2 251 Md€. Les 700 Md€ du scénario en représentent environ 31 %. Au seul niveau agrégé, le stock national n’est pas la contrainte qui lie.",
  doesNotEstablish:
    "Ce n’est pas le crédit qui serait souscrit. Le résidu ignore distribution, test de taux d’effort, règle HCSF et adoption. EC-01 reste non tranché au-delà du collatéral agrégé. 700 Md€ restent une saisie de scénario.",
  nature: "donnee",
  natureNote:
    "Barres de natures distinctes : donnée fin 2024, arithmétique EC-01 (crédit juil. 2026), saisie de scénario.",
  units: "Md€",
  asOf: "Collatéral fin 2024 · crédit habitat juillet 2026 · lecture EC-01",
  provenance:
    "Épreuve contradictoire EC-01, version 2026-09-28. Stock logements/terrains et résidu à 40 % LTV tels que dans la note.",
  citations: [
    {
      href: "/documents/red-team-01/v/2026-09-28",
      label: "Épreuve contradictoire EC-01 — Stock d’équité mobilisable (2026-09-28)",
    },
    {
      href: "/documents/pacte/v/2026-09-28",
      label: "Le Pacte du bilan français — brouillon (2026-09-28)",
    },
  ],
  currentVersionId: "2026-10-01-2",
  versions: [
    {
      id: "2026-10-01",
      published: "2026-10-01",
      status: "superseded",
      figure: "content/visuals/patrimoine-vs-enveloppe/v2026-10-01.svg",
      sha256: "4cdd51f8fe7584a380a390cce7faf8a01e7ef27f6bf85676e97d96db0acdb618",
      note: "Première version. Remplacée pour dater chaque barre et renforcer le pied anti-souscription ; UTF-8 corrigé.",
    },
    {
      id: "2026-10-01-2",
      published: "2026-10-01",
      status: "working",
      figure: "content/visuals/patrimoine-vs-enveloppe/v2026-10-01-2.svg",
      sha256: "295b9ad3edd8720cad2cc5d275314c5a6e4dce326da76b2ae5184a91e8ec32a0",
      note: "Chaque barre porte sa date/nature. Pied : 700 Md€ restent une saisie · ne prouve pas une souscription.",
    },
  ],
};
