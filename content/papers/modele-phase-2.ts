import type { WorkingPaper } from "@/content/papers/types";

export const modelePhase2: WorkingPaper = {
  slug: "modele-phase-2",
  publicPath: "/documents/modele/phase-2",
  kind: "simulation-result",
  listKicker: "Résultat de simulation · Phase 2",
  title: "Que change le Pacte ?",
  lang: "fr",
  summary:
    "Même crédit, résultats très différents selon l’usage des fonds. Chiffres produits par le modèle Phase 2, pas par le tableur v0.1.",
  currentVersionId: "2026-10-03-2",
  attachments: [
    {
      href: "/sources/modele-phase-2-2026-10-03.xlsx",
      label: "Classeur Phase 2 (2026-10-03)",
    },
    {
      href: "/sources/modele-phase-2.1-2026-10-03.xlsx",
      label: "Classeur Phase 2.1 — usages (2026-10-03)",
    },
  ],
  versions: [
    {
      id: "2026-10-03",
      published: "2026-10-03",
      status: "superseded",
      verdict:
        "Scénarios — pas une prévision. Ne clôt aucune épreuve contradictoire. Ne remplace pas le modèle v0.1.",
      file: "content/papers/modele-phase-2/v2026-10-03.md",
      sha256: "94414333613215b4faff2d7ad992c0e5978dabdd4f2ac76b0c9de0bba5cb01e3",
      note: "Première publication. La citation du modèle producteur est corrigée en 2026-10-03-2.",
    },
    {
      id: "2026-10-03-2",
      published: "2026-10-03",
      status: "working-paper",
      verdict:
        "Scénarios — pas une prévision. Ne clôt aucune épreuve contradictoire. Produit par le modèle Phase 2 (2026-10-03), pas par v0.1.",
      file: "content/papers/modele-phase-2/v2026-10-03-2.md",
      sha256: "4fef60020ec7e78249967e42ad133cf901bbc1ffed6e04339560021261b6df93",
      note: "Cite le modèle Phase 2 comme producteur. v0.1 reste l’ancêtre, octets inchangés.",
    },
  ],
  progress: [
    { id: "volume", label: "Volume immédiat (EC-03 temporaire)", state: "Scénario, non établi" },
    { id: "capital", label: "Formation de capital", state: "Vide" },
    { id: "savings", label: "Économies récurrentes", state: "Vide" },
    { id: "instrument", label: "Instrument → comportement", state: "Vide" },
    { id: "cost", label: "Coût public de l’incitation", state: "Vide" },
    { id: "ec08", label: "Pertes bancaires (EC-08)", state: "Canal non branché" },
  ],
  sources: [
    {
      id: "phase2",
      citation: "Classeur France 2040 Phase 2, 3 octobre 2026. Tags O / S / Σ / ƒ.",
      href: "/sources/modele-phase-2-2026-10-03.xlsx",
    },
    {
      id: "phase21",
      citation: "Classeur France 2040 Phase 2.1, décalages d’usage à crédit fixe.",
      href: "/sources/modele-phase-2.1-2026-10-03.xlsx",
    },
    {
      id: "modele-p2",
      citation: "Modèle France 2040 — Phase 2 (2026-10-03). Producteur de ces chiffres.",
      href: "/documents/modele/v/2026-10-03",
    },
    {
      id: "modele-v01",
      citation: "Modèle France 2040 v0.1 (2026-09-28). Ancêtre ; n’est pas le moteur de cette run.",
      href: "/documents/modele/v/2026-09-28",
    },
  ],
};
