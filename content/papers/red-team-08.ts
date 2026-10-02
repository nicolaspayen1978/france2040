import type { WorkingPaper } from "@/content/papers/types";

export const redTeam08: WorkingPaper = {
  slug: "red-team-08",
  title: "Épreuve contradictoire EC-08 — Immobilier et stabilité financière",
  lang: "fr",
  summary:
    "Que devient le Pacte lorsque les prix immobiliers baissent, que les défauts montent ou que le refinancement se tend ? Verdict : non tranché. Une baisse des prix n’est pas une crise ; une hausse du LTV n’est pas un défaut.",
  currentVersionId: "2026-10-02",
  versions: [
    {
      id: "2026-10-02",
      published: "2026-10-02",
      status: "working-paper",
      verdict:
        "Non tranché. Une baisse des prix n’est pas une crise ; une hausse du LTV n’est pas un défaut.",
      file: "content/papers/red-team-08/v2026-10-02.md",
      sha256: "c9f8d17ee4d68a25a9ff5b65269c1ff50aae0ea796b3369183efb1c0dfc3f7ed",
      note: "Première version publique. Cinq canaux. Table LTV −10/−20/−30 % arithmétique seulement. Aucune transmission remplie.",
    },
  ],
  progress: [
    { id: "ltv", label: "Coussin LTV", state: "Arithmétique seule" },
    { id: "households", label: "Comportement des ménages", state: "Vide" },
    { id: "dmto", label: "Mutations / DMTO", state: "Sensibilité notée" },
    { id: "origination", label: "Origination / coexistence", state: "Laissée en partie à EC-05" },
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
  ],
};
