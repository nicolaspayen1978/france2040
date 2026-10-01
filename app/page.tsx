import Link from "next/link";
import { PaperProse } from "@/components/PaperProse";
import { PublicationList } from "@/components/PublicationList";
import { getPaperVersion, getWorkingPaper, loadPaperBlocks, versionPath } from "@/lib/papers";

export default function HomePage() {
  const summary = getWorkingPaper("resume-executif");
  const version = summary ? getPaperVersion(summary, summary.currentVersionId) : undefined;

  if (!summary || !version) {
    throw new Error("Résumé exécutif manquant");
  }

  const address = versionPath(summary, version.id);

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
      <section className="section summary" aria-labelledby="summary-heading">
        <h2 id="summary-heading">Résumé exécutif</h2>
        <PaperProse blocks={loadPaperBlocks(version)} />
        <p className="entry">
          <Link href={address}>Version citée</Link>
        </p>
      </section>
      <section className="section" aria-labelledby="documents-heading">
        <h2 id="documents-heading">Documents de travail</h2>
        <PublicationList omit={["resume-executif"]} />
      </section>
    </>
  );
}
