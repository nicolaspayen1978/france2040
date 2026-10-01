import Link from "next/link";
import { getVisuals, getVisualVersion, visualNatureLabel, visualStatusLabel } from "@/lib/visuals";
import { formatDate } from "@/lib/documents";

export function VisualList() {
  const items = getVisuals();

  return (
    <ul className="doc-list">
      {items.map((visual) => {
        const current = getVisualVersion(visual, visual.currentVersionId);
        return (
          <li key={visual.slug}>
            <Link href={`/en-images/${visual.slug}`}>
              <p className="doc-meta">
                {current ? visualStatusLabel(current.status) : "En images"} ·{" "}
                {formatDate(visual.currentVersionId)} · {visualNatureLabel(visual.nature)}
              </p>
              <p className="doc-title">{visual.title}</p>
              <p className="doc-summary">{visual.summary}</p>
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
