import type { Visual } from "@/content/visuals/types";

export const sureteDistinctePasEchelle: Visual = {
  slug: "surete-distincte-pas-echelle",
  title: "Une hypothèque distincte n’est pas une distribution à l’échelle",
  lang: "fr",
  summary:
    "Le droit des sûretés permet une hypothèque nouvelle sans refinancer le premier prêt. La lecture publiée du HCSF compte le capital final dans le taux d’effort. Le prix et le consentement restent ouverts.",
  shows:
    "Trois qualifications séparées. Le droit actuel permet d’inscrire une hypothèque distincte derrière un prêt hypothécaire déjà en place, sans loi de produit et sans refinancement imposé par les seules règles de rang. La FAQ du secrétariat du HCSF, du 29 janvier 2024, fait entrer le remboursement final du capital dans le taux d’effort de la dernière année, très probablement au-dessus de 35 % ; une maturité de 20 ans peut néanmoins tenir dans le plafond de 25 ans. Le consentement des prêts cautionnés, le prix du rang postérieur, le solde du premier prêt et le refinancement ne sont pas établis. L’exemple 40 % plus 40 % égale 80 % de dette consolidée sépare deux tests.",
  doesNotEstablish:
    "Ce schéma n’approuve pas un produit et ne crée pas une norme bancaire. Il ne ferme pas l’épreuve contradictoire EC-01 ni EC-05. La FAQ du secrétariat dit elle-même qu’elle n’a pas de portée normative : elle ne remplace pas une décision du HCSF. Le 35 % est le seuil de la décision d’octroi, pas un taux de défaut. L’exemple 40 + 40 = 80 n’est pas une distribution observée. Aucun prix, aucun volume et aucun scénario de 700 Md€ n’en sort.",
  nature: "schema",
  units:
    "Sans unité monétaire. Le 35 % est le seuil de taux d’effort de la décision du HCSF. L’exemple 40 + 40 = 80 est une arithmétique de ratios, pas un stock.",
  asOf: "12 octobre 2026 · FAQ du secrétariat du HCSF datée du 29 janvier 2024",
  provenance:
    "Schéma France2040. Lecture de la note Standardiser un crédit garanti par le logement déjà détenu, version 2026-10-12.",
  citations: [
    {
      href: "/documents/standard-credit-logement/v/2026-10-12#4-la-contrainte-qui-lie",
      label:
        "Standardiser un crédit garanti par le logement déjà détenu — la contrainte qui lie (2026-10-12)",
    },
    {
      href: "/documents/standard-credit-logement/v/2026-10-12#3-le-pret-deja-en-place",
      label:
        "Même note — le prêt déjà en place, trois cas (2026-10-12)",
    },
  ],
  currentVersionId: "2026-10-12",
  versions: [
    {
      id: "2026-10-12",
      published: "2026-10-12",
      status: "working",
      figure: "content/visuals/surete-distincte-pas-echelle/v2026-10-12.svg",
      sha256: "163592eecb8a36915e7630a75c7dbe6d32105eeee8058c128b1a6bd479d80657",
      note: "Première version. Trois qualifications et trois cas de prêt existant. Ne ferme aucune épreuve.",
    },
  ],
};
