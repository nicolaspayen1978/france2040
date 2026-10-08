import type { WorkingPaper } from "@/content/papers/types";

export const helocInteretsSeuls: WorkingPaper = {
  slug: "heloc-interets-seuls",
  kind: "working-paper",
  listKicker: "Note de benchmark · produits",
  title: "HELOC et prêts à intérêts seuls — repères de produits",
  lang: "fr",
  summary:
    "HELOC américains et canadiens : tirages renouvelables et risque de taux. Pays-Bas : principal à intérêts seuls. Comparaisons de produits, sans paramètre importé dans le Pacte.",
  currentVersionId: "2026-10-08",
  versions: [
    {
      id: "2026-10-08",
      published: "2026-10-08",
      status: "working-paper",
      verdict: "Repères de produits documentés ; applicabilité au Pacte non établie.",
      file: "content/papers/heloc-interets-seuls/v2026-10-08.md",
      sha256: "5e59c7c5dab253c736c96df1628c6dffdce423320e2a8f98be407df762068143",
      note: "Première publication. HELOC US/Canada et prêts néerlandais à intérêts seuls ; coexistence traitée séparément. Aucun paramètre étranger importé.",
    },
  ],
  progress: [
    { id: "heloc", label: "HELOC US / Canada", state: "Ligne renouvelable ; taux généralement variable" },
    { id: "nl", label: "Pays-Bas", state: "Repère de non-amortissement ; risques à l’échéance" },
    { id: "coexistence", label: "Prêt déjà en place", state: "Faisabilité française à établir" },
    { id: "transposition", label: "Paramètre importé", state: "Aucun" },
  ],
  sources: [
    {
      id: "cfpb-heloc",
      citation: "Consumer Financial Protection Bureau, HELOC : tirages, taux, remboursement et risques. Revu le 28 août 2026.",
      href: "https://www.consumerfinance.gov/ask-cfpb/what-is-a-home-equity-line-of-credit-heloc-en-107/",
    },
    {
      id: "cfpb-brochure",
      citation: "Consumer Financial Protection Bureau, guide HELOC : intérêts seuls possibles pendant le tirage, puis remboursement du solde.",
      href: "https://files.consumerfinance.gov/f/documents/cfpb_heloc-brochure_print.pdf",
    },
    {
      id: "cfpb-loan-line",
      citation: "Consumer Financial Protection Bureau, différence entre prêt sur capital immobilier et HELOC ; coexistence avec une hypothèque existante.",
      href: "https://www.consumerfinance.gov/ask-cfpb/what-is-the-difference-between-a-home-equity-loan-and-a-home-equity-line-of-credit-heloc-en-247/",
    },
    {
      id: "acfc-heloc",
      citation: "Agence de la consommation en matière financière du Canada, guide HELOC. Mise à jour le 15 octobre 2025.",
      href: "https://www.canada.ca/en/financial-consumer-agency/services/mortgages/home-equity-line-credit.html",
    },
    {
      id: "acfc-risks",
      citation: "Agence de la consommation en matière financière du Canada, étude historique sur l’endettement persistant et le surendettement liés aux HELOC.",
      href: "https://www.canada.ca/en/financial-consumer-agency/programs/research/home-equity-lines-credit-trends-issues.html",
    },
    {
      id: "dnb-afm-2026",
      citation: "DNB et AFM, Monitor on mortgage lending standards and financial stability 2026 : prêts à intérêts seuls et risques persistants.",
      href: "https://www.dnb.nl/media/cvfhqws0/86281_2600115_dnb_brochure-fs-monitor_engels_web.pdf",
    },
    {
      id: "dnb-fixed-periods",
      citation: "DNB, tableau de bord des taux hypothécaires bancaires : distinction des périodes de fixation des taux.",
      href: "https://www.dnb.nl/en/statistics/dashboards/residential-mortgages/bank-mortgage-lending-rates/",
    },
    {
      id: "nl-bilan",
      citation: "France 2040, Intensité du bilan résidentiel : ratio agrégé néerlandais, avec millésimes et définitions à aligner.",
      href: "/documents/intensite-bilan-residentiel",
    },
  ],
};
