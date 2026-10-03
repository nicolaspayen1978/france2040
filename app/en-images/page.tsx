import { VisualList } from "@/components/VisualList";
import { sectionMetadata } from "@/lib/paperMeta";

export const metadata = sectionMetadata({
  title: "En images",
  description:
    "Lecture visuelle du Pacte du bilan français. Chaque graphique cite un document. Il explique ; il n’établit pas la thèse.",
  path: "/en-images",
});

export default function EnImagesPage() {
  return (
    <div className="wide-page index-page">
      <h1>En images</h1>
      <p className="intro">
        Une lecture visuelle du Pacte. Chaque graphique cite un document versionné. Il explique une
        lecture ; il n’établit pas, et ne clôt pas, une épreuve.
      </p>
      <VisualList />
    </div>
  );
}
