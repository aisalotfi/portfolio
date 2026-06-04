# Design — Colorful Luxury Redesign

## 1. Overview

Evolution of the portfolio from a flat, monochrome dark theme into a **vibrant luxury** aesthetic — deep midnight-plum backgrounds, jewel-tone accents (champagne copper, royal amethyst, deep emerald, sapphire blue), editorial typography (Playfair Display + Geist), glassmorphism, and choreographed micro-interactions.

The foundation, Hero, About, and Projects sections are shipped. This spec covers the remaining sections (Process, Engineering, Fullstack, Timeline, Contact) plus cross-cutting polish (cursor, scroll progress, accessibility, performance).

## 2. Goals

- Maintain a single coherent design language across every section, driven by Tailwind v4 `@theme` tokens.
- Each section earns a primary jewel tone so the page reads as a chromatic journey, never a single mood.
- Premium feel through restraint: ample whitespace, hairline borders, soft glows — never neon or arcade.
- Hit WCAG AA contrast for all body text and interactive controls.
- Respect `prefers-reduced-motion` and keep main-thread work bounded.

## 3. Non-Goals

- No new content sections.
- No CMS integration or data layer changes beyond extending existing `data/*.ts` shapes.
- No replacement of Framer Motion / GSAP / Lenis — work within the installed libraries.

## 4. Design System (shipped — source of truth)

### 4.1 Palette tokens (`globals.css`)

| Role | Token | Value | Notes |
|---|---|---|---|
| Page base | `--color-near-black` | `#06050F` | deep midnight |
| Plum / velvet ramp | `--color-charcoal-{900..100}` | `#0B0918` → `#B6ACC6` | replaces gray ramp |
| Ivory ramp | `--color-soft-white`, `cream`, `warm-white` | warm whites | premium light |
| Signature | `--color-accent` (`copper`) | `#D4A574` | + `accent-light`, `accent-subtle` |
| Jewels | `emerald`, `sapphire`, `amethyst`, `copper` | each with `bright` + `deep` | per-section accents |
| Borders | `border-subtle/medium/strong` | rgba whites | hairlines |
| Glass | `surface-glass`, `surface-glass-strong` | rgba whites | frosted surfaces |

### 4.2 Section accent assignment

| Section | Primary jewel | Reasoning |
|---|---|---|
| Hero | mixed (copper-led) | overture — touches every tone |
| About | amethyst + emerald | introspective, philosophical |
| Projects | per-card (copper / amethyst / emerald / sapphire) | already implemented |
| **Process** | **emerald** | growth, steps, intentional craft |
| **Engineering** | **sapphire** | precision, architecture |
| **Fullstack** | **amethyst** | breadth, range |
| **Timeline** | **copper** | warmth, history |
| **Contact** | mixed (copper-led, sapphire CTA) | invitation, warmth |

### 4.3 Typography

- `font-display` — Playfair Display (400/500/600/700, italic). Auto-applied to `h1–h3`.
- `font-sans` — Geist for body / UI / chips.
- `font-mono` — Geist Mono for eyebrows, numerals, labels.
- Display tracking `-0.025em` to `-0.03em`; body line-height `1.65–1.75`.
- Italic Playfair used as gradient-clipped emphasis (`text-gradient-luxe`).

### 4.4 Utilities

`glass`, `glass-strong`, `hairline`, `cinematic-blur`, `cinematic-gradient`, `text-gradient-{luxe|copper|jewel}`, `glow-{copper|amethyst|emerald|sapphire}`, `bg-gradient-radial`, `shimmer-line`, `text-balance`, `text-pretty`.

### 4.5 Motion

- Standard ease: `[0.16, 1, 0.3, 1]` (`--ease-out-expo`).
- Reveal pattern: opacity 0 → 1, y `+40` → 0, duration `0.8–1.2s`, viewport margin `-10%`, `once: true`.
- Hover: `y: -2` lift + spring `300/22`. Avoid scale on cards; reserved for buttons / chips.
- Cursor parallax: max ±25px translate, 2–3s ease-out duration.

## 5. Section Blueprints (to build)

### 5.1 ProcessSection — emerald

A four-step working process rendered as a vertical "constellation" with a copper→emerald gradient connector line.

- Eyebrow: `03 / Process`. Headline: "How the work `gets made.`" with "gets made." in italic luxe gradient.
- Each step is a glass card on alternating sides of a center connector (desktop) or stacked (mobile).
- Step card contents: large Playfair Roman numeral (i, ii, iii, iv) tinted emerald, step name, 1‑sentence description, three keywords as hairline chips.
- Connector: 1px gradient line with a tiny pulsing emerald node at each step.
- On scroll-into-view, fill the line progressively using `useScrollProgress` scoped to the section bounds.
- Data shape (new): `processSteps: { id, numeral, title, description, keywords: string[] }[]` in `src/data/process.ts`.

### 5.2 EngineeringSection — sapphire

A capabilities matrix rendered as a 2×3 (or 3×2) grid of glass cards with a sapphire halo on hover. Communicates technical breadth without becoming a logo wall.

- Headline: "Engineering, `as a craft`."
- Each card: a small monogram glyph (SVG icon, sapphire stroke), discipline name in Playfair, one-line description, and a bottom row of mini "tools" pills.
- Hover: card border tints sapphire, a sapphire halo blooms, the glyph performs a subtle stroke-draw.
- Add a side rail showing aggregate stats (e.g. "98% Lighthouse", "<3s TTI", "0 axe violations") in copper.
- Data shape (new): `engineeringCapabilities: { id, glyph: 'architecture'|'performance'|...|'a11y', title, description, tools: string[] }[]`.

### 5.3 FullstackSection — amethyst

A horizontal "stack" diagram showing layers from data → API → UI → motion. Demonstrates fullstack range visually.

- Headline: "From schema to `pixels.`"
- Layout: vertical stack of four horizontal glass bars on desktop (or accordion-style on mobile). Each bar has a left label, a middle technology tag cloud, and a right outcome metric.
- Each layer pulls from an amethyst gradient at varying intensities (top dim, bottom rich) to imply depth.
- Idle ambient animation: a subtle amethyst light scans top-to-bottom over 6s loop.
- Data shape (new): `stackLayers: { id, layer, description, technologies: string[], metric: string }[]`.

### 5.4 TimelineSection — copper

A vertical career timeline, copper-themed, drawing from `experiences` data already in `data/experience.ts`.

- Headline: "A `decade` of decisions."
- Center copper hairline with circular nodes; each node has a glass card on alternating sides (desktop) or stacked left (mobile).
- Card contents: period (mono, copper), company (Playfair), role, description, three highlight bullets with copper glow.
- Active node (the one currently in view) gets a slightly larger pulsing copper halo.
- Use `useScrollProgress`-style scoped progress to fill the timeline line as the user scrolls.

### 5.5 ContactSection — mixed (copper headline, sapphire CTA)

Editorial closing: large invitation, simple trio of contact links, glass form (optional), and a copper-glowing email CTA.

- Headline (very large Playfair): "Let's `build` something `inevitable.`" — words emphasized in luxe gradient italic.
- Sub: short paragraph + availability pill matching the Hero's status pill.
- Three glass tiles: Email, LinkedIn, Github — each with a small copper arrow that animates on hover.
- Big jewel-variant CTA: "Start a Project →".
- Footer-side meta: location, time zone, response window.

## 6. Cross-cutting polish (after sections)

1. **Custom cursor**: a 6px copper dot with a 28px lagging glass ring, scales 1.5× and tints to current section's accent on hover over interactive elements. Hidden on touch devices and when `prefers-reduced-motion` is set.
2. **Scroll progress bar**: 1px copper-gradient hairline at the top of the viewport, driven by `useScrollProgress`.
3. **Section transitions**: each section gets a 1px copper hairline divider just inside its top edge, decaying into transparency on each side.
4. **Reduced motion**: gate cursor parallax, particle drift, halo pulses, and shimmer effects behind `useReducedMotion()` from Framer Motion.
5. **Performance**: cap `FloatingParticles` to 28 on mobile, `requestAnimationFrame` only when tab is visible, set `will-change: transform` only on currently-animating elements.

## 7. Accessibility

- Maintain a single visible focus style globally (already shipped: copper 1px + 4px halo).
- All accent-on-glass text passes 4.5:1 against the resolved background. Where a chip is over a busy mesh, lift opacity of the underlying glass to keep contrast.
- All decorative motion elements carry `aria-hidden="true"`.
- `prefers-reduced-motion`: replace transforms with simple opacity fades; disable cursor follower and particle drift.
- All interactive elements reachable via keyboard with logical tab order; ensure mobile menu traps focus.

## 8. Component / data inventory (new files)

- `src/data/process.ts` — process steps.
- `src/data/engineering.ts` — engineering capabilities + aggregate stats.
- `src/data/fullstack.ts` — stack layers.
- `src/components/ui/Glyph.tsx` — small SVG glyph set used by Engineering cards.
- `src/components/effects/CursorFollower.tsx` — custom cursor.
- `src/components/effects/ScrollProgress.tsx` — top progress bar.
- Section files updated in place: Process, Engineering, Fullstack, Timeline, Contact.

## 9. Open decisions

1. **Custom cursor**: include now or after sections? Recommended: after, to avoid visual noise during section work.
2. **Engineering glyphs**: hand-drawn SVG set vs. a small icon library (e.g. lucide). Recommended: hand-drawn (4–6 glyphs only, full control over stroke and animation).
3. **Timeline "active node"**: progress-driven (smooth, expensive) or `IntersectionObserver` per node (cheaper, snappy). Recommended: IntersectionObserver per node.
4. **Contact form**: do we want a real form, or links-only? Recommended: links-only first; form behind a secondary CTA.

## 10. Risks

- Visual fatigue from saturated accents — mitigated by anchoring each section to one jewel and reserving multi-tone gradients for emphasis only.
- Glass + blur stacks can hurt mobile GPU. Mitigation: drop `glass-strong` to `glass` on small screens, lower particle count, and gate background blurs.
- Playfair italic at small sizes can feel decorative. Mitigation: only use display italic at 17px+ and for emphasis spans, never for UI labels.
