import Link from "next/link";
import { CritiqueLink } from "@/components/CritiqueLink";
import { HomeQuatreBilansFigure } from "@/components/HomeQuatreBilansFigure";
import { PaperProse } from "@/components/PaperProse";
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
      <section className="section home-visual" aria-labelledby="visual-heading">
        <h2 id="visual-heading">Les quatre bilans</h2>
        <p className="home-section-intro">
          Le schéma montre comment le crédit pourrait circuler entre banques, ménages,
          économie productive et État. Les effets sur la production et les recettes restent à tester.
        </p>
        <HomeQuatreBilansFigure />
      </section>
      <section className="section home-numbers" aria-labelledby="numbers-heading">
        <h2 id="numbers-heading">Quelques repères</h2>
        <p className="home-section-intro">Un point de départ et des scénarios à éprouver, pas des promesses.</p>
        <ul className="home-facts">
          <li>
            <p className="home-fact-status">Point de départ</p>
            <p className="home-fact-value">≈ 8 850 Md€</p>
            <p className="home-fact-copy">Logements et terrains bâtis détenus par les ménages français.</p>
          </li>
          <li>
            <p className="home-fact-status">Enveloppe testée</p>
            <p className="home-fact-value">700 Md€</p>
            <p className="home-fact-copy">Montant cumulé de la part à intérêts seuls des prêts dans le scénario 2027–2040 ; ce n’est pas une cible.</p>
          </li>
          <li>
            <p className="home-fact-status">Deux transmissions simulées</p>
            <p className="home-fact-value">125 / 42 Md€</p>
            <p className="home-fact-copy">Activité supplémentaire produite en France avec le même crédit, selon l’usage des fonds.</p>
          </li>
        </ul>
        <p className="home-fact-source">
          Chiffres, hypothèses et limites dans le <Link href={address}>résumé exécutif versionné</Link>.
        </p>
      </section>
      <section className="section home-method" aria-labelledby="method-heading">
        <h2 id="method-heading">La méthode</h2>
        <p className="home-section-intro">
          France 2040 publie une hypothèse, cherche ce qui pourrait la faire échouer et laisse les questions ouvertes visibles.
        </p>
        <ol className="home-method-steps">
          <li>
            <h3>Publier</h3>
            <p>Rendre le raisonnement, les sources et chaque version consultables et citables.</p>
          </li>
          <li>
            <h3>Mettre à l’épreuve</h3>
            <p>Tester les liens entre crédit, dépense, activité française, risques et finances publiques.</p>
          </li>
          <li>
            <h3>Réviser sans effacer</h3>
            <p>Publier une nouvelle version quand l’analyse évolue ; ne pas transformer un verdict ouvert en certitude.</p>
          </li>
        </ol>
        <div className="home-next">
          <Link href="/documents/resume-executif">Lire le résumé exécutif</Link>
          <Link href="/projet">Découvrir la méthode complète</Link>
          <Link href="/documents">Explorer les documents</Link>
        </div>
      </section>
    </>
  );
}
