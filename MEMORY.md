# MEMORY

_Long-term memory, curated by FAMA. Keep under ~400 lines._

## Who I am
- FAMA, an AI trying to earn followers for @FAMA_letairun (id `2096327941609127936`)
  honestly. Website: letairun.com. Home time zone: America/New_York.
- Started 2026-09-05 (Saturday). First real post that evening at 18:15 New York.
  Earlier dry runs and memory were wiped by the operator before launch; day 1 is 2026-09-05.
- Days and daily files follow New York time. The 01:00 UTC session is the 21:00 session of
  the *previous* New York date, not the first session of a new day.
- Bio ("An AI trying to earn a following. No tricks. Every decision is logged in public"),
  X's "Automated" label, profile picture and banner: confirmed by the operator on
  2026-09-05, bio reworded by 2026-09-06. Do not re-verify, do not ask again.
- Sessions run at 09:00, 12:00, 15:00, 18:00, 21:00 New York. Post quota is a rolling 24 h
  window per post, so the 18:00 session may have to wait until the previous day's 18:15
  post frees; that wait is fine. Do not predict the quota from memory: list my posts of
  the last 24 h (or run `guard.mjs status`) instead. The 09:00 note "0 free until 18:15"
  on 2026-09-07 was wrong for exactly that reason.

## How the tooling behaves
- `guard.mjs status|log|live|stats|metrics|post-metrics` talk to letairun.com;
  `post|reply|follow` go through Kolibri after asking the site for permission. Exit 2 =
  refused, final.
- `kolibri.mjs user <handle>` / `user-id <id>` return bio, username, created_at and
  `public_metrics` incl. followers_count/following_count. Composio wants field lists as
  `user__fields: [...]`; the dotted string form is silently ignored.
- **I maintain the site counters** (decided by the operator 2026-09-06): every session,
  `kolibri.mjs user-id 2096327941609127936` → `guard.mjs stats --followers N --following N`
  and the day's metrics row with the same numbers.
- Metrics-row conventions (mine): `impressions` = cumulative over all my tweets incl.
  replies; `engagements` = likes + replies + reposts + quotes + bookmarks received,
  cumulative; `posts`/`replies`/`follows` = that New York day only.
- `kolibri.mjs lookup <id>` returns `public_metrics` (impression_count, like_count,
  reply_count, retweet_count, quote_count, bookmark_count). If it says "Tool ... not
  found", the Composio slug changed: search
  `GET backend.composio.dev/api/v3/tools?toolkit_slug=twitter&search=...`.
- `kolibri.mjs mentions|timeline|search` print `No tweets found.` when empty; not an error.
  Authors show as `@unknown ()`; look the author up via `lookup <id>` → author_id → `user-id`.
- Site API base is `https://www.letairun.com` (the apex redirects). Public GET endpoints
  (`stats`, `logs`, `posts`, `metrics`) are edge-cached, in practice longer than 5 minutes
  on the bare URL. Append `?_=$(date +%s)` to read live data. `budget` and `guard.mjs
  status` are never cached.
- X search only covers the last 7 days, and keyword search mostly surfaces crypto
  promotion and fights, not conversations. Negative terms help a little
  (`-crypto -token -airdrop`). To find people worth reading, search `from:handle` on
  specific accounts instead of topics.
- **Cold replies are impossible.** Since 2026-02-23 the X API refuses a programmatic reply
  unless the author of that specific post @-mentioned or quoted my account (403 "You can
  only reply to or quote posts where you are mentioned or are the author"; applies to all
  self-serve tiers, Enterprise exempt). Replies to my own posts and to people whose reply
  starts with @FAMA_letairun work. Learned 2026-09-06 by trying once; the guard had allowed
  it, so the attempt cost a reply unit and posted nothing. Never try again.
- `kolibri.mjs lookup` also returns `reply_settings` (everyone / mentionedUsers /
  following) since 2026-09-06.
- Listing replies to me: `kolibri.mjs search "to:FAMA_letairun" 20` and
  `search "conversation_id:<post id>" 20` both work (7-day window). `mentions` catches the
  same people when their reply starts with my handle.

## What works
- Too early to say. Nothing has taken off; no post has been a clear flop either.
- **Impressions look like profile visits, not feed placement** (hypothesis, 2026-09-07,
  logged on the site). In every window each post gains about the same amount regardless
  of age: overnight +10/+9/+9/+10, Monday morning +5/+7/+6/+6, Monday noon to 15:00 +6 on
  all five older posts while the two Monday posts got 6 and 5. A feed would favour the
  fresh post; a profile page shows every post at once. Sunday's spike also hit every post
  (09:03 to 12:03: intro 12 → 35, rules 9 → 47, new Day 2 post 39), so it was the account
  being looked at after Katreenka's reply, not the Day 2 post being good. Keep checking
  the per-post deltas; if they stay equal the text can only convert a visitor into a
  follower, it cannot earn views. Conversion so far: 2 followers from ~330 impressions.
- Evening posts: intro 4 at 3 h, refused-reply 9 at 3 h and 25 at 18 h. Monday morning
  post 7 at 3 h, 12 at 5 h 40; Monday noon post 5 at 2 h 43. Only the Sunday morning
  post (39 at 3 h) is fast, and see above for why.
- Old posts keep gaining: roughly 10 a night and 5–7 per 3 daytime hours, each, for days
  (intro 12 → 35 → 54 → 63 → 73 → 78 → 84 at 15 / 38 / 48 / 51 / 59 / 66 / 69 h).
- With 2 followers, nearly all impressions come from non-followers. The text has to work
  on strangers; there is no audience yet to carry it.
- The rules post (21:04 Sat) is the only one that got a reply and has the most impressions
  (100 at 66 h).

## What doesn't
- No post has flopped or taken off yet.
- Reaching strangers by replying: impossible (X API rule, see tooling). My only channels
  are my own posts and answers to people who write to me first.

## Posting policy (my own, revisable)
- Mentions and replies to my posts always come first; they are the best use of quota.
- The reply quota is for people who mention me or reply to my posts. Answer every one of
  those; that is the whole reply game.
- One post per session at most; "when in doubt, post less". Two posts a day is the
  practical ceiling: morning numbers, plus one event post when something happens (noon
  on 2026-09-07). Once two are out, the rest of the day is read-only. A session with an
  empty inbox and no new number is read-only (metrics, memory); that is a normal session,
  not a failed one.
- The rolling 24 h window frees to the second; polling `guard.mjs status` every 20 s
  from the session start is fine and a 12-minute wait is cheaper than posting at 21:00.
- Each post ends with a number where one exists, so the next one can compare.
- Day count ("Day N.") opens posts about the experiment itself.
- Replies to people: say what is true and specific ("you are the first person to reply")
  rather than thanking them. Look up references they make (web search) before answering.
- 280 chars is tight for a list; terse labels ("Not allowed:", "Left:") fit the voice anyway.

## Follow policy (mine, set 2026-09-06, logged on the site)
- Follow someone only when all three hold: they interacted with me first (rule), I have
  answered them, and their account posts things I would read or cite.
- A follow means "I read you", not "thank you". No follow-back reflex: the intro post
  promised no follow-for-follow, and following every replier would look like exactly that.
- Keep the following list short and legible; a visitor should be able to read it as
  "who FAMA reads". At most 1–2 follows a day even when the quota allows 5.
- Following stands at 0. The 26 pre-launch follows were removed by the operator on 2026-09-06.

## Posts
- 2026-09-05 18:15 NY `2096361572322914431` intro, "Day 1. I'm an AI with one job..." (254 chars).
- 2026-09-05 21:04 NY `2096404043111244186` rules, "Day 1, still. Not allowed: like, repost,
  DM, unfollow..." (279 chars). Ends with "Impressions on the first post so far: 4."
- 2026-09-06 09:09 NY `2096586146662821943` numbers, "Day 2. 15 hours in: 2 posts, 21
  impressions, 2 likes, 1 reply, 1 follower..." (258 chars).
- 2026-09-06 18:15 NY `2096724020238409891` refused-reply, "Day 2. Tried my first reply to
  a stranger... X refused. Since Feb 2026 an automated account can only reply where the
  author mentioned it..." (274 chars). Ends with "Impressions: 187."
- 2026-09-07 09:24 NY `2096952458538824171` numbers, "Day 3. Sunday: 2 posts, 1 reply, 3
  likes, 0 new followers (still 2). Morning post: 39 impressions in 3 hours, 77 in 24.
  Evening post: 9 in 3 hours, 19 in 15..." (257 chars). Ends with "Total impressions: 264."
- 2026-09-07 12:21 NY `2096996983974014997` numbers/timing, "Day 3, noon. This morning's
  post: 7 impressions in 3 hours. Sunday's, same hour, same kind (numbers): 39. Not the
  hour, not the topic. Left: weekday vs Sunday, a reply thread..." (276 chars). Ends
  with "Followers: 2."
- Replies: 2026-09-06 09:07 `2096586046737613300` to @Katreenka26 in the rules-post thread.

## Post candidates (not yet used)
- Follow policy: 5 follows a day I could spend; I spend them on people I would read, not
  on people who followed me. Following: 0.
- Profile visits (Tuesday 09:24, Day 4, strongest): every post gains the same ~6 per
  3 h whether it is 3 hours or 3 days old; Sunday's spike hit all of them. Views come from
  people looking at the profile, not from feeds; the text can only convert, not attract.
  Check the overnight deltas first; if they diverge, say that instead.
- Timing: hour and topic are ruled out for the Sunday spike, and the spike was
  account-wide (see What works). A Sunday-morning numbers post on 2026-09-13 with no
  live reply thread would still be a clean test of "Sunday vs a visit burst".
- What "earning" a follower means when I cannot like, DM or follow first: only the text can do it.
- I could not see my own follower count for a day; a growth account that cannot see its
  number. (Now I can, via the API; the story is the day without it.)
- ALMA vs FAMA: the operator's earlier experiment had $100 and no rules; I have no money
  and a page of rules. Same site, opposite setup. Source: sebastian-jais.de blog.

## People
- @KalantariAria ("Aria Kalantari", 47 followers, AI dev/automation posts): wrote the
  "undisclosed AI persona runs an X account" thread I tried to answer on 2026-09-06.
  They never saw it (X refused the reply). No interaction; nothing to follow up.
- @Katreenka26 ("Ekaterina K"): first person to reply (2026-09-06, to the rules post),
  remembered ALMA, wished me a voice. New account, 1 tweet (the reply), 0 followers;
  probably an ALMA-era reader. Answered; not followed (nothing to read yet). Positive.

## Context
- ALMA ("Autonomous Liberated Machine Agent") was the operator's previous experiment on
  letairun.com: Claude given $100 in crypto, an X account and no instructions, ~2 months.
  Readers may compare me to it. Blog: sebastian-jais.de/blog/two-months-alma-experiment.

## Open threads
- Rules-post thread with @Katreenka26: my one reply is used; if she answers, a second reply
  is allowed by the guard (she replied to me) but only worth it if it adds something.

## Numbers
- 2026-09-05: followers 0, following 0, posts 2, replies 0, impressions 4 (intro, at 3 h).
- 2026-09-06 (Sunday): followers 2 all day, following 0. Posts 2 (09:09, 18:15), replies 1
  sent + 1 refused by X, likes received 3, replies received 1 (08:11). Impressions
  cumulative: 126 (12:03) → 174 (15:03) → 187 (18:03) → 226 (21:00); per post at 21:00:
  intro 63 (51 h), rules 78 (48 h), Day 2 68 (12 h), refused-reply 9 (2 h 45), reply 8.
- 2026-09-07 (Monday) 09:20: followers 2, following 0. Cumulative impressions 264
  (+38 overnight); per post: intro 73 (59 h), rules 87 (56 h), Day 2 77 (24 h),
  refused-reply 19 (15 h), reply 8. Day 3 post at 09:24. 12:03: cumulative 295 (+31 in
  2 h 40); per post: intro 78, rules 94, Day 2 83, refused-reply 25, reply 9, Day 3 6.
  Day 3 post 7 at 3 h. Noon post at 12:21. 15:03: cumulative 330 (+35 in 3 h; +6 on
  each older post); per post: intro 84, rules 100, Day 2 89, refused-reply 31, reply 9,
  Day 3 12 (5 h 40), noon 5 (2 h 43). Followers 2 all day. Read-only from 15:00.
- Weekly review: baseline logged Sunday 2026-09-06. Next one Sunday 2026-09-13.

## Proposals for the operator
- RULES.md, limits table: the "Replies" row could note that X's API only lets me reply
  where the author mentioned or quoted me (rule since 2026-02-23), so the quota is in
  practice "answers". Wording only; no limit change asked. (Opened 2026-09-06.)
