import type { Visual } from "@/content/visuals/types";

export const casCentralPhase2: Visual = {
  slug: "cas-central-phase-2",
  title: "Cas central — ce que le Pacte est censé changer",
  lang: "fr",
  summary:
    "Quatre bilans dans le scénario central 2027–2040 : 700 Md€ de crédit, 223 Md€ de trésorerie, 125 Md€ d’activité en France, 65 Md€ de recettes. Simulation, pas une prévision.",
  shows:
    "Dans le cas central du modèle Phase 2, le Pacte originé 700 Md€ de part à intérêts seuls. Les ménages dégagent 223 Md€ de trésorerie contre 700 Md€ encore dus en 2040. La dépense supplémentaire est 315 Md€ ; le volume d’activité supplémentaire produit en France est 125 Md€ ; les recettes 65 Md€ ; le ratio dette / PIB 2040 est −3,2 points vs la France sans Pacte. Ces montants mesurent des étapes différentes.",
  doesNotEstablish:
    "Aucune prévision. Aucun coefficient crédit → dépense, dépense → volume français, ou activité → recettes. EC-02, EC-03 et EC-06 restent ouverts. La figure ne montre pas la transmission faible ni le choc adverse.",
  nature: "simulation",
  natureNote:
    "Chiffres du résultat de simulation 2026-10-03-2, produits par le modèle Phase 2 (2026-10-03), pas par le tableur v0.1.",
  units: "Md€ cumulés 2027–2040, sauf le ratio dette / PIB (points vs référence sans Pacte, 2040)",
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
      figure: "content/visuals/cas-central-phase-2/v2026-10-03.svg",
      sha256: "e77ece57248578efd3509bb9a2f85f572cc228450d7eea9304e36fc9d882699f",
      note: "Quatre acteurs du cas central. 700 Md€ = contrainte d’origination, pas une cible.",
    },
  ],
};
