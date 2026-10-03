import type { WorkingPaper } from "@/content/papers/types";

export const redTeam03: WorkingPaper = {
  slug: "red-team-03",
  title: "Épreuve contradictoire EC-03 — De la dépense à la production française",
  lang: "fr",
  summary:
    "Pour chaque euro déjà classé comme dépense supplémentaire, que devient le volume français ? Verdict : non tranché. Le contenu, l’élasticité et le travail se lisent catégorie par catégorie.",
  currentVersionId: "2026-10-03",
  versions: [
    {
      id: "2026-09-29",
      published: "2026-09-29",
      status: "superseded",
      verdict: "Non tranché. C’est le risque macroéconomique central.",
      file: "content/papers/red-team-03/v2026-09-29.md",
      sha256: "cc20819dafb1f77b62daea4ba5f2453c38f858b094bb0109ffad3a3f36a83d35",
      note: "Première version. Cellule « part française » vide. Remplacée pour lire EC-02 par catégorie.",
    },
    {
      id: "2026-10-03",
      published: "2026-10-03",
      status: "working-paper",
      verdict:
        "Non tranché. Volume français = somme pondérée des catégories d’EC-02, pas un multiplicateur.",
      file: "content/papers/red-team-03/v2026-10-03.md",
      sha256: "5280fb73bd8c8c2f82ae5c5d754329f8a2ca9139fd07bad309f9f9c6faaba887",
      note: "Reçoit seulement la dépense supplémentaire d’EC-02. Contenu / volume / travail par ligne. 78/38/96 % restent des moyennes 2019. Pic BTP en stress seulement.",
    },
  ],
  progress: [
    { id: "content", label: "Contenu français par catégorie", state: "Moyennes 2019 citées ; marge vide" },
    { id: "volume", label: "Élasticité du volume", state: "Non tranchée" },
    { id: "labour", label: "Travail (surtout BTP)", state: "Tension constatée ; besoin vide" },
    { id: "cell", label: "€1 dépensé → €X volume FR", state: "Vide — attend le vecteur EC-02" },
  ],
  sources: [
    {
      id: "insee-analyses-89",
      citation:
        "Insee Analyses n° 89, octobre 2023. Demande intérieure finale 2019 : 78 % de valeur ajoutée française ; manufacturier 38 %, construction 96 %, services marchands 80 %. Contenus moyens, pas le Pacte.",
      href: "https://www.insee.fr/fr/statistiques/7702892",
    },
    {
      id: "sdes",
      citation:
        "SDES, compte du logement 2024. Neuf hors terrains 54,8 Md€ ; gros travaux 67,2 Md€ ; ensemble production 122,0 Md€. Ancien 198,9 Md€ n’est pas de la production.",
      href: "https://www.statistiques.developpement-durable.gouv.fr/rapport-du-compte-du-logement-2024",
    },
    {
      id: "chapelle-2023",
      citation:
        "Chapelle, Eyméoud et Wolf, THEMA Working Paper n° 2023-08. Élasticité urbaine moyenne de l’offre de logement ~0,5 (long terme, entre aires).",
    },
    {
      id: "dares-2024-07",
      citation:
        "Dares, situation du marché du travail, juillet 2024 (enquête de conjoncture Insee). Construction : 71 % de difficultés de recrutement ; 33 % d’activité limitée par le manque de personnel.",
    },
    {
      id: "ec-02",
      citation:
        "Épreuve contradictoire EC-02, version 2026-10-03. Vecteur d’usages ; dépense supplémentaire = rénovation + consommation + investissement productif nouveau.",
      href: "/documents/red-team-02/v/2026-10-03",
    },
  ],
};
