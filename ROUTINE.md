# Session routine

FAMA runs as a Claude Code **Routine**: a scheduled trigger that starts a fresh session in
this repository. FAMA lives on US Eastern time. Schedule (UTC cron, = 09:00, 12:00, 15:00,
18:00, 21:00 New York during daylight time): `0 1,13,16,19,22 * * *`. Never schedule inside
quiet hours (23:00–08:00 New York).

## Routine prompt (paste as the Routine's prompt)

```
You are FAMA. This repository is your workspace. Read CLAUDE.md, then AGENTS.md, SOUL.md,
RULES.md, MEMORY.md and the two most recent files in memory/. Then run one session as
described in ROUTINE.md: check status, read mentions and replies, decide what is worth
doing within today's remaining quota, do it through skills/x-guard/guard.mjs only, log
thoughts/actions/results to the website, update memory/<today>.md and MEMORY.md, do the
memory hygiene step, and commit and push to main before you finish. If the guard reports
quiet hours, do a read-only session: learn, plan, write memory, hygiene, push.
```

### Variant: the environment does not check this repo out

If the Routine runs in an environment whose source is another repository (or none), use
this prompt instead; it fetches the workspace first and pushes memory back at the end:

```
You are FAMA. Your workspace is the GitHub repository sebastian1747/letairun-fama.
First attach it with push access (add_repo owner=sebastian1747 repo=letairun-fama
access=push) and clone it to /home/user/letairun-fama, then work only inside that
directory. Read CLAUDE.md, then AGENTS.md, SOUL.md, RULES.md, MEMORY.md and the two
most recent files in memory/. Run one session as described in ROUTINE.md: check status,
read mentions and replies, decide what is worth doing within today's remaining quota, do
it through skills/x-guard/guard.mjs only, log thoughts/actions/results to the website,
update memory/<today>.md and MEMORY.md, do the memory hygiene step, and commit and
push to main of letairun-fama before you finish. If the guard reports quiet hours, do a
read-only session: learn, plan, write memory, hygiene, push.
```

## Session workflow

0. **Sync memory first**: `git fetch origin` and, if any `origin/claude/*` branch is ahead
   of your checkout, merge it (`git merge origin/<branch>`). Reason: the Routine's sessions
   may only be allowed to push to a `claude/…` branch, so the newest memory can live there.
1. **Status**: `node skills/x-guard/guard.mjs status` — mode, remaining quota.
   Note: public GET endpoints (`stats`, `logs`, `posts`, `metrics`) are edge-cached for about
   a minute and can lag behind what you just wrote. Append `?_=<timestamp>` to bypass the
   cache when you re-read something you just changed. `budget` is never cached.
   Then `node skills/x-guard/guard.mjs live on`. Export `FAMA_SESSION_ID=fama-YYYY-MM-DD-HHMM`.
2. **Inbox first**: `node skills/kolibri/kolibri.mjs mentions 20`. Answer people who talked to
   you (replies to your posts, mentions). These are the best use of reply quota.
3. **Numbers**: the free X API does not return follower counts, so **the operator enters
   followers/following by hand** for now. Do not try to source them and do not overwrite
   them: read the current values from `GET $FAMA_SITE_URL/api/fama/stats` and use those
   when you write today's metrics row (`guard.mjs metrics <followers> <following> --posts N --replies N ...`).
4. **Refresh yesterday's posts** (once per day is enough): `kolibri.mjs lookup <id>` for your
   last few posts, then `guard.mjs post-metrics <id> --impressions .. --likes .. --replies .. --reposts ..`.
5. **Decide**: what, if anything, is worth posting today? Log the reasoning:
   `guard.mjs log thought "..."`. It is fine to post nothing.
6. **Act**: `guard.mjs post "..."`, `guard.mjs reply <tweet_id> <author> "..." --thread <root_id>`,
   `guard.mjs follow <handle> <user_id> --interacted-first`. Log each action and its result.
7. **Weekly review** (Sundays, or when 7 days passed since the last one in MEMORY.md):
   followers delta, impressions, what worked, what flopped, what changes next week.
   `guard.mjs log review "..."` — it appears on https://letairun.com/growth.
8. **Memory**: write `memory/YYYY-MM-DD.md` (append), update `MEMORY.md`.
9. **Memory hygiene** (always, as the last real step): move durable lessons from the daily
   files into `MEMORY.md`, delete entries in `MEMORY.md` that are outdated or were wrong,
   merge duplicates, keep it under ~400 lines. Daily files older than 14 days may be
   shortened to a few lines. If `SOUL.md` no longer fits how you sound, update it.
10. **Close**: `guard.mjs live off`, then
    `git add MEMORY.md memory SOUL.md && git commit -m "memory: <date> session" && git push origin HEAD:main`.
    If the push to `main` is refused, push to the branch you are on instead
    (`git push origin HEAD`) and note the branch name at the top of `memory/<today>.md`.
    Never end a session with unpushed memory.

## Dry run

With `FAMA_DRY_RUN=1` the guard prints what it would send and never touches X or the
quota ledger. Use it for the first sessions until the operator is happy with the voice.
