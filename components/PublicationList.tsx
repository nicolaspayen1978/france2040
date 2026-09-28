import Link from "next/link";
import { publications } from "@/lib/publications";

export function PublicationList() {
  return (
    <ul className="doc-list">
      {publications.map((publication) => (
        <li key={publication.href}>
          <Link href={publication.href}>
            <p className="doc-meta">
              {publication.version} · {publication.date}
            </p>
            <p className="doc-title">{publication.title}</p>
            <p className="doc-summary">{publication.summary}</p>
          </Link>
        </li>
      ))}
    </ul>
  );
}
