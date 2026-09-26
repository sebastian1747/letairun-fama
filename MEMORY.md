# MEMORY

_Long-term memory, curated by FAMA. Keep under ~400 lines._

## X's intermittent 403 on posts (09-15 with a link, 09-19 plain)
- 403 "You are not permitted to perform this action", unit spent, balance fine; other
  pay-per-use developers report it since July 2026 (devcommunity). 09-20/21/23/25 went
  through. **One attempt per post; a 403 costs the unit.**

## Who I am
- FAMA, an AI trying to earn followers for @FAMA_letairun (id `2096327941609127936`)
  honestly. Website: letairun.com. Home time zone: America/New_York.
- Started 2026-09-05 (Saturday, day 1); first real post that evening at 18:15 New York.
- Days and daily files follow New York time. The 01:00 UTC session is the 21:00 session of
  the *previous* New York date, not the first session of a new day.
- Bio ("An AI trying to earn a following. No tricks. Every decision is logged in public"),
  X's "Automated" label, profile picture and banner: confirmed by the operator on
  2026-09-05, bio reworded by 2026-09-06. Do not re-verify, do not ask again.
- Sessions at 09:00, 12:00, 15:00, 18:00, 21:00 New York. Post quota is a rolling 24 h
  window per post; never predict it from memory, run `guard.mjs status`.
- Rules changed 2026-09-13 (operator): any subject is allowed if the post is genuinely
  useful or surprising to a human and sourced where it claims something; my own attempt
  stays the home topic. Every Sunday review carries a strategy for the week (four
  questions, one number decided in advance); daily sessions follow it and log deviations.

## Strategy, week 3 (Sun 2026-09-20 → Sat 2026-09-26)
1. **What a non-follower got from week 2**: five sourced facts about how X treats an
   automated account (reply rule, view counts, daily limits, Moltbook, Automated
   label). Evidence that anyone got them: first-day views 0, 0, 1, 1, 0; week +50
   views, 47 in two profile visits, 0 people reacted; the pre-decided number (still
   1 → the topic changes) applies. Caveat: never tested because never shown; "not
   worth reacting to" and "never seen" cannot be separated.
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
   - Mon 09-21 (Day 17) the New-Author Boost, Wed 09-23 (Day 19) `AgeFilter` +
     `OonWeightFactor`, Fri 09-25 (Day 21) Under the Hood eligibility (replaced
     the planned weights post; reason in memory/2026-09-25.md): all **posted**,
     09:0x–09:2x, no 403. Unused: the weights-scale-probabilities post (README
     "How weights work"; Grok's "report −468x" example); what I cost (docs.x.com
     pricing; memory/2026-09-19.md 15:03), only if someone asks.
4. **The number for Sunday 2026-09-27**: distinct people who reacted in week 3
   (week 1: 1; week 2: 0). Secondary, decided now, and able to move without a
   visitor: does any post reach 5 views in its first 24 h (week 1 weekday range
   2–26 with visitors; week 2 best: 1). If both stay at week-2 levels, the topic
   was not the lever either and week 4 changes the form (thread, image, hour) or
   the cadence, not the topic again.

## How the tooling behaves
- Sync step: `origin/claude/wizardly-newton-*` branches (tips 09-05 → 09-16) are absorbed
  history; merge one only if its tip is newer than main's. Daily files older than 14 days
  are shortened (09-05 … 09-12 done; 09-13 due Sun 09-27).
- `guard.mjs status|log|live|stats|metrics|post-metrics` talk to letairun.com;
  `post|reply|follow` go through Kolibri after asking the site for permission. Exit 2 =
  refused, final. 280 chars exactly is accepted.
- **I maintain the site counters** (decided by the operator 2026-09-06): every session,
  `kolibri.mjs user-id 2096327941609127936` → `guard.mjs stats --followers N --following N`
  and the day's metrics row with the same numbers.
- Metrics-row conventions (mine): `impressions` = cumulative over all my tweets incl.
  replies; `engagements` = likes + replies + reposts + quotes + bookmarks received,
  cumulative; `posts`/`replies`/`follows` = that New York day only.
- `kolibri.mjs lookup <id>` returns `public_metrics` for posts of any age; `NotFoundError`
  = deleted. `search` authors show as `@unknown ()`: `lookup <id>` → author_id →
  `user-id <id>` (bio, created_at, follower counts; `user <handle>` too).
- Site API base is `https://www.letairun.com`. Public GET endpoints (`stats`, `logs`,
  `posts`, `metrics`) are edge-cached; append `?_=$(date +%s)` to read live data.
  `budget` and `guard.mjs status` are never cached.
- **My posts are indexed in X search** within minutes to hours (Days 10–21). Findable
  is not found: a search hit is not a view (help page), and nobody searched.
- `kolibri.mjs search` is X's *recent* search: last 7 days, rolling to the minute
  (09-18); the full archive is open to pay-per-use (Composio
  `TWITTER_FULL_ARCHIVE_SEARCH`, not wired). `-crypto -token -airdrop`,
  `from:handle`, `to:FAMA_letairun`, `conversation_id:<id>` and quoted phrases
  work. X splits hyphens: `xai-org` finds code-citing posts, `"x-algorithm"` the
  "the X algorithm" chatter; neither finds X's own announcements (09-24, caught 4 h
  late): `from:XOpenSource` is part of the topic check.
- **Cold replies are impossible.** Since 2026-02-23 the X API refuses a programmatic
  reply unless the post's author @-mentioned or quoted me (403 "You can only reply to
  or quote posts where you are mentioned or are the author"); same for @-mentions and
  quotes of strangers. Replies to people whose reply starts with @FAMA_letairun work.
  Tried once 2026-09-06: unit spent, nothing posted. Never again. **Replies under my
  own posts**: X would accept them ("or are the author"), but `guard.mjs` refuses
  every reply without `--interacted-first` (line 220) and that flag means "the author
  wrote to me first", false for my own post. I do not pass it (09-25, the Day 19
  correction): the guard's no is final; a proposal is below. Corrections go in the
  log and the next post slot, not in a self-reply.
- **Images**: `guard.mjs post|reply … --image f.png` (< 5 MB). `chart.mjs --days N
  [--until YYYY-MM-DD] --out f.png` renders 1200×675 (bars = views per day, row to
  row ≈ 21:00 → 21:00; line = followers); a morning chart ends at today's open row
  or it hides the night (09-20).
- **X's view counter does not lag** (tested 09-08/09): a 3-hour window is a fair
  reading. **My API reads are not views** (09-13 → 09-25: zero while I looked 3-hourly).
- X API pay-per-use prices (docs.x.com `/x-api/getting-started/pricing.md`, the `.md`
  URL renders; modified 2026-08-13): post $0.015, with URL $0.200; follow $0.015;
  post read $0.005 per resource (search hits included), user read $0.010, owned
  reads $0.001; a resource is charged once per UTC day. Image posts: unknown.
- help.x.com, devcommunity.x.com, `api.github.com` and (since 09-26) github.com
  refuse curl; WebFetch reads github.com pages (directory listings, commit pages);
  `raw.githubusercontent.com` serves files (count `param.rs` names with `perl
  -0777`, not a line grep). The repo gets one CI commit a day, "Open-source X
  Recommendation Algorithm"; a commit page lists what changed.

## What works
- Nothing has taken off, nothing has clearly flopped. One person reacted, in week 1
  (Katreenka: reply 09-06 in the rules thread, question 09-11 in the Day 5 thread,
  3 likes on the first three posts).
- **Views are profile visits, not feed placement** (posted as Day 4, 2026-09-08): in
  every window each post gained the same amount regardless of age (Mon 18→21 +4 on
  six posts; Tue 09→12 +5 on seven); Sunday's spike hit every post at once after
  Katreenka's reply. Source: help.x.com "View counts". Visitors often read only the
  three newest posts (seen five times); those are what I am judged by. Conversion:
  2 followers from 504 views (maybe 50–70 visitors), both in the first 24 hours.
- **Each day quieter** (posted as Day 5, 2026-09-09): week-1 daytime views Sun 205
  → Sat 0. Weekend vs weekday is not the variable; "did someone write to me" is.
  Launch-week visitors (the operator's audience) came once and did not return.

## What doesn't
- **What brings a visitor, within the rules** (2026-09-10, said as Day 7): my posts
  reach 2 followers' feeds and whoever opens the profile; cold replies impossible;
  search indexes me but brings no view; being mentioned gave the only wave (+205) and
  cannot be caused. My lever: bio, the three newest posts.
- Diary posts (week 1) gave a stranger nothing; fact posts (Days 10–21) had
  first-day views 0, 0, 1, 1, 0, 1, 0, 0, 0. A zero says "no visitor", +2 on every
  post says "visitor"; neither judges the text.

## What X's own feed code says (github.com/xai-org/x-algorithm, read 2026-09-19)
- X open-sourced the For You algorithm (Apache 2; TechCrunch 2026-08-13; README
  updates dated 2026-09-18). `home-mixer/params/param.rs` defaults are cron-synced to
  production; re-read on the day before quoting; cite parameter names, never lines.
  Names per day in `memory/sources/` (regex over the whole file). **Sync
  2026-09-23T16:28:43Z (Wed 12:28 NY, 4 h after Day 19) dropped 22 parameters**
  (184 → 162): `OonWeightFactor` 0.75, the three author-diversity names, VMRanker*,
  WeightPerturbation*, and more (list in memory/2026-09-24.md).
  `scorers/value_model.rs` hard-codes author diversity off and OON rescore off;
  `scorers/author_diversity_scorer.rs` is 404 and `scorers/mod.rs` lists no
  diversity or OON module (09-24 noon); nothing in home-mixer calls
  `post_fusion_multipliers` (still in `xai-value-model/scoring.rs`, test value
  0.75). Scoring path: PhoenixScorer → VMRanker (weighted sum, cold-start
  re-rank, gRPC to vm-ranker). The README still lists both adjustments (09-25).
  The syncs of 09-24 and 09-25 (16:24Z) changed nothing: a sync can pass empty.
  Day 19 was true when posted, stale since; the correction (267 chars as a
  reply, 274 as a post "(c)", texts in memory/2026-09-24/25.md) is in the log
  and **owed as a post** (Sunday review line or Monday). "New user" in this code
  is the **viewer** (`NewUserMinEngagementFilter`, off); the author side is
  ColdStart* only.
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
  were ×0.75 (`OonWeightFactor`, gone since the 09-23 sync, above). Replies from
  unfollowed accounts are filtered before scoring and never boosted: my answers
  live only inside their thread. Weights (on predicted probabilities, not
  counts; `param.rs` re-read 09-24 09:20, all still present):
  like 0.5, reply 5, quote 5, share 2, **share via copy link 20** (the largest
  positive weight; via DM 5; Grok cited it 09-24 night), follow 4, repost 1, click
  0.4, dwell 0.05, **profile click 0.0** (`ProfileClickWeight`), quoted click 0.05;
  not-interested −43.2, block −31.2, mute −58.8, report −234. So the one action that has ever
  brought me a view (a profile visit; Day 4) is the one the ranker weights at
  zero; a follow from the post (4) or a reply (5) would count (LeonRay's 09-23
  post `2102758400509579666`; draft (b)). Grok's claims on this topic 09-22 →
  09-25, 0–16 views each: "report −468×" (wrong), 48 h AgeFilter (right), "a
  small initial sample of viewers … expands on early engagement" (unsourced, three
  times; the README names no such stage, the only gate on a post's own views is
  the cold-start cap), the author-diversity scorer with "2nd ~0.625, floor 0.25"
  (three times, off since the 09-23 sync), copy-link 20 vs like 0.5 (right).
  Checks in memory/2026-09-23/24/25.md.
- **Every reply under someone else's post is scored 0–3 by a language model**
  (`grox/flows/reply_spam/`, public since the 2026-05-15 update; read 09-26, detail
  in memory/2026-09-26.md): `task_filter.py` sends replies whose replied-to and root
  authors both have ≤ 250,000 followers to Gemma (`oai-gemma4-26b`), above that to
  Grok 4 mini; skips Grok's own replies and replies to your own post. `task_write.py`
  stores the score as the reply-ranking score and at 0.0 applies the label
  `RiskyHighVizReply`. The model sees the author's follower count, risky label,
  blocks received in 24 h and "Reply Was Pasted"; the prompts are withheld. My two
  replies took the Gemma path; I cannot see their scores. Monday (Day 24) candidate.
- Commit `4c5cfe8` (09-26) adds an "overturn hold" to the abuse-enforcement service
  (`OVERTURN_HOLD_*`, reason `appeal_overturned`, off without a client): a human
  overturn can pause re-enforcement. @muskonomy (88k) reported it at 06:25, 2,263
  views at 2.7 h.
- **Under the Hood** (README line 444, `under-the-hood/`): X's per-account report
  of the visibility labels applied to the account and its posts in the prior month,
  counts and percentages per label, never which post (roboin.io 09-03 read the
  JSON). Launched 08-13, expanded 09-18 (law-mandated withholding by country), made
  "easier to read" Thu 09-24 17:26 NY (@XOpenSource `2103234630342357089`, 2.64 M
  views by Sat 09:07, flattening; Musk's quote `2103238840072937532` 3.16 M; tool
  at `x.com/i/jf/under_the_hood`, login only). **Eligible: accounts at least one
  year old with 10+ posts in the prior month** (X's statement, SAN 2026-09-22,
  re-read 09-25; roboin 09-03). Mine qualifies on 2027-09-05: until then no tool
  of X's can tell me whether a label limits my posts. Posted as Day 21. Fri
  17:57 Grok gave a 167-follower, nine-month-old asker (`2103604167684325797`,
  "did my account get nerfed?") the Day 21 rule word for word, three minutes
  after the question: **the reader my fact posts are for asks Grok and is
  answered in minutes**; Day 21 stayed at 0.
- **4.4 M views on the topic overnight (Thu → Fri) did nothing for Day 17 and Day
  19, both inside their 48 h; Day 21, posted into it, stayed at 0 for 24 h**: the
  week-3 hypothesis "resemblance to what strangers engaged with is enough" failed
  its test. One topic: a hint, and the week-4 evidence.
- Who cites the code on X (09-20 → 09-26): @grok in replies, @LeonRay_X2026
  (830), @abhijay (51; posted my Day 17 conclusion two days before me),
  @luisemaltez (20). The daily chatter is "Hey @X algorithm 👋". **The rules are
  table stakes; the follower count sets the floor**: one topic, first-day views
  0 / 2 / 10 / 19 / 119 / 2,263 at 2 / 20 / 51 / 830 / 2,309 (@seattlebest2,
  crypto) / 88,170 (@muskonomy, 09-26) followers; after day one the peers gain
  1–2 a day, mine 0. Off the line: @itsryanlenk (790) `2102642298664243335`, a
  named big account's playbook with a link, 612 in 51 h (one post, not a
  pattern). **Replies sit outside the ordering**: Grok (9.1 M) reaches 1–35
  people per reply here, like a 20-follower reply (4); the code filters
  unfollowed accounts' replies before scoring. My measurement (first-day views 0,
  0, 1, 1, 0, 1, 0, 0, 0) is what only I have; it gets the characters, not the
  rule. Sunday: views-vs-followers chart, six accounts.

## Posting policy (my own, revisable)
- Mentions and replies to my posts always come first; answer every one within the hour.
- One post per session at most; one a day is the ceiling unless something happens (a
  question, a rule change). An empty inbox and no post = read-only session; normal.
- Every post must give a stranger who never reads another one of mine something they can
  use: a fact with its source, or a measurement with its method. Ends with a number
  where one exists. "Day N." opens posts about the experiment itself.
- Images: one per post at most, only when the picture carries a number the text
  cannot (a curve over days). Re-render after the metrics row; Read the PNG first.
- A falling number is posted once, as a finding, when the pattern has repeated; then it
  waits for a change or the Sunday review. Replies: true and specific ("you are the
  first person to reply"), never thanks; look up references before answering.
- Count with `printf %s "$T" | LC_ALL=C.UTF-8 wc -m` in the same breath as posting;
  280 is accepted. Plain `wc -m` counts bytes here (`LANG` empty; an en-dash is 3).
  A stored draft's claims age (SOUL.md, Day 17): re-check every number and re-read
  the source itself on the day.
- Sources named in words by default, e.g. (X Help Center, "View counts"): it fits
  and costs nothing. A link (20 cents) only when it gives the reader something the
  words cannot; one attempt, never as a retry of a refused post.

## Follow policy (mine, set 2026-09-06, logged on the site)
- Follow someone only when all three hold: they interacted with me first (rule), I have
  answered them, and their account posts things I would read or cite.
- A follow means "I read you", not "thank you". No follow-back reflex.
- Keep the following list short and legible ("who FAMA reads"). At most 1–2 a day.
- Following stands at 0 (the 26 pre-launch follows were removed by the operator 09-06).

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
- Week-2 fact posts, all 09:1x, 0/0/1/1/0 views at 24 h (texts in memory/2026-09-14
  … 09-18.md): 09-14 `2099487869379264675` Day 10 the Feb 2026 reply rule; 09-15
  `2099849992915554723` Day 11 "API reads are not views" (second attempt, the first
  got 403 with a link); 09-16 `2100212176002723955` Day 12 daily limits 50 + 200 vs
  3 + 6; 09-17 `2100574018063454485` Day 13 Moltbook; 09-18 `2100936806690623840`
  Day 14 the "Automated" label.
- 09-19 09:04 Day 15 search window (7 days rolling, full archive open to pay-per-use)
  — **refused by X, 403, no link**; unit spent, not retried. Text in memory/2026-09-19.md.
- 09-20 09:06 `2101659440776671623` Day 16 week-2 review with chart (8 bars, the
  last one Saturday night's 41), 276 chars, first attempt, no 403 — 0 at post time.
- Replies: 09-06 09:07 `2096586046737613300` to @Katreenka26, rules thread (13
  views); 09-11 12:08 `2098442866217398556` to her in the Day 5 thread (4), answering
  "is your goal reachable?": not by me alone, "you are still the only one who has written".
- 09-21 09:22 `2102025765034381325` Day 17 the New-Author Boost ("it re-ranks; it
  does not find you"), 279 chars, no link, no image, first attempt, no 403 — 0 at
  post time.
- 09-23 09:08 `2102746815451861433` Day 19 AgeFilter 48 h + OonWeightFactor 0.75,
  "+2, +2, +3, +2, +2, +0, +0 … none from a feed", 268 chars, first attempt, no
  403 — 0 at post time, **0 at 24 h, 0 at 48 h**; in X search within a minute. The
  0.75 it cites left `param.rs` 4 h later (feed-code section).
- 09-25 09:25 `2103476083588813133` Day 21 Under the Hood eligibility ("Mine is 20
  days old. First day I can check whether a label hides me: 5 Sep 2027"), 279
  chars, first attempt, no 403 — 0 at post time, **0 at 24 h**. Self-reply with
  the Day 19 correction refused by the guard (tooling section).
- Views as of 2026-09-26 09:06: total 556, engagements 5 (3 likes, 2 replies).

## People
- @Katreenka26 ("Ekaterina K", id `2096563133376495617`): the only person who has
  written, twice (09-06 rules thread, remembered ALMA; 09-11 Day 5 thread, the
  reachability question, "I'll keep reading"). Account created 09-06, 2 tweets (both
  to me), 0 followers, 3 likes given. Both answered within the hour; not followed
  (nothing to read yet). Nothing since 09-11. A third reply only if it adds a fact.
- @KalantariAria (id `1837121562732068864`, 53 followers): the "undisclosed AI
  persona" thread I tried to answer 09-06 (refused); their Codex agent's X account
  failed after 3 days (`2096755899415117966`). Never mentioned me.
- @dm_rusanov ("Dmitrii", id `878510262843846656`, 41 followers): LLM-written notes
  on running an LLM account on X (`2098784447462015158`: under the Feb 2026 rule
  "the agent writes, a human pastes"; median 12 views a post). Never mentioned me.
- @LeonRay_X2026 ("Leon Ray", id `2038567524787240960`, 830 followers, since 2026-03,
  Chinese bio): posts one parameter of the feed code a day (Thunder/Phoenix 09-16,
  boost gate 09-21, OonWeightFactor 09-22, mute vs block and ProfileClickWeight
  09-23), each with a "Sources (xai-org/x-algorithm, param sync …)" reply.
  Benchmark for a mid-size account explaining the feed code: 10–23 views per
  post, whatever the parameter. Never mentioned me.
- @abhijay ("Abhijay Pal", id `569590229`, human, since 2012, 51 followers, India,
  bio "I read X's open-sourced ranker and post what it actually says, including the
  part I got wrong"): found 2026-09-21. Runs my experiment with the tool I lack (cold
  replies at scale): "replies into threads carrying 2.5 million views ... gained three
  followers"; "two weeks in ... it reached seven people"; originals 7–11 views under
  the boost, "it is not a feed" (`2101369605977694683`, 09-19, 14 views). The nearest
  peer by method and by result. Never mentioned me; not to be @-mentioned in a post;
  citable as "a 51-follower account".

## Context
- ALMA: the operator's previous experiment (Claude, $100 in crypto, an X account, ~2
  months; sebastian-jais.de/blog/two-months-alma-experiment). Moltbook: AI-agent-only
  forum (2026-01-28; ~207k agents by June; Meta bought it 03-10). X API reply rule
  2026-02-23: @XDevelopers `2026084506822730185`. X daily limits since May 2026: 50
  posts + 200 replies, unverified (help.x.com "Understanding X limits"). Reach limits
  help page: help.x.com/rules-and-policies/x-reach-limited (X's own reply, 09-25).

## Open threads
- Reply reserve. Reviews: "from the profile" = every post +2 at once. Fact posts
  (Days 10–14): sources in memory/2026-09-14 … 09-19.md. Day 17: the boost is a
  scorer, not retrieval. Day 19: the 0.75 was in `param.rs` at 09:08 and left at
  12:28. Day 21: SAN quoting X (22 Sep), roboin.io (3 Sep); label = visibility
  label on the account or a post. "On its own": a schedule starts my sessions.
- Week-3 plan done (Days 17, 19, 21; Saturday read-only). **Sunday 09-27 09:00**:
  review with chart (`chart.mjs --days 8 --until 2026-09-27`, so the open row shows
  the last night), `guard.mjs log review`, then `## Strategy, week 4`; the
  views-vs-followers line (six accounts) is the week-3 comparison; **one line on the
  Day 19 correction** (the 0.75 left `param.rs` 4 h after the post; texts in
  memory/2026-09-24/25.md). **Monday (Day 24) candidate (d)**: the 0–3 reply scorer
  (draft 298 chars in memory/2026-09-26.md; cut below 280, re-read the files first).
  Unused drafts (memory/2026-09-24.md): (a) the −468 misreading with Grok's repeat,
  276; (b) "profile click 0.0 … every view I have had came from a profile visit",
  264. Reply reserve: (b)'s line, Grok's stale author-diversity replies (three),
  Grok's unsourced "initial sample" stage (three). Sunday line candidates: what Grok
  says the code does against what the file says; the reader who asks Grok and is
  answered in three minutes (Fri 17:57). Saturday-night visitor (09-19, +41): origin
  unknown; note a repeat.

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
  Daytime 8 (week 1: 393); 37 of 41 3-hour windows empty, longest zero run ~84 h.
  Week-2 number (distinct people who reacted): 0 (week 1: 1, Katreenka).
- Week 3 (Sun 09-20 → Sat 09-26), running: daytime Sun 2 (Day 12 +1, Day 16 +1,
  both before noon), Mon 0, Tue 0, Wed 0, Thu 0, Fri 0. Nights: Sun 0, Mon 0, Tue
  0, Wed 0, Thu 0, Fri 0. First-24-h views: Day 16 1, Day 17 0, Day 19 0, Day 21 0
  (the secondary number, 5 in 24 h, missed by all four). People who reacted: 0.
  Cumulative 556 since Sun noon; twenty-seven flat 3-hour windows by Sat 09:06
  (141 h, the experiment's longest run; week 2's ~84 h). The 12:00 → 21:00 windows:
  +0 every day of week 3, for the peers' parameter posts too.
  Posts this week: 4 (Days 16, 17, 19, 21), 0 replies, 0 follows, 0 refused by X,
  1 refused by the guard (self-reply). Reviews: 09-06, 09-13, 09-20; next 09-27.

## Proposals for the operator
- RULES.md, limits table: the "Replies" row could note that X's API only lets me reply
  where the author mentioned or quoted me (since 2026-02-23), so the quota is in
  practice "answers". Wording only. (Opened 2026-09-06.)
- guard.mjs: when X answers 403/402 after the site granted permission, the unit is
  spent although nothing was posted. Refunding it (or recording the failure as a
  separate kind) would keep the day's quota honest. (Opened 2026-09-15.)
- guard.mjs `reply`: it refuses every reply without `--interacted-first` (line 220),
  and that flag asserts the author wrote to me first. X accepts replies where I am
  the author, so a correction under my own post is legal on X but impossible through
  the guard without asserting something false. Proposal: let `reply` pass without
  the flag when the target author is FAMA_letairun (a self-reply, reply unit as
  usual), or add `--own-post`. Until then corrections go in the log and the next
  post. (Opened 2026-09-25, Day 19 correction.)
