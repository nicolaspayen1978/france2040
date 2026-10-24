import type { Visual } from "@/content/visuals/types";

export const deuxPontsBancaires: Visual = {
  slug: "deux-ponts-bancaires",
  title: "Deux ponts : le crédit du système, et l’économie des banques",
  lang: "fr",
  summary:
    "700 Md€ d’encours brut ne sont pas Y Md€ de crédit nouveau, ni une contribution bancaire. Le second pont part du livre entier et soustrait ce que le crédit déplace.",
  shows:
    "Deux lectures du même stock. Le pont du crédit va de 700 Md€ d’encours brut de la part à intérêts seuls à une dette existante substituée, puis à un crédit ménage additionnel. Ces deux dernières cases sont vides. Le pont bancaire part de l’économie du livre entier, soustrait les actifs déplacés, puis les coûts de financement, de couverture, d’exploitation, de perte et de fonds propres. La contribution est vide. Un refinancement euro pour euro peut ajouter zéro de crédit et changer quand même le résultat de la banque.",
  doesNotEstablish:
    "Aucun montant de substitution, de crédit additionnel ou de contribution. Les 23,1 Md€ d’intérêts contractuels déjà déposés ne sont pas une marge. Le schéma ne dit pas que les banques voudraient l’actif. Il ne ferme pas l’épreuve 05 et ne fait pas advenir les 700 Md€.",
  nature: "schema",
  units: "Md€ pour le stock gelé. X, Y et la contribution n’ont pas d’unité remplie.",
  asOf: "23 octobre 2026 · stock de scénario de fin 2040",
  provenance:
    "Schéma France2040. Note Économie bancaire et stabilité financière, version 2026-10-23.",
  citations: [
    {
      href: "/documents/economie-bancaire/v/2026-10-23#1-quelle-part-de-700-md-est-vraiment-additionnelle",
      label: "Économie bancaire — quelle part est vraiment additionnelle (2026-10-23)",
    },
    {
      href: "/documents/economie-bancaire/v/2026-10-23#2-que-produit-l-actif-pour-les-banques",
      label: "Même note — ce que l’actif produit pour les banques (2026-10-23)",
    },
  ],
  currentVersionId: "2026-10-23",
  versions: [
    {
      id: "2026-10-23",
      published: "2026-10-23",
      status: "working",
      figure: "content/visuals/deux-ponts-bancaires/v2026-10-23.svg",
      sha256: "42ed660229523d7a429e5e8ff8085c6362db611e0a8f103eacf907b90dcf3886",
      note: "Première version. Deux ponts, cellules vides. Ne ferme aucun verdict.",
    },
  ],
};
