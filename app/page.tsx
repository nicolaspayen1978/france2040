import Link from "next/link";
import { AnnouncedTests } from "@/components/AnnouncedTests";
import { CritiqueLink } from "@/components/CritiqueLink";
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
  const letter = getWorkingPaper("explique-moi-le-pacte");
  const letterVersion = letter
    ? getPaperVersion(letter, letter.currentVersionId)
    : undefined;
  const summary = getWorkingPaper("resume-executif");
  const version = summary ? getPaperVersion(summary, summary.currentVersionId) : undefined;

  if (!letter || !letterVersion) {
    throw new Error("Lecture « Explique-moi le Pacte » manquante");
  }
  if (!summary || !version) {
    throw new Error("Résumé exécutif manquant");
  }

  const letterAddress = versionPath(letter, letterVersion.id);
  const address = versionPath(summary, version.id);

  return (
    <>
      <p className="kicker">Projet de recherche</p>
      <h1>France 2040</h1>
      <p className="lede">{homeDescription}</p>
      <section className="section summary home-dialogue" aria-labelledby="explain-heading">
        <h2 id="explain-heading">
          <CritiqueLink
            target={{
              kind: "paper",
              slug: letter.slug,
              versionId: letterVersion.id,
              anchorId: "explain-heading",
              section: letter.title,
            }}
          />
          {letter.title}
        </h2>
        <PaperProse
          blocks={loadPaperBlocks(letterVersion)}
          presentation={letter.presentation}
          openingRequest="Expliques-moi le Pacte s'il te plaît."
          critique={{
            slug: letter.slug,
            versionId: letterVersion.id,
            address: letterAddress,
            title: letter.title,
          }}
        />
        <p className="entry">
          <Link href={letterAddress}>Version citée</Link>
        </p>
      </section>
      <section className="section summary" aria-labelledby="summary-heading">
        <h2 id="summary-heading">
          <CritiqueLink
            target={{
              kind: "paper",
              slug: summary.slug,
              versionId: version.id,
              anchorId: "summary-heading",
              section: "Résumé exécutif",
            }}
          />
          Résumé exécutif
        </h2>
        <PaperProse
          blocks={loadPaperBlocks(version)}
          insertBeforeHeadingId="ce-que-montre-maintenant-le-modele"
          insert={<HomeQuatreBilansFigure />}
          critique={{
            slug: summary.slug,
            versionId: version.id,
            address,
            title: "Résumé exécutif",
          }}
        />
        <p className="entry">
          Vous voulez aller plus loin ? <Link href="/documents/pacte">Lire le Pacte</Link>
        </p>
        <p className="entry">
          <Link href={address}>Version citée du résumé</Link>
        </p>
      </section>
      <section className="section" aria-labelledby="documents-heading">
        <h2 id="documents-heading">Documents de travail</h2>
        <PublicationList omit={["resume-executif", "explique-moi-le-pacte"]} />
      </section>
      <AnnouncedTests />
    </>
  );
}
