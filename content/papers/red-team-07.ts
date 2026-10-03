import type { WorkingPaper } from "@/content/papers/types";

export const redTeam07: WorkingPaper = {
  slug: "red-team-07",
  title: "Épreuve contradictoire EC-07 — Dette publique, inflation et taux",
  lang: "fr",
  summary:
    "Existe-t-il un chemin annuel 2027–2040 du solde, du ratio et des intérêts, nourri par EC-06 — pas une dette constante ? Verdict : non tranché. Le ratio n’est pas le service ; le Spread n’est pas le solde.",
  currentVersionId: "2026-10-03",
  versions: [
    {
      id: "2026-10-01",
      published: "2026-10-01",
      status: "superseded",
      verdict: "Non tranché. Un ratio qui baisse n’est pas un service qui s’allège.",
      file: "content/papers/red-team-07/v2026-10-01.md",
      sha256: "a32f2b85dfef72fda6e7f7f8857ff97a5cab173c9155fbcdcd6584da3e16af73",
      note: "Première version publique. Aucune trajectoire. La dette constante de v0.1 n’est pas reprise comme résultat.",
    },
    {
      id: "2026-10-01-2",
      published: "2026-10-01",
      status: "superseded",
      verdict: "Non tranché. Un ratio qui baisse n’est pas un service qui s’allège.",
      file: "content/papers/red-team-07/v2026-10-01-2.md",
      sha256: "4bb72809b8f693068d75d90b87bbcdba113ae6df76b4faa4a8237d354b7ea900",
      note: "La charge d’intérêts dépend du stock, de sa composition, de son coût effectif et du renouvellement. Le critère de succès est une trajectoire jointe, pas seulement un ratio plus bas. La cellule reste vide.",
    },
    {
      id: "2026-10-01-3",
      published: "2026-10-01",
      status: "superseded",
      verdict: "Non tranché. Un ratio qui baisse n’est pas un service qui s’allège.",
      file: "content/papers/red-team-07/v2026-10-01-3.md",
      sha256: "b5b9da5c8fc156c4ee546383a22e07f4b9dd7ffdfab3abd773bdc1c70cf31068",
      note: "Scénario nommé comme part à intérêts seuls (~700 Md€), pas crédit habitat consolidé.",
    },
    {
      id: "2026-10-03",
      published: "2026-10-03",
      status: "working-paper",
      verdict:
        "Non tranché. Le critère est une trajectoire jointe 2027–2040, pas un ratio à dette constante.",
      file: "content/papers/red-team-07/v2026-10-03.md",
      sha256: "83c9ae7a0b2c1b489e6550df7c12d6435db99337e6fb15d51d9bd71e14fff8fd",
      note: "Récursion annuelle : primaire, intérêts, solde, stock, ratio, Pacte Spread. 1,5–3,2 points n’est pas le déficit. Cellules d’année vides.",
    },
  ],
  progress: [
    { id: "revenue", label: "Retour fiscal", state: "Laissé à EC-06, par panier" },
    { id: "primary", label: "Solde primaire", state: "Identité posée ; années vides" },
    { id: "ratio", label: "Ratio dette / PIB", state: "Arithmétique seule ; 2040 vide" },
    { id: "interest", label: "Charge d’intérêts", state: "Point de départ 2025 ; chemin vide" },
    { id: "path", label: "Trajectoire 2027–2040", state: "Squelette ; cellules vides" },
  ],
  sources: [
    {
      id: "insee-ir-78",
      citation:
        "Insee, Informations rapides n° 78, mars 2026. Déficit 2025 : 5,1 % du PIB. Dette : 115,6 %. Dépenses : 57,2 %. Intérêts : 64,7 Md€ soit 2,2 % du PIB, +11,2 % après +13,9 % en 2024.",
      href: "https://www.insee.fr/fr/statistiques/8956575",
    },
    {
      id: "insee-2106",
      citation:
        "Insee Première n° 2106, 29 mai 2026. Compte 2025. Déficit 5,1 % et 152,5 Md€. Dette 115,7 % et 3 460,5 Md€, +154,4 Md€. Intérêts 64,7 Md€, dont 53,3 Md€ pour les administrations centrales. Inflation annuelle 0,9 %.",
      href: "https://www.insee.fr/fr/statistiques/8997691",
    },
    {
      id: "aft-2024",
      citation:
        "Agence France Trésor, communiqué du 29 juillet 2025 sur le rapport d’activité 2024. Encours de la dette négociable au 31 décembre 2024 : 2 602 Md€. Durée de vie moyenne : 8 ans et 172 jours. Émissions à moyen et long terme 2024 : 339,9 Md€ au taux moyen pondéré de 2,91 %.",
      href: "https://www.aft.gouv.fr/fr/publications/communiques-presse/29072025-lagence-france-tresor-publie-son-rapport-dactivite-2024",
    },
    {
      id: "pacte-v2",
      citation:
        "Pacte V2, version 2026-10-03. Pacte Spread = croissance nominale du PIB − croissance nominale des dépenses. Il ne remplace ni le solde primaire ni la charge d’intérêts.",
      href: "/documents/pacte-v2/v/2026-10-03",
    },
    {
      id: "ec-06",
      citation:
        "Épreuve contradictoire EC-06, version 2026-10-03. Recettes marginales par assiette du panier EC-02 ; 43,6 % n’est pas un rendement.",
      href: "/documents/red-team-06/v/2026-10-03",
    },
  ],
};
