import type { Visual } from "@/content/visuals/types";

export const empruntMoyenMensualite: Visual = {
  slug: "emprunt-moyen-mensualite",
  title: "Crédit moyen · deux parts",
  lang: "fr",
  summary:
    "Bien ~235 000 €, emprunt 200 000 €. Intérêts seuls = 40 % de la valeur : 862 € contre 1 139 €. Capital restant 94 000 €.",
  shows:
    "Sur le ticket de crédit moyen, le prêt Pacte a deux parts. À 40 % de la valeur en intérêts seuls (94 000 €) et 106 000 € en annuité, à 3,30 % sur 20 ans hors assurance, la mensualité est de 862 € contre 1 139 € en 100 % annuité. L’écart est de 277 € par mois. Après 20 ans, 94 000 € restent dus.",
  doesNotEstablish:
    "Ce n’est pas un prêt 100 % intérêts seuls. Ce n’est pas un budget notarial moyen. L’originabilité HCSF d’une part à intérêts seuls reste ouverte. L’assurance n’est pas incluse.",
  nature: "donnee",
  natureNote:
    "Arithmétique du Cas 1, produit en deux parts, note Parcours ménages v2026-10-01-4.",
  units: "€ par mois ; capital en €",
  asOf: "Taux juillet 2026 · note 1 octobre 2026",
  provenance:
    "Parcours ménages, version 2026-10-01-4. Emprunt et apport : BdF / ACPR. Plafond de la part à intérêts seuls : 40 % de la valeur (V2 / EC-01).",
  citations: [
    {
      href: "/documents/parcours-menages/v/2026-10-03",
      label: "Parcours ménages — Cas 1, deux parts (2026-10-03)",
    },
  ],
  currentVersionId: "2026-10-03",
  versions: [
    {
      id: "2026-10-01",
      published: "2026-10-01",
      status: "superseded",
      figure: "content/visuals/emprunt-moyen-mensualite/v2026-10-01.svg",
      sha256: "36aae027f783f5ff14bc9f8029ce38a1b43e665d96cbbac47f9d6d5a6cb8b29b",
      note: "Première version, 100 % intérêts seuls. Remplacée.",
    },
    {
      id: "2026-10-01-2",
      published: "2026-10-01",
      status: "superseded",
      figure: "content/visuals/emprunt-moyen-mensualite/v2026-10-01-2.svg",
      sha256: "0ca07dda5de2e00783725b60a9374852f743f2c98d2254acfb9aff85d9b82213",
      note: "Deux parts. Part à intérêts seuls = 40 % de la valeur. UTF-8 recoupé.",
    },
    {
      id: "2026-10-01-3",
      published: "2026-10-01",
      status: "superseded",
      figure: "content/visuals/emprunt-moyen-mensualite/v2026-10-01-3.svg",
      sha256: "f853a62e5de53e69533c3e11b86bd70cb89376785b1b7cc94a077b3010a743b5",
      note: "Vocabulaire français partiel. Remplacée pour ratio prêt / valeur d’achat.",
    },
    {
      id: "2026-10-03",
      published: "2026-10-03",
      status: "working",
      figure: "content/visuals/emprunt-moyen-mensualite/v2026-10-03.svg",
      sha256: "34bf725fdd45f506ace7ee7e02cadf6109335ee324a7e8db68bc815dc2d2770a",
      note: "Ratio prêt / valeur d’achat. Cite parcours 2026-10-03.",
    },
  ],
};
