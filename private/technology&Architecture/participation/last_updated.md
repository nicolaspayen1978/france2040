# Last updated

2026-10-01. Phase 0 built as a footer link to a finance-only `/soutenir` page.

2026-10-02. Owner reframed the concept from support to participation. Phase 1 replaces the public
entry point with `/participer`, orders intellectual contribution before financial support, adds a
main-navigation item, and keeps `/soutenir` as a permanent redirect to the financial subsection.

2026-10-02. Phase 2 built: native sharing with a copy-link fallback. Documents and visuals share
immutable version addresses; the participation page shares the site root. No platform SDKs or
tracking parameters.

2026-10-02. Phase 3: comment intake on dedicated Upstash Redis, HEA-style REST KV client,
required names + email + body, optional LinkedIn. Resend e-mail verification before moderation.
Critiquer control on document passages and visuals prefills target refs. Turnstile deferred. Gated
moderation route.

2026-10-03. `/llms.txt` and `/llms-full.txt` generated from current versions. Participer
gains a “revue avec un modèle de langage” paragraph.

2026-10-03. Comment body cap 16 000 characters (form + server) so a pasted model review fits.

2026-10-07. Phase 3.3: French publication rules and comment privacy notice, server-enforced
publication consent with version/time, record expiry by status, and moderator deletion. Live
privacy contact and controller details confirmed by owner.
