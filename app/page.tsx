import Link from "next/link";
import { PublicationList } from "@/components/PublicationList";

export default function HomePage() {
  return (
    <>
      <p className="kicker">Projet de recherche</p>
      <h1>France 2040</h1>
      <p className="lede">
        France 2040 publie le Pacte du bilan français : une hypothèse sur la manière de mobiliser,
        une seule fois, une fraction du patrimoine privé pour restaurer les finances publiques et
        transformer la capacité productive du pays entre 2027 et 2040.
      </p>
      <p className="entry">
        <Link href="/documents/pacte">Lire le brouillon public</Link>
      </p>
      <section className="section" aria-labelledby="documents-heading">
        <h2 id="documents-heading">Documents de travail</h2>
        <PublicationList />
      </section>
    </>
  );
}
