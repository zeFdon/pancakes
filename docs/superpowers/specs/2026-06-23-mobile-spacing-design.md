# Mobile Spacing Design: Mlynarnia Landing

## Goal

Increase breathing room on the mobile version of the landing page, based on the provided screenshots. The first screen should feel less compressed while keeping the main CTA reachable and preserving the existing warm editorial style.

## Current Issue

On mobile, the header, eyebrow, hero title, body text, and CTA buttons are visually too dense. The page has enough structure, but the spacing rhythm is tight, especially around the hero content and button stack.

## Approved Direction

Use a moderate spacing increase, not a full redesign.

## Requirements

- Increase side gutters on phones from the current very tight layout to a more comfortable mobile margin.
- Add more vertical space after the sticky header before the hero eyebrow.
- Add clearer vertical rhythm between eyebrow, heading, hero text, and CTA buttons.
- Add more spacing between stacked CTA buttons.
- Keep CTA buttons full-width on mobile.
- Keep the mobile menu behavior unchanged.
- Keep the desktop layout unchanged.
- Avoid pushing the main CTA too far below the first viewport.
- Preserve all existing content, image slots, typography, and brand styling.

## Technical Scope

Modify only `index.html`, primarily CSS inside existing mobile media queries. No HTML structure, JavaScript behavior, images, framework, or build step changes are required.

## Verification

Verify that:

- Mobile CSS still includes `@media (max-width: 760px)` and `@media (max-width: 640px)`.
- Mobile gutters are larger than before.
- Hero vertical spacing rules exist for `.hero`, `.eyebrow`, `.hero-lead`, and `.hero-actions`.
- Existing mobile menu markers remain present: `nav-toggle`, `mobile-nav-overlay`, and `setMenuOpen`.
- Existing landing markers remain present: `Добрі млинці`, `Передзамовити запуск`, `Healthy`, and `Класика`.
