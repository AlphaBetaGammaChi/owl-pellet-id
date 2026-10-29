# Owl Pellet ID

A static website that helps identify **which owl species produced a pellet** and
**what prey remains it contains** — from photographs uploaded by the user. It is
designed for GitHub Pages: there is no server, no build step and no dependency.
Everything runs client-side in the browser; photos never leave the visitor's device.

## Quick start

- **Local:** open `index.html` in a browser, or serve the folder
  (`python3 -m http.server`) and visit `http://localhost:8000`.
- **GitHub Pages:** push this repo to GitHub, then
  *Settings → Pages → Source: Deploy from a branch → `main` / root*. The site will
  be live at `https://<user>.github.io/<repo>/` within a minute or two.

## How identification works

This is an honest **heuristic identifier**, not a trained machine-learning model.
Three evidence streams are combined:

1. **Measured photo features** (`app.js`) — the user drags a box around the pellet
   or the dissected remains, and the app measures:
   - dominant colour in HSV space (hue, saturation, brightness),
   - dark-pixel fraction,
   - specular-glint fraction (a proxy for the characteristic *gloss* of a fresh
     barn-owl pellet),
   - edge density (smooth vs. felted/rough texture),
   - elongation of the dark subject region (bounding-box aspect ratio).
2. **User context** — region (Europe/UK, North America, global), pellet length in
   mm, freshness, and a checklist of visible contents (fur, bones, skulls, teeth,
   feathers, beak, insect pieces, earthworm/soil, fish).
3. **Curated knowledge bases** —
   - `data/owls.js`: 10 owl species profiles (pellet size range, HSV envelope,
     expected gloss, elongation, typical contents, regions, field notes),
   - `data/prey.js`: 9 prey-remains profiles (visible-content signs, colour
     character, diagnostic keys such as the red-tipped teeth of shrews and the
     rootless ridged molars of voles).

Each profile carries per-feature weights; the matcher computes a weighted fuzzy
score (0–1) per candidate and presents the top matches with explanatory notes.
Scores are *relative confidence for ranking*, not probabilities.

A photo-free **guided key** (classic dichotomous decision steps) is also built in
as a fallback.

## Repository layout

```
index.html        single-page app (mode → photo → context → results)
style.css         dark theme styling
app.js            image feature extraction + weighted matching engine
data/owls.js      owl-species pellet profiles (window.OWL_DATA)
data/prey.js      prey-remains profiles (window.PREY_DATA)
README.md         this file
AGENTS.md         conventions for coding agents working on this repo
.devin/skills/    agent skill: owl-pellet-id
```

## Extending the knowledge base

To add an owl species or prey type, append an entry to `data/owls.js` /
`data/prey.js` following the documented field schema in those files — no code
changes are needed. Useful reference points when writing a new profile:

- fresh barn-owl pellets: black, glossy/varnished, 30–80 mm;
- tawny owl: grey-brown, matt, felted, crumbles easily, mixed diet;
- little owl / screech-owl: small pellets rich in shiny beetle chitin;
- long-eared/short-eared: elongated pellets; setting (roost vs. moor) matters;
- eagle-owl / great horned: >70 mm, large bones or bird remains.

## Limitations

- Colour measurement depends on the photo's white balance; encourage users to
  photograph on a plain, neutral background in daylight.
- Without a scale reference the app cannot infer absolute size — hence the
  manual pellet-length input.
- A real classifier (e.g. a fine-tuned MobileNet in TensorFlow.js) would need a
  labelled pellet image dataset; the knowledge-base design leaves room to bolt
  one on later (add a `modelScore` term into `scoreOwl`).
- Always confirm a consequential ID with a field guide or a local expert.
