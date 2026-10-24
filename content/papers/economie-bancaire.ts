import type { WorkingPaper } from "@/content/papers/types";

export const economieBancaire: WorkingPaper = {
  slug: "economie-bancaire",
  kind: "working-paper",
  listKicker: "Note de recherche · banques",
  title: "Économie bancaire et stabilité financière",
  lang: "fr",
  summary:
    "Les 700 Md€ sont l’encours brut de la part à intérêts seuls en 2040, pas un crédit additionnel et pas un revenu. Deux ponts restent vides : le crédit du système, et l’économie des banques une fois les actifs déplacés soustraits. Le pic de 90 Md€ est une charge d’origination, pas 61 % de crédit nouveau. La structure est gelée. Le rendement ne l’est pas.",
  currentVersionId: "2026-10-23",
  versions: [
    {
      id: "2026-10-23",
      published: "2026-10-23",
      status: "working-paper",
      verdict:
        "Non tranché. Le stock de 700 Md€ n’est ni un crédit additionnel ni un revenu. Les deux ponts, les fonds propres et le rendement sont vides. La vague de maturité n’est ni dangereuse ni sûre.",
      file: "content/papers/economie-bancaire/v2026-10-23.md",
      sha256: "bdf000a65cbe2ac587e24a3968df88fa17e680263ce07a70edf5bb2a3243ce24",
      note: "Première publication du texte français. Le fichier de travail anglais reste Docs/28. La structure est gelée ; les cellules restent vides. Ni EC-05, ni EC-08, ni le classeur de phase 2 ne sont rouverts. 700 Md€ inchangés.",
    },
  ],
  progress: [
    { id: "structure", label: "Structure", state: "Gelée le 23 octobre 2026" },
    { id: "credit", label: "Pont du crédit", state: "700 Md€ établis ; X et Y vides" },
    { id: "banque", label: "Pont bancaire", state: "Vide. La substitution peut changer l’économie sans crédit nouveau" },
    { id: "flux", label: "Pic de 90 Md€", state: "Charge brute. Pas un coefficient de capacité" },
    { id: "vague", label: "Vague 2047–2060", state: "Arithmétique citée. Canaux vides" },
    { id: "hcsf", label: "Distribution de masse", state: "Non permise sous la décision actuelle" },
    { id: "rendement", label: "Contribution / CET1", state: "Non estimée" },
  ],
  sources: [
    {
      id: "bdf-juillet-2026",
      citation:
        "Banque de France, Crédits aux particuliers, juillet 2026. Encours des crédits à l’habitat des particuliers : 1 289 Md€. Production du mois hors renégociations : 11,0 Md€ à 3,30 %, dont 99,4 % à taux fixe.",
      href: "https://www.banque-france.fr/fr/statistiques/credit/credits-aux-particuliers-2026-07",
    },
    {
      id: "bdf-panorama-2026",
      citation:
        "Banque de France, Panorama des prêts à l’habitat des ménages, mars 2026. Production 2025 hors renégociations : 146,7 Md€.",
      href: "https://www.banque-france.fr/fr/publications-et-statistiques/statistiques/panorama-des-prets-lhabitat-des-menages-mars-2026",
    },
    {
      id: "acpr-174",
      citation:
        "ACPR, Analyses et synthèses n° 174, Le financement de l’habitat en 2024. Encours largement à taux fixe ; sûreté sur 97 % de l’encours, dont une caution majoritaire.",
      href: "https://acpr.banque-france.fr/fr/publications-et-statistiques/publications/ndeg-174-le-financement-de-lhabitat-en-2024",
    },
    {
      id: "hcsf",
      citation:
        "Haut Conseil de stabilité financière, décision du 29 septembre 2021 relative aux conditions d’octroi de crédits immobiliers, amendée en 2023. Le secrétariat, le 19 octobre 2026, confirme qu’une distribution de masse sous l’échéancier d’un prêt in fine ne tient pas.",
      href: "https://www.economie.gouv.fr/hcsf/mesures/mesure-relative-loctroi-de-credits-immobiliers",
    },
    {
      id: "ec-04",
      citation:
        "France 2040, épreuve 04, version 2026-10-03. Chemin annuel gelé de 25 Md€ en 2027 à 0 en 2040, pic de 90 Md€ en 2031 et 2032, somme 700 Md€.",
      href: "/documents/red-team-04/v/2026-10-03",
    },
    {
      id: "ec-05",
      citation:
        "France 2040, épreuve 05, version 2026-10-03. Intérêts contractuels de 23,1 Md€ par an, qui ne sont pas une marge. 90 à côté de 146,7 est un voisinage de flux, pas un coefficient de capacité. Finançabilité non répondue.",
      href: "/documents/red-team-05/v/2026-10-03",
    },
    {
      id: "ec-08",
      citation:
        "France 2040, épreuve 08, version 2026-10-03. Le plafond de la part à intérêts seuls n’est pas le ratio dette consolidée sur valeur, et une baisse de prix n’est pas à elle seule une perte.",
      href: "/documents/red-team-08/v/2026-10-03",
    },
    {
      id: "ec-01",
      citation:
        "France 2040, épreuve 01, version 2026-10-19-2. 37,4 % des ménages sont propriétaires sans emprunt sur la résidence principale. Ces parts n’allouent pas les 700 Md€.",
      href: "/documents/red-team-01/v/2026-10-19-2",
    },
  ],
};
