# Decision log

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

## Open, and not decided by starting to code

Phase 3 storage: a pending queue outside the snapshot, published comments in their own records. Email addresses are personal data and are not rendered. That phase waits for acceptance of the Red Team 05 page and for an explicit go-ahead before any store or mail secret is added.
