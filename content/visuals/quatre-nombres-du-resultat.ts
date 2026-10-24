import type { Visual } from "@/content/visuals/types";

export const quatreNombresDuResultat: Visual = {
  slug: "quatre-nombres-du-resultat",
  title: "Quatre nombres vides : crédit, contribution, fonds propres, rendement",
  lang: "fr",
  summary:
    "Le résultat bancaire se lira en quatre cellules ensemble. La contribution annuelle au stock de fin 2040 n’est pas le rendement. Le rendement est cette contribution par euro de CET1 additionnel, comparée au crédit habitat ordinaire.",
  shows:
    "Le cadre écrit avant le chiffre. Y est le crédit ménage additionnel. Z est la contribution annuelle avant impôt au stock de scénario de fin 2040, pas à l’échéance du prêt. C est le CET1 additionnel consommé. X est Z divisé par C. X se compare au même ratio sur le crédit habitat ordinaire. Les quatre cases sont vides.",
  doesNotEstablish:
    "Aucun rendement, aucune pondération, aucun traitement favorable ou défavorable de la sûreté. Un titre en milliards de contribution n’est pas le résultat. Le schéma ne dit pas que l’économie est attractive.",
  nature: "schema",
  units: "Md€ pour Y, Z et C. X est un rapport, sans valeur.",
  asOf: "23 octobre 2026 · cadre de résultat, non rempli",
  provenance:
    "Schéma France2040. Note Économie bancaire et stabilité financière, version 2026-10-23.",
  citations: [
    {
      href: "/documents/economie-bancaire/v/2026-10-23#regle-de-lecture-du-resultat-ecrite-avant-le-resultat",
      label: "Économie bancaire — règle de lecture du résultat (2026-10-23)",
    },
    {
      href: "/documents/economie-bancaire/v/2026-10-23#4-les-banques-voudraient-elles-l-originer",
      label: "Même note — le rendement comparé au crédit habitat ordinaire (2026-10-23)",
    },
  ],
  currentVersionId: "2026-10-23",
  versions: [
    {
      id: "2026-10-23",
      published: "2026-10-23",
      status: "working",
      figure: "content/visuals/quatre-nombres-du-resultat/v2026-10-23.svg",
      sha256: "27b6162334d9b6233979227f1605b7969c41ae1bd549cdb3c91945c6bfd4bb98",
      note: "Première version. Quatre cellules vides. X = Z / C, non calculé.",
    },
  ],
};
