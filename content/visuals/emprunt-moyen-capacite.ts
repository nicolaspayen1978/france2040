import type { Visual } from "@/content/visuals/types";

export const empruntMoyenCapacite: Visual = {
  slug: "emprunt-moyen-capacite",
  title: "Crédit moyen · capacité à deux tranches",
  lang: "fr",
  summary:
    "À 1 139 € par mois, IO = 40 % de la valeur : ≈ 261 000 € empruntables contre 200 000 € en annuité. Pas 414 000 €.",
  shows:
    "Lecture inverse du Cas 1 à deux tranches. À mensualité égale à l’annuité de référence (1 139 €), apport 35 000 € et tranche IO à 40 % de la valeur, la capacité d’emprunt est d’environ 261 000 € (bien ≈ 296 000 €), contre 200 000 € en 100 % annuité.",
  doesNotEstablish:
    "Ce n’est pas un pouvoir d’achat immobilier démontré. La capacité à 100 % intérêts seuls (~414 000 €) n’est pas le produit. Le canal primo reste hostile. Le PTZ n’est pas inclus.",
  nature: "donnee",
  natureNote:
    "Arithmétique inverse du Cas 1 à deux tranches. Sensibilité 50 % indiquée dans le bandeau.",
  units: "€ de capital empruntable",
  asOf: "Taux juillet 2026 · note 1 octobre 2026",
  provenance:
    "Parcours ménages, version 2026-10-01-3. Même paramètres que le graphique de mensualité à deux tranches.",
  citations: [
    {
      href: "/documents/parcours-menages/v/2026-10-01-3",
      label: "Parcours ménages — Cas 1, deux tranches (2026-10-01-3)",
    },
  ],
  currentVersionId: "2026-10-01-2",
  versions: [
    {
      id: "2026-10-01",
      published: "2026-10-01",
      status: "superseded",
      figure: "content/visuals/emprunt-moyen-capacite/v2026-10-01.svg",
      sha256: "608b0aac6d797a45c178f9b0d1698f19d44c12b8d9cf3a410a5fa4cb1a425c74",
      note: "Première version, 100 % intérêts seuls. Remplacée.",
    },
    {
      id: "2026-10-01-2",
      published: "2026-10-01",
      status: "working",
      figure: "content/visuals/emprunt-moyen-capacite/v2026-10-01-2.svg",
      sha256: "52c1fa268416d0baaec081d108ff73005e78c4b9c570df3e588dbd97d7a2a1dc",
      note: "Capacité à deux tranches, IO = 40 % de la valeur. UTF-8 recoupé.",
    },
  ],
};
