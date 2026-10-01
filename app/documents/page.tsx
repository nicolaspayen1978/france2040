import type { Metadata } from "next";
import { AnnouncedTests } from "@/components/AnnouncedTests";
import { PublicationList } from "@/components/PublicationList";
import { DocumentList } from "@/components/DocumentList";
import { getDocuments } from "@/lib/documents";

export const metadata: Metadata = {
  title: "Documents",
  description:
    "Documents de travail versionnés du Pacte du bilan français. Épreuves contradictoires : nous cherchons ce qui pourrait faire échouer le Pacte.",
};

export default function DocumentsPage() {
  const notes = getDocuments();

  return (
    <>
      <h1>Documents de travail</h1>
      <p className="intro">Versionnés — soumis à critique.</p>
      <p className="intro">
        Épreuves contradictoires — nous cherchons ce qui pourrait faire échouer le Pacte.
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
