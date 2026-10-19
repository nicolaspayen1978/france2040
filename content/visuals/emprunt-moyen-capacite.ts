import type { Visual } from "@/content/visuals/types";

export const empruntMoyenCapacite: Visual = {
  slug: "emprunt-moyen-capacite",
  title: "Crédit moyen · capacité en deux parts",
  lang: "fr",
  summary:
    "À mensualité contractuelle de 1 139 € : ≈ 261 000 € contre 200 000 €. Ce n’est pas le plafond d’une annuité notionnelle.",
  shows:
    "Deuxième arithmétique du Cas 1. La mensualité du contrat est fixée à 1 139 €. Le capital passe d’environ 200 000 € à environ 261 000 €. Sous une annuité notionnelle sur tout le capital, 261 000 € ne tiennent pas dans 1 139 €.",
  doesNotEstablish:
    "Ce n’est pas un relèvement du plafond réglementaire. Le groupe qui s’arrête sous un plafond inchangé n’a pas d’effectif. Le canal primo reste hostile. Le PTZ n’est pas inclus.",
  nature: "donnee",
  natureNote:
    "Mensualité du contrat fixée. Parcours ménages, version 2026-10-19. Sensibilité 50 % dans le bandeau.",
  units: "€ de capital à mensualité contractuelle égale",
  asOf: "Taux juillet 2026 · lecture 19 octobre 2026",
  provenance:
    "Parcours ménages, version 2026-10-19. Mêmes montants que la version 2026-10-01-4.",
  citations: [
    {
      href: "/documents/parcours-menages/v/2026-10-19",
      label: "Parcours ménages — deux arithmétiques (2026-10-19)",
    },
  ],
  currentVersionId: "2026-10-19",
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
      status: "superseded",
      figure: "content/visuals/emprunt-moyen-capacite/v2026-10-01-4.svg",
      sha256: "bd0daedafbb9f5e26199f180efdd640ed37acbda33b6e537c1584cb7f2e129ce",
      note: "Retire la référence au calcul erroné ~414 000 € (100 % intérêts seuls). Octets inchangés.",
    },
    {
      id: "2026-10-19",
      published: "2026-10-19",
      status: "working",
      figure: "content/visuals/emprunt-moyen-capacite/v2026-10-19.svg",
      sha256: "2a1ba717adf477d342a58ece613931dc8ff4e1b196bca372c61ee9b63e923966",
      note: "Mêmes montants. Nomme la mensualité contractuelle. L’annuité notionnelle ne contient pas 261 000 €.",
    },
  ],
};
