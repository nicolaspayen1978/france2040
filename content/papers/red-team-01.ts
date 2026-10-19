import type { WorkingPaper } from "@/content/papers/types";

export const redTeam01: WorkingPaper = {
  slug: "red-team-01",
  title: "Épreuve contradictoire EC-01 — Le stock d’équité immobilière mobilisable est-il suffisant ?",
  lang: "fr",
  summary:
    "500 à 700 Md€ de part à intérêts seuls peuvent-ils être tirés de l’équité immobilière française à 40–50 % de ratio prêt sur valeur ? L’objection du collatéral agrégé a résisté. La norme HCSF actuelle empêche la distribution de masse. La capacité de l’emprunteur, non.",
  currentVersionId: "2026-10-19-2",
  versions: [
    {
      id: "2026-09-28",
      published: "2026-09-28",
      status: "superseded",
      verdict:
        "Objection du collatéral agrégé : elle a résisté. Capacité de l’emprunteur et compatibilité réglementaire : non tranchées.",
      file: "content/papers/red-team-01/v2026-09-28.md",
      sha256: "97d75e0589c53e543194a1273a78d764e8598c72154e96bc11d5c38fbf541026",
      note: "Première version publique, en français. La note de travail reste en anglais. 700 Md€ restent une saisie de scénario. Le chemin n’est pas révisé.",
    },
    {
      id: "2026-10-01",
      published: "2026-10-01",
      status: "superseded",
      verdict: "Objection du collatéral agrégé : elle a résisté. Capacité de l’emprunteur et compatibilité réglementaire : non tranchées.",
      file: "content/papers/red-team-01/v2026-10-01.md",
      sha256: "53118377a7d07dff52ad90586ba5dbc17bf3d65e38c9703aecccc141703f082c",
      note: "Définition gelée : 700 Md€ = encours de la part à intérêts seuls. Arithmétique du résidu inchangée.",
    },
    {
      id: "2026-10-03",
      published: "2026-10-03",
      status: "superseded",
      verdict: "Objection du collatéral agrégé : elle a résisté. Capacité de l’emprunteur et compatibilité réglementaire : non tranchées.",
      file: "content/papers/red-team-01/v2026-10-03.md",
      sha256: "e840d319fa04a79d621472a9af0f8df76817e83f99d2701122bf07499efc95cf",
      note: "Vocabulaire public français. Fond inchangé.",
    },
    {
      id: "2026-10-03-2",
      published: "2026-10-03",
      status: "superseded",
      verdict: "Objection du collatéral agrégé : elle a résisté. Capacité de l’emprunteur et compatibilité réglementaire : non tranchées.",
      file: "content/papers/red-team-01/v2026-10-03-2.md",
      sha256: "ef6a9bba2b8e19121ca6103a18f1e9fd7f6e92346f09e136e4ad959f73e19bde",
      note: "Ajoute le benchmark d’échelle 8 % vs ≈ 16 %. 700 Md€ inchangés. 1 400 Md€ n’est pas le 1 400 d’illustration de charge. Octets inchangés.",
    },
    {
      id: "2026-10-19",
      published: "2026-10-19",
      status: "superseded",
      verdict:
        "Objection du collatéral agrégé : elle a résisté. Compatibilité réglementaire sous le cadre actuel : tranchée, elle empêche la distribution de masse. Capacité de l’emprunteur : non tranchée.",
      file: "content/papers/red-team-01/v2026-10-19.md",
      sha256: "b4b823d3afb8b4a7c316e50230bca053155c4c635632e0ec55ca1c8ee29998fd",
      note: "Branche HCSF tranchée par la réponse du secrétariat du 19 octobre 2026. 700 Md€ inchangés. Capacité et adoption ouvertes. Octets inchangés.",
    },
    {
      id: "2026-10-19-2",
      published: "2026-10-19",
      status: "working-paper",
      verdict:
        "Collatéral agrégé : a résisté. Cadre actuel : tranché. Deux multiples de revenu, 10,6 fois et 5,1 fois. Effectifs de ménages vides.",
      file: "content/papers/red-team-01/v2026-10-19-2.md",
      sha256: "73716a5153679d5bf4b5e5964e592584e22014225f6c0ad16916de5052cc1263",
      note: "Pose le multiple d’intérêts à côté du multiple d’annuité notionnelle sur 20 ans. 700 Md€ inchangés. Le groupe sous le plafond n’a pas d’effectif.",
    },
  ],
  progress: [
    { id: "collateral", label: "Collatéral agrégé", state: "A résisté" },
    { id: "borrower", label: "Capacité de l’emprunteur", state: "10,6 fois et 5,1 fois ; effectifs vides" },
    { id: "rules", label: "Compatibilité réglementaire", state: "Tranchée : pas de masse sous le cadre actuel" },
    { id: "path", label: "700 Md€", state: "Part à intérêts seuls, saisie de scénario" },
  ],
  sources: [
    {
      id: "insee-2081",
      citation: "Insee et Banque de France, Insee Première n° 2081, 6 novembre 2025. Bilan national fin 2024.",
    },
    {
      id: "hcsf-secretariat-2026-10-19",
      citation:
        "Secrétariat du Haut Conseil de stabilité financière, réponse du 19 octobre 2026. Reproduite dans la note de standardisation, version 2026-10-19. Champ, prêt in fine, absence de calcul alternatif, charge notionnelle hors cadre actuel.",
      href: "/documents/standard-credit-logement",
    },
  ],
};
