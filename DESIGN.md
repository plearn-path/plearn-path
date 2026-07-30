---
version: alpha
name: "Plearn Path"
website: "https://github.com/Lxwkxy/plearn-path"
description: >-
  Product-design direction for Plearn Path, an adaptive mathematics practice
  experience for Thai upper-secondary learners and their teachers.
---

# Plearn Path Design System

## 1. Design intent

Plearn Path should feel encouraging, focused, and premium without becoming
childish. It translates a learner's answer into a next step: a suitable problem,
a small hint, or a review point for the teacher. The visual system therefore uses
an open white canvas for clarity and deep purple moments for confidence and focus.

This direction is inspired by the supplied reference's editorial hierarchy,
rounded surfaces, and purple-led palette. It is adapted for Plearn Path only;
it must not use another brand's name, copy, logo, or product claims.

## 2. Brand personality

- Calm and capable: reduce anxiety around mathematics.
- Personal: the interface acknowledges that each learner progresses differently.
- Clear: use plain labels, visible hierarchy, and one primary action at a time.
- Credible: teacher-facing data is tidy, legible, and never overstated.

## 3. Core palette

| Token | Hex | Role |
| --- | --- | --- |
| `brand` | `#852EF2` | Primary CTA, active state, key data stroke |
| `plum` | `#954293` | Secondary purple surface or emphasis |
| `plum-dark` | `#7D2279` | Dark accent and contrast detail |
| `plum-deep` | `#300942` | Hero overlay, large feature panel, final CTA |
| `plum-night` | `#16052B` | Deepest overlay only |
| `lavender` | `#E7EAF7` | Quiet section background, hint surface |
| `white` | `#FFFFFF` | Main canvas and card surface |
| `ink` | `#2A2A2A` | Default body and headline text |
| `muted` | `#5E5A65` | Supporting text |
| `hairline` | `#E7EAF7` | Borders and dividers |

Do not introduce blue as a primary product color. Avoid broad rainbow gradients.
Use purple gradients only as subtle photo overlays or contained decorative depth.

## 4. Typography

- UI and English: `Inter`, then `DM Sans`, then system sans-serif.
- Thai: `Noto Sans Thai` before the Latin fallback stack.
- Headlines: bold, compact line height (`0.98–1.1`), large enough to create a
  clear editorial moment.
- Body: regular/medium weight, comfortable `1.5–1.7` line height.
- Hero desktop headline: up to `80px`; mobile starts at `48px`.
- Prefer sentence case. Uppercase may be used sparingly for short English labels
  such as `ADAPTIVE PRACTICE`.

## 5. Spacing, shape, and elevation

- Base spacing unit: `8px`.
- Standard section spacing: `96px` desktop, `64px` mobile.
- Standard container: `max-width: 1280px`, with `20px` mobile side padding.
- Cards: `28–32px` corner radius.
- Feature/end-CTA panels: `40px` corner radius.
- CTA controls: `24px` corner radius; never use a full `999px` pill.
- Use flat panels with a thin lavender border or a subtle purple-tinted shadow.
  Avoid heavy outlines, glassmorphism, and noisy elevation.

## 6. Layout principles

### Header

- Fixed, white, lightly translucent header with a hairline bottom border.
- Brand at left, concise desktop navigation in the center, one purple CTA at right.
- Header height is `80px`; it should feel spacious but not oversized.

### Landing hero

- Full-bleed lifestyle image with the learner on the right.
- A dark plum left-to-right overlay creates a stable reading field for white copy.
- Copy is left aligned: a small label, a large two-line headline, short support
  paragraph, and no more than two actions.
- The hero represents real learning; no fake dashboards over the image.

### Content rhythm

1. White problem framing.
2. Lavender how-it-works section with four concise step cards.
3. Two balanced feature panels: a pale-lavender learner panel and a deep-plum
   teacher panel.
4. A deep-plum end CTA on a white canvas.

## 7. Component guidance

### Buttons

- Primary: `brand` fill, white label, `24px` radius.
- Secondary on dark media: transparent white surface with a white border.
- Secondary on light surfaces: lavender fill or a simple text link.
- Use a clear verb: “เริ่มฝึกโจทย์”, “ตรวจคำตอบ”, “สร้างกิจกรรมทบทวน”.

### Cards

- One clear title, short support text, and one purposeful control or link.
- Keep content to a scannable 3–6 lines before a control.
- White cards use a lavender border; dark cards use white at reduced opacity.

### Learn screen

- Canvas: lavender, with a white question card and white path sidebar.
- The answer field must use dark text on white for strong contrast.
- Adaptive feedback appears on a deep plum surface with white text, including
  the successful-answer message.
- Hints use a lavender surface and explain the next thought, not the full answer.

### Teacher dashboard

- White outer canvas, deep plum dashboard frame.
- Heatmap is a quiet white data surface; its cells use soft purple tints.
- The recommended action is a saturated purple panel with a white action button.
- Keep data labels short and readable; colour is not the only way to communicate
  a weak or strong result.

## 8. Motion and interaction

- Reveal sections with the existing `pop-on-scroll` motion: fade plus a small
  upward movement and scale, approximately `650ms`.
- Hover buttons with a small opacity/shadow change only; do not make controls
  bounce or continuously animate.
- Respect `prefers-reduced-motion` and show all content immediately when it is
  enabled.
- Ensure keyboard focus is visible, especially on links, inputs, and CTA buttons.

## 9. Accessibility checks

- Maintain readable contrast: white text only on `brand`, `plum-dark`, or
  `plum-deep` surfaces—not on white cards.
- Preserve semantic headings and use descriptive image alt text.
- Never communicate learning status with colour alone; retain labels and numbers.
- Inputs and buttons need clear focus outlines and comfortable touch targets.
- Avoid text baked into images.

## 10. Do / don't

Do:

- Use generous white space and decisive purple moments.
- Keep the learner, the next step, and the teacher's action understandable at a glance.
- Use real Plearn Path language about practice, hints, paths, and classroom insight.

Don't:

- Copy names, copywriting, imagery, or trademarks from the supplied reference.
- Use blue as the lead brand colour.
- Turn every item into a pill or apply large shadows everywhere.
- Add visual decoration that competes with a problem, answer field, or teacher action.

## 11. Asset policy

- Hero asset: `public/plearn-path-hero.png`.
- It should retain an uncluttered left side for overlaid copy.
- Any future illustration or photo must be original, licensed, or generated for
  Plearn Path and must not include readable third-party branding.
