# owl-pellet-id codebase map

Static website identifying **which owl species produced a pellet**, what
prey remains it contains, and which animal left a dropping/scat — from
user-uploaded photos. Client-side only; GitHub Pages target. Sister of
`footprint-id` (shared architecture + matching engine).

## Layout

```
owl-pellet-id/
├── index.html   # single-page identifier UI
├── app.js       # heuristic engine: box-drag over photo → measured features
│                #   (HSV colour, dark-pixel fraction, …) + context → scores
├── style.css
├── data/
│   ├── owls.js       # owl profiles → window.OWL_DATA
│   ├── prey.js       # prey profiles → window.PREY_DATA
│   └── droppings.js  # dropping/scat profiles
│                     #   (all via <script> tags — no fetch; file:// works)
├── AGENTS.md  README.md
```

## Identification model

Heuristic (not ML): measured photo features (HSV colour, dark-pixel
fraction, elongation, gloss) + declared context → weighted fuzzy match
(`rangeScore`/`hueScore`/`scoreOwl`/`scorePrey` in `app.js`), scored only
on supplied evidence. Keep the engine conventions in sync with
`../docs/footprint-id/app.js`.
