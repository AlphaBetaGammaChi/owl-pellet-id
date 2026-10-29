/* Owl Pellet ID — client-side heuristic identifier.
 * No dependencies, no network: photos are analysed on a canvas, features are
 * scored against the knowledge bases in data/owls.js and data/prey.js.
 */
"use strict";

const state = {
  mode: null,          // "pellet" | "prey" | "dropping"
  image: null,         // HTMLImageElement
  box: null,           // {x,y,w,h} in canvas pixels
  features: null       // measured features
};

const $ = (id) => document.getElementById(id);

/* ---------- mode selection ---------- */

document.querySelectorAll(".mode-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    state.mode = btn.dataset.mode;
    document.querySelectorAll(".mode-btn").forEach((b) => b.classList.toggle("active", b === btn));
    $("contentsBox").classList.toggle("hidden", false);
    $("lenLabel").classList.toggle("hidden", state.mode === "prey");
    $("remainsLabel").classList.toggle("hidden", state.mode !== "prey");
    $("shapeLabel").classList.toggle("hidden", state.mode !== "dropping");
    $("lenText").textContent = state.mode === "dropping"
      ? "Dropping length / pellet diameter (mm) — measure or estimate"
      : "Pellet length (mm) — measure or estimate";
    updateIdentifyBtn();
  });
});

/* ---------- photo loading ---------- */

const dz = $("dropzone"), fileInput = $("fileInput");
dz.addEventListener("click", () => fileInput.click());
dz.addEventListener("keydown", (e) => { if (e.key === "Enter" || e.key === " ") fileInput.click(); });
dz.addEventListener("dragover", (e) => { e.preventDefault(); dz.classList.add("over"); });
dz.addEventListener("dragleave", () => dz.classList.remove("over"));
dz.addEventListener("drop", (e) => {
  e.preventDefault(); dz.classList.remove("over");
  if (e.dataTransfer.files[0]) loadImage(e.dataTransfer.files[0]);
});
fileInput.addEventListener("change", () => fileInput.files[0] && loadImage(fileInput.files[0]));

function loadImage(file) {
  const img = new Image();
  img.onload = () => {
    state.image = img;
    state.box = null; state.features = null;
    drawPhoto();
    $("cropper").classList.remove("hidden");
    $("featurePanel").classList.add("hidden");
    $("results").classList.add("hidden");
    updateIdentifyBtn();
    URL.revokeObjectURL(img.src);
  };
  img.src = URL.createObjectURL(file);
}

const photoCanvas = $("photoCanvas"), boxCanvas = $("boxCanvas");

function drawPhoto() {
  const maxW = Math.min(720, document.querySelector(".canvas-holder").clientWidth || 720);
  const scale = Math.min(1, maxW / state.image.naturalWidth);
  photoCanvas.width = boxCanvas.width = Math.round(state.image.naturalWidth * scale);
  photoCanvas.height = boxCanvas.height = Math.round(state.image.naturalHeight * scale);
  photoCanvas.getContext("2d").drawImage(state.image, 0, 0, photoCanvas.width, photoCanvas.height);
  boxCanvas.getContext("2d").clearRect(0, 0, boxCanvas.width, boxCanvas.height);
}

/* ---------- crop box ---------- */

let dragStart = null;
boxCanvas.addEventListener("pointerdown", (e) => {
  const p = canvasPos(e);
  dragStart = p; state.box = { x: p.x, y: p.y, w: 0, h: 0 };
  boxCanvas.setPointerCapture(e.pointerId);
});
boxCanvas.addEventListener("pointermove", (e) => {
  if (!dragStart) return;
  const p = canvasPos(e);
  state.box = {
    x: Math.min(dragStart.x, p.x), y: Math.min(dragStart.y, p.y),
    w: Math.abs(p.x - dragStart.x), h: Math.abs(p.y - dragStart.y)
  };
  drawBox();
  $("useBox").disabled = state.box.w < 8 || state.box.h < 8;
});
boxCanvas.addEventListener("pointerup", () => { dragStart = null; });

function canvasPos(e) {
  const r = boxCanvas.getBoundingClientRect();
  return { x: e.clientX - r.left, y: e.clientY - r.top };
}

function drawBox() {
  const ctx = boxCanvas.getContext("2d");
  ctx.clearRect(0, 0, boxCanvas.width, boxCanvas.height);
  if (!state.box) return;
  ctx.fillStyle = "rgba(0,0,0,0.45)";
  ctx.fillRect(0, 0, boxCanvas.width, boxCanvas.height);
  ctx.clearRect(state.box.x, state.box.y, state.box.w, state.box.h);
  ctx.drawImage(photoCanvas, state.box.x, state.box.y, state.box.w, state.box.h,
                state.box.x, state.box.y, state.box.w, state.box.h);
  ctx.strokeStyle = "#4caf50"; ctx.lineWidth = 2;
  ctx.strokeRect(state.box.x, state.box.y, state.box.w, state.box.h);
}

$("useWhole").addEventListener("click", () => {
  state.box = { x: 0, y: 0, w: photoCanvas.width, h: photoCanvas.height };
  analyse();
});
$("useBox").addEventListener("click", analyse);

/* ---------- image features ---------- */

function analyse() {
  const ctx = photoCanvas.getContext("2d");
  const { x, y, w, h } = state.box;
  const d = ctx.getImageData(x, y, w, h).data;

  let n = 0, hSum = 0, sSum = 0, vSum = 0, dark = 0, spec = 0, edgeSum = 0;
  const vs = new Float32Array(d.length / 4);

  for (let i = 0; i < d.length; i += 4) {
    const hsv = rgbToHsv(d[i], d[i + 1], d[i + 2]);
    vs[i / 4] = hsv.v;
    // Circular-safe hue mean via vector sum is overkill; store plain mean.
    hSum += hsv.h; sSum += hsv.s; vSum += hsv.v; n++;
    if (hsv.v < 35) dark++;
    if (hsv.v > 88 && hsv.s < 20) spec++; // bright, low-saturation = specular glint
  }
  // Cheap edge-density texture measure: mean horizontal gradient magnitude.
  let edges = 0;
  for (let row = 0; row < h; row++) {
    for (let col = 1; col < w; col++) {
      edges += Math.abs(vs[row * w + col] - vs[row * w + col - 1]);
    }
  }
  edgeSum = edges / Math.max(1, (w - 1) * h);

  // Elongation of the dark subject via its bounding box on a downsampled mask.
  const elongation = subjectElongation(ctx, x, y, w, h);

  state.features = {
    hue: hSum / n, sat: sSum / n, val: vSum / n,
    darkFrac: dark / n, specFrac: spec / n,
    edge: edgeSum, elongation
  };
  showFeatures();
  updateIdentifyBtn();
}

function subjectElongation(ctx, x, y, w, h) {
  // Segment "subject" as pixels darker than the median, take bounding box.
  const d = ctx.getImageData(x, y, w, h).data;
  const lum = [];
  for (let i = 0; i < d.length; i += 4)
    lum.push(0.299 * d[i] + 0.587 * d[i + 1] + 0.114 * d[i + 2]);
  const sorted = [...lum].sort((a, b) => a - b);
  const med = sorted[Math.floor(sorted.length / 2)];
  let minX = w, maxX = 0, minY = h, maxY = 0, cnt = 0;
  for (let row = 0; row < h; row++)
    for (let col = 0; col < w; col++)
      if (lum[row * w + col] < med) {
        cnt++;
        if (col < minX) minX = col; if (col > maxX) maxX = col;
        if (row < minY) minY = row; if (row > maxY) maxY = row;
      }
  if (cnt < w * h * 0.02) return w / Math.max(1, h); // no clear subject
  const bw = Math.max(1, maxX - minX), bh = Math.max(1, maxY - minY);
  return Math.max(bw, bh) / Math.min(bw, bh);
}

function rgbToHsv(r, g, b) {
  r /= 255; g /= 255; b /= 255;
  const mx = Math.max(r, g, b), mn = Math.min(r, g, b), d = mx - mn;
  let h = 0;
  if (d) {
    if (mx === r) h = ((g - b) / d) % 6;
    else if (mx === g) h = (b - r) / d + 2;
    else h = (r - g) / d + 4;
    h *= 60; if (h < 0) h += 360;
  }
  return { h, s: mx ? (d / mx) * 100 : 0, v: mx * 100 };
}

function showFeatures() {
  const f = state.features;
  const items = [
    `Dominant colour — hue ${f.hue.toFixed(0)}°, saturation ${f.sat.toFixed(0)}%, brightness ${f.val.toFixed(0)}%`,
    `Dark-pixel fraction: ${(f.darkFrac * 100).toFixed(0)}%`,
    `Specular glint (glossiness): ${(f.specFrac * 100).toFixed(1)}% — fresh barn-owl pellets score high`,
    `Texture (edge density): ${f.edge.toFixed(1)} — low = smooth, high = rough/felted`,
    `Elongation of dark region: ${f.elongation.toFixed(2)}× — long-eared/short-eared pellets are narrow`
  ];
  $("featureList").innerHTML = items.map((t) => `<li>${t}</li>`).join("");
  $("featurePanel").classList.remove("hidden");
}

/* ---------- matching ---------- */

function rangeScore(v, [lo, hi], padFrac = 0.25) {
  if (lo <= hi) {
    if (v >= lo && v <= hi) return 1;
    const pad = (hi - lo) * padFrac + 1;
    if (v < lo) return Math.max(0, 1 - (lo - v) / pad);
    return Math.max(0, 1 - (v - hi) / pad);
  }
  return 1;
}

function hueScore(h, [lo, hi]) {
  if (hi - lo >= 350) return 1; // profile says "any hue"
  // distance on the hue circle
  const mid = (lo + hi) / 2, span = (hi - lo) / 2;
  let d = Math.abs(h - mid) % 360; if (d > 180) d = 360 - d;
  return Math.max(0, 1 - Math.max(0, d - span) / 60);
}

function readContext() {
  const signs = [...document.querySelectorAll("#contentsBox input:checked")].map((c) => c.value);
  return {
    region: $("region").value,
    len: parseFloat($("pelletLen").value) || null,
    remains: parseFloat($("remainsLen").value) || null,
    shape: $("shape").value,
    fresh: $("freshness").value,
    signs
  };
}

function scoreOwl(o, f, c) {
  const w = o.weight;
  let total = 0, got = 0;
  const colour =
    hueScore(f ? f.hue : 0, o.hue) * 0.5 +
    (f ? rangeScore(f.sat, o.sat) * 0.25 + rangeScore(f.val, o.val) * 0.25 : 0);
  if (f) { total += w.colour * colour; got += w.colour; }
  if (f) {
    // gloss: compare measured specular fraction to expected, scaled 0–1.
    const gs = 1 - Math.min(1, Math.abs(f.specFrac * 10 - o.gloss * 3) / 3);
    total += w.gloss * Math.max(0, gs); got += w.gloss;
    total += w.elongation * rangeScore(f.elongation, o.elongation, 0.5);
    got += w.elongation;
  }
  if (c.len) { total += w.size * rangeScore(c.len, o.pelletLen, 0.4); got += w.size; }
  if (c.region !== "global") {
    const rs = o.regions.includes(c.region) || o.regions.includes("global") ? 1 : 0.15;
    total += w.region * rs; got += w.region;
  }
  if (c.signs.length) {
    const hit = c.signs.filter((s) => o.contents.includes(s)).length / c.signs.length;
    total += w.contents * hit; got += w.contents;
  }
  return got ? total / got : 0;
}

function scorePrey(p, f, c) {
  let total = 0, got = 0;
  if (c.signs.length) {
    const hit = c.signs.filter((s) => p.signs.includes(s)).length / c.signs.length;
    total += p.weight.signs * hit; got += p.weight.signs;
  }
  if (f) {
    total += p.weight.colour *
      (hueScore(f.hue, p.hue) * 0.6 + rangeScore(f.val, p.val) * 0.4);
    got += p.weight.colour;
  }
  if (c.remains && p.skullLen) {
    total += (p.weight.size || 1) * rangeScore(c.remains, p.skullLen, 0.4);
    got += (p.weight.size || 1);
  }
  return got ? total / got : 0;
}

function scoreDropping(d, f, c) {
  const w = d.weight;
  let total = 0, got = 0;
  if (f) {
    const colour =
      hueScore(f.hue, d.hue) * 0.5 +
      rangeScore(f.sat, d.sat) * 0.25 + rangeScore(f.val, d.val) * 0.25;
    total += w.colour * colour; got += w.colour;
  }
  if (c.len) { total += w.size * rangeScore(c.len, d.dropLen, 0.4); got += w.size; }
  if (c.shape && c.shape !== "unknown") {
    total += w.shape * (d.shape === c.shape ? 1 : 0.15); got += w.shape;
  }
  if (c.region !== "global") {
    const rs = d.regions.includes(c.region) || d.regions.includes("global") ? 1 : 0.15;
    total += w.region * rs; got += w.region;
  }
  if (c.signs.length) {
    const hit = c.signs.filter((s) => d.contents.includes(s)).length / c.signs.length;
    total += w.contents * hit; got += w.contents;
  }
  return got ? total / got : 0;
}

const MODE_MAP = {
  pellet:   { data: () => window.OWL_DATA,      scorer: scoreOwl },
  prey:     { data: () => window.PREY_DATA,     scorer: scorePrey },
  dropping: { data: () => window.DROPPING_DATA, scorer: scoreDropping }
};

$("identifyBtn").addEventListener("click", () => {
  const c = readContext();
  const { data, scorer } = MODE_MAP[state.mode];
  const profiles = data();
  const ranked = profiles
    .map((p) => ({ p, score: scorer(p, state.features, c) }))
    .sort((a, b) => b.score - a.score)
    .slice(0, 4);
  renderResults(ranked);
});

function renderResults(ranked) {
  $("resultList").innerHTML = ranked
    .map(({ p, score }) => `
      <div class="result">
        <div class="result-head">
          <strong>${p.name}</strong> <em>${p.latin}</em>
          <span class="score">${(score * 100).toFixed(0)}%</span>
        </div>
        <div class="bar"><div style="width:${(score * 100).toFixed(0)}%"></div></div>
        <p>${p.notes || p.keys}</p>
        ${extraLine(p)}
      </div>`)
    .join("");
  $("results").classList.remove("hidden");
  $("results").scrollIntoView({ behavior: "smooth", block: "nearest" });
}

// Extra reference line under each result: pellet size for owls,
// estimated prey size/mass for prey remains.
function extraLine(p) {
  if (p.pelletLen)
    return `<p class="ref">Typical pellet length: ${p.pelletLen[0]}–${p.pelletLen[1]} mm.</p>`;
  if (p.dropLen)
    return `<p class="ref">Typical size: ${p.dropLen[0]}–${p.dropLen[1]} mm; shape: ${p.shape}.</p>`;
  const bits = [];
  if (p.skullLen) bits.push(`skull ${p.skullLen[0]}–${p.skullLen[1]} mm`);
  if (p.massG) bits.push(`live mass ~${p.massG[0]}–${p.massG[1]} g`);
  if (p.lenKeys) bits.push(p.lenKeys);
  return bits.length ? `<p class="ref">Size reference — ${bits.join("; ")}.</p>` : "";
}

/* ---------- enable/disable identify ---------- */

["region", "pelletLen", "remainsLen", "shape", "freshness"].forEach((id) => $(id).addEventListener("input", updateIdentifyBtn));
document.querySelectorAll("#contentsBox input").forEach((c) =>
  c.addEventListener("change", updateIdentifyBtn));

function updateIdentifyBtn() {
  const hasContext = $("pelletLen").value || $("remainsLen").value ||
    $("region").value !== "global" || $("shape").value !== "unknown" ||
    document.querySelector("#contentsBox input:checked");
  $("identifyBtn").disabled = !(state.mode && (state.features || hasContext));
}
