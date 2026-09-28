# France 2040

Minimal public site for the France 2040 policy project. The interface is in French. The public draft of the pact is at `/pacte`. Working documents stay in English.

The working order is in `Docs/TODO.md`. The reference text is `Docs/Pacte_du_Bilan_Francais_V2_enrichie.docx`.

## Add a document

Edit `content/documents.ts`. Each entry needs a slug, an English title, a date (`YYYY-MM-DD`), a kind (`note`, `rapport`, or `cadre`), an English summary, and English paragraphs.

## Develop

```bash
npm install
npm run dev
```

## Deploy

Connect this repository to [Vercel](https://vercel.com). Framework preset: Next.js. No environment variables.
