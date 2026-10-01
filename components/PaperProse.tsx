import type { ReactNode } from "react";
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

export function PaperProse({ blocks }: { blocks: PaperBlock[] }) {
  return (
    <div className="summary-body">
      {blocks.map((block) => {
        if (block.kind === "heading") {
          const Tag = block.level === 2 ? "h3" : "h4";
          return (
            <Tag key={block.id} id={block.id}>
              {block.text}
            </Tag>
          );
        }

        if (block.kind === "paragraph") {
          return <p key={block.id}>{inline(block.text)}</p>;
        }

        if (block.kind === "list") {
          const ListTag = block.ordered ? "ol" : "ul";
          return (
            <ListTag key={block.id}>
              {block.items.map((item) => (
                <li key={item.id}>{inline(item.text)}</li>
              ))}
            </ListTag>
          );
        }

        return (
          <table key={block.id}>
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
        );
      })}
    </div>
  );
}
