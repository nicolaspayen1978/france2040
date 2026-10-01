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
        2040, la capacité du système financier à porter l’actif, la boucle fiscale et la trajectoire de
        la dette. EC-06 et EC-07 sont ouvertes : elles ne chiffrent encore ni le retour par euro, ni le
        chemin du déficit et des intérêts.
      </p>
      <p className="intro">
        Restent les risques que le mécanisme fait porter à l’immobilier et au système financier. Une
        dernière épreuve combinera ensuite plusieurs hypothèses défavorables.
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
