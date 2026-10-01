# Phase 0 — Shape

Status: built 2026-10-01. Owner approved phase 0.

## Entry

Owner has approved the design note and the Docs/14 one-sentence cycle amendment (or deferred that amendment explicitly while still allowing the routes).

## Slice

1. Content module for visuals (metadata + version + sha256 of figure bytes), parallel in spirit to working papers, not a fork of the paper parser.
2. Routes: `/en-images` (index) and `/en-images/<slug>` (current). Version URL either in this phase or as a stub that 404s until a second version exists — decide in the implementation plan for this phase, keep both URLs stable once chosen.
3. One published visual that proves the shape: all required fields filled, including a real “n’établit pas”, a nature label, and at least one citation to an existing `/documents/…` page.
4. Nav entry **En images**.
5. Build gate: figure hash checked in `scripts/vercelbuild.js` §1 for every registered visual version.
6. French only on the pages. No author byline.
7. Colour from `app/tokens.css` only (see `design.md` § Colour). If tokens are not already wired, land them in this phase or as an agreed prior slice: define tokens, import from `globals.css`, replace existing site hex with `var(--…)`, no new hues.

Preferred first object for the shape proof: **`le-ratio-n-est-pas-le-service`** (owner-nominated 2026-10-01). Schéma of four boxes (solde → stock → charge d’intérêts ; stock ÷ PIB → ratio) plus the observed 2025 strip from Insee as cited in EC-07. Nature: schéma + donnée. Cite `/documents/red-team-07`. Do not invent a forward path. Do not close the open verdict. If phase 0 must ship before that figure is drawn, a thinner schéma with the same slug fields and a placeholder “figure à venir” is not preferred — better wait one day for the real SVG.

## Exit

A reader can open `/en-images`, open one visual page, read what it shows and what it does not establish, follow a citation into a document, and the build fails if the figure bytes are quietly edited. The figure uses only greyscale or muted blue/red per `design.md` § Colour.

## Not in this phase

Five finished graphics. Interactive charts. Comments. HEA. JSON-LD. Replacing document pages.
