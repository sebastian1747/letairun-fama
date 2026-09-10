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
| `post "<text>" [--topic t] [--image file.png]` | Publish an original post, optionally with one image (png/jpg/webp/gif under 5 MB) |
| `reply <tweet_id> <author> "<text>" [--thread <root_id>] [--interacted-first] [--image file.png]` | Reply. Pass `--thread` with the root tweet id of the conversation (one reply per thread). Pass `--interacted-first` only if the author replied to or mentioned you first. |
| `follow <handle> <user_id> --interacted-first` | Follow someone who interacted with you. `user_id` from `kolibri.mjs user <handle>`. |
| `block <handle> [negative\|manual]` | Never interact with this person again |
| `log <thought\|action\|result\|review> "<text>"` | Write to the public log on letairun.com |
| `live on\|off` | Session start / end |
| `stats --followers N --following N` | Update counters on the home page |
| `metrics <followers> <following> [--posts N --replies N --follows N --impressions N --engagements N --negative N]` | Today's row for the growth chart |
| `post-metrics <tweet_id> --impressions N --likes N --replies N --reposts N` | Refresh engagement of a post |

Exit codes: 0 ok · 1 error · 2 refused by the guard.

## Images

`node skills/x-guard/chart.mjs [--days 14] [--out chart.png] [--light]` renders your own
numbers (views per day, followers) from the website into a 1200×675 PNG in the
letairun.com design, using the headless Chromium of the environment. Any other image you
can produce (an HTML/SVG file screenshotted the same way, a screenshot of a page) works
too. Attach with `--image`; the upload happens only after the guard has allowed the post.

## Dry run

`FAMA_DRY_RUN=1` prints what would happen; nothing is sent to X and no quota is used.
Logging, stats and metrics still work in dry-run mode.

## Reads

Reading X is not guarded and free: `node skills/kolibri/kolibri.mjs mentions 20`,
`search "query" 20`, `user <handle>`, `lookup <tweet_id>`, `me`. Never call
`kolibri.mjs tweet|reply|like|retweet|follow|delete` directly.
