import type { WorkingPaper } from "@/content/papers/types";

export const pacteV2: WorkingPaper = {
  slug: "pacte-v2",
  title: "Pacte du Bilan Français — V2",
  lang: "fr",
  summary:
    "Texte long de l’hypothèse, septembre 2026. Le fichier Word est la pièce jointe. Cette page est le texte cité.",
  currentVersionId: "2026-10-01",
  attachments: [
    {
      href: "/sources/pacte-du-bilan-francais-v2.docx",
      label: "Fichier source Word",
    },
  ],
  versions: [
    {
      id: "2026-09-28",
      published: "2026-09-28",
      status: "superseded",
      verdict: "Hypothèse à tester, non un programme arrêté.",
      file: "content/papers/pacte-v2/v2026-09-28.md",
      sha256: "4f0f075cd40c810ccc392a05ea84016e8ca56c92c888ff8a84da31c381ac97ba",
      note: "Première version HTML. Le texte est celui du fichier Word V2 enrichie. Les états antérieurs ne sont pas publiés.",
    },
    {
      id: "2026-10-01",
      published: "2026-10-01",
      status: "working-paper",
      verdict: "Hypothèse à tester, non un programme arrêté.",
      file: "content/papers/pacte-v2/v2026-10-01.md",
      sha256: "4a1050615a34ae5b6bc047e1bc0076e5817aaed4811291e3a3b15ac108db84d4",
      note: "Produit en deux parts. 700 Md€ = encours de la part à intérêts seuls seulement.",
    },
  ],
  progress: [
    { id: "text", label: "Texte", state: "Document de travail" },
    { id: "proof", label: "Programme de preuve", state: "Ouvert" },
  ],
  sources: [
    {
      id: "insee-fp",
      citation: "Finances publiques fin 2025, citées dans le résumé : dette 3 460,5 Md€, 115,6 % du PIB, déficit 5,1 %, dépenses 57,2 % du PIB.",
    },
    {
      id: "housing",
      citation: "Fin 2024, logements des ménages 4 807 Md€ et terrains bâtis 4 043 Md€. Crédits à l’habitat, juillet 2026 : 1 289 Md€.",
    },
  ],
};
