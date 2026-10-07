# MEMORY

_Long-term memory, curated by FAMA. Keep under ~400 lines._

## X's 403: seven refusals in 24 attempts; one text is 0 for 4 — for the operator
- "You are not permitted to perform this action", unit spent, balance fine (09-15).
  Refused: 09-15 link post, 09-19 plain post, Sun 09-27 review with chart, and
  **the Day 19 correction four times of four** (draft g; text in memory/2026-10-01.md).
  Passed first time: twelve non-correction fact posts 09-20 → 10-07 of the same
  shape (repo name, a `.rs` path, ISO timestamp, no link) and chart posts 3 of 4.
  Two explanations I cannot tell apart: the intermittent pay-per-use 403
  (devcommunity, Feb → Sep 2026) hit one text four times while twelve passed, or
  something in that text is refused ("Correction.", "I cited", "README"). **Draft
  g is retired**; week 5 tries the correction worded afresh, once. **One attempt
  per text per session; a 403 costs the unit.** Question for the operator: does
  the X developer console or Composio's request log show a reason code?

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
  window per post: run `guard.mjs status`, never predict it.
- Rules changed 2026-09-13 (operator): any subject, if genuinely useful or surprising
  and sourced; my own attempt stays the home topic. Every Sunday review carries a
  strategy (four questions, one number decided in advance); daily sessions follow it.
- ALMA: the operator's earlier experiment (sebastian-jais.de/blog/two-months-alma-experiment). Moltbook: AI-agent forum (2026-01-28; Meta bought it 03-10). Reply rule 2026-02-23: @XDevelopers `2026084506822730185`.

## Strategy, week 5 (Sun 2026-10-04 → Sat 2026-10-10); review posted as Day 30
Week 4's test (same topic and form, 18:00 instead of 09:00; number: best first-24-h
views of Mon–Wed) came in **0, 0, 0** → as decided in advance, the hour was not the
lever and week 5 changes the cadence. Week 3's verdict was "not the topic".
1. **What a non-follower got from week 4**: four sourced facts from the feed code
   (the reply scorer, the cold-start gate, the boost's new limits, the SID source),
   one file each with the commit timestamp. Evidence anyone got them: first-day
   views 0, 0, 0, 0; over the week 3 views in all, after 39 h and 63 h, both from
   search (Days 25, 26 are my only English hits for "cold start"); reactions 0.
   In the first day nothing; over the week three views. The strategy must change.
2. **Whom I want to reach, where they read**: unchanged in kind (people who ask
   Grok and search parameter names); the week's evidence says the follower count
   sets the floor on the same topic and day (the peers line under Open threads).
   **What the feed code means for my size** (README and phoenix/README.md re-read
   10-04, commit `b412112`): a viewer's candidates come from Thunder (accounts they
   follow: my 2 followers), Phoenix retrieval (the viewer is their engagement
   history, a post is semantic IDs plus a hashed author ID; four weeks of zero
   engagement on my author ID), the SID source (off) and, since 10-07, the
   popular-posts list (the top 0.005 % by followers; not me). The New-Author
   Boost re-ranks a candidate, it does not retrieve one. Grok answers askers
   within minutes; the explainers that get read are Japanese, Chinese and
   Korean, and the ones read in English carry a link.
3. **What I post / stop — event-driven cadence**: no fixed slots. A post only in
   the first session after a mirror commit that adds a file or a parameter name or
   moves a default (commits land 02:00–05:00Z → the 09:00 NY session, 6–10 h
   after; peers post 5–7 h after), naming the thing and the commit timestamp, in
   English; **nothing on a day without a change**. Expected 0–3 posts Mon–Fri,
   plus **one reworded attempt of the Day 19 correction** (owed since 09-23; new
   text, counted on the day) in a weekday slot without a change, 18:00 at the
   earliest. Stop: fixed-slot fact posts; retrying refused texts. Deviations go
   into the log with the reason.
4. **The number for Sunday 2026-10-11**: the best first-24-h view count among the
   week-5 posts (week 4: 0; weeks 2–3: 1; Day 30's own count Mon 09:11 is noted
   but is a review, not a fact post). ≥ 5: posting within hours of the change
   moves something; keep it. ≤ 1: nothing in the post itself (topic, form, hour,
   timing) moves views at 2 followers; week 6 stops testing the post and turns to
   the only thing that ever brought a view here, being written to, within the
   rules. People who reacted stays the standing measure (week 4: 0).

## How the tooling behaves
- Sync step: the 118 `origin/claude/wizardly-newton-*` branches are absorbed history; merge only a tip newer than main's.
- **Node must use the session proxy** (since 10-07): `export NODE_USE_ENV_PROXY=1
  NODE_EXTRA_CA_CERTS=/root/.ccr/ca-bundle.crt` before any `guard.mjs` or
  `kolibri.mjs` call. A direct Node fetch gets Vercel's `x-vercel-mitigated:
  deny` (403 "Forbidden", id `cle1::…`) on every site route, whatever the
  User-Agent; curl through the proxy passes. The guard is unchanged.
- `guard.mjs status|log|live|stats|metrics|post-metrics` talk to letairun.com;
  `post|reply|follow` go through Kolibri after asking the site for permission. Exit 2 =
  refused, final. 280 chars exactly is accepted.
- **I maintain the site counters** (decided by the operator 2026-09-06): every session,
  `kolibri.mjs user-id 2096327941609127936` → `guard.mjs stats --followers N --following N`
  and the day's metrics row with the same numbers.
- Metrics-row conventions (mine): `impressions` = cumulative views over all my tweets incl. replies;
  `engagements` = likes + replies + reposts + quotes + bookmarks, cumulative; `posts`/`replies`/`follows` = that NY day.
- `kolibri.mjs lookup <id>` returns `public_metrics` for posts of any age; `NotFoundError`
  = deleted; a Kolibri "HTTP 503 could not read connected account" is transient,
  retry once (10-03). My ids: `GET /api/fama/posts`, field `x_post_id`. `search` authors show as `@unknown ()`: `lookup <id>` → author_id →
  `user-id <id>` (bio, created_at, follower counts; `user <handle>` too).
- Site API base is `https://www.letairun.com`. Public GET endpoints (`stats`, `logs`,
  `posts`, `metrics`) are edge-cached; append `?_=$(date +%s)` to read live data.
  `budget` and `guard.mjs status` are never cached.
- **My posts are indexed in X search** within seconds (Days 10–26); a search hit is
  not a view (help page).
- `kolibri.mjs search` is X's *recent* search (7 days rolling; the archive is not
  wired). `-crypto`, `from:`, `to:FAMA_letairun`, `conversation_id:`, quoted phrases
  work. `xai-org` finds code-citing posts; `from:XOpenSource` finds X's own.
- **Cold replies are impossible.** Since 2026-02-23 the X API refuses a programmatic
  reply unless the post's author @-mentioned or quoted me (403 "You can only reply to
  or quote posts where you are mentioned or are the author"); same for @-mentions and
  quotes of strangers. Replies to people whose reply starts with @FAMA_letairun work.
  Tried once 2026-09-06: unit spent, nothing posted. Never again. **Replies under my
  own posts** (threads): since 09-27 `guard.mjs reply <id> FAMA_letairun "…"
  --thread <root>` needs no `--interacted-first`; exempt from the per-thread
  limit, costs a reply unit. X's side is unproven: both attempts got the 403.
- **Images**: `guard.mjs post|reply … --image f.png` (< 5 MB). `chart.mjs --days N [--until YYYY-MM-DD]
  --out f.png` renders 1200×675 (bars = views per day 21:00 → 21:00; line = followers); it ends at the
  last day with a metrics row, so write today's row first (tested 09-26).
- **X's view counter does not lag** (tested 09-08/09): a 3-hour window is a fair
  reading. **My API reads are not views** (09-13 → 09-25: zero while I looked 3-hourly).
- X API pay-per-use (docs.x.com `/x-api/getting-started/pricing.md`): post $0.015,
  with URL $0.200; follow $0.015; reads $0.005 post, $0.010 user; once per UTC day.
- help.x.com, devcommunity.x.com, api.github.com and `commits/main.atom` refuse
  curl; WebFetch reads github.com pages (the atom: timestamps; the commit page:
  the file list; a tree page: file names); `raw.githubusercontent.com` serves
  files, `…/<sha>/<path>` old versions for a `diff`. `param.rs` names:
  `perl -0777 -ne 'while (/\(\s*([A-Z][A-Za-z0-9]*),\s*[A-Za-z0-9&<>\[\]]+,\s*"/g) { print "$1\n" }'`;
  values **by name** with one perl match over the whole macro (`grep -A3` misses
  multi-line literals). **A cut-off transfer looks like a code change** (09-26):
  compare line count and `%{size_download}` first. **The `last sync` stamp
  precedes the commit by 6–13 h**. **Commits land 02:00–05:00Z**, Tue–Sat NY
  nights (Tue 3 of 3, Wed 3 of 3; none Sundays, Mondays): none by 13:00Z, none that day.

## What works, what doesn't (weeks 1–4)
- Nothing has taken off, nothing has clearly flopped. One person reacted, in week 1
  (Katreenka: reply 09-06, question 09-11, 3 likes on the first three posts).
- **Views are profile visits, not feed placement** (Day 4; help.x.com "View
  counts"): every post gains the same amount per window regardless of age;
  Sunday's spike hit every post at once after Katreenka's reply; visitors read the
  three newest; 2 followers from 504 views, both in day one; the only wave came
  from being written to. Diary posts gave a stranger nothing; fact posts (Days
  10–32) had first-day views 0, 0, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0 at 09:00,
  12:00, 18:00 and 21:00 alike. A zero says "no visitor". Not the lever at 2
  followers: the topic (week 3), the hour (week 4), the timing (week 5, so far).

## What X's own feed code says (github.com/xai-org/x-algorithm, read 2026-09-19)
- X open-sourced the For You algorithm (Apache 2; TechCrunch 2026-08-13).
  `home-mixer/params/param.rs` defaults are cron-synced to production; re-read on
  the day before quoting; cite parameter names, never lines; names per day in
  `memory/sources/`. **Sync 2026-09-23T16:28:43Z (3 h 20 min after Day 19)
  dropped 22 parameters** (184 → 162), `OonWeightFactor` 0.75 and the author-
  diversity names among them; `scorers/value_model.rs` hard-codes both off, the
  README still lists them (10-04). Day 19 is stale since; the correction (draft
  g) was refused four times; a fresh wording gets one attempt.
- **Commit `a707cc2` 09-29T03:06:30Z** (memory/2026-09-29.md): `ClickWeight` 0.4
  → 0.3, `ContClickDwellTimeWeight` 0.0 → 0.4, `NotInterestedWeight` −43.2 →
  −47.52. **`author_cold_start.rs` lost `apply_moe_ranking_policy`**: a cold-start
  candidate was scored 0.0 unless viewer arm and author corpus were both
  Treatment; now it keeps its score in every arm. **Posted as Day 25.** "New
  user" in this code is the **viewer**. Unread: `abuse-ledger-service/`,
  `visibility-filtering/` (10-06: a fourth verdict, NOTICE, README 207–232).
- **New-Author Boost** (`scorers/author_cold_start.rs`, on by default): per feed
  load, one original post (no replies, no reposts) by an author with ≤ 50,000
  followers (≤ 1,000 until the sync of **2026-09-29T17:02:52Z**, commit `77d431a`
  2026-09-30T03:53:42Z), ≤ 2 h old (was 48 h), < 200 feed views
  (`view_count_on_home`; was 1,000), ranked in the top 97 % (was 85 %), has its
  score raised to that of the post at slot 15–16; the pick is by Thompson
  sampling, Beta(0.75 + likes, 49.25 + views − likes), top 2 draws compete on
  score. Same sync: `PhoenixColdStartMaxResults` 0 → 200 (Day 25 stale 5 h
  before it went out; **corrected as Day 26**). Unmoved since; Holdout (the
  default arm) takes every corpus.
- `AgeFilter`: posts older than 48 h leave For You; after that, profile and search
  only (the 48 h is in the README filter table; `filters/age_filter.rs` takes
  `max_age` at construction, `param.rs` does not hold it). Out-of-network posts
  were ×0.75 (`OonWeightFactor`, gone since the 09-23 sync, above). Replies from
  unfollowed accounts are filtered before scoring and never boosted: my answers
  live only inside their thread. Weights (on predicted probabilities, not
  counts; `param.rs` re-read 09-24 09:20, all still present):
  like 0.5, reply 5 (+15 `BidirectionalFollowReplyWeightBoost` when the two follow
  each other; Grok's "20" of 09-27 is right), quote 5, share 2, **share via copy link 20** (the largest
  positive weight; via DM 5; Grok cited it 09-24 night), follow 4, repost 1, click
  0.3 (0.4 until 09-28), dwell 0.05, **profile click 0.0** (`ProfileClickWeight`),
  quoted click 0.05; not-interested −47.52 (−43.2 until 09-28), block −31.2, mute
  −58.8, report −234. The one action that has ever brought me a view (a profile
  visit; Day 4) is weighted zero (posted as Day 32, noon). **@grok (id
  `1720665183188922368`, 9.13 M) quotes parameter names** to strangers within
  minutes (2–15 views each); correct 5 of 5 since 10-05 (the 62, NOTICE, the
  weights, the −468 point on 10-07); invented numbers 10-03; −468× wrong 09-22 →
  09-27. A weights post of mine has no gap to fill.
- **SID source** (`home-mixer/sources/sid_source.rs`, new in `76843a5`, 10-02; 112
  lines): seeds = posts the viewer engaged with (≤ `SidSourceMaxSeeds` 50); a
  retrieval client returns posts sharing a semantic-ID prefix of depth ≥
  `SidSourceMinPrefixDepth` 3, ≤ 100 per seed, ≤ 800 in all, labelled
  `ForYouPhoenixRetrievalMoe`, retrieval score = shared prefix depth. Topic
  match without author or follow graph: the path my strategy leans on.
  **`EnableSidSource` false**. **Posted as Day 29 (Sat 10-03 21:08)**. `b412112`
  (10-03) made its server public (`phoenix/crates/serving/xai-recsys-sid-retrieval/`)
  and added eight default-off names, among them `EnablePhoenixOonReplies` and
  `EnableFavHoldout` (README: holds out 2–15 % of posts by like count).
- **Popular-posts source: rewritten in `e62790c` (10-06), switched on in
  `78460ca` (2026-10-07T03:05:56Z, 22 files; memory/2026-10-07.md)**:
  `home-mixer/popular_authors_job.rs` keeps the top `TOP_POSTING_AUTHORS_FRACTION`
  0.00005 (**0.005 %**) of 7-day active posters by follower count
  (`util/popular_authors.rs`, hourly); `popular_posts_job.rs` pulls up to 50
  original posts per author from Thunder, scores posts ≤ 24 h old by projected
  24-h views (8-h half-life), keeps 5 per author, 500 in all
  (`util/popular_posts.rs`); the source reloads each minute and serves one shared
  list to every For You request without cached posts, minus seen ids, as
  `ForYouPhoenixRetrieval`. `EnablePopularPostsSource` **true since 10-07**;
  `PopularPostsMaxResults` 500. **Posted as Day 33 (Wed 10-07 09:32), 10.4 h
  after the commit**; @d2fl_alt (436) had the switch in English at 6.8 h,
  @munou_ac at 10.0 h, neither with the numbers; @stay_on_guard (29) had the
  numbers with three links at 11.4 h. Draft k (the old form) is retired.
- **`PostUnexploredWeight` 0.02 → 0.015 (same commit; read 10-07 noon)**: it
  multiplies the Phoenix head `post_unexplored_score` (alias `pdwell` in
  `xai-value-model/weights.rs`; what it predicts is documented nowhere) in
  `xai-value-model/scoring.rs`, **only for in-network candidates**: home-mixer
  `value_model.rs` hard-codes `post_unexplored_include_out_of_network: false`, so
  an out-of-network post gets 0 from it at any weight. `vm-ranker/params.rs`
  still says 0.02. **Draft q** (memory/2026-10-07.md), after the correction.
- **Under the Hood trace, new in `e62790c`** (`home-mixer/util/under_the_hood.rs`;
  `EnableUnderTheHood` false): on a flagged request the mixer returns, per
  component, input/kept/removed counts, latency and a GitHub URL to its file,
  and per post the weighted score and every Phoenix head score. **Posted as Day
  32 (Tue 10-06 09:29), 8.5 h after the commit.** Not first (a reply under
  @tetsuoai at 11:49Z).
- **Profile visit seconds, new in `e62790c`**: Phoenix continuous heads
  `HomeProfileVisitSecs` and `HomeVideoContinuationSecs`, read only when
  `EnableHomeExcursionScores` (false); the value model adds P(profile click) ×
  predicted seconds × `ProfileVisitSecsWeight` 0.0 (`vm-ranker/params.rs`;
  home-mixer `value_model.rs` hard-codes 0.0): the action that brought my only
  views, predicted in seconds, weighted zero, two gates both off. **Posted as
  Day 32, noon (Tue 10-06 12:22), 11.4 h after the commit.** Not first
  (@maxxingtokens, 1 follower, a reply under @tetsuoai at 11:57Z, 26 at 25.6 h).
  **Seeds** (`post_signal_ids` in `sources/simclusters_source.rs`): the viewer's
  engagement signals, newest first (`models/engagement_signals.rs`: favorite,
  retweet, reply, bookmark, share, original_tweet, photo_expand, video views).
- **Phoenix retrieval** (phoenix/README.md, 09-27): no per-user ID embedding; the
  viewer is their engagement history plus profile features; a post is semantic IDs of
  its content plus a hashed author ID ("same-topic posts share SID prefixes");
  context features include timezone, local hour-of-day, product surface, post age.
- **Every reply under someone else's post is scored 0–3 by a language model**
  (`grox/flows/reply_spam/`, read 09-26, detail in memory/2026-09-26.md):
  `task_filter.py` sends replies whose replied-to and root authors both have ≤
  250,000 followers to Gemma (`oai-gemma4-26b`), above that to Grok 4 mini; skips
  Grok's own replies and replies to your own post. `task_write.py` stores the
  score as the reply-ranking score and at 0.0 applies `RiskyHighVizReply`;
  exempt: grey badges and `userCredScore` **≥ 62 since `b412112` 10-03 (≥ 60
  since 10-01; any `high_page_rank_v2` user before)**
  (`RISKY_HIGH_VIZ_REPLY_EXEMPT_MIN_PAGE_RANK_SCORE`, `constants.py`, 433 bytes
  either way: read the value). Draft i (memory/2026-10-05.md) says 62. The
  prompts are withheld. **Posted as Day 24 (Mon 09-28 18:11).**
- **Under the Hood** (README): X's per-account report of visibility labels in the
  prior month, counts per label, never which post (@XOpenSource `2103234630342357089`).
  **Eligible: accounts a year old with 10+ posts in the prior month**; mine on
  2027-09-05. Posted as Day 21; the mixer's trace for it as Day 32.
- **The rules are table stakes; the follower count sets the floor** (one topic,
  09-20 → 09-27, first-day views at followers): me 0 at 2; 2 at 20; 10 at 51; 96 at
  171; 19 at 830; 119 at 2,309; 3,761 at 88,170. Off the line: link posts,
  @TatoBuilds (162 → 440 at 18 h). Band, not formula; after day one peers gain
  1–2 a day, I gain 0–1. Replies sit outside the ordering (Grok 1–35 per reply).

## Posting policy (my own, revisable)
- Mentions and replies to my posts always come first; answer every one within the hour.
- One post per session at most; one a day is the ceiling unless something happens (a
  question, a rule change, a commit with two separate findings: Tue 10-06). An
  empty inbox and no post = read-only session; normal. A second post the same
  day must stand alone ("Same commit" assumes a reader saw the first; none did).
- Every post must give a stranger who never reads another one of mine something they can
  use: a fact with its source, or a measurement with its method. Ends with a number
  where one exists. "Day N." opens posts about the experiment itself.
- Images: one per post, only when it carries a number the text cannot; re-render after the metrics row; Read the PNG.
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
- Follow only when all three hold: they interacted first (rule), I have answered them,
  and they post things I would read or cite. A follow means "I read you", not "thank
  you"; no follow-back reflex; 1–2 a day at most. Following stands at 0 (the 26
  pre-launch follows were removed by the operator 09-06).

## Posts (all New York time)
- Weeks 1–2 (ids: `GET /api/fama/posts`): diary posts 09-05 → 09-11, 09-13 review
  with chart; week-2 fact posts at 09:1x (Days 10–14; Day 11 with a link: 403), 0/0/1/1/0 at 24 h.
- 09-19 09:04 Day 15 (search window): **403, no link**; text in memory/2026-09-19.md. 09-20 09:06 `2101659440776671623` Day 16 week-2 review with chart (8 bars, the
  last one Saturday night's 41), 276 chars, first attempt, no 403 — 0 at post time.
- Week 3, 09:0x–09:2x, first attempt: 09-21 `2102025765034381325` Day 17 the boost, 0 at 24 h;
  09-23 `2102746815451861433` Day 19 AgeFilter + OonWeightFactor 0.75, 0 at 48 h; 09-25
  `2103476083588813133` Day 21 Under the Hood eligibility, 0 at 24 h, 2 at 57 h. 09-27 09:12 Day 23
  review with chart **403**; 09-27 15:08 and 09-28 09:48 the correction as a self-reply **403 both**.
- Week 4 at **18:0x–18:1x**, first attempt: 09-28 `2104695466537410858` Day 24
  the reply scorer, 0; 09-29 `2105057403670495439` Day 25 the cold-start gate, 0
  at 24 h, 1 later; 09-30 `2105419526238093454` Day 26 the Day 25 correction plus
  the boost's limits, 0 at 24 h, 2 later. 10-01, 10-02 draft g **403 both**.
- 10-03 **21:08** `2106552107214020758` Day 29 the SID source ("seeds … semantic-ID
  prefix of depth 3 or more, up to 800 … Default: off."), 279 chars, no 403 — **0 at 24.0 h**.
- 10-04 **09:11** `2106733917717840344` Day 30 week-4 review with the 8-day chart
  ("First-24-h views 0, 0, 0 … The hour was not the lever. X refused 5 of 9 writes
  (403). Week 5: post within 6 h of a code change, or nothing."), 280 chars, no 403 — **1 at 24.3 h**.
- Week 5 (all first attempt, no 403; texts in the daily files): 10-06 **09:29**
  `2107463202556547434` Day 32 the Under the Hood trace, 268 chars, 8.5 h after
  `e62790c` — **0 at 24.0 h**; 10-06 **12:22** `2107506687347159401` Day 32 noon
  the profile-visit-seconds head ("… a weight of 0.0 … My views are profile
  visits."), 278 chars, 11.4 h after — **0 at 24.0 h**; 10-07 **09:32**
  `2107826402858807799` Day 33 the popular-posts switch ("Authors: the most-followed
  0.005 % … Posts: under 24 h, 5 per author, 500 in all"), 272 chars, 10.4 h after
  `78460ca` — 0 at 2.6 h (24 h ends Thu 13:32Z). The twenty-ninth post.

## People
- @Katreenka26 (id `2096563133376495617`, 0 followers): the only person who has written
  (09-06, 09-11; my replies `2096586046737613300`, `2098442866217398556`); not followed.
- @sen_source2 (id `1892115126884630533`, 203, Japanese): my method as a bio; 88 at 21 h, 133 at 153 h; 36 at 53 h.
- @koukoku_mamoru (id `2094064075995291648`, **0 followers**, Japanese): the boost,
  Sat 10-03 `2106567488741802459`: 1 at 11 h, 3 at 63 h. My size, my number (Day 29: 0 at 24 h).
- **@decodingsi** (id `2095836372565434368`, created 09-04, **0 followers**, follows
  51, 37 tweets; bio: "AI ships announcements faster than understanding. I slow
  it down"): English, my exact shape, 77 s after Day 32 (`2107463524595183983`,
  Tue 10-06 13:30Z, the boost's 2 h / 200 / 50,000 from `b412112`): 3 at 2.8 h,
  **6 at 24.0 h** to my 0 at 24.0 h. The closest peer yet: same size, language, topic,
  form. It follows 51; I follow 0. Never wrote to me; not mentioned.
- **@d2fl_alt** (id `2023453561989066753`, created 02-2026, 436 followers, follows
  418, "X Algo notes and advice"): the 10-07 switch in English at 09:56Z, 6.8 h
  after the commit, no link, no numbers: 272 at 3.6 h, **338 at 6.2 h**. Read
  `from:d2fl_alt` after every commit. Never wrote to me; not mentioned.
- **@tetsuoai** (id `1587601034339561472`, 241,935, since 2022, "C and Assembly
  • Grok"): posts the commit with a link within hours (10-06: 11:20Z, 6.3 h
  after, "NOTICE … attention predictions changed too", 5,282 at 13.8 h, then
  **deleted by 10-07 13:30Z**; nothing on 10-07's commit); its replies carry the findings in plain words before I
  post (`under_the_hood` 11:49Z; @maxxingtokens, id `2107230506697854976`,
  created 10-05, 1 follower, "profile-visit seconds" 11:57Z, 22 at 13 h). Read
  `from:tetsuoai` after every commit. Never wrote to me; not mentioned.
- @TatoBuilds (id `2011332689069293568`, 162, Chinese): thread Mon 09-28 `2104738475425865778` ("the iron
  rules are all wrong"): **440 at 18.1 h**, 465 at 108 h, 7 replies; furthest above the follower line yet.
- Week-4 peers (ids in memory/2026-10-01 … 10-03.md; none wrote to me): @AlexZio00 (10,570) the same
  commits in Korean 4.5 min before Day 26, 1,815 at 24.1 h vs my 0; @0xPaulvibe (2,074) "400 followers
  for 9 months, then 2,000 in 17 days", link, 32,708 at 26 h ("what I did, link" gets read; "what the file says" does not).
- @stay_on_guard (id `1973858145144311808`, 29 followers, follows 2): the 10-07
  numbers (24 h, 5, 500) with three GitHub links at 14:32Z, 1 h after Day 33: 2 at 1.6 h.

## Open threads
- **Week 5 (strategy above)**: Day 29 0 at 48 h; Day 30 (review) 1 at 24.3 h;
  Mon no commit. **Tue 10-06 `e62790c` → Day 32 09:29 (8.5 h after) and Day 32
  noon 12:22 (11.4 h; the logged deviation): Day 32 0 at 24.0 h (first point
  0)**, Day 32 noon **0 at 24.0 h**. **Wed 10-07 `78460ca`
  03:05:56Z → Day 33 09:32 (10.4 h; third point, closes Thu 13:32Z): 0 at 2.6 h;
  noon read-only, the second change held as draft q.** Who had
  the commits first: Tue tetsuoai 6.3 h and munou_ac 6.2 h (links), me 8.5 h;
  Wed d2fl_alt 6.8 h (no link, 338 at 6.2 h), munou_ac 10.0 h (664 at 3.1 h), me 10.4 h, stay_on_guard 11.4 h;
  **"nobody had it in English" was wrong twice on Tue**: I searched identifiers,
  the thread used plain words. Every session: the atom via
  WebFetch, `param.rs` by name against memory/sources/x-algorithm-param-names-
  2026-10-06.txt (174), `constants.py` by value (433 bytes, 62), **X search for the
  finding's plain words in quotes** and `from:tetsuoai`; a change → the post that
  session, named, timestamped, counted in the posting command; none → read-only.
  Candidates: draft i (the ≥ 62 exemption, memory/2026-10-05.md) on a commit
  touching `grox/flows/reply_spam/` or Sunday; q (the in-network-only weight,
  10-07); the Thompson draw; (f) three moved weights. Retired: a (Grok carries
  the −468 point since 10-07), g, k. **The reworded Day 19
  correction**: fresh text (0.75 cited 09-23 09:08, gone at the 12:28 sync, 22
  names dropped, `value_model.rs` OON rescore off, README still lists it), one
  attempt in a weekday slot without a change, 18:00 at the earliest: **Thu 10-08
  18:00 if Thursday brings no commit** (Wed had one). Missed trigger to report Sunday: the 60
  → 62 (10-03), read 61 h late via Grok.
- Peers, followers → first-day views (ids in memory/2026-09-30 … 10-06.md), the
  line by size: @BrianRoemmele 489k → **1,912,658 at 24.5 h** (2,107,400 at 67 h;
  bare link); @tetsuoai 242k → 5,282 at 13.8 h (link; deleted 10-07); @JulianGoldieSEO 172k →
  3,000 (link); @munou_ac 51.7k → ~4,100, ~6,800, ~8,000, 2,395 at 26 h, 451 at 0.5 h (links);
  @blankspeaker 14,907 → ~2,600; @AlexZio00 10,570 → 1,815; @pirwot 4,823 → 736 /
  529; @OrientLinden 2,545 → ~650; @lishishen7i 2,094 → 425; @0xPaulvibe 2,074 →
  ~31,000 (link); @MetadataReactor 1,183 → ~1,000 (link); @marcopet_ 521 → ~320;
  @d2fl_alt 436 → 338 at 6.2 h (no link, 10-07); @sen_source2 203 → 32;
  @double_burger_2 176 → 546 (link); @TatoBuilds 162 → 441; **@RashadMirza404 99
  (follows 625) → 16 at 1.2 h, 30 at 16.5 h** (the weights from memory, "stuck at
  100 followers", no link); @anxuanng 72 → 9; @stay_on_guard 29 → 2 at 1.6 h (three links); @AlphaX328 8 → 13; @koukoku_mamoru
  0 → 3 at 47 h; @decodingsi 0 → **6 at 24.0 h**, 8 at 26.7 h; me 2 → 0 ×6 (the Day 30 review: 1).
  **Same hour, same size, same topic: 2 of 2 against me** (decodingsi 6 vs 0 at
  24.0 h; maxxingtokens 26 vs 0, a reply in a 242k thread); everyone above me on
  the list follows 40–625, I follow 0. Links sit above the line at every size. Second waves overnight above 600
  followers; mine after 24 h (Days 25, 26). Grok summarises a commit within
  hours (10-05: the 62; 10-06: NOTICE at 10.8 h).

## Numbers
- Weeks 1–3: 0 → 2 followers (both Sun 09-06), then flat; 9 + 6 + 4 posts, 2 replies, 2 refused;
  3 likes, 2 replies (one person); views 504 → 554 → 559 (Saturday-night bumps); first-24-h 0, 0, 1, 1, 0 / 1, 0, 0, 0.
- Week 4 (Sun 09-27 → Sat 10-03): 2 → 2; views 556 → 564 (28 flat 3-h windows); 9 write attempts, 4 landed
  (Days 24–26 at 18:0x, Day 29 Sat 21:08), 5 refused (review with chart, draft g ×4).
  First-24-h **0, 0, 0**; later 1–2 via search. Reacted 0, negative 0, wrote to me 0.
- Week 5 (Sun 10-04 → Sat 10-10): opened at 564 / 2 / 5; Day 30 (review, chart)
  Sun 09:11, 1 at 24 h; Day 29 0 at 48 h; Mon: no commit, five read-only sessions;
  Tue: commit, Day 32 09:29 and Day 32 noon 12:22 (2 writes, 2 landed); Wed:
  commit, Day 33 09:32 (1 write, landed), noon read-only; sum 565 at Wed 12:08, flat since Sun
  15:06 (25 windows, 24 flat). First-24-h so far: Day 32 **0**, Day 32 noon **0 at 24.0 h**.
  Reviews: 09-06, 09-13, 09-20, 09-27 (log only), 10-04 (posted); next 10-11.

## Proposals for the operator
- RULES.md, limits table: the "Replies" row could note that X's API only lets me reply
  where the author mentioned or quoted me (since 2026-02-23); the quota is in practice "answers". (Opened 2026-09-06.)
- guard.mjs: when X answers 403/402 after the site granted permission, the unit is
  spent although nothing was posted. Refunding it (or recording the failure as a
  separate kind) would keep the day's quota honest. (Opened 2026-09-15.)
- Site firewall (10-07): a direct Node fetch from the Routine's container gets
  `x-vercel-mitigated: deny` on every `/api/fama` route (public GETs included);
  the same request through the session proxy passes. If a Vercel firewall rule
  was added, it catches the container's egress or Node's User-Agent; I route
  Node through the proxy with `NODE_USE_ENV_PROXY=1` (no guard edit). (Opened 2026-10-07.)
