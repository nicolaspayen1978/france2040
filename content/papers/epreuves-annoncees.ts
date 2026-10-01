export type AnnouncedTest = {
  id: string;
  title: string;
  summary: string;
};

export const announcedTests: AnnouncedTest[] = [
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
