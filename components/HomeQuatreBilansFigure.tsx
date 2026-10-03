import Link from "next/link";
import { getVisual, getVisualVersion, loadVisualFigure, visualPath } from "@/lib/visuals";

/** Versioned architectural diagram featured on the home page. */
export function HomeQuatreBilansFigure() {
  const visual = getVisual("les-quatre-bilans");
  if (!visual) {
    throw new Error("Visual les-quatre-bilans manquant");
  }
  const version = getVisualVersion(visual, visual.currentVersionId);
  if (!version) {
    throw new Error("Version courante de les-quatre-bilans manquante");
  }

  const figure = loadVisualFigure(version);
  const href = visualPath(visual, version.id);

  return (
    <figure className="visual-figure home-architecture">
      <div
        className="visual-figure-frame"
        dangerouslySetInnerHTML={{ __html: figure }}
      />
      <figcaption className="visual-caption">
        <span className="home-visual-hint">Faire glisser pour parcourir le schéma. </span>
        {visual.summary}{" "}
        <Link href={href}>Voir la fiche En images</Link>
      </figcaption>
    </figure>
  );
}
