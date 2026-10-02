import { announcedTests } from "@/content/papers/epreuves-annoncees";

export function AnnouncedTests() {
  return (
    <section className="section" aria-labelledby="announced-heading">
      <h2 id="announced-heading">Épreuves annoncées</h2>
      <p className="intro">
        Ces épreuves ne sont pas encore écrites. Chacune sera publiée lorsque le travail correspondant
        aura été mené.
      </p>
      <p className="intro">
        Les premières épreuves ont testé le stock d’équité mobilisable, la transformation du crédit en
        dépense, la transformation de cette dépense en production française, la sortie du dispositif en
        2040, la capacité du système financier à porter l’actif, la boucle fiscale, la trajectoire de
        la dette, puis l’immobilier et la stabilité financière. EC-06, EC-07 et EC-08 sont ouvertes :
        elles ne chiffrent encore ni le retour par euro, ni le chemin du déficit et des intérêts, ni
        la transmission d’un choc de prix.
      </p>
      <p className="intro">
        Reste une dernière épreuve, qui combinera plusieurs hypothèses défavorables pour situer les
        limites de fonctionnement du mécanisme.
      </p>
      <ul className="doc-list">
        {announcedTests.map((test) => (
          <li key={test.id}>
            <div className="announced">
              <p className="doc-meta">À écrire</p>
              <p className="doc-title">{test.title}</p>
              <p className="doc-summary">{test.summary}</p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
