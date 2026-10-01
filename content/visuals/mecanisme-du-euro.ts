import type { Visual } from "@/content/visuals/types";

export const mecanismeDuEuro: Visual = {
  slug: "mecanisme-du-euro",
  title: "Mécanisme du €1",
  lang: "fr",
  summary:
    "Du crédit à la recette publique : trois liens restent non tranchés. 43,6 % n’est pas le coefficient.",
  shows:
    "La chaîne posée par le Pacte va du crédit à la dépense, puis au volume français, puis aux assiettes fiscales. EC-02, EC-03 et EC-06 laissent ces trois passages ouverts. Le taux moyen de prélèvements obligatoires (43,6 % du PIB en 2025) n’est pas la réponse.",
  doesNotEstablish:
    "Aucun coefficient crédit → dépense, dépense → PIB français, ou activité → recettes. Aucune cellule vide n’est remplie. Le schéma ne dit pas que le Pacte consolide les finances publiques.",
  nature: "schema",
  natureNote: "Les boîtes en pointillés marquent des liens non tranchés, pas des mesures.",
  units: "Sans unité — schéma conceptuel",
  asOf: "1 octobre 2026 · lectures EC-02, EC-03, EC-06",
  provenance:
    "Schéma France2040. Lectures : épreuves contradictoires EC-02, EC-03 et EC-06 (version 2026-10-01-2 pour EC-06).",
  citations: [
    {
      href: "/documents/red-team-02/v/2026-09-28",
      label: "Épreuve contradictoire EC-02 — Transformation du crédit en dépense (2026-09-28)",
    },
    {
      href: "/documents/red-team-03/v/2026-09-29",
      label: "Épreuve contradictoire EC-03 — De la dépense à la production française (2026-09-29)",
    },
    {
      href: "/documents/red-team-06/v/2026-10-01-2",
      label: "Épreuve contradictoire EC-06 — Boucle fiscale (2026-10-01-2)",
    },
  ],
  currentVersionId: "2026-10-01",
  versions: [
    {
      id: "2026-10-01",
      published: "2026-10-01",
      status: "working",
      figure: "content/visuals/mecanisme-du-euro/v2026-10-01.svg",
      sha256: "d1e7568883149438dc281ee57dc9c74235782d77dd08794236b3c4c690ae4373",
      note: "Première version publique. Liens ouverts en gris pointillé. Bande « 43,6 % n’est pas cette réponse ».",
    },
  ],
};
