# Blue Insights Design System

A calm, data-first visual system for **Blue Insights** — an agentic-AI enterprise insights platform. The product helps analysts reach *an answer they can defend*: every AI-generated insight is decomposed into **Evidence**, **Assumptions**, and **Unknowns**, with citations back to the sources in scope. Built for long sessions, dense dashboards, and interpretable, trustworthy AI.

The signature surface is a **dashboard + Research sidekick**: a metric view (e.g. "Revenue by quarter") on the left, and a right-hand panel that shows the agent's working — a summary, collapsible findings, sensitive-figure review before sharing, and a source-preview drill-down.

## Sources
This system was built from materials supplied by the user (stored in `uploads/`):
- **`brand_sheet.html` / `brand_sheet.pdf`** — the canonical brand & UI spec (colour tokens for light + dark, typography scale, sample dashboards). **Source of truth for all tokens.**
- **Product screenshots** — `Landing page_light mode`, `Landing page_dark mode`, `Standard desktop view`, `Large desktop view`, `Evidence_why selected`, `Evidence_collapsed view`, `Assumption_selected`, `Share summary_step 1–3`, `Preview source_1–2`, `right panel_standard/loading/all items surfaced`. These drove the component inventory and the UI-kit recreation.
- No codebase or Figma file was provided; components were reconstructed from the brand sheet + screenshots.

## Products represented
- **Blue Insights app** — the only product in scope. A single-workspace analytics view with the agentic Research sidekick. Recreated in `ui_kits/blue-insights/`.

---

## Content fundamentals
How Blue Insights writes.

- **Voice: calm, factual, second person.** Copy addresses the user directly ("an answer *you* can defend", "Done — *your* move", "that data isn't in *your* permitted scope"). It states what happened and what's next without hype.
- **The agent narrates its own work plainly.** Step labels are present-progressive and concrete: "Analysing the annotation", "Retrieving sources you can access", "Checking the figures", "Drafting the explanation". Findings lead with the fact, then the number: "EMEA enterprise renewals fell **28%** vs prior quarter".
- **Honest about limits.** Unknowns are stated as unknowns ("Can't confirm whether Q3 discount changes affected deal size"). Restricted data is labelled `RESTRICTED`, not hidden.
- **Trust is a first-class message.** Recurring nouns: Evidence, Assumption, Unknown, Accountability, Consent, Privacy, Bias monitor, Risk. Sharing is gated: "Nothing is exported until you confirm", "Review before sharing — 1 sensitive figure".
- **Casing.** Sentence case for headings and body ("Revenue by quarter", "Suggested next check"). UPPERCASE + letter-spacing only for eyebrows and section labels ("SUMMARY", "EVIDENCE", "SOURCES IN SCOPE", "RESTRICTED").
- **Numbers.** Always tabular; deltas carry a direction glyph and sign ("▲ 12.4%", "−12.0%"). Currency abbreviated at scale ("$35.30M", "$8.45M"). Real minus sign (−), not hyphen, on negatives.
- **Punctuation.** Middot separators for meta lines ("Fiscal year 2026 · consolidated · USD"). Em dash for asides. Curly quotes.
- **No emoji.** Status is communicated by colour + dot + label, never an emoji. Icons are line-style glyphs.
- **Buttons are verbs.** "Run analysis", "Explain this", "Request access", "Run check", "Copy / share", "Re-run with this", "Save as repeatable check".

---

## Visual foundations
- **Colour.** One dominant brand signal — **Neural Blue `#034BDC`** — for primary actions, links, active nav, focus rings, the active chart bar and citation numbers. Everything else stays quiet (slate neutrals) so the data leads. Dark mode lightens the primary to `#60A5FA` to hold contrast. Max one brand blue in play at a time; secondary accents (`#0284C7`, `#38BDF8`) are used sparingly. Status colours (green/amber/red/blue) always appear as **colour + dot + label**, never colour alone. A dedicated **AI-semantics** palette encodes trust: Accountability blue, Consent mint, Transparency beige, Privacy gray, Bias red, Risk yellow.
- **Type.** A single family — **Source Sans 3** — carries the whole system; hierarchy comes from weight (400/500/600/700) and size, not a second face. Display/H1 32px, H2 24px, H3 20px, body 16/14px, data 13px, caption 12px, eyebrow 11px. Line-height 1.4–1.6 for dense content. Tabular + lining numerals on every metric, table and KPI so columns align.
- **Spacing.** 4px base scale (4·8·12·16·20·24·32·40·48). Generous outer padding on cards (14–16px), roomy dashboard margins (40–48px). Whitespace over ornament.
- **Backgrounds.** Flat surfaces, no gradients, no imagery, no textures. Light mode layers white canvas → `#F8FAFC` surface-1 → `#F1F5F9` surface-2. Dark mode layers `#0F172A` → `#1E293B` → `#334155`; depth comes from these stacked surfaces, not heavy shadows. Dark mode is *designed*, not inverted.
- **Corner radii.** 6px (small controls), 8px (buttons, inputs), 10px (nested cards, flags/alerts), 12px (cards, panels, modals), pill (chips, badges, avatars, the brand mark is 8px). Consistent and moderate — never fully rounded cards.
- **Cards.** Soft `surface-1` fill, 1px `#E2E8F0` border, 12px radius, minimal or no drop shadow. Panels with headers use a `surface-2` header bar with a bottom border. No coloured left-border accents.
- **Shadows.** Restrained. `xs`/`sm` for resting cards (barely there), `md` for floating callouts (the chart annotation), `lg` only for modals. No glow, no coloured shadows.
- **Borders & dividers.** 1px `#E2E8F0` (light) / `#475569` (dark) everywhere — the primary way surfaces are separated. Dashed 1px border marks a de-emphasised/projected chart bar.
- **Transparency & blur.** Used sparingly: the modal backdrop is `rgba(15,23,42,.5)` (no blur). Dark-mode status chips use ~15% alpha fills of their status colour. No frosted-glass panels.
- **Animation.** Quick and functional. `120ms` for hovers/toggles, `200ms` for progress and disclosure. Standard ease `cubic-bezier(.4,0,.2,1)`. No bounces, no springy motion — chevrons rotate, progress bars grow, panels fade. Calm.
- **Hover / press.** Primary buttons darken (`#034BDC` → `#0340BE`); ghost/secondary shift to a soft surface fill. Disabled = 50% opacity. Focus = 2–3px Neural-Blue ring (`--color-focus-ring`). No scale-down on press.
- **Layout.** Fixed top AppBar (56–64px). The Research sidekick is a fixed-width right rail (~460px) with its own scroll; the main dashboard scrolls independently. Content is max-width and centred on wide screens.
- **Imagery.** None in-product. The system is entirely type, colour, and data-viz. Charts are flat CSS/SVG bars in the blue ramp (`--color-chart-bar` → `--color-chart-bar-active`).

---

## Iconography
- **Style: line icons, ~2px stroke, rounded caps/joins** — matching the glyphs in the product (refresh, moon/sun theme toggle, chevrons, lock, bookmark, upload/share, warning triangle, check, external-link, search). This is the **Lucide** style.
- **Substitution flag:** the source provided no icon font, sprite, or SVG assets, so this system uses **[Lucide](https://lucide.dev)** as the closest match to the product's stroke weight and rounded style. Load from CDN (`https://unpkg.com/lucide@latest`) or inline the individual SVG paths (as the components and UI kit do). **If Blue Insights has an official icon set, please share it and it will replace Lucide.**
- **The brand mark** is a Neural-Blue rounded square (8px radius) containing a lowercase **"b"** in Source Sans 3 Bold. No standalone logo file was supplied; this is a typographic treatment, not a reconstructed logo. If an official logo exists, drop it into `assets/` and update `AppBar`.
- **No emoji, no unicode dingbats as icons.** Direction/delta glyphs (▲ ▼ − +) are the only non-icon symbols, used only in numeric deltas.
- Status is a coloured **round dot** (`Badge`); AI trust semantics use a coloured **square chip** (`AiChip`) to stay visually distinct from status.

---

## Index / manifest
Root files:
- **`styles.css`** — the single entry point consumers link. `@import`s only.
- **`tokens/`** — `fonts.css` (Source Sans 3 via Google Fonts), `colors.css` (light `:root` + dark `[data-theme="dark"]`), `typography.css`, `spacing.css` (spacing, radii, shadows, motion).
- **`thumbnail.html`** — homepage tile.
- **`guidelines/`** — foundation specimen cards (Colors, Type, Spacing, Brand groups).
- **`SKILL.md`** — Agent-Skills wrapper.

### Components (`components/`) — `window.TomoroDesignSystem_e2b93e.<Name>`
- **core/** — `Button`, `IconButton`, `Avatar`, `Badge`
- **forms/** — `Input`, `Textarea`, `Checkbox`
- **data/** — `Card`, `KpiCard`
- **feedback/** — `Modal`, `Alert`, `ProgressBar`
- **ai/** — `FindingSection`, `AiChip`, `SourceRow`, `RefBadge`, `StepList` *(the Research-sidekick primitives)*
- **navigation/** — `AppBar`

Each directory has `<Name>.jsx`, `<Name>.d.ts`, `<Name>.prompt.md`, and one `@dsCard` demo `.html`.

### UI kits (`ui_kits/`)
- **blue-insights/** — `index.html` (interactive FY26 Revenue dashboard + Research sidekick: explain → loading → answer, evidence "Why?", assumption correction, source preview, share-review modal, light/dark), `RevenueChart.jsx`, `Sidekick.jsx`.

### Intentional additions
None. The component inventory is drawn directly from the brand sheet and product screenshots. `RevenueChart` and `Sidekick` live in the UI kit (compositions), not as reusable primitives.

## Caveats
- **Fonts:** Source Sans 3 is the exact brand family, loaded from Google Fonts (no self-hosted binaries were provided). Swap in self-hosted `@font-face` files if you need offline/pinned fonts.
- **Icons:** Lucide is a flagged substitution (see Iconography).
- **Logo:** no official mark supplied — the "b" square is a typographic stand-in.
