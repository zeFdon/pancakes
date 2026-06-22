# Mobile Menu Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add a compact, accessible mobile burger menu and improve phone layout density for the existing Mlynarnia landing page.

**Architecture:** Keep the landing page as a single static `index.html`. Add one mobile menu button, one overlay, responsive CSS at `max-width: 760px`, and minimal vanilla JavaScript to toggle menu state, close on links/overlay/Escape/desktop resize, and lock body scrolling while open.

**Tech Stack:** HTML5, CSS3, vanilla JavaScript, no framework, no build step, no backend.

---

## File Structure

- Modify: `index.html` — add mobile nav button, overlay, CSS, and menu toggle JavaScript.
- Reference: `docs/superpowers/specs/2026-06-22-mobile-menu-design.md` — approved mobile menu requirements.

Do not modify image assets, original task file `1.md`, or existing generated-photo files.

## Task 1: Write And Run Failing Marker Checks

**Files:**
- Verify: `index.html`

- [ ] **Step 1: Verify mobile menu markers are currently absent**

Run: `Select-String -Path "index.html" -Pattern "nav-toggle|mobile-nav-overlay|is-menu-open|@media \(max-width: 760px\)|setMenuOpen"`

Expected: no matches for these new implementation markers.

- [ ] **Step 2: Verify existing desktop nav still exists before editing**

Run: `Select-String -Path "index.html" -Pattern "<nav aria-label=\"Розділи сторінки\"|#menu|#mission|#delivery|#city|#preorder"`

Expected: matches for the existing nav and all five section anchors.

- [ ] **Step 3: Commit nothing**

No files have changed in this task. Do not commit.

## Task 2: Add Mobile Menu HTML, CSS, And JavaScript

**Files:**
- Modify: `index.html`

- [ ] **Step 1: Add the mobile menu button inside the header**

Change the header from brand + nav to brand + button + nav. The header block must contain this button before the `<nav>`:

```html
    <button class="nav-toggle" type="button" aria-expanded="false" aria-controls="site-nav">
      <span class="nav-toggle__text">Меню</span>
      <span class="nav-toggle__icon" aria-hidden="true"><span></span><span></span></span>
    </button>
```

Add `id="site-nav"` to the existing nav:

```html
    <nav id="site-nav" aria-label="Розділи сторінки">
```

Keep the existing five nav links unchanged.

- [ ] **Step 2: Add the mobile overlay after the header**

Insert this element immediately after `</header>` and before `<main id="main">`:

```html
  <button class="mobile-nav-overlay" type="button" aria-label="Закрити меню" hidden></button>
```

- [ ] **Step 3: Add desktop-safe CSS for the new controls**

Add this CSS near the existing header/nav styles, before the current media queries:

```css
    .nav-toggle,
    .mobile-nav-overlay {
      display: none;
    }

    body.is-menu-open {
      overflow: hidden;
    }
```

- [ ] **Step 4: Add mobile menu CSS at `max-width: 760px`**

Add this media query before the existing `@media (max-width: 640px)` block:

```css
    @media (max-width: 760px) {
      .site-header {
        position: sticky;
        top: 0;
        flex-direction: row;
        align-items: center;
        padding: .8rem 1rem;
      }

      .brand {
        font-size: 1.05rem;
      }

      .nav-toggle {
        display: inline-flex;
        align-items: center;
        gap: .55rem;
        min-height: 2.8rem;
        width: auto;
        border: 1px solid var(--line);
        border-radius: 999px;
        padding: .65rem .9rem;
        background: rgba(255, 247, 232, .92);
        color: var(--cocoa);
        box-shadow: 0 12px 28px rgba(72, 35, 18, .12);
      }

      .nav-toggle__text {
        font-weight: 900;
      }

      .nav-toggle__icon {
        display: grid;
        gap: 4px;
        width: 18px;
      }

      .nav-toggle__icon span {
        display: block;
        height: 2px;
        border-radius: 999px;
        background: currentColor;
        transition: transform .22s ease, opacity .22s ease;
      }

      body.is-menu-open .nav-toggle__icon span:first-child {
        transform: translateY(3px) rotate(38deg);
      }

      body.is-menu-open .nav-toggle__icon span:last-child {
        transform: translateY(-3px) rotate(-38deg);
      }

      .mobile-nav-overlay {
        position: fixed;
        inset: 0;
        z-index: 8;
        width: 100%;
        min-height: 100vh;
        border: 0;
        background: rgba(45, 27, 19, .34);
        backdrop-filter: blur(4px);
      }

      body.is-menu-open .mobile-nav-overlay {
        display: block;
      }

      .site-header nav {
        position: fixed;
        z-index: 9;
        top: 4.6rem;
        left: 1rem;
        right: 1rem;
        display: grid;
        gap: .45rem;
        padding: 1rem;
        border: 1px solid var(--line);
        border-radius: 28px;
        background: linear-gradient(145deg, rgba(255, 247, 232, .98), rgba(248, 236, 216, .98));
        box-shadow: 0 28px 70px rgba(45, 27, 19, .28);
        transform: translateY(-.8rem) scale(.97);
        transform-origin: top right;
        opacity: 0;
        pointer-events: none;
        transition: transform .22s ease, opacity .22s ease;
      }

      .site-header nav::before {
        content: "Івано-Франківськ · запуск доставки";
        color: var(--cherry);
        font-size: .72rem;
        font-weight: 900;
        letter-spacing: .12em;
        text-transform: uppercase;
        padding: .35rem .45rem .55rem;
      }

      body.is-menu-open .site-header nav {
        transform: translateY(0) scale(1);
        opacity: 1;
        pointer-events: auto;
      }

      .site-header nav a {
        display: flex;
        justify-content: space-between;
        align-items: center;
        min-height: 3.2rem;
        border-radius: 18px;
        padding: .8rem .95rem;
        background: rgba(255, 255, 255, .42);
        border: 1px solid transparent;
        font-size: 1.05rem;
      }

      .site-header nav a::after {
        content: "→";
        color: var(--caramel);
        font-weight: 900;
      }

      .site-header nav a:hover,
      .site-header nav a:focus-visible {
        border-color: rgba(143, 35, 51, .28);
        background: rgba(255, 255, 255, .72);
      }

      .site-header nav a[href="#preorder"] {
        background: var(--cherry);
        color: #fff;
        box-shadow: 0 14px 28px rgba(143, 35, 51, .24);
      }

      .site-header nav a[href="#preorder"]::after {
        color: #fff;
      }

      .hero {
        padding-top: 2.5rem;
      }
    }
```

- [ ] **Step 5: Replace conflicting `max-width: 640px` header rules**

In the existing `@media (max-width: 640px)` block, remove the old rule that sets `.site-header` to `position: static`, `align-items: flex-start`, and `flex-direction: column`. Keep the rest of the `640px` layout rules.

- [ ] **Step 6: Add mobile menu JavaScript after the existing image fallback code**

Extend the existing `<script>` block with this code after the image fallback loop:

```js
    const navToggle = document.querySelector('.nav-toggle');
    const siteNav = document.querySelector('#site-nav');
    const mobileNavOverlay = document.querySelector('.mobile-nav-overlay');

    const setMenuOpen = (isOpen) => {
      document.body.classList.toggle('is-menu-open', isOpen);
      navToggle?.setAttribute('aria-expanded', String(isOpen));

      if (mobileNavOverlay) {
        mobileNavOverlay.hidden = !isOpen;
      }
    };

    navToggle?.addEventListener('click', () => {
      setMenuOpen(!document.body.classList.contains('is-menu-open'));
    });

    mobileNavOverlay?.addEventListener('click', () => setMenuOpen(false));

    siteNav?.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', () => setMenuOpen(false));
    });

    window.addEventListener('keydown', (event) => {
      if (event.key === 'Escape') {
        setMenuOpen(false);
      }
    });

    window.addEventListener('resize', () => {
      if (window.matchMedia('(min-width: 761px)').matches) {
        setMenuOpen(false);
      }
    });
```

- [ ] **Step 7: Commit implementation**

Run: `git add -- index.html`

Run: `git commit -m "Add mobile navigation menu"`

Expected: commit succeeds and only `index.html` is staged.

## Task 3: Verify Mobile Menu And Existing Landing Content

**Files:**
- Verify: `index.html`

- [ ] **Step 1: Verify mobile menu markup exists**

Run: `Select-String -Path "index.html" -Pattern "nav-toggle|mobile-nav-overlay|aria-expanded=\"false\"|aria-controls=\"site-nav\"|id=\"site-nav\""`

Expected: matches for all listed markers.

- [ ] **Step 2: Verify mobile CSS exists**

Run: `Select-String -Path "index.html" -Pattern "@media \(max-width: 760px\)|body\.is-menu-open|Івано-Франківськ · запуск доставки|href=\"#preorder\"\]"`

Expected: matches for all listed markers.

- [ ] **Step 3: Verify JavaScript close behaviors exist**

Run: `Select-String -Path "index.html" -Pattern "setMenuOpen|addEventListener\('click'|addEventListener\('keydown'|Escape|matchMedia\('\(min-width: 761px\)'"`

Expected: matches for toggle, overlay/link click, Escape, and resize handling.

- [ ] **Step 4: Verify existing landing requirements remain present**

Run: `Select-String -Path "index.html" -Pattern "Добрі млинці|Передзамовити запуск|Healthy|Класика|assets/images/hero-mlyntsi-delivery.jpg|assets/images/delivery-packaging.jpg"`

Expected: matches for all listed landing markers.

- [ ] **Step 5: Open the page for manual smoke check**

Run: `Start-Process -FilePath "index.html"`

Expected: browser opens the static page. At phone width, header shows brand + `Меню`; tapping `Меню` opens the panel and overlay; nav links and overlay close it.

- [ ] **Step 6: Commit verification fix only if needed**

If verification requires changes, stage only `index.html` and run: `git commit -m "Polish mobile navigation behavior"`.

## Self-Review Notes

Spec coverage:

- The plan covers the `760px` breakpoint, `Меню` button, `aria-expanded`, `aria-controls`, warm card panel, contextual line, overlay, close on link/overlay/Escape/desktop resize, body scroll lock, keyboard focus preservation, phone density improvements, and single-file scope.

Placeholder scan:

- No `TODO`, `TBD`, or unspecified implementation steps remain.

Type and naming consistency:

- The JavaScript and CSS consistently use `.nav-toggle`, `#site-nav`, `.mobile-nav-overlay`, `.is-menu-open`, and `setMenuOpen`.
