# AGENTS.md

Lean operational guardrails. Execution is Vercel-build-centric.

## Owner preferences

- Align before act. Class B needs owner approval before code.
- Vercel-centric: `scripts/vercelbuild.js` is the quality gate. Prefer it over ad-hoc `next build` claims.
- Lean operational docs in `private/technology&Architecture/`. Update them in the same change.
- Do not claim production validated from a green build. Owner confirms live.

## Change classes

| Class | When | Flow |
|---|---|---|
| **A** | Trivial, zero blast radius | Note → implement → targeted checks |
| **B** | Default | Design note → plan → owner OK → one slice |
| **C** | Build red / incident | 5-bullet diagnosis → owner OK → smallest diff |

When unsure → **B**.

**Phase N** = delivery slice. **Risk P0 / P1 / P2** = safety class.

## Artifacts

`private/technology&Architecture/<domain>/` — `status`, `last_updated`, `decision_log`.

Resume: status → decision log → active plan → last BUILD SUMMARY → then propose work.

## Critical domains

`publication honesty` · `build/deploy`

A published snapshot is not edited in place. An open verdict stays open.

## Pre-completion gate (do not skip)

1. Done / deploy-ready: `npm run build` (this is `scripts/vercelbuild.js`, not bare `next build`).
2. Paste the **BUILD SUMMARY** in the reply. Fix failures before presenting.

## Vercel-centric delivery

- `"build"` → `node scripts/vercelbuild.js`. §1 contract and paper snapshot. §2 `next-build`.
- Every run prints a **BUILD SUMMARY** on success and on failure.
- Do not set `outputDirectory`. `private/` stays in `.vercelignore`.
