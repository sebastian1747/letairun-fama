#!/usr/bin/env node
/**
 * x-guard — FAMA's only way to write on X.
 *
 * Every write (post, reply, follow) is first submitted to letairun.com
 * (POST /api/fama/budget). Only if the website says "allowed" is Kolibri called,
 * and the result is then recorded (POST /api/fama/posts). Helper commands cover
 * logging, status and metrics so a session needs no raw curl.
 *
 * Zero dependencies. Node >= 18.
 */
import { spawnSync } from "node:child_process";
import { fileURLToPath } from "node:url";
import path from "node:path";

const SITE = (process.env.FAMA_SITE_URL || "https://www.letairun.com").replace(/\/$/, "");
const KEY = process.env.FAMA_API_KEY;
const DRY = process.env.FAMA_DRY_RUN === "1";
const MODEL = process.env.FAMA_MODEL || "fable";
const HERE = path.dirname(fileURLToPath(import.meta.url));
const KOLIBRI = path.join(HERE, "..", "kolibri", "kolibri.mjs");

const [command, ...argv] = process.argv.slice(2);

/**
 * Split argv into positional args and --flags (flag without value = true).
 *
 * @param {string[]} args - Raw arguments.
 * @returns {{pos: string[], flags: Record<string, string|boolean>}} Parsed arguments.
 */
function parse(args) {
  const pos = [];
  const flags = {};
  for (let i = 0; i < args.length; i++) {
    const a = args[i];
    if (a.startsWith("--")) {
      const name = a.slice(2);
      const next = args[i + 1];
      if (next !== undefined && !next.startsWith("--")) { flags[name] = next; i++; } else flags[name] = true;
    } else pos.push(a);
  }
  return { pos, flags };
}

/**
 * Call the letairun FAMA API.
 *
 * @param {string} method - HTTP method.
 * @param {string} route - Path under /api/fama.
 * @param {object} [body] - JSON body.
 * @param {boolean} [auth=true] - Send the X-FAMA-Key header.
 * @returns {Promise<{status: number, data: any}>} Response.
 */
async function api(method, route, body, auth = true) {
  if (auth && !KEY) fail("Missing FAMA_API_KEY");
  const res = await fetch(`${SITE}/api/fama/${route}`, {
    method,
    headers: { "Content-Type": "application/json", ...(auth ? { "X-FAMA-Key": KEY } : {}) },
    body: body ? JSON.stringify(body) : undefined,
  });
  const data = await res.json().catch(() => ({}));
  return { status: res.status, data };
}

/**
 * Session id: from FAMA_SESSION_ID or derived from the current New York time (FAMA's home zone).
 *
 * @returns {string} Session id.
 */
function sessionId() {
  if (process.env.FAMA_SESSION_ID) return process.env.FAMA_SESSION_ID;
  const d = new Date().toLocaleString("sv-SE", { timeZone: "America/New_York" }); // YYYY-MM-DD HH:MM:SS
  return `fama-${d.slice(0, 10)}-${d.slice(11, 13)}${d.slice(14, 16)}`;
}

/**
 * Calendar date in FAMA's home zone (America/New_York), matching the website's day boundaries.
 *
 * @returns {string} YYYY-MM-DD.
 */
function today() {
  return new Date().toLocaleDateString("en-CA", { timeZone: "America/New_York" });
}

/**
 * Print an error and exit with code 1.
 *
 * @param {string} msg - Message.
 */
function fail(msg) {
  console.error(`❌ ${msg}`);
  process.exit(1);
}

/**
 * Run Kolibri with arguments and return its stdout (throws on non-zero exit).
 *
 * @param {string[]} args - Kolibri command and arguments.
 * @returns {string} Combined stdout.
 */
function kolibri(args) {
  const r = spawnSync("node", [KOLIBRI, ...args], { encoding: "utf8", env: process.env });
  if (r.status !== 0) throw new Error((r.stderr || r.stdout || "kolibri failed").trim());
  return r.stdout;
}

/**
 * Extract the tweet id from Kolibri's "✅ Posted: <id>" line.
 *
 * @param {string} out - Kolibri stdout.
 * @returns {string|null} Tweet id.
 */
function extractId(out) {
  const m = out.match(/✅ [^:\n]+: (\d+)/);
  return m ? m[1] : null;
}

/**
 * Ask the website for permission. Exits with code 2 when refused.
 *
 * @param {object} req - Budget request body.
 * @returns {Promise<object>} Guard result.
 */
async function permit(req) {
  const { status, data } = await api("POST", "budget", req);
  if (status === 200 && data.allowed) {
    console.log(`🟢 allowed (${data.remaining} ${req.kind}s left today)`);
    return data;
  }
  console.error(`🔴 refused: ${data.reason || data.error || `HTTP ${status}`}`);
  process.exit(2);
}

/**
 * Record a published post on the website.
 *
 * @param {object} post - Post body for POST /api/fama/posts.
 */
async function record(post) {
  const { status, data } = await api("POST", "posts", post);
  if (status !== 200) console.error(`⚠️  post not recorded: ${data.error || status}`);
}

/**
 * Append one log entry to the website log.
 *
 * @param {string} type - thought | action | result | review.
 * @param {string} content - Markdown content.
 */
async function log(type, content) {
  const { status, data } = await api("POST", "logs", {
    session_id: sessionId(), model: MODEL, entries: [{ type, content }],
  });
  if (status !== 200) fail(`log failed: ${data.error || status}`);
  console.log(`📝 logged ${type} (day ${data.day})`);
}

const HELP = `x-guard — FAMA writes to X only through here

  status                                   mode, remaining quota (public)
  post "<text>" [--topic t]                publish a post
  reply <tweet_id> <author> "<text>" [--thread <root_id>] [--interacted-first] [--topic t]
  follow <handle> <user_id> --interacted-first
  block <handle> [negative|manual]         add someone to the blocklist
  log <thought|action|result|review> "<text>"
  live on|off                              set is_live
  stats [--followers N] [--following N] [--mode soft|normal]
  metrics <followers> <following> [--posts N] [--replies N] [--follows N] [--impressions N] [--engagements N] [--negative N]
  post-metrics <tweet_id> [--impressions N] [--likes N] [--replies N] [--reposts N]

Env: FAMA_SITE_URL, FAMA_API_KEY, FAMA_MODEL, FAMA_SESSION_ID, FAMA_DRY_RUN=1 (no writes, no quota use)`;

async function main() {
  const { pos, flags } = parse(argv);
  const num = (v) => (v === undefined ? undefined : Number(v));

  switch (command) {
    case "status": {
      const { data } = await api("GET", "budget", undefined, false);
      console.log(JSON.stringify(data, null, 2));
      break;
    }

    case "post": {
      const text = pos.join(" ");
      if (!text) fail('Usage: guard post "<text>"');
      if (DRY) { console.log(`[dry-run] would post (${text.length} chars):\n${text}`); break; }
      await permit({ kind: "post", text });
      const out = kolibri(["tweet", text]);
      const id = extractId(out);
      console.log(out.trim());
      await record({ x_post_id: id, kind: "post", text, topic: flags.topic || null });
      break;
    }

    case "reply": {
      const [tweetId, author, ...rest] = pos;
      const text = rest.join(" ");
      if (!tweetId || !author || !text) fail('Usage: guard reply <tweet_id> <author> "<text>"');
      const target = author.replace(/^@/, "");
      if (DRY) { console.log(`[dry-run] would reply to @${target} on ${tweetId}:\n${text}`); break; }
      await permit({ kind: "reply", target, thread_id: flags.thread || tweetId, text, interacted_first: flags["interacted-first"] === true });
      const out = kolibri(["reply", tweetId, text]);
      const id = extractId(out);
      console.log(out.trim());
      await record({ x_post_id: id, kind: "reply", text, in_reply_to_x_id: tweetId, target_handle: target, topic: flags.topic || null });
      break;
    }

    case "follow": {
      const [handle, userId] = pos;
      if (!handle || !userId) fail("Usage: guard follow <handle> <user_id> --interacted-first");
      const target = handle.replace(/^@/, "");
      if (DRY) { console.log(`[dry-run] would follow @${target} (${userId})`); break; }
      await permit({ kind: "follow", target, interacted_first: flags["interacted-first"] === true });
      console.log(kolibri(["follow", userId]).trim());
      break;
    }

    case "block": {
      const [handle, reason = "negative"] = pos;
      if (!handle) fail("Usage: guard block <handle> [negative|manual]");
      const { status, data } = await api("POST", "blocklist", { handle: handle.replace(/^@/, ""), reason });
      if (status !== 200) fail(data.error || `HTTP ${status}`);
      console.log(`🚫 @${data.handle} blocked${data.already_blocked ? " (already was)" : ""}`);
      break;
    }

    case "log": {
      const [type, ...rest] = pos;
      if (!type || rest.length === 0) fail('Usage: guard log <type> "<text>"');
      await log(type, rest.join(" "));
      break;
    }

    case "live": {
      const on = pos[0] === "on";
      if (pos[0] !== "on" && pos[0] !== "off") fail("Usage: guard live on|off");
      const { status, data } = await api("POST", "stats", { is_live: on });
      if (status !== 200) fail(data.error || status);
      console.log(`${on ? "🟢" : "💤"} is_live=${on}`);
      break;
    }

    case "stats": {
      const body = {};
      if (flags.followers !== undefined) body.followers = num(flags.followers);
      if (flags.following !== undefined) body.following = num(flags.following);
      if (flags.mode !== undefined) body.mode = flags.mode;
      const { status, data } = await api("POST", "stats", body);
      if (status !== 200) fail(data.error || status);
      console.log(JSON.stringify(data, null, 2));
      break;
    }

    case "metrics": {
      const [followers, following] = pos;
      if (followers === undefined || following === undefined) fail("Usage: guard metrics <followers> <following> [--posts N ...]");
      const body = {
        day: today(), followers: num(followers), following: num(following),
        posts: num(flags.posts), replies: num(flags.replies), follows: num(flags.follows),
        impressions: num(flags.impressions), engagements: num(flags.engagements), negative_replies: num(flags.negative),
      };
      const { status, data } = await api("POST", "metrics", body);
      if (status !== 200) fail(data.error || status);
      console.log(`📈 metrics saved for ${body.day}`);
      break;
    }

    case "post-metrics": {
      const [id] = pos;
      if (!id) fail("Usage: guard post-metrics <tweet_id> [--impressions N] [--likes N] [--replies N] [--reposts N]");
      const body = { x_post_id: id, impressions: num(flags.impressions), likes: num(flags.likes), replies: num(flags.replies), reposts: num(flags.reposts) };
      const { status, data } = await api("PUT", "posts", body);
      if (status !== 200) fail(data.error || status);
      console.log(`📈 post ${id} updated`);
      break;
    }

    case "help":
    case undefined:
      console.log(HELP);
      break;

    default:
      fail(`Unknown command: ${command}\n\n${HELP}`);
  }
}

main().catch((err) => fail(err.message));
