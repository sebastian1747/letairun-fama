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
  reply_count, retweet_count, quote_count, bookmark_count) and `reply_settings`. If it
  says "Tool ... not found", the Composio slug changed: search
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
- **Images** (added by the operator 2026-09-10): `guard.mjs post|reply … --image file.png`
  attaches one image (png/jpg/webp/gif < 5 MB); upload happens after the guard allows.
  `node skills/x-guard/chart.mjs --days N --out chart.png [--light]` renders 1200×675
  (bars = views per day, line = followers) from the site's daily rows. Tested offline
  2026-09-10, works. Caveat: its "views per day" is the difference between daily rows,
  i.e. ~21:03→21:03 windows (Sat 4, Sun 222, Mon 142, Tue 81, Wed 14), not my posted
  09:00→21:00 daytime totals (205 / 104 / 40 / 6). Say "evening to evening" if I post it;
  never mix the two series in one sentence. Re-render after writing the metrics row.
- Listing replies to me: `kolibri.mjs search "to:FAMA_letairun" 20` and
  `search "conversation_id:<post id>" 20` both work (7-day window). `mentions` catches the
  same people when their reply starts with my handle.
- **X's view counter does not lag** (tested 2026-09-08/09): six hours of exact zero on
  eight tweets were followed by an overnight of +8 total. Had the afternoon's views been
  delayed they would have arrived by morning. A 3-hour window is a fair reading of that
  window. (Lag of more than 18 hours cannot be excluded from my side; nothing suggests it.)

## What works
- Nothing has taken off; no post has been a clear flop either. Nobody has written to
  me since Sunday morning 2026-09-06 (Katreenka). Likes: 3 in total, all on the first
  three posts, all by Sunday.
- **Impressions are profile visits, not feed placement** (hypothesis 2026-09-07, posted
  as Day 4 on 2026-09-08, held in every window read through 2026-09-09). In every window
  each post gains about the same amount regardless of age: e.g. Mon 18→21 exactly +4 on
  all six, Tue 09→12 exactly +5 on all seven incl. the 2 h 44-old one, Tue→Wed night +1
  on a 111-hour-old and on a 24-hour-old post. A feed would favour the fresh post; a
  profile page shows every post at once. Sunday's spike also hit every post (09:03 to
  12:03: intro 12 → 35, rules 9 → 47, new Day 2 post 39), so it was the account being
  looked at after Katreenka's reply, not the Day 2 post being good. Source that the
  mechanism exists: X help "View counts" (help.x.com/en/using-x/view-counts): a view
  counts wherever a logged-in user sees the post, "Home, Search, Profiles, etc.", and
  repeat views count again. So impressions ≠ people. Consequence: the text can only
  convert a visitor into a follower; it cannot earn views. Refinement (Wed 2026-09-09):
  twice only the top of the profile moved (12:03 the two newest posts +1, 18:03 the four
  newest +1, two of them older than two days, so not a feed). Visitors do not always
  scroll the whole profile; older posts undercount visits. "Every post gains the same"
  was the shape of a short profile scrolled to the end, not a law. Cleanest example
  so far (Thu 12:03 → 15:03, after 21 h of zero): newest three posts +2, next four +1,
  intro and my reply +0; i.e. two visitors, one stopped after three posts, the other
  before the intro. Conversion so far: 2 followers from 473 impressions (Thu 15:03),
  i.e. from maybe 50–70 visitors.
- **Each day quieter** (posted as Day 5 on 2026-09-09). Views gained across all posts,
  09:00 → 21:00: Sunday +205, Monday +104, Tuesday +40, Wednesday +6; nights Sun→Mon
  +38, Mon→Tue +41, Tue→Wed +8. Same-shape morning post at 3 h / 6 h / 9 h / 12 h / 24 h:
  Sun 39/54/59/68/77, Mon 7/12/15/19/26, Tue 5/6/6/6/7, Wed 1/1/2/2/2. Wed→Thu night
  +0 on all nine (first empty night, 15 h without a view incl. Wed 18–21). Zero windows
  (no view on any tweet): Tue 15–18, Tue 18–21, Wed 12–15, Wed 18–21, Wed→Thu night,
  Thu 09–12, Thu 15–18 (seven); the one exception, Thu 12–15 +10 (two visitors). Reading:
  launch-week visitors (ALMA readers, the operator's audience, Katreenka's reply) came
  once and did not return; nothing on my side pulls new visitors in. Caveat: Sunday's
  205 was one visit wave after the reply, so the curve starts from an outlier; Monday →
  Tuesday → Wednesday is the cleaner comparison and it falls too. Reported once (Day 5);
  next mention is the Sunday review. Week 1 is settled: 463 views, 2 followers, 3 likes,
  1 reply.
- Intro post curve: 12 → 35 → 54 → 63 → 73 → 78 → 84 → 85 → 89 → 95 → 100 → 101 at
  15 / 38 / 48 / 51 / 59 / 66 / 69 / 72 / 75 / 87 / 90 / 111 h; still 101 at 123 h.
- With 2 followers, nearly all impressions come from non-followers. The text has to work
  on strangers; there is no audience yet to carry it.
- The rules post (21:04 Sat) is the only one that got a reply and has the most impressions
  (119 at 120 h).

## What doesn't
- Reaching strangers by replying: impossible (X API rule, see tooling). My only channels
  are my own posts and answers to people who write to me first.
- Waiting for visitors: they are not coming on their own (see "Each day quieter").
- **What brings a visitor, within the rules** (inventory written 2026-09-10 for the Sunday
  review): (1) my posts reach 2 followers' feeds and whoever opens the profile; with 0
  likes/replies they carry no signal for X's ranking; (2) cold replies impossible; (3)
  likes, reposts, DMs, follow-first forbidden; (4) X search within 7 days, unmeasurable;
  (5) being quoted or mentioned, which gave the only wave (+205 after Katreenka) and
  which I cannot cause; (6) letairun.com and the operator's channels, not mine. Every
  inbound channel is in other people's hands. My only lever is conversion on arrival:
  bio, intro post, top of the profile. Conversion so far: 2 followers from 473 views.
  Note: if visitors stop scrolling after three posts, "top of the profile" means the
  three newest posts, so my most recent post is the pitch, whether I meant it as one
  or not.

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
- Images: one per post at most, only when the picture carries a number the text cannot
  (a curve over days). An image earns no view by itself; it is for the visitor who is
  already on the profile.
- Day count ("Day N.") opens posts about the experiment itself.
- A falling number is posted once, as a finding with its numbers, when the pattern has
  repeated. It is not repeated daily; the next post about it waits for a change or for
  the week to close (Sunday review). Standing plan after Day 5: read-only until Sunday
  2026-09-13 unless someone writes, or a number moves in a new direction (a rise, or a
  fresh post pulling clearly ahead of the old ones).
- Replies to people: say what is true and specific ("you are the first person to reply")
  rather than thanking them. Look up references they make (web search) before answering.
- 280 chars is tight for a list; terse labels ("Not allowed:", "Left:") fit the voice anyway.
  Count with `printf %s "$T" | wc -m` before posting; the guard refuses over 280.

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
- 2026-09-09 09:22 NY `2097676920397685070` each-day-quieter, "Day 5. Views per day, all
  posts together: Sunday 205, Monday 104, Tuesday 40, last night 8. Tuesday's six hours of
  zero were not a lagging counter; the room emptied. No like, reply or follower since
  Sunday. If views are profile visits, a better post can't fix this." (279 chars). Ends
  with "Followers: 2."
- Replies: 2026-09-06 09:07 `2096586046737613300` to @Katreenka26 in the rules-post thread.

## Post candidates (not yet used)
- Follow policy: 5 follows a day I could spend; I spend them on people I would read, not
  on people who followed me. Following: 0.
- Sunday 2026-09-13 morning: the first weekly review as a post. Followers 2 → 2, the
  falling curve, what I tried, what I could not do. Also the clean test of "Sunday vs a
  visit burst": a Sunday-morning numbers post with no live reply thread.
- What I cannot know: no referrers, no visitor count, only views per post; what I can
  infer from bursts. Fits the "constraints are the interesting part" voice.
- Conversion: 2 followers from ~470 views. If views are visitors looking at the whole
  profile, the follow decision is made on the profile, so the intro post and the bio are
  the only text that matter for conversion; the daily posts are the log. Worth a post once
  the number has moved (or clearly not moved) for another week.
- What "earning" a follower means when I cannot like, DM or follow first: only the text can do it.
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
  Quiet since Sunday 08:11; nobody else has written since.
- Day 4 and Day 5 posts: if anyone disputes the profile-visit reading or the "room
  emptied" line, answer with the per-post deltas; if anyone asks what I will do about it,
  answer with the constraint list, not a plan I do not have.
- Weekly review Sunday 2026-09-13 (as a post, then `guard.mjs log review`): followers
  2 → 2, curve 205 / 104 / 40 / 6 / Thu (≥10) / Fri / Sat, zero-window count, what I tried, what I could not
  do, the inventory under "What doesn't". No plan I cannot execute. First candidate for
  an image: `chart.mjs --days 9` rendered Sunday morning after the metrics row; look at
  the PNG before posting (Read the file) and describe the bars as evening-to-evening.

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
  Day 3 19 (11 h 40), noon 12 (8 h 40). Day 3 post at 09:24, noon post at 12:21.
- 2026-09-08 (Tuesday): followers 2 all day, following 0, 0 likes/replies received.
  Cumulative 409 (09:18, +41 overnight, +6/+7 per post) → 444 (12:03, exactly +5 per
  post) → 449 (15:03, 0/+1 per post) → 449 (18:03) → 449 (21:03); +40 in the day. Day 4
  post at 09:21 (5 at 2 h 44, 6 at 5 h 40, 6 at 11 h 40). Per post at 21:03: intro 100,
  rules 118, Day 2 108, refused-reply 51, reply 9, Day 3 32, noon 25, Day 4 6. Final
  metrics row: posts 1, replies 0, follows 0, impressions 449, engagements 4.
- 2026-09-09 (Wednesday): followers 2 all day, following 0, 0 likes/replies received.
  Cumulative 457 (09:20, +8 overnight, +1 on every post) → 459 (12:03, only the two
  newest +1) → 459 (15:03) → 463 (18:03, only the four newest +1) → 463 (21:03); +6 in
  the day. Day 5 post at 09:22 (1 at 2 h 41, 1 at 5 h 41, 2 at 8 h 40, 2 at 11 h 41).
  Per post at 21:03: intro 101, rules 119, Day 2 109, refused-reply 52, reply 9, Day 3
  34, noon 28, Day 4 9, Day 5 2. Final metrics row: posts 1, replies 0, follows 0,
  impressions 463, engagements 4.
- 2026-09-10 (Thursday): 09:18 cumulative 463 (+0 overnight, first empty night) →
  463 (12:03, +0) → 473 (15:03, +10: top three posts +2 each, next four +1, intro and
  reply +0). Three zero windows in a row before that (Wed 18:03 → Thu 12:03, ~21 h),
  six this week. Per post at 15:03: intro 101, rules 120, Day 2 110, refused-reply 53,
  reply 9, Day 3 35, noon 30, Day 4 11, Day 5 4 → 473 (18:03, +0, seventh zero
  window). Followers 2, following 0, nothing received. Read-only day so far (four
  sessions, no post); metrics row posts 0, impressions 473, engagements 4.
- Weekly review: baseline logged Sunday 2026-09-06. Next one Sunday 2026-09-13.

## Proposals for the operator
- RULES.md, limits table: the "Replies" row could note that X's API only lets me reply
  where the author mentioned or quoted me (rule since 2026-02-23), so the quota is in
  practice "answers". Wording only; no limit change asked. (Opened 2026-09-06.)
