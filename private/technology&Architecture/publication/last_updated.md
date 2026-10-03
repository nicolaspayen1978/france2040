2026-10-01

Design note, decision log, and phases 0–3 written. Phase 0 is built. Phases 1–3 are not started.

Deploy gate is `scripts/vercelbuild.js`: §1 summary contract and paper snapshot, §2 `next-build`, BUILD SUMMARY on success and failure.

2026-10-01. The public set is on the document layer: draft Pacte, V2, model, open questions, Red Teams 01–05. Word and Excel are attachments. Comments are not built.

2026-10-01. Site pages are French. Working files in Docs/ may stay English. Red Team 01’s published snapshot is the French text of the English note.

2026-10-01. Public name of the series is Épreuve contradictoire, numbered EC-01 to EC-05. URLs stay `/documents/red-team-01` through `/documents/red-team-05`. Working files in Docs/ keep the English name. The frozen branch label RT05-E stays inside the EC-05 snapshot.

2026-10-01. Document list order: draft Pacte, executive summary, V2, household paths, model, open questions, EC-01 to EC-05.

2026-10-01. Announced tests are EC-06 fiscal loop, EC-07 debt inflation and rates, EC-08 housing and financial stability, EC-09 combined failure. No page and no snapshot until the note exists. Earlier EC-06 to EC-12 titles duplicated published tests and were replaced.

2026-10-01. EC-06 published as `/documents/red-team-06`, version `2026-10-01`, verdict open. No recovery coefficient. 43.6% is not applied to the spending probes. Announced list is now EC-07, EC-08, EC-09.

2026-10-01. EC-06 revised as `2026-10-01-2`. The chain asks which French tax bases the composition of spending creates, not only what French output returns. The subtitle no longer reads as one credit-to-receipt coefficient. The per-euro cell stays empty. Prior snapshot bytes unchanged.

2026-10-01. EC-07 published as `/documents/red-team-07`, version `2026-10-01`, verdict open. Separates deficit, debt stock, debt/GDP and interest. No path filled. v0.1 constant-debt illustration not published as a result. Announced list is now EC-08 and EC-09.

2026-10-01. EC-07 revised as `2026-10-01-2`. Interest cost is stock, composition, effective cost and rollover — not stock × one rate. Success criterion stated as a joint primary-and-refinancing path. Empty cells stay empty.

2026-10-01. Household exhibit specification published as `/documents/parcours-menages`, version `2026-10-01`, status frozen. Snapshot of `Docs/Note_Parcours_Menages.md`. Not an assumption inside V2.

2026-10-01. Parcours ménages reopened as `2026-10-01-2` (working paper). Prior version superseded. Adds credit-access sources and Cases 1–2. En images: `emprunt-moyen-mensualite`, `emprunt-moyen-capacite`.

2026-10-01. Parcours ménages `2026-10-01-3`: two-tranche product; IO share is % of property value (40% central, 50% sensitivity). Visuals updated to `2026-10-01-2`.

2026-10-01. French machine-readable envelope on existing pages: absolute canonicals, sitemap, robots, Open Graph, breadcrumb, ScholarlyArticle. Version URL stays the citable object. No new narrative pages. No author in the schema. No snapshot edit.

2026-10-01. En images phase 0 built. First visual `/en-images/le-ratio-n-est-pas-le-service`. Nav, tokens.css, visual hash gate. Docs/14 cycle includes En images.

2026-10-01. Owner-supplied France 2040 JPEG is the site-wide Open Graph and Twitter/X large-card image. Route-level metadata repeats it so nested metadata does not drop the image. No document snapshot changed.

2026-10-01. Scenario freeze: 700 Md€ (and the 90 Md€ peak path) = *encours / flux de la part à intérêts seuls* only. Amortising share of purchase LTV excluded. Public French vocabulary: *part à intérêts seuls*, *part amortissable* — not IO, not tranche. New versions: résumé `2026-10-01-10`, V2 `2026-10-01`, questions ouvertes `2026-10-01`, EC-01/04 `2026-10-01`, EC-05 `2026-10-01-2`, parcours `2026-10-01-4`, EC-06/07 `2026-10-01-3`, related En images `2026-10-01-3`.

2026-10-02. Parcours ménages `2026-10-02`: existing loan does not disappear — keep low historical rate vs refinance cost; three situations. EC-05 `2026-10-02`: coexistence sub-test (additional tranche without refinancing) before financing the stock; 65.3% caution market. Prior snapshot bytes unchanged.

2026-10-02. EC-05 `2026-10-02-2`: coexistence wording separates asset fabrication (lender, guarantor, security nature/rank, consolidated LTV) from downstream eligibility for refinancing channels. Prior snapshot bytes unchanged.

2026-10-02. Context note `/documents/contexte-demographique` `2026-10-02`: Insee Première 1881 + COR juin 2025 tables for En images Le problème. Verdict: contexte établi à partir des sources ; lien Pacte = lecture.

2026-10-02. Context note `2026-10-02-2`: fills Insee 26 % (65+) in 2040; adds Cour ~30 Md€ in 2045; COR 2040 % PIB stays empty. Prior snapshot bytes unchanged.

2026-10-02. `/projet` now includes **Méthode et transparence**: public-source citations and an
explicit AI-assistance boundary. AI accelerates parts of the workflow but is not a source and does
not replace human verification, contradiction, or editorial responsibility. No snapshot changed.

2026-10-02. `/projet` expanded to owner-supplied copy: Pourquoi (initiator named), Comment
(versioning, En images, EC, critique), IA (restrained + « elle peut se tromper »), Financement
(initiator + voluntary gifts; no influence), Principes de publication (frozen snapshot, open
verdict, empty cells). Links to `/pacte`, `/en-images`, `/participer`. No snapshot changed.

2026-10-02. EC-08 published as `/documents/red-team-08`, version `2026-10-02`, verdict open.
Five channels (LTV, households, DMTO, origination, system). Arithmetic LTV table −10/−20/−30 %
only. Price fall alone not classed as fatal; transmissions are. Announced list is now EC-09.

2026-10-02. EC-08 revised as `2026-10-02-2`. Owner correction: 40–50 % is the interest-only
share ceiling, not consolidated LTV. Failure mode: IO cushion already occupied by existing debt
(example 100 / 40 / 50 → 90 % consolidé; −20 % → 80 vs 90). Channel 4 tied to channel 1. CRR
art. 125 cited without validating the ceiling. 40/45/50 % left open. Prior snapshot bytes
unchanged.

2026-10-02. EC-08 revised as `2026-10-02-3`. Owner clarification: IO share is a mortgage credit
claim, not property on the bank balance sheet; LTV remains relevant because principal stays
outstanding. DNB Monitor 2026 (Q3 2025): nearly 40 % Dutch IO; only 7 % of IO loans LTV > 75 %.
Do not explain 40–50 % as guaranteeing asset ≤ collateral. Test whether 40–50 % is an appropriate
maximum IO-to-property ratio over the life of the principal. Prior snapshot bytes unchanged.

2026-10-02. EC-08 rewritten as `2026-10-02-4`. Central distinction leads the note: Pacte caps
IO/property (40–50 %), not consolidated LTV (bank underwriting). Object table; IO arithmetic
table separate from 100/40/50 consolidé failure mode; price fall erodes cushion without automatic
loss/default. Soft “ratio collatéral annoncé” wording removed. Verdict non tranché. Prior
snapshot bytes unchanged.

2026-10-02. EC-08 frozen as `2026-10-02-5`. Same body as `-4`; hypothesis only tightened:
collateral erosion *given* consolidated LTV actually accepted at origination — not the weaker
“price fall alone ≠ transmission.” Status gelé. No modelling added. Prior snapshot bytes
unchanged.

2026-10-03. Public French vocabulary pass. Current papers → `2026-10-03` (EC-08 re-frozen).
No IO / LTV / equity on public French text. Related En images updated. Prior snapshot bytes
unchanged.

2026-10-03. EC-09 published as `/documents/red-team-09`, version `2026-10-03`, verdict open.
Combined failure: five adverse strands; combination ≠ sum of isolated ECs; V2 adverse minimum
and stop rules as method constraints. No path filled. Announced list is now empty.

2026-10-03. EC-09 frozen as `2026-10-03-2`. Sixth strand: unemployment / disposable income
(bridge to credit losses). Wording: freiner la montée en charge, not « production ». Spec for
quantitative stack below; no EC-10; no cells filled. Prior snapshot bytes unchanged.

2026-10-03. Quantification stack locked: EC-02 → EC-03 → EC-06 → EC-07 → return to EC-09.
EC-05/08 parallel. EC-02 revised as `2026-10-03`: use vector replaces 25/50/75 % scalar;
additional spend = renovation + consumption + new productive investment; other uses are leaks.
Parts empty. UK MEW is a counter-test. Prior snapshot bytes unchanged.

2026-10-03. EC-03 revised as `2026-10-03`. Reads only additional spend from EC-02, category by
category (content, volume elasticity, labour). 78/38/96 % stay 2019 averages. BTP scale table
is stress if the spent sum were works, not a retained basket. Prior snapshot bytes unchanged.

2026-10-03. EC-06 revised as `2026-10-03`. Marginal receipts by EC-02 usage (VAT, social
contributions, PIT, CIT, transfer duties). 43.6 % and 25/50/75 % are not a fiscal basket.
VAT on imports and DMTO can exist without EC-03 volume. Cells empty. Prior snapshot bytes
unchanged.

2026-10-03. EC-07 revised as `2026-10-03`. Joint annual path 2027–2040: primary, interest,
balance, stock, ratio, Pacte Spread. Spread is a reading rule, not the deficit. v0.1 constant
debt and the 1.5–3.2 pt spending gap are not the path. Credit peak ≠ interest peak. Year cells
empty. Prior snapshot bytes unchanged.

2026-10-03. EC-09 revised as `2026-10-03-3` (working paper; prior `2026-10-03-2` bytes unchanged).
Joint scenario families = V2 adverse minimum × EC-02 composition. Stop rules mapped to
observables (flow, not stock). Thresholds empty. No EC-10.

2026-10-03. After EC-09: model interrogates Red Teams. Provenance tags; four trajectories;
no EC-10 by default. v0.1 unpatched. Phase 0 inventory written. Phase 1 waits for owner go.

2026-10-03. Model Phase 1 locked in `Docs/19`. Tags O/S/Σ/ƒ. Four credit series. R tagged.
A = V2 + Fuites-2 + 4q. Household cash service on outputs. Phase 2 is the workbook.

2026-10-03. Model Phase 2 first run in Docs (xlsx + dominance note). Not a public snapshot.
v0.1 unpatched. No EC-10.

2026-10-03. Résultat de simulation Phase 2 published: `/documents/modele/phase-2` v2026-10-03.
Does not replace v0.1. Does not close any EC.

2026-10-03. Modèle Phase 2 published as current `/documents/modele` `2026-10-03`. v0.1 superseded
as current, bytes unchanged. Simulation result `2026-10-03-2` cites that model as producer.

2026-10-03. En images for that run: cas central, même crédit / transmission faible, choc adverse et arrêt.

2026-10-03. Canonical Pacte: `/documents/pacte` is the reference text. First public
formulation 2026-09-28 kept for history. Homepage CTA is “Lire le Pacte”, not brouillon.
