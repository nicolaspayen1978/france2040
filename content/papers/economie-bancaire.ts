import type { WorkingPaper } from "@/content/papers/types";

export const economieBancaire: WorkingPaper = {
  slug: "economie-bancaire",
  kind: "working-paper",
  listKicker: "Note de recherche · banques",
  title: "Économie bancaire et stabilité financière",
  lang: "fr",
  summary:
    "Les 700 Md€ sont l’encours brut de la part à intérêts seuls en 2040, pas un crédit additionnel et pas un revenu. À origination égale, le stock sans amortissement est plus grand : environ 1,8 fois l’intérêt contractuel, et environ 700 Md€ contre 443 Md€ à fin 2040. La rentabilité dépend du prix, qui n’est pas résolu.",
  currentVersionId: "2026-10-24-4",
  versions: [
    {
      id: "2026-10-23",
      published: "2026-10-23",
      status: "superseded",
      verdict:
        "Non tranché. Le stock de 700 Md€ n’est ni un crédit additionnel ni un revenu. Les deux ponts, les fonds propres et le rendement sont vides. La vague de maturité n’est ni dangereuse ni sûre.",
      file: "content/papers/economie-bancaire/v2026-10-23.md",
      sha256: "bdf000a65cbe2ac587e24a3968df88fa17e680263ce07a70edf5bb2a3243ce24",
      note: "Première publication du texte français. Le fichier de travail anglais reste Docs/28. La structure est gelée ; les cellules restent vides. Ni EC-05, ni EC-08, ni le classeur de phase 2 ne sont rouverts. 700 Md€ inchangés.",
    },
    {
      id: "2026-10-24",
      published: "2026-10-24",
      status: "superseded",
      verdict:
        "Non tranché. Le repère du crédit habitat ordinaire est déposé et n’entre pas dans les quatre cellules. Les deux ponts et le rendement du Pacte restent vides. La vague de maturité n’est ni dangereuse ni sûre.",
      file: "content/papers/economie-bancaire/v2026-10-24.md",
      sha256: "3e9647c7bf1368d77d830942fd992207da38c3412271c575df5563769cd623ca",
      note: "Repère ACPR du livre habitat ordinaire : marges RENTIMMO imprimées, coût du risque, pondération interne. Ombre mécanique sur 700 Md€, hors des cellules de résultat. 700 Md€ inchangés. Version 2026-10-23 non modifiée.",
    },
    {
      id: "2026-10-24-2",
      published: "2026-10-24",
      status: "superseded",
      verdict:
        "Non tranché. À origination égale, le stock sans amortissement est plus grand. La rentabilité dépend d’un prix non résolu. Les quatre cellules restent vides.",
      file: "content/papers/economie-bancaire/v2026-10-24-2.md",
      sha256: "e177db2baa9d0bb8148d85bec4622f608309ccbcf22389a9035d6b0f5493f1f4",
      note: "1,8 fois l’intérêt contractuel par euro originé, à 3,30 %, sans remboursement anticipé. Même chemin amorti : environ 443 Md€ au 31 décembre 2040, ouverture en janvier. Le prix d’offre n’est pas résolu. 700 Md€ inchangés.",
    },
    {
      id: "2026-10-24-3",
      published: "2026-10-24",
      status: "superseded",
      verdict:
        "Non tranché. À origination égale, le stock sans amortissement est plus grand. La rentabilité dépend d’un prix non résolu. Les quatre cellules restent vides.",
      file: "content/papers/economie-bancaire/v2026-10-24-3.md",
      sha256: "8d2db381403fe7dd26997ee7190d60bdb6a39f76bc0d9fa781ea9754d9c4a924",
      note: "Même texte que 2026-10-24-2, avec la phrase d’ouverture sur le multiple 1,8 réécrite. 700 Md€ inchangés.",
    },
    {
      id: "2026-10-24-4",
      published: "2026-10-24",
      status: "working-paper",
      verdict:
        "Non tranché. À origination égale, le stock sans amortissement est plus grand. La rentabilité dépend d’un prix non résolu. Les quatre cellules restent vides.",
      file: "content/papers/economie-bancaire/v2026-10-24-4.md",
      sha256: "e0ab167fc08417f78aa2b121ab4ece42454a03084a971d538f160adbe5e8c101",
      note: "Même fond que 2026-10-24-3. Les formules internes (ombre, voisinage de flux, cellule C, échéance non définie) sont dites en clair. Aucun chiffre changé.",
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
    { id: "repere", label: "Repère habitat ordinaire", state: "Déposé. Hors des quatre cellules" },
    { id: "stock", label: "Même origination", state: "Stock plus grand. Prix non résolu" },
  ],
  sources: [
    {
      id: "bdf-juillet-2026",
      citation:
        "Banque de France, Crédits aux particuliers, juillet 2026. Encours des crédits à l’habitat des particuliers : 1 289 Md€. Production du mois hors renégociations : 11,0 Md€ à 3,30 %, dont 99,4 % à taux fixe.",
      href: "https://www.banque-france.fr/fr/statistiques/credit/credits-aux-particuliers-2026-07",
    },
    {
      id: "bdf-aout-2026",
      citation:
        "Banque de France, Crédits aux particuliers, août 2026. Taux des crédits à l’habitat hors renégociations : 3,32 % provisoire, après 3,30 % en juillet. Ce n’est pas le prix d’un prêt Pacte.",
      href: "https://www.banque-france.fr/fr/statistiques/credit/credits-aux-particuliers-2026-08",
    },
    {
      id: "acpr-160",
      citation:
        "ACPR, Analyses et synthèses n° 160, Le financement de l’habitat en 2023, 21 octobre 2024. État RENTIMMO, graphique 62, barre du S2 2023 : marge nette −0,31 % du stock. Coût du risque 2023 : 1 point de base de l’encours moyen. Pondération interne moyenne : 9,8 % en juin 2023, avant les garants.",
      href: "https://acpr.banque-france.fr/fr/publications-et-statistiques/publications/ndeg-160-le-financement-de-lhabitat-en-2023",
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
        "ACPR, Analyses et synthèses n° 174, Le financement de l’habitat en 2024, 30 juillet 2025. Sûreté sur 97 % de l’encours. État RENTIMMO, graphique 54, barre du S2 2024 : marge nette −0,30 % de l’encours moyen. Passages en défaut : 0,53 % des encours sains moyens. Pondération interne : 9,4 % en décembre 2024.",
      href: "https://acpr.banque-france.fr/fr/publications-et-statistiques/publications/ndeg-174-le-financement-de-lhabitat-en-2024",
    },
    {
      id: "acpr-183",
      citation:
        "ACPR, Analyses et synthèses n° 183, Le financement de l’habitat en 2025, 30 juillet 2026. Coût du risque : 0,03 % des encours, après 0,02 % en 2024. Passages en défaut : 0,62 % des encours sains. Pondération interne : 9,2 % en 2025 sur 93 % de l’encours, avant les garants. Pertes article 430a : 0,03 % dans la limite de 55 % de la valeur, 0,05 % dans la limite de 100 %.",
      href: "https://acpr.banque-france.fr/fr/publications-et-statistiques/publications/ndeg-183-le-financement-de-lhabitat-en-2025",
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
