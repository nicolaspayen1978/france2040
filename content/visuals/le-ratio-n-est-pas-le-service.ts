import type { Visual } from "@/content/visuals/types";

export const leRatioNEstPasLeService: Visual = {
  slug: "le-ratio-n-est-pas-le-service",
  title: "Le ratio n’est pas le service",
  lang: "fr",
  summary:
    "Solde, stock de dette, charge d’intérêts et ratio dette/PIB sont quatre grandeurs liées, non interchangeables. L’année 2025 le montre.",
  shows:
    "Le solde alimente le stock de dette, qui pèse sur la charge d’intérêts. Le ratio dette/PIB est le stock divisé par le PIB nominal. Ce n’est pas la charge d’intérêts. En 2025, le déficit baisse tandis que le stock, le ratio et les intérêts montent.",
  doesNotEstablish:
    "Ce schéma n’établit pas de trajectoire 2027–2040. Il ne dit pas que le Pacte améliore les finances publiques. L’épreuve contradictoire EC-07 reste non tranchée. Aucun coefficient de retour fiscal n’est posé.",
  nature: "schema",
  natureNote: "La bande 2025 est une donnée observée (Insee), citée via EC-07.",
  units: "Md€ et % du PIB pour la bande 2025 ; le schéma du haut n’a pas d’unité.",
  asOf: "2025 (bande observée) · schéma 1 octobre 2026",
  provenance:
    "Insee, Informations rapides n° 78, mars 2026 ; Insee Première n° 2106, 29 mai 2026. Lecture : épreuve contradictoire EC-07, version 2026-10-01-2.",
  citations: [
    {
      href: "/documents/red-team-07/v/2026-10-01-2",
      label: "Épreuve contradictoire EC-07 — Dette publique, inflation et taux (2026-10-01-2)",
    },
  ],
  currentVersionId: "2026-10-01",
  versions: [
    {
      id: "2026-10-01",
      published: "2026-10-01",
      status: "working",
      figure: "content/visuals/le-ratio-n-est-pas-le-service/v2026-10-01.svg",
      sha256: "e61ee57b102c8fd1653255f3c56e55109a23240d272d3bb9d4b62459f5e340fe",
      note: "Première version publique. Schéma des quatre grandeurs et bande 2025. Verdict d’EC-07 laissé ouvert.",
    },
  ],
};
