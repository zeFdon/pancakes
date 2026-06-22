# Landing Page Design: Mlynarnia Ivano-Frankivsk

## Goal

Create a Ukrainian-language landing page for a new pancake delivery business in Ivano-Frankivsk. The page must sell the product, collect early interest through a launch pre-order CTA, and communicate the social mission clearly enough for partners, grant reviewers, and local media.

## Audience

Primary audience: local customers in Ivano-Frankivsk who want convenient pancake delivery for breakfast, snacks, dessert, or dinner.

Secondary audience: local partners, grant programs, and supporters interested in a social enterprise that creates adapted work opportunities for people aged 55+ and people with disabilities.

## Positioning

The brand direction is "warm local mlynarnia with a mission". The core promise is:

> Добрі млинці, які роблять добре.

The landing page should show that the product is tasty and accessible first, then deepen trust through the healthy line and social mission. It should not feel like a generic health-food startup or a charity page. The business is a real food delivery concept with a human, local reason to care.

## Content Strategy

The page will use Ukrainian copy throughout.

The main CTA is "Передзамовити запуск". Because the business is at the launch stage, the page should not imply that full ordering is already available. The CTA should lead to a pre-order or interest form section on the same page. Without a backend, the form can be static for presentation, and the primary actionable contact can be `mailto:`.

Required page sections:

1. Hero: headline, short explanation of pancake delivery in Ivano-Frankivsk, CTA, and compact product/social proof points.
2. Product lines: Healthy line with lactose-free and no-sugar options, Classic line with familiar sweet and savory pancakes, and add-ons such as sauces, berries, toppings, drinks, and combo sets.
3. Social mission: employment and adapted work for people aged 55+ and people with disabilities. The message must be direct: buying pancakes supports people in the local community.
4. Delivery model: dark kitchen, pre-order, cooking, careful packaging, and city delivery.
5. Why Ivano-Frankivsk: local convenience, lack of a focused pancake delivery concept with this social and healthy angle, and suitability for families, students, offices, and health-conscious customers.
6. Final pre-order section: short form-style block with name, phone, preference, and a strong CTA.

## Generated Image Plan

The landing page should reserve image slots even if final generated assets are not available yet. Generated images should not contain readable text, fake logos, UI elements, or brand names. Text remains real HTML for accessibility and editability.

Recommended image folder: `assets/images/`.

1. Hero image

- File: `assets/images/hero-mlyntsi-delivery.jpg`
- Placement: first screen, right side on desktop and below the headline on mobile.
- Aspect ratio: 4:5 or 1:1.
- Alt text: `Теплі млинці з ягодами, соусами та пакуванням для доставки`.
- Prompt: `Editorial food photography for a warm Ukrainian local pancake delivery brand, stack of thin crepes and rolled pancakes on cream bakery paper, berry sauce in small ceramic bowls, caramel tones, reusable delivery box without any logo or text, cozy morning light, Ivano-Frankivsk local cafe atmosphere, handmade and premium but approachable, deep cherry and warm cream color palette, shallow depth of field, natural imperfections, no text, no typography, no watermark, no people, high detail, 4:5 vertical composition.`

2. Healthy product line image

- File: `assets/images/healthy-line.jpg`
- Placement: Healthy card in the product lines section.
- Aspect ratio: 4:3.
- Alt text: `Млинці без лактози та без цукру з ягодами і фруктовим соусом`.
- Prompt: `Bright natural food photo of lactose-free no-sugar crepes, fresh berries, apple puree, light cottage-style lactose-free filling, soft green accents, cream linen, simple ceramic plate, healthy but not sterile, warm local bakery mood, no labels, no text, no logos, no hands, high detail, 4:3 composition.`

3. Classic product line image

- File: `assets/images/classic-line.jpg`
- Placement: Classic card in the product lines section.
- Aspect ratio: 4:3.
- Alt text: `Класичні солодкі та солоні млинці з шоколадом і сирною начинкою`.
- Prompt: `Comforting classic pancake assortment, Ukrainian crepes with chocolate drizzle, sweet cheese filling, savory mushroom and cheese option, caramelized edges, warm cocoa and cherry accents, placed on rustic bakery paper and ceramic plates, appetizing family-friendly delivery food, no text, no brand logo, no watermark, high detail, 4:3 composition.`

4. Social mission image

- File: `assets/images/social-mission-kitchen.jpg`
- Placement: social mission section, next to the text about adapted work for people aged 55+ and people with disabilities.
- Aspect ratio: 16:10 or 4:3.
- Alt text: `Команда млинарні готує та пакує замовлення на кухні`.
- Prompt: `Warm documentary-style photo in a small clean dark kitchen, older adult hands carefully packing pancakes into eco containers, inclusive adapted workstation, calm respectful atmosphere, soft morning light, cream and caramel color palette, human and local, focus on hands and process rather than faces, no visible disability stereotypes, no text, no logos, no watermark, high detail, 16:10 composition.`

5. Delivery and packaging image

- File: `assets/images/delivery-packaging.jpg`
- Placement: delivery model section or final CTA background detail.
- Aspect ratio: 3:2.
- Alt text: `Пакування млинців для доставки містом`.
- Prompt: `Close-up of neat pancake delivery packaging on a warm wooden counter, separate sauce compartments, kraft paper, small thermal delivery bag without logo, subtle blurred city street feeling in background, Ivano-Frankivsk inspired local delivery mood without landmarks, warm cream, caramel, deep cherry accents, no text, no typography, no logos, no watermark, high detail, 3:2 composition.`

If generated images are missing during implementation, use polished CSS placeholders with gradient pancake shapes and keep the same layout dimensions so images can be added later without redesigning the page.

## Visual Direction

The aesthetic should be warm, local, and memorable. It should feel like bakery paper, caramelized edges, berry jam, handwritten menu marks, and community notice boards, but rendered as a polished modern landing page.

Palette:

- Warm cream background inspired by bakery paper.
- Caramel and toasted pancake tones for surfaces and highlights.
- Deep cherry or beetroot accent for primary CTA and emotional emphasis.
- Soft green accent for the Healthy line.
- Dark cocoa text for readability.

Layout and details:

- Use asymmetry and overlapping decorative circles that reference pancakes.
- Use rounded cards and hand-drawn-style divider lines without making the page childish.
- Use a strong display font for headlines and a readable companion font for body text.
- Avoid generic purple gradients, plain SaaS cards, and default system-font styling.
- Use subtle CSS-only motion: entrance reveals, hover lift on cards, and a warm CTA interaction.

## Technical Scope

Implement as a single static `index.html` file with embedded CSS and minimal JavaScript. No build step, framework, package manager, or backend is required.

The page must be responsive for desktop and mobile. Desktop should feel editorial and spacious. Mobile should preserve all content, keep CTA visible and tappable, and avoid cramped decorative elements.

External fonts may be loaded from Google Fonts. No external image assets are required; the visual character should come from typography, CSS shapes, color, layout, and decorative details.

Generated images are optional assets. If present, they should be referenced from `assets/images/` using the filenames defined in the Generated Image Plan. If absent, the landing page must still look complete through CSS-based placeholders and decorative shapes.

## Accessibility And Quality

The page must use semantic HTML landmarks and sections. Buttons and links must have clear labels. Text contrast must remain readable on all colored surfaces. Motion should be modest and not required to understand the content.

## Out Of Scope

Backend form submission, payment, real menu management, delivery zone calculation, CMS, multi-language switching, and production analytics are out of scope for this first landing page.

## Success Criteria

The delivered page is successful if it:

- Clearly explains the delivery concept within the first screen.
- Makes the social mission visible without overpowering the food offer.
- Communicates both Healthy and Classic product lines.
- Provides clear slots for generated landing images, with graceful CSS placeholders if assets are absent.
- Looks distinctive and intentionally designed rather than template-like.
- Works by opening `index.html` directly in a browser.
- Adapts cleanly to mobile and desktop sizes.
