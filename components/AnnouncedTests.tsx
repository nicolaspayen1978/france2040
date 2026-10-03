import { announcedTests } from "@/content/papers/epreuves-annoncees";

export function AnnouncedTests() {
  if (announcedTests.length === 0) {
    return null;
  }

  return (
    <section className="section" aria-labelledby="announced-heading">
      <h2 id="announced-heading">Épreuves annoncées</h2>
      <p className="intro">
        Ces épreuves ne sont pas encore écrites. Chacune sera publiée lorsque le travail correspondant
        aura été mené.
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
