import type { Visual } from "@/content/visuals/types";

/**
 * Image 0 — architectural overview of the four balance sheets.
 * First entry on /en-images. Explains; does not establish EC cells.
 */
export const lesQuatreBilans: Visual = {
  slug: "les-quatre-bilans",
  title: "Les quatre bilans",
  lang: "fr",
  summary:
    "Architecture du Pacte : banques, ménages, économie productive et État. Les liens vers la production française et les recettes restent ouverts.",
  shows:
    "Le Pacte fait collaborer quatre bilans. Les banques originent un crédit long, surtout à intérêts seuls, adossé au logement. Les ménages reçoivent une liquidité volontaire contre une part de leur patrimoine immobilier. La dépense et l’investissement doivent rencontrer l’économie productive. L’État fixe le cadre budgétaire. Le schéma montre ce qui est déplacé ; il ne mesure pas les montants.",
  doesNotEstablish:
    "Aucune consolidation budgétaire. Aucun coefficient crédit → dépense, dépense → volume français, ou activité → recettes. EC-02, EC-03, EC-05, EC-06 et EC-07 restent non tranchés. Ce n’est pas une trajectoire 2027–2040.",
  nature: "schema",
  natureNote:
    "Les boîtes en trait plein sont l’architecture posée par le brouillon du Pacte. Les boîtes et flèches en pointillés marquent des effets non tranchés.",
  units: "Sans unité — schéma conceptuel",
  asOf: "2 octobre 2026 · lecture du brouillon du Pacte",
  provenance:
    "Schéma France2040, d’après le brouillon du Pacte du bilan français. Les ouvertures renvoient aux épreuves contradictoires EC-02, EC-03, EC-05, EC-06 et EC-07.",
  citations: [
    {
      href: "/documents/pacte/v/2026-09-28",
      label: "Le Pacte du bilan français — brouillon (2026-09-28)",
    },
    {
      href: "/documents/red-team-02/v/2026-09-28",
      label: "Épreuve contradictoire EC-02 (2026-09-28)",
    },
    {
      href: "/documents/red-team-03/v/2026-09-29",
      label: "Épreuve contradictoire EC-03 (2026-09-29)",
    },
    {
      href: "/documents/red-team-05/v/2026-10-01",
      label: "Épreuve contradictoire EC-05 (2026-10-01)",
    },
    {
      href: "/documents/red-team-06/v/2026-10-01-2",
      label: "Épreuve contradictoire EC-06 (2026-10-01-2)",
    },
    {
      href: "/documents/red-team-07/v/2026-10-01-2",
      label: "Épreuve contradictoire EC-07 (2026-10-01-2)",
    },
  ],
  currentVersionId: "2026-10-02",
  versions: [
    {
      id: "2026-10-01",
      published: "2026-10-01",
      status: "superseded",
      figure: "content/visuals/les-quatre-bilans/v2026-10-01.svg",
      sha256: "92c95aba9c9a0f6bf80d46ac7dda9ae91f6527036a3e08f12db8ec772d518448",
      note: "Image 0 initiale. Flèches trop serrées entre les quatre blocs.",
    },
    {
      id: "2026-10-02",
      published: "2026-10-02",
      status: "working",
      figure: "content/visuals/les-quatre-bilans/v2026-10-02.svg",
      sha256: "3ef15476a39627758f6a016ff2620dabc2c368ab215bb84ca6acb4f66f5103dc",
      note: "Couloirs entre blocs élargis. Libellés des flux hors du trait (crédit, intérêts, dépense ?, recettes ?, dépenses publiques). Garantie logement en pastille sous 1–2.",
    },
  ],
};
