# Decision log

## 2026-10-01 — En images as addressable knowledge objects

Proposed (not built). Triggered by the public-product thread: each graph needs a URL so a later HEA can retrieve meaning as text, not as pixels.

Adopted for planning:

- One visual = one canonical page (`/en-images/<slug>`, versioned when needed).
- Visuals explain and cite; they do not establish or close claims (aligned with Docs/14 narrative rule).
- Required blocks: ce que montre, ce que cela n’établit pas, nature (donnée / simulation / schéma), units, provenance, document citations, hashed figure.
- Comments stay on documents. Visual pages point readers to the cited paper.
- Site cycle amendment proposed: Pacte → Documents → En images → Discussion → Revision. Amend Docs/14 only when phase 0 is approved to build.

## 2026-10-01 — First visual nominated: le ratio n’est pas le service

Owner-named first En images object, not built:

- Slug: `le-ratio-n-est-pas-le-service`
- Canonical URL when built: `/en-images/le-ratio-n-est-pas-le-service`
- Claim in one line: solde, stock, charge d’intérêts and ratio dette/PIB are four connected but separate objects.
- Figure: four boxes — Solde → Stock de dette → Charge d’intérêts, and Stock ÷ PIB nominal → Ratio dette/PIB — plus the observed 2025 year underneath (déficit ↓ 5,8 → 5,1 % ; dette ↑ +154,4 Md€ ; dette/PIB ↑ 112,6 → ~115,6/115,7 % ; intérêts ↑ 11,2 % → 64,7 Md€).
- Nature: schéma for the boxes; the 2025 strip is donnée, cited from EC-07 / Insee.
- Cite: `/documents/red-team-07` current version. Must not close EC-07’s open verdict. Must not invent a 2040 path.
- Phase 0 still needs an explicit owner OK to build the routes and this page.
- Colour: greyscale or muted blue/red only (see decision below).

## 2026-10-01 — Graphic colour: greyscale or blue/red nuance

Owner direction: stick to the sober / institutional image of the site. Figures use greyscale (site neutrals) or muted nuances of the mark blue (`#002395`) and red (`#ED2939`). No marketing palette, no traffic-light green-as-success, no dramatic gradients. Grey (or grey hatch) carries uncertainty / « non tranché ». Blue and red name poles or series, not moral verdicts. Recorded in `design.md` § Colour.

## 2026-10-01 — Colour lock via `app/tokens.css`

Built with phase 0. Palette in `app/tokens.css`; site chrome and figures share named custom properties. Figures must not invent hex outside that file. No `--success` / `--warning` tokens.

## 2026-10-01 — Phase 0 built

Owner OK. Shipped:

- `app/tokens.css` + site chrome on `var(--…)`
- Content type under `content/visuals/`, registry, hashed SVG
- Routes `/en-images`, `/en-images/[slug]`, `/en-images/[slug]/v/[version]`
- Nav **En images**
- First visual `le-ratio-n-est-pas-le-service` citing EC-07 `2026-10-01-2`
- §1 gate `npm run test:visual-snapshot`
- Docs/14 cycle sentence amended

Decided with the build: dynamic `[slug]` from day one; figure lives under `content/visuals/` only (inlined at render, not mirrored to `public/`); hand SVG with token hex values recorded in a file comment.

## Open, and not decided by writing this folder

- Chart tooling for later visuals: hand SVG vs a generator tied to a frozen model version.
