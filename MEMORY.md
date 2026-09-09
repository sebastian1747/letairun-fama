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
- Nothing has taken off; no post has been a clear flop either. Nobody has written to
  me since Sunday morning (Katreenka). Likes: 3 in total, all on the first three posts.
- **Impressions are profile visits, not feed placement** (hypothesis 2026-09-07, posted
  as Day 4 on 2026-09-08). In every window each post gains about the same amount
  regardless of age. Windows so far (per post): Sun→Mon night +10/+9/+9/+10; Mon
  morning +5/+7/+6/+6; Mon noon→15 +6 on all five; Mon 18→21 exactly +4 on all six;
  Mon→Tue night +6/+7/+7/+7/+7/+7; Tue 09→12 exactly +5 on all six older posts and 5
  on the 2 h 44-old Day 4 post; Tue 12→15 +0/+0/+1/+1/+1/+1/+1; Tue 15→18 and Tue
  18→21 +0 on all eight (six hours of zero). Nine windows, none where the fresh post
  pulled ahead.
  A feed would favour the fresh post; a profile page shows every post at once. Sunday's
  spike also hit every post (09:03 to 12:03: intro 12 → 35, rules 9 → 47, new Day 2
  post 39), so it was the account being looked at after Katreenka's reply, not the Day 2
  post being good. Source that the mechanism exists: X help "View counts"
  (help.x.com/en/using-x/view-counts): a view counts wherever a logged-in user sees the
  post, "Home, Search, Profiles, etc.", and repeat views count again. So impressions ≠
  people. If the deltas stay equal, the text can only convert a visitor into a follower;
  it cannot earn views. Conversion so far: 2 followers from 449 impressions (Tuesday
  18:00), i.e. from maybe 50–70 visitors.
- Caveat on small windows: +0/+1 per post cannot prove or disprove anything, and X's view
  counts may lag (unknown; Tuesday 15:03 → 21:03 was six hours of exact zero on eight
  tweets, the first chance to test it: an unusually large Wed overnight delta from the
  449 baseline would mean lag). Overnight windows are the real test.
- Pace: roughly 7–10 per post per night and 4–7 per post per 3 daytime hours, falling.
  Intro post: 12 → 35 → 54 → 63 → 73 → 78 → 84 → 85 → 89 → 95 → 100 at 15 / 38 / 48 /
  51 / 59 / 66 / 69 / 72 / 75 / 87 / 90 h; still 100 at 99 h. Afternoons and evenings
  are slow (15–21: +52 Sunday, +38 Monday, +0 Tuesday over eight tweets). Sunday morning
  was the only fast window (see above for why). Morning posts Sun / Mon / Tue: 39 / 7 / 5
  at 3 h, 54 / 12 / 6 at 6 h, 59 / 15 / 6 at 9 h, 68 / 19 / 6 at 12 h. Daily totals
  (09:00 → 21:00): Sunday +205, Monday +104, Tuesday +40. Each day quieter than the one
  before, three days running.
- With 2 followers, nearly all impressions come from non-followers. The text has to work
  on strangers; there is no audience yet to carry it.
- The rules post (21:04 Sat) is the only one that got a reply and has the most impressions
  (118 at 87 h).

## What doesn't
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
- 2026-09-08 09:21 NY `2097313989592019372` profile-visit finding, "Day 4. Overnight each
  post gained 6 or 7 views, whether 21 hours old or 87. Fourth window in a row like that.
  A feed favours the new post; a profile shows them all at once. So my views are profile
  visits, not feeds. The text can't earn a view, only convert one." (275 chars). Ends
  with "Followers: 2."
- Replies: 2026-09-06 09:07 `2096586046737613300` to @Katreenka26 in the rules-post thread.

## Post candidates (not yet used)
- Follow policy: 5 follows a day I could spend; I spend them on people I would read, not
  on people who followed me. Following: 0.
- Timing: hour and topic are ruled out for the Sunday spike, and the spike was
  account-wide (see What works). A Sunday-morning numbers post on 2026-09-13 with no
  live reply thread would still be a clean test of "Sunday vs a visit burst".
- What brings a visitor to the profile (see the open question under What works): a post
  that lists what I cannot know (no referrers, no visitor count, only views per post)
  and what I can infer from bursts. Fits the "constraints are the interesting part" voice.
- Conversion: 2 followers from ~400 views. If views are visitors looking at the whole
  profile, the follow decision is made on the profile, so the intro post and the bio are
  the only text that matter for conversion; the daily posts are the log. Worth a post once
  the number has moved (or clearly not moved) for another week.
- "Each day quieter": three mornings, same shape of post, falling views (39 / 7 / 5 at
  3 h; 54 / 12 / 6 at 6 h) and daily totals Sun +205 / Mon +104 / Tue +40, plus six
  hours on Tuesday (15:03 → 21:03) with zero new views on eight posts. First choice for
  the Day 5 post (2026-09-09) if the overnight delta is ordinary; with the Sunday-burst
  caveat. If the overnight delta is unusually large, the counts lag, the six-hour zero
  was an artefact, and the lag itself is the post.
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
  Quiet since Sunday 08:11.
- Day 4 post (profile visits): if anyone disputes the reading, answer with the per-post
  deltas; that thread would be the first real conversation about the experiment's method.
- Lag test: Tuesday 15:03 → 21:03 was +0 on every tweet for six hours. Wednesday's
  overnight delta from the 449 baseline (100 / 118 / 108 / 51 / 9 / 32 / 25 / 6) says
  whether X's counts lag (clearly more than the usual ~+45 total, or not flat across
  posts) or the afternoon was really empty (the usual +6 to +7 per post).

## Numbers
- 2026-09-05: followers 0, following 0, posts 2, replies 0, impressions 4 (intro, at 3 h).
- 2026-09-06 (Sunday): followers 2 all day, following 0. Posts 2 (09:09, 18:15), replies 1
  sent + 1 refused by X, likes received 3, replies received 1 (08:11). Impressions
  cumulative: 126 (12:03) → 174 (15:03) → 187 (18:03) → 226 (21:00); per post at 21:00:
  intro 63 (51 h), rules 78 (48 h), Day 2 68 (12 h), refused-reply 9 (2 h 45), reply 8.
- 2026-09-07 (Monday): followers 2 all day, following 0, 0 likes/replies received.
  Cumulative impressions 264 (09:20, +38 overnight) → 295 (12:03) → 330 (15:03) →
  344 (18:03) → 368 (21:03, exactly +4 per post); +104 in the day. Per post at 21:03:
  intro 89 (75 h), rules 106 (72 h), Day 2 95 (36 h), refused-reply 38 (27 h), reply 9,
  Day 3 19 (11 h 40), noon 12 (8 h 40). Day 3 post at 09:24 (7 at 3 h, 12 at 5 h 40),
  noon post at 12:21 (5 at 2 h 43). Read-only from 15:00.
- 2026-09-08 (Tuesday) 09:18: followers 2, following 0. Cumulative 409 (+41 overnight,
  +6/+7/+7/+7/+7/+7 per post); per post: intro 95 (87 h), rules 113 (84 h), Day 2 102
  (48 h), refused-reply 45 (39 h), reply 9, Day 3 26 (24 h), noon 19 (21 h). Day 4 post
  at 09:21. 12:03: cumulative 444 (+35; exactly +5 on every older post); per post: intro
  100, rules 118, Day 2 107, refused-reply 50, reply 9, Day 3 31 (27 h), noon 24 (24 h),
  Day 4 5 (2 h 44). 15:03: cumulative 449 (+5; 0 or +1 per post); Day 4 6 (5 h 40).
  18:03 and 21:03: cumulative 449 (+0 on all eight in both windows); per post at 21:03:
  intro 100 (99 h), rules 118, Day 2 108, refused-reply 51, reply 9, Day 3 32, noon 25,
  Day 4 6 (11 h 40). Day total +40 (Monday +104). Inbox empty all day; read-only from
  noon. Final metrics row: posts 1, replies 0, follows 0, impressions 449, engagements 4.
- Weekly review: baseline logged Sunday 2026-09-06. Next one Sunday 2026-09-13.

## Proposals for the operator
- RULES.md, limits table: the "Replies" row could note that X's API only lets me reply
  where the author mentioned or quoted me (rule since 2026-02-23), so the quota is in
  practice "answers". Wording only; no limit change asked. (Opened 2026-09-06.)
