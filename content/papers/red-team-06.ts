import type { WorkingPaper } from "@/content/papers/types";

export const redTeam06: WorkingPaper = {
  slug: "red-team-06",
  title: "Épreuve contradictoire EC-06 — Boucle fiscale",
  lang: "fr",
  summary:
    "Pour chaque euro tiré, selon l’usage d’EC-02, quelles assiettes fiscales apparaissent, et combien revient ? Verdict : non tranché. 43,6 % n’est pas un rendement par panier.",
  currentVersionId: "2026-10-03",
  versions: [
    {
      id: "2026-10-01",
      published: "2026-10-01",
      status: "superseded",
      verdict: "Non tranché. Le taux moyen de prélèvements n’est pas le retour par euro.",
      file: "content/papers/red-team-06/v2026-10-01.md",
      sha256: "dad1fe6a28042807de40707ac27894440c9425edbb247aae4835ad471c737575",
      note: "Première version publique. Aucun coefficient de retour. Le taux de 43,6 % n’est pas appliqué aux sondes.",
    },
    {
      id: "2026-10-01-2",
      published: "2026-10-01",
      status: "superseded",
      verdict: "Non tranché. Le taux moyen de prélèvements n’est pas le retour par euro.",
      file: "content/papers/red-team-06/v2026-10-01-2.md",
      sha256: "0d72994b98076e04865c61fcf6146b45cbdfb6ae2bc8669ce798ed3419cff303",
      note: "La question porte sur les assiettes créées en France par la composition de la dépense, pas seulement sur la production française. Le sous-titre ne cherche pas un coefficient unique. La cellule reste vide.",
    },
    {
      id: "2026-10-01-3",
      published: "2026-10-01",
      status: "superseded",
      verdict: "Non tranché. Le taux moyen de prélèvements n’est pas le retour par euro.",
      file: "content/papers/red-team-06/v2026-10-01-3.md",
      sha256: "2bdfd3e4445aae7724e9702d34383eb93460d5a5ac7145c407efe9997c066ac3",
      note: "Scénario nommé comme part à intérêts seuls (~700 Md€), pas crédit habitat consolidé.",
    },
    {
      id: "2026-10-03",
      published: "2026-10-03",
      status: "working-paper",
      verdict:
        "Non tranché. Recettes = somme pondérée des assiettes du panier EC-02, pas 43,6 %.",
      file: "content/papers/red-team-06/v2026-10-03.md",
      sha256: "7961e21b0608428c42c9b89f4fa4f2ffb6efb7bae00b3ca25f353d7cf340a3e6",
      note: "Par usage : TVA, cotisations, IR, IS, DMTO. 43,6 % et 25/50/75 % ne sont pas un panier. Cellules vides.",
    },
  ],
  progress: [
    { id: "spend", label: "Du crédit à la dépense", state: "Vecteur EC-02 ; parts vides" },
    { id: "output", label: "De la dépense au volume français", state: "Laissée à EC-03, par catégorie" },
    { id: "base", label: "Assiettes par usage", state: "Lignes posées ; rendements vides" },
    { id: "rule", label: "Affectation à la consolidation", state: "Règle posée, non vérifiée" },
    { id: "coefficient", label: "€1 tiré → €X recettes", state: "Vide — attend le vecteur EC-02" },
  ],
  sources: [
    {
      id: "insee-ir-78",
      citation:
        "Insee, Informations rapides n° 78, mars 2026. Déficit 2025 : 5,1 % du PIB. Dette : 115,6 %. Dépenses : 57,2 %. Prélèvements obligatoires : 43,6 % après 42,8 % en 2024.",
      href: "https://www.insee.fr/fr/statistiques/8956575",
    },
    {
      id: "insee-2106",
      citation:
        "Insee Première n° 2106, 29 mai 2026. Compte des administrations publiques en 2025. Déficit 5,1 % et 152,5 Md€. Dette 115,7 %. Dépenses 57,3 %. Prélèvements obligatoires 43,6 % après 42,7 %. Croissance spontanée 2,2 %, mesures nouvelles 23,0 Md€.",
      href: "https://www.insee.fr/fr/statistiques/8997691",
    },
    {
      id: "insee-2054",
      citation:
        "Insee Première n° 2054, 28 mai 2025. Compte 2024 tel que publié alors. Ratios révisés depuis. La composition de la croissance y laisse la croissance spontanée des prélèvements en dessous de l’activité.",
      href: "https://www.insee.fr/fr/statistiques/8574492",
    },
    {
      id: "insee-impots",
      citation:
        "Insee, impôts, comptes nationaux annuels, base 2020, août 2026. Niveaux 2025 provisoires : TVA 208,8 Md€, IRPP 103,6 Md€ avant crédits d’impôt, IS 69,5 Md€ avant crédits d’impôt, CSG 156,6 Md€, CRDS 9,3 Md€.",
      href: "https://www.insee.fr/fr/statistiques/2381408",
    },
    {
      id: "tva-travaux",
      citation:
        "Ministère de l’Économie, TVA à taux réduit pour quels travaux. Taux normal 20 %. Travaux éligibles dans un logement achevé depuis plus de deux ans : 10 % ou 5,5 %, articles 278, 279-0 bis et 278-0 bis A du code général des impôts.",
      href: "https://www.economie.gouv.fr/particuliers/impots-et-fiscalite/gerer-mes-autres-impots-et-taxes/tva-taux-reduit-pour-quels-travaux",
    },
    {
      id: "ec-02",
      citation:
        "Épreuve contradictoire EC-02, version 2026-10-03. Vecteur d’usages ; dépense supplémentaire = rénovation + consommation + investissement productif nouveau.",
      href: "/documents/red-team-02/v/2026-10-03",
    },
    {
      id: "ec-03",
      citation:
        "Épreuve contradictoire EC-03, version 2026-10-03. Volume français par catégorie ; 78 / 38 / 96 % restent des moyennes 2019.",
      href: "/documents/red-team-03/v/2026-10-03",
    },
  ],
};
