import Link from "next/link";
import { sectionMetadata } from "@/lib/paperMeta";

export const metadata = sectionMetadata({
  title: "Règles de publication des commentaires",
  description: "Les règles applicables aux commentaires proposés sur France 2040.",
  path: "/commentaires/regles",
});

export default function CommentRulesPage() {
  return (
    <article className="page-prose comments-page">
      <p className="kicker">Participation</p>
      <h1>Règles de publication des commentaires</h1>
      <p>
        Les commentaires servent à discuter les hypothèses, les sources et les résultats de France
        2040. Une critique argumentée ou un désaccord avec le projet peut être publié.
      </p>
      <h2>Avant la publication</h2>
      <p>
        Votre adresse e-mail est vérifiée, puis le commentaire est examiné. La soumission ne garantit
        pas sa publication. Le prénom, le nom, le texte, sa date et le lien LinkedIn éventuel ne deviennent
        publics qu’après acceptation. L’adresse e-mail n’est jamais affichée.
      </p>
      <h2>Modération</h2>
      <p>
        Un commentaire peut être refusé ou retiré s’il est sans rapport avec le sujet, relève du
        spam, contient des attaques personnelles, des propos illicites ou des données personnelles
        concernant d’autres personnes. Le désaccord avec le Pacte ne constitue pas un motif de
        refus.
      </p>
      <h2>Vos données et vos droits</h2>
      <p>
        La <Link href="/commentaires/confidentialite">notice sur les données des commentaires</Link>
        explique l’utilisation de vos informations, leur durée de conservation et la manière de
        demander la suppression de votre commentaire.
      </p>
      <p>
        <Link href="/commentaires">Retour aux commentaires</Link>
      </p>
    </article>
  );
}
