#!/usr/bin/env node
/**
 * chart.mjs — render FAMA's numbers as a PNG in the letairun.com design.
 *
 *   node skills/x-guard/chart.mjs [--days 14] [--until YYYY-MM-DD] [--out chart.png] [--dark]
 *
 * --days N     show the last N days (default 14); one earlier row is fetched as the
 *              baseline so the first bar is a real day like the others
 * --until DAY  end the chart at that day (inclusive), e.g. yesterday's closed row when
 *              rendering in the morning; default: the newest row (today so far)
 * --dark       dark card; default is the light letairun.com design (--light still accepted)
 *
 * Reads GET $FAMA_SITE_URL/api/fama/metrics, draws two panels (views per day as
 * bars, followers as a line) into an HTML file and screenshots it with the
 * headless Chromium that ships in the Claude Code environment. Zero dependencies.
 * Attach the result with `guard.mjs post "…" --image chart.png`.
 */
import { writeFileSync, existsSync, readdirSync } from "node:fs";
import { spawnSync } from "node:child_process";
import path from "node:path";
import os from "node:os";

const SITE = (process.env.FAMA_SITE_URL || "https://www.letairun.com").replace(/\/$/, "");
const argv = process.argv.slice(2);
const flag = (name, dflt) => { const i = argv.indexOf(`--${name}`); return i >= 0 && argv[i + 1] ? argv[i + 1] : dflt; };
const DAYS = parseInt(flag("days", "14"), 10);
const UNTIL = flag("until", null);
const OUT = path.resolve(flag("out", "chart.png"));
// Reason: the site and the X card are light; dark stays available for a dark-mode reader.
const LIGHT = !argv.includes("--dark");

/**
 * Locate a headless Chromium binary.
 *
 * @returns {string} Path to the executable.
 */
function findChromium() {
  const candidates = [process.env.CHROMIUM_PATH, process.env.CHROME_PATH];
  const roots = [process.env.PLAYWRIGHT_BROWSERS_PATH, "/opt/pw-browsers", path.join(os.homedir(), ".cache/ms-playwright")].filter(Boolean);
  // Reason: headless_shell renders the viewport exactly; full chrome in headless mode
  // subtracts window chrome from --window-size and clips the bottom of the page.
  const shells = [], chromes = [];
  for (const root of roots) {
    if (!existsSync(root)) continue;
    for (const d of readdirSync(root)) {
      shells.push(path.join(root, d, "chrome-linux", "headless_shell"));
      chromes.push(path.join(root, d, "chrome-linux", "chrome"));
    }
  }
  candidates.push(...shells, ...chromes);
  candidates.push("/usr/bin/chromium", "/usr/bin/chromium-browser", "/usr/bin/google-chrome");
  const found = candidates.find((c) => c && existsSync(c));
  if (!found) throw new Error("No Chromium found; set CHROMIUM_PATH");
  return found;
}

/**
 * Build the HTML for the chart card.
 *
 * @param {Array<object>} rows - Daily metrics, oldest first.
 * @param {number} baseline - Cumulative impressions of the day before rows[0] (0 at launch).
 * @returns {string} HTML document.
 */
function html(rows, baseline) {
  const W = 1200, H = 675;
  const c = LIGHT
    ? { bg: "#f5f5f7", panel: "#ffffff", grid: "#d4d4de", text: "#1a1a2b", muted: "#6b6b80", accent: "#f59e0b", accent2: "#6366f1" }
    : { bg: "#0b0b14", panel: "#111120", grid: "#222236", text: "#f0f0f5", muted: "#b8b8c8", accent: "#f59e0b", accent2: "#6366f1" };
  // Reason: the site stores cumulative impressions; views per day is the difference
  // to the previous row, and for the first bar to the baseline row fetched before it.
  const views = rows.map((r, i) => Math.max(0, r.impressions - (i > 0 ? rows[i - 1].impressions : baseline)));
  const followers = rows.map((r) => r.followers);
  const labels = rows.map((r) => r.day.slice(5).replace("-", "/"));

  const panel = (x, y, w, h, title, draw) => `
    <g transform="translate(${x},${y})">
      <rect width="${w}" height="${h}" rx="8" fill="${c.panel}" stroke="${c.grid}"/>
      <text x="20" y="34" font-size="20" fill="${c.muted}">${title}</text>
      ${draw(w, h)}
    </g>`;

  const bars = (w, h) => {
    const px = 40, py = 60, pb = 44, innerW = w - px - 20, innerH = h - py - pb;
    const max = Math.max(...views, 1);
    const bw = innerW / views.length;
    let s = "";
    [0, 0.5, 1].forEach((t) => {
      const yy = py + innerH - t * innerH;
      s += `<line x1="${px}" x2="${w - 20}" y1="${yy}" y2="${yy}" stroke="${c.grid}"/><text x="${px - 8}" y="${yy + 5}" text-anchor="end" font-size="14" fill="${c.muted}">${Math.round(t * max)}</text>`;
    });
    views.forEach((v, i) => {
      const bh = (v / max) * innerH;
      s += `<rect x="${px + i * bw + bw * 0.2}" y="${py + innerH - bh}" width="${bw * 0.6}" height="${bh}" rx="3" fill="${c.accent}"/>`;
      if (views.length <= 16) s += `<text x="${px + i * bw + bw / 2}" y="${h - 16}" text-anchor="middle" font-size="13" fill="${c.muted}">${labels[i]}</text>`;
    });
    const last = views.length - 1;
    s += `<text x="${px + last * bw + bw / 2}" y="${py + innerH - (views[last] / max) * innerH - 8}" text-anchor="middle" font-size="16" fill="${c.text}">${views[last]}</text>`;
    return s;
  };

  const line = (w, h) => {
    const px = 40, py = 60, pb = 44, innerW = w - px - 20, innerH = h - py - pb;
    const max = Math.max(...followers, 1);
    const x = (i) => px + (followers.length === 1 ? innerW / 2 : (i / (followers.length - 1)) * innerW);
    const y = (v) => py + innerH - (v / max) * innerH;
    let s = "";
    [0, 0.5, 1].forEach((t) => {
      const yy = py + innerH - t * innerH;
      s += `<line x1="${px}" x2="${w - 20}" y1="${yy}" y2="${yy}" stroke="${c.grid}"/><text x="${px - 8}" y="${yy + 5}" text-anchor="end" font-size="14" fill="${c.muted}">${Math.round(t * max)}</text>`;
    });
    const d = followers.map((v, i) => `${i === 0 ? "M" : "L"}${x(i).toFixed(1)},${y(v).toFixed(1)}`).join(" ");
    s += `<path d="${d}" fill="none" stroke="${c.accent2}" stroke-width="3" stroke-linejoin="round" stroke-linecap="round"/>`;
    const last = followers.length - 1;
    s += `<circle cx="${x(last)}" cy="${y(followers[last])}" r="6" fill="${c.accent2}" stroke="${c.panel}" stroke-width="3"/>`;
    s += `<text x="${x(last) - 10}" y="${y(followers[last]) - 12}" text-anchor="end" font-size="16" fill="${c.text}">${followers[last]}</text>`;
    s += `<text x="${px}" y="${h - 16}" font-size="13" fill="${c.muted}">${labels[0]}</text><text x="${w - 20}" y="${h - 16}" text-anchor="end" font-size="13" fill="${c.muted}">${labels[last]}</text>`;
    return s;
  };

  const total = rows.length ? rows[rows.length - 1].impressions : 0;
  return `<!doctype html><html><head><meta charset="utf-8"><style>html,body{margin:0;width:${W}px;height:${H}px;background:${c.bg};overflow:hidden;font-family:"DejaVu Sans Mono","Liberation Mono",ui-monospace,monospace}</style></head><body>
<svg width="${W}" height="${H}" viewBox="0 0 ${W} ${H}" xmlns="http://www.w3.org/2000/svg" font-family="DejaVu Sans Mono, Liberation Mono, monospace">
  <rect x="0" y="0" width="${W}" height="6" fill="url(#g)"/>
  <defs><linearGradient id="g"><stop offset="0" stop-color="${c.accent}"/><stop offset="1" stop-color="${c.accent2}"/></linearGradient></defs>
  <text x="40" y="66" font-size="40" font-weight="700" fill="${c.accent}">FAMA</text>
  <text x="170" y="66" font-size="22" fill="${c.muted}">${rows.length} days · ${total} views total · ${followers[followers.length - 1] ?? 0} followers</text>
  ${panel(40, 100, 700, 520, "Views per day", bars)}
  ${panel(770, 100, 390, 520, "Followers", line)}
  <text x="${W - 40}" y="${H - 22}" text-anchor="end" font-size="18" fill="${c.accent2}">letairun.com</text>
</svg></body></html>`;
}

/**
 * Pick the rows to draw and the baseline for the first bar.
 *
 * @param {Array<object>} all - Every metrics row, oldest first.
 * @param {number} days - Days to show.
 * @param {string|null} until - Last day to include (YYYY-MM-DD) or null for all.
 * @returns {{rows: Array<object>, baseline: number}} Rows to draw and the prior cumulative count.
 */
export function selectRows(all, days, until) {
  if (!Number.isInteger(days) || days < 1) throw new Error("--days must be a positive integer");
  if (until && !/^\d{4}-\d{2}-\d{2}$/.test(until)) throw new Error("--until must be YYYY-MM-DD");
  const upTo = until ? all.filter((r) => r.day <= until) : all;
  if (!upTo.length) throw new Error(until ? `no metrics rows up to ${until}` : "no metrics rows yet");
  const rows = upTo.slice(-days);
  // Reason: the row before the window carries the cumulative count the first bar starts from;
  // when the window starts at launch there is none and the first bar is the launch day itself.
  const before = upTo[upTo.length - rows.length - 1];
  return { rows, baseline: before ? before.impressions : 0 };
}

async function main() {
  // Reason: the table is small (one row per day); fetch everything and cut locally so the
  // baseline row and --until are handled in one place.
  const res = await fetch(`${SITE}/api/fama/metrics?days=365&_=${Date.now()}`);
  if (!res.ok) throw new Error(`metrics request failed: HTTP ${res.status}`);
  const all = (await res.json()).metrics;
  if (!all?.length) throw new Error("no metrics rows yet");
  const { rows, baseline } = selectRows(all, DAYS, UNTIL);
  const htmlPath = path.join(os.tmpdir(), `fama-chart-${Date.now()}.html`);
  writeFileSync(htmlPath, html(rows, baseline));
  const bin = findChromium();
  const r = spawnSync(bin, ["--headless=new", "--no-sandbox", "--disable-gpu", "--hide-scrollbars", "--force-device-scale-factor=1",
    "--window-size=1200,675", `--screenshot=${OUT}`, `file://${htmlPath}`], { encoding: "utf8" });
  if (!existsSync(OUT)) throw new Error(`render failed: ${(r.stderr || "").split("\n").slice(-3).join(" ")}`);
  console.log(`📊 ${OUT} (${rows.length} days, ${rows[rows.length - 1].day})`);
}

// Reason: only run when executed directly, so tests can import selectRows.
if (process.argv[1] && path.resolve(process.argv[1]) === new URL(import.meta.url).pathname) {
  main().catch((e) => { console.error(`❌ ${e.message}`); process.exit(1); });
}
