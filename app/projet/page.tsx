import Link from "next/link";
import { sectionMetadata } from "@/lib/paperMeta";

export const metadata = sectionMetadata({
  title: "Le projet",
  description:
    "France 2040 est un projet de recherche indépendant. Ce site n’est pas un site officiel de l’État.",
  path: "/projet",
});

export default function ProjectPage() {
  return (
    <article className="page-prose">
      <h1>Le projet</h1>
      <p>
        France 2040 est un projet de recherche indépendant consacré aux politiques publiques de
        la France à l’horizon 2040.
      </p>
      <p>
        Son texte public est le <Link href="/pacte">Pacte du bilan français</Link> : une
        hypothèse publiée pour être mise à l’épreuve, non un plan pour la France.
      </p>
      <p>
        Ce site n’est pas un site officiel de l’État. Il n’engage ni le Gouvernement, ni aucune
        administration.
      </p>
    </article>
  );
}
