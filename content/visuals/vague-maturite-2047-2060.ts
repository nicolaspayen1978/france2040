import type { Visual } from "@/content/visuals/types";

export const vagueMaturite20472060: Visual = {
  slug: "vague-maturite-2047-2060",
  title: "La vague de maturité recopie l’origination, vingt ans plus tard",
  lang: "fr",
  summary:
    "À 20 ans, ouverture au 1er janvier, les échéances de 2047 à 2060 reprennent le chemin 2027–2040. Les canaux de remboursement ne sont pas chiffrés. La vague n’est ni jugée dangereuse ni jugée sûre.",
  shows:
    "Le même profil deux fois. L’origination gelée va de 25 Md€ en 2027 au pic de 90 Md€, puis à 0 en 2040. Ouverte au 1er janvier pour 20 ans, cette courbe devient le principal contractuel dû de 2047 à 2060. Ce n’est pas un remboursement unique de 700 Md€. Une ouverture au 31 décembre décale la vague d’un an. La vente, le remboursement comptant, le refinancement, la succession et le reste ne sont pas répartis.",
  doesNotEstablish:
    "Ni que la vague est soutenable, ni qu’elle est un mur. Aucune hausse de prix n’est supposée pour payer le principal. La vie contractuelle n’est pas la duration économique : aucun remboursement anticipé comportemental n’est importé. Le graphique ne ferme pas l’épreuve 05.",
  nature: "simulation",
  units: "Md€ de principal contractuel par an. Cas de référence 20 ans. Dix et trente ans ne sont pas dessinés.",
  asOf: "23 octobre 2026 · chemin gelé · ouverture au 1er janvier",
  provenance:
    "Arithmétique déjà gelée dans l’épreuve 05, version 2026-10-03, et dans la note Économie bancaire et stabilité financière, version 2026-10-23.",
  citations: [
    {
      href: "/documents/economie-bancaire/v/2026-10-23#vague-de-maturite",
      label: "Économie bancaire — vague de maturité (2026-10-23)",
    },
    {
      href: "/documents/economie-bancaire/v/2026-10-23#ce-que-le-systeme-doit-originer-chaque-annee",
      label: "Même note — origination annuelle et échéance à vingt ans (2026-10-23)",
    },
  ],
  currentVersionId: "2026-10-23",
  versions: [
    {
      id: "2026-10-23",
      published: "2026-10-23",
      status: "working",
      figure: "content/visuals/vague-maturite-2047-2060/v2026-10-23.svg",
      sha256: "242f84023aa04ccfb53e2b9527a6390e5bf69a1273bf9ff2061cf4b1d78d0ad1",
      note: "Première version. Courbe recopiée. Canaux vides. Pas un verdict.",
    },
  ],
};
