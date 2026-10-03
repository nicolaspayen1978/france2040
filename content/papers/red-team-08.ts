import type { WorkingPaper } from "@/content/papers/types";

export const redTeam08: WorkingPaper = {
  slug: "red-team-08",
  title: "Épreuve contradictoire EC-08 — Immobilier et stabilité financière",
  lang: "fr",
  summary:
    "Que devient le Pacte lorsque les prix baissent ? Verdict : non tranché. Le Pacte plafonne la part à intérêts seuls à 40–50 % de la valeur, non le ratio dette consolidée / valeur ; l’hypothèse sous test joint l’érosion du collatéral à ce ratio accepté à l’octroi.",
  currentVersionId: "2026-10-03",
  versions: [
    {
      id: "2026-10-02",
      published: "2026-10-02",
      status: "superseded",
      verdict:
        "Non tranché. Une baisse des prix n’est pas une crise ; une hausse du LTV n’est pas un défaut.",
      file: "content/papers/red-team-08/v2026-10-02.md",
      sha256: "c9f8d17ee4d68a25a9ff5b65269c1ff50aae0ea796b3369183efb1c0dfc3f7ed",
      note: "Première version. Traite encore 40–50 % comme LTV consolidé dans la table. Remplacée.",
    },
    {
      id: "2026-10-02-2",
      published: "2026-10-02",
      status: "superseded",
      verdict:
        "Non tranché. Le plafond 40–50 % est la part à intérêts seuls, pas le LTV consolidé.",
      file: "content/papers/red-team-08/v2026-10-02-2.md",
      sha256: "ac5fee6f18dd438b83045940c8a6518b5d1b881d36605733023d901baf57115a",
      note: "Sépare part IO et consolidé. Remplacée.",
    },
    {
      id: "2026-10-02-3",
      published: "2026-10-02",
      status: "superseded",
      verdict:
        "Non tranché. La part à intérêts seuls est une créance ; 40–50 % est un ratio à tester sur la durée du principal.",
      file: "content/papers/red-team-08/v2026-10-02-3.md",
      sha256: "228f8fbbbc919851f1dfe50a808679db8f744c88814b51e13037680d44527597",
      note: "Créance vs logement ; DNB. Remplacée par la version structurée autour de la distinction centrale.",
    },
    {
      id: "2026-10-02-4",
      published: "2026-10-02",
      status: "superseded",
      verdict:
        "Non tranché. Le Pacte plafonne la part IO / valeur, non le LTV consolidé ; baisse de prix ≠ perte automatique.",
      file: "content/papers/red-team-08/v2026-10-02-4.md",
      sha256: "11ac3fff62f3d71f7863ce26a6d7eeec98695689792644f77ff3da1f8ae50465",
      note: "Distinction centrale. Mode d’échec 100/40/50. Hypothèse encore trop faible (baisse de prix seule). Remplacée.",
    },
    {
      id: "2026-10-02-5",
      published: "2026-10-02",
      status: "superseded",
      verdict:
        "Non tranché. Hypothèse : érosion du collatéral jointe au LTV consolidé à l’octroi.",
      file: "content/papers/red-team-08/v2026-10-02-5.md",
      sha256: "898ba3a3cf6ac21fc3c9abb2ffa5a0a1808283fb14f8d7b42ae4944c98ec913e",
      note: "Gelée puis remplacée pour vocabulaire français. Bytes inchangés.",
    },
    {
      id: "2026-10-03",
      published: "2026-10-03",
      status: "frozen",
      verdict:
        "Non tranché. Hypothèse : érosion du collatéral jointe au ratio dette consolidée / valeur à l’octroi.",
      file: "content/papers/red-team-08/v2026-10-03.md",
      sha256: "8df8e9f532102b57772a360f241f3e61d8612fb2e61874b211b28b969e4e68c7",
      note: "Gelée. Même fond que 2026-10-02-5 ; vocabulaire public entièrement français.",
    },
  ],
  progress: [
    {
      id: "ltv",
      label: "Plafond part vs ratio consolidé",
      state: "Distinction posée ; chiffre de la part non choisi",
    },
    { id: "households", label: "Comportement des ménages", state: "Vide" },
    { id: "dmto", label: "Mutations / DMTO", state: "Sensibilité notée" },
    {
      id: "origination",
      label: "Origination / coexistence",
      state: "Liée au coussin de la part ; case vide",
    },
    { id: "system", label: "Transmission systémique", state: "Vide" },
  ],
  sources: [
    {
      id: "insee-ipla-2023-t4",
      citation:
        "Insee, Informations rapides n° 54, 29 février 2024. Prix des logements anciens, France métropolitaine, quatrième trimestre 2023 : −3,9 % sur un an.",
      href: "https://www.insee.fr/fr/statistiques/7928596",
    },
    {
      id: "acpr-174",
      citation:
        "ACPR, Analyses et synthèses n° 174, 30 juillet 2025, sur 2024. Encours habitat 1 283 Md€, 98,5 % à taux fixe ; 97 % avec sûreté dont 65,3 % caution ; encours douteux bruts 1,1 % fin 2024 (+0,2 pt), risque de crédit largement contenu.",
      href: "https://acpr.banque-france.fr/fr/publications-et-statistiques/publications/ndeg-174-le-financement-de-lhabitat-en-2024",
    },
    {
      id: "bdf-credits-2026-07",
      citation:
        "Banque de France, Crédits aux particuliers, juillet 2026. Encours habitat des particuliers : 1 289 Md€. Production hors renégociations : 11,0 Md€ à 3,30 %, dont 99,4 % à taux fixe.",
      href: "https://www.banque-france.fr/fr/statistiques/credit/credits-aux-particuliers-2026-07",
    },
    {
      id: "dnb-fs-monitor-2026",
      citation:
        "De Nederlandsche Bank, Monitor on mortgage lending standards and financial stability 2026. T3 2025 : près de 40 % des hypothèques des institutions financières néerlandaises sans remboursement régulier du principal (ni produit d’épargne lié) ; 7 % de ces prêts à ratio dette / valeur > 75 %, contre près de 20 % pour l’ensemble du portefeuille. Réduit le risque de collatéral insuffisant à l’échéance ; d’autres risques demeurent.",
      href: "https://www.dnb.nl/media/cvfhqws0/86281_2600115_dnb_brochure-fs-monitor_engels_web.pdf",
    },
    {
      id: "crr-125",
      citation:
        "Règlement (UE) n° 575/2013 (CRR), article 125. Traitement distinct de la partie d’une exposition résidentielle jusqu’à 55 % de la valeur du bien ; ajustement lorsque des rangs plus seniors sont détenus ailleurs. Cité comme distinction prudentielle, non comme validation du plafond 40–50 %.",
      href: "https://eur-lex.europa.eu/legal-content/FR/TXT/?uri=CELEX:32013R0575",
    },
  ],
};
