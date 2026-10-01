import type { WorkingPaper } from "@/content/papers/types";

export const redTeam06: WorkingPaper = {
  slug: "red-team-06",
  title: "Épreuve contradictoire EC-06 — Boucle fiscale",
  lang: "fr",
  summary:
    "Pour 1 € de crédit effectivement dépensé, quelles assiettes fiscales sont créées, et combien revient aux administrations publiques ? Verdict : non tranché. 43,6 % n’est pas cette réponse.",
  currentVersionId: "2026-10-01-3",
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
      status: "working-paper",
      verdict: "Non tranché. Le taux moyen de prélèvements n’est pas le retour par euro.",
      file: "content/papers/red-team-06/v2026-10-01-3.md",
      sha256: "2bdfd3e4445aae7724e9702d34383eb93460d5a5ac7145c407efe9997c066ac3",
      note: "Scénario nommé comme part à intérêts seuls (~700 Md€), pas crédit habitat consolidé.",
    },
  ],
  progress: [
    { id: "spend", label: "Du crédit à la dépense", state: "Laissée à EC-02" },
    { id: "output", label: "De la dépense au volume français", state: "Laissée à EC-03" },
    { id: "base", label: "Assiette du retour", state: "Non mesurée" },
    { id: "rule", label: "Affectation à la consolidation", state: "Règle posée, non vérifiée" },
    { id: "coefficient", label: "Coefficient par euro", state: "Vide" },
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
  ],
};
