# Changelog

All notable changes to this repository are documented here.

Scope: pact / research, publication honesty, public website, and infra / build.
Format follows [Keep a Changelog](https://keepachangelog.com/). Entries are **dated**, not SemVer — paper snapshots already use dates, and this package has no version field.

Tags on bullets: `[pacte]` · `[publication]` · `[website]` · `[infra]`

This file is a ship/history narrative. It does not replace:
- `Docs/06_Pacte_Decision_Log.docx` — argument changes for the Pacte
- `private/technology&Architecture/*/decision_log.md` — domain decisions

## [Unreleased]

### Added

- `[publication]` EC-08 housing and financial stability (`/documents/red-team-08`), open verdict; `2026-10-02-3` frames the IO share as a credit claim (not property on the bank book) and tests 40–50 % as an IO-to-value ceiling over a long principal life; announced list now EC-09 alone.
- `[website]` Participation page at `/participer`, linked from the main navigation and footer: critique first, research contributions, circulation of the work, then financial support through the hosted Stripe payment page. `/soutenir` redirects to its financial-support section.
- `[website]` Native share actions with a copy-link fallback for frozen document versions, visual versions, and the France 2040 website; no platform SDKs or tracking.
- `[website]` Public comment intake at `/commentaires`: form (prénom, nom, e-mail, texte ; LinkedIn et référence document optionnels), Resend e-mail verification, pending queue in dedicated Upstash Redis, moderated public list; gated `/commentaires/moderation`.
- `[website]` « Critiquer » on document passages and En images figure/sections opens the comment form with slug, version, anchor, and section prefilled; accepted comments link back to the passage.

### Changed

- `[website]` `/projet` expanded: why (initiator named), method (versioning, En images, EC, critique), restrained AI statement, financing/independence, publication principles (frozen versions, open verdicts, empty cells).

### Fixed

-

## 2026-10-01

### Added

- `[infra]` Repo-level `CHANGELOG.md` covering pact, publication, website, and infra (dated entries; not a substitute for Decision Logs).
- `[publication]` Publication-as-consultation architecture (`Docs/14_Architecture_Publication_Consultation.md`): Research → Publication → Discussion → Revision; HTML canonical; version + anchor as unit of reference.
- `[publication]` First versioned HTML working paper: EC-05 (Red Team 05 bank funding) at `/documents/red-team-05`, open verdict.
- `[publication]` Household exhibit specification at `/documents/parcours-menages` (frozen).
- `[publication]` EC-06 fiscal loop (`/documents/red-team-06`) and EC-07 debt / inflation / rates (`/documents/red-team-07`), both open verdicts; follow-up versions clarifying tax bases (EC-06) and interest vs stock (EC-07).
- `[publication]` Machine-readable publication envelope: French titles/descriptions/OG, ScholarlyArticle, versioned canonical URLs, sitemap; preview deployments `noindex`.
- `[website]` Public series name **Épreuve contradictoire** (EC-01–EC-07) on the site; Docs/ keeps Red Team as working-file name.
- `[website]` En images domain (phase 0): citing visual layer; first visual `/en-images/le-ratio-n-est-pas-le-service`; site cycle Documents → En images.
- `[infra]` Visual figure hash check in the §1 build contract (`test:visual-snapshot`).

### Changed

- `[infra]` `npm run build` is `scripts/vercelbuild.js`: summary contract + paper snapshots, then `next build`, BUILD SUMMARY on success and failure.
- `[infra]` `private/` excluded from Vercel upload (`.vercelignore`); absolute canonical origin from Vercel production domain at build time.

## 2026-09-28

### Added

- `[website]` Minimal public Next.js site (French UI): `/pacte` short reading, `/documents` index, project pages; Vercel deploy path.
- `[pacte]` V2 paper as reference (`Docs/Pacte_du_Bilan_Francais_V2_enrichie.docx`); thesis frozen; Decision Log as the only path for argument change.
- `[pacte]` Public canonical set linked from the site: V2, macro model v0.1, open-questions page; EC-01–EC-04 red-team sequence in Docs/ (borrowable capacity through 2040 cliff).
- `[infra]` Repository bootstrap: Next.js 15, TypeScript, paper snapshot registry under `content/papers/`.
