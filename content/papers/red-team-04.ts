import type { WorkingPaper } from "@/content/papers/types";

export const redTeam04: WorkingPaper = {
  slug: "red-team-04",
  title: "Épreuve contradictoire EC-04 — La falaise de 2040",
  lang: "fr",
  summary:
    "Quand le crédit additionnel redescend à zéro, qu’est-ce qui remplace sa contribution ? Verdict : non tranché. Le chemin n’est pas redessiné.",
  currentVersionId: "2026-10-01",
  versions: [
    {
      id: "2026-09-29",
      published: "2026-09-29",
      status: "superseded",
      verdict: "Non tranché. Le calcul porte sur les flux annuels, pas sur le remboursement du stock.",
      file: "content/papers/red-team-04/v2026-09-29.md",
      sha256: "6f0768847661af1f04544c80a71226460b3c0af0e96a271b6644fd60ace7ea83",
      note: "Première version publique. Zéro crédit en 2040 n’est pas un choc de 90 Md€ cette année-là.",
    },
    {
      id: "2026-10-01",
      published: "2026-10-01",
      status: "working-paper",
      verdict: "Non tranché. Le calcul porte sur les flux annuels, pas sur le remboursement du stock.",
      file: "content/papers/red-team-04/v2026-10-01.md",
      sha256: "8a26e994ae6728a1fe12d41b77681e6c986e4a660ee9a3b6b1e8941e9ad755e8",
      note: "La colonne du chemin est le flux net de part à intérêts seuls. Montants inchangés.",
    },
  ],
  progress: [
    { id: "path", label: "Chemin de crédit", state: "Inchangé" },
    { id: "impulse", label: "Impulsion de dépense qui disparaît", state: "Vide" },
    { id: "replacement", label: "Ce qui remplace le flux", state: "Non établi" },
    { id: "exit", label: "Test de sortie", state: "Commence en 2033" },
  ],
  sources: [
    {
      id: "path",
      citation: "Scénario public de crédit net annuel, 2027–2040, inchangé. Le pic est 90 Md€, puis la décrue jusqu’à zéro.",
    },
  ],
};
