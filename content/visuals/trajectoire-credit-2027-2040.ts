import type { Visual } from "@/content/visuals/types";

export const trajectoireCredit20272040: Visual = {
  slug: "trajectoire-credit-2027-2040",
  title: "Trajectoire du crédit net 2027–2040",
  lang: "fr",
  summary:
    "Simulation du chemin gelé : montée du crédit net, pic à 90 Md€, décrue jusqu’à zéro en 2040. Cumul 700 Md€.",
  shows:
    "Dans le scénario publié, le crédit net annuel passe de 25 Md€ en 2027 à 90 Md€ en 2031 et 2032, puis redescend à 0 en 2040. La somme des flux est 700 Md€. Zéro en 2040 n’est pas, à lui seul, un choc de −90 Md€ cette année-là.",
  doesNotEstablish:
    "Ce graphique n’est pas une prévision. Il ne dit pas quelle part du crédit devient une dépense, ni du PIB français. Il ne tranche pas la falaise de 2040 (EC-04 reste non tranché). Il ne modifie pas le chemin.",
  nature: "simulation",
  natureNote: "Chemin de crédit net publié, repris tel quel depuis EC-04 / V2.",
  units: "Md€ de crédit net par an",
  asOf: "Scénario gelé au 29 septembre 2026 (EC-04) · figure 1 octobre 2026",
  provenance:
    "Simulation France2040. Tableau du crédit net annuel dans l’épreuve contradictoire EC-04, version 2026-09-29. Cohérent avec le brouillon du Pacte et le modèle.",
  citations: [
    {
      href: "/documents/red-team-04/v/2026-09-29",
      label: "Épreuve contradictoire EC-04 — La falaise de 2040 (2026-09-29)",
    },
    {
      href: "/documents/modele/v/2026-09-28",
      label: "Modèle France 2040 (2026-09-28)",
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
      figure: "content/visuals/trajectoire-credit-2027-2040/v2026-10-01.svg",
      sha256: "17c3516a03264cd215979c2dc464a75fd3a3c6e09f5cb6e5dd41a405cdc3b024",
      note: "Première version. Remplacée pour renforcer le pied de page anti-prévision et corriger l’encodage UTF-8.",
    },
    {
      id: "2026-10-01-2",
      published: "2026-10-01",
      status: "working",
      figure: "content/visuals/trajectoire-credit-2027-2040/v2026-10-01-2.svg",
      sha256: "9c47c81e0e11f83de6d9bc832e46f5f3cb75ca2fc9746d2e4fa64cca7bdb9136",
      note: "Pied de page : ne constitue pas une prévision · ne tranche pas EC-04. UTF-8 corrigé.",
    },
  ],
};
