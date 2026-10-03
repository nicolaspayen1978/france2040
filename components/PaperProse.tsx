import type { ReactNode } from "react";
import { CritiqueLink } from "@/components/CritiqueLink";
import type { PaperBlock } from "@/lib/parsePaper";

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

type Props = {
  blocks: PaperBlock[];
  /** Optional insert rendered immediately before the heading with this id. */
  insertBeforeHeadingId?: string;
  insert?: ReactNode;
  critique?: {
    slug: string;
    versionId: string;
    address: string;
  };
};

export function PaperProse({
  blocks,
  insertBeforeHeadingId,
  insert,
  critique,
}: Props) {
  let sectionLabel = "Résumé exécutif";

  return (
    <div className="summary-body">
      {blocks.map((block) => {
        const ahead =
          insert &&
          insertBeforeHeadingId &&
          block.kind === "heading" &&
          block.id === insertBeforeHeadingId
            ? insert
            : null;

        const passage = (anchorId: string, section: string) =>
          critique ? (
            <>
              <a className="permalink" href={`${critique.address}#${anchorId}`} aria-label="Adresse de ce passage">
                <span aria-hidden="true">#</span>
              </a>
              <CritiqueLink
                target={{
                  kind: "paper",
                  slug: critique.slug,
                  versionId: critique.versionId,
                  anchorId,
                  section,
                }}
              />
            </>
          ) : null;

        if (block.kind === "heading") {
          sectionLabel = block.text;
          const Tag = block.level === 2 ? "h3" : "h4";
          return (
            <div key={block.id}>
              {ahead}
              <Tag id={block.id}>
                {passage(block.id, block.text)}
                {block.text}
              </Tag>
            </div>
          );
        }

        if (block.kind === "paragraph") {
          return (
            <p key={block.id} id={block.id}>
              {passage(block.id, sectionLabel)}
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
                  {passage(item.id, sectionLabel)}
                  {inline(item.text)}
                </li>
              ))}
            </ListTag>
          );
        }

        if (block.kind === "vis") {
          return (
            <div key={block.id} className={`sim-vis sim-${block.variant}`} id={block.id}>
              {passage(block.id, sectionLabel)}
              <ol>
                {block.items.map((item, itemIndex) => (
                  <li key={`${block.id}-${itemIndex}`}>
                    <p className="sim-value">{inline(item.value)}</p>
                    <p className="sim-label">{inline(item.label)}</p>
                  </li>
                ))}
              </ol>
            </div>
          );
        }

        return (
          <div key={block.id} className="paper-table-wrap" id={block.id}>
            {passage(block.id, sectionLabel)}
            <table>
              <thead>
                <tr>
                  {block.headers.map((header) => (
                    <th key={header} scope="col">
                      {inline(header)}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {block.rows.map((row) => (
                  <tr key={row.join("|")}>
                    {row.map((cell, index) => (
                      <td key={`${cell}-${index}`}>{inline(cell)}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        );
      })}
    </div>
  );
}
