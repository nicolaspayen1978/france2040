import Link from "next/link";
import { publications } from "@/lib/publications";

export function PublicationList({ omit = [] }: { omit?: string[] }) {
  const items = publications.filter(
    (publication) => !omit.some((slug) => publication.href === `/documents/${slug}`),
  );

  return (
    <ul className="doc-list">
      {items.map((publication) => (
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
