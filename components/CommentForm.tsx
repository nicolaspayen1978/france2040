"use client";

import { FormEvent, useState } from "react";

type Status = "idle" | "submitting" | "ok" | "error";

export function CommentForm({
  defaultSlug = "",
  defaultVersionId = "",
  defaultAnchorId = "",
}: {
  defaultSlug?: string;
  defaultVersionId?: string;
  defaultAnchorId?: string;
}) {
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState("");

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);

    setStatus("submitting");
    setMessage("");

    try {
      const response = await fetch("/api/comments", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          firstName: data.get("firstName"),
          lastName: data.get("lastName"),
          email: data.get("email"),
          linkedin: data.get("linkedin"),
          body: data.get("body"),
          slug: data.get("slug"),
          versionId: data.get("versionId"),
          anchorId: data.get("anchorId"),
          website: data.get("website"),
        }),
      });

      const payload = (await response.json().catch(() => ({}))) as {
        error?: string;
        message?: string;
      };

      if (!response.ok) {
        setStatus("error");
        setMessage(payload.error || "La soumission a échoué.");
        return;
      }

      form.reset();
      setStatus("ok");
      setMessage(
        payload.message ||
          "Merci. Un e-mail de confirmation vous a été envoyé. Ouvrez le lien pour faire entrer votre commentaire en file de modération.",
      );
    } catch {
      setStatus("error");
      setMessage("La soumission a échoué. Réessayez plus tard.");
    }
  }

  return (
    <form className="comment-form" onSubmit={onSubmit} noValidate>
      <div className="comment-form-row">
        <label>
          Prénom
          <input name="firstName" type="text" autoComplete="given-name" required maxLength={80} />
        </label>
        <label>
          Nom
          <input name="lastName" type="text" autoComplete="family-name" required maxLength={80} />
        </label>
      </div>

      <label>
        E-mail
        <input name="email" type="email" autoComplete="email" required maxLength={200} />
        <span className="comment-form-hint">Non publié. Conservé pour le contact et la suite.</span>
      </label>

      <label>
        LinkedIn <span className="comment-form-hint">(optionnel)</span>
        <input
          name="linkedin"
          type="text"
          autoComplete="url"
          maxLength={300}
          placeholder="https://www.linkedin.com/in/…"
        />
      </label>

      <label>
        Commentaire
        <textarea name="body" required maxLength={4000} rows={8} />
      </label>

      <details className="comment-form-refs">
        <summary>Référence à un document (optionnel)</summary>
        <div className="comment-form-row">
          <label>
            Document (slug)
            <input name="slug" type="text" maxLength={120} defaultValue={defaultSlug} />
          </label>
          <label>
            Version
            <input name="versionId" type="text" maxLength={120} defaultValue={defaultVersionId} />
          </label>
        </div>
        <label>
          Ancre
          <input name="anchorId" type="text" maxLength={120} defaultValue={defaultAnchorId} />
        </label>
      </details>

      <div className="comment-honeypot" aria-hidden="true">
        <label>
          Site web
          <input name="website" type="text" tabIndex={-1} autoComplete="off" />
        </label>
      </div>

      <p className="comment-form-actions">
        <button type="submit" disabled={status === "submitting"}>
          {status === "submitting" ? "Envoi…" : "Envoyer le commentaire"}
        </button>
      </p>

      {message ? (
        <p
          className={status === "error" ? "comment-form-error" : "comment-form-success"}
          role="status"
        >
          {message}
        </p>
      ) : null}
    </form>
  );
}
