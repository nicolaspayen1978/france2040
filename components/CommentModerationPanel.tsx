"use client";

import { FormEvent, useState } from "react";
import { targetPassageHref } from "@/lib/critique";

type ModerationComment = {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  linkedin: string | null;
  body: string;
  status: string;
  submittedAt: string;
  kind: string | null;
  slug: string | null;
  versionId: string | null;
  anchorId: string | null;
  section: string | null;
};

export function CommentModerationPanel() {
  const [secret, setSecret] = useState("");
  const [comments, setComments] = useState<ModerationComment[]>([]);
  const [error, setError] = useState("");
  const [busy, setBusy] = useState(false);

  async function loadPending(event?: FormEvent) {
    event?.preventDefault();
    setBusy(true);
    setError("");
    try {
      const response = await fetch("/api/comments/moderate?status=pending", {
        headers: { Authorization: `Bearer ${secret}` },
      });
      const payload = (await response.json().catch(() => ({}))) as {
        error?: string;
        comments?: ModerationComment[];
      };
      if (!response.ok) {
        setError(payload.error || "Chargement impossible.");
        setComments([]);
        return;
      }
      setComments(payload.comments || []);
    } catch {
      setError("Chargement impossible.");
    } finally {
      setBusy(false);
    }
  }

  async function act(id: string, action: "accepted" | "rejected") {
    setBusy(true);
    setError("");
    try {
      const response = await fetch("/api/comments/moderate", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${secret}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id, action }),
      });
      const payload = (await response.json().catch(() => ({}))) as { error?: string };
      if (!response.ok) {
        setError(payload.error || "Action impossible.");
        return;
      }
      await loadPending();
    } catch {
      setError("Action impossible.");
    } finally {
      setBusy(false);
    }
  }

  return (
    <div className="comment-moderation">
      <form className="comment-form" onSubmit={loadPending}>
        <label>
          Secret de modération
          <input
            type="password"
            value={secret}
            onChange={(event) => setSecret(event.target.value)}
            required
            autoComplete="current-password"
          />
        </label>
        <p className="comment-form-actions">
          <button type="submit" disabled={busy || !secret}>
            Charger les commentaires en attente
          </button>
        </p>
      </form>

      {error ? (
        <p className="comment-form-error" role="alert">
          {error}
        </p>
      ) : null}

      {comments.length === 0 ? (
        <p className="comment-empty">Aucun commentaire en attente, ou file non chargée.</p>
      ) : (
        <ul className="comment-list comment-moderation-list">
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
                <span>{comment.email}</span>
                {" · "}
                <time dateTime={comment.submittedAt}>
                  {new Date(comment.submittedAt).toLocaleString("fr-FR")}
                </time>
              </p>
              {(comment.slug || comment.versionId || comment.anchorId || comment.section) && (
                <p className="comment-ref">
                  {(() => {
                    const href = targetPassageHref({
                      kind: comment.kind,
                      slug: comment.slug,
                      versionId: comment.versionId,
                      anchorId: comment.anchorId,
                    });
                    const label = [
                      comment.slug,
                      comment.versionId,
                      comment.anchorId ? `#${comment.anchorId}` : null,
                    ]
                      .filter(Boolean)
                      .join(" · ");
                    return href ? <a href={href}>{label}</a> : label;
                  })()}
                  {comment.section ? ` — ${comment.section}` : null}
                </p>
              )}
              <p className="comment-body">{comment.body}</p>
              <p className="comment-form-actions">
                <button type="button" disabled={busy} onClick={() => act(comment.id, "accepted")}>
                  Accepter
                </button>
                <button type="button" disabled={busy} onClick={() => act(comment.id, "rejected")}>
                  Refuser
                </button>
              </p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
