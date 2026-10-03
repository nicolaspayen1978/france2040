export type PaperBlock =
  | { kind: "heading"; level: 2 | 3; id: string; text: string }
  | { kind: "paragraph"; id: string; text: string }
  | { kind: "list"; id: string; ordered: boolean; items: { id: string; text: string }[] }
  | { kind: "table"; id: string; headers: string[]; rows: string[][] }
  | { kind: "vis"; variant: "chain" | "pair" | "cards"; id: string; items: { value: string; label: string }[] };

const alignmentCell = /^:?-{3,}:?$/;

function slug(text: string): string {
  const base = text
    .normalize("NFD")
    .replace(/\p{M}/gu, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");

  return base || "section";
}

function cells(line: string): string[] {
  const parts = line.split("|").map((cell) => cell.trim());
  if (parts[0] === "") parts.shift();
  if (parts[parts.length - 1] === "") parts.pop();
  return parts;
}

function isAlignmentRow(line: string): boolean {
  const parsed = cells(line);
  return parsed.length > 0 && parsed.every((cell) => alignmentCell.test(cell));
}

function isTableRow(line: string): boolean {
  return line.startsWith("|");
}

export function parsePaper(markdown: string): PaperBlock[] {
  const lines = markdown.replace(/\r\n/g, "\n").split("\n");
  const blocks: PaperBlock[] = [];
  const usedIds = new Set<string>();
  let section = "ouverture";
  let paragraphCount = 0;
  let listCount = 0;
  let tableCount = 0;
  let visCount = 0;
  let index = 0;

  const takeId = (proposed: string) => {
    let id = proposed;
    let n = 2;
    while (usedIds.has(id)) {
      id = `${proposed}-${n}`;
      n += 1;
    }
    usedIds.add(id);
    return id;
  };

  const resetSection = (id: string) => {
    section = id;
    paragraphCount = 0;
    listCount = 0;
    tableCount = 0;
    visCount = 0;
  };

  while (index < lines.length) {
    const line = lines[index];

    if (line.trim() === "") {
      index += 1;
      continue;
    }

    if (line.startsWith("# ")) {
      index += 1;
      continue;
    }

    const heading = /^(#{2,3}) (.+)$/.exec(line);
    if (heading) {
      const level = heading[1].length as 2 | 3;
      const text = heading[2].trim();
      const id = takeId(slug(text));
      blocks.push({ kind: "heading", level, id, text });
      if (level === 2) resetSection(id);
      index += 1;
      continue;
    }

    if (line.startsWith("::vis ")) {
      const variantRaw = line.slice(6).trim();
      if (variantRaw !== "chain" && variantRaw !== "pair" && variantRaw !== "cards") {
        throw new Error(`Unknown vis variant “${variantRaw}” at “${section}”`);
      }
      const variant = variantRaw;
      index += 1;
      const items: { value: string; label: string }[] = [];
      while (index < lines.length && lines[index].trim() !== "::end") {
        const row = lines[index].trim();
        if (row !== "") {
          const parts = row.split("|").map((part) => part.trim());
          if (parts.length < 2) {
            throw new Error(`Vis row needs “value | label” at “${section}”`);
          }
          items.push({ value: parts[0], label: parts.slice(1).join(" | ") });
        }
        index += 1;
      }
      if (index >= lines.length) {
        throw new Error(`Unclosed ::vis at “${section}”`);
      }
      index += 1;
      if (items.length === 0) {
        throw new Error(`Empty ::vis at “${section}”`);
      }
      visCount += 1;
      blocks.push({
        kind: "vis",
        variant,
        id: takeId(`${section}-v-${visCount}`),
        items,
      });
      continue;
    }

    if (isTableRow(line)) {
      const tableLines: string[] = [];
      while (index < lines.length && isTableRow(lines[index])) {
        tableLines.push(lines[index]);
        index += 1;
      }
      const content = tableLines.filter((row) => !isAlignmentRow(row));
      if (content.length < 2) {
        throw new Error(`Table at “${section}” has no body`);
      }
      tableCount += 1;
      blocks.push({
        kind: "table",
        id: takeId(`${section}-t-${tableCount}`),
        headers: cells(content[0]),
        rows: content.slice(1).map(cells),
      });
      continue;
    }

    const listMarker = /^\d+\. /.test(line) ? /^\d+\. / : /^[-*] /.test(line) ? /^[-*] / : null;
    if (listMarker) {
      const items: { id: string; text: string }[] = [];
      listCount += 1;
      const listId = takeId(`${section}-l-${listCount}`);
      while (index < lines.length && listMarker.test(lines[index])) {
        const text = lines[index].replace(listMarker, "").trim();
        items.push({ id: takeId(`${listId}-i-${items.length + 1}`), text });
        index += 1;
      }
      blocks.push({ kind: "list", id: listId, ordered: listMarker.source.startsWith("^\\d"), items });
      continue;
    }

    const prose = (value: string) => value.trim().replace(/^>\s?/, "");
    const paragraph: string[] = [prose(line)];
    index += 1;
    while (
      index < lines.length &&
      lines[index].trim() !== "" &&
      !lines[index].startsWith("#") &&
      !isTableRow(lines[index]) &&
      !lines[index].startsWith("::vis ") &&
      !/^\d+\. /.test(lines[index]) &&
      !/^[-*] /.test(lines[index])
    ) {
      paragraph.push(prose(lines[index]));
      index += 1;
    }
    paragraphCount += 1;
    blocks.push({
      kind: "paragraph",
      id: takeId(`${section}-p-${paragraphCount}`),
      text: paragraph.join(" "),
    });
  }

  return blocks;
}
