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

## Accessibility And Quality

The page must use semantic HTML landmarks and sections. Buttons and links must have clear labels. Text contrast must remain readable on all colored surfaces. Motion should be modest and not required to understand the content.

## Out Of Scope

Backend form submission, payment, real menu management, delivery zone calculation, CMS, multi-language switching, and production analytics are out of scope for this first landing page.

## Success Criteria

The delivered page is successful if it:

- Clearly explains the delivery concept within the first screen.
- Makes the social mission visible without overpowering the food offer.
- Communicates both Healthy and Classic product lines.
- Looks distinctive and intentionally designed rather than template-like.
- Works by opening `index.html` directly in a browser.
- Adapts cleanly to mobile and desktop sizes.
