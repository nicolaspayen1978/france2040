import Link from "next/link";
import type { PolicyDocument } from "@/content/documents";
import { formatDate, kindLabel } from "@/lib/documents";

export function DocumentList({ documents }: { documents: PolicyDocument[] }) {
  if (documents.length === 0) {
    return <p className="empty">Aucun document n’est publié pour le moment.</p>;
  }

  return (
    <ul className="doc-list">
      {documents.map((document) => (
        <li key={document.slug}>
          <Link href={`/documents/${document.slug}`}>
            <p className="doc-meta">
              {kindLabel(document.kind)} · {formatDate(document.date)}
            </p>
            <p className="doc-title" lang="en">
              {document.title}
            </p>
            <p className="doc-summary" lang="en">
              {document.summary}
            </p>
          </Link>
        </li>
      ))}
    </ul>
  );
}
