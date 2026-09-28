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

      <h2>Premier constat sur le réservoir</h2>
      <p>
        <a href="https://www.insee.fr/fr/statistiques/8661938">
          Insee et Banque de France, patrimoine national fin 2024
        </a>
        . Les logements des ménages valent 4 807 Md€ et les terrains bâtis 4 043 Md€, soit 8 850 Md€.
        <a href="https://www.banque-france.fr/fr/statistiques/credit/credits-aux-particuliers-2026-07">
          Banque de France, juillet 2026
        </a>
        . L’encours des crédits à l’habitat des particuliers est de 1 289 Md€. Quarante pour cent
        de 8 850 Md€, moins cet encours, font 2 251 Md€. Le scénario de 700 Md€ en consomme environ
        31 %. À l’échelle du bilan national, le stock de logements n’est pas le plafond qui tue
        l’hypothèse. Ce calcul ne dit pas quel crédit serait souscrit.
      </p>
      <p>
        <a href="https://www.insee.fr/fr/statistiques/8727513">
          Insee, conditions de logement début 2024
        </a>
        . 37,4 % des ménages sont propriétaires de leur résidence principale sans emprunt sur ce
        logement, et 20,0 % remboursent encore. Chez les couples de 65 ans ou plus, 81,9 % sont
        propriétaires sans emprunt. La part non gagée du logement et le revenu qui pourrait en
        payer les intérêts ne sont pas établis comme étant dans les mêmes ménages.
      </p>
      <p>
        <a href="https://www.economie.gouv.fr/hcsf/mesures/mesure-relative-loctroi-de-credits-immobiliers">
          HCSF, décision du 29 septembre 2021
        </a>
        , contraignante depuis le 1er janvier 2022. Le taux d’effort est plafonné à 35 % et la
        maturité à 25 ans. Au taux de 3,30 % des nouveaux crédits à l’habitat de juillet 2026, un
        prêt très long, surtout à intérêts seuls, n’est pas montré compatible avec cette norme.
        C’est ici, et non dans le montant du patrimoine, que le scénario peut encore mourir.
      </p>
      <p>
        700 Md€ ne représentent pas une estimation du crédit qui serait effectivement souscrit. Ils
        constituent un scénario de mobilisation à tester à l’intérieur d’une capacité patrimoniale
        nationale beaucoup plus importante, sous contraintes de revenu, de réglementation et
        d’adoption. L’objection qui reste ne porte plus sur le stock national. Elle porte sur la
        distribution des emprunteurs, sur la compatibilité réglementaire, et sur l’adoption.
        L’étape suivante ne fond pas ces contraintes en un seul montant. Elle les publie séparément,
        à 30 %, 40 % et 50 % de levier : plafond de collatéral, plafond de taux d’effort, plafond
        du produit au regard de la norme, puis ce que les ménages souscriraient vraiment. Si
        700 Md€ ne tiennent qu’à 50 % et sous des règles de remboursement généreuses, le scénario
        est fragile. S’ils tiennent encore à 30 % une fois le revenu appliqué, il l’est beaucoup
        moins.
      </p>

      <h2>Crédit et dépense</h2>
      <p>
        Même si la capacité d’emprunt existait, elle ne serait pas de la demande. Un ménage peut
        consommer la somme, la garder liquide, acheter un autre actif, financer une activité, ou
        remplacer un crédit qu’il avait déjà. Aucun coefficient observé ne transforme un euro de
        crédit garanti par le logement en un euro de consommation, puis en production française.
      </p>
      <p>
        <a href="https://www.insee.fr/fr/statistiques/1377763?sommaire=1377781">
          Arrondel, Lamarche et Savignac, 2014
        </a>
        . En France, la consommation réagit peu au patrimoine, et encore moins quand le patrimoine
        est déjà élevé. Ce résultat mesure un effet de prix, pas un canal de liquidité nouveau. Il
        avertit. Il ne tranche pas.
      </p>
      <p>
        <a href="https://www.insee.fr/fr/statistiques/8672665">Insee, Focus n° 371, début 2024</a>.
        Les ménages de 50 à 79 ans détiennent 61 % du patrimoine brut. Les 10 % les mieux dotés en
        détiennent 48 %. Le réservoir est concentré là où la propension à consommer le patrimoine
        est la plus faible.
      </p>
      <p>
        Aucun taux de transformation n’est retenu comme cas central. Le tableur sonde 25 %, 50 % et
        75 % : sur 700 Md€, cela fait 175, 350 et 525 Md€ de dépense supplémentaire. Ce sont des
        sondes, pas des prévisions, et elles ne disent rien du PIB. La part qui deviendrait de la
        production française reste vide. Le taux minimum en dessous duquel le Pacte ne tient pas
        reste vide aussi : le critère de succès n’est pas encore un nombre.
      </p>

      <h2>Dépense et production française</h2>
      <p>
        Une conversion élevée du crédit en dépense ne sauve pas le mécanisme si la France ne peut
        pas produire ce qui est demandé. La dépense peut devenir des prix, des importations, ou
        l’achat d’un actif qui existait déjà.
      </p>
      <p>
        <a href="https://www.insee.fr/fr/statistiques/7702892">Insee Analyses n° 89, octobre 2023</a>
        , sur l’année 2019. 78 % de la demande intérieure finale correspond à de la valeur ajoutée
        française, et 22 % à de la valeur ajoutée étrangère. Cette part française est de 38 % pour
        les biens manufacturés, de 80 % pour les services marchands et de 96 % pour la
        construction. Le contenu moyen n’est pas le contenu de la dépense marginale du Pacte, qui
        dépend du panier encore inconnu.
      </p>
      <p>
        <a href="https://thema.u-cergy.fr/IMG/pdf/2023-08.pdf">
          Chapelle, Eyméoud et Wolf, document de travail THEMA n° 2023-08, mai 2023
        </a>
        . Dans les aires
        urbaines françaises, l’élasticité moyenne de l’offre de logement est d’environ 0,5 : une
        hausse de prix de 1 % s’accompagne d’environ 0,5 % de construction ou de population en plus.
        Une demande supplémentaire adressée au logement déjà rare se voit d’abord dans les prix.
        L’engagement productif du Pacte ne peut donc pas suivre la mobilisation du bilan. Il doit
        l’accompagner. Aucun taux de fuite n’est saisi.
      </p>
      <p>
        Le contenu français et la capacité à produire plus ne sont pas la même contrainte. La
        construction a un contenu français très élevé et une offre rigide. Les biens manufacturés
        peuvent répondre en quantités, en grande partie à l’étranger.         S’y ajoute le travail.
        <a href="https://dares.travail-emploi.gouv.fr/sites/default/files/a8ef1ab8b96f8f053d415fa42c64d50b/Dares_Note_Situation_du_march%C3%A9_du_travail_T2_2024.pdf">
          Dares, enquête de conjoncture de l’Insee, juillet 2024
        </a>
        . 71 % des entreprises de construction déclaraient des difficultés de recrutement, et 33 %
        une activité limitée par le manque de personnel. Le test reste donc
        ouvert sur deux questions distinctes : où iraient 175, 350 ou 525 Md€ de dépense, et, pour
        chaque destination, combien de volume français peut suivre. Le produit 0,65 × 0,35 n’est
        pas lu comme un effet sur le PIB.
      </p>
      <p>
        <a href="https://www.statistiques.developpement-durable.gouv.fr/rapport-du-compte-du-logement-2024">
          SDES, compte du logement 2024
        </a>
        . La construction de logements neufs, hors terrains, vaut 54,8 Md€ et les gros travaux
        67,2 Md€. Si la totalité d’une sonde allait à ces travaux, le pic — le crédit du scénario
        atteint 90 Md€ en 2031 et en 2032 — serait de 22,5 Md€ à 25 %, soit environ 18 % de ce flux,
        et de 67,5 Md€ à 75 %, soit l’ordre de grandeur du marché entier des gros travaux, en plus
        de lui. Ce n’est pas un panier retenu. Étalés sur quatorze ans, 175 Md€ font 12,5 Md€ par
        an, soit environ un dixième de ce flux. La question porte alors sur la forme du chemin, et
        surtout sur les années de pic, pas seulement sur le cumul. Le chemin n’est pas modifié pour
        cela.
      </p>

      <h2>La falaise de 2040</h2>
      <p>
        Les tests précédents demandent si le crédit peut être créé et absorbé. Celui-ci demande
        si l’économie devient dépendante de sa suite. Le test de sortie commence en 2033, quand
        le flux annuel baisse pour la première fois, et non en 2040. Le flux passe de 90 Md€ en
        2031 et en 2032 à zéro en 2040. Un crédit nul en 2040 n’est pas un choc de 90 Md€ cette
        année-là. Une fois le pic passé, les écarts annuels sont −10, −10, −15, −15, −10, −10,
        −10 et −10 Md€. Le passage du pic à zéro est cumulé sur la décrue. Ce n’est pas le
        remboursement d’un stock de 700 Md€. L’amplitude de l’impulsion, et son étalement dans
        le temps, restent vides.
      </p>
      <p>
        Une hausse des prix des logements, un refinancement ou un levier plus élevé ne comptent
        pas comme une relève : ils relanceraient le crédit. The path is not redrawn to make 2040
        easier.
      </p>

      <h2>Porter l’actif</h2>
      <p>
        Le chemin gelé demande, à son pic, 90 Md€ de crédit net par an, à taux majoritairement
        fixe et à intérêts seuls. La question est de savoir si le système financier peut originer,
        financer, couvrir et porter cet actif. Un levier de 40 % peut rassurer le prêteur sur le
        collatéral sans répondre au refinancement du principal. Le revenu de l’emprunteur, et
        l’effet de cette dette sur sa dépense, sont le test suivant.
      </p>
      <p>
        <a href="https://www.banque-france.fr/fr/publications-et-statistiques/statistiques/panorama-des-prets-lhabitat-des-menages-mars-2026">
          Banque de France, panorama de mars 2026
        </a>
        . La production de 2025, hors renégociations, est de 146,7 Md€.{" "}
        <a href="https://www.banque-france.fr/fr/publications-et-statistiques/statistiques/panorama-des-prets-lhabitat-des-menages-juillet-2026">
          Le panorama de juillet 2026
        </a>{" "}
        donne une durée initiale moyenne de 22 ans et 8 mois. 99,4 % de la production de ce
        mois est à taux fixe. Le pic de 90 Md€ est un flux. Les générations s’empilent. À intérêts seuls, que
        la maturité explorée soit 30 ans ou 40 ans, rien n’arrive à terme avant la fin du
        chemin : le stock à porter à la fin de 2040, et encore en 2050, est le cumul,
        700 Md€ de principal contractuel. Ce n’est pas, à lui seul, 700 Md€ d’obligations
        sécurisées à émettre. Le stock d’une annuité de même taux est plus bas. Le chemin
        annuel ne dit pas si chaque génération est ouverte en début ou en fin d’année, et
        cette incertitude ne change pas le constat. V2 ne choisit pas entre 30 et 40 ans.
        Sans remboursement anticipé, les échéances recopient plus tard le chemin d’origine,
        vers 2057 pour 30 ans, ou dix ans plus tard pour 40 ans. Savoir si le système
        financier peut porter ce livre reste ouvert.
      </p>
      <p>
        Les Pays-Bas ne servent pas ici de preuve en faveur des intérêts seuls. Ils sont une
        contre-épreuve possible.{" "}
        <a href="https://economy-finance.ec.europa.eu/document/download/1ec6be97-481e-4340-833c-ae4cbf1f617e_en?filename=ip274_en_UPD.pdf">
          Commission européenne, examen approfondi de 2024
        </a>
        . Après avoir limité à 50 % la part nouvelle à intérêts seuls, retiré la déductibilité de
        cette part, plafonné le levier à 100 % et abaissé le taux maximal de déduction, la
        Commission juge le régime encore favorable à la propriété financée par la dette. Cela ne
        prouve ni que les intérêts seuls se financent, ni que le Pacte échoue. La baisse de
        consommation que la Commission relie aux prêts passés sous l’eau est remise au test
        suivant. Si ce stock ne peut pas être financé et porté, le constat est noté. Le produit
        n’est pas modifié pour l’éviter.
      </p>

      <h2>Tests empiriques prioritaires</h2>
      <ul>
        {tests.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>

      <h2>Comparaisons encore à documenter</h2>
      <p>
        Le Danemark et la Suisse attendent encore. La duration comparée ici est celle du contrat français, pas la leur.
        Le Royaume-Uni et les États-Unis restent les comparaisons pour l’historique des retraits
        d’équité. Aucun de ces pays n’est un modèle à copier.
      </p>
    </article>
  );
}
