import Link from "next/link";
import { CritiqueLink } from "@/components/CritiqueLink";
import { ShareAction } from "@/components/ShareAction";
import type { ReactNode } from "react";
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

function VisualSection({
  visual,
  versionId,
  headingId,
  title,
  children,
}: {
  visual: Visual;
  versionId: string;
  headingId: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <section className="section visual-section" aria-labelledby={headingId}>
      <h2 id={headingId}>
        <CritiqueLink
          target={{
            kind: "visual",
            slug: visual.slug,
            versionId,
            anchorId: headingId,
            section: title,
          }}
        />
        {title}
      </h2>
      {children}
    </section>
  );
}

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

  const figureTarget = {
    kind: "visual" as const,
    slug: visual.slug,
    versionId: version.id,
    anchorId: "figure",
    section: visual.title,
  };

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

      <figure className="visual-figure" id="figure">
        <CritiqueLink target={figureTarget} />
        <div
          className="visual-figure-frame"
          dangerouslySetInnerHTML={{ __html: figure }}
        />
        <figcaption className="visual-caption">{visual.summary}</figcaption>
      </figure>

      <VisualSection visual={visual} versionId={version.id} headingId="shows-heading" title="Ce que montre ce graphique">
        <p>{visual.shows}</p>
      </VisualSection>

      <VisualSection
        visual={visual}
        versionId={version.id}
        headingId="limits-heading"
        title="Ce que cela n’établit pas"
      >
        <p>{visual.doesNotEstablish}</p>
      </VisualSection>

      <VisualSection
        visual={visual}
        versionId={version.id}
        headingId="meta-heading"
        title="Nature, unités, provenance"
      >
        <p>
          <span className="visual-label">Nature.</span> {natureLine}
        </p>
        <p>
          <span className="visual-label">Unités et date.</span> {visual.units} · {visual.asOf}
        </p>
        <p>
          <span className="visual-label">Provenance.</span> {visual.provenance}
        </p>
      </VisualSection>

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
          Contester cette lecture → utiliser « Critiquer » sur le graphique ou une section, ou commenter
          le document cité.
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
