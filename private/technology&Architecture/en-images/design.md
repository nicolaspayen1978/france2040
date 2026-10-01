# En images — design note

1 October 2026. Phase 0 built.

## Why it exists

France2040 is too large to enter only through prose. **En images** is a visual reading of the Pacte: each graphic makes one claim understandable, and every factual graphic points back to a document, version, and where useful an anchor.

It is not a gallery of persuasive JPEGs. It is not a second place where claims are established.

The public decision in `Docs/14_Architecture_Publication_Consultation.md` already says: narrative pages explain; they cite documents; they do not establish or withdraw a claim. En images follows that rule. The Working Paper (or draft Pacte, model page, EC) remains the place a claim is made or left open. The visual is an entry point into that evidence.

## Object

One visual = one addressable knowledge object.

| Piece | Rule |
| --- | --- |
| Canonical URL | `/en-images/<slug>` for the current version; `/en-images/<slug>/v/<version>` when versioned |
| Index | `/en-images` — grid of cards into those pages |
| Nav | Main nav, beside Le Pacte and Documents. Label: **En images** |
| Language | French on every public string. `lang` is `fr` |
| Establish vs explain | The page explains. It cites. It does not invent a coefficient, close an open verdict, or soften « Non tranché » |

## Fields on each visual

Required on every published visual page:

1. **Title** — what the image is about, not a slogan.
2. **Ce que montre ce graphique** — one short paragraph stating the reading. Written for humans and for later retrieval (HEA).
3. **Ce que cela n’établit pas** — explicit limits. Mandatory, even when empty-looking (“rien au-delà de la lecture ci-dessus” is not enough if an open EC sits behind it; name the open point).
4. **Nature** — one of: `donnée` (observed / official series), `simulation` (France2040 model or scenario), `schéma` (conceptual diagram, no numeric claim).
5. **Units and date** — units on the figure; as-of date or model version id.
6. **Provenance** — sources named as on the cited paper, or “Simulation France2040, modèle \<version\>”.
7. **Citations** — one or more links of the form `/documents/<slug>/v/<version>#<anchor>` (or the current document URL only when no versioned paper yet exists for that text). Prefer versioned addresses.
8. **Figure** — SVG preferred; PNG acceptable. The asset is part of the published object, not an anonymous file in `/public` without a page.
9. **Status of the visual** — `working`, `frozen`, or `superseded` (life of this graphic object). Separate from any EC verdict it cites.

Optional later, not required for phase 0:

- Tabular data behind the chart (CSV or inline table) for reproducibility.
- Machine-readable `ImageObject` / `Dataset` JSON-LD once the page shape is accepted.

## Editorial rule

No graph exists only because it looks convincing.

- If the underlying cell is empty (example: EC-06 recovery coefficient), the visual must not fill it with a number or a suggestive coloured band that reads as a number.
- If the underlying verdict is « Non tranché », the visual must say so in the “n’établit pas” block and must not imply closure.
- Model outputs are labelled **Simulation France2040** on the figure itself, not only in fine print.
- A conceptual schéma may illustrate the €1 chain with uncertain links marked as uncertain; it must not look like measured GDP.

### Circulation copy (figures travel alone)

A figure may be screenshotted or shared without the page. Copy on the image must survive that.

1. **Source labels.** Do not write a broad “Insee” (or similar) over a strip whose figures come from more than one release. Prefer “France, 2025 — ordres de grandeur observés”, or name each source/date on the figure; leave the technical reconciliation to the cited document.
2. **Ambiguous %.** A lone “+11,2 %” can read as an interest rate. Lead with the level (“64,7 Md€”) and qualify the change (“+11,2 % sur un an”), or write “43,6 % du PIB” when that is the object.
3. **Technical footnotes.** Notification vs compte annuel, dual vintages, etc. belong in the document. On the image: short pointer (“Sources précisées dans le document” / “Lecture : EC-0X”).
4. **Anti-claim footer.** Keep an explicit line that blocks the wrong reading: e.g. « ne constitue pas une trajectoire 2027–2040 », « ne constitue pas une prévision », « ne prouve pas une souscription », « ne remplit aucune cellule ». Do not drop it to save space.
5. **UTF-8.** Figure files are UTF-8. € and French punctuation must round-trip; a quiet encoding break fails honesty as much as a quiet number edit.


## Colour

Graphics must match the sober, institutional register of the site (ink on paper, not a dashboard).

**Lock:** colour lives in `app/tokens.css` as CSS custom properties. Site chrome and En images figures both consume those tokens. A figure must not introduce hex values that are not named there. When phase 0 builds SVGs, fills and strokes use `var(--…)` where the asset is inline, or the same token values copied once into a frozen SVG with a comment pointing at the token name — prefer inline SVG components that reference tokens so a token change cannot silently diverge from a hashed PNG.

Allowed palettes — pick one per figure, do not mix rainbow accents:

1. **Greyscale** — `--ink`, `--ink-2`, `--ink-3`, `--muted`, `--muted-2`, `--line`, `--paper`, `--paper-2`. Prefer this for data charts and status maps.
2. **Blue / red nuance** — `--mark-blue`, `--mark-red`, plus muted steps `--blue-2`, `--blue-3`, `--red-2`, `--red-3`. Anchored on the existing mark colours. Two series max in colour; further series stay grey.
3. **Blue-only or red-only nuance** — one hue family plus greys, when a two-colour split would over-signal a false binary.

Forbidden in figures: any colour outside `tokens.css`; purple/indigo marketing gradients; teal/cyan; warm cream “report cover” backgrounds; glow; drop shadows as emphasis; traffic-light green as “success”; emoji; rounded pill legends that fight the site chrome. Do not add a `--success` / `--warning` token to smuggle those in.

Semantic colour (if used at all):

- `--mark-blue` / `--blue-*` → one side of a comparison or the public / institutional pole — not “good”.
- `--mark-red` / `--red-*` → the other pole or stress — not “bad” by default; never use red alone to close a verdict.
- Grey tokens → baseline, uncertain, or “non tranché”. Open questions stay grey or hatched grey, not amber/orange.

Background of the figure: `--paper` or `--paper-2`. No full-bleed coloured canvases.

Type on figures: same seriousness as body text; `--ink` / `--ink-2` labels; no coloured display fonts.

### Token set (locked in `app/tokens.css`)

Greys and mark colours are live. Muted `--blue-2/3` and `--red-2/3` are defined there for figures; do not invent per-chart hex.

## Families (content backlog, not a build order guarantee)

| Family | Intent |
| --- | --- |
| Le problème | Ageing, public debt, housing wealth, investment gap — from cited sources |
| Le mécanisme | €1 flow: equity → credit → spending → production → receipts; uncertain links marked |
| La trajectoire 2027–2040 | Credit path, peak, return to zero; “falaise 2040” |
| Le ménage | Interest-only vs amortising; cash-flow difference; residual debt |
| Le bilan | Household + banks + productive economy + public balance sheet — what moves |
| Ce que les EC ont changé | Hypothesis → objection → evidence → current verdict (établi / non tranché / rejeté) |
| Ordres de grandeur | Stock vs flow comparisons with definitions |
| Le Pacte en une image | Canonical overview — shipped as image 0 `/en-images/les-quatre-bilans` |

First cut candidates (phase 1), each still a separate publish decision:

1. Trajectoire du crédit 2027–2040 (simulation, cites model / V2) — built
2. Mécanisme du €1 avec liens non tranchés (schéma, cites EC-02/03/06) — built
3. Parcours ménage intérêts-seuls vs amortissement (cites parcours-menages) — built
4. Ordre de grandeur patrimoine résidentiel vs enveloppe mobilisable (cites EC-01 / Pacte) — built
5. Carte des EC — établi / non tranché / rejeté (schéma de statut, cites each EC page)

**Image 0** (owner, 2026-10-01): `les-quatre-bilans` — architecture overview ahead of the numbered library. Not a substitute for EC proofs.

## Immutability

Same honesty as documents, lighter storage until two visuals exist:

1. Working sketch may live under `Docs/` or a design folder. It is not citable.
2. Publishing copies the figure and the French metadata into `content/visuals/<slug>/`.
3. The figure bytes are hashed (`sha256`) on the version record. Quiet replacement fails the build (same spirit as `scripts/vercelbuild.js` §1 for papers).
4. A change to data, reading, or image is a new version id. Old `/v/<version>` stays.
5. Do not add a chart generator that rewrites published assets at build from live model cells until the model page itself is the frozen source of those cells. Phase 0–1 may use static SVG/PNG cut by hand from the published model version.

## Relation to other work

| Track | Relation |
| --- | --- |
| Publication phases 0–2 | En images cites published documents. It does not wait for phase 1 acceptance to be designed; building the first real visual still needs those documents to exist (they do). |
| Publication phase 3 (comments) | Comments stay on documents. A visual page may say “Contester cette lecture → commenter le document cité.” No comment store on visuals in v1. |
| France2040 HEA | Out of scope for code. The “Ce que montre” / “n’établit pas” blocks are written so a later agent can retrieve text, not pixels. |
| AI-provider sponsorship | Out of scope. Not part of this domain. |
| Release gate (Red Teams → Pacte/model reconcile → comments → go out) | En images helps “go out” as a reading layer. It must not invent reconciliations the Pacte/model have not yet absorbed. |

## Proposed site-cycle amendment (after owner OK)

Today: Pacte 2040 → Documents → Discussion → Revision.

Proposed: **Pacte 2040 → Documents → En images → Discussion → Revision.**

En images sits after Documents because it depends on them. Discussion still attaches to document versions, not to graphics.

If approved, amend `Docs/14_Architecture_Publication_Consultation.md` in the same change that lands phase 0 code — one sentence, not a rewrite.

## Out of scope until a later phase

- Interactive charting library or live Excel bridge
- HEA chat UI or retrieval index wiring
- Comments, votes, or forks on a visual
- Author byline or “AI generated” badge as a substitute for provenance
- Publishing visuals whose only source is an unpublished Docs/ note
- Sponsorship, multi-model Red Team theatre, or marketing pages

## Deploy gate

Unchanged: `npm run build` → `scripts/vercelbuild.js`. Any visual hash check belongs in §1 beside paper snapshots once phase 0 lands. `private/` stays out of the deploy.
