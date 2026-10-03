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

- `[website]` Flèches de la chaîne de simulation en bleu (`--mark-blue`) pour les rendre lisibles.
- `[website]` Accueil : Critiquer le résumé exécutif, comme les documents. Résumé `2026-10-03-7` : note de trésorerie sans `\*`.
- `[publication]` Enveloppe et rythme : résumé `2026-10-03-6`, Pacte `2026-10-03-2`, V2 `2026-10-03-3`, intensité `2026-10-03-2`. 700 Md€ = enveloppe ; trajectoire indicative, suivi liant. NL ne relève pas l’enveloppe.
- `[website]` Crawlers / HEA : sitemap lists only the current freeze; superseded `/v/…` are `noindex, follow`. Frozen URLs stay addressable. Canonicals unchanged.
- `[website]` En images `France et Pays-Bas — intensité à intérêts seuls` (`/en-images/intensite-bilan-residentiel` `2026-10-03-2`) : 8 % vs ≈ 16 % ; 1 400 Md€ n’est pas un scénario.
- `[publication]` Benchmark d’intensité de bilan : note `/documents/intensite-bilan-residentiel`, En images, résumé `2026-10-03-5`, EC-01 `2026-10-03-2`. 700 Md€ ≈ 8 % ; NL ≈ 16 % ; 1 400 Md€ n’est pas un scénario.
- `[publication]` Questions ouvertes `2026-10-03-3` : premiers constats sourcés sur Eurosystème, impact sociétal (Insee), bilan néerlandais (40 % de la dette, illustration ~15 %). Verdicts ouverts.
- `[publication]` Trois extensions de recherche (`questions-ouvertes` `2026-10-03-2`) : Eurosystème sans garantie ; impact sociétal par archétypes ; bilan néerlandais (trois ratios). Premier calcul NL non publié. Résumé `2026-10-03-4` les pointe.
- `[publication]` Pacte V2 `2026-10-03-2` : même correction constitutionnelle que le brouillon (plafond de la part, origination, qualités, fenêtre). Pas les 125 / 65 Md€.
- `[publication]` Résumé exécutif `2026-10-03-3` : compression (223/700 d’abord, origination, cellules vides, phrase adverse). Proposition de valeur et France Relance retirées.
- `[publication]` Résumé exécutif `2026-10-03-2` : la Phase 2 au centre (chaîne conditionnelle, transmission faible, qualités d’usage). « Impacts encore préliminaires » retiré.
- `[publication]` Brouillon du Pacte `2026-10-03` : plafond de la part à intérêts seuls (pas le LTV consolidé) ; 700 Md€ = origination ; usages par qualités. Pas les 125 / 65 Md€ du modèle.
- `[website]` Accroche d’accueil : « ouvrir une fenêtre » plutôt que « restaurer les finances publiques ».
- `[website]` En images schéma `/en-images/part-io-n-est-pas-le-ltv-consolide` (`2026-10-03`): part à intérêts seuls ≠ ratio dette consolidée / valeur; failure mode 100/40/50 after −20 %; cites frozen EC-08; does not predict default or loss.
- `[publication]` Public French vocabulary pass (`2026-10-03`): replace IO / LTV / equity on current papers and related En images with *part à intérêts seuls*, *ratio dette / valeur*, *capital immobilier net*; EC-08 re-frozen.
- `[publication]` EC-09 combined failure (`/documents/red-team-09`), frozen as `2026-10-03-2`; six adverse strands (incl. chômage / revenu); combination ≠ isolated ECs; envelope question; announced list empty.
- `[publication]` EC-02 `2026-10-03`: credit-use as a vector (rénovation, consommation, investissement, actifs existants, liquidités, substitution de dette, transferts); 25/50/75 % no longer a case; UK MEW as counter-test; parts still empty.
- `[publication]` EC-03 `2026-10-03`: French volume by EC-02 category (content / elasticity / labour); 78/38/96 % remain 2019 averages; no single multiplier.
- `[publication]` EC-06 `2026-10-03`: marginal receipts by EC-02 basket (VAT, labour taxes, DMTO); 43.6 % is not a yield; cells empty.
- `[publication]` EC-07 `2026-10-03`: 2027–2040 joint path (solde, stock, ratio, interest, Pacte Spread); constant-debt v0.1 and 1.5–3.2 pt gap are not the path; year cells empty.
- `[publication]` EC-09 `2026-10-03-3`: return after the stack — three joint scenario families (V2 adverse × fuites / travaux / consommation) and stop rules mapped to observables; thresholds empty; no EC-10.
- `[pacte]` Model next, not EC-10: every number tagged (observed / sourced / scenario / calculated); four trajectories (reference, central, weak-transmission, combined adverse); v0.1 unpatched. Spec `Docs/19_Model_Interrogates_Red_Teams.md`.
- `[pacte]` Model Phase 2 first run (`Docs/20_Model_Phase2.xlsx`, `scripts/modelPhase2.py`): tagged O/S/Σ/ƒ; four trajectories + A ablations; not a public snapshot; v0.1 unchanged.
- `[pacte]` Phase 2 recast: A₀ (adverse without Pacte); three acts C vs R → W vs C → A vs A₀; canvas title “What does the Pacte change?”.
- `[website]` En images Phase 2 (`2026-10-03`) : `/en-images/cas-central-phase-2`, `/en-images/meme-credit-transmission-faible`, `/en-images/choc-adverse-et-arret`. Simulation ; citent le modèle 2026-10-03 et le résultat 2026-10-03-2 ; ne clôtent aucun EC.
- `[publication]` Premier résultat de simulation Phase 2 (`/documents/modele/phase-2`) : Que change le Pacte ? `2026-10-03-2` cite le modèle Phase 2 comme producteur.
- `[publication]` Modèle France 2040 Phase 2 (`/documents/modele` `2026-10-03`) : successeur du tableur v0.1 (octets inchangés) ; producteur du résultat de simulation. Pas le brouillon V2 du Pacte.
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
