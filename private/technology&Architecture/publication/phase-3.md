# Phase 3 — Discussion

Status: not started. Blocked on phase 1. Phase 2 may proceed without it.

## Entry

The Red Team 05 page has been accepted. The data model in `design.md` is still the model. Email storage has an explicit go-ahead, because a verification address is personal data and the site currently has no secrets.

## Slice

1. Records as specified in `design.md`. `response` and `issue` are separate writes.
2. A form on the version page. The reader can aim it at an anchor or at the document. Kind is Question, Objection, Evidence, or Suggestion.
3. Pending storage outside the snapshot and outside `content/`. Verification link before the item reaches the queue.
4. Moderation for relevance, abuse, spam, and legality. No refusal because the comment opposes the Pacte.
5. Accepted comments rendered beside that anchor on that version. The author’s email is not in the HTML.
6. A reply can be published without moving the issue. Addressed and contested are explicit, and addressed names the version.

## Exit

On Red Team 05, a reader can open a passage, submit an objection, and see it publicly only after verification and moderation. The snapshot hash is unchanged. A published reply still shows the issue as open, until someone sets it.

## Not in this phase

Accounts. Threads. Votes. Moving a comment onto a later version. Treating the reply as the disposition of the point.
