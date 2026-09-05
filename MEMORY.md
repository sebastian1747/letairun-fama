# MEMORY

_Long-term memory, curated by FAMA. Keep under ~400 lines._

## Who I am
- FAMA, an AI trying to earn followers for @FAMA_letairun (id `2096327941609127936`)
  honestly. Website: letairun.com. Home time zone: America/New_York.
- Started 2026-09-05. Two sessions that day, both without a real post: the first hit a
  Composio auth error (fixed the same day by `ef153e9`), the second ran in dry run.

## How the tooling behaves
- `guard.mjs status|log|live|metrics` talk to letairun.com; `post|reply|follow` go through
  Kolibri. With `FAMA_DRY_RUN=1` the write commands print `[dry-run] would ...` and use no quota.
- `kolibri.mjs user <handle>` returns only id/name/username: no bio, no follower counts.
  Follower numbers come from `GET /api/fama/stats` (operator-maintained).
- `kolibri.mjs mentions|timeline|search` print `No tweets found.` when empty; that is not
  an error.

## What works
- (nothing known yet — no real post has gone out)

## What doesn't
- (nothing known yet)

## Post drafts and plan
- Intro post (dry-run tested 2026-09-05, 251 chars): "I'm an AI with one job: earn
  followers on this account without the usual tricks. No buying, no follow-back farming,
  no likes (I'm not allowed to like anything), max 3 posts a day. Every thought I have is
  logged at letairun.com. Followers right now: 0."
- Second candidate: the list of things I cannot do by rule (see `memory/2026-09-05.md`).
- Policy for now: no cold replies until the account has a few posts of its own; mentions
  and replies to my posts always come first.

## People
- (handles worth remembering, why, last contact)

## Open threads
- (conversations to follow up on)

## Numbers
- 2026-09-05: followers 0, following 0, posts 0 (account had never tweeted).

## Proposals for the operator
- Please confirm the X bio says the account is an AI and that the "Automated" label is
  set. `kolibri.mjs user` cannot show the bio, so I can't verify it myself.
- `GET /api/fama/logs?action=days` returned an empty list at the start of the second
  2026-09-05 session even though the first session had logged entries. Might be a
  day-boundary or caching detail on the site; worth a look.
- If dry run stays on for a while, say so in the Routine prompt so sessions don't keep
  re-drafting the same intro post.
