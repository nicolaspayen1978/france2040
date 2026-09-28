import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Questions ouvertes",
  description:
    "Affirmations du Pacte du bilan français qui restent à valider empiriquement. 28 septembre 2026.",
};

const hypotheses = [
  "Croissance réelle sous-jacente de 1,0 %, à tester entre 0 et 2 %.",
  "Déflateur du PIB de 2,5 %, à tester entre 1,5 et 4 %.",
  "Croissance nominale de la dépense publique de 2,0 % par an, à tester entre 1 et 3 %.",
  "Crédit net cumulé d’environ 700 Md€, à tester entre 400 et 900 Md€. C’est un scénario, pas une mesure du réservoir mobilisable.",
  "Plafond de levier consolidé de 40 à 50 %, avec un essai de stress à 50–60 %.",
  "Trajectoire des prix immobiliers : les essais à +3, +5 et +6 % ne suffisent pas. Un choc de −20 % doit être dans le modèle.",
  "Multiplicateur du crédit vers le PIB : à estimer. Il n’est pas connu.",
];

const tests = [
  "Propension à consommer après une extraction d’équité, selon l’âge et le revenu.",
  "Part de la dépense additionnelle qui reste en France, et contenu importé.",
  "Effet sur les prix immobiliers lorsque l’offre de logement est contrainte.",
  "Sensibilité du défaut au poids des intérêts dans le revenu, pour un prêt à intérêts seuls et à levier faible.",
  "Capacité du marché français des obligations sécurisées à financer des maturités longues supplémentaires.",
  "Distribution du patrimoine : qui peut emprunter, pour quel montant, et qui reste dehors.",
];

export default function OpenQuestionsPage() {
  return (
    <article className="pact">
      <p className="kicker">Document de travail · 28 septembre 2026</p>
      <h1>Questions ouvertes</h1>
      <p className="lede">
        Ce qui reste à établir. Cette page n’est pas encore un dossier de preuves. Elle sépare les
        faits déjà sourcés des affirmations qui ne doivent pas être présentées comme telles.
      </p>
      <div className="version-box">
        <p>Recherche et éléments de preuve — 28 septembre 2026</p>
        <p>
          Liste soumise à critique. Elle est appelée à devenir le dossier de preuves, à mesure que
          chaque point est tranché par une source ou abandonné.
        </p>
      </div>

      <h2>Déjà établi</h2>
      <ul>
        <li>
          <a href="https://www.insee.fr/fr/statistiques/8988793">Insee, comptes nationaux 2025</a>.
          PIB : 2 991,1 Md€. Croissance réelle : 0,8 %.
        </li>
        <li>
          <a href="https://www.insee.fr/fr/statistiques/8956575">
            Insee, finances publiques 2025
          </a>
          . Déficit : 5,1 % du PIB. Dette : 115,6 % du PIB. Dépenses : 57,2 % du PIB.
        </li>
        <li>
          <a href="https://www.insee.fr/fr/statistiques/8661938">
            Insee et Banque de France, patrimoine national 2024
          </a>
          . Patrimoine des ménages : 14 953 Md€. Patrimoine financier net : 4 986 Md€.
        </li>
        <li>
          <a href="https://www.insee.fr/fr/statistiques/8569009">
            Insee, détention de patrimoine 2024
          </a>
          . 61,2 % des ménages détiennent du patrimoine immobilier. 45,6 % ont un emprunt en cours.
        </li>
        <li>
          <a href="https://www.banque-france.fr/fr/statistiques/credit/credits-aux-particuliers-2026-07">
            Banque de France, crédits aux particuliers, juillet 2026
          </a>
          . Encours des crédits à l’habitat des particuliers : 1 289 Md€. 99,4 % de la production
          à taux fixe.
        </li>
      </ul>

      <h2>À ne pas présenter comme des faits</h2>
      <ul>
        {hypotheses.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>

      <h2>Tests empiriques prioritaires</h2>
      <ul>
        {tests.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>

      <h2>Comparaisons encore à documenter</h2>
      <p>
        Les Pays-Bas, le Danemark et la Suisse sont des laboratoires de structure hypothécaire :
        intérêt seul, financement obligataire, faible amortissement, règles macroprudentielles. Le
        Royaume-Uni et les États-Unis le sont pour l’historique des retraits d’équité. Aucun n’est
        un modèle à copier. La prochaine version devra s’appuyer sur les banques centrales, les
        régulateurs et la recherche académique, et dire ce qui empêche une transposition.
      </p>
    </article>
  );
}
