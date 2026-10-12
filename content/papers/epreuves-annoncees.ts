export type AnnouncedTest = {
  id: string;
  title: string;
  summary: string;
};

/** Empty when every announced épreuve has a published note. */
export const announcedTests: AnnouncedTest[] = [
  {
    id: "ec-10",
    title: "EC-10 — Du patrimoine immobilier au crédit réellement distribuable",
    summary:
      "Même avec une large capacité théorique de collatéral, les revenus des ménages permettent-ils d’originer 500 à 700 Md€ de crédit supplémentaire ? L’épreuve mesure le stock originable. Elle ne cherche pas à démontrer 700 Md€. Elle n’est pas encore écrite.",
  },
];
