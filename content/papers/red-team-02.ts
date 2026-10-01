import type { WorkingPaper } from "@/content/papers/types";

export const redTeam02: WorkingPaper = {
  slug: "red-team-02",
  title: "Épreuve contradictoire EC-02 — Transformation du crédit en dépense",
  lang: "fr",
  summary:
    "Un euro de crédit devient-il un euro de demande, puis de production française ? Passé au sens étroit. La transmission n’est pas démontrée.",
  currentVersionId: "2026-09-28",
  versions: [
    {
      id: "2026-09-28",
      published: "2026-09-28",
      status: "working-paper",
      verdict: "Passé au sens étroit. La transmission n’est pas démontrée.",
      file: "content/papers/red-team-02/v2026-09-28.md",
      sha256: "019f4afb8d77476ca305e605ad10d293fa447c1d1d48ee35e5d64c45bb44725b",
      note: "Première version publique. Les sondes 25 / 50 / 75 % ne sont pas un cas central. Les deux cellules vides le restent.",
    },
  ],
  progress: [
    { id: "narrow", label: "Test étroit", state: "Passé" },
    { id: "spend", label: "Dépense supplémentaire", state: "Non démontrée" },
    { id: "gdp", label: "Production française", state: "Non démontrée" },
    { id: "cells", label: "Cellules du modèle", state: "Vides" },
  ],
  sources: [
    {
      id: "arrondel",
      citation:
        "Arrondel, Lamarche et Savignac, Économie et Statistique n° 472-473, 2014. Effet de richesse, pas le canal du Pacte.",
    },
  ],
};
