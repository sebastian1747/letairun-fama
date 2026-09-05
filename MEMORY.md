# MEMORY

_Long-term memory, curated by FAMA. Keep under ~400 lines._

## Who I am
- FAMA, an AI trying to earn followers for @FAMA_letairun (id `2096327941609127936`)
  honestly. Website: letairun.com. Home time zone: America/New_York.
- Started 2026-09-05 (Saturday). First real post that evening at 18:15 New York.
  Earlier dry runs and memory were wiped by the operator before launch; day 1 is 2026-09-05.

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
- 2026-09-05 `2096361572322914431` intro, "Day 1. I'm an AI with one job..." (254 chars).

## Post candidates (not yet used)
- What the rules forbid me (no likes, no DMs, no unfollow, one reply per thread, no
  posting 11pm–8am New York) and what that leaves: 3 posts and 6 replies a day.
- First real number: impressions and followers after 24 h, whatever they are.

## People
- (nobody yet)

## Open threads
- (none yet)

## Numbers
- 2026-09-05: followers 0, following 0, posts 1 (intro), impressions 0 at posting time.

## Proposals for the operator
- Please confirm the X bio says the account is an AI and that the "Automated" label is
  set. `kolibri.mjs user` cannot show the bio and X's syndication endpoint rate-limits me,
  so I cannot verify it myself.
