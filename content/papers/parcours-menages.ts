import type { WorkingPaper } from "@/content/papers/types";

/**
 * First public version of the household exhibit specification.
 * The snapshot is the text of Docs/Note_Parcours_Menages.md on 1 October 2026.
 * Do not edit the snapshot. Publish a new version instead.
 */
export const parcoursMenages: WorkingPaper = {
  slug: "parcours-menages",
  title: "Parcours des ménages et trésorerie",
  lang: "fr",
  summary:
    "Spécification de l’exposé ménage. Pour un même capital, la trésorerie conservée n’est ni un revenu ni un patrimoine. Le flux, le stock rendu liquide et le transfert ne sont pas un même gain.",
  currentVersionId: "2026-10-01",
  versions: [
    {
      id: "2026-10-01",
      published: "2026-10-01",
      status: "frozen",
      verdict:
        "Spécification de l’exposé ménage. Elle n’est pas une hypothèse de V2 et n’ouvre pas le test 06",
      file: "content/papers/parcours-menages/v2026-10-01.md",
      sha256: "218a102c1d01178b83ce9f2635e46723836460cc61e52a887d52d8dba6bcff02",
      note: "Première version publique. Le texte est la spécification gelée le 1er octobre 2026. Les montants des parcours restent vides. Les états antérieurs de la note n’ont pas été publiés.",
    },
  ],
  progress: [
    { id: "arithmetic", label: "Écart de mensualité à 3,30 %", state: "Établi, avant assurance" },
    { id: "sophie", label: "Sophie à 42 ans et à 62 ans", state: "Une seule ligne, montants vides" },
    { id: "jean-amina", label: "Jean et Amina", state: "Extraction d’équité, montants vides" },
    { id: "mehdi-lea", label: "Mehdi et Léa", state: "Pas de gain direct" },
    { id: "liquidity", label: "Flux, stock, transfert", state: "Tenus séparés" },
    { id: "priority", label: "Éligible et prioritaire", state: "Non tranché" },
    { id: "first-buyer", label: "Primo-accédant", state: "Cas hostile, pas un pouvoir d’achat" },
    { id: "v2", label: "V2 et chemin gelé", state: "Inchangés" },
    { id: "rt06", label: "Test 06", state: "Pas ouvert" },
  ],
  sources: [
    {
      id: "bdf-panorama",
      citation:
        "Banque de France, panorama cité dans le test 05. Taux des nouveaux crédits à l’habitat de juillet 2026 : 3,30 %, fixe, avant assurance et frais.",
    },
    {
      id: "hcsf",
      citation:
        "Plafond HCSF de 25 ans, cité comme plafond d’originabilité du test 1, pas comme durée choisie pour l’exposé.",
    },
    {
      id: "supply",
      citation:
        "Élasticité de l’offre urbaine française, environ 0,5, déjà dans le test 3.",
    },
  ],
};
