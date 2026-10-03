import type { Visual } from "@/content/visuals/types";

export const empruntMoyenCapacite: Visual = {
  slug: "emprunt-moyen-capacite",
  title: "Crédit moyen · capacité en deux parts",
  lang: "fr",
  summary:
    "À 1 139 € par mois, intérêts seuls = 40 % de la valeur : ≈ 261 000 € empruntables contre 200 000 € en annuité.",
  shows:
    "Lecture inverse du Cas 1 en deux parts. À mensualité égale à l’annuité de référence (1 139 €), apport 35 000 € et part à intérêts seuls à 40 % de la valeur, la capacité d’emprunt est d’environ 261 000 € (bien ≈ 296 000 €), contre 200 000 € en 100 % annuité.",
  doesNotEstablish:
    "Ce n’est pas un pouvoir d’achat immobilier démontré. Le canal primo reste hostile. Le PTZ n’est pas inclus.",
  nature: "donnee",
  natureNote:
    "Arithmétique inverse du Cas 1 en deux parts. Sensibilité 50 % indiquée dans le bandeau.",
  units: "€ de capital empruntable",
  asOf: "Taux juillet 2026 · note 1 octobre 2026",
  provenance:
    "Parcours ménages, version 2026-10-01-4. Mêmes paramètres que le graphique de mensualité en deux parts.",
  citations: [
    {
      href: "/documents/parcours-menages/v/2026-10-01-4",
      label: "Parcours ménages — Cas 1, deux parts (2026-10-01-4)",
    },
  ],
  currentVersionId: "2026-10-01-4",
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
      status: "superseded",
      figure: "content/visuals/emprunt-moyen-capacite/v2026-10-01-2.svg",
      sha256: "52c1fa268416d0baaec081d108ff73005e78c4b9c570df3e588dbd97d7a2a1dc",
      note: "Capacité à deux parts, intérêts seuls = 40 % de la valeur. UTF-8 recoupé.",
    },
    {
      id: "2026-10-01-3",
      published: "2026-10-01",
      status: "superseded",
      figure: "content/visuals/emprunt-moyen-capacite/v2026-10-01-3.svg",
      sha256: "3ad36872142eec7ae59b836a87e9ee90f4ce01493691011626d0980e550a9009",
      note: "Vocabulaire français : part à intérêts seuls / deux parts.",
    },
    {
      id: "2026-10-01-4",
      published: "2026-10-01",
      status: "working",
      figure: "content/visuals/emprunt-moyen-capacite/v2026-10-01-4.svg",
      sha256: "bd0daedafbb9f5e26199f180efdd640ed37acbda33b6e537c1584cb7f2e129ce",
      note: "Retire la référence au calcul erroné ~414 000 € (100 % intérêts seuls).",
    },
  ],
};
