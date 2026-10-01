import { createHash } from "crypto";
import { readFileSync } from "fs";
import path from "path";
import { workingPapers } from "@/content/papers/registry";
import type { DocumentStatus, PaperVersion, WorkingPaper } from "@/content/papers/types";
import { parsePaper, type PaperBlock } from "@/lib/parsePaper";

const statusLabels: Record<DocumentStatus, string> = {
  "working-paper": "Document de travail",
  "under-review": "En relecture",
  frozen: "Gelé",
  superseded: "Remplacé",
};

export function statusLabel(status: DocumentStatus): string {
  return statusLabels[status];
}

export function getWorkingPapers(): WorkingPaper[] {
  return workingPapers;
}

export function getWorkingPaper(slug: string): WorkingPaper | undefined {
  return getWorkingPapers().find((paper) => paper.slug === slug);
}

export function getPaperVersion(paper: WorkingPaper, versionId: string): PaperVersion | undefined {
  return paper.versions.find((version) => version.id === versionId);
}

export function loadPaperBlocks(version: PaperVersion): PaperBlock[] {
  const fullPath = path.join(process.cwd(), version.file);
  const bytes = readFileSync(fullPath);
  const hash = createHash("sha256").update(bytes).digest("hex");

  if (hash !== version.sha256) {
    throw new Error(`Snapshot hash mismatch for ${version.file}`);
  }

  return parsePaper(bytes.toString("utf8"));
}

export function versionPath(paper: WorkingPaper, versionId: string): string {
  return `/documents/${paper.slug}/v/${versionId}`;
}
