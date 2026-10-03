import { AnnouncedTests } from "@/components/AnnouncedTests";
import { PublicationList } from "@/components/PublicationList";
import { DocumentList } from "@/components/DocumentList";
import { getDocuments } from "@/lib/documents";
import { sectionMetadata } from "@/lib/paperMeta";

export const metadata = sectionMetadata({
  title: "Documents",
  description:
    "Documents de travail versionnés du Pacte. Épreuves contradictoires : nous cherchons ce qui pourrait faire échouer le Pacte. Résultats de simulation : ce qui arrive quand les hypothèses ouvertes sont mises à concourir. Le modèle v0.1 n’est pas remplacé.",
  path: "/documents",
});

export default function DocumentsPage() {
  const notes = getDocuments();

  return (
    <>
      <h1>Documents de travail</h1>
      <p className="intro">Versionnés — soumis à critique.</p>
      <p className="intro">
        Épreuves contradictoires — nous cherchons ce qui pourrait faire échouer le Pacte.
        Résultats de simulation — ce qui arrive lorsque les hypothèses encore ouvertes sont mises à concourir. Ce n’est pas une prévision, et cela ne remplace pas le modèle v0.1.
      </p>
      <PublicationList />
      <AnnouncedTests />
      {notes.length > 0 ? (
        <section className="section" aria-labelledby="notes-heading">
          <h2 id="notes-heading">Notes</h2>
          <DocumentList documents={notes} />
        </section>
      ) : null}
    </>
  );
}
