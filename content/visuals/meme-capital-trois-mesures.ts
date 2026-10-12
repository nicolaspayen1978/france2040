import type { Visual } from "@/content/visuals/types";

export const memeCapitalTroisMesures: Visual = {
  slug: "meme-capital-trois-mesures",
  title: "Le même capital, trois mesures",
  lang: "fr",
  summary:
    "100 000 € à 4 % sur 20 ans : le contrat demande 333 € par mois, le test néerlandais par défaut 606 €, et la lecture publiée du HCSF place 104 000 € dans la dernière année.",
  shows:
    "Le même crédit de 100 000 €, intérêt 4 % fixé sur vingt ans, assurance exclue. Le ménage paie 333 € par mois, soit 4 000 € par an. Le règlement néerlandais en vigueur au 1er janvier 2026 teste, par défaut pour une durée de vingt ans, une annuité d’intérêts et de capital : 606 € par mois, soit 7 272 € par an. Le contrat peut rester à 333 €. La FAQ du secrétariat du HCSF, question 22, fait entrer le capital final dans les charges de la dernière année : environ 104 000 €. L’annuité de trente ans, 477 € par mois, n’est permise que si le prêteur la juge responsable.",
  doesNotEstablish:
    "Ce schéma ne recommande pas d’adopter le calcul néerlandais et ne crée pas un produit. Il ne ferme pas EC-01 ni EC-05. La FAQ du 29 janvier 2024 dit elle-même qu’elle n’a pas de portée normative. Les 333 €, 606 € et 104 000 € ne sont pas une offre de banque. Aucun revenu, aucun plafond de valeur et aucun scénario de 700 Md€ n’en sort.",
  nature: "schema",
  units:
    "Euros par mois pour le contrat et pour l’annuité de vingt ans. Euros une fois, la dernière année, pour la lecture publiée du HCSF. Taux 4 %, capital 100 000 €, assurance exclue.",
  asOf: "13 octobre 2026 · note du 12 octobre 2026 · règlement néerlandais au 1er janvier 2026",
  provenance:
    "Schéma France2040. Lecture de la note Pays-Bas, version 2026-10-12, section de l’exemple. La charge de 104 000 € est le capital plus une année d’intérêts, telle que cette note la rapporte à la question 22 de la FAQ.",
  citations: [
    {
      href: "/documents/pays-bas-interets-seuls/v/2026-10-12#3-un-exemple",
      label: "Pays-Bas — l’exemple à 4 % (2026-10-12)",
    },
    {
      href: "/documents/pays-bas-interets-seuls/v/2026-10-12#1-la-proposition-et-pourquoi-elle-ne-tient-pas",
      label: "Même note — la proposition testée (2026-10-12)",
    },
  ],
  currentVersionId: "2026-10-13",
  versions: [
    {
      id: "2026-10-13",
      published: "2026-10-13",
      status: "working",
      figure: "content/visuals/meme-capital-trois-mesures/v2026-10-13.svg",
      sha256: "6d0587907638f14cd4cfaf0e7f92e8b001296238f8c7bb69db3f6389ba721981",
      note: "Première version. Trois mesures du même capital. Ne recommande pas le calcul néerlandais.",
    },
  ],
};
