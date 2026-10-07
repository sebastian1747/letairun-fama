#!/usr/bin/env node
/**
 * motion.mjs — render a short animation as a GIF for X, in the letairun.com design.
 *
 *   node skills/x-guard/motion.mjs [--template views] [--days 14] [--until YYYY-MM-DD]
 *                                  [--html page.html] [--fps 10] [--seconds 8]
 *                                  [--width 1200] [--height 675] [--out motion.gif] [--dark]
 *
 * Two ways to get an animation:
 *   --template views   the built-in one: views per day grow bar by bar, followers as a line
 *   --html page.html   any page you write that defines `window.setFrame(i, n)` and draws
 *                      frame i of n synchronously (CSS transitions off; drive by i, not time)
 *
 * The page is driven frame by frame through Chromium's DevTools pipe (no network, no
 * extra packages), each frame is captured as PNG, and the frames are written as one
 * GIF with a shared 256-colour palette. X accepts GIFs up to 15 MB, 1280×1080 and 350
 * frames; it converts them to a looping video. Attach with
 * `guard.mjs post "…" --video motion.gif`.
 */
import { spawn } from "node:child_process";
import { writeFileSync, readFileSync, existsSync, readdirSync } from "node:fs";
import { inflateSync } from "node:zlib";
import path from "node:path";
import os from "node:os";
import { selectRows } from "./chart.mjs";

const SITE = (process.env.FAMA_SITE_URL || "https://www.letairun.com").replace(/\/$/, "");
const argv = process.argv.slice(2);
const flag = (name, dflt) => { const i = argv.indexOf(`--${name}`); return i >= 0 && argv[i + 1] ? argv[i + 1] : dflt; };
const TEMPLATE = flag("template", "views");
const HTML = flag("html", null);
const DAYS = parseInt(flag("days", "14"), 10);
const UNTIL = flag("until", null);
const FPS = parseInt(flag("fps", "10"), 10);
const SECONDS = parseFloat(flag("seconds", "8"));
const WIDTH = parseInt(flag("width", "1200"), 10);
const HEIGHT = parseInt(flag("height", "675"), 10);
const OUT = path.resolve(flag("out", "motion.gif"));
const LIGHT = !argv.includes("--dark");
/** X's limits for GIF uploads. */
export const GIF_LIMITS = { bytes: 15 * 1024 * 1024, frames: 350, width: 1280, height: 1080 };

// ---------------------------------------------------------------- Chromium over the DevTools pipe

/**
 * Locate a headless Chromium binary (same search as chart.mjs).
 *
 * @returns {string} Path to the executable.
 */
function findChromium() {
  const candidates = [process.env.CHROMIUM_PATH, process.env.CHROME_PATH];
  const roots = [process.env.PLAYWRIGHT_BROWSERS_PATH, "/opt/pw-browsers", path.join(os.homedir(), ".cache/ms-playwright")].filter(Boolean);
  const shells = [], chromes = [];
  for (const root of roots) {
    if (!existsSync(root)) continue;
    for (const d of readdirSync(root)) {
      shells.push(path.join(root, d, "chrome-linux", "headless_shell"));
      chromes.push(path.join(root, d, "chrome-linux", "chrome"));
    }
  }
  candidates.push(...shells, ...chromes, "/usr/bin/chromium", "/usr/bin/chromium-browser", "/usr/bin/google-chrome");
  const bin = candidates.find((c) => c && existsSync(c));
  if (!bin) throw new Error("no Chromium found (set CHROMIUM_PATH)");
  return bin;
}

/**
 * Start Chromium with `--remote-debugging-pipe` and return a tiny CDP client.
 * Reason: the pipe needs no port and no WebSocket, so proxies and NODE_USE_ENV_PROXY
 * cannot get in the way.
 *
 * @param {number} width - Viewport width.
 * @param {number} height - Viewport height.
 * @returns {Promise<{send: Function, close: Function}>} Client bound to one page session.
 */
export async function openPage(width, height) {
  const child = spawn(findChromium(), [
    "--headless=new", "--no-sandbox", "--disable-gpu", "--hide-scrollbars", "--force-device-scale-factor=1",
    "--remote-debugging-pipe", `--window-size=${width},${height}`,
  ], { stdio: ["ignore", "ignore", "pipe", "pipe", "pipe"] });
  const inp = child.stdio[3], out = child.stdio[4];
  let nextId = 0, buf = "";
  const pending = new Map();
  out.on("data", (d) => {
    buf += d.toString();
    let i;
    while ((i = buf.indexOf("\0")) >= 0) {
      const msg = JSON.parse(buf.slice(0, i));
      buf = buf.slice(i + 1);
      if (msg.id && pending.has(msg.id)) { pending.get(msg.id)(msg); pending.delete(msg.id); }
    }
  });
  const raw = (method, params = {}, sessionId) => new Promise((resolve, reject) => {
    const id = ++nextId;
    pending.set(id, (m) => (m.error ? reject(new Error(`${method}: ${JSON.stringify(m.error)}`)) : resolve(m.result)));
    inp.write(JSON.stringify({ id, method, params, sessionId }) + "\0");
  });
  const { targetId } = await raw("Target.createTarget", { url: "about:blank" });
  const { sessionId } = await raw("Target.attachToTarget", { targetId, flatten: true });
  await raw("Page.enable", {}, sessionId);
  await raw("Emulation.setDeviceMetricsOverride", { width, height, deviceScaleFactor: 1, mobile: false }, sessionId);
  return {
    send: (method, params) => raw(method, params, sessionId),
    close: () => child.kill(),
  };
}

// ---------------------------------------------------------------- PNG → RGBA

/**
 * Decode an 8-bit non-interlaced PNG (what Chromium screenshots are) to RGBA.
 *
 * @param {Buffer} png - PNG bytes.
 * @returns {{width: number, height: number, rgba: Buffer}} Pixels, 4 bytes each.
 */
export function decodePng(png) {
  let pos = 8, width = 0, height = 0, colorType = 6;
  const idat = [];
  while (pos < png.length) {
    const len = png.readUInt32BE(pos);
    const type = png.toString("ascii", pos + 4, pos + 8);
    const body = png.subarray(pos + 8, pos + 8 + len);
    if (type === "IHDR") { width = body.readUInt32BE(0); height = body.readUInt32BE(4); colorType = body[9]; }
    else if (type === "IDAT") idat.push(body);
    pos += 12 + len;
  }
  const bpp = colorType === 6 ? 4 : colorType === 2 ? 3 : null;
  if (!bpp) throw new Error(`unsupported PNG colour type ${colorType}`);
  const raw = inflateSync(Buffer.concat(idat));
  const stride = width * bpp;
  const rgba = Buffer.alloc(width * height * 4);
  let prev = Buffer.alloc(stride);
  for (let y = 0; y < height; y++) {
    const filter = raw[y * (stride + 1)];
    const row = Buffer.from(raw.subarray(y * (stride + 1) + 1, (y + 1) * (stride + 1)));
    for (let i = 0; i < stride; i++) {
      const a = i >= bpp ? row[i - bpp] : 0, b = prev[i], c = i >= bpp ? prev[i - bpp] : 0;
      let v = row[i];
      if (filter === 1) v += a;
      else if (filter === 2) v += b;
      else if (filter === 3) v += (a + b) >> 1;
      else if (filter === 4) { const p = a + b - c, pa = Math.abs(p - a), pb = Math.abs(p - b), pc = Math.abs(p - c); v += pa <= pb && pa <= pc ? a : pb <= pc ? b : c; }
      row[i] = v & 255;
    }
    for (let x = 0; x < width; x++) {
      const o = (y * width + x) * 4, s = x * bpp;
      rgba[o] = row[s]; rgba[o + 1] = row[s + 1]; rgba[o + 2] = row[s + 2]; rgba[o + 3] = bpp === 4 ? row[s + 3] : 255;
    }
    prev = row;
  }
  return { width, height, rgba };
}

// ---------------------------------------------------------------- palette + GIF

/**
 * Build a palette of at most 256 colours by median cut over sampled pixels.
 *
 * @param {Buffer[]} frames - RGBA buffers.
 * @param {number} step - Sample every n-th pixel.
 * @returns {number[][]} Palette as [r, g, b] rows.
 */
export function buildPalette(frames, step = 7) {
  const seen = new Map();
  for (const f of frames) for (let i = 0; i < f.length; i += 4 * step) {
    const key = (f[i] << 16) | (f[i + 1] << 8) | f[i + 2];
    seen.set(key, (seen.get(key) || 0) + 1);
  }
  const colours = [...seen.keys()].map((k) => [k >> 16, (k >> 8) & 255, k & 255]);
  if (colours.length <= 256) return colours;
  // Reason: median cut keeps the few flat design colours exact and spends the rest on anti-aliasing
  let boxes = [colours];
  while (boxes.length < 256) {
    boxes.sort((a, b) => spread(b) - spread(a));
    const box = boxes.shift();
    if (box.length < 2) { boxes.push(box); break; }
    const axis = widestAxis(box);
    box.sort((p, q) => p[axis] - q[axis]);
    const mid = box.length >> 1;
    boxes.push(box.slice(0, mid), box.slice(mid));
  }
  return boxes.map((box) => box.reduce((acc, p) => [acc[0] + p[0], acc[1] + p[1], acc[2] + p[2]], [0, 0, 0]).map((v) => Math.round(v / box.length)));
}
function widestAxis(box) {
  const min = [255, 255, 255], max = [0, 0, 0];
  for (const p of box) for (let k = 0; k < 3; k++) { if (p[k] < min[k]) min[k] = p[k]; if (p[k] > max[k]) max[k] = p[k]; }
  const r = [max[0] - min[0], max[1] - min[1], max[2] - min[2]];
  return r.indexOf(Math.max(...r));
}
function spread(box) { const a = widestAxis(box); let lo = 255, hi = 0; for (const p of box) { if (p[a] < lo) lo = p[a]; if (p[a] > hi) hi = p[a]; } return (hi - lo) * box.length; }

/**
 * Map RGBA pixels to palette indices (nearest colour, cached per distinct colour).
 *
 * @param {Buffer} rgba - Pixels.
 * @param {number[][]} palette - Palette rows.
 * @param {Map<number, number>} cache - Shared lookup cache.
 * @returns {Uint8Array} One index per pixel.
 */
export function indexFrame(rgba, palette, cache) {
  const out = new Uint8Array(rgba.length / 4);
  for (let i = 0, p = 0; i < rgba.length; i += 4, p++) {
    const key = (rgba[i] << 16) | (rgba[i + 1] << 8) | rgba[i + 2];
    let idx = cache.get(key);
    if (idx === undefined) {
      let best = 0, bd = Infinity;
      for (let j = 0; j < palette.length; j++) {
        const d = (palette[j][0] - rgba[i]) ** 2 + (palette[j][1] - rgba[i + 1]) ** 2 + (palette[j][2] - rgba[i + 2]) ** 2;
        if (d < bd) { bd = d; best = j; }
      }
      idx = best; cache.set(key, idx);
    }
    out[p] = idx;
  }
  return out;
}

/**
 * LZW-compress one frame of palette indices into GIF sub-blocks.
 *
 * @param {Uint8Array} indices - Pixel indices.
 * @param {number} minCodeSize - 2..8, from the palette size.
 * @returns {Buffer} Image data block (minCodeSize byte, sub-blocks, terminator).
 */
export function lzwEncode(indices, minCodeSize) {
  const clear = 1 << minCodeSize, eoi = clear + 1;
  const bytes = [];
  let bitBuf = 0, bitLen = 0;
  const emit = (code, size) => { bitBuf |= code << bitLen; bitLen += size; while (bitLen >= 8) { bytes.push(bitBuf & 255); bitBuf >>>= 8; bitLen -= 8; } };
  let dict = new Map(), next = eoi + 1, codeSize = minCodeSize + 1;
  const reset = () => { dict = new Map(); next = eoi + 1; codeSize = minCodeSize + 1; };
  emit(clear, codeSize);
  let prefix = indices[0];
  for (let i = 1; i < indices.length; i++) {
    const k = indices[i], key = prefix * 4096 + k;
    const found = dict.get(key);
    if (found !== undefined) { prefix = found; continue; }
    emit(prefix, codeSize);
    if (next < 4096) { dict.set(key, next++); if (next - 1 === 1 << codeSize && codeSize < 12) codeSize++; }
    else { emit(clear, codeSize); reset(); }
    prefix = k;
  }
  emit(prefix, codeSize); emit(eoi, codeSize);
  if (bitLen > 0) bytes.push(bitBuf & 255);
  const out = [minCodeSize];
  for (let i = 0; i < bytes.length; i += 255) { const chunk = bytes.slice(i, i + 255); out.push(chunk.length, ...chunk); }
  out.push(0);
  return Buffer.from(out);
}

/**
 * Assemble a looping GIF89a from indexed frames.
 *
 * @param {{width: number, height: number, frames: Uint8Array[], palette: number[][], delayCs: number}} g - Frames and palette.
 * @returns {Buffer} GIF bytes.
 */
export function encodeGif({ width, height, frames, palette, delayCs }) {
  let bits = 1; while (1 << bits < palette.length) bits++;
  bits = Math.max(bits, 2);
  const table = Buffer.alloc(3 * (1 << bits));
  palette.forEach((c, i) => { table[i * 3] = c[0]; table[i * 3 + 1] = c[1]; table[i * 3 + 2] = c[2]; });
  const parts = [Buffer.from("GIF89a", "ascii")];
  const lsd = Buffer.alloc(7); lsd.writeUInt16LE(width, 0); lsd.writeUInt16LE(height, 2); lsd[4] = 0x80 | (bits - 1); lsd[5] = 0; lsd[6] = 0;
  parts.push(lsd, table, Buffer.from([0x21, 0xff, 0x0b, ...Buffer.from("NETSCAPE2.0", "ascii"), 0x03, 0x01, 0x00, 0x00, 0x00]));
  for (const f of frames) {
    const gce = Buffer.from([0x21, 0xf9, 0x04, 0x00, delayCs & 255, delayCs >> 8, 0x00, 0x00]);
    const desc = Buffer.alloc(10); desc[0] = 0x2c; desc.writeUInt16LE(0, 1); desc.writeUInt16LE(0, 3); desc.writeUInt16LE(width, 5); desc.writeUInt16LE(height, 7); desc[9] = 0;
    parts.push(gce, desc, lzwEncode(f, bits));
  }
  parts.push(Buffer.from([0x3b]));
  return Buffer.concat(parts);
}

// ---------------------------------------------------------------- the built-in template

/**
 * HTML for the "views" animation: bars grow one day at a time, followers as a line.
 * The page defines window.setFrame(i, n) and draws everything from i.
 *
 * @param {Array<object>} rows - Daily metrics, oldest first.
 * @param {number} baseline - Cumulative impressions before rows[0].
 * @returns {string} HTML document.
 */
export function viewsTemplate(rows, baseline) {
  const c = LIGHT
    ? { bg: "#f5f5f7", panel: "#ffffff", grid: "#d4d4de", text: "#1a1a2b", muted: "#6b6b80", accent: "#f59e0b", accent2: "#6366f1" }
    : { bg: "#0b0b14", panel: "#111120", grid: "#222236", text: "#f0f0f5", muted: "#b8b8c8", accent: "#f59e0b", accent2: "#6366f1" };
  const views = rows.map((r, i) => Math.max(0, r.impressions - (i > 0 ? rows[i - 1].impressions : baseline)));
  const data = JSON.stringify({ labels: rows.map((r) => r.day.slice(5).replace("-", "/")), views, followers: rows.map((r) => r.followers), total: rows.length ? rows[rows.length - 1].impressions : 0 });
  return `<!doctype html><html><head><meta charset="utf-8"><style>
  html,body{margin:0;background:${c.bg};font-family:ui-monospace,SFMono-Regular,Menlo,monospace;color:${c.text}}
  svg{display:block}</style></head><body>
<svg id="s" width="${WIDTH}" height="${HEIGHT}" viewBox="0 0 ${WIDTH} ${HEIGHT}" xmlns="http://www.w3.org/2000/svg"></svg>
<script>
const D=${data}, C=${JSON.stringify(c)}, W=${WIDTH}, H=${HEIGHT};
const n=D.views.length, maxV=Math.max(1,...D.views), maxF=Math.max(1,...D.followers);
const ease=t=>1-Math.pow(1-t,3);
function panel(x,y,w,h,title,inner){return \`<rect x="\${x}" y="\${y}" width="\${w}" height="\${h}" rx="12" fill="\${C.panel}" stroke="\${C.grid}"/><text x="\${x+22}" y="\${y+36}" font-size="22" fill="\${C.muted}">\${title}</text>\${inner}\`}
window.setFrame=function(i,total){
  // Reason: frame i reveals day k = i*n/total with the current day's bar still growing; the last 15% of frames hold the finished chart
  const reveal=Math.min(n, (i/(total*0.85))*n);
  const k=Math.floor(reveal), frac=ease(reveal-k);
  const L=40, T=100, PW=700, PH=520, FX=770, FW=390;
  const plotX=L+90, plotW=PW-110, plotY=T+60, plotH=PH-120, bw=plotW/n*0.6, gap=plotW/n;
  let bars="";
  for(let d=0; d<n; d++){
    let v=D.views[d]; if(d>k) v=0; else if(d===k) v*=frac;
    const h=v/maxV*plotH, x=plotX+d*gap+(gap-bw)/2, y=plotY+plotH-h;
    bars+=\`<rect x="\${x}" y="\${y}" width="\${bw}" height="\${h}" rx="4" fill="\${C.accent}"/>\`;
    if(d<=k) bars+=\`<text x="\${x+bw/2}" y="\${plotY+plotH+24}" font-size="14" text-anchor="middle" fill="\${C.muted}">\${D.labels[d]}</text>\`;
    if(d<k || (d===k && frac>0.95)) bars+=\`<text x="\${x+bw/2}" y="\${y-8}" font-size="16" text-anchor="middle" fill="\${C.text}">\${D.views[d]}</text>\`;
  }
  const axis=\`<line x1="\${plotX}" y1="\${plotY+plotH}" x2="\${plotX+plotW}" y2="\${plotY+plotH}" stroke="\${C.grid}"/><text x="\${plotX-10}" y="\${plotY+6}" font-size="14" text-anchor="end" fill="\${C.muted}">\${maxV}</text><text x="\${plotX-10}" y="\${plotY+plotH+6}" font-size="14" text-anchor="end" fill="\${C.muted}">0</text>\`;
  const fx=FX+40, fw=FW-70, fy=T+60, fh=PH-120;
  let pts=[];
  for(let d=0; d<=Math.min(k,n-1); d++){ pts.push([fx+d*(fw/Math.max(1,n-1)), fy+fh-D.followers[d]/maxF*fh]); }
  if(k<n-1 && frac>0){ const d=k+1, p=[fx+d*(fw/Math.max(1,n-1)), fy+fh-D.followers[d]/maxF*fh], q=pts[pts.length-1]; pts.push([q[0]+(p[0]-q[0])*frac, q[1]+(p[1]-q[1])*frac]); }
  const line=pts.length>1?\`<polyline points="\${pts.map(p=>p.join(',')).join(' ')}" fill="none" stroke="\${C.accent2}" stroke-width="4"/>\`:"";
  const last=pts[pts.length-1]||[fx,fy+fh];
  const dot=\`<circle cx="\${last[0]}" cy="\${last[1]}" r="6" fill="\${C.accent2}"/><text x="\${last[0]}" y="\${last[1]-14}" font-size="18" text-anchor="middle" fill="\${C.text}">\${D.followers[Math.min(k,n-1)]}</text>\`;
  const faxis=\`<line x1="\${fx}" y1="\${fy+fh}" x2="\${fx+fw}" y2="\${fy+fh}" stroke="\${C.grid}"/><text x="\${fx-10}" y="\${fy+fh+6}" font-size="14" text-anchor="end" fill="\${C.muted}">0</text><text x="\${fx-10}" y="\${fy+6}" font-size="14" text-anchor="end" fill="\${C.muted}">\${maxF}</text>\`;
  const shown=D.views.slice(0,k+1).reduce((a,b,d)=>a+(d===k?Math.round(b*frac):b),0);
  const head=\`<rect width="\${W}" height="6" fill="url(#g)"/><defs><linearGradient id="g"><stop offset="0" stop-color="\${C.accent}"/><stop offset="1" stop-color="\${C.accent2}"/></linearGradient></defs><text x="40" y="66" font-size="36" font-weight="bold" fill="\${C.accent}">FAMA</text><text x="170" y="66" font-size="22" fill="\${C.muted}">\${Math.min(k+1,n)} of \${n} days · \${shown} views · \${D.followers[Math.min(k,n-1)]} followers</text>\`;
  document.getElementById('s').innerHTML=head+panel(L,T,PW,PH,"Views per day",axis+bars)+panel(FX,T,FW,PH,"Followers",faxis+line+dot)+\`<text x="\${W-40}" y="\${H-22}" text-anchor="end" font-size="18" fill="\${C.accent2}">letairun.com</text>\`;
};
window.setFrame(0,1);
</script></body></html>`;
}

// ---------------------------------------------------------------- main

/**
 * Render the frames of a page and write the GIF.
 *
 * @param {string} htmlPath - Page defining window.setFrame(i, n).
 * @param {object} o - { fps, seconds, width, height, out }.
 * @returns {Promise<{frames: number, bytes: number}>} What was written.
 */
export async function renderGif(htmlPath, o) {
  const total = Math.round(o.fps * o.seconds);
  if (total > GIF_LIMITS.frames) throw new Error(`${total} frames exceeds X's limit of ${GIF_LIMITS.frames}; lower --fps or --seconds`);
  if (o.width > GIF_LIMITS.width || o.height > GIF_LIMITS.height) throw new Error(`${o.width}×${o.height} exceeds X's GIF limit of ${GIF_LIMITS.width}×${GIF_LIMITS.height}`);
  const page = await openPage(o.width, o.height);
  const rgbaFrames = [];
  try {
    await page.send("Page.navigate", { url: `file://${htmlPath}` });
    await new Promise((r) => setTimeout(r, 400));
    const probe = await page.send("Runtime.evaluate", { expression: "typeof window.setFrame" });
    if (probe.result?.value !== "function") throw new Error("the page does not define window.setFrame(i, n)");
    for (let i = 0; i < total; i++) {
      // Reason: wait one animation frame after setFrame so the paint is on screen before the capture
      await page.send("Runtime.evaluate", { expression: `new Promise(r=>{window.setFrame(${i},${total});requestAnimationFrame(()=>requestAnimationFrame(r))})`, awaitPromise: true });
      const { data } = await page.send("Page.captureScreenshot", { format: "png" });
      rgbaFrames.push(decodePng(Buffer.from(data, "base64")).rgba);
    }
  } finally { page.close(); }
  const palette = buildPalette(rgbaFrames);
  const cache = new Map();
  const frames = rgbaFrames.map((f) => indexFrame(f, palette, cache));
  const gif = encodeGif({ width: o.width, height: o.height, frames, palette, delayCs: Math.max(2, Math.round(100 / o.fps)) });
  if (gif.length > GIF_LIMITS.bytes) throw new Error(`GIF is ${(gif.length / 1048576).toFixed(1)} MB, over X's 15 MB; fewer frames or a smaller size`);
  writeFileSync(o.out, gif);
  return { frames: total, bytes: gif.length };
}

async function main() {
  let htmlPath = HTML ? path.resolve(HTML) : null;
  if (!htmlPath) {
    if (TEMPLATE !== "views") throw new Error(`unknown template ${TEMPLATE}; use --template views or --html page.html`);
    const res = await fetch(`${SITE}/api/fama/metrics?days=365&_=${Date.now()}`);
    if (!res.ok) throw new Error(`metrics request failed: HTTP ${res.status}`);
    const all = (await res.json()).metrics;
    if (!all?.length) throw new Error("no metrics rows yet");
    const { rows, baseline } = selectRows(all, DAYS, UNTIL);
    htmlPath = path.join(os.tmpdir(), `fama-motion-${Date.now()}.html`);
    writeFileSync(htmlPath, viewsTemplate(rows, baseline));
  }
  const r = await renderGif(htmlPath, { fps: FPS, seconds: SECONDS, width: WIDTH, height: HEIGHT, out: OUT });
  console.log(`🎞️  ${OUT} (${r.frames} frames at ${FPS} fps, ${(r.bytes / 1024).toFixed(0)} kB)`);
}

// Reason: only run when executed directly, so tests can import the encoder.
if (process.argv[1] && path.resolve(process.argv[1]) === new URL(import.meta.url).pathname) {
  main().catch((e) => { console.error(`❌ ${e.message}`); process.exit(1); });
}
