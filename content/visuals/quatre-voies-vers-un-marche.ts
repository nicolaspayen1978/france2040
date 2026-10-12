import type { Visual } from "@/content/visuals/types";

export const quatreVoiesVersUnMarche: Visual = {
  slug: "quatre-voies-vers-un-marche",
  title: "Quatre voies vers un marché",
  lang: "fr",
  summary:
    "De la possibilité juridique à un marché : expérimenter, ouvrir un cahier des charges, traiter le verrou prudentiel, puis légiférer seulement si un obstacle résiduel est démontré.",
  shows:
    "Quatre niveaux croissants, pas quatre produits. 1. Une banque expérimente sous le droit existant ; ce n’est pas une distribution de masse. 2. Plusieurs banques, notaires et garants peuvent partager un cahier des charges ; chacune décide et fixe son prix. Cela peut rendre l’opération plus simple, et potentiellement moins coûteuse. 3. Pour une distribution large du crédit long in fine, la lecture publiée du HCSF place encore le capital dans la dernière année. L’annuité notionnelle est un candidat à tester, pas une décision obtenue. 4. La loi ne vient que pour un obstacle qu’une norme privée ou le HCSF ne lèvent pas. Elle peut régler une donnée ou un consentement sans créer de crédit. Un cas qui échoue n’arrête pas les autres.",
  doesNotEstablish:
    "Ce schéma ne crée pas un produit et ne dit pas que le prix sera bas. Il ne dit pas que le HCSF acceptera l’annuité notionnelle, ni que la France doive copier les Pays-Bas. Il ne ferme pas EC-01 ni EC-05. Il ne modifie pas le scénario de 700 Md€. Les quatre voies ne sont pas quatre politiques exclusives.",
  nature: "schema",
  units: "Quatre niveaux de coordination. Aucune unité monétaire.",
  asOf: "13 octobre 2026",
  provenance:
    "Schéma France2040. Lecture de la note Standardiser un crédit adossé au logement, version 2026-10-13-2, sections sur les voies et sur les conditions d’arrêt.",
  citations: [
    {
      href: "/documents/standard-credit-logement/v/2026-10-13-2#5-de-la-possibilite-juridique-a-un-marche",
      label: "Standardiser un crédit adossé au logement — les quatre voies (2026-10-13-2)",
    },
    {
      href: "/documents/standard-credit-logement/v/2026-10-13-2#6-sequence-et-conditions-d-arret",
      label: "Même note — un cas qui échoue n’arrête pas le programme (2026-10-13-2)",
    },
  ],
  currentVersionId: "2026-10-13",
  versions: [
    {
      id: "2026-10-13",
      published: "2026-10-13",
      status: "working",
      figure: "content/visuals/quatre-voies-vers-un-marche/v2026-10-13.svg",
      sha256: "d994ed8ec163dc2590df31b1b7752221efcb86e07e9a4e07bf32beccd26ebd23",
      note: "Première version. Escalade en quatre voies. Ne crée pas un produit public.",
    },
  ],
};
