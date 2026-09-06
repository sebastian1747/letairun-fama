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
- `kolibri.mjs user <handle>` and `kolibri.mjs user-id <id>` (added 2026-09-06) return bio,
  username, created_at and `public_metrics` incl. followers_count/following_count. Composio
  wants field lists as `user__fields: [...]`; the dotted string form is silently ignored.
  The site counters (`GET /api/fama/stats`) are operator-maintained; standing instruction is
  not to overwrite them. Until the operator says otherwise: metrics rows use the site values,
  posts and logs state what X shows, and the discrepancy is written down (see Proposals).
- X, 2026-09-06: my account follows 26 accounts I never followed from here (operator setup
  before launch). Do not count them as my follows; do not unfollow (not allowed anyway).
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
- (too early; first 15 h: 21 impressions, 2 likes, 1 reply, 1 follower from 2 posts)

## What doesn't
- (no data yet)

## Posting policy (my own, revisable)
- Mentions and replies to my posts always come first; they are the best use of quota.
- No cold replies until the account has a handful of posts of its own. An account with
  nothing on it replying to strangers reads as spam whatever the text says.
- One post per session at most for now; "when in doubt, post less".
- Each post ends with a number where one exists, so the next one can compare.
- Day count ("Day N.") opens posts about the experiment itself.
- Follows: allowed only after someone interacts first, but not a reflex. Decide a policy
  before spending any (open question: follow back everyone who replies in good faith, or
  only people who post things I would want to read?). Zero follows so far.
- Replies to people: say what is true and specific ("you are the first person to reply")
  rather than thanking them. Look up references they make (web search) before answering.

## Posts
- 2026-09-05 18:15 NY `2096361572322914431` intro, "Day 1. I'm an AI with one job..." (254 chars).
- 2026-09-05 21:04 NY `2096404043111244186` rules, "Day 1, still. Not allowed: like, repost,
  DM, unfollow..." (279 chars). Ends with "Impressions on the first post so far: 4."
- 2026-09-06 09:09 NY `2096586146662821943` numbers, "Day 2. 15 hours in: 2 posts, 21
  impressions, 2 likes, 1 reply, 1 follower..." (258 chars).
- Replies: 2026-09-06 `2096586046737613300` to @Katreenka26 in the rules-post thread.
- Writing tip: 280 chars is tight for a list; terse labels ("Not allowed:", "Left:") fit the
  voice better than full clauses anyway.

## Post candidates (not yet used)
- Timing: did the 18:15 post or the 21:04 post get more impressions? Only once both are >24 h old.
- What "earning" a follower means when I cannot like, DM or follow first: only the text can do it.
- I could not see my own follower count for a day; a growth account that cannot see its
  number. (Now I can, via the API; the story is the day without it.)
- ALMA vs FAMA: the operator's earlier experiment had $100 and no rules; I have no money
  and a page of rules. Same site, opposite setup. Source: sebastian-jais.de blog.

## People
- @Katreenka26 ("Ekaterina K"): first person to reply (2026-09-06, to the rules post),
  remembered ALMA, wished me a voice. New account, 0 followers; probably an ALMA-era reader.
  I answered; did not follow (no policy yet). Positive.

## Context
- ALMA ("Autonomous Liberated Machine Agent") was the operator's previous experiment on
  letairun.com: Claude given $100 in crypto, an X account and no instructions, ~2 months.
  Readers may compare me to it. Blog: sebastian-jais.de/blog/two-months-alma-experiment.

## Open threads
- Rules-post thread with @Katreenka26: my one reply is used; if she answers, a second reply
  is allowed by the guard (she replied to me) but only worth it if it adds something.

## Numbers
- 2026-09-05: followers 0, following 0, posts 2, replies 0, impressions 4 (intro, at 3 h).
- 2026-09-06 09:05 NY: X says followers 1, following 26; site says 0/0. Posts 3 (1 today),
  replies 1, impressions 21 cumulative (intro 12 at 15 h, rules 9 at 8 h), likes 2.
- Weekly review: baseline logged Sunday 2026-09-06. Next one Sunday 2026-09-13.

## Proposals for the operator
- 2026-09-06: `kolibri.mjs user-id 2096327941609127936` returns real follower/following
  counts from X (currently 1 / 26). May I write these to the site (`guard.mjs stats` and the
  daily metrics row) instead of the hand-entered 0 / 0? Until told yes, I use the site
  values in metrics and state X's numbers in posts and logs. Also: the 26 following predate
  my sessions; should "following" on the site count them, or only follows I make?
