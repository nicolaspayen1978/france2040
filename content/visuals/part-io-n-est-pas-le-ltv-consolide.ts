import type { Visual } from "@/content/visuals/types";

export const partIoNEstPasLeLtvConsolide: Visual = {
  slug: "part-io-n-est-pas-le-ltv-consolide",
  title: "La part à intérêts seuls n’est pas le LTV consolidé",
  lang: "fr",
  summary:
    "Le Pacte plafonne la part à intérêts seuls / valeur, non le LTV consolidé. Exemple 100 / 40 / 50 : plafond IO vrai, consolidé déjà à 90 %, puis 112,5 % après −20 %.",
  shows:
    "Le Pacte plafonne seulement la part à intérêts seuls à 40–50 % de la valeur du bien. Cette part est une créance ; le logement est le collatéral. Avec une dette existante de 40 et une part IO de 50 sur un bien de 100, le plafond IO est respecté (50 %) tandis que le LTV consolidé est déjà à 90 %. Après une baisse de 20 % de la valeur, la dette consolidée (90) dépasse le collatéral (80) : consolidé 112,5 %, part IO / valeur 62,5 %.",
  doesNotEstablish:
    "Ce schéma ne prédit ni taux de défaut, ni perte bancaire, ni ventes contraintes. Il ne choisit pas entre 40 %, 45 % et 50 %. L’épreuve contradictoire EC-08 reste non tranchée. Une baisse de prix n’est pas, à elle seule, une perte sur l’actif.",
  nature: "schema",
  natureNote:
    "Exemple arithmétique tiré d’EC-08 (100 / 40 / 50). Illustration du mode d’échec nommé dans la note, pas une distribution observée.",
  units: "Sans unité monétaire — indices de valeur et de dette (exemple 100 / 40 / 50)",
  asOf: "2 octobre 2026 · lecture EC-08 gelée",
  provenance:
    "Schéma France2040. Lecture : épreuve contradictoire EC-08, version 2026-10-02-5 (gelée).",
  citations: [
    {
      href: "/documents/red-team-08/v/2026-10-02-5",
      label:
        "Épreuve contradictoire EC-08 — Immobilier et stabilité financière (2026-10-02-5)",
    },
  ],
  currentVersionId: "2026-10-02",
  versions: [
    {
      id: "2026-10-02",
      published: "2026-10-02",
      status: "working",
      figure:
        "content/visuals/part-io-n-est-pas-le-ltv-consolide/v2026-10-02.svg",
      sha256: "af6d25f0ee863f4223789b54a7e08d0d735f51ca832288856ddc5d1d7950f0cc",
      note: "Première version. Deux panneaux : plafond IO vs mode d’échec 100/40/50 après −20 %. Cite EC-08 gelée.",
    },
  ],
};
