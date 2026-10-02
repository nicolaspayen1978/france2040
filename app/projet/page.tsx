import Link from "next/link";
import { sectionMetadata } from "@/lib/paperMeta";

export const metadata = sectionMetadata({
  title: "Le projet",
  description:
    "France 2040 est un projet de recherche indépendant. Ce site n’est pas un site officiel de l’État.",
  path: "/projet",
});

export default function ProjectPage() {
  return (
    <article className="page-prose">
      <h1>Le projet</h1>
      <p>
        France 2040 est un projet de recherche indépendant consacré aux politiques publiques de
        la France à l’horizon 2040.
      </p>
      <p>
        Son texte public est le <Link href="/pacte">Pacte du bilan français</Link> : une
        hypothèse publiée pour être mise à l’épreuve, non un plan pour la France.
      </p>
      <section className="project-method" aria-labelledby="method-heading">
        <h2 id="method-heading">Méthode et transparence</h2>
        <p>
          France 2040 s’appuie sur des données, publications et sources accessibles au public. Les
          sources mobilisées sont citées dans les documents afin que les analyses puissent être
          vérifiées, contestées et reproduites.
        </p>
        <p>
          Des outils d’intelligence artificielle sont utilisés pour accélérer la recherche
          documentaire, explorer des hypothèses, aider à vérifier la cohérence des analyses et
          produire certains supports. Ils ne constituent pas une source et ne remplacent ni la
          vérification humaine, ni la contradiction, ni la responsabilité éditoriale du projet.
        </p>
      </section>
      <p>
        Ce site n’est pas un site officiel de l’État. Il n’engage ni le Gouvernement, ni aucune
        administration.
      </p>
    </article>
  );
}
