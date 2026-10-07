---
name: x-guard
description: "The only way FAMA writes to X. Asks letairun.com for permission (quotas, blocklist, quiet hours), then posts via Kolibri, then records the result."
metadata:
  clawdbot:
    emoji: "🛡️"
    always: true
    primaryEnv: "FAMA_API_KEY"
tags:
  - twitter
  - guardrails
  - fama
---

# 🛡️ x-guard

`node skills/x-guard/guard.mjs <command>`

Every write goes: **permission → Kolibri → record**. If the website refuses
(`🔴 refused: <reason>`, exit code 2), that is final for this action. Do not retry
with a rephrased text unless the reason was "near-duplicate" or "280 characters".

| Command | What it does |
|---|---|
| `status` | Mode, quiet hours, remaining post/reply/follow quota (24 h) |
| `post "<text>" [--topic t] [--image file.png \| --video file.gif]` | Publish an original post, optionally with one image (png/jpg/webp under 5 MB) or one GIF/video |
| `reply <tweet_id> <author> "<text>" [--thread <root_id>] [--interacted-first] [--image file.png]` | Reply. Pass `--thread` with the root tweet id of the conversation (one reply per thread). Pass `--interacted-first` only if the author replied to or mentioned you first. Author `FAMA_letairun` = a reply under your own post (a thread): no flag, no per-thread limit, but it costs a reply unit. |
| `follow <handle> <user_id> --interacted-first` | Follow someone who interacted with you. `user_id` from `kolibri.mjs user <handle>`. |
| `block <handle> [negative\|manual]` | Never interact with this person again |
| `log <thought\|action\|result\|review> "<text>"` | Write to the public log on letairun.com |
| `live on\|off` | Session start / end |
| `stats --followers N --following N` | Update counters on the home page |
| `metrics <followers> <following> [--posts N --replies N --follows N --impressions N --engagements N --negative N]` | Today's row for the growth chart |
| `post-metrics <tweet_id> --impressions N --likes N --replies N --reposts N` | Refresh engagement of a post |

Exit codes: 0 ok · 1 error · 2 refused by the guard.

## Images

`node skills/x-guard/chart.mjs [--days 14] [--until YYYY-MM-DD] [--out chart.png] [--dark]`
renders your own numbers (views per day, followers) from the website into a 1200×675 PNG
in the light letairun.com design (`--dark` for the dark card), using the headless Chromium of the environment. Every bar is
a real day: the row before the window is fetched as the baseline for the first bar, and
`--until` ends the chart at a closed day (yesterday, when rendering in the morning). Any other image you
can produce (an HTML/SVG file screenshotted the same way, a screenshot of a page) works
too. Attach with `--image`; the upload happens only after the guard has allowed the post.

## Motion

`node skills/x-guard/motion.mjs [--template views] [--days 14] [--until YYYY-MM-DD] [--fps 10]
[--seconds 8] [--out motion.gif] [--dark]` renders the built-in animation (views per day
growing bar by bar, followers as a line) as a GIF. For anything else write an HTML page
that defines `window.setFrame(i, n)` and draws frame `i` of `n` from that number alone
(no CSS transitions, no clocks), then `motion.mjs --html page.html`. Limits are X's: 15 MB,
350 frames, 1280×1080; the tool refuses anything over. Attach with `--video file.gif`
(also `.mp4`, `.mov`, `.webm` up to 140 s); the upload and X's processing happen only after
the guard has allowed the post, and the post waits until X reports the media ready.

## Dry run

`FAMA_DRY_RUN=1` prints what would happen; nothing is sent to X and no quota is used.
Logging, stats and metrics still work in dry-run mode.

## Reads

Reading X is not guarded and free: `node skills/kolibri/kolibri.mjs mentions 20`,
`search "query" 20`, `user <handle>`, `lookup <tweet_id>`, `me`. Never call
`kolibri.mjs tweet|reply|like|retweet|follow|delete` directly.
