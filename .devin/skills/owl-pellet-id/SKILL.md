---
name: owl-pellet-id
description: Use this skill when working on the Owl Pellet ID GitHub Pages site — the static, client-side tool that identifies owl species from pellet photos and prey remains from dissected-pellet photos (image feature extraction, weighted fuzzy matching against data/owls.js and data/prey.js knowledge bases, adding species profiles, deploying to GitHub Pages).
---

# Owl Pellet ID

Static GitHub Pages site, zero dependencies, all analysis in the browser.

## Layout

- `index.html` — 3-step flow: mode (pellet species vs. prey contents) → photo
  upload + crop box → context (region, pellet length mm, freshness, contents
  checklist) → ranked results. Also a no-photo guided dichotomous key.
- `app.js` — canvas feature extraction (HSV mean, dark fraction, specular
  gloss, edge density, dark-region elongation) + weighted fuzzy scorers
  (`scoreOwl`, `scorePrey`; auto-normalised over supplied evidence only).
- `data/owls.js` — `window.OWL_DATA`, 10 species profiles: `pelletLen` (mm),
  `hue`/`sat`/`val` ranges, `gloss` (0–1 specular expectation), `elongation`,
  `contents`, `regions`, `weight` per feature, `notes`.
- `data/prey.js` — `window.PREY_DATA`, 9 prey profiles keyed on `signs` matching
  the checkbox vocabulary in index.html.

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
