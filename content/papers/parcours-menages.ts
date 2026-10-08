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
    "Part à intérêts seuls du Pacte et montages d’achat illustratifs. Le prêt existant ne disparaît pas : conserver un taux bas peut valoir plus que refinancer. Les 700 Md€ comptent cette seule part.",
  currentVersionId: "2026-10-08",
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
      status: "superseded",
      verdict: "Produit en deux parts. 700 Md€ = encours à intérêts seuls. Pas une hypothèse de V2. Test 06 non ouvert",
      file: "content/papers/parcours-menages/v2026-10-01-4.md",
      sha256: "f130e830e460c4f747c20b8a1aaf04bfda4f82321976c05482f7b87b4fbfb861",
      note: "Lie le produit au scénario : les 700 Md€ ne comptent que la part à intérêts seuls.",
    },
    {
      id: "2026-10-02",
      published: "2026-10-02",
      status: "superseded",
      verdict:
        "Le prêt existant compte. Conserver un taux bas peut valoir plus que refinancer. Pas une hypothèse de V2. Test 06 non ouvert",
      file: "content/papers/parcours-menages/v2026-10-02.md",
      sha256: "66d2bd608ff773a3c4068dbac6c313e30a315ce98115b41ca85ffde3ce6e3e2b",
      note: "Trois situations : sans dette ; tranche Pacte sans refinancer ; refinancement avec perte éventuelle du taux historique.",
    },
    {
      id: "2026-10-03",
      published: "2026-10-03",
      status: "superseded",
      verdict:
        "Le prêt existant compte. Conserver un taux bas peut valoir plus que refinancer. Pas une hypothèse de V2. Test 06 non ouvert",
      file: "content/papers/parcours-menages/v2026-10-03.md",
      sha256: "9992a4f9c8d2554ee83a867c09514194747c81addb3466409b17134c54ae370c",
      note: "Vocabulaire public français (ratio prêt / valeur d’achat). Fond inchangé.",
    },
    {
      id: "2026-10-08",
      published: "2026-10-08",
      status: "working-paper",
      verdict:
        "Le prêt existant compte. Conserver un taux bas peut valoir plus que refinancer. Pas une hypothèse de V2. Test 06 non ouvert",
      file: "content/papers/parcours-menages/v2026-10-08.md",
      sha256: "4f11d77d51a15f0b788d5064c309eb3990d16b388466a2fd46264a255732aa63",
      note: "La part à intérêts seuls définit le mécanisme nouveau. Les deux crédits des cas d’achat sont un montage illustratif ; calculs inchangés.",
    },
  ],
  progress: [
    { id: "product", label: "Part à intérêts seuls", state: "Plafond = % de la valeur ; 40 % central" },
    { id: "access", label: "Cadre d’accès au crédit", state: "Établi à partir de BdF, ACPR, HCSF, PTZ" },
    { id: "case1", label: "Cas 1 — crédit moyen 200 k€", state: "862 € vs 1 139 € à 40 %" },
    { id: "case2", label: "Cas 2 — primo 178 k€", state: "Montage illustratif, pas un gain Pacte" },
    { id: "arithmetic", label: "Brique unitaire 100 k€", state: "Service de la part à intérêts seuls" },
    { id: "sophie", label: "Sophie à 42 ans et à 62 ans", state: "Encours existant : tranche ou refinancement" },
    { id: "jean-amina", label: "Jean et Amina", state: "Sans dette ; extraction, montants vides" },
    { id: "mehdi-lea", label: "Mehdi et Léa", state: "Pas de gain direct" },
    { id: "liquidity", label: "Flux, stock, transfert", state: "Tenus séparés" },
    {
      id: "existing-loan",
      label: "Prêt existant",
      state: "Trois situations ; refinancer n’est pas neutre",
    },
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
        "Le Pacte, texte de référence. Le plafond de la part à intérêts seuls est de 40 % de la valeur dans le cas central, 50 % en sensibilité. Le ratio dette consolidée / valeur relève d’un examen distinct à l’octroi.",
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
