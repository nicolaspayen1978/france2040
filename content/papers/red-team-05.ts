import type { WorkingPaper } from "@/content/papers/types";

export type {
  DocumentStatus,
  PaperAttachment,
  PaperProgress,
  PaperSource,
  PaperVersion,
  WorkingPaper,
} from "@/content/papers/types";

/**
 * First public version of Red Team 05.
 * The snapshot is the text of Docs/13_RedTeam_05_Bank_Funding.md on 1 October 2026.
 * Do not edit the snapshot. Publish a new version instead.
 */
export const redTeam05: WorkingPaper = {
  slug: "red-team-05",
  title: "Épreuve contradictoire EC-05 — Tenir l’actif",
  lang: "fr",
  summary:
    "Le système financier français peut-il originier, financer et porter la part à intérêts seuls — y compris à côté d’un encours existant ? Verdict : non tranché.",
  currentVersionId: "2026-10-03",
  versions: [
    {
      id: "2026-10-01",
      published: "2026-10-01",
      status: "superseded",
      verdict: "Non tranché",
      file: "content/papers/red-team-05/v2026-10-01.md",
      sha256: "71730c29a094311788c04c6b362e2b163982eb781a93fa76ad5c4c15eac98df7",
      note: "Première version publique. Le texte est celui de la note au 1er octobre 2026. Les lectures des quatre groupes, leur comparaison, le repère des émetteurs et la mobilisation directe du prêt sont gelés dans ce texte. La finançabilité n’est pas répondue. Les états antérieurs de la note n’ont pas été publiés.",
    },
    {
      id: "2026-10-01-2",
      published: "2026-10-01",
      status: "superseded",
      verdict: "Non tranché",
      file: "content/papers/red-team-05/v2026-10-01-2.md",
      sha256: "bfbed52090ecf99ff81b599e827089f8d055ef4c0df4af48e7912b793f61d3f1",
      note: "Périmètre précisé : le chemin et les 700 Md€ sont l’encours à intérêts seuls. Lectures bancaires gelées inchangées.",
    },
    {
      id: "2026-10-02",
      published: "2026-10-02",
      status: "superseded",
      verdict: "Non tranché",
      file: "content/papers/red-team-05/v2026-10-02.md",
      sha256: "b75dc7c3d52d6f25c3545d34c84b65f201aaff49d640ae4404d4eee8d66583d1",
      note: "Sous-épreuve : coexister avec l’encours (tranche additionnelle vs refinancement) avant de financer le stock. 65,3 % caution.",
    },
    {
      id: "2026-10-02-2",
      published: "2026-10-02",
      status: "superseded",
      verdict: "Non tranché",
      file: "content/papers/red-team-05/v2026-10-02-2.md",
      sha256: "c09947ed21fad10bb1619383fb07f67c4690e997bc0575c3f46a114c4248c92b",
      note: "Sépare fabrication de l’actif (prêteur, cautionnaire, sûretés, LTV) et éligibilité aux canaux de refinancement, traitée en aval.",
    },
    {
      id: "2026-10-03",
      published: "2026-10-03",
      status: "working-paper",
      verdict: "Non tranché",
      file: "content/papers/red-team-05/v2026-10-03.md",
      sha256: "ab11dfba8e3c15cc2e629c74a50c6390731aeecd4d7cacdd508662e7610be95a",
      note: "Vocabulaire public français (ratio dette consolidée / valeur). Fond inchangé.",
    },
  ],
  progress: [
    { id: "sg", label: "Société Générale", state: "Lecture gelée" },
    { id: "ca", label: "Crédit Agricole", state: "Lecture gelée" },
    { id: "bpce", label: "BPCE", state: "Lecture gelée" },
    { id: "bnp", label: "BNP Paribas", state: "Lecture gelée" },
    { id: "benchmark", label: "Repère des émetteurs", state: "Gelé — observation" },
    { id: "comparison", label: "Comparaison des quatre lectures", state: "Gelée — pas un verdict" },
    {
      id: "eurosystem-loan",
      label: "Mobilisation directe du prêt",
      state: "Gelée — aucune voie identifiée",
    },
    {
      id: "coexistence",
      label: "Coexister avec l’encours",
      state: "Non tranché — tranche vs refinancement",
    },
    { id: "marketable", label: "Titre négociable", state: "Non décidé" },
    { id: "financeability", label: "Finançabilité", state: "Non répondue" },
    { id: "scale", label: "Échelle", state: "Pas ouverte" },
  ],
  sources: [
    {
      id: "bdf-credit",
      citation: "Banque de France, Crédits aux particuliers, juillet 2026.",
    },
    {
      id: "bdf-panorama",
      citation:
        "Banque de France, Panorama des prêts à l’habitat des ménages, mars 2026 et juillet 2026.",
    },
    {
      id: "acpr-174",
      citation: "ACPR, Analyses et synthèses n° 174, 30 juillet 2025, sur 2024.",
    },
    {
      id: "ecbc-2023",
      citation: "ECBC, European Covered Bond Fact Book, encours et émissions 2023.",
    },
    {
      id: "sp-2024",
      citation: "S&P Global Ratings, 18 septembre 2024, données de juin 2024.",
    },
    {
      id: "dnb-2015",
      citation: "DNB, Dutch mortgages in the DNB loan level data, 2015.",
    },
    {
      id: "dnb-2017",
      citation: "DNB, Financial Stability Report, automne 2017.",
    },
    {
      id: "dsa-2025",
      citation: "Dutch Securitisation Association, Dutch residential mortgage market, mars 2025.",
    },
    {
      id: "ec-nl-2024",
      citation:
        "Commission européenne, In-Depth Review 2024, The Netherlands, Institutional Paper 274, SWD(2024) 82 final.",
    },
    {
      id: "cmf",
      citation:
        "Code monétaire et financier, articles L. 513-29, L. 513-30, R. 513-1, R. 513-19 et R. 513-8-1, et les textes d’échéance prorogeable cités dans la note.",
    },
    {
      id: "sfh-templates",
      citation:
        "Modèles harmonisés et présentations des émetteurs lus pour le repère, arrêtés entre le 30 novembre 2025 et le 31 décembre 2025 : Société Générale SFH, Crédit Agricole Home Loan SFH, BPCE SFH, BNP Paribas Home Loan SFH, Crédit Mutuel Home Loan SFH, La Banque Postale Home Loan SFH, Arkéa Home Loans SFH, Compagnie de Financement Foncier.",
    },
    {
      id: "bpce-p3",
      citation: "Groupe BPCE, Risk Report Pillar III 2025, positions au 31 décembre 2025.",
    },
    {
      id: "ca-p3",
      citation:
        "Crédit Agricole, Rapport sur les risques, Pilier 3, Crédit Agricole S.A. et Groupe Crédit Agricole, 31 décembre 2025.",
    },
    {
      id: "sg-p3",
      citation: "Groupe Société Générale, Rapport sur les risques, Pilier 3, 31 décembre 2025.",
    },
    {
      id: "bnp-urd",
      citation:
        "BNP Paribas, Document d’enregistrement universel et rapport financier annuel 2025, déposé le 19 mars 2026, positions au 31 décembre 2025.",
    },
    {
      id: "ecb-2026-689",
      citation:
        "Orientation (UE) 2026/689 de la Banque centrale européenne, du 22 janvier 2026, ECB/2026/1.",
    },
    {
      id: "ecb-2026-27",
      citation:
        "Orientation ECB/2026/27 du 22 septembre 2026, et les communiqués de la Banque centrale européenne cités pour le collatéral.",
    },
    {
      id: "bdf-collateral",
      citation:
        "Banque de France, page sur le collatéral de politique monétaire, lue le 1er octobre 2026, et les communiqués des 3 octobre 2022 et 21 novembre 2024.",
    },
  ],
};
