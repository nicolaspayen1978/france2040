import type { Visual } from "@/content/visuals/types";

export const parcoursMenageInteretsSeuls: Visual = {
  slug: "parcours-menage-interets-seuls",
  title: "Intérêts seuls et amortissement",
  lang: "fr",
  summary:
    "Pour 100 000 € à 3,30 % sur 20 ans : 275 € contre 570 € par mois. Après 20 ans, le capital à intérêts seuls reste dû.",
  shows:
    "À taux gelé de 3,30 %, avant assurance et frais, la mensualité à intérêts seuls sur 20 ans est de 275 € pour 100 000 €, contre 570 € pour une annuité de même durée. L’écart de trésorerie est de 295 € par mois. Après 20 ans, le capital amortissable est éteint ; le capital à intérêts seuls est encore de 100 000 €.",
  doesNotEstablish:
    "Ce n’est pas un revenu, ni un patrimoine, ni un gain pour les ménages sans équité. Ce n’est pas le troisième choix (ne rien mobiliser). L’assurance emprunteur n’est pas incluse. Les parcours nominatifs ne sont pas calibrés ici.",
  nature: "donnee",
  natureNote:
    "Arithmétique du produit à partir du taux BdF de juillet 2026, telle que fixée dans la note Parcours ménages.",
  units: "€ par mois ; capital en €",
  asOf: "Taux juillet 2026 · note 1 octobre 2026",
  provenance:
    "Note Parcours ménages, version 2026-10-01. Taux des nouveaux crédits à l’habitat, Banque de France, juillet 2026 (3,30 %).",
  citations: [
    {
      href: "/documents/parcours-menages/v/2026-10-01",
      label: "Parcours ménages — spécification (2026-10-01)",
    },
  ],
  currentVersionId: "2026-10-01",
  versions: [
    {
      id: "2026-10-01",
      published: "2026-10-01",
      status: "working",
      figure: "content/visuals/parcours-menage-interets-seuls/v2026-10-01.svg",
      sha256: "f1090364d8c24ad9c2631df3a3e80abfa2031c3e9bc2cc532c8ae0eb9e750efc",
      note: "Première version publique. Comparaison 20 ans à 3,30 %. Capital restant affiché des deux côtés.",
    },
  ],
};
