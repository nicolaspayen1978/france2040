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

## 2026-10-01 — Phase 1 candidates 1–4 built

Owner asked for visuals 1–4. Shipped:

- `/en-images/trajectoire-credit-2027-2040` — simulation, chemin EC-04
- `/en-images/mecanisme-du-euro` — schéma, liens EC-02/03/06 ouverts
- `/en-images/parcours-menage-interets-seuls` — donnée arithmétique parcours-menages
- `/en-images/patrimoine-vs-enveloppe` — ordres de grandeur EC-01

Candidate 5 (carte des EC) not cut. Palette tokens only. Empty EC cells stay empty.

## 2026-10-01 — Circulation copy pass (`2026-10-01-2`)

Owner refinements on phase 0 ratio figure, applied across the library:

- Broader “Insee” labels → ordres de grandeur / dated natures per bar
- Ambiguous “+11,2 %” → level first, then “sur un an”; “43,6 % du PIB”
- Technical Insee reconciliation off the image; anti-claim footer kept or added on every current visual
- UTF-8 rewrite of the four phase-1 SVGs (v1 bytes remain superseded)

All five currents are `2026-10-01-2`. Rule recorded in `design.md` § Circulation copy.

## 2026-10-01 — Image 0: les quatre bilans

Owner supplied architectural sketch. Published as `/en-images/les-quatre-bilans`, first in the registry.

Not a byte upload of the colourful draft. Redrawn in tokens (blue/grey only). Source claims that closed consolidation or French output were rewritten as open (EC-02/03/05/06/07). Anti-claim footer: ne constitue pas une trajectoire · ne prouve pas la consolidation.

## 2026-10-02 — Le problème: demography note then B→A→C

Owner OK: preferred path (short public note) then order B → A → C.

- Paper: `/documents/contexte-demographique` `2026-10-02` — Insee Première 1881 + COR juin 2025 tables; cells absent from sources stay empty.
- B `retraites-vs-actifs`: demographic dependency 37 → 51; title and anti-claim block reject « retraités vs employés ».
- A `demographie-2027-2040`: share 65+ 21 % → 29 %, window 2027–2040, ± millions 75+ / −60; no invented 2040 share %.
- C `financement-retraites`: COR balances 2024 / 2030 / 2070 and expenses vs resources; not Maastricht, not Pacte effect.

## 2026-10-02 — Owner: put 2040 on the figures

Feedback on A and C: 2070 alone is not enough for a 2027–2040 window.

- Insee Première 1881 already publishes **26 %** for share 65+ in 2040 — filled in note `2026-10-02-2` and visual A `2026-10-02-2`.
- COR synthesis does **not** isolate a 2040 solde in % of GDP — cell stays empty on the figure.
- Closest published mid-horizon money figure: Cour des comptes février 2025 **~30 Md€ in 2045** (COR says nearly identical at 2045). Added on C `2026-10-02-2`.

## 2026-10-02 — EC-08: part IO ≠ LTV consolidé

Owner OK after EC-08 freeze (`2026-10-02-5`). Best visual from the note is the distinction +
failure mode, not Dutch data.

Published `/en-images/part-io-n-est-pas-le-ltv-consolide` `2026-10-02` (schéma):
1. Ce que le Pacte plafonne — part IO / valeur 50 % OK; consolidé 90 % is bank underwriting.
2. Mode d’échec — after −20 %, consolidé 112,5 %; part IO / valeur 62,5 %.

Anti-claim on figure: ne prédit ni défaut ni perte · verdict non tranché. Cites frozen EC-08.
Dutch Monitor figures stay in the document only.

## 2026-10-03 — Phase 2 simulation trio

Owner: results and model are public; the working figures must exist as En images objects.
Three simulations, citing `/documents/modele/phase-2/v/2026-10-03-2` and `/documents/modele/v/2026-10-03`:

- `cas-central-phase-2`
- `meme-credit-transmission-faible`
- `choc-adverse-et-arret`

Nature: simulation. Do not close EC-02/03/06/08/09. v0.1 is not the producer.

## Open, and not decided by writing this folder

- Chart tooling for later visuals: hand SVG vs a generator tied to a frozen model version.
- Phase 1 candidate 5: carte des EC.
