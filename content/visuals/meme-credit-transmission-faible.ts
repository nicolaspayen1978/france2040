import type { Visual } from "@/content/visuals/types";

export const memeCreditTransmissionFaible: Visual = {
  slug: "meme-credit-transmission-faible",
  title: "Même crédit, transmission faible",
  lang: "fr",
  summary:
    "700 Md€ et 223 Md€ de trésorerie des deux côtés. L’activité en France passe de 125 à 42 Md€ si l’usage fuit. Simulation, pas des multiplicateurs établis.",
  shows:
    "Le produit financier est identique (700 Md€ originés, 223 Md€ de trésorerie, 700 Md€ encore dus). Seul l’usage change : Diversifié-1 contre Fuites-1. Dépense 315 contre 105 Md€ ; activité produite en France 125 contre 42 ; recettes 65 contre 29 ; dette / PIB −3,2 contre −1,3 points. Volume par euro tiré ≈ 0,18 € contre 0,06 € dans cette run.",
  doesNotEstablish:
    "Aucun multiplicateur. Aucune élasticité d’instrument. EC-02, EC-03 et EC-06 restent ouverts. La figure n’estime pas quel levier public produirait Fuites-1 ou l’empêcherait.",
  nature: "simulation",
  natureNote:
    "Comparaison de deux allocations nommées à crédit fixe. Coefficients de volume et de recettes : hypothèses de scénario.",
  units: "Md€ cumulés 2027–2040 ; ratios par euro tiré (volume / origination) dans cette run",
  asOf: "3 octobre 2026 · run Phase 2",
  provenance:
    "Figure France2040. Lecture : résultat de simulation Phase 2, version 2026-10-03-2. Moteur : modèle France 2040 Phase 2, 2026-10-03.",
  citations: [
    {
      href: "/documents/modele/phase-2/v/2026-10-03-2",
      label: "Résultat de simulation — Que change le Pacte ? (2026-10-03-2)",
    },
    {
      href: "/documents/modele/v/2026-10-03",
      label: "Modèle France 2040 — Phase 2 (2026-10-03)",
    },
  ],
  currentVersionId: "2026-10-03",
  versions: [
    {
      id: "2026-10-03",
      published: "2026-10-03",
      status: "working",
      figure:
        "content/visuals/meme-credit-transmission-faible/v2026-10-03.svg",
      sha256: "024002e51b1e134c307ad06c8d54812bedd0cc445281707ef9d562e59371430d",
      note: "Même 700 / 223 ; l’usage décide du volume français.",
    },
  ],
};
