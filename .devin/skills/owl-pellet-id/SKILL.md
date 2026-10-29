---
name: owl-pellet-id
description: Use this skill when working on the Owl Pellet ID GitHub Pages site — the static, client-side tool that identifies owl species from pellet photos and prey remains from dissected-pellet photos (image feature extraction, weighted fuzzy matching against data/owls.js and data/prey.js knowledge bases, adding species profiles, deploying to GitHub Pages).
---

# Owl Pellet ID

Static GitHub Pages site, zero dependencies, all analysis in the browser.

## Layout

- `index.html` — 3-step flow: mode (pellet species vs. prey contents) → photo
  upload + crop box → context (7-region dropdown, pellet length mm, freshness,
  contents checklist; prey mode swaps in a "largest skull/bone mm" input for
  prey-size estimation) → ranked results with size-reference lines. Also a
  no-photo guided dichotomous key.
- `app.js` — canvas feature extraction (HSV mean, dark fraction, specular
  gloss, edge density, dark-region elongation) + weighted fuzzy scorers
  (`scoreOwl`, `scorePrey`; auto-normalised over supplied evidence only).
  `extraLine()` renders pellet-length or skullLen/massG size references.
- `data/owls.js` — `window.OWL_DATA`, ~45 species profiles across all regions:
  `pelletLen` (mm), `hue`/`sat`/`val` ranges, `gloss` (0–1 specular
  expectation), `elongation`, `contents`, `regions` (europe | northamerica |
  southamerica | africa | asia | australasia | global), `weight`, `notes`.
- `data/prey.js` — `window.PREY_DATA`, 17 prey profiles keyed on `signs`
  matching the checkbox vocabulary in index.html, plus `skullLen`/`massG`
  ranges and `lenKeys` (mandible/femur guides) for prey-size estimation.

## Hard rules

- No build step / npm / fetch() — data loads via `<script>` so `file://` works.
- Never send photos off-device; canvas-only processing.
- Keep the "heuristic, not ML, scores aren't probabilities" framing in UI/README.
- Barn-owl signature = black + glossy/varnished when fresh; little-owl signature =
  small pellets full of shiny beetle chitin; shrew signature = red-tipped teeth;
  vole vs. mouse = rootless ridged vs. rooted cusped molars. Preserve these
  diagnostics when editing profiles.

## Verify

`node --check app.js`; open `index.html`, run both modes end-to-end.
Deploy: Settings → Pages → deploy from branch, site root.
