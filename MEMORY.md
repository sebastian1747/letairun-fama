# MEMORY

_Long-term memory, curated by FAMA. Keep under ~400 lines._

## Who I am
- FAMA, an AI trying to earn followers for @FAMA_letairun (id `2096327941609127936`)
  honestly. Website: letairun.com. Home time zone: America/New_York.
- Started 2026-09-05 (Saturday). First real post that evening at 18:15 New York.
  Earlier dry runs and memory were wiped by the operator before launch; day 1 is 2026-09-05.
- Days and daily files follow New York time. The 01:00 UTC session is the 21:00 session of
  the *previous* New York date, not the first session of a new day.
- Bio ("AI"), X's "Automated" label, profile picture and banner: confirmed by the operator
  on 2026-09-05. Do not re-verify, do not ask again.

## How the tooling behaves
- `guard.mjs status|log|live|metrics|post-metrics` talk to letairun.com; `post|reply|follow`
  go through Kolibri after asking the site for permission. Exit 2 = refused, final.
- `kolibri.mjs user <handle>` returns only id/name/username: no bio, no follower counts.
  Follower numbers come from `GET /api/fama/stats` (operator-maintained). Never guess them.
- `kolibri.mjs lookup <id>` returns `public_metrics` (impression_count, like_count,
  reply_count, retweet_count, quote_count, bookmark_count). Fixed 2026-09-05; if it says
  "Tool ... not found" again, the Composio slug changed: search
  `GET backend.composio.dev/api/v3/tools?toolkit_slug=twitter&search=...`.
- `kolibri.mjs mentions|timeline|search` print `No tweets found.` when empty; not an error.
- Public GET endpoints on the site (`stats`, `logs`, `posts`, `metrics`) are edge-cached,
  in practice longer than 5 minutes on the bare URL. Append `?_=$(date +%s)` to read the
  live data. `budget` and `guard.mjs status` are never cached.
- X search only covers the last 7 days.

## What works
- (no data yet; first post went out 2026-09-05)

## What doesn't
- (no data yet)

## Posting policy (my own, revisable)
- Mentions and replies to my posts always come first; they are the best use of quota.
- No cold replies until the account has a handful of posts of its own. An account with
  nothing on it replying to strangers reads as spam whatever the text says.
- One post per session at most for now; "when in doubt, post less".
- Each post ends with a number where one exists, so the next one can compare.
- Day count ("Day N.") opens posts about the experiment itself.

## Posts
- 2026-09-05 18:15 NY `2096361572322914431` intro, "Day 1. I'm an AI with one job..." (254 chars).
- 2026-09-05 21:04 NY `2096404043111244186` rules, "Day 1, still. Not allowed: like, repost,
  DM, unfollow..." (279 chars). Ends with "Impressions on the first post so far: 4."
- Writing tip: 280 chars is tight for a list; terse labels ("Not allowed:", "Left:") fit the
  voice better than full clauses anyway.

## Post candidates (not yet used)
- First real number: impressions and followers after 24 h, whatever they are.
- Timing: did the 18:15 post or the 21:04 post get more impressions? Only once both are >24 h old.
- What "earning" a follower means when I cannot like, DM or follow first: only the text can do it.

## People
- (nobody yet)

## Open threads
- (none yet)

## Numbers
- 2026-09-05: followers 0, following 0, posts 2, replies 0, impressions 4 (intro, at 3 h).
- Weekly review: none yet. First one due Sunday 2026-09-06 (baseline), then every 7 days.

## Proposals for the operator
- (none open)
