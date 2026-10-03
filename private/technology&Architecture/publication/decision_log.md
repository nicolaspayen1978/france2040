# Decision log

## 2026-10-03 — Explique-moi le Pacte receives a dialogue display treatment

Owner approved a layout-only pass. The immutable Markdown, SHA-256, version id, summary and
verdict are unchanged. An opt-in `dialogue` presentation places the two opening lines and the
section question on the reader’s side, with the existing explanatory paragraphs opposite. It is
not a comment thread or a new document type, and it does not affect other papers. Each original
paragraph and heading keeps its address and Critiquer target.

## 2026-10-01 — Publication is the consultation

Adopted in `Docs/14_Architecture_Publication_Consultation.md`.

Research cycle: Research → Publication → Discussion → Revision.

Site cycle: Pacte 2040 → Documents → Discussion → Revision.

HTML is canonical. The unit of reference is version + anchor. A working paper may carry an open verdict. Comments, when they exist, do not alter the text. An author response is not the status of the issue.

## 2026-10-01 — First build is the document layer of Red Team 05

Built. No comment store. The public text is the note of 1 October 2026, verdict « Non tranché ». The four bank readings are frozen in that text. Financeability stays unanswered. The illustrative line “BNP in progress” was not used: the note does not say that.

## 2026-10-01 — Build plan stays off the site

This directory is the build plan. `.vercelignore` lists `private`. The plan is not linked from a page and is not placed in `public/`.

## 2026-10-01 — Household exhibit specification is a public document

Published as `/documents/parcours-menages`, version `2026-10-01`, status frozen. The text is the specification of that date. It is not an assumption inside V2 and it does not open Red Team 06.

## 2026-10-01 — Public series name is Épreuve contradictoire

The site says Épreuve contradictoire, numbered EC-01 to EC-05. The sentence on the documents page is: « Épreuves contradictoires — nous cherchons ce qui pourrait faire échouer le Pacte. » Slugs and snapshot bytes stay. Docs/ keeps Red Team as the working-file name. The branch label RT05-E inside the EC-05 text is unchanged.

## 2026-10-01 — EC-06 opens the fiscal loop and does not fill it

First public version at `/documents/red-team-06`, snapshot `v2026-10-01`. The question is how much of one euro of credit, then one euro of extra spending, returns to public administrations. The verdict stays open. The average compulsory-levy rate, 43.6% of GDP in 2025, is cited and not used as a coefficient. The March notification cited by the summary and the May annual account are not added together. Debt, deficit and the interest bill stay with EC-07.

## 2026-10-01 — EC-06 chain is tax bases, not French output alone

Version `2026-10-01-2`. EC-03 asks how much spending becomes French output. EC-06 asks which French tax bases the use of the credit creates, including VAT on an import and transfer duties on an existing home. The card question is per euro actually spent, by basket, not one coefficient from credit to receipts. The empty cell stays empty. Baskets are the next pass, not this one.

## 2026-10-01 — Machine-readable publication, French only

Owner approved the discoverability slice. No new prose. No snapshot bytes changed. No author byline.

The cited URL remains `/documents/<slug>/v/<version>`. The unversioned URL is an alias of the current version and declares that version as its canonical. Each version, including a superseded one, canonicalizes to itself and stays in the sitemap.

Titles, descriptions, Open Graph, the breadcrumb, and ScholarlyArticle values are French. Schema.org type names stay the vocabulary. The article carries the recorded title, summary, publication date, version id, verdict (including an open one), and the sources already on the paper. The publisher is France 2040, an independent research project, not a state site.

The absolute origin is the Vercel production domain at build time. It is not hardcoded. Preview deployments are `noindex`. Narrative pages and claim-to-anchor links are not this slice.

## 2026-10-01 — One owner-supplied social preview across the site

Use the supplied France 2040 JPEG unchanged at `/og/france-2040.jpeg` for Open Graph and Twitter/X large-card previews. Route-specific metadata must repeat the image because nested Open Graph objects replace the root object. No published document snapshot changes.

## 2026-10-01 — EC-07 separates ratio, stock and interest

First public version at `/documents/red-team-07`. The question is the joint path of deficit, debt/GDP and interest when nominal growth, inflation, sovereign rates and refinancing are held together. The verdict stays open. 2025 already shows interest rising while inflation falls and the deficit improves. Average life of negotiable debt near eight and a half years is cited from AFT 2024. No end-period debt ratio is published. The constant-debt illustration in model v0.1 is named and not used as a result.

## 2026-10-01 — EC-07 interest cost is not stock times one rate

Version `2026-10-01-2`. The interest line depends on stock, composition (including inflation-linked paper), effective cost and gradual rollover. The required next model is recursive: primary → interest → overall balance → debt stock → refinancing → next interest, beside nominal GDP. Success is a plausible joint path, not only a lower debt/GDP by 2040. First En images candidate named: `/en-images/le-ratio-n-est-pas-le-service` (not built; see en-images domain).

## 2026-10-01 — En images planned beside publication, not inside it

See `private/technology&Architecture/en-images/`. Visuals are a citing layer: they explain, they do not establish claims. Comments remain on documents. No En images code until that domain’s design is owner-approved.

## 2026-10-01 — En images phase 0 built

Owner OK. First visual `/en-images/le-ratio-n-est-pas-le-service`. Docs/14 site cycle is now Pacte → Documents → En images → Discussion → Revision. Visual figure hash is a §1 contract check. Comments stay on documents.

## 2026-10-01 — Parcours ménages reopened for credit access and typical cases

Owner asked to revise the frozen household exhibit. Version `2026-10-01` is superseded. Version `2026-10-01-2` adds the observed credit-access frame (HCSF, BdF, ACPR, Notaires surfaces, PTZ) and two typical cases from loan statistics, not invented national purchase budgets of 230/270 k€. Case 1: ~200 k€ loan + ~35 k€ deposit. Case 2: first-time buyer 178 k€. Two En images published: mensualité and capacité. Capacity chart states it does not establish an accession gain.

## 2026-10-01 — Scénario 700 Md€ = encours de la part à intérêts seuls seulement

Owner OK. The frozen path (cumul ≈ 700 Md€, peak 90 Md€) is the **interest-only share book** (*part à intérêts seuls*), not consolidated housing credit. French public wording: never “IO”, never “tranche” for the product (use *part à intérêts seuls* / *part amortissable*). The amortising share of a market purchase LTV does **not** enter the 700. Macro impulse probes and EC-05 bank-funding tests apply to that interest-only share book. Product shape: two shares; interest-only share ≤ 40–50 % of property value (central 40 %, sensitivity 50 %). Prior snapshots that said undifferentiated “crédit” for 700 are superseded by new versions; arithmetic that treated 700 as non-amortising principal stays valid under this definition.

## 2026-10-02 — Existing loan: household interest vs technical coexistence

Owner OK. Parcours `2026-10-02`: after « Deux formes de liquidité », section « Le prêt existant ne disparaît pas » — no debt / additional Pacte tranche without refinancing / refinance with possible loss of historical rate. Données requises extended (rate distribution, remaining capital, share forced to refinance). EC-05 `2026-10-02`: sub-test « Coexister avec l’encours existant » before financing the stock; 65.3% caution prevents assuming a mechanical second mortgage. Parcours = “Est-ce intéressant pour moi ?”; EC-05 = can the system originate beside an existing loan. Verdicts stay open. Prior snapshot bytes unchanged.

## 2026-10-02 — EC-05 coexistence: fabricate the asset before funding it

Owner OK. Version `2026-10-02-2`. The coexistence subsection must not mix origination/security conditions with privileged-refinancing eligibility. Lender, guarantor, security nature/rank and consolidated LTV belong to asset fabrication. Consequences for refinancing channels are treated downstream (financer le stock → porter → échelle). Prior snapshot bytes unchanged.

## 2026-10-02 — Public-source and AI-assistance disclosure

Owner approved a short **Méthode et transparence** section on `/projet`. It says that France 2040
uses data, publications, and sources accessible to the public and cites the sources used so the
analysis can be verified, contested, and reproduced. It does not claim to use “all” public data.

AI tools may accelerate documentary research, hypothesis exploration, coherence checks, and the
production of some supporting material. AI is not a source and does not replace human
verification, contradiction, or the project’s editorial responsibility. No published research
snapshot changes in this slice.

## 2026-10-02 — `/projet` states method and publication principles

Owner-supplied full copy. Page sections: Pourquoi France 2040 (initiator named; personal why;
not a programme or institution), Comment le travail est conduit (public sources; frozen
versions; En images as objects; EC as falsification; critique attached, never rewrites), Une
recherche augmentée par l’IA (explicit uses + « elle peut se tromper »; not a source; does not
close EC), Financement et indépendance (initiator-funded; voluntary gifts; no tax relief; no
rights over conclusions/versions/moderation; link to Participer), Principes de publication
(frozen snapshot; open verdict stays open; critique completes the dossier; empty cells stay
empty; examination, not belief). No research snapshot changed. Schema author byline still not
added.

## 2026-10-02 — EC-08 opens housing / financial-stability channels

Owner OK via refined design note. First public version at `/documents/red-team-08`,
`2026-10-02`. Question: what becomes of the Pacte when prices fall — not whether prices can
fall. Five channels. Falsifiable hypothesis includes V2 kill-switches as last barrier, without
demonstrating them. LTV table −10/−20/−30 % is arithmetic only; defaults, forced sales, DMTO,
bank losses and funding stay empty. Price decline itself is not category-4; certain
transmissions may be. Announced list drops EC-08; EC-09 remains.

## 2026-10-02 — EC-08 separates IO share from consolidated LTV

Owner correction. Version `2026-10-02` is superseded: its table treated 40–50 % as consolidated
LTV. Version `2026-10-02-2` states the ceiling is the interest-only share only. Mechanical IO
cushion (−50 % / −60 % to equal principal) is not bank-loss or default proof. Real failure mode:
existing mortgage + IO share can leave consolidated LTV high (100 / 40 / 50 → 90 %; after −20 %,
80 vs 90). Channel 4 asks which origination/coexistence rules make the IO cap produce the
announced cushion. CRR art. 125 (55 % layer; senior-lien adjustment) cited as prudential
distinction of interest, not as proof that 40–50 % is right. Choice among 40 / 45 / 50 % stays
open for the red team. Verdict remains non tranché.

## 2026-10-02 — EC-08: IO is a credit claim; test the ratio over time

Owner clarification. Version `2026-10-02-2` superseded by `2026-10-02-3`. Amortising and
interest-only mortgages are both bank credit claims secured by property; IO principal stays
≈ constant, so exposure/collateral remains relevant over the life of the loan. Do not explain
the 40–50 % cap as ensuring the asset can never fall below collateral. DNB *Monitor on mortgage
lending standards and financial stability 2026*: by Q3 2025 nearly 40 % of Dutch FI mortgages
were IO (no regular repayment, no linked savings product); only 7 % of those have LTV > 75 %
vs nearly 20 % for the whole book — reduces collateral-insufficiency risk at maturity; other
risks remain. EC-08 must investigate whether 40–50 % is an appropriate maximum IO-to-property
ratio because principal remains outstanding (reference maturity from EC-05 ≈ 20 years). Verdict
stays non tranché.

## 2026-10-02 — EC-08 rewritten around the central distinction

Owner asked for the best possible EC-08, not a minimal patch. Version `2026-10-02-4` leads with:
Pacte does not cap consolidated LTV at 40–50 %; it caps only the IO tranche / property value;
consolidated LTV is separate bank underwriting. Object table (IO ratio / consolidé / bank asset /
collateral). Price fall erodes the cushion around the IO claim; it does not by itself create a
loss or default. IO arithmetic table kept separate from the 100/40/50 consolidé failure mode.
Channels and classement rewritten so 40–50 % is never read as a consolidé ceiling. Soft phrases
(“ratio collatéral annoncé par le plafond”) removed. Verdict remains non tranché. Prior versions
superseded, bytes unchanged.

## 2026-10-02 — EC-08 frozen; harder hypothesis only

Owner accepted `2026-10-02-4` as conceptually sound, with one reservation: the under-test
hypothesis must not be the near-tautology that collateral deterioration alone does not trigger
default. Version `2026-10-02-5` freezes the note after replacing that sentence so the test is
transmission *given* consolidated LTV actually accepted at origination. No further modelling.
Status: gelé. Verdict remains non tranché. `-4` superseded, bytes unchanged.

## 2026-10-03 — Public French vocabulary (no IO / LTV / equity)

Owner: English banking shorthand does not belong on the French public site.

Glossary for public pages:
- IO / interest-only → *part à intérêts seuls* (or *créance à intérêts seuls*)
- LTV → *ratio dette / valeur* (achat: *ratio prêt / valeur d’achat*; consolidé: *ratio dette consolidée / valeur*)
- equity → *capital immobilier net*
- DSTI → *taux d’effort*

New versions `2026-10-03` for current papers (EC-08 re-frozen after vocab-only cut) and related
En images. Slugs with historical `io`/`ltv` kept for URL stability. Superseded snapshots untouched.

## 2026-10-03 — EC-09 opens the combined-failure test

Owner: start EC-09. Version `2026-10-03`, verdict open. Question: where are the Pacte’s operating
limits when several adverse assumptions act together — not whether it resists everything.
Five strands (weaker growth, higher rates, weak credit→spend, higher imports, housing fall).
Combination is its own object, not the sum of EC-02…08. V2 adverse minimum and kill switches
are method constraints; no trajectory filled. Announced list cleared; `AnnouncedTests` hides when empty.

## 2026-10-03 — EC-09 frozen with sixth strand (chômage / revenu)

Owner: unemployment / disposable-income shock must be a formal strand — bridge from macro to
household/bank credit losses; V2 already requires unemployment. Also fix « freiner la production »
→ freiner la montée en charge / nouvelles originations. Freeze as `2026-10-03-2`. Do not fill
EC-09 cells; do not open EC-10; next work is back down the stack (joint scenarios need the open
EC-02…08 cells). Envelope question retained: where operating limits end, not “survives a crisis.”

## 2026-10-03 — After the map: quantify; start at EC-02

Owner sequence: EC-01→09 mapped objections; next is the mechanism in numbers.
Order: EC-02 (credit uses) → EC-03 (by-category French activity) → EC-06 (marginal receipts)
→ EC-07 (2027–2040 public-finance path / Pacte Spread) → return to EC-09 (joint scenarios +
stop rules). EC-05/08 may run in parallel. No EC-10 until the numbers produce a new objection.

EC-02 `2026-10-03` replaces the hanging 25/50/75 % scalar with an allocation identity.
Additional spending is renovation + consumption + new productive investment. Saving, debt
substitution, transfers and existing-asset purchases are not additional demand. Parts stay
empty (no invented shares). UK mortgage-equity-withdrawal evidence is a counter-test, not a
French prior. Verdict non tranché. Next: EC-03 on each spent category, not one multiplier.

## 2026-10-03 — EC-03 by category

Owner: EC-03 on each spent category, not one multiplier. Version `2026-10-03` receives only
EC-02 additional spend (renovation, consumption, new productive investment). Per line: 2019
average French VA content (Insee Analyses 89) is cited and not used as a Pacte parameter;
volume elasticity and labour are separate. Existing assets / leaks stay out of real GDP
(DMTO → EC-06). Peak BTP arithmetic kept as stress if the spent sum were works. Verdict
non tranché. Cell €1 spent → €X French volume stays empty until EC-02 shares exist.
Next in the stack: EC-06 marginal receipts by basket.

## 2026-10-03 — EC-06 by basket

Owner: EC-06 on each EC-02 usage, not 43.6 % of GDP or of a spend probe. Version `2026-10-03`
maps VAT, contributions, PIT, CIT and transfer duties onto the credit-use vector. Receipts
can exist without French volume (import VAT, DMTO); French volume can exist with thin current
receipts (reduced-rate works, no extra employment). Assignment of receipts to consolidation
stays a separate untested rule. Cells empty until EC-02 shares exist. Next: EC-07 2027–2040
path (solde, debt ratio, interest), not a filled coefficient.

## 2026-10-03 — EC-07 2027–2040 path

Owner: EC-07 as a joint year-by-year path (solde, stock, ratio, interest), not an end-2040
ratio at constant debt. Version `2026-10-03` writes the recursion, keeps 2025 as observed
start, leaves 2027–2040 empty. Pacte Spread (nominal GDP growth minus nominal spending growth)
is a V2 reading rule, not the primary and not interest. The published 1.5–3.2 point gap is not
the deficit. Household interest-only peak (90 Md€, 2031–2032) is not the public-interest peak
(refinancing clock ~8.5 years). Next: return to EC-09 (joint scenarios + stop rules) without
filling cells here.

## 2026-10-03 — EC-09 return: joint families and stop rules

Owner: return to EC-09 after EC-02→03→06→07. Version `2026-10-03-3` does not fill cells and
does not open EC-10. Three joint families: V2 adverse minimum (recession, unemployment,
housing −30 %, high rates) crossed with EC-02 compositions (leaks, works, consumption).
Stop rules mapped onto stack observables; they act on origination, not the written book.
V2 housing light is price *acceleration*; the adverse strand is a *fall* — two thresholds,
both empty. Next is filling already-open cells, or a new object (only then EC-10).

## 2026-10-03 — Model interrogates the Red Teams

Owner: further ECs are diminishing returns unless the model produces a new object. Next model
tags every number (observed / sourced assumption / scenario assumption / calculated). Four
trajectories: reference without Pacte, central Pacte, weak-transmission, combined adverse.
Purpose: which variables dominate and where the mechanism breaks — not proof of the central
case. Open EC verdicts stay open. v0.1 not patched. Spec in
`Docs/19_Model_Interrogates_Red_Teams.md` and `private/technology&Architecture/model/`.
Phase 1 (scenario numbers + new workbook) waits for explicit go.

## 2026-10-03 — Phase 1 locked (tags, four series, R, A sentence)

Owner adjustments accepted. Tags: O observé, S sourcé, Σ scénario, ƒ calculé — C is Central
only. Credit path: gross / cumulative / repayments / outstanding, so 700 net-new sum is not
silently the 2040 stock. R is a tagged counterfactual (résumé 1,0 / 2,5 / 2,0 stay Σ).
A = V2 adverse + Fuites-2 + 4-quarter delay. Household cash released and IO service+stock
are dominance outputs. Diversifié-1 / Fuites-1 / Fuites-2 are Σ with written justifications,
not estimates. Public line to keep: the model does not resolve uncertainty; it makes
uncertainty compete. Next: Phase 2 workbook.

## 2026-10-03 — Phase 2 first tagged run (not public)

Owner GO. Three corrections in the run: 2027 vintage matures 2047; A house-price index
2027=100 → 70 in 2030 then held; first light = 2028 (recession year), stop from 2029.
Workbook and dominance note in `Docs/`. Open ECs stay open. v0.1 unchanged. No EC-10.
Next public model page is Phase 3, only if the owner wants the tagged run on the site.

## 2026-10-03 — Résultat de simulation Phase 2 published

Owner: not another EC, not a replacement of `/documents/modele` v0.1. New document type
Résultat de simulation at `/documents/modele/phase-2` · `2026-10-03`. Scénarios, pas une
prévision. Does not close any EC. French canonical. Qualities of use are framework;
10 pp block is a sensitivity experiment, not a policy estimate. €700bn is a constraint.

## 2026-10-03 — Model Phase 2 is the public producer

The simulation numbers are not v0.1 (0,65 × 0,35, constant debt). Owner: publish the Phase 2
model as current `/documents/modele` `2026-10-03`. v0.1 stays addressable, superseded as
current, bytes frozen. Not Pacte V2. Results page `2026-10-03-2` cites that model.

## 2026-10-03 — Résumé et brouillon après Phase 2

Owner: Executive Summary first, substantial. Replace « impacts encore préliminaires ».
Centre = chaîne conditionnelle + weak transmission + qualités d’usage.
Pacte public draft surgical (`2026-10-03`): IO cap not consolidated LTV; 700 = origination;
qualities not sector list. Do not load 125/65 into the constitution. Homepage: « ouvrir une
fenêtre », not « restaurer ». Long V2 `2026-10-03-2` catches up on those four points only.

## 2026-10-03 — Résumé compressed, not rewritten

Owner: hierarchy/readability, not outdated content. Keep core sentence and qualities.
Household 223/700 first. Origination not « crédit mobilisé » on the chain. Cut proposition
de valeur and France Relance. Add empty-cell box and one adverse sentence. Social pact kept.

## 2026-10-03 — Three extensions, communicate the core

Owner: mature enough to communicate. Next research is (1) Eurosystem role, not a guarantee;
(2) societal channels by household archetype, unsigned; (3) Dutch IO/housing-value balance
sheet. First NL arithmetic stays in Docs until DNB/CBS dates align. No EC-10.

## 2026-10-03 — Crawl current freeze only

Owner GO. Sitemap: current paper and visual version URLs only. Non-current `/v/…`:
`noindex, follow`. No canonical of superseded → current. No `Disallow: /*/v/`.
Old bytes stay public. Preview deploys remain fully `noindex`. A scholar with
`/documents/modele/v/2026-09-28` still gets those exact bytes. HEA ingest should not mix
that freeze with Phase 2.

## Open, and not decided by starting to code

Phase 3 storage: a pending queue outside the snapshot, published comments in their own records. Email addresses are personal data and are not rendered. That phase waits for acceptance of the Red Team 05 page and for an explicit go-ahead before any store or mail secret is added.
