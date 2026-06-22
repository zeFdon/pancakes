# Mlynarnia Landing Page Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a distinctive Ukrainian-language static landing page for a pancake delivery social enterprise in Ivano-Frankivsk.

**Architecture:** A single static `index.html` contains semantic HTML, embedded CSS, and minimal JavaScript for graceful image fallback behavior and small interactions. Optional generated images live in `assets/images/`; if they are absent, the same slots render polished CSS-based pancake-style placeholders.

**Tech Stack:** HTML5, CSS3, minimal vanilla JavaScript, Google Fonts, no framework, no build step, no backend.

---

## File Structure

- Create: `index.html` — complete static landing page with all content, styles, image slots, form-style pre-order CTA, responsive layout, and optional image fallback logic.
- Optional external assets directory: `assets/images/` — user may later add generated images using the filenames in the spec. Do not require these files for the page to look complete.
- Reference only: `docs/superpowers/specs/2026-06-22-mlynarnia-landing-design.md` — approved design, image prompts, alt text, and success criteria.

No package files, build scripts, framework scaffolding, or backend files are needed.

## Required Design Direction

Before editing `index.html`, invoke `frontend-design` and follow it while implementing. The aesthetic must be warm, local, and memorable: cream bakery paper, caramel pancake tones, deep cherry CTA accents, soft green healthy accents, asymmetric editorial composition, hand-drawn menu details, and CSS decorative pancake shapes. Avoid generic SaaS cards, purple gradients, and default system-font styling.

## Task 1: Create Failing Baseline Checks

**Files:**
- Verify absent/new: `index.html`

- [ ] **Step 1: Confirm the landing page does not exist yet**

Run: `Test-Path -LiteralPath "index.html"`

Expected: `False`

- [ ] **Step 2: Confirm required generated-image filenames are not yet represented**

Run: `Select-String -Path "index.html" -Pattern "hero-mlyntsi-delivery|healthy-line|classic-line|social-mission-kitchen|delivery-packaging"`

Expected: command fails because `index.html` does not exist yet.

- [ ] **Step 3: Commit nothing**

No files have changed in this task. Do not commit.

## Task 2: Implement Static Landing Page

**Files:**
- Create: `index.html`

- [ ] **Step 1: Invoke frontend design guidance**

Run the `frontend-design` skill before writing the file. Apply its guidance to typography, color, spacing, image treatment, motion, and responsive behavior.

- [ ] **Step 2: Create `index.html` with this structure**

The page must include these exact implementation units:

```html
<!doctype html>
<html lang="uk">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Добрі млинці | Млинарня Івано-Франківськ</title>
  <meta name="description" content="Передзамовлення запуску теплої млинарні з доставкою млинців в Івано-Франківську: healthy-лінійка, класика та соціальна місія.">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Literata:opsz,wght@7..72,500;7..72,700;7..72,800&family=Nunito+Sans:opsz,wght@6..12,400;6..12,600;6..12,800;6..12,900&display=swap" rel="stylesheet">
  <style>
    :root {
      --cream: #f8ecd8;
      --paper: #fff7e8;
      --caramel: #c27a31;
      --toast: #e5b66f;
      --cherry: #8f2333;
      --green: #6f8b55;
      --cocoa: #2d1b13;
      --muted: #765f50;
      --line: rgba(45, 27, 19, .18);
      --shadow: 0 24px 70px rgba(72, 35, 18, .18);
    }
  </style>
</head>
<body>
  <a class="skip-link" href="#main">Перейти до змісту</a>
  <header class="site-header" aria-label="Головна навігація">
    <a class="brand" href="#top" aria-label="Добрі млинці, головна">Добрі млинці</a>
    <nav>
      <a href="#menu">Меню</a>
      <a href="#mission">Місія</a>
      <a href="#delivery">Доставка</a>
      <a href="#preorder">Передзамовлення</a>
    </nav>
  </header>

  <main id="main">
    <section id="top" class="hero" aria-labelledby="hero-title">
      <div class="hero-copy">
        <p class="eyebrow">Івано-Франківськ · запуск доставки</p>
        <h1 id="hero-title">Добрі млинці, які роблять добре.</h1>
        <p class="hero-lead">Готуємо млинці для доставки містом: healthy-лінійка без лактози й без цукру, домашня класика та додатки до кожного настрою.</p>
        <div class="hero-actions">
          <a class="button primary" href="#preorder">Передзамовити запуск</a>
          <a class="button secondary" href="#mission">Дізнатись про місію</a>
        </div>
        <dl class="hero-facts" aria-label="Ключові переваги">
          <div><dt>2</dt><dd>лінійки: Healthy і Класика</dd></div>
          <div><dt>55+</dt><dd>адаптовані робочі місця</dd></div>
          <div><dt>IF</dt><dd>доставка по Франківську</dd></div>
        </dl>
      </div>
      <figure class="image-slot hero-image" data-src="assets/images/hero-mlyntsi-delivery.jpg">
        <img src="assets/images/hero-mlyntsi-delivery.jpg" alt="Теплі млинці з ягодами, соусами та пакуванням для доставки">
        <figcaption>Млинці, соуси й додатки у форматі передзамовлення.</figcaption>
      </figure>
    </section>

    <section id="menu" class="section menu-section" aria-labelledby="menu-title">
      <p class="eyebrow">Меню на старті</p>
      <h2 id="menu-title">Дві лінійки, щоб було і легко, і як вдома.</h2>
      <div class="product-grid">
        <article class="product-card healthy">
          <figure class="image-slot product-image" data-src="assets/images/healthy-line.jpg">
            <img src="assets/images/healthy-line.jpg" alt="Млинці без лактози та без цукру з ягодами і фруктовим соусом">
          </figure>
          <h3>Healthy</h3>
          <p>Безлактозне молоко, без доданого цукру, ягоди, фрукти, безлактозна сирна маса, веган-сир, хумус і легкі соуси.</p>
        </article>
        <article class="product-card classic">
          <figure class="image-slot product-image" data-src="assets/images/classic-line.jpg">
            <img src="assets/images/classic-line.jpg" alt="Класичні солодкі та солоні млинці з шоколадом і сирною начинкою">
          </figure>
          <h3>Класика</h3>
          <p>Сир солодкий, банан і шоколад, курка з грибами, шинка й сир, вершкові та ягідні соуси для знайомого домашнього смаку.</p>
        </article>
      </div>
      <aside class="addons" aria-label="Додатки до млинців">
        <span>ягоди</span><span>соуси без цукру</span><span>хрусткі топінги</span><span>смузі</span><span>кава</span><span>комбо-набори</span>
      </aside>
    </section>

    <section id="mission" class="section mission-section" aria-labelledby="mission-title">
      <figure class="image-slot mission-image" data-src="assets/images/social-mission-kitchen.jpg">
        <img src="assets/images/social-mission-kitchen.jpg" alt="Команда млинарні готує та пакує замовлення на кухні">
      </figure>
      <div>
        <p class="eyebrow">Соціальна млинарня</p>
        <h2 id="mission-title">Купуєш млинці — підтримуєш людей у своїй громаді.</h2>
        <p>Ми плануємо створювати адаптовані робочі місця для людей 55+ та людей з інвалідністю: приготування, фасування, пакування, гнучкі зміни й уважне навчання.</p>
        <ul class="mission-list">
          <li>Місцевий продукт із людською історією.</li>
          <li>Прозора комунікація про склад і алергени.</li>
          <li>Підстава для партнерств, грантів і довіри спільноти.</li>
        </ul>
      </div>
    </section>

    <section id="delivery" class="section delivery-section" aria-labelledby="delivery-title">
      <div>
        <p class="eyebrow">Як це працює</p>
        <h2 id="delivery-title">Dark kitchen без залу, щоб стартувати швидше й чесніше.</h2>
        <ol class="steps">
          <li><strong>Передзамовлення.</strong> Збираємо попит і зручні часові вікна.</li>
          <li><strong>Готуємо.</strong> Млинці смажаться партіями під доставку.</li>
          <li><strong>Пакуємо.</strong> Соуси й додатки їдуть окремо, щоб усе доїхало акуратно.</li>
          <li><strong>Доставляємо.</strong> Фокус на Івано-Франківськ і короткий шлях до клієнта.</li>
        </ol>
      </div>
      <figure class="image-slot delivery-image" data-src="assets/images/delivery-packaging.jpg">
        <img src="assets/images/delivery-packaging.jpg" alt="Пакування млинців для доставки містом">
      </figure>
    </section>

    <section class="section city-section" aria-labelledby="city-title">
      <p class="eyebrow">Чому Франківськ</p>
      <h2 id="city-title">Місту потрібна тепла доставка, яка не схожа на ще один фастфуд.</h2>
      <div class="city-grid">
        <article><h3>Для ранку</h3><p>Сніданок або офісний перекус без довгої черги.</p></article>
        <article><h3>Для родини</h3><p>Класичні смаки для дітей і дорослих.</p></article>
        <article><h3>Для легшого раціону</h3><p>Безлактозні та безцукрові варіанти без відчуття компромісу.</p></article>
      </div>
    </section>

    <section id="preorder" class="section preorder-section" aria-labelledby="preorder-title">
      <div>
        <p class="eyebrow">Стартуємо з передзамовлень</p>
        <h2 id="preorder-title">Хочеш бути серед перших?</h2>
        <p>Залиш інтерес до запуску, обери лінійку й ми зв'яжемось, коли відкриємо перші вікна доставки.</p>
      </div>
      <form class="preorder-card" action="mailto:hello@example.com" method="post" enctype="text/plain">
        <label>Ім'я<input name="name" type="text" autocomplete="name" placeholder="Марія"></label>
        <label>Телефон<input name="phone" type="tel" autocomplete="tel" placeholder="+380"></label>
        <label>Що цікаво<select name="interest"><option>Healthy без лактози / без цукру</option><option>Класичні млинці</option><option>Комбо для офісу або родини</option><option>Партнерство / грант / підтримка</option></select></label>
        <button type="submit">Передзамовити запуск</button>
      </form>
    </section>
  </main>

  <footer class="site-footer">
    <p>Добрі млинці · соціальна млинарня доставки в Івано-Франківську</p>
    <a href="mailto:hello@example.com">hello@example.com</a>
  </footer>

  <script>
    document.querySelectorAll('.image-slot img').forEach((img) => {
      img.addEventListener('error', () => img.closest('.image-slot')?.classList.add('is-missing'));
    });
  </script>
</body>
</html>
```

- [ ] **Step 3: Expand the `<style>` block into full production CSS**

Use this CSS as the implementation baseline. It can be refined during execution, but it must preserve the same selectors, responsive breakpoints, image fallback behavior, and accessible contrast.

```css
:root {
  --cream: #f8ecd8;
  --paper: #fff7e8;
  --caramel: #c27a31;
  --toast: #e5b66f;
  --cherry: #8f2333;
  --green: #6f8b55;
  --cocoa: #2d1b13;
  --muted: #765f50;
  --line: rgba(45, 27, 19, .18);
  --shadow: 0 24px 70px rgba(72, 35, 18, .18);
  --radius-xl: 34px;
  --radius-md: 22px;
}

*, *::before, *::after { box-sizing: border-box; }
html { scroll-behavior: smooth; }
body {
  margin: 0;
  color: var(--cocoa);
  background: radial-gradient(circle at 12% 8%, rgba(229, 182, 111, .42), transparent 26rem), linear-gradient(135deg, var(--cream), #f4dfbd 55%, #f9efd9);
  font-family: "Nunito Sans", sans-serif;
  line-height: 1.6;
}
body::before {
  content: "";
  position: fixed;
  inset: 0;
  pointer-events: none;
  opacity: .16;
  background-image: radial-gradient(rgba(45, 27, 19, .5) 1px, transparent 1px);
  background-size: 18px 18px;
  mix-blend-mode: multiply;
}
a { color: inherit; }
.skip-link {
  position: absolute;
  left: 1rem;
  top: -4rem;
  background: var(--cherry);
  color: white;
  padding: .7rem 1rem;
  border-radius: 999px;
  z-index: 20;
}
.skip-link:focus { top: 1rem; }
.site-header {
  position: sticky;
  top: 0;
  z-index: 10;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
  padding: 1rem clamp(1rem, 4vw, 4rem);
  backdrop-filter: blur(18px);
  background: rgba(248, 236, 216, .82);
  border-bottom: 1px solid var(--line);
}
.brand {
  font-family: "Literata", serif;
  font-weight: 800;
  text-decoration: none;
  letter-spacing: -.03em;
}
nav { display: flex; gap: clamp(.6rem, 2vw, 1.4rem); flex-wrap: wrap; }
nav a { text-decoration: none; font-size: .95rem; font-weight: 800; }
main { overflow: hidden; }
.section, .hero {
  width: min(1180px, calc(100% - 2rem));
  margin: 0 auto;
  padding: clamp(4rem, 8vw, 7rem) 0;
}
.eyebrow {
  margin: 0 0 .8rem;
  color: var(--cherry);
  font-weight: 900;
  text-transform: uppercase;
  letter-spacing: .12em;
  font-size: .78rem;
}
h1, h2, h3 {
  font-family: "Literata", serif;
  line-height: .98;
  letter-spacing: -.055em;
  margin: 0;
}
h1 { font-size: clamp(3.4rem, 9vw, 7.6rem); max-width: 8ch; }
h2 { font-size: clamp(2.2rem, 5vw, 4.7rem); max-width: 11ch; }
h3 { font-size: clamp(1.7rem, 3vw, 2.4rem); }
p { color: var(--muted); font-size: 1.05rem; }
.hero {
  display: grid;
  grid-template-columns: minmax(0, 1.05fr) minmax(320px, .8fr);
  gap: clamp(2rem, 5vw, 5rem);
  align-items: center;
  min-height: calc(100vh - 76px);
}
.hero-lead { max-width: 40rem; font-size: clamp(1.15rem, 2vw, 1.45rem); }
.hero-actions { display: flex; gap: .8rem; flex-wrap: wrap; margin: 2rem 0; }
.button, button {
  display: inline-flex;
  justify-content: center;
  align-items: center;
  min-height: 3.2rem;
  border: 0;
  border-radius: 999px;
  padding: .9rem 1.35rem;
  font: 900 1rem "Nunito Sans", sans-serif;
  text-decoration: none;
  cursor: pointer;
  transition: transform .22s ease, box-shadow .22s ease, background .22s ease;
}
.button:hover, button:hover { transform: translateY(-2px); }
.primary, button { background: var(--cherry); color: white; box-shadow: 0 16px 38px rgba(143, 35, 51, .28); }
.secondary { background: rgba(255, 247, 232, .7); border: 1px solid var(--line); }
.hero-facts { display: grid; grid-template-columns: repeat(3, 1fr); gap: .75rem; margin: 0; }
.hero-facts div, .product-card, .city-grid article, .preorder-card {
  background: rgba(255, 247, 232, .78);
  border: 1px solid var(--line);
  border-radius: var(--radius-md);
  box-shadow: var(--shadow);
}
.hero-facts div { padding: 1rem; }
.hero-facts dt { font-family: "Literata", serif; font-size: 2rem; font-weight: 800; color: var(--cherry); }
.hero-facts dd { margin: 0; color: var(--muted); }
.image-slot {
  position: relative;
  min-height: 280px;
  overflow: hidden;
  border: 1px solid var(--line);
  border-radius: var(--radius-xl);
  background: radial-gradient(circle at 35% 30%, #f5c879 0 18%, transparent 19%), radial-gradient(circle at 62% 55%, #d99742 0 24%, transparent 25%), linear-gradient(135deg, #fff3d8, #dca658);
  box-shadow: var(--shadow);
}
.image-slot img { width: 100%; height: 100%; min-height: inherit; display: block; object-fit: cover; }
.image-slot.is-missing img { display: none; }
.image-slot::before, .image-slot::after {
  content: "";
  position: absolute;
  border-radius: 999px;
  pointer-events: none;
}
.image-slot::before { inset: 10% 14% auto auto; width: 42%; aspect-ratio: 1; background: rgba(143, 35, 51, .18); }
.image-slot::after { left: -12%; bottom: -10%; width: 52%; aspect-ratio: 1; background: rgba(255, 247, 232, .35); }
.hero-image { min-height: clamp(420px, 60vw, 650px); transform: rotate(2deg); }
.hero-image figcaption { position: absolute; left: 1rem; right: 1rem; bottom: 1rem; padding: .8rem 1rem; border-radius: 999px; background: rgba(45, 27, 19, .72); color: white; font-weight: 800; }
.product-grid, .mission-section, .delivery-section, .preorder-section { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 1.3rem; align-items: center; }
.product-card { padding: 1rem; transition: transform .22s ease; }
.product-card:hover { transform: translateY(-4px) rotate(-.4deg); }
.product-card.healthy { border-color: rgba(111, 139, 85, .45); }
.product-card.classic { border-color: rgba(143, 35, 51, .32); }
.product-image { min-height: 250px; margin: 0 0 1.2rem; }
.addons, .city-grid { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: .8rem; margin-top: 1rem; }
.addons span { border: 1px dashed rgba(45, 27, 19, .28); border-radius: 999px; padding: .75rem 1rem; background: rgba(255, 247, 232, .55); font-weight: 800; text-align: center; }
.mission-list { padding-left: 1.2rem; color: var(--muted); }
.mission-image, .delivery-image { min-height: 390px; }
.steps { counter-reset: step; list-style: none; padding: 0; display: grid; gap: .75rem; }
.steps li { background: rgba(255, 247, 232, .68); border-left: 5px solid var(--caramel); border-radius: 18px; padding: 1rem; color: var(--muted); }
.city-grid article { padding: 1.25rem; }
.preorder-section { background: var(--cocoa); color: white; width: min(1180px, calc(100% - 2rem)); border-radius: var(--radius-xl); padding: clamp(2rem, 6vw, 4rem); margin-bottom: 4rem; }
.preorder-section p { color: rgba(255,255,255,.72); }
.preorder-card { display: grid; gap: .85rem; padding: 1rem; color: var(--cocoa); }
label { display: grid; gap: .35rem; font-weight: 900; }
input, select { width: 100%; border: 1px solid var(--line); border-radius: 16px; padding: .95rem 1rem; font: inherit; background: white; color: var(--cocoa); }
.site-footer { display: flex; justify-content: space-between; gap: 1rem; flex-wrap: wrap; padding: 2rem clamp(1rem, 4vw, 4rem); border-top: 1px solid var(--line); }

@media (max-width: 900px) {
  .hero, .product-grid, .mission-section, .delivery-section, .preorder-section { grid-template-columns: 1fr; }
  .hero { min-height: auto; }
  .hero-image { transform: none; }
  h1, h2 { max-width: 100%; }
}

@media (max-width: 640px) {
  .site-header { position: static; align-items: flex-start; flex-direction: column; }
  nav { font-size: .9rem; }
  .section, .hero { width: min(100% - 1rem, 1180px); padding: 3rem 0; }
  .hero-facts, .addons, .city-grid { grid-template-columns: 1fr; }
  .hero-actions { flex-direction: column; }
  .button, button { width: 100%; }
  .image-slot { min-height: 240px; border-radius: 24px; }
}

@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after { scroll-behavior: auto !important; transition: none !important; animation: none !important; }
}
```

- [ ] **Step 4: Commit the landing implementation**

Run: `git add -- index.html`

Run: `git commit -m "Build mlynarnia landing page"`

Expected: commit succeeds and only `index.html` is committed.

## Task 3: Verify Content, Image Slots, Accessibility Basics, And Responsiveness

**Files:**
- Verify: `index.html`

- [ ] **Step 1: Verify the file exists**

Run: `Test-Path -LiteralPath "index.html"`

Expected: `True`

- [ ] **Step 2: Verify all required Ukrainian content sections are present**

Run: `Select-String -Path "index.html" -Pattern "Добрі млинці|Передзамовити запуск|Healthy|Класика|Купуєш млинці|Dark kitchen|Чому Франківськ"`

Expected: matches for every phrase.

- [ ] **Step 3: Verify all generated-image slots are present**

Run: `Select-String -Path "index.html" -Pattern "assets/images/hero-mlyntsi-delivery.jpg|assets/images/healthy-line.jpg|assets/images/classic-line.jpg|assets/images/social-mission-kitchen.jpg|assets/images/delivery-packaging.jpg"`

Expected: matches for all five filenames.

- [ ] **Step 4: Verify semantic landmarks and accessibility basics**

Run: `Select-String -Path "index.html" -Pattern "<header|<main|<section|<footer|alt=|aria-labelledby|skip-link|label"`

Expected: matches for all listed patterns.

- [ ] **Step 5: Verify responsive CSS exists**

Run: `Select-String -Path "index.html" -Pattern "@media \(max-width: 900px\)|@media \(max-width: 640px\)|prefers-reduced-motion"`

Expected: matches for all three media query patterns.

- [ ] **Step 6: Open the page manually**

Run: `Start-Process -FilePath "index.html"`

Expected: browser opens the landing page directly from the file system. Check desktop width and narrow mobile width. The page must remain readable and visually complete even if `assets/images/` does not exist.

- [ ] **Step 7: Commit verification notes only if files changed**

If manual verification does not require code changes, do not commit. If code changes are needed, stage only `index.html` and commit:

Run: `git add -- index.html`

Run: `git commit -m "Polish landing page responsiveness"`

Expected: commit succeeds and only intentional landing page changes are included.

## Self-Review Notes

Spec coverage:

- Goal, Ukrainian copy, social mission, product lines, delivery model, Ivano-Frankivsk positioning, pre-order CTA, generated image slots, image fallback, single-file static delivery, semantic HTML, readable contrast, mobile responsiveness, and direct browser opening are covered by Tasks 2 and 3.

Placeholder scan:

- The plan uses CSS image fallback language intentionally for absent optional assets. It does not require unfinished product placeholders, backend stubs, or future-only tasks.

Type and naming consistency:

- Image filenames match the approved spec exactly.
- Section IDs used in navigation match their target sections.
- CTA text is consistently `Передзамовити запуск`.
