import { CommentModerationPanel } from "@/components/CommentModerationPanel";
import { sectionMetadata } from "@/lib/paperMeta";

export const dynamic = "force-dynamic";

export const metadata = {
  ...sectionMetadata({
    title: "Modération des commentaires",
    description: "File de modération des commentaires France 2040.",
    path: "/commentaires/moderation",
  }),
  robots: { index: false, follow: false },
};

export default function CommentModerationPage() {
  const configured = Boolean(process.env.COMMENTS_MODERATION_SECRET?.trim());

  return (
    <article className="page-prose comments-page wide-page">
      <p className="kicker">Interne</p>
      <h1>Modération des commentaires</h1>
      <p className="lede">
        Accepter ou refuser les soumissions en attente. Cette page n’est pas indexée.
      </p>
      {configured ? (
        <CommentModerationPanel />
      ) : (
        <p className="comment-form-error">
          Définissez la variable d’environnement COMMENTS_MODERATION_SECRET sur le projet Vercel.
        </p>
      )}
    </article>
  );
}
