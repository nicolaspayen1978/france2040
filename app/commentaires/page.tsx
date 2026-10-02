import { CommentForm } from "@/components/CommentForm";
import { commentsAvailable, listPublicComments } from "@/lib/comments";
import { sectionMetadata } from "@/lib/paperMeta";

export const dynamic = "force-dynamic";

export const metadata = sectionMetadata({
  title: "Commentaires",
  description:
    "Déposer une critique ou une contribution sur France 2040. Les commentaires acceptés sont publiés ici après modération.",
  path: "/commentaires",
});

function formatDate(iso: string): string {
  try {
    return new Intl.DateTimeFormat("fr-FR", {
      dateStyle: "long",
      timeStyle: "short",
    }).format(new Date(iso));
  } catch {
    return iso;
  }
}

export default async function CommentairesPage() {
  const available = commentsAvailable();
  let comments: Awaited<ReturnType<typeof listPublicComments>> = [];
  let listError = false;

  if (available) {
    try {
      comments = await listPublicComments();
    } catch {
      listError = true;
    }
  }

  return (
    <article className="page-prose comments-page">
      <p className="kicker">Participation</p>
      <h1>Commentaires</h1>
      <p className="lede">
        Contester une hypothèse, signaler une erreur ou apporter une source fait partie du travail.
        Les contributions publiées ici restent distinctes des textes versionnés.
      </p>
      <p>
        Chaque soumission est examinée avant publication. Le désaccord n’est pas un motif de refus.
        L’adresse e-mail n’est pas affichée.
      </p>

      <section className="comments-submit" aria-labelledby="deposer-un-commentaire">
        <h2 id="deposer-un-commentaire">Déposer un commentaire</h2>
        {available ? (
          <CommentForm />
        ) : (
          <p className="comment-form-error">
            Le dépôt n’est pas disponible pour le moment (stockage non configuré).
          </p>
        )}
      </section>

      <section className="comments-list-section" aria-labelledby="commentaires-publies">
        <h2 id="commentaires-publies">Commentaires publiés</h2>
        {listError ? (
          <p className="comment-form-error">La liste des commentaires est momentanément indisponible.</p>
        ) : comments.length === 0 ? (
          <p className="comment-empty">Aucun commentaire publié pour le moment.</p>
        ) : (
          <ul className="comment-list">
            {comments.map((comment) => (
              <li key={comment.id} className="comment-item">
                <p className="comment-meta">
                  <strong>
                    {comment.firstName} {comment.lastName}
                  </strong>
                  {comment.linkedin ? (
                    <>
                      {" · "}
                      <a href={comment.linkedin} target="_blank" rel="noopener noreferrer">
                        LinkedIn
                      </a>
                    </>
                  ) : null}
                  {" · "}
                  <time dateTime={comment.submittedAt}>{formatDate(comment.submittedAt)}</time>
                </p>
                {(comment.slug || comment.versionId || comment.anchorId) && (
                  <p className="comment-ref">
                    Réf.{" "}
                    {[comment.slug, comment.versionId, comment.anchorId].filter(Boolean).join(" · ")}
                  </p>
                )}
                <p className="comment-body">{comment.body}</p>
              </li>
            ))}
          </ul>
        )}
      </section>
    </article>
  );
}
