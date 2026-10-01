import type { WorkingPaper } from "@/content/papers/types";

/**
 * Household exhibit specification.
 * Do not edit a published snapshot. Publish a new version instead.
 */
export const parcoursMenages: WorkingPaper = {
  slug: "parcours-menages",
  title: "Parcours des ménages et trésorerie",
  lang: "fr",
  summary:
    "Prêt en deux parts : intérêts seuls = % de la valeur (cas 40 %). Sur 200 000 € empruntés, 862 € contre 1 139 €. Les 700 Md€ sont l’encours à intérêts seuls.",
  currentVersionId: "2026-10-01-4",
  versions: [
    {
      id: "2026-10-01",
      published: "2026-10-01",
      status: "superseded",
      verdict:
        "Spécification de l’exposé ménage. Elle n’est pas une hypothèse de V2 et n’ouvre pas le test 06",
      file: "content/papers/parcours-menages/v2026-10-01.md",
      sha256: "218a102c1d01178b83ce9f2635e46723836460cc61e52a887d52d8dba6bcff02",
      note: "Première version publique. Remplacée ensuite pour le cadre d’accès, puis pour les deux parts.",
    },
    {
      id: "2026-10-01-2",
      published: "2026-10-01",
      status: "superseded",
      verdict:
        "Spécification rouverte. Cas 1 = crédit moyen constaté. Cas 2 = primo. Pas une hypothèse de V2. Test 06 non ouvert",
      file: "content/papers/parcours-menages/v2026-10-01-2.md",
      sha256: "9a3d60397a302e0d09c847f78c412c6363a099c40b6ce53d0c3ce0501e3410c3",
      note: "Cadre d’accès et cas typiques. Remplacée : le produit n’est pas 100 % intérêts seuls.",
    },
    {
      id: "2026-10-01-3",
      published: "2026-10-01",
      status: "superseded",
      verdict:
        "Produit en deux parts. Intérêts seuls = % de la valeur (40 % central, 50 % sensibilité). Pas une hypothèse de V2. Test 06 non ouvert",
      file: "content/papers/parcours-menages/v2026-10-01-3.md",
      sha256: "a25158ec7b2f6b0867e81086bf8c1abd6dbdfedefaa0773d9ef8d3bf31d588ef",
      note: "Corrige le Cas 1 : part à intérêts seuls bornée en % de la valeur ; LTV d’achat de marché distinct ; capacité recalculée.",
    },
    {
      id: "2026-10-01-4",
      published: "2026-10-01",
      status: "working-paper",
      verdict: "Produit en deux parts. 700 Md€ = encours à intérêts seuls. Pas une hypothèse de V2. Test 06 non ouvert",
      file: "content/papers/parcours-menages/v2026-10-01-4.md",
      sha256: "f130e830e460c4f747c20b8a1aaf04bfda4f82321976c05482f7b87b4fbfb861",
      note: "Lie le produit au scénario : les 700 Md€ ne comptent que la part à intérêts seuls.",
    },
  ],
  progress: [
    { id: "product", label: "Produit en deux parts", state: "Intérêts seuls = % de la valeur ; 40 % central" },
    { id: "access", label: "Cadre d’accès au crédit", state: "Établi à partir de BdF, ACPR, HCSF, PTZ" },
    { id: "case1", label: "Cas 1 — crédit moyen 200 k€", state: "862 € vs 1 139 € à 40 %" },
    { id: "case2", label: "Cas 2 — primo 178 k€", state: "Deux parts, pas un gain Pacte" },
    { id: "arithmetic", label: "Brique unitaire 100 k€", state: "Pour lire une part, pas le produit" },
    { id: "sophie", label: "Sophie à 42 ans et à 62 ans", state: "Une seule ligne, montants encore vides" },
    { id: "jean-amina", label: "Jean et Amina", state: "Extraction d’équité, montants vides" },
    { id: "mehdi-lea", label: "Mehdi et Léa", state: "Pas de gain direct" },
    { id: "liquidity", label: "Flux, stock, transfert", state: "Tenus séparés" },
    { id: "priority", label: "Éligible et prioritaire", state: "Non tranché" },
    { id: "first-buyer", label: "Primo-accédant", state: "Cas hostile, pas un pouvoir d’achat" },
    { id: "v2", label: "V2 et chemin gelé", state: "700 Md€ = part à intérêts seuls" },
    { id: "rt06", label: "Test 06", state: "Pas ouvert" },
  ],
  sources: [
    {
      id: "bdf-panorama",
      citation:
        "Banque de France, panorama des prêts à l’habitat des ménages. Production 2025 hors renégociations 146,7 Md€. Fin 2025 : emprunt moyen proche de 200 000 € ; apport inférieur à 40 000 € en moyenne ; durée initiale un peu plus de 22 ans et 6 mois. Avril 2026 : durée 22 ans et 8 mois ; primo 178 000 € et 23 ans et 10 mois. Taux décembre 2025 : 3,08 % ; avril 2026 : 3,22 %. Taux gelé de l’exposé : juillet 2026, 3,30 %.",
      href: "https://www.banque-france.fr/fr/publications-et-statistiques/statistiques/panorama-des-prets-lhabitat-des-menages-avril-2026",
    },
    {
      id: "acpr-183",
      citation:
        "ACPR, N° 183, financement de l’habitat en 2025. Crédit moyen à l’octroi 193 948 €. Maturité 22,4 ans. Effort moyen 30,4 %. LTV 79,9 %. Primo-accédants 43,7 %. Effort > 35 % : 16,2 %. Durées > 25 ans : 7,0 %. Flexibilité 16,6 %.",
      href: "https://acpr.banque-france.fr/fr/publications-et-statistiques/publications/ndeg-183-le-financement-de-lhabitat-en-2025",
    },
    {
      id: "hcsf",
      citation:
        "Haut Conseil de stabilité financière. Taux d’effort maximal 35 % (assurance incluse). Durée d’amortissement maximale 25 ans, 27 ans avec différé limité. Marge de flexibilité 20 % de la production.",
    },
    {
      id: "v2-ltv",
      citation:
        "Pacte V2 / résumé exécutif. Levier consolidé visé 40 à 50 % de la valeur. L’exposé ménage prend 40 % comme cas central de la part à intérêts seuls et 50 % comme sensibilité.",
    },
    {
      id: "notaires-2025",
      citation:
        "Notaires de France, bilan immobilier 2025. Surface finançable 81 m² en 2025, dont 57 m² appartement ancien et 98 m² maison ancienne, sur une mensualité de référence de 800 € pendant 20 ans.",
      href: "https://www.csn.notaires.fr/fr/actualites/le-logement-en-2025-bilan-du-marche-immobilier",
    },
    {
      id: "ptz",
      citation:
        "Ministère de l’Économie, prêt à taux zéro. Élargissement au 1er avril 2025. Complément d’un crédit bancaire. Non additionné au Cas 1.",
      href: "https://www.economie.gouv.fr/particuliers/emprunter-et-sassurer/pret-taux-zero-ptz-tout-ce-quil-faut-savoir",
    },
    {
      id: "supply",
      citation:
        "Élasticité de l’offre urbaine française, environ 0,5, déjà dans le test 3.",
    },
  ],
};
