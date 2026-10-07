# Decision log

## 2026-10-01 — Finance-only support page

Built a discreet footer invitation and `/soutenir` explanation page before the Stripe-hosted
payment link. Superseded by the participation decision below.

## 2026-10-02 — Participation is broader than financial support

Owner direction: make **Participer** a main navigation concept. `/participer` opens with critique,
then research contribution, circulation of the work, and financial support last. The page states
that France 2040 is open to contradiction and does not equate participation with agreement.

The discussion store and contact intake are not silently pulled forward: the page names them as
future mechanisms and links to current public objects instead. `/soutenir` permanently redirects
to the financial-support section so the earlier address does not break. The footer now says
**Participer à France 2040**.

The intended public architecture is Documents → commenter, En images → comprendre et partager,
future HEA → interroger, Participer → contribuer. Only the parts that exist are represented as
available on the site.

## 2026-10-02 — Sharing preserves citable versions

Owner approved a simple sharing slice. Use the native Web Share interface where the browser
provides it and copy the link otherwise. Do not add platform-specific SDKs, tracking parameters, or
social-brand buttons.

Document and visual actions share the immutable version address already displayed on the page,
not the current-version alias. **Faire connaître le projet** shares the website root. The Pact is a
document and receives the same version-preserving action. Existing passage permalinks are not
changed.

## 2026-10-02 — Comment intake on dedicated Redis (Phase 3 start)

Owner approved a simple public intake before full publication phase 3. Create a new Upstash Redis
for France 2040 (`upstash-kv-france2040-prod`); do not reuse HEA-World databases. Reuse the
HEA-World REST KV pattern as a slim client in this repo.

Product locks for this slice:

1. Public page lists **accepted** comments only; submissions start as `pending`.
2. Required fields: first name, last name, email, body. LinkedIn is optional; when present it is
   shown as a profile link. Email is stored and never shown publicly.
3. Optional `slug` / `versionId` / `anchorId` for later document binding; no inline UI on papers yet.

Moderation is a gated route with a secret. Email verification mail, accounts, threads, and
rendering beside paper anchors stay out of this slice.

## 2026-10-02 — LinkedIn optional on comment intake

Owner correction: LinkedIn is optional on the public form. When absent, the public list shows
name only; when present, it remains a profile link.

## 2026-10-02 — E-mail verification before Turnstile

Owner preference: confirm the mailbox with Resend before adding CAPTCHA. Submit creates
`unverified`; the moderation queue only receives `pending` after `/commentaires/verifier`.
Turnstile stays deferred. Env: `RESEND_API_KEY` and either `RESEND_FROM` or
`RESEND_EMAIL_DOMAIN` (DNS verification may still be propagating at ship time).

## 2026-10-02 — Critiquer on passage (Phase 3.2)

Owner OK: hover/focus « Critiquer » on document blocks and visual figure/sections opens
`/commentaires` with kind, slug, version, anchor, and section prefilled. Moderation and the public
list link back to that passage. Inline rendering of accepted comments under paragraphs stays later.

## 2026-10-03 — LLM review pack (current freeze only)

Owner: `/llms.txt` lists current paper and visual URLs from `currentVersionId`. `/llms-full.txt`
concatenates current paper Markdown only. `/participer` explains review-with-a-model and points
to the pack, the current-URL list, and `/commentaires`. Superseded `/v/…` stay out of the pack.

## 2026-10-07 — Comment publication and privacy (Phase 3.3, P1)

Owner approved a French disclosure at the comment form, linked publication rules and a
comment-specific privacy notice, an unchecked publication consent checkbox enforced on the server,
and a real retention/deletion policy. The HEA chat notice is a separate process and does not cover
the site's Redis comment store or Resend verification mail. Keep the privacy notice distinct from
the publication rules. Record the consent time and wording version privately. No published paper
snapshot is changed.

Retention for new records: unverified 48 hours; pending 90 days after verification; rejected
90 days after decision; accepted 3 years after acceptance. The Redis record expires automatically.
Moderator reads prune stale indexes and legacy records past those periods. A moderator can delete
an individual record immediately after a privacy request. The owner identified Nicolas Payen,
acting via NPE Holding B.V., as controller and `support@france2040.eu` as the rights contact.
Before live release, verify any international data-transfer details against the configured Vercel,
Upstash, and Resend accounts. Owner confirms live behavior.

## 2026-10-07 — Comment page width correction (Phase 3.3, P2)

The comment routes had no `wide-page` class and therefore kept the base 40rem shell, while
participation and other sections use the wider shell. Apply the existing class to the public
comment, rules, privacy, verification, and moderation pages. Keep the established form width.
