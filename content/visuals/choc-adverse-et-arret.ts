import type { Visual } from "@/content/visuals/types";

export const chocAdverseEtArret: Visual = {
  slug: "choc-adverse-et-arret",
  title: "Choc adverse, puis arrêt du Pacte",
  lang: "fr",
  summary:
    "Sans Pacte, le choc ajoute +44,9 pts de dette/PIB. Avec arrêt en 2029 : 70 Md€ originés, effet du Pacte −0,2 pt. Le canal pertes n’est pas branché.",
  shows:
    "Le choc macro (récession, chômage, taux souverains +200 pb, logement −30 % en nominal) sans Pacte porte le ratio dette / PIB 2040 à +44,9 points vs la référence normale. Dans le même monde, le Pacte s’arrête en 2029 (première lumière 2028) : 70 Md€ originés ; effet du Pacte −0,2 point ; total +44,8 points. L’origination continue aurait laissé 700 Md€ d’encours.",
  doesNotEstablish:
    "Aucune prévision de crise. Aucune perte bancaire. EC-08 et EC-09 restent ouverts. La figure ne dit pas que le logement a « passé » le test : le canal défauts / pertes n’est pas branché.",
  nature: "simulation",
  natureNote:
    "A₀ = choc V2 sans Pacte. A = même choc + Fuites-2 + arrêt. Le +44,9 est l’effet France adverse, pas le Pacte.",
  units: "Points de dette / PIB en 2040 vs référence normale ; origination en Md€",
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
    {
      href: "/documents/red-team-08/v/2026-10-03",
      label: "Épreuve contradictoire EC-08 (2026-10-03)",
    },
    {
      href: "/documents/red-team-09/v/2026-10-03-3",
      label: "Épreuve contradictoire EC-09 (2026-10-03-3)",
    },
  ],
  currentVersionId: "2026-10-03",
  versions: [
    {
      id: "2026-10-03",
      published: "2026-10-03",
      status: "working",
      figure: "content/visuals/choc-adverse-et-arret/v2026-10-03.svg",
      sha256: "9678a6551c4c9e0a3cba289022f1bc47ab275571135f810b1112109067e27183",
      note: "Le Pacte ne cause pas la crise et ne la répare pas. Canal EC-08 vide.",
    },
  ],
};
