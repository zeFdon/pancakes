# Mobile Spacing Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Increase mobile spacing on the Mlynarnia landing page so the first screen feels less compressed while preserving the mobile menu and desktop layout.

**Architecture:** Keep the single-file static landing page. Modify only CSS inside `index.html`, mainly the existing mobile media queries, using CSS custom properties and targeted spacing overrides for phone gutters, hero rhythm, and stacked CTA buttons.

**Tech Stack:** HTML5, CSS3, no framework, no build step, no backend.

---

## File Structure

- Modify: `index.html` — update mobile CSS spacing only.
- Reference: `docs/superpowers/specs/2026-06-23-mobile-spacing-design.md` — approved spacing requirements.

Do not modify JavaScript, HTML structure, image assets, `1.md`, or unrelated files.

## Task 1: Baseline Mobile Spacing Checks

**Files:**
- Verify: `index.html`

- [ ] **Step 1: Verify current tight phone gutter exists**

Run: `Select-String -Path 'index.html' -SimpleMatch -Pattern 'width: min(100% - 1rem, 1180px);','padding: 3rem 0;','gap: .8rem;'`

Expected: matches show the current tight phone width, section padding, and hero action gap before implementation.

- [ ] **Step 2: Verify mobile menu markers exist before editing**

Run: `Select-String -Path 'index.html' -SimpleMatch -Pattern 'nav-toggle','mobile-nav-overlay','setMenuOpen','@media (max-width: 760px)'`

Expected: matches for all mobile menu markers.

- [ ] **Step 3: Commit nothing**

No files have changed in this task. Do not commit.

## Task 2: Implement Moderate Mobile Spacing CSS

**Files:**
- Modify: `index.html`

- [ ] **Step 1: Add mobile spacing custom properties inside `@media (max-width: 760px)`**

At the top of the `@media (max-width: 760px)` block, add:

```css
      :root {
        --mobile-gutter: clamp(1.35rem, 5vw, 2rem);
        --mobile-section-space: clamp(4rem, 12vw, 5.5rem);
      }
```

- [ ] **Step 2: Increase header breathing room inside `@media (max-width: 760px)`**

Change `.site-header` in the `760px` block to use:

```css
        padding: 1rem var(--mobile-gutter);
```

Keep the existing sticky positioning, row direction, and center alignment.

- [ ] **Step 3: Add hero rhythm rules inside `@media (max-width: 760px)`**

Replace the existing mobile `.hero { padding-top: 2.5rem; }` rule with:

```css
      .hero {
        padding-top: clamp(4rem, 13vw, 5.5rem);
        padding-bottom: var(--mobile-section-space);
      }

      .hero .eyebrow {
        margin-bottom: clamp(1.25rem, 4vw, 1.8rem);
      }

      .hero h1 {
        margin-bottom: clamp(1.35rem, 4.8vw, 2rem);
      }

      .hero-lead {
        margin-bottom: clamp(2rem, 7vw, 2.8rem);
      }

      .hero-actions {
        gap: clamp(1.15rem, 4vw, 1.6rem);
        margin: 0 0 clamp(2.8rem, 9vw, 3.8rem);
      }
```

- [ ] **Step 4: Increase phone gutters and section rhythm inside `@media (max-width: 640px)`**

Change the `.section, .hero` rule in the `640px` block from the tight values to:

```css
      .section, .hero {
        width: min(100% - (var(--mobile-gutter) * 2), 1180px);
        padding: var(--mobile-section-space) 0;
      }
```

Keep `.hero-actions { flex-direction: column; }` and `.button, button { width: 100%; }`.

- [ ] **Step 5: Add phone-specific first-screen refinements inside `@media (max-width: 640px)`**

Add these rules after the `.section, .hero` rule in the `640px` block:

```css
      .hero {
        padding-top: clamp(4.25rem, 15vw, 6rem);
      }

      .hero-copy {
        padding-top: .35rem;
      }

      .eyebrow {
        line-height: 1.5;
      }

      .button, button {
        min-height: 3.45rem;
      }
```

- [ ] **Step 6: Commit implementation**

Run: `git add -- index.html`

Run: `git commit -m "Increase mobile landing spacing"`

Expected: commit succeeds and only `index.html` is staged.

## Task 3: Verify Mobile Spacing And Existing Behavior

**Files:**
- Verify: `index.html`

- [ ] **Step 1: Verify new mobile spacing markers exist**

Run: `Select-String -Path 'index.html' -SimpleMatch -Pattern '--mobile-gutter','--mobile-section-space','width: min(100% - (var(--mobile-gutter) * 2), 1180px);','padding-top: clamp(4rem, 13vw, 5.5rem);','gap: clamp(1.15rem, 4vw, 1.6rem);'`

Expected: matches for all new spacing markers.

- [ ] **Step 2: Verify mobile menu remains intact**

Run: `Select-String -Path 'index.html' -SimpleMatch -Pattern 'nav-toggle','mobile-nav-overlay','setMenuOpen','event.key === ''Tab''','@media (max-width: 760px)'`

Expected: matches for all mobile menu markers.

- [ ] **Step 3: Verify landing content remains intact**

Run: `Select-String -Path 'index.html' -SimpleMatch -Pattern 'Добрі млинці','Передзамовити запуск','Healthy','Класика','assets/images/hero-mlyntsi-delivery.jpg'`

Expected: matches for all landing markers.

- [ ] **Step 4: Check whitespace**

Run: `git diff --check HEAD~1..HEAD`

Expected: no output.

## Self-Review Notes

Spec coverage:

- The plan increases phone side gutters, adds vertical space after the header, improves rhythm between hero eyebrow/title/text/buttons, increases stacked CTA spacing, keeps buttons full-width, leaves menu behavior and desktop layout unchanged, and preserves existing content.

Placeholder scan:

- The plan contains no unresolved implementation placeholders.

Type and naming consistency:

- CSS variables are consistently named `--mobile-gutter` and `--mobile-section-space`.
