import { CommentForm } from "@/components/CommentForm";
import { commentsAvailable, listPublicComments } from "@/lib/comments";
import type { CritiqueTargetKind } from "@/lib/critique";
import { targetPassageHref } from "@/lib/critique";
import { isKVConfigured } from "@/lib/kv/client";
import { isMailConfigured } from "@/lib/mail";
import { sectionMetadata } from "@/lib/paperMeta";

export const dynamic = "force-dynamic";

export const metadata = sectionMetadata({
  title: "Commentaires",
  description:
    "Déposer une critique ou une contribution sur France 2040. Les commentaires acceptés sont publiés ici après confirmation e-mail et modération.",
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

function firstParam(value: string | string[] | undefined): string {
  if (Array.isArray(value)) return value[0] || "";
  return value || "";
}

type PageProps = {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
};

export default async function CommentairesPage({ searchParams }: PageProps) {
  const params = await searchParams;
  const kindRaw = firstParam(params.kind);
  const defaultKind: CritiqueTargetKind = kindRaw === "visual" ? "visual" : "paper";
  const defaultSlug = firstParam(params.slug).slice(0, 120);
  const defaultVersionId = firstParam(params.version).slice(0, 120);
  const defaultAnchorId = firstParam(params.anchor).slice(0, 120);
  const defaultSection = firstParam(params.section).slice(0, 200);

  const available = commentsAvailable();
  let comments: Awaited<ReturnType<typeof listPublicComments>> = [];
  let listError = false;

  if (isKVConfigured()) {
    try {
      comments = await listPublicComments();
    } catch {
      listError = true;
    }
  }

  let unavailableReason =
    "Le dépôt n’est pas disponible pour le moment (stockage non configuré).";
  if (isKVConfigured() && !isMailConfigured()) {
    unavailableReason =
      "Le dépôt n’est pas disponible pour le moment (envoi d’e-mail non configuré).";
  }

  return (
    <article className="page-prose comments-page wide-page">
      <p className="kicker">Participation</p>
      <h1>Commentaires</h1>
      <p className="lede">
        Contester une hypothèse, signaler une erreur ou apporter une source fait partie du travail.
        Les contributions publiées ici restent distinctes des textes versionnés.
      </p>
      <p>
        Après l’envoi, un message de confirmation est adressé à votre e-mail. Ce n’est qu’après
        ouverture du lien que le commentaire entre en file de modération. Le désaccord n’est pas un
        motif de refus. L’adresse e-mail n’est pas affichée.
      </p>

      <section className="comments-submit" aria-labelledby="deposer-un-commentaire">
        <h2 id="deposer-un-commentaire">Déposer un commentaire</h2>
        {available ? (
          <CommentForm
            defaultKind={defaultKind}
            defaultSlug={defaultSlug}
            defaultVersionId={defaultVersionId}
            defaultAnchorId={defaultAnchorId}
            defaultSection={defaultSection}
          />
        ) : (
          <p className="comment-form-error">{unavailableReason}</p>
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
            {comments.map((comment) => {
              const passageHref = targetPassageHref({
                kind: comment.kind,
                slug: comment.slug,
                versionId: comment.versionId,
                anchorId: comment.anchorId,
              });
              return (
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
                  {(comment.slug || comment.versionId || comment.anchorId || comment.section) && (
                    <p className="comment-ref">
                      Réf.{" "}
                      {passageHref ? (
                        <a href={passageHref}>
                          {[comment.slug, comment.versionId, comment.anchorId ? `#${comment.anchorId}` : null]
                            .filter(Boolean)
                            .join(" · ")}
                        </a>
                      ) : (
                        [comment.slug, comment.versionId, comment.anchorId].filter(Boolean).join(" · ")
                      )}
                      {comment.section ? ` — ${comment.section}` : null}
                    </p>
                  )}
                  <p className="comment-body">{comment.body}</p>
                </li>
              );
            })}
          </ul>
        )}
      </section>
    </article>
  );
}
