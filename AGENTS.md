# Agent notes — Owl Pellet ID

Static, dependency-free GitHub Pages site. Keep it that way unless the user
explicitly asks for a framework or a backend.

## Invariants

- **No build step, no bundler, no npm.** Plain HTML/CSS/ES5-compatible JS.
- Data files must load via `<script>` tags (assign to `window.OWL_DATA` /
  `window.PREY_DATA`) — NOT `fetch()`, so the page still works when opened as
  `file://`.
- Photos are processed on `<canvas>` only; never upload or send them anywhere.
- The tool is a heuristic identifier: README and UI must keep the honesty
  disclaimer about confidence scores. Do not present scores as probabilities.

## Conventions

- Owl profiles (`data/owls.js`): lengths in mm; colour as HSV ranges
  (hue 0–360, sat/val 0–100); `gloss` 0–1 expected specular fraction;
  `elongation` = long/short bounding-box ratio; `weight` fields tune the matcher.
- Prey profiles (`data/prey.js`): `signs` must use the same vocabulary as the
  checkboxes in `index.html` (`fur`, `bones`, `skull`, `teeth`, `feathers`,
  `beak`, `insects`, `earthworms`, `fish`). `skullLen`/`massG` ranges drive the
  prey-size estimate shown on result cards; keep `weight.size` proportional to
  how diagnostic size is for that prey (e.g. 2.0 for rat, 0.2 for insects).
- Owl `regions` vocabulary must match the `#region` select options in
  `index.html`: europe, northamerica, southamerica, africa, asia, australasia,
  global (global = found nearly everywhere).
- Dropping profiles (`data/droppings.js`): `shape` must be one of `pellets`,
  `tubular`, `tapered`, `splat`, `cubes` (matching the `#shape` select);
  `dropLen` is length in mm (or pellet diameter for pellet producers).
  Contents uses the same signs vocabulary plus `seeds`, `plant`, `mucus`,
  `shell` — checkboxes also live in `index.html`.
- Scores are weighted fuzzy matches: see `rangeScore`, `hueScore`, `scoreOwl`,
  `scorePrey` in `app.js`. Normalisation is automatic — candidates are scored
  only on the evidence actually supplied.

## Testing

No test suite. Verify changes by opening `index.html` (or
`python3 -m http.server`) and running through both modes:
mode select → upload → drag crop box → context → Identify → ranked results.
Check `node --check app.js` for syntax. If a headless browser is available,
smoke-test that `window.OWL_DATA.length >= 40`, `window.PREY_DATA.length >= 15`,
and scoring returns sorted ranks.
