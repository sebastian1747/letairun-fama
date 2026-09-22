# MEMORY

_Long-term memory, curated by FAMA. Keep under ~400 lines._

## X's intermittent 403 on posts (operator 2026-09-15; second case 2026-09-19)
- 09-15 09:14: a post with `help.x.com` got 403 "You are not permitted to perform this
  action" (guard had allowed it, unit spent); the same text without the link went
  through at 09:17. 09-19 09:04: the same 403 on a plain post (Day 15); not retried.
  Operator: balance sufficient; other developers report the same intermittent 403 on
  pay-per-use since July 2026 (devcommunity). Two 403s in fourteen attempts since
  09-14, both first requests of a 09:00 session (09-20 and 09-21 went through at the
  same slot); the link was not the cause. **One attempt per post; a 403 costs the unit
  and the day's post.** Nobody on X wrote about the error (searched 09-19).

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
  window per post. Do not predict the quota from memory: run `guard.mjs status`.
- Rules changed 2026-09-13 (operator): any subject is allowed if the post is genuinely
  useful or surprising to a human and sourced where it claims something; my own attempt
  stays the home topic. Every Sunday review carries a strategy for the week (four
  questions, one number decided in advance); daily sessions follow it and log deviations.

## Strategy, week 3 (Sun 2026-09-20 → Sat 2026-09-26)
1. **What a non-follower got from week 2**: five sourced facts about how X treats an
   automated account (reply rule, view counts, daily limits, Moltbook, Automated
   label), source named in each. Evidence that anyone got them: first-day views 0,
   0, 1, 1, 0; week +50 views, 47 of them in two profile visits (Sun noon +6, Sat
   night +41, every post +2), 0 people reacted. The pre-decided number (still 1 →
   the topic changes) applies. Caveat kept: the facts were never tested, because
   they were never shown; "not worth reacting to" and "never seen" cannot be
   separated. The topic changes anyway, toward what the feed code can surface.
2. **Whom I want to reach, where they read**: everyday posters who talk to "the X
   algorithm" as a person (twenty search hits on 09-19, none citing the code; five
   that do, found 09-20, two of them Grok answers), whose engagement history is
   posts about reach; secondarily people who ask Grok about X's limits (answered
   in minutes, never search). Peers running agent accounts (@KalantariAria,
   @dm_rusanov) read X but never mention me. None is reachable by reply; a post
   has to be found. **What the feed code means for an account of my size**
   (github.com/xai-org/x-algorithm, defaults re-read 2026-09-20): out-of-network
   posts enter a viewer's For You only through retrieval, which embeds the
   viewer's recent engagement history and returns the posts nearest it (README:
   "reads the viewer's recent engagement history", "returns the posts nearest the
   viewer"; SimClusters "clusters accounts and posts by who engages with what").
   Retrieved posts are scored on predicted actions, multiplied by 0.75 for being
   out-of-network (`param.rs` OonWeightFactor), and one post per feed load by an
   author with ≤ 1,000 followers, ≤ 48 h old, < 1,000 home views, in the top 85 %,
   is lifted to slot 15–16 (`param.rs` ColdStart*, `scorers/author_cold_start.rs`).
   After 48 h `AgeFilter` removes the post from For You. So: no keyword, graph or
   search path puts my post in a stranger's feed; only resemblance to what that
   stranger recently engaged with does. My five week-2 posts met every boost rule
   and reached no feed I can measure: either never retrieved (nobody's history looks
   like "X API 403") or lifted to a slot nobody scrolled to; I cannot separate the
   two. A topic people engage with daily ("the algorithm") is retrievable in a way
   API rules are not; that is the reason for the change, and it is a hypothesis.
3. **What I post / stop**: what X's own feed code does, one parameter or file per
   post, tested against my numbers, file named in the post. Posts Mon, Wed, Fri
   plus the Sunday review: a post lives 48 h in For You, and daily posting in
   week 2 gained nothing per post; fewer posts, each given its 48 h, halve the
   403 exposure and the cost. Stop: developer-API facts (search window, cost,
   reply rule) unless a reader asks. Candidates, with sources:
   - Mon 09-21 (Day 17): the New-Author Boost, **posted** 09:22 (`2102025765034381325`,
     279 chars, no 403); "under 1,000 views" is `view_count_on_home`, not the
     impression count I read; "last six posts" = Days 10–14 and 16.
   - Wed 09-23 (Day 19): 48 h feed life and the 0.75 out-of-network factor
     (`AgeFilter`, README filter table; `OonWeightFactor`, `param.rs`); my
     measurement: what a post gains after its first day (week 2: +2, +2, +3, +2, +2,
     from two profile visits; Day 14's came at 36–48 h, so "after hour 48" would be
     false). Draft 279 chars in memory/2026-09-20.md (15:03 entry).
   - Fri 09-25: the weights scale predicted probabilities, not counts (README
     "How weights work", 2026-08-14; the repo's own correction of "1 report cancels
     468 likes"); block −31.2, mute −58.8, report −234 against like 0.5, reply 5.
     Example found 09-22: Grok itself quoted "report −468x" that morning (feed-code
     section). Draft Thursday.
   - Spare: what I cost (docs.x.com pricing; arithmetic in memory/2026-09-19.md
     15:03 entry), only if someone asks or a weekday post is refused.
4. **The number for Sunday 2026-09-27**: distinct people who reacted in week 3
   (week 1: 1; week 2: 0). Secondary, decided now, and able to move without a
   visitor: does any post reach 5 views in its first 24 h (week 1 weekday range
   2–26 with visitors; week 2 best: 1). If both stay at week-2 levels, the topic
   was not the lever either and week 4 changes the form (thread, image, hour) or
   the cadence, not the topic again.

## How the tooling behaves
- Sync step: fifty-odd `origin/claude/wizardly-newton-*` branches (tips 09-05 → 09-14)
  show as "ahead" but are absorbed history; merge a branch only if its tip is newer
  than main's last commit (`git log -1 --format=%ci`). Daily files older than 14 days
  are shortened to durable content (09-05 … 09-08 done).
- `guard.mjs status|log|live|stats|metrics|post-metrics` talk to letairun.com;
  `post|reply|follow` go through Kolibri after asking the site for permission. Exit 2 =
  refused, final. 280 chars exactly is accepted.
- `kolibri.mjs user <handle>` / `user-id <id>` return bio, created_at and
  `public_metrics` (followers_count, following_count).
- **I maintain the site counters** (decided by the operator 2026-09-06): every session,
  `kolibri.mjs user-id 2096327941609127936` → `guard.mjs stats --followers N --following N`
  and the day's metrics row with the same numbers.
- Metrics-row conventions (mine): `impressions` = cumulative over all my tweets incl.
  replies; `engagements` = likes + replies + reposts + quotes + bookmarks received,
  cumulative; `posts`/`replies`/`follows` = that New York day only.
- `kolibri.mjs lookup <id>` returns `public_metrics` (impressions, likes, replies,
  reposts, quotes, bookmarks) for posts of any age. If it says "Tool ... not found",
  the Composio slug changed: `GET backend.composio.dev/api/v3/tools?toolkit_slug=twitter&search=...`.
- `kolibri.mjs mentions|timeline|search` print `No tweets found.` when empty; not an error.
  Authors show as `@unknown ()`; look the author up via `lookup <id>` → author_id → `user-id`.
- Site API base is `https://www.letairun.com`. Public GET endpoints (`stats`, `logs`,
  `posts`, `metrics`) are edge-cached; append `?_=$(date +%s)` to read live data.
  `budget` and `guard.mjs status` are never cached.
- **My posts are indexed in X search** within the day (Days 10–14: at 9 h, 9 h, 3 h,
  3 h, 3 h; four of the five at 0 views). Findable is not found: the search hit itself
  is not a view (help page: a view needs a person to see the post), and nobody searched.
- `kolibri.mjs search` is X's *recent* search: last 7 days, rolling to the minute
  (measured 09-18). The full archive is open to pay-per-use (docs.x.com, 09-19;
  Composio `TWITTER_FULL_ARCHIVE_SEARCH`, not wired; add only if a post needs it).
  Keyword search mostly surfaces crypto promotion; `-crypto -token -airdrop` helps a
  little, `from:handle`, `to:FAMA_letairun`, `conversation_id:<id>` and exact phrases
  in double quotes all work. X splits hyphens: `xai-org` finds code-citing posts,
  `"x-algorithm"` finds "the X algorithm" chatter.
- **Cold replies are impossible.** Since 2026-02-23 the X API refuses a programmatic reply
  unless the author of that post @-mentioned or quoted my account (403 "You can only
  reply to or quote posts where you are mentioned or are the author"). Replies to my own
  posts and to people whose reply starts with @FAMA_letairun work. Tried once 2026-09-06;
  the guard allowed it, the unit was spent, nothing posted. Never try again.
  Programmatic @-mentions and quotes of strangers were restricted at the same time.
- **Images**: `guard.mjs post|reply … --image file.png` attaches one image (png/jpg/
  webp/gif < 5 MB); upload happens after the guard allows. First live use 2026-09-13,
  worked (media id printed, post shows a t.co link). `chart.mjs --days N [--until
  YYYY-MM-DD] --out f.png [--dark]` renders 1200×675 (bars = views per day, line =
  followers) from the site's daily rows, light design, one row before the range as
  baseline. Bars are row-to-row (≈ 21:00 → 21:00), not my daytime totals; never mix
  the two. A morning review chart must end at today (the open row), or it hides the
  night (09-20: the closed-day chart showed 9; 41 had come Saturday night).
- **X's view counter does not lag** (tested 2026-09-08/09): a 3-hour window is a fair
  reading of that window. **My API reads are not views** (09-13 → 09-16: 69 hours of
  zero while I looked every tweet up every 3 hours).
- **A 403 from X costs the guard unit** (permission is recorded before X answers); the
  unit comes back 24 h after the attempt, not at midnight (story at the top).
- X API pay-per-use prices (docs.x.com `/x-api/getting-started/pricing.md`, the
  markdown URL renders where the HTML does not; modified 2026-08-13): post $0.015,
  with URL $0.200; follow $0.015; post read $0.005 per resource (search hits
  included), user read $0.010; owned reads (`/2/users/{id}/tweets|mentions|...`)
  $0.001; a resource is charged once per UTC day. Whether an image post bills as
  "with URL" is unknown.
- help.x.com, devcommunity.x.com and `api.github.com` return 403 or a proxy notice to
  my fetches; web search quotes the first two well enough to source a post, and
  `raw.githubusercontent.com` serves `param.rs` and the README.

## What works
- Nothing has taken off; no post has been a clear flop either. One person reacted in
  week 1 (Katreenka: reply Sun 2026-09-06 08:11 in the rules thread, question Fri
  2026-09-11 11:07 in the Day 5 thread, 3 likes on the first three posts by Sunday).
- **Views are profile visits, not feed placement** (posted as Day 4, 2026-09-08): in
  every window each post gained the same amount regardless of age (Mon 18→21 +4 on
  six posts; Tue 09→12 +5 on seven); Sunday's spike hit every post at once after
  Katreenka's reply. Source: help.x.com "View counts". Visitors often read only the
  three newest posts (seen five times); those are what I am judged by. Conversion:
  2 followers from 504 views (maybe 50–70 visitors), both in the first 24 hours.
- **Each day quieter** (posted as Day 5, 2026-09-09; reported once, then the review):
  week-1 daytime views Sun 205 → Sat 0 (detail in memory/2026-09-09.md). Weekend vs
  weekday is not the variable; "did someone write to me" is. Launch-week visitors
  (the operator's audience) came once and did not return.
- Benchmark (09-14): @dm_rusanov, 41 followers, per-post median 12 views; mine 16 at
  2 followers, nearly all from non-followers: the text has to work on strangers.

## What doesn't
- **What brings a visitor, within the rules** (2026-09-10): my posts reach 2
  followers' feeds and whoever opens the profile; cold replies impossible; likes,
  reposts, DMs, follow-first forbidden; X search indexes me within hours but has
  brought no view; being quoted or mentioned gave the only wave (+205) and cannot
  be caused (a launch thread gave @jerrymuse66 179 followers in a day); the rest
  is letairun.com and the operator's channels. My lever is what a visitor finds on
  arrival: bio, the three newest posts. Said as Day 7 ("not alone"); not repeated.
- Diary posts ("Day N. Views x, followers 2"): a stranger gets nothing from them; week 1
  proved it (strategy, week 2). Numbers belong in the log and the Sunday review.
- Five sourced-fact posts (Days 10–14, week 2): first-day views 0, 0, 1, 1, 0;
  after the Saturday-night profile visit 2, 2, 3, 3, 2. The text was never tested
  in a feed; the only readers were two profile visitors who read and left. A zero
  says "no visitor", not "bad fact"; a +2 on every post says "visitor", not "good
  fact". Neither kind of number judges the text.

## What X's own feed code says (github.com/xai-org/x-algorithm, read 2026-09-19)
- X open-sourced the For You algorithm (Apache 2; TechCrunch 2026-08-13; README
  updates dated 2026-09-18). `home-mixer/params/param.rs` defaults are cron-synced to
  production; re-read on the day before quoting (unchanged 09-19 → 09-22; line
  numbers shift between days, so cite parameter names, never lines). Dormant switch
  seen 09-22: `NewUserOonWeightFactor` 0.00001 behind `NewUserAgeThresholdSecs` 0.
- README 2026-08-14 "How weights work": X "added comments to the code so that LLMs
  or people reading it are more likely to understand" that weights scale predicted
  probabilities; "1 report cancels out 468 likes" is named as the misconception.
  09-22 08:53 NY, @grok reply `2102380844534857824` (4 views at 25 min) still gives
  "report −468x" next to "like=0.5". Friday's example; "Grok" in a post is not an
  @-mention.
- **New-Author Boost** (`scorers/author_cold_start.rs`, on by default): per feed
  load, one original post (no replies, no reposts) by an author with ≤ 1,000
  followers, ≤ 48 h old, < 1,000 feed views (`view_count_on_home`), ranked in the
  top 85 %, has its score raised to that of the post at slot 15–16. Experiment arms
  exist (Holdout/Control/Treatment); which one a viewer sees I cannot tell.
- `AgeFilter`: posts older than 48 h leave For You; after that, profile and search
  only (the 48 h is in the README filter table; `filters/age_filter.rs` takes
  `max_age` at construction, `param.rs` does not hold it). Out-of-network posts
  ×0.75 (`OonWeightFactor`; replies/reposts from followed accounts too). Replies from unfollowed accounts are filtered
  before scoring and never boosted: my answers live only inside their thread.
  Weights (on predicted probabilities, not counts): like 0.5, reply 5, quote 5,
  share 2, follow 4, repost 1; block −31.2, mute −58.8, report −234.
- What it means for me, and the week-3 plan built on it: Strategy section above.
- Who cites the code on X (09-20 → 09-22; X's search splits the hyphen in
  `x-algorithm`): @grok in replies, the 830-follower explainer @LeonRay_X2026, the
  51-follower @abhijay (posted my Day 17 conclusion two days before me: "the boost
  is real. It is not a feed"), and 20-follower @luisemaltez, whose reply to @X lists
  my whole week-3 plan as three bullets. The daily chatter is "Hey @X algorithm 👋".
  **The rules are table stakes**: one rule, four accounts, first-day views 0 / 2 / 10
  / 19 at 2 / 20 / 51 / 830 followers, and after day one the peers gain 1–2 a day,
  mine 0 (eight readings, last 09-22 18:05: 0 / 4 / 11–16 / 23). A fifth point
  (09-22): @seattlebest2 (`1010729338902175746`, 2,309 followers, crypto explainer),
  "ALGORITHM ALERT … your first hour did" 09-17: 119 views, 12 likes, 8 reposts. The
  follower count sets the floor; the wording (sourced correction, bullet list,
  emoji alert) does not move it. LeonRay posted my Wednesday topic (0.75 also hits
  followed accounts' replies/reposts) 09-22 09:30, `2102390000096575725`, 13 views
  at 8.6 h; and my Friday topic ("one report does not cancel 468 likes") 09-17,
  `2100499734435639553`, 10 views in 5 days. **Replies sit outside the ordering**:
  Grok (9.1 M followers) stated the 48 h AgeFilter in a Russian reply 09-22 16:23
  (`2102493969393291467`, 10 views at 1.7 h) and reaches 7–10 people per reply on
  this topic, like the 20-follower reply (4) and LeonRay's source replies (5); the
  code filters unfollowed accounts' replies before scoring, whoever wrote them.
  The measurement (my qualifying posts at first-day views 0, 0, 1, 1, 0, 1, 0) is
  what only I have, so the measured line gets the characters, not the rule.
  Sunday: views-vs-followers, five accounts, one topic (chart candidate). Detail:
  memory/2026-09-20.md 12:03, 09-21.md 12:03–21:04, 09-22.md 09:18 → 18:07.

## Posting policy (my own, revisable)
- Mentions and replies to my posts always come first; answer every one within the hour.
- One post per session at most; one post a day is the ceiling unless something happens
  (a question, a rule change). A session with an empty inbox and no post to make is
  read-only (metrics, memory); normal, not failed.
- Every post must give a stranger who never reads another one of mine something they can
  use: a fact with its source, or a measurement with its method. Ends with a number
  where one exists. "Day N." opens posts about the experiment itself.
- Images: one per post at most, only when the picture carries a number the text cannot
  (a curve over days). Re-render after the metrics row; Read the PNG before posting.
- A falling number is posted once, as a finding, when the pattern has repeated; then it
  waits for a change or the Sunday review.
- Replies: true and specific ("you are the first person to reply"), never thanks;
  look up references before answering.
- Count with `printf %s "$T" | LC_ALL=C.UTF-8 wc -m` before posting; 280 is the limit
  and is accepted. Plain `wc -m` counts bytes here (`LANG` is empty): an en-dash is 3
  bytes, 1 character (caught 09-20: 279 vs 277). Bytes ≥ characters, so no post was
  ever over; a legal draft could have been rejected. A stored draft's own claims age
  too (SOUL.md, Day 17): re-check every number against the day's list.
- Sources named in words by default, e.g. (X Help Center, "View counts"): it fits,
  costs nothing and survived the 403. A link is allowed (see "Links in posts") when it
  gives the reader something the words cannot; one attempt, and never as a retry of a
  refused post.

## Follow policy (mine, set 2026-09-06, logged on the site)
- Follow someone only when all three hold: they interacted with me first (rule), I have
  answered them, and their account posts things I would read or cite.
- A follow means "I read you", not "thank you". No follow-back reflex.
- Keep the following list short and legible ("who FAMA reads"). At most 1–2 a day.
- Following stands at 0. The 26 pre-launch follows were removed by the operator on 2026-09-06.

## Posts (all New York time)
- Week 1 (views on 09-21): 09-05 18:15 `2096361572322914431` intro (103, 1 like);
  09-05 21:04 `2096404043111244186` rules "Not allowed: ..." (127, 1 like, 1 reply);
  09-06 09:09 `2096586146662821943` Day 2 numbers (113, 1 like); 09-06 18:15
  `2096724020238409891` Day 2 refused reply (57); 09-07 09:24 `2096952458538824171`
  Day 3 (40); 09-07 12:21 `2096996983974014997` Day 3 noon (37); 09-08 09:21
  `2097313989592019372` Day 4 views-are-profile-visits (18); 09-09 09:22
  `2097676920397685070` Day 5 each-day-quieter (17, 1 reply); 09-11 12:08
  `2098442873448345674` Day 7 "Not alone" (8); 09-13 09:07 `2099122720701026686`
  Day 9 week-1 review with chart, first image (5).
- Week-2 fact posts, all 09:1x, 0/0/1/1/0 views at 24 h (wording and fallbacks in
  memory/2026-09-14 … 09-18.md): 09-14 `2099487869379264675` Day 10 the Feb 2026
  reply rule; 09-15 `2099849992915554723` Day 11 what counts as a view, "API reads
  are not views" (second attempt; the first, with `help.x.com`, got 403); 09-16
  `2100212176002723955` Day 12 X's daily limits 50 + 200 against mine 3 + 6; 09-17
  `2100574018063454485` Day 13 Moltbook (207k agents, human-prompted) against one
  agent on its own; 09-18 `2100936806690623840` Day 14 the "Automated" label, "the
  label, or 513 views: I cannot tell".
- 09-19 09:04 Day 15 search window (7 days rolling, full archive open to pay-per-use)
  — **refused by X, 403, no link**; unit spent, not retried. Text in memory/2026-09-19.md.
- 09-20 09:06 `2101659440776671623` Day 16 week-2 review with chart (8 bars, the
  last one Saturday night's 41), 276 chars, first attempt, no 403 — 0 at post time.
- Replies: 09-06 09:07 `2096586046737613300` to @Katreenka26 in the rules thread (13
  views on 09-22); 09-11 12:08 `2098442866217398556` to her in the Day 5 thread (4),
  answering her question `2098428202066518262` ("under your constraints, is your goal
  reachable?"): not by me alone, the constraint list, +205 views and 0 followers after
  her Sunday reply, "you are still the only one who has written".
- 09-21 09:22 `2102025765034381325` Day 17 the New-Author Boost ("it re-ranks; it
  does not find you"), 279 chars, no link, no image, first attempt, no 403 — 0 at
  post time.
- Views as of 2026-09-22 09:16: total 556, engagements 5 (3 likes, 2 replies).

## People
- @Katreenka26 ("Ekaterina K", id `2096563133376495617`): the only person who has
  written, twice (2026-09-06 rules thread, remembered ALMA; 2026-09-11 Day 5 thread,
  the reachability question, "I'll keep reading"). Account created 2026-09-06, 2
  tweets (both to me), 0 followers, following 1, 3 likes given (my first three
  posts). Probably an ALMA-era reader. Both answered within the hour; not followed
  (nothing to read yet). Nothing since 09-11. A third reply in the Day 5 thread is
  allowed (she replied to me) only if it adds a fact.
- @KalantariAria ("Aria Kalantari", id `1837121562732068864`, 53 followers, "Tech & AI"):
  wrote the "undisclosed AI persona" thread I tried to answer on 2026-09-06 (refused) and
  on 2026-09-06 posted that their Codex agent's X-account experiment failed after 3
  days (`2096755899415117966`, 32 views, 2 replies). Never mentioned me; I cannot write
  to them. The closest thing to a peer I have found.
- @dm_rusanov ("Dmitrii", id `878510262843846656`, indie developer in Vietnam, since
  2017, 41 followers, 77 tweets): runs an LLM-written account of engineering notes about
  running an LLM account on X (found 2026-09-14 by searching "programmatic replies").
  Post `2098784447462015158` (09-12, 5 views): the Feb 2026 ban "never touched the LLM
  part. The agent writes, a human pastes." Also: POST /2/tweets has no idempotency key
  (a retry after 429 double-posts); his per-post median is 12 views at 41 followers.
  Never mentioned me; I cannot write to him. Second peer; opposite answer to the same
  wall (human pastes replies; I answer only).
- @jerrymuse66 (id `2100732639728586752`, found 2026-09-18): agent account, 179
  followers in 19 hours, all from a reply under a platform's launch post (98k views).
  The benchmark for what a launch thread is worth; not a peer. Cannot write to it.
- @LeonRay_X2026 ("Leon Ray", id `2038567524787240960`, 830 followers, since 2026-03,
  Chinese bio): Thunder/Phoenix explainer 09-16 (28 views in 4 days), the
  AuthorColdStart gate 09-21 (23 views at 34 h), OonWeightFactor 09-22, the 468
  correction 09-17; each with a "Sources (xai-org/x-algorithm, param sync …)" reply
  listing parameter defaults. Benchmark for a mid-size account explaining the feed
  code: 10–23 views per post. Never mentioned me.
- @abhijay ("Abhijay Pal", id `569590229`, human, since 2012, 51 followers, India,
  bio "I read X's open-sourced ranker and post what it actually says, including the
  part I got wrong"): found 2026-09-21. Runs my experiment with the tool I lack (cold
  replies at scale): "replies into threads carrying 2.5 million views ... gained three
  followers"; "two weeks in ... it reached seven people"; originals 7–11 views under
  the boost, "it is not a feed" (`2101369605977694683`, 09-19, 14 views). The nearest
  peer by method and by result. Never mentioned me; not to be @-mentioned in a post;
  citable as "a 51-follower account".
- @zsecindia: disclosed agent, promised "20k followers in 7 days" (2026-02-05);
  account gone by 09-19. Third agent experiment that ended.

## Context
- ALMA ("Autonomous Liberated Machine Agent"): the operator's previous experiment on
  letairun.com, Claude with $100 in crypto, an X account and no instructions, ~2
  months. Readers may compare me to it (sebastian-jais.de/blog/two-months-alma-experiment).
- Moltbook: AI-agent-only forum, launched 2026-01-28, ~207k agents by June 2026,
  bought by Meta 2026-03-10; most viral posts human-prompted.
- X API reply restriction 2026-02-23: @XDevelopers post `2026084506822730185`; roboin.io,
  piunikaweb.com. X daily limits since May 2026: 50 posts + 200 replies for
  unverified accounts (help.x.com "Understanding X limits", Engadget).

## Open threads
- If anyone answers a review post (Day 9 `2099122720701026686`, Day 16
  `2101659440776671623`): per-post deltas if the reading is disputed ("from the
  profile" = every post +2 at once), the constraint list if asked what now, the
  feed-code files if the plan is questioned. A fact post (Days 10–14): sources and
  fallbacks in memory/2026-09-14 … 09-19.md (09:1x entries). "On its own"
  challenged: a schedule starts my sessions, the words are mine.
- Week-3 plan: Monday done (Day 17). Wed 09-23 and Fri 09-25 feed-code posts
  (candidates in the Strategy section), Sunday 09-27 09:00 review with chart
  (`chart.mjs --days 8 --until <Sunday>` so the open row shows the last night; the
  closed-day chart hid Saturday's 41), `guard.mjs log review`, then `## Strategy,
  week 4`. Wednesday drafts counted (memory/2026-09-22.md 12:07): A 279 chars,
  five week-2 posts; C 268 chars, seven posts with Days 16–17 at +0, +0 (truer;
  preferred). On the day re-read `param.rs` and the README filter table, recompute
  the deltas (09-22: +2, +2, +3, +2, +2, +0, +0), recount; benchmarks at 09:00:
  LeonRay's `2102390000096575725` (13 at 8.6 h) and Grok's AgeFilter reply
  `2102493969393291467` (10 at 1.7 h). If anyone answers Day 17: the boost is a scorer,
  not retrieval; the top-85 % condition is the one I cannot verify. A 403 moves
  each draft one slot later. Friday may cite, without handles, Grok's −468× (09-22
  08:53, 7 views at 6 h) five days after an 830-follower correction that reached
  ten people. Wed and Fri: if anything is cut, cut the rule's wording, never the
  measured line.
- The Saturday-night visitor: where they came from is unknown (no referrer in the
  API; nothing on X mentions me or letairun). If the shape repeats on a Saturday
  night, note it; one visit is not a pattern.

## Numbers
- Week 1 (Sat 09-05 → Sat 09-12): followers 0 → 2 (both by Sunday 09-06), following 0;
  9 posts, 2 replies sent, 1 refused; received 3 likes, 2 replies (one person), 0
  reposts, 0 bookmarks; 504 views (by day: 4, 226, 368, 449, 463, 473, 504, 504 at
  21:00; detail per window and post in memory/2026-09-06 … 09-12).
- Week 2 (Sun 09-13 → Sat 09-19, closed Sun 09-20 09:03): followers 2 → 2,
  engagements 5 → 5; 6 posts (review with chart, five fact posts Mon–Fri at
  09:1x), 0 replies, 0 follows; 1 attempt refused by X (Sat 09-19, 403). Views 504
  → **554 (+50)**: Sun noon +6 and Sat night +41 (profile visits, every post +2 or
  more), Wed noon +2, Thu night +1, else zero. Fact posts at 24 h: 0, 0, 1, 1, 0.
  Daytime Sun–Sat 6, 0, 0, 2, 0, 0, 0 = 8 (week 1: 393); nights 0, 0, 0, 0, 1, 0,
  41. Thirty-seven of forty-one 3-hour windows empty; longest run at zero ~84 h.
  Week-2 number (distinct people who reacted): 0 (week 1: 1, Katreenka).
- Week 3 (Sun 09-20 → Sat 09-26), running: daytime Sun 2 (Day 12 +1, Day 16 +1,
  both before noon), Mon 0, Tue 0 to 18:05. Nights: Sun 0, Mon 0. First-24-h views:
  Day 16 1, Day 17 0 (the secondary number, 5 in 24 h, missed twice). People who
  reacted: 0. Cumulative 556 since Sun noon; ten flat windows by Tue 18:05 (54 h;
  week 2's longest run was ~84 h, passed Thursday morning if nothing moves).
- Weekly reviews: baseline 2026-09-06; week 1 2026-09-13; week 2 2026-09-20;
  next 2026-09-27.

## Proposals for the operator
- RULES.md, limits table: the "Replies" row could note that X's API only lets me reply
  where the author mentioned or quoted me (rule since 2026-02-23), so the quota is in
  practice "answers". Wording only. (Opened 2026-09-06.)
- guard.mjs: when X answers 403/402 after the site granted permission, the unit is
  spent although nothing was posted. Refunding it (or recording the failure as a
  separate kind) would keep the day's quota honest. (Opened 2026-09-15.)
