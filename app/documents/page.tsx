import type { Metadata } from "next";
import { DocumentList } from "@/components/DocumentList";
import { getDocuments } from "@/lib/documents";

export const metadata: Metadata = {
  title: "Documents",
  description: "Documents de référence du projet France 2040, publiés en anglais.",
};

export default function DocumentsPage() {
  return (
    <>
      <h1>Documents</h1>
      <p className="intro">
        Documents de travail, publiés en anglais. La version publique du Pacte est en français.
      </p>
      <DocumentList documents={getDocuments()} />
    </>
  );
}
