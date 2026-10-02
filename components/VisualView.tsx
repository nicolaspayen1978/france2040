import Link from "next/link";
import { ShareAction } from "@/components/ShareAction";
import {
  getVisualVersion,
  loadVisualFigure,
  visualNatureLabel,
  visualPath,
  visualStatusLabel,
} from "@/lib/visuals";
import type { Visual } from "@/content/visuals/types";
import { formatDate } from "@/lib/documents";

type Props = {
  visual: Visual;
  versionId: string;
};

export function VisualView({ visual, versionId }: Props) {
  const version = getVisualVersion(visual, versionId);
  if (!version) {
    throw new Error(`Version manquante : ${visual.slug}/${versionId}`);
  }

  const figure = loadVisualFigure(version);
  const address = visualPath(visual, version.id);
  const isCurrent = versionId === visual.currentVersionId;
  const natureLine = visual.natureNote
    ? `${visualNatureLabel(visual.nature)}. ${visual.natureNote}`
    : visualNatureLabel(visual.nature);

  return (
    <article className="visual">
      <nav className="crumbs" aria-label="Fil d’Ariane">
        <Link href="/en-images">En images</Link>
        <span aria-hidden="true"> · </span>
        <span>{visual.title}</span>
      </nav>

      <p className="doc-meta">
        {visualStatusLabel(version.status)} · {formatDate(version.published)}
      </p>
      <h1>{visual.title}</h1>
      <p className="lede">{visual.summary}</p>

      <p>
        Version {version.id}
        {isCurrent ? " — version actuelle" : ""}
      </p>
      <p>
        Adresse : <Link href={address}>{address}</Link>
      </p>
      <p>
        <ShareAction
          title={visual.title}
          text={visual.summary}
          url={address}
          label="Partager ce visuel"
        />
      </p>

      <figure className="visual-figure">
        <div
          className="visual-figure-frame"
          dangerouslySetInnerHTML={{ __html: figure }}
        />
        <figcaption className="visual-caption">{visual.summary}</figcaption>
      </figure>

      <section className="section" aria-labelledby="shows-heading">
        <h2 id="shows-heading">Ce que montre ce graphique</h2>
        <p>{visual.shows}</p>
      </section>

      <section className="section" aria-labelledby="limits-heading">
        <h2 id="limits-heading">Ce que cela n’établit pas</h2>
        <p>{visual.doesNotEstablish}</p>
      </section>

      <section className="section" aria-labelledby="meta-heading">
        <h2 id="meta-heading">Nature, unités, provenance</h2>
        <p>
          <span className="visual-label">Nature.</span> {natureLine}
        </p>
        <p>
          <span className="visual-label">Unités et date.</span> {visual.units} · {visual.asOf}
        </p>
        <p>
          <span className="visual-label">Provenance.</span> {visual.provenance}
        </p>
      </section>

      <section className="sources" aria-labelledby="citations-heading">
        <h2 id="citations-heading">Documents cités</h2>
        <ul>
          {visual.citations.map((citation) => (
            <li key={citation.href}>
              <Link href={citation.href}>{citation.label}</Link>
            </li>
          ))}
        </ul>
        <p className="intro">
          Contester cette lecture → commenter le document cité, lorsque la discussion sera ouverte.
        </p>
      </section>

      <section className="paper-history" aria-labelledby="versions-heading">
        <h2 id="versions-heading">Versions</h2>
        <ol>
          {visual.versions.map((entry) => (
            <li key={entry.id}>
              <Link href={visualPath(visual, entry.id)}>{entry.id}</Link>
              <span>
                {" "}
                · {formatDate(entry.published)} · {visualStatusLabel(entry.status)}
              </span>
              <p>{entry.note}</p>
            </li>
          ))}
        </ol>
      </section>
    </article>
  );
}
