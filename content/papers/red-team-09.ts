import type { WorkingPaper } from "@/content/papers/types";

export const redTeam09: WorkingPaper = {
  slug: "red-team-09",
  title: "Épreuve contradictoire EC-09 — Scénario d’échec combiné",
  lang: "fr",
  summary:
    "Où sont les limites lorsque le socle adverse V2 croise une composition d’EC-02, et les freins peuvent-ils encore agir sur le flux ? Verdict : non tranché. Combinaison ≠ somme ; cellules vides.",
  currentVersionId: "2026-10-03-3",
  versions: [
    {
      id: "2026-10-03",
      published: "2026-10-03",
      status: "superseded",
      verdict:
        "Non tranché. Nomme les brins et les interactions ; ne remplit aucune trajectoire.",
      file: "content/papers/red-team-09/v2026-10-03.md",
      sha256: "0d9f9a745220383764616a50a30c70c597279985e4e86a20fa681fdcfd045714",
      note: "Première version (cinq brins). Remplacée : chômage / revenu en brin formel ; wording montée en charge.",
    },
    {
      id: "2026-10-03-2",
      published: "2026-10-03",
      status: "superseded",
      verdict:
        "Non tranché. Six brins ; enveloppe de fonctionnement ; pas de trajectoire remplie.",
      file: "content/papers/red-team-09/v2026-10-03-2.md",
      sha256: "021f59efbaf5d22a57fe233f79b2598d31b3e56f8ecc22600152e29c99d82c88",
      note: "Gelée. Sixième brin : chômage / revenu disponible. Freiner la montée en charge, non « la production ». Spécifie le travail quantitatif sous-jacent ; n’ouvre pas EC-10.",
    },
    {
      id: "2026-10-03-3",
      published: "2026-10-03",
      status: "working-paper",
      verdict:
        "Non tranché. Trois familles jointes (fuites / travaux / consommation) et freins collés aux observables ; rien n’est chiffré.",
      file: "content/papers/red-team-09/v2026-10-03-3.md",
      sha256: "20f42e48a2ced5c133bca8acd8d2559579b07fea296899f668a99f8b9a8e1017",
      note: "Retour après EC-02/03/06/07. Scénarios joints = socle V2 × composition. Règles d’arrêt sur le flux, pas le stock. Pas d’EC-10.",
    },
  ],
  progress: [
    {
      id: "strands",
      label: "Six brins adverses",
      state: "Nommés ; relus via la pile ; non chiffrés",
    },
    {
      id: "scenarios",
      label: "Familles de scénarios joints",
      state: "Trois posées ; parts vides",
    },
    {
      id: "stops",
      label: "Règles d’arrêt",
      state: "Observables collés ; seuils vides",
    },
    {
      id: "limits",
      label: "Limites de fonctionnement",
      state: "Objet de l’épreuve ; non mesurées",
    },
    { id: "model", label: "Scénario joint dans le modèle", state: "Vide" },
  ],
  sources: [
    {
      id: "pacte-v2",
      citation:
        "Pacte du bilan français — V2, version 2026-10-03. Scénario défavorable minimum (récession, chômage, baisse immobilière ≈ 30 %, taux durablement élevés) ; règles d’arrêt ; pas de promesse sur les prix.",
      href: "/documents/pacte-v2/v/2026-10-03",
    },
    {
      id: "ec-02",
      citation:
        "Épreuve contradictoire EC-02, version 2026-10-03. Vecteur d’usages ; trois compositions de travail ; parts vides.",
      href: "/documents/red-team-02/v/2026-10-03",
    },
    {
      id: "ec-03",
      citation:
        "Épreuve contradictoire EC-03, version 2026-10-03. Volume français par catégorie.",
      href: "/documents/red-team-03/v/2026-10-03",
    },
    {
      id: "ec-05",
      citation:
        "Épreuve contradictoire EC-05 — Tenir l’actif. Verdict non tranché.",
      href: "/documents/red-team-05",
    },
    {
      id: "ec-06",
      citation:
        "Épreuve contradictoire EC-06, version 2026-10-03. Recettes par assiette du panier.",
      href: "/documents/red-team-06/v/2026-10-03",
    },
    {
      id: "ec-07",
      citation:
        "Épreuve contradictoire EC-07, version 2026-10-03. Chemin annuel 2027–2040 ; Spread ≠ solde.",
      href: "/documents/red-team-07/v/2026-10-03",
    },
    {
      id: "ec-08",
      citation:
        "Épreuve contradictoire EC-08 — Immobilier et stabilité financière, version 2026-10-03 (gelée). Verdict non tranché.",
      href: "/documents/red-team-08/v/2026-10-03",
    },
  ],
};
