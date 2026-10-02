"use client";

import { useState } from "react";

type ShareActionProps = {
  title: string;
  text?: string;
  url: string;
  label?: string;
};

type ShareState = "idle" | "copied" | "error";

function legacyCopy(text: string): boolean {
  const field = document.createElement("textarea");
  field.value = text;
  field.setAttribute("readonly", "");
  field.style.position = "fixed";
  field.style.opacity = "0";
  document.body.appendChild(field);
  field.select();
  const copied = document.execCommand("copy");
  field.remove();
  return copied;
}

async function copyLink(url: string): Promise<void> {
  if (navigator.clipboard?.writeText) {
    await navigator.clipboard.writeText(url);
    return;
  }

  if (!legacyCopy(url)) {
    throw new Error("Copy unavailable");
  }
}

export function ShareAction({ title, text, url, label = "Partager" }: ShareActionProps) {
  const [state, setState] = useState<ShareState>("idle");

  async function share() {
    const absoluteUrl = new URL(url, window.location.origin).toString();
    const payload = { title, ...(text ? { text } : {}), url: absoluteUrl };
    setState("idle");

    if (typeof navigator.share === "function") {
      try {
        await navigator.share(payload);
        return;
      } catch (error) {
        if (error instanceof DOMException && error.name === "AbortError") return;
      }
    }

    try {
      await copyLink(absoluteUrl);
      setState("copied");
    } catch {
      setState("error");
    }
  }

  return (
    <span className="share-control">
      <button className="share-button" type="button" onClick={share}>
        {state === "copied" ? "Lien copié" : label}
      </button>
      <span className="share-feedback" aria-live="polite">
        {state === "error" ? "Copie impossible." : ""}
      </span>
    </span>
  );
}
