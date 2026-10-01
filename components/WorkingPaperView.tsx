import Link from "next/link";
import type { ReactNode } from "react";
import type { WorkingPaper } from "@/content/papers/types";
import { formatDate } from "@/lib/documents";
import type { PaperBlock } from "@/lib/parsePaper";
import { statusLabel, versionPath } from "@/lib/papers";

type WorkingPaperViewProps = {
  paper: WorkingPaper;
  versionId: string;
  blocks: PaperBlock[];
};

function inline(text: string): ReactNode[] {
  const nodes: ReactNode[] = [];
  const pattern = /\[([^\]]+)\]\(([^)\s]+)\)|\*\*([^*]+)\*\*|\*([^*]+)\*/g;
  let last = 0;
  let key = 0;
  let match: RegExpExecArray | null;

  while ((match = pattern.exec(text))) {
    if (match.index > last) nodes.push(text.slice(last, match.index));
    if (match[1] !== undefined) {
      nodes.push(
        <a key={key} href={match[2]}>
          {match[1]}
        </a>,
      );
    } else if (match[3] !== undefined) {
      nodes.push(<strong key={key}>{match[3]}</strong>);
    } else {
      nodes.push(<em key={key}>{match[4]}</em>);
    }
    key += 1;
    last = match.index + match[0].length;
  }

  if (last < text.length) nodes.push(text.slice(last));
  return nodes;
}

export function WorkingPaperView({ paper, versionId, blocks }: WorkingPaperViewProps) {
  const version = paper.versions.find((item) => item.id === versionId);

  if (!version) {
    throw new Error(`Unknown version ${versionId}`);
  }

  const address = versionPath(paper, version.id);
  const current = version.id === paper.currentVersionId;
  const headings = blocks.filter((block) => block.kind === "heading");

  return (
    <article className="paper" lang={paper.lang}>
      <Link className="back" href="/documents">
        Documents
      </Link>
      <p className="kicker">
        {statusLabel(version.status)} · {formatDate(version.published)}
      </p>
      <h1>{paper.title}</h1>
      <p className="lede">{paper.summary}</p>

      <div className="version-box">
        <p>
          Version {version.id}
          {current ? " — version actuelle" : " — version antérieure"}
        </p>
        <p>Verdict de cette version : {version.verdict.replace(/[.。]$/, "")}.</p>
        <p>
          Cette version est fixe. Une révision sera une autre version. La publication ne signifie
          pas que le test est clos.
        </p>
        <p>
          Adresse : <a href={address}>{address}</a>
        </p>
        {paper.attachments && paper.attachments.length > 0 ? (
          <ul className="downloads">
            {paper.attachments.map((attachment) => (
              <li key={attachment.href}>
                <a href={attachment.href}>{attachment.label}</a>
              </li>
            ))}
          </ul>
        ) : null}
      </div>

      {paper.progress.length > 0 ? (
      <section className="paper-progress" aria-labelledby="progress-heading">
        <h2 id="progress-heading">Avancement</h2>
        <ul>
          {paper.progress.map((item) => (
            <li key={item.id}>
              <span>{item.label}</span>
              <span>{item.state}</span>
            </li>
          ))}
        </ul>
      </section>
      ) : null}

      <nav className="paper-toc" aria-label="Sommaire">
        <ol>
          {headings.map((heading) =>
            heading.kind === "heading" ? (
              <li key={heading.id} className={heading.level === 3 ? "toc-sub" : undefined}>
                <a href={`${address}#${heading.id}`}>{heading.text}</a>
              </li>
            ) : null,
          )}
        </ol>
      </nav>

      <div className="paper-body">
        {blocks.map((block) => {
          if (block.kind === "heading") {
            const Tag = block.level === 2 ? "h2" : "h3";
            return (
              <Tag key={block.id} id={block.id}>
                <a className="permalink" href={`${address}#${block.id}`}>
                  #
                </a>
                {block.text}
              </Tag>
            );
          }

          if (block.kind === "paragraph") {
            return (
              <p key={block.id} id={block.id}>
                <a className="permalink" href={`${address}#${block.id}`}>
                  #
                </a>
                {inline(block.text)}
              </p>
            );
          }

          if (block.kind === "list") {
            const ListTag = block.ordered ? "ol" : "ul";
            return (
              <ListTag key={block.id} id={block.id}>
                {block.items.map((item) => (
                  <li key={item.id} id={item.id}>
                    <a className="permalink" href={`${address}#${item.id}`}>
                      #
                    </a>
                    {inline(item.text)}
                  </li>
                ))}
              </ListTag>
            );
          }

          return (
            <div key={block.id} className="paper-table-wrap" id={block.id}>
              <a className="permalink" href={`${address}#${block.id}`}>
                #
              </a>
              <table>
                <thead>
                  <tr>
                    {block.headers.map((header, headerIndex) => (
                      <th key={`${block.id}-h-${headerIndex}`} scope="col">
                        {inline(header)}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {block.rows.map((row, rowIndex) => (
                    <tr key={`${block.id}-r-${rowIndex}`}>
                      {row.map((cell, cellIndex) => (
                        <td key={`${block.id}-r-${rowIndex}-c-${cellIndex}`}>{inline(cell)}</td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          );
        })}
      </div>

      <section className="sources" aria-labelledby="sources-heading">
        <h2 id="sources-heading">Sources citées</h2>
        <ul>
          {paper.sources.map((source) => (
            <li key={source.id} id={`source-${source.id}`}>
              {source.href ? <a href={source.href}>{source.citation}</a> : source.citation}
            </li>
          ))}
        </ul>
      </section>

      <section className="paper-history" aria-labelledby="history-heading">
        <h2 id="history-heading">Versions</h2>
        <ol>
          {paper.versions.map((item) => (
            <li key={item.id}>
              <a href={versionPath(paper, item.id)}>{item.id}</a>
              <span>
                {" "}
                · {formatDate(item.published)} · {statusLabel(item.status)}
              </span>
              <p>{item.note}</p>
            </li>
          ))}
        </ol>
      </section>
    </article>
  );
}
