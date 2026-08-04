---
name: blue-insights-design
description: Use this skill to generate well-branded interfaces and assets for Blue Insights, either for production or throwaway prototypes/mocks/etc. Contains essential design guidelines, colors, type, fonts, assets, and UI kit components for prototyping.
user-invocable: true
---

Read the README.md file within this skill, and explore the other available files.
If creating visual artifacts (slides, mocks, throwaway prototypes, etc), copy assets out and create static HTML files for the user to view. If working on production code, you can copy assets and read the rules here to become an expert in designing with this brand.
If the user invokes this skill without any other guidance, ask them what they want to build or design, ask some questions, and act as an expert designer who outputs HTML artifacts _or_ production code, depending on the need.

Key facts about Blue Insights:
- Calm, data-first agentic-AI insights platform. One dominant brand signal: Neural Blue #034BDC (dark mode: #60A5FA).
- One typeface, Source Sans 3; hierarchy from weight/size; tabular numerals on all data.
- Signature pattern: a dashboard + "Research sidekick" that decomposes every AI answer into Evidence / Assumption / Unknown with citations to sources in scope.
- Light mode default; dark mode is designed, not inverted. Flat surfaces, 1px borders, 12px card radius, restrained shadows, no gradients or imagery, no emoji.
- Tokens live in `tokens/*.css`; link `styles.css`. Components mount from `_ds_bundle.js` under `window.TomoroDesignSystem_e2b93e`. Full screen recreation in `ui_kits/blue-insights/`.
