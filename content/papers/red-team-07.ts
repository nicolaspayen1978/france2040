import type { WorkingPaper } from "@/content/papers/types";

export const redTeam07: WorkingPaper = {
  slug: "red-team-07",
  title: "Épreuve contradictoire EC-07 — Dette publique, inflation et taux",
  lang: "fr",
  summary:
    "Que deviennent le déficit, la dette rapportée au PIB et la charge d’intérêts lorsque croissance nominale, inflation, taux et refinancement sont tenus ensemble ? Verdict : non tranché. Le ratio n’est pas le service.",
  currentVersionId: "2026-10-01-2",
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
      status: "working-paper",
      verdict: "Non tranché. Un ratio qui baisse n’est pas un service qui s’allège.",
      file: "content/papers/red-team-07/v2026-10-01-2.md",
      sha256: "4bb72809b8f693068d75d90b87bbcdba113ae6df76b4faa4a8237d354b7ea900",
      note: "La charge d’intérêts dépend du stock, de sa composition, de son coût effectif et du renouvellement. Le critère de succès est une trajectoire jointe, pas seulement un ratio plus bas. La cellule reste vide.",
    },
  ],
  progress: [
    { id: "revenue", label: "Retour fiscal", state: "Laissé à EC-06" },
    { id: "primary", label: "Solde primaire", state: "Vide" },
    { id: "ratio", label: "Ratio dette / PIB", state: "Arithmétique seule" },
    { id: "interest", label: "Charge d’intérêts", state: "Point de départ 2025" },
    { id: "path", label: "Trajectoire 2027–2040", state: "Vide" },
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
  ],
};
