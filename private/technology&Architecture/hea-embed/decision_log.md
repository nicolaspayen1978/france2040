# Decision log

## 2026-10-02 — Site-wide HEA side panel

Owner direction: add the HEA World chat engine to all pages using the official embed
snippet, with `data-mode="side-panel"` and `data-panel-collapsed="true"`. Confirmed
install id `EZGwsGp_iRfp1wQ6`. Mount once from the root layout via `next/script`
(`afterInteractive`) so research pages, support, and not-found share the same widget
without per-route duplication.
