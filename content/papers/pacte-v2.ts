import type { WorkingPaper } from "@/content/papers/types";

export const pacteV2: WorkingPaper = {
  slug: "pacte-v2",
  listKicker: "Élaboration longue",
  title: "Pacte du Bilan Français — V2",
  lang: "fr",
  summary:
    "Élaboration de travail, plus longue. Le texte de référence de la proposition est Le Pacte du bilan français.",
  currentVersionId: "2026-10-08",
  attachments: [
    {
      href: "/sources/pacte-du-bilan-francais-v2.docx",
      label: "Document Word d’origine",
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
      status: "superseded",
      verdict: "Hypothèse à tester, non un programme arrêté.",
      file: "content/papers/pacte-v2/v2026-10-01.md",
      sha256: "4a1050615a34ae5b6bc047e1bc0076e5817aaed4811291e3a3b15ac108db84d4",
      note: "Produit en deux parts. 700 Md€ = encours de la part à intérêts seuls seulement.",
    },
    {
      id: "2026-10-03",
      published: "2026-10-03",
      status: "superseded",
      verdict: "Hypothèse à tester, non un programme arrêté.",
      file: "content/papers/pacte-v2/v2026-10-03.md",
      sha256: "53edeff989095b7c700125efda3aec4a68bdae56bf4ffb7a06cec998d84023a2",
      note: "Vocabulaire public français. Remplacée : plafond consolidé 40–50 % et liste de secteurs.",
    },
    {
      id: "2026-10-03-2",
      published: "2026-10-03",
      status: "superseded",
      verdict: "Hypothèse à tester, non un programme arrêté.",
      file: "content/papers/pacte-v2/v2026-10-03-2.md",
      sha256: "a73f0aec0d73d859c018e86231d1a5cea096430cf21da539e57c861b5f7688f4",
      note: "Alignement constitutionnel : plafond de la part, origination, qualités d’usage, fenêtre.",
    },
    {
      id: "2026-10-03-3",
      published: "2026-10-03",
      status: "superseded",
      verdict: "Hypothèse à tester, non un programme arrêté.",
      file: "content/papers/pacte-v2/v2026-10-03-3.md",
      sha256: "ffde0c07acea4821bfa76bd2ca200c027d12382096778be5acf3ba25a80a66f1",
      note: "Enveloppe 700 Md€. Trajectoire indicative, règle de suivi liante. Stock vs vitesse.",
    },
    {
      id: "2026-10-08",
      published: "2026-10-08",
      status: "working-paper",
      verdict: "Hypothèse à tester, non un programme arrêté.",
      file: "content/papers/pacte-v2/v2026-10-08.md",
      sha256: "12eee425b75c40a0c6b451c667508cf388163ce769de95230891661ef1ba0b18",
      note: "Clarifie que la part à intérêts seuls est le mécanisme nouveau ; un prêt amortissable peut coexister sans être imposé.",
    },
  ],
  progress: [
    { id: "text", label: "Texte", state: "Document de travail" },
    { id: "tranche", label: "Part à intérêts seuls", state: "Plafond 40 % / 50 %, distinct du consolidé" },
    { id: "usages", label: "Usages", state: "Qualités, pas une liste de secteurs" },
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
    {
      id: "ec08",
      citation: "Épreuve contradictoire EC-08. Le plafond de la part n’est pas le ratio consolidé.",
      href: "/documents/red-team-08/v/2026-10-03",
    },
  ],
};
