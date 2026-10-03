import Link from "next/link";
import { AnnouncedTests } from "@/components/AnnouncedTests";
import { HomeQuatreBilansFigure } from "@/components/HomeQuatreBilansFigure";
import { PaperProse } from "@/components/PaperProse";
import { PublicationList } from "@/components/PublicationList";
import { sectionMetadata } from "@/lib/paperMeta";
import { getPaperVersion, getWorkingPaper, loadPaperBlocks, versionPath } from "@/lib/papers";
import { homeDescription } from "@/lib/site";

export const metadata = sectionMetadata({
  description: homeDescription,
  path: "/",
});

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
      <p className="lede">{homeDescription}</p>
      <p className="entry">
        <Link href="/documents/pacte">Lire le brouillon public</Link>
      </p>
      <section className="section summary" aria-labelledby="summary-heading">
        <h2 id="summary-heading">Résumé exécutif</h2>
        <PaperProse
          blocks={loadPaperBlocks(version)}
          insertBeforeHeadingId="ce-que-montre-maintenant-le-modele"
          insert={<HomeQuatreBilansFigure />}
        />
        <p className="entry">
          <Link href={address}>Version citée</Link>
        </p>
      </section>
      <section className="section" aria-labelledby="documents-heading">
        <h2 id="documents-heading">Documents de travail</h2>
        <PublicationList omit={["resume-executif"]} />
      </section>
      <AnnouncedTests />
    </>
  );
}
