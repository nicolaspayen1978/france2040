import type { WorkingPaper } from "@/content/papers/types";

export const redTeam03: WorkingPaper = {
  slug: "red-team-03",
  title: "Red Team 03 — De la dépense à la production française",
  lang: "fr",
  summary:
    "Une dépense supplémentaire devient-elle, pour l’essentiel, de la production française ? Verdict : non tranché.",
  currentVersionId: "2026-09-29",
  versions: [
    {
      id: "2026-09-29",
      published: "2026-09-29",
      status: "working-paper",
      verdict: "Non tranché. C’est le risque macroéconomique central.",
      file: "content/papers/red-team-03/v2026-09-29.md",
      sha256: "cc20819dafb1f77b62daea4ba5f2453c38f858b094bb0109ffad3a3f36a83d35",
      note: "Première version publique. La cellule « part française » reste vide. Le chemin n’est pas redessiné.",
    },
  ],
  progress: [
    { id: "content", label: "Contenu en valeur ajoutée française", state: "Non tranché" },
    { id: "volume", label: "Capacité à augmenter le volume", state: "Non tranchée" },
    { id: "labour", label: "Travail disponible", state: "Question distincte" },
    { id: "cell", label: "Part française dans le modèle", state: "Vide" },
  ],
  sources: [
    {
      id: "sdes",
      citation:
        "Compte du logement, flux 2024 cités dans la note : construction neuve hors terrains 54,8 Md€, gros travaux 67,2 Md€.",
    },
  ],
};
