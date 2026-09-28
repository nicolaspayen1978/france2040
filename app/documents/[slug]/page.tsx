import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { documents } from "@/content/documents";
import { formatDate, getDocument, kindLabel } from "@/lib/documents";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return documents.map((document) => ({ slug: document.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const document = getDocument(slug);

  if (!document) {
    return { title: "Document introuvable" };
  }

  return {
    title: document.title,
    description: document.summary,
  };
}

export default async function DocumentPage({ params }: PageProps) {
  const { slug } = await params;
  const document = getDocument(slug);

  if (!document) {
    notFound();
  }

  return (
    <article>
      <Link className="back" href="/documents">
        Documents
      </Link>
      <p className="kicker">
        {kindLabel(document.kind)} · {formatDate(document.date)}
      </p>
      <h1 lang="en">{document.title}</h1>
      <p className="intro" lang="en">
        {document.summary}
      </p>
      <div className="document-body" lang="en">
        {document.paragraphs.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>
    </article>
  );
}
