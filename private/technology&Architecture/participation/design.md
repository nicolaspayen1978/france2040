# Participation

2 October 2026. Phase 3 in progress: public comment intake.

`/participer` is the public entry point for contributing to France 2040. Participation is ordered
by the project’s purpose, not by ease of implementation:

1. Criticise a published hypothesis, passage, source, or result.
2. Contribute expertise, data, field evidence, or an analysis.
3. Circulate a document, visual, or the project itself.
4. Support the work financially.

Intellectual contribution comes first. The page must not imply that agreement or money is the
preferred form of participation.

Financial support remains an outbound Stripe-hosted payment link. The site does not embed checkout
or collect payment data. The voluntary-contribution and no-tax-deduction statements stay beside
that link.

`/participer` is canonical and listed in the sitemap. `/soutenir` permanently redirects to
`/participer#soutenir-financierement`. Published research snapshots are unchanged.

## Sharing

Sharing uses the browser or device’s native share interface when available and copies the link
otherwise. There are no platform-specific SDKs, tracking parameters, or social-network buttons.

Documents and visuals share their immutable version URL, including when the visitor entered
through a current-version alias. This preserves the cited object instead of sharing an address that
may later point to another version. The participation page can share the website root. Passage
permalinks remain separate and unchanged.

## Comment intake (Phase 3)

Visitors can submit a comment through a form on `/commentaires`. This is a site-level intake, not
yet the full publication phase 3 model (inline anchors beside paper HTML).
All comment routes use the same wide page shell as the other site sections; prose and the form
remain constrained to readable widths inside it.

### Record

| Field | Required | Public |
| --- | --- | --- |
| firstName | yes | yes |
| lastName | yes | yes |
| email | yes | no |
| linkedin | no | yes when set (as profile link) |
| body | yes | yes |
| slug / versionId / anchorId / section / kind | no (prefilled from Critiquer) | yes when set |
| publicationConsentAt / publicationRulesVersion | yes for new submissions | no |

Statuses: `unverified` → `pending` → `accepted` | `rejected`. Body max 16 000 characters
(form and server), so a pasted model review fits.

1. From a document or visual, « Critiquer » opens `/commentaires` with `kind`, `slug`, `version`,
   `anchor`, and `section` (nearest heading title) prefilled.
2. Submit stores `unverified` and sends a Resend confirmation mail (48h single-use token).
3. Opening `/commentaires/verifier?token=…` moves the comment to `pending` (moderation queue).
4. Owner accepts or rejects. Public page lists **accepted** only, with a link back to the passage.

Email is never written into the public HTML. Unverified comments never appear in moderation or
public lists. Accepted comments are listed on `/commentaires` in this slice; they are not yet
rendered inline under each paper paragraph.

### Publication rules and privacy (Phase 3.3)

The form explains the public fields before submission, links separately to French publication
rules and a comment-specific privacy notice, and requires an unchecked checkbox for publication
of name, text, date, target reference, and optional LinkedIn link after moderation. Both browser and API enforce it. The
server records the time and wording version, which are excluded from public output. E-mail is used
for verification and comment follow-up only; the previous vague "contact et suite" hint is removed.

Record TTLs match the notice: `unverified` 48h from submission, `pending` 90d from verification,
`rejected` 90d from decision, and `accepted` 3 × 365 days from acceptance. The rate-limit IP hash
key expires after one hour. On moderation reads, stale set members and older pre-TTL records are
pruned. The owner can delete pending, rejected, or accepted records through the gated moderation
route, including on a rights request. The public notice requires a real privacy contact and
accurate processor/transfer facts before live release. The controller is Nicolas Payen, acting
via NPE Holding B.V.; rights requests go to `support@france2040.eu`.
The notice links to the providers' current DPAs and flags possible processing outside the EEA;
the actual account regions and contracted terms still need a live configuration review.
Legacy pending records without an agreement timestamp cannot be accepted; the contributor must
submit again under the current wording.

This does not replace a review of any existing comments or of the site-wide HEA embed's separate
tracker behavior.

### Storage

Comments live in a dedicated Upstash Redis (`upstash-kv-france2040-prod`), outside git and outside
paper snapshots. The client is a slim REST façade adapted from the HEA-World KV pattern
(`KV_REST_API_URL` / `KV_REST_API_TOKEN`). No `@upstash/redis` SDK in this slice.

Keys:

- `comment:{id}` — JSON record
- Redis sets `comments:unverified` / `comments:pending` / `comments:accepted` / `comments:rejected`
- `comments:verify:{token}` — TTL 48h
- `comments:ratelimit:{ipHash}` — short TTL counter

Mail: Resend (`RESEND_API_KEY`, plus `RESEND_FROM` or `RESEND_EMAIL_DOMAIN` →
`France 2040 <noreply@domain>`). Domain DNS must be verified before production delivery is
reliable.

### Moderation

A gated route `/commentaires/moderation` (not in the main nav, not in the sitemap, `noindex`)
accepts or rejects **pending** comments when given `COMMENTS_MODERATION_SECRET`. Refusal reasons
are relevance, abuse, spam, or legality — not disagreement with the Pacte.

### Out of this slice

Turnstile / CAPTCHA, inline accepted comments under each paragraph, replies / issue state, accounts,
threads, votes.
