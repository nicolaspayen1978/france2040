export type Publication = {
  href: string;
  title: string;
  version: string;
  date: string;
  summary: string;
};

export const publications: Publication[] = [
  {
    href: "/documents/pacte-v2",
    title: "Pacte du Bilan Français",
    version: "Document de travail V2",
    date: "28 septembre 2026",
    summary: "Le texte complet de l’hypothèse.",
  },
  {
    href: "/documents/modele",
    title: "Modèle France 2040",
    version: "v0.1",
    date: "28 septembre 2026",
    summary: "Tableur exploratoire. Les hypothèses sont modifiables. Ce n’est pas une prévision.",
  },
  {
    href: "/documents/questions-ouvertes",
    title: "Questions ouvertes",
    version: "Recherche et éléments de preuve",
    date: "28 septembre 2026",
    summary: "Ce qui reste à établir avant de traiter une affirmation comme un fait.",
  },
];
