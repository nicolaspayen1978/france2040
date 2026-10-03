import Link from "next/link";
import { sectionMetadata } from "@/lib/paperMeta";

export const metadata = sectionMetadata({
  title: "Le projet",
  description:
    "France 2040 est un projet de recherche indépendant initié par Nicolas Payen. Il explore et met à l’épreuve des hypothèses de politique publique à l’horizon 2040.",
  path: "/projet",
});

export default function ProjectPage() {
  return (
    <article className="page-prose wide-page project-page">
      <h1>Le projet</h1>

      <section className="project-method" aria-labelledby="pourquoi-heading">
        <h2 id="pourquoi-heading">Pourquoi France 2040</h2>
        <p>
          France 2040 est un projet de recherche indépendant initié par Nicolas Payen. Il explore
          et met à l’épreuve des hypothèses de politique publique à l’horizon 2040. Son premier
          chantier est le <Link href="/pacte">Pacte du bilan français</Link>.
        </p>
        <p>
          Vivre et travailler dans plusieurs pays m’a permis de découvrir d’autres modèles
          économiques, d’autres équilibres sociaux et différentes façons d’organiser la relation
          entre l’État, les entreprises et les citoyens.
        </p>
        <p>
          La France est mon pays de naissance. Même à distance, sa solidité, sa capacité à
          préparer l’avenir et la pérennité du rôle singulier qu’elle joue dans le monde restent
          pour moi une préoccupation profonde. France 2040 est né de cette interrogation :
          peut-on regarder autrement certaines des ressources dont le pays dispose et tester,
          ouvertement et contradictoirement, ce qu’elles permettraient ?
        </p>
        <p>
          France 2040 ne porte pas un programme politique et ne représente aucune administration,
          institution ou organisation publique. C’est une contribution personnelle au débat,
          construite pour pouvoir être examinée, critiquée et, lorsque les faits l’exigent,
          corrigée.
        </p>
      </section>

      <section className="project-method" aria-labelledby="comment-heading">
        <h2 id="comment-heading">Comment le travail est conduit</h2>
        <p>
          Les analyses s’appuient autant que possible sur des sources publiques et identifiables.
          Elles sont citées afin que les chiffres, hypothèses et raisonnements puissent être
          vérifiés et contestés.
        </p>
        <p>
          Les travaux sont publiés sous forme de documents versionnés. Une version publiée reste
          fixe. Lorsqu’une analyse évolue, une nouvelle version est publiée plutôt que de
          réécrire silencieusement la précédente. Les graphiques et schémas
          d’<Link href="/en-images">En images</Link> sont eux aussi des objets identifiables,
          accompagnés de leur contexte, de leur statut et de leurs sources.
        </p>
        <p>
          Les hypothèses importantes sont soumises à des épreuves contradictoires. Leur fonction
          n’est pas de confirmer le Pacte, mais de rechercher ce qui pourrait l’invalider, en
          limiter la portée ou imposer sa modification. Une épreuve annoncée reste annoncée tant
          qu’elle n’a pas été conduite. Un verdict non tranché reste non tranché.
        </p>
        <p>
          La critique fait partie de cette méthode. Elle peut porter sur un document, une version
          et un passage précis. Les contributions publiées sont attachées au texte auquel elles
          répondent ; elles ne modifient jamais rétroactivement une version figée.
        </p>
      </section>

      <section className="project-method" aria-labelledby="ia-heading">
        <h2 id="ia-heading">Une recherche augmentée par l’IA</h2>
        <p>
          France 2040 expérimente également une nouvelle manière de conduire un travail de
          recherche ouvert.
        </p>
        <p>
          L’intelligence artificielle est utilisée pour rechercher, confronter et organiser des
          sources, explorer des hypothèses, tester la cohérence des analyses et produire certains
          supports. Elle peut se tromper.
        </p>
        <p>
          Elle ne constitue pas une source, ne tranche pas les épreuves contradictoires et ne
          remplace ni la vérification humaine, ni la contradiction, ni la responsabilité
          éditoriale du projet.
        </p>
      </section>

      <section className="project-method" aria-labelledby="financement-heading">
        <h2 id="financement-heading">Financement et indépendance</h2>
        <p>
          France 2040 est financé à ce stade par son initiateur et peut recevoir des contributions
          volontaires destinées à permettre la poursuite des travaux et leur publication en accès
          libre.
        </p>
        <p>
          Ces contributions n’ouvrent droit à aucune réduction fiscale. Elles ne donnent aucun
          droit sur les conclusions du projet, les hypothèses retenues, les versions publiées ou
          la modération des contributions.
        </p>
        <p>
          Les modalités de soutien sont présentées dans{" "}
          <Link href="/participer">Participer</Link>.
        </p>
      </section>

      <section className="project-method" aria-labelledby="principes-heading">
        <h2 id="principes-heading">Principes de publication</h2>
        <p>
          Une version publiée est un instantané figé du travail à une date donnée. Une évolution
          donne lieu à une nouvelle version.
        </p>
        <p>
          Un verdict ouvert reste ouvert jusqu’à ce qu’un travail ultérieur permette éventuellement
          de le modifier.
        </p>
        <p>
          Une critique peut être attachée à un passage identifiable et cité. Elle complète le
          dossier contradictoire ; elle ne réécrit pas le document auquel elle répond.
        </p>
        <p>
          Les cases vides restent vides. Une donnée manquante, un coefficient non établi ou une
          épreuve non tranchée ne sont pas complétés pour rendre le récit plus convaincant. Les
          simulations, hypothèses et données observées doivent rester distinguables.
        </p>
        <p>
          France 2040 ne demande pas que son hypothèse soit crue. Il cherche à rendre possible son
          examen.
        </p>
      </section>
    </article>
  );
}
