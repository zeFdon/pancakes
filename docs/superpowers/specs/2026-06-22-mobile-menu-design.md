# Mobile Menu Design: Mlynarnia Landing

## Goal

Improve the landing page experience on mobile devices by replacing the always-visible wrapped navigation with a clear, accessible mobile menu and tightening small-screen layout spacing.

## Current State

The existing landing page already has responsive sections, but the header switches to a vertical stack on small screens and keeps every navigation link visible. With five links, this consumes too much first-screen space and weakens the hero.

## Approved Direction

Use a mobile burger menu with a warm bakery-card panel.

Desktop behavior remains unchanged: the brand and inline navigation are visible in the sticky header.

At mobile widths, the header shows the brand and a compact `Меню` button. The navigation panel is hidden until opened.

## Mobile Menu Requirements

- Activate the mobile menu at `max-width: 760px`.
- Add a button labelled `Меню` with `aria-expanded` and `aria-controls`.
- Keep the button visually aligned with the brand in a compact sticky header.
- Open a warm cream/card-style panel containing the existing page links and a prominent CTA link to `#preorder`.
- Include a small contextual line in the panel: `Івано-Франківськ · запуск доставки`.
- Add an overlay behind the panel while open.
- Close the menu when the user clicks a nav link, clicks the overlay, presses `Esc`, or resizes back to desktop.
- Prevent body scrolling while the mobile menu is open.
- Preserve keyboard focus visibility.

## Mobile Layout Requirements

- Reduce first-screen density on phones: compact header, slightly smaller hero image, tighter section padding, and full-width CTA buttons.
- Keep product cards, mission, delivery, city, and preorder sections single-column on phones.
- Keep all content readable without horizontal scrolling.
- Preserve the existing warm editorial visual direction: bakery paper, caramel tones, cherry CTA, hand-made card feel.

## Technical Scope

Modify only `index.html`. Add the required HTML button/overlay, CSS, and minimal JavaScript. No framework, build step, or backend is needed.

## Verification

Verify that:

- `nav-toggle`, `aria-expanded`, and `aria-controls` exist.
- `@media (max-width: 760px)` exists.
- JavaScript handles click, link close, overlay close, Escape close, and resize close.
- Existing desktop navigation still works.
- Existing image slots and landing sections remain intact.
