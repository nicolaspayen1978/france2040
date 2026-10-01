# Phase 2 — Discoverability and retrieval text

Status: not started. Blocked on phase 1 having at least one accepted real visual (or owner override to run after phase 0 only).

## Entry

The visual page shape is accepted. Absolute origin / sitemap patterns from the publication machine-readable slice are the reference.

## Slice

1. Harden the retrieval blocks already required in phase 0 so every visual has stable, crawlable French prose for “montre” / “n’établit pas”.
2. Sitemap entries for `/en-images` and each current (and versioned) visual URL.
3. Open Graph on visual pages (title, description from the claim paragraph, image = the figure).
4. Optional JSON-LD (`ImageObject` or similar) — French values, publisher France 2040 as independent research project, no author byline. Same honesty rules as ScholarlyArticle on papers.
5. Preview deployments stay `noindex` if that is already the site rule.

## Exit

A visual URL is a first-class public object for search and for a future HEA that only reads HTML text + metadata. No HEA product ships in this phase.

## Not in this phase

HEA chat. Embedding index. Changing snapshot or figure bytes without a new version.
