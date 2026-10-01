# France 2040

Minimal public site for the France 2040 research project. The interface is in French. The short public reading is at `/pacte`. The reference paper, the exploratory model, the open questions, and the working papers are linked from `/documents`.

The publication architecture is `Docs/14_Architecture_Publication_Consultation.md`. Red Team 05 is the first versioned HTML document, at `/documents/red-team-05`.

The working order is in `Docs/TODO.md`. The reference text is `Docs/Pacte_du_Bilan_Francais_V2_enrichie.docx`.

## Add a document

Copy the working text to `content/papers/<slug>/v<date>.md`. Record the sha256, the verdict, the sources, and the version note on the paper module, and register it in `content/papers/registry.ts`. Do not edit a published snapshot. A revision is a new file.

## Develop

```bash
npm install
npm run dev
```

## Deploy

Connect this repository to [Vercel](https://vercel.com). Framework preset: Next.js. No environment variables. `npm run build` is `scripts/vercelbuild.js`: it checks the summary contract and the paper snapshots, then runs `next build`, and prints a BUILD SUMMARY. Do not set `outputDirectory`. `private/` is not uploaded.
