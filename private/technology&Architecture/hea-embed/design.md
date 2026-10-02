# HEA embed

2 October 2026. Phase 0 built.

The public site loads one HEA World chat widget on every page. The embed script is
hosted at `hea-world.com` and configured as a collapsed side panel. The widget is not
part of the research evidence or publication snapshots; it is a site-wide assistance
surface.

Implementation is a single `HeaEmbed` component mounted from `app/layout.tsx`, using
Next.js `Script` with strategy `afterInteractive` and the owner-supplied install id.
