import type { WorkingPaper } from "@/content/papers/types";

export const redTeam09: WorkingPaper = {
  slug: "red-team-09",
  title: "Épreuve contradictoire EC-09 — Scénario d’échec combiné",
  lang: "fr",
  summary:
    "Où sont les limites du Pacte lorsque plusieurs hypothèses défavorables agissent ensemble ? Verdict : non tranché. La combinaison n’est pas la somme des épreuves isolées.",
  currentVersionId: "2026-10-03",
  versions: [
    {
      id: "2026-10-03",
      published: "2026-10-03",
      status: "working-paper",
      verdict:
        "Non tranché. Nomme les brins et les interactions ; ne remplit aucune trajectoire.",
      file: "content/papers/red-team-09/v2026-10-03.md",
      sha256: "0d9f9a745220383764616a50a30c70c597279985e4e86a20fa681fdcfd045714",
      note: "Première version. Cinq brins adverses ; combinaison ≠ somme des EC isolées ; cahier des charges V2 ; verdict non tranché.",
    },
  ],
  progress: [
    {
      id: "strands",
      label: "Cinq brins adverses",
      state: "Nommés ; non chiffrés",
    },
    {
      id: "interactions",
      label: "Interactions",
      state: "Cinq lignes à tester ; vides",
    },
    {
      id: "stops",
      label: "Règles d’arrêt",
      state: "Exigées par V2 ; non démontrées",
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
        "Épreuve contradictoire EC-02 — Transformation du crédit en dépense. Verdict non tranché.",
      href: "/documents/red-team-02",
    },
    {
      id: "ec-03",
      citation:
        "Épreuve contradictoire EC-03 — De la dépense à la production française. Verdict non tranché.",
      href: "/documents/red-team-03",
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
        "Épreuve contradictoire EC-06 — Boucle fiscale. Verdict non tranché.",
      href: "/documents/red-team-06",
    },
    {
      id: "ec-07",
      citation:
        "Épreuve contradictoire EC-07 — Dette publique, inflation et taux. Verdict non tranché.",
      href: "/documents/red-team-07",
    },
    {
      id: "ec-08",
      citation:
        "Épreuve contradictoire EC-08 — Immobilier et stabilité financière, version 2026-10-03 (gelée). Verdict non tranché.",
      href: "/documents/red-team-08/v/2026-10-03",
    },
  ],
};
