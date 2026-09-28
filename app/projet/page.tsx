import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Le projet",
  description:
    "France 2040 est un think tank indépendant. Ce site n’est pas un site officiel de l’État.",
};

export default function ProjectPage() {
  return (
    <article className="page-prose">
      <h1>Le projet</h1>
      <p>
        France 2040 est un think tank indépendant consacré aux politiques publiques de la France
        à l’horizon 2040.
      </p>
      <p>
        Son texte public est le{" "}
        <Link href="/pacte">Pacte du bilan français</Link>. Les documents de travail qui le
        précèdent restent en anglais.
      </p>
      <p>
        Ce site n’est pas un site officiel de l’État. Il n’engage ni le Gouvernement, ni aucune
        administration.
      </p>
    </article>
  );
}
