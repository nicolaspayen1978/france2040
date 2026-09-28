import type { Metadata } from "next";
import { DocumentList } from "@/components/DocumentList";
import { getDocuments } from "@/lib/documents";

export const metadata: Metadata = {
  title: "Documents",
  description: "Documents de travail du projet France 2040.",
};

export default function DocumentsPage() {
  return (
    <>
      <h1>Documents</h1>
      <p className="intro">
        Documents de travail qui accompagnent le Pacte.
      </p>
      <DocumentList documents={getDocuments()} />
    </>
  );
}
