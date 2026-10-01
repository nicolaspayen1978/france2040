import { createHash } from "crypto";
import { readFileSync } from "fs";
import path from "path";
import { visuals } from "@/content/visuals/registry";
import type { Visual, VisualStatus, VisualVersion } from "@/content/visuals/types";

const statusLabels: Record<VisualStatus, string> = {
  working: "En cours",
  frozen: "Gelé",
  superseded: "Remplacé",
};

const natureLabels = {
  donnee: "Donnée",
  simulation: "Simulation",
  schema: "Schéma",
} as const;

export function visualStatusLabel(status: VisualStatus): string {
  return statusLabels[status];
}

export function visualNatureLabel(nature: Visual["nature"]): string {
  return natureLabels[nature];
}

export function getVisuals(): Visual[] {
  return visuals;
}

export function getVisual(slug: string): Visual | undefined {
  return getVisuals().find((visual) => visual.slug === slug);
}

export function getVisualVersion(visual: Visual, versionId: string): VisualVersion | undefined {
  return visual.versions.find((version) => version.id === versionId);
}

export function visualPath(visual: Visual, versionId = visual.currentVersionId): string {
  return `/en-images/${visual.slug}/v/${versionId}`;
}

export function loadVisualFigure(version: VisualVersion): string {
  const fullPath = path.join(process.cwd(), version.figure);
  const bytes = readFileSync(fullPath);
  const hash = createHash("sha256").update(bytes).digest("hex");

  if (hash !== version.sha256) {
    throw new Error(`Visual figure hash mismatch for ${version.figure}`);
  }

  return bytes.toString("utf8");
}
