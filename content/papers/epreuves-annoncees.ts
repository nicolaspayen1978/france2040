export type AnnouncedTest = {
  id: string;
  title: string;
  summary: string;
};

export const announcedTests: AnnouncedTest[] = [
  {
    id: "ec-06",
    title: "EC-06 — Boucle fiscale",
    summary:
      "Pour 1 € de crédit, puis 1 € de dépense supplémentaire, combien revient effectivement aux administrations publiques en TVA, cotisations, impôt sur le revenu, impôt sur les sociétés et autres prélèvements ? Cette épreuve teste le mécanisme qui doit permettre au Pacte de soutenir la consolidation budgétaire.",
  },
  {
    id: "ec-07",
    title: "EC-07 — Dette publique, inflation et taux",
    summary:
      "Que devient la trajectoire du déficit, de la dette rapportée au PIB et de la charge d’intérêts lorsque croissance nominale, inflation, taux souverains et refinancement sont considérés ensemble ? Une hausse du PIB nominal peut réduire le ratio dette/PIB tout en renchérissant progressivement le service de la dette.",
  },
  {
    id: "ec-08",
    title: "EC-08 — Immobilier et stabilité financière",
    summary:
      "Que devient le mécanisme en cas de baisse des prix immobiliers, de défauts plus élevés ou de difficultés de refinancement ? L’épreuve porte notamment sur les ratios prêt sur valeur, les ventes, les successions, les concentrations bancaires et la transmission éventuelle d’un choc immobilier au système financier.",
  },
  {
    id: "ec-09",
    title: "EC-09 — Scénario d’échec combiné",
    summary:
      "Croissance plus faible, taux plus élevés, faible transformation du crédit en dépense, davantage d’importations et baisse de l’immobilier : plusieurs hypothèses défavorables sont combinées pour déterminer non pas si le Pacte résiste à tout, mais où se trouvent ses limites de fonctionnement.",
  },
];
