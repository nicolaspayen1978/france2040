# How the publication architecture is built

1 October 2026. Read `Docs/14_Architecture_Publication_Consultation.md` first. That note is the decision. This file is the build.

The site is a static Next.js app. French is the interface. A document page is generated at build time from an immutable snapshot. Nothing in the discussion design, present or future, writes back into that snapshot.

## Invariants

1. The cited text is the HTML of one version. A Word or Excel file is an attachment.
2. A published snapshot is not edited. The working file in `Docs/` may continue. The next public text is a new snapshot, a new id, and a new sha256.
3. A link cites `/documents/<slug>/v/<version>#<anchor>`. The unversioned URL shows the current version only. Its permalinks still point at the versioned address.
4. Anchors are assigned when the version is frozen. They are not renumbered afterwards. A later version does not inherit them.
5. Document status and the verdict are different fields. Status is the life of the text. The verdict is copied from what that version says, including « Non tranché ».
6. A comment, once phase 3 exists, stores `version` + `anchor`. A response does not set the issue to addressed.
7. This directory is not deployed. `.vercelignore` excludes `private/`.
8. Deploy runs `scripts/vercelbuild.js`, not a bare `next build`. §1 is the summary contract and the snapshot hash. §2 is `next-build`. The run prints a BUILD SUMMARY on success and on failure. `outputDirectory` stays unset.
9. A working file in `Docs/` may stay in English. Every page on the site is French: title, summary, verdict, progress, and the snapshot. `lang` is `fr`.

## What is already built

Red Team 05 only.

| Piece | Where |
| --- | --- |
| Public decision | `Docs/14_Architecture_Publication_Consultation.md` |
| Working note, still editable | `Docs/13_RedTeam_05_Bank_Funding.md` |
| Frozen snapshot | `content/papers/red-team-05/v2026-10-01.md` |
| Metadata, verdict, progress, sources, version note | `content/papers/red-team-05.ts` |
| Parser | `lib/parsePaper.ts` |
| Hash check and version path | `lib/papers.ts` |
| Page | `components/WorkingPaperView.tsx` |
| Current URL | `app/documents/red-team-05/page.tsx` |
| Version URL | `app/documents/red-team-05/v/[version]/page.tsx` |
| Index card | `lib/publications.ts` |

`loadPaperBlocks` reads the snapshot, hashes the bytes, and throws if the hash differs from `sha256` on the version. A quiet edit of the snapshot fails the build. That is the immutability check. There is no comment table and no write path.

Hand-built pages that must keep working while this grows: `/documents`, `/documents/pacte-v2`, `/documents/modele`, `/documents/questions-ouvertes`. The empty list in `content/documents.ts` is a different, unused shape. Do not pour a working paper into it.

## Anchor rule

`parsePaper` is the assignment algorithm. It runs on the frozen markdown.

- A line `# …` is the title and is not a block. The title on the page comes from metadata.
- Text before the first `##` sits in the section `ouverture`.
- A `##` heading becomes the section id: the heading, lower case, accents stripped, punctuation collapsed to hyphens. Paragraph, table, and list counters reset.
- A `###` heading gets its own id and does not reset those counters.
- A paragraph is `{section}-p-{n}`.
- A table is `{section}-t-{n}`.
- A list is `{section}-l-{n}`. Each item is `{listId}-i-{n}`.
- A duplicate id gains `-2`, then `-3`.

Inline `**bold**` and `*italic*` are rendered in the component. They are not part of the id.

These ids are stable only because the file is immutable. Inserting a paragraph in a section renumbers the later paragraphs of that section. That is acceptable in a new version and forbidden in a published one. Do not add a stable-id map across versions until a revision needs “Addressed in vX” to name a passage. When that happens, the editor writes the pair. The parser does not guess it.

The Red Team 05 issuer table is `repere-des-emetteurs-gele-t-1`. That is the kind of address a disagreement uses.

## Display-only reading modes

`WorkingPaper.presentation` can opt into a display treatment without changing the source
snapshot, its bytes, hash, anchors, metadata, or the linear reading order. `dialogue` is used
only by **Explique-moi le Pacte**: the two opening lines and the level-two question are set as
prompts; the unchanged explanatory paragraphs form a slightly indented, continuous reply.
The layout uses typography and spacing rather than individual message cards. The normal paper
renderer remains the default. Permalinks and critique links remain attached to each original
block and work on narrow screens.

The home page uses the same treatment for its embedded **Explique-moi le Pacte** reading. Only
that first home section opts in; the executive summary and other documents keep their prose
layout. The home opening joins the age statement to the owner's request, « Expliques-moi le
Pacte s'il te plaît. », as one displayed paragraph. This wording is a home-page adaptation;
the frozen document retains its own two paragraphs. The landing treatment uses smaller serif
prose and italic prompts, with a wider opening line on desktop that wraps on narrow screens.
A narrow blue, white and red rule marks the left edge of the landing reading; the white segment
has a faint outline so it stays visible on the page background. It is decoration only. The
landing reading uses compact book typography in two columns on wide screens and one column on
narrow screens. Its opening is left-aligned. Small ENFANT and FRANCE 2040 speaker cues mark
turns without changing the document snapshot or repeating labels on every paragraph.

The landing page is a gateway, not a second document index: the full home-only dialogue
treatment is followed by the current versioned four-balance diagram, three labelled numeric
repères, a short method statement, and links into the corpus. The full executive summary
remains at `/documents/resume-executif` and has its own navigation entry; the document list
and announced tests remain on `/documents`. Numeric repères link to the current versioned
summary and distinguish the starting stock from scenario quantities. The home page does not
feature the model's zero-new-credit 2040 endpoint as a headline or imply that the Pacte itself
expires then. The published papers, scenario curve, and their open verdicts are unchanged.

## How a version is cut

Do this by hand for each paper. Do not add a generator until two papers have been cut the same way and the steps below are annoying.

1. Leave the working text in `Docs/`.
2. Choose a slug and a version id `YYYY-MM-DD`. If two versions are published the same day, the second id gains a suffix. Do not reuse an id.
3. Copy the working file byte for byte to `content/papers/<slug>/v<version>.md`.
4. `shasum -a 256` that file. Put the digest on the version record.
5. Write metadata in the paper module:
   - `status`: `working-paper`, `under-review`, `frozen`, or `superseded`
   - `verdict`: the words the snapshot uses, not a softer label
   - `progress`: only states the snapshot supports
   - `sources`: works the snapshot names, without invented links
   - `note`: what this version is, and that earlier unpublished states were not separate versions
6. Register the paper in `getWorkingPapers()`.
7. Add a card only by reading that metadata, as `lib/publications.ts` already does for Red Team 05.
8. Open the current URL and the version URL. Follow one heading, one paragraph, and one table. Confirm the hash is the versioned path. Confirm an unknown version id is a 404.

To supersede: add the new snapshot and record, set the old version’s status to `superseded`, point `currentVersionId` at the new id. Do not delete the old route. The old hash must still resolve, and its text must still match its sha256.

A frozen document status means this work will not be revised. It is not the same fact as a frozen section inside an open test. Red Team 05 is a working paper whose bank readings are frozen.

## Routes, until the second paper

Red Team 05 has its own route so the first page could be judged before a generic loader. Keep that until phase 2 publishes a second paper.

Then replace the dedicated pages with one dynamic route under `/documents`, without moving the existing URLs:

- `/documents/red-team-05`
- `/documents/red-team-05/v/2026-10-01`

Static pages (`pacte-v2`, `modele`, `questions-ouvertes`) stay static until each of them is itself cut as a versioned paper. A dynamic `[slug]` must not swallow those paths.

## Phase 3 shape, not to be built yet

Build this only after phase 1 accepts the Red Team 05 page.

Comments are records beside a version. They are not nodes in the markdown.

```text
comment
  id
  slug
  versionId
  anchorId          null means the whole document
  kind              question | objection | evidence | suggestion
  body
  authorName
  affiliation       optional
  submittedAt
  response          none | published
  responseBody      only when response is published
  responseAt
  issue             open | addressed | contested
  addressedIn       version id, only when issue is addressed
  addressedAnchor   optional anchor in that later version
```

`response` and `issue` are written by different actions. Publishing a reply leaves `issue` as it was. Setting `addressed` requires a version id and happens when a revision is published, or when the editor records that the point remains contested. The renderer must not treat a reply as a closed objection.

Public labels, when the French page exists:

| Record | Public label |
| --- | --- |
| question / objection / evidence / suggestion | Question / Objection / Élément de preuve / Suggestion |
| response none / published | Sans réponse / Réponse publiée |
| issue open / addressed / contested | Ouvert / Traité dans \<version\> / Contesté |

Submission path:

1. The form sits on the version page, aimed at the anchor the reader selected, or at the document.
2. Name is required. Affiliation is optional. Email is required and is not shown on the page.
3. The comment is stored as pending. It is not rendered.
4. A verification message is sent. The comment enters the moderation queue only after the link is opened.
5. Moderation may refuse for relevance, abuse, spam, or legality. It has no reason called disagreement. A substantive objection is accepted.
6. An accepted comment is then readable on that version, next to that anchor.

Storage, when this phase is approved:

- The pending queue is outside git and outside the snapshot. It needs a small server store and a mail secret. The site has neither today. Adding them is part of phase 3, not a silent extra.
- Email is kept for verification and for the queue. It is dropped from the public record. It is not placed in `content/` or in `public/`.
- Accepted comments are a JSON file per version, `content/papers/<slug>/discussion/<versionId>.json`, or rows in the same store if a redeploy should not be required for each acceptance. Either way they are loaded beside the snapshot, never parsed out of it.
- The moderation screen is a gated route, not an entry in the public nav. It is still a deployed route. The notes in `private/` are not.

The version page lists comments whose `versionId` is that version. The current page does the same for the current version, and links to earlier versions that have comments. It does not move those comments forward.

## Out of scope until its phase

- A second paper, a shared dynamic route, or a freeze script, before phase 2.
- Accounts, voting, or a thread under a comment.
- Editing a comment by rewriting the snapshot.
- Inferring that a reply disposed of an objection.
- Publishing the Decision Log, the DFMA note, the deployment strategy, the thesis note, or the social-contract sketch. They are not documents of the site yet.
