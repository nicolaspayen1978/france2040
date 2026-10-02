import type { WorkingPaper } from "@/content/papers/types";

export const redTeam08: WorkingPaper = {
  slug: "red-team-08",
  title: "Épreuve contradictoire EC-08 — Immobilier et stabilité financière",
  lang: "fr",
  summary:
    "Que devient le Pacte lorsque les prix baissent ? Verdict : non tranché. La part à intérêts seuls est une créance, pas un logement ; 40–50 % est un ratio créance/valeur à tester sur la durée du principal.",
  currentVersionId: "2026-10-02-3",
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
      note: "Sépare part IO et consolidé. Mode d’échec : coussin déjà occupé. Remplacée : cadrage créance vs collatéral.",
    },
    {
      id: "2026-10-02-3",
      published: "2026-10-02",
      status: "working-paper",
      verdict:
        "Non tranché. La part à intérêts seuls est une créance ; 40–50 % est un ratio à tester sur la durée du principal.",
      file: "content/papers/red-team-08/v2026-10-02-3.md",
      sha256: "228f8fbbbc919851f1dfe50a808679db8f744c88814b51e13037680d44527597",
      note: "Créance vs logement au bilan. DNB T3 2025 : ~40 % IO, 7 % LTV>75 %. Plafond à tester parce que le principal reste dû, pas comme garantie comptable.",
    },
  ],
  progress: [
    {
      id: "ltv",
      label: "Créance IO / collatéral",
      state: "Cadrage posé ; plafond non choisi",
    },
    { id: "households", label: "Comportement des ménages", state: "Vide" },
    { id: "dmto", label: "Mutations / DMTO", state: "Sensibilité notée" },
    {
      id: "origination",
      label: "Origination / coexistence",
      state: "Liée au ratio IO ; case vide",
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
        "De Nederlandsche Bank, Monitor on mortgage lending standards and financial stability 2026. T3 2025 : près de 40 % des hypothèques des institutions financières néerlandaises sans remboursement régulier du principal (ni produit d’épargne lié) ; 7 % de ces prêts à LTV > 75 %, contre près de 20 % pour l’ensemble du portefeuille. Réduit le risque de collatéral insuffisant à l’échéance ; d’autres risques demeurent.",
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
