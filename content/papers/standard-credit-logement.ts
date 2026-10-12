import type { WorkingPaper } from "@/content/papers/types";

export const standardCreditLogement: WorkingPaper = {
  slug: "standard-credit-logement",
  kind: "working-paper",
  listKicker: "Note de recherche · mise en œuvre",
  title: "Standardiser un crédit adossé au logement en France",
  lang: "fr",
  summary:
    "Le droit permet déjà une hypothèque distincte derrière un prêt en place. La standardisation opérationnelle est plausible et non établie. Le traitement du capital final et le coût du second rang restent ouverts.",
  currentVersionId: "2026-10-12-2",
  versions: [
    {
      id: "2026-10-12",
      published: "2026-10-12",
      status: "superseded",
      verdict:
        "Standardisable au regard du droit des sûretés. Distribution simple, interopérable et bon marché à l’échelle non établie.",
      file: "content/papers/standard-credit-logement/v2026-10-12.md",
      sha256: "bf56a661ea495e78f313ffcc690486278f12c8a7c2c3bee6077248d1798b9aa7",
      note: "Première publication. Droit des sûretés distingué de la lecture HCSF sur le capital final. Ne ferme ni EC-01 ni EC-05. 700 Md€ inchangés.",
    },
    {
      id: "2026-10-12-2",
      published: "2026-10-12",
      status: "working-paper",
      verdict:
        "Hypothèque distincte établie. Standardisation opérationnelle plausible, non établie. Traitement du capital final, coût du second rang, consentement et adoption ouverts.",
      file: "content/papers/standard-credit-logement/v2026-10-12-2.md",
      sha256: "a04e049b2066d17e7f14fd6ef6107891ef9c6c3d16bfd1897b5448721fa62456",
      note: "Même recherche. La lecture distingue l’établi, le plausible non établi et l’ouvert. Le titre public est resserré. La version 2026-10-12 reste inchangée. 700 Md€ inchangés.",
    },
  ],
  progress: [
    { id: "surete", label: "Hypothèque distincte", state: "Établie, sans refinancement nécessaire pour la créer" },
    { id: "operations", label: "Machinerie banques, notaires, garants", state: "Plausible, non établie" },
    { id: "hcsf", label: "Capital final et taux d’effort", state: "Lecture publiée ; FAQ non normative" },
    { id: "caution", label: "Prêt déjà cautionné", state: "Consentement non établi" },
    { id: "prix", label: "Prix du second rang", state: "Non établi" },
    { id: "chemin", label: "700 Md€", state: "Inchangés" },
  ],
  sources: [
    {
      id: "hcsf-decision",
      citation:
        "Haut Conseil de stabilité financière, décision du 29 septembre 2021 relative aux conditions d’octroi de crédits immobiliers, amendée en 2023. Contraignante depuis le 1er janvier 2022.",
      href: "https://www.economie.gouv.fr/hcsf/mesures/mesure-relative-loctroi-de-credits-immobiliers",
    },
    {
      id: "hcsf-faq",
      citation:
        "Secrétariat du HCSF, FAQ du 29 janvier 2024. Elle dit n’avoir pas de portée normative. Questions 6, 8, 11, 22, 23 et 27 : champ, crédit relais, dettes existantes, prêt in fine, maturité, flexibilité.",
      href: "https://www.economie.gouv.fr/files/files/directions_services/hcsf/HCSF_FAQ_decisions_octroi_credits_immobiliers.pdf",
    },
    {
      id: "acpr-174",
      citation:
        "ACPR, Analyses et synthèses n° 174, Le financement de l’habitat en 2024. 99 % de la production à taux fixe ; 97 % de l’encours avec sûreté ; hypothèque à 27 % de l’encours.",
      href: "https://acpr.banque-france.fr/fr/publications-et-statistiques/publications/ndeg-174-le-financement-de-lhabitat-en-2024",
    },
    {
      id: "ccsf-2026",
      citation:
        "Comité consultatif du secteur financier, Le modèle français de financement de l’acquisition de la résidence principale, 2026. Le crédit in fine y est marginal pour l’accession.",
      href: "https://www.banque-france.fr/fr/publications-et-statistiques/publications/le-modele-francais-de-financement-de-lacquisition-de-la-residence-principale-2026",
    },
    {
      id: "usure-2026-t4",
      citation:
        "Banque de France, taux d’usure du 4e trimestre 2026. La séparation trésorerie / immobilier renvoie au 1° de l’article L. 313-1, non à l’article entier.",
      href: "https://www.banque-france.fr/fr/statistiques/taux-et-cours/taux-dusure-2026-q4",
    },
    {
      id: "senat-pvh",
      citation:
        "Réponse ministérielle, Sénat, prêt viager hypothécaire : production moyenne inférieure à 1 000 prêts par an depuis 2007 chez le Crédit Foncier ; arrêt en 2019.",
      href: "https://www.senat.fr/questions/base/2019/qSEQ191113041.html",
    },
    {
      id: "an-24084",
      citation:
        "Assemblée nationale, question n° 24084, réponse sur les prêts viagers hypothécaires, même constat de volume et d’arrêt.",
      href: "https://questions.assemblee-nationale.fr/q15/15-24084QE.htm",
    },
    {
      id: "crr-108",
      citation:
        "Règlement (UE) n° 575/2013, article 108, paragraphes 4 et 5 : condition de consentement, depuis 2014, pour traiter certains prêts cautionnés comme des expositions garanties par un bien résidentiel.",
      href: "https://eur-lex.europa.eu/legal-content/FR/TXT/?uri=CELEX%3A32013R0575",
    },
    {
      id: "ec-01",
      citation:
        "France 2040, épreuve contradictoire EC-01. Compatibilité réglementaire non tranchée. Cette note ne la ferme pas.",
      href: "/documents/red-team-01",
    },
    {
      id: "ec-05",
      citation:
        "France 2040, épreuve contradictoire EC-05. Coexistence avec l’encours et financement non tranchés.",
      href: "/documents/red-team-05",
    },
  ],
};
