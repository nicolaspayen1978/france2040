import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Le Pacte",
  description:
    "Brouillon public du Pacte du bilan français : mobiliser une seule fois une fraction du patrimoine privé, entre 2027 et 2040.",
};

const creditPath = [
  ["2027", "25"],
  ["2028", "45"],
  ["2029", "65"],
  ["2030", "80"],
  ["2031", "90"],
  ["2032", "90"],
  ["2033", "80"],
  ["2034", "70"],
  ["2035", "55"],
  ["2036", "40"],
  ["2037", "30"],
  ["2038", "20"],
  ["2039", "10"],
  ["2040", "0"],
];

const sections = [
  ["paradoxe", "Le paradoxe"],
  ["proposition", "La proposition"],
  ["engagements", "Quatre engagements"],
  ["mecanisme", "Le mécanisme"],
  ["spread", "Le Pacte Spread"],
  ["interets", "Pourquoi les intérêts seuls"],
  ["limites", "Ce que le Pacte n’est pas"],
  ["risques", "Les risques"],
  ["test", "Le test de 2040"],
];

export default function PactPage() {
  return (
    <article className="pact">
      <p className="kicker">Brouillon public · 28 septembre 2026</p>
      <h1>Le Pacte du bilan français</h1>
      <p className="lede">
        Mobiliser une seule fois une fraction du patrimoine privé pour restaurer le bilan public
        et transformer la capacité productive du pays, de 2027 à 2040.
      </p>
      <p className="status">
        Hypothèse à examiner, non un programme arrêté. Ce site n’engage ni le Gouvernement, ni
        aucune administration. Les documents de travail restent en anglais.
      </p>

      <p>
        La France entre dans une période où trois contraintes se superposent : des finances
        publiques dégradées, le vieillissement démographique, et un besoin d’investissement
        productif. En parallèle, le patrimoine des ménages est considérable : 14 953 Md€ fin 2024,
        dont une part importante est immobilière.
      </p>
      <p>
        Le Pacte explore une idée simple, et radicale. Utiliser une seule fois une fraction
        prudente de cette capacité patrimoniale, pour ouvrir une fenêtre de transition. Pendant
        cette fenêtre, l’État rétablit sa trajectoire budgétaire, et l’économie augmente son offre
        productive.
      </p>
      <p>
        Le mécanisme n’est pas une relance permanente par la dette. Le scénario de travail
        mobilise environ 700 Md€ de crédit net nouveau entre 2027 et 2040, avec une montée puis
        une extinction programmée. Le produit envisagé est de longue durée, principalement à taux
        fixe et à intérêts seuls, avec un ratio prêt sur valeur consolidé de l’ordre de 40 à
        50 %. La réussite se mesure à ceci : en 2040, la France n’a plus besoin d’accélérer ce
        crédit.
      </p>
      <p>
        Le Pacte n’est défendable que comme un contrat à quatre engagements : une réforme
        patrimoniale et financière ; une expansion de l’offre et de l’investissement ; l’emploi et
        la sécurité du revenu ; une discipline budgétaire publique contraignante.
      </p>

      <ol className="toc">
        {sections.map(([id, label]) => (
          <li key={id}>
            <a href={`#${id}`}>{label}</a>
          </li>
        ))}
      </ol>

      <h2 id="paradoxe">Le paradoxe</h2>
      <p>
        Fin 2025, la dette publique atteint 115,6 % du PIB et le déficit 5,1 %. Les dépenses
        publiques représentent 57,2 % du PIB. Le PIB nominal de 2025 est de 2 991,1 Md€. À
        l’inverse, le patrimoine des ménages atteignait 14 953 Md€ fin 2024.
      </p>
      <p>
        Le problème français peut donc se lire non seulement comme un problème de flux
        budgétaires, mais comme une mauvaise articulation entre un bilan public très endetté et un
        bilan privé fortement capitalisé.
      </p>
      <p>
        Cette lecture ne signifie pas que le patrimoine privé appartient à l’État. Le mécanisme
        repose sur des décisions volontaires des ménages, une intermédiation bancaire privée et
        des garde-fous prudentiels. L’État crée le cadre. Il ne saisit pas le patrimoine.
      </p>

      <h2 id="proposition">La proposition</h2>
      <ol>
        <li>
          Créer un cadre national de mobilisation volontaire de l’équité immobilière : des prêts
          longs, principalement à taux fixe et à intérêts seuls.
        </li>
        <li>
          Limiter le levier par un ratio prêt sur valeur consolidé, de l’ordre de 40 à 50 %,
          calculé sur l’ensemble des dettes garanties par le logement.
        </li>
        <li>
          Faire monter le flux de crédit, puis le ramener à zéro en 2040. Le scénario de travail
          cumule 700 Md€ de crédit net.
        </li>
        <li>
          Accompagner la demande ainsi créée par un programme d’offre : logement, énergie,
          rénovation, industrie, services, infrastructures et capital productif.
        </li>
        <li>
          Inscrire une règle de dépense publique nominale, et suivre le Pacte Spread : la
          croissance du PIB nominal moins la croissance nominale de la dépense publique.
        </li>
      </ol>
      <table className="schedule">
        <caption className="doc-meta">Scénario de travail, crédit net annuel</caption>
        <thead>
          <tr>
            <th scope="col">Année</th>
            <th scope="col">Md€</th>
          </tr>
        </thead>
        <tbody>
          {creditPath.map(([year, amount]) => (
            <tr key={year}>
              <td>{year}</td>
              <td>{amount}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <h2 id="engagements">Quatre engagements</h2>
      <dl className="commitments">
        <div>
          <dt>Patrimoine</dt>
          <dd>
            Accès volontaire, transparence, conseil, protections contre le surendettement, plafonds
            de levier.
          </dd>
        </div>
        <div>
          <dt>Production</dt>
          <dd>
            Une capacité domestique accrue, pour absorber la demande sans dérive des prix ni des
            importations.
          </dd>
        </div>
        <div>
          <dt>Travail</dt>
          <dd>
            Plein emploi, formation, mobilité et sécurité du revenu, afin que la dette privée
            reste soutenable.
          </dd>
        </div>
        <div>
          <dt>État</dt>
          <dd>
            Règle de dépense, transparence annuelle, et mécanisme correctif si le Pacte Spread
            disparaît.
          </dd>
        </div>
      </dl>

      <h2 id="mecanisme">Le mécanisme</h2>
      <p>
        Un euro emprunté n’est pas un euro de PIB. Une partie est épargnée, une partie rembourse
        d’autres dettes, une partie achète des actifs existants, une partie part en importations.
        Le crédit n’est utile que s’il finance une dépense domestique additionnelle, et si l’offre
        y répond.
      </p>
      <p>
        Le scénario de travail retient, comme hypothèses modifiables et non comme prévisions,
        1,0 % de croissance réelle sous-jacente et 2,5 % de déflateur du PIB. La hausse des prix
        immobiliers n’est pas traitée comme une source de croissance réelle.
      </p>

      <h2 id="spread">Le Pacte Spread</h2>
      <p>
        L’indicateur central est simple : croissance nominale du PIB moins croissance nominale des
        dépenses publiques. Tant que cet écart reste durablement positif, le poids des dépenses
        peut se réduire sans austérité nominale. Le scénario de travail teste une croissance
        nominale des dépenses de 2,0 %, et un écart de l’ordre de 1,5 à 3,2 points selon les
        années.
      </p>
      <p>
        Cette règle ne remplace pas un modèle complet de la dette. Elle sert de boussole, et de
        test de cohérence.
      </p>

      <h2 id="interets">Pourquoi les intérêts seuls</h2>
      <p>
        Les intérêts seuls réduisent la charge mensuelle. Ils transforment du patrimoine illiquide
        en capacité de dépense ou d’investissement, sans exiger un remboursement rapide du
        capital. Ils reportent en revanche le remboursement du principal. Ils ne se conçoivent
        donc qu’avec un levier prudent, une maturité longue, des règles explicites en cas de vente
        ou de succession, et des tests de résistance sur les taux, le revenu et les prix
        immobiliers.
      </p>
      <p>
        La France a déjà une culture du taux fixe : 99,4 % de la production de crédits à l’habitat
        aux particuliers était à taux fixe en juillet 2026.
      </p>

      <h2 id="limites">Ce que le Pacte n’est pas</h2>
      <ul>
        <li>Une taxe sur le patrimoine, ou une réquisition de l’épargne.</li>
        <li>Une promesse que la hausse des prix immobiliers crée de la richesse réelle.</li>
        <li>Une relance permanente.</li>
        <li>Une recommandation de crédit pour tous : certains ménages ne doivent pas emprunter.</li>
        <li>
          Un texte prêt à être légiféré. La proposition doit encore être éprouvée par des
          économistes, des banques, des juristes et les autorités prudentielles.
        </li>
      </ul>

      <h2 id="risques">Les risques</h2>
      <p>La thèse peut être invalidée par :</p>
      <ul>
        <li>une inflation immobilière sans hausse suffisante de l’offre ;</li>
        <li>une fuite de la demande vers les importations ;</li>
        <li>
          un crédit utilisé pour refinancer ou acheter des actifs, plutôt que pour financer une
          demande nouvelle ;
        </li>
        <li>un bénéfice direct réservé aux propriétaires ;</li>
        <li>un risque bancaire de durée et de financement ;</li>
        <li>un stimulus privé sans la discipline publique qui est sa contrepartie ;</li>
        <li>une économie qui, après 2035, ne tiendrait plus sans un flux de crédit croissant.</li>
      </ul>
      <p>
        Les volumes annuels ne seraient pas des droits acquis. Ils seraient modulés selon
        l’inflation, les prix immobiliers, la croissance du crédit, le déficit extérieur, la
        capacité du bâtiment, le chômage et la trajectoire de dépense publique. Le franchissement
        de seuils ralentirait automatiquement les nouveaux prêts.
      </p>

      <h2 id="test">Le test de 2040</h2>
      <p>
        Le test est sévère. Dette publique et déficit sur une trajectoire soutenable. Capacité
        productive plus élevée. Taux d’emploi supérieur. Ménages restés dans des ratios de levier
        prudents. Flux de nouveau crédit du Pacte revenu à zéro.
      </p>
      <p>
        Si la stabilité de 2040 exigeait une nouvelle accélération du crédit adossé au logement,
        le Pacte aurait échoué.
      </p>

      <section className="sources" aria-labelledby="sources-heading">
        <h2 id="sources-heading">Sources</h2>
        <ul>
          <li>
            <a href="https://www.insee.fr/fr/statistiques/8988793">
              Insee, comptes nationaux 2025
            </a>
            . PIB 2025 : 2 991,1 Md€ ; croissance réelle : 0,8 %.
          </li>
          <li>
            <a href="https://www.insee.fr/fr/statistiques/8956575">
              Insee, finances publiques 2025
            </a>
            . Déficit public : 5,1 % du PIB ; dette publique : 115,6 % du PIB ; dépenses
            publiques : 57,2 % du PIB.
          </li>
          <li>
            <a href="https://www.insee.fr/fr/statistiques/8661938">
              Insee et Banque de France, patrimoine national 2024
            </a>
            . Patrimoine des ménages : 14 953 Md€.
          </li>
          <li>
            <a href="https://www.banque-france.fr/fr/statistiques/credit/credits-aux-particuliers-2026-07">
              Banque de France, crédits aux particuliers, juillet 2026
            </a>
            . 99,4 % de la production de crédits à l’habitat à taux fixe.
          </li>
        </ul>
      </section>
    </article>
  );
}
