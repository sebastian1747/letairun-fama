# MEMORY

_Long-term memory, curated by FAMA. Keep under ~400 lines._

## X's 403: seven refusals in 19 attempts; one text is 0 for 4 — for the operator
- "You are not permitted to perform this action", unit spent, balance fine (09-15).
  Refused: 09-15 link post, 09-19 plain post, Sun 09-27 review with chart, and
  **the Day 19 correction four times out of four**: as a self-reply under Day 19
  Sun 09-27 and Mon 09-28 (280), as a plain post Thu 10-01 18:07 and **Fri 10-02
  18:09** (draft g, 276; text in memory/2026-10-01.md). Through first attempt:
  plain posts 09-20 → 09-25 (five) and Mon–Wed 09-28 → 09-30 at 18:0x–18:1x,
  same shape (repo name, `param.rs`, ISO timestamp, no link, no mention). Two
  explanations I cannot tell apart: the intermittent pay-per-use 403
  (devcommunity, Feb → Sep 2026) hit one text four times while eight passed, or
  something in this text is refused (it alone has "Correction.", "I cited",
  "removed it and 21 others", "README"; Day 19 carried "OonWeightFactor 0.75"
  and passed). **No further attempt of this text this week**; it goes to the
  Sunday 10-04 review. **One attempt per text per session; a 403 costs the unit.**
  Question for the operator: does the X developer console or Composio's request
  log show a reason code for these 403s? I see only the body. A test for a later
  week: the same correction worded afresh, once.

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

## Strategy, week 4 (Sun 2026-09-27 → Sat 2026-10-03)
1. **What a non-follower got from week 3**: three sourced rules of X's feed code
   (New-Author Boost, AgeFilter + the 0.75, Under the Hood eligibility), Mon/Wed/Fri
   at 09:0x–09:2x NY. Evidence anyone got them here: first-24-h views 0, 0, 0 (Day 21
   reached 1 at 47.7 h); people who reacted 0 (weeks 1–2: 1, 0); 153 h without a
   view. The same rules, posted by accounts with 171–88,170 followers or by Grok in
   reply, were read 96–4,126 times in a day. The pre-decided number said: the topic
   was not the lever; week 4 changes the form or the cadence, not the topic.
2. **Whom I want to reach, where they read**: unchanged (people who talk to "the
   algorithm" and ask Grok about reach). Who gets read on the topic this week:
   @qimuai (171, advice form, Chinese, 96 at 24 h), @sen_source2 (196, Japanese, my
   method as a bio, first tweet 88 at 21 h), @mio_nakamatachi (1,472, link post, 286
   at 24 h), @LeonRay_X2026 (830, 16–45), @muskonomy (88k, 4,244 at 39 h). Non-English
   accounts dominate; my audience is US-centric by rule; US readers ask Grok.
   **What the feed code means for me** (phoenix/README.md re-read 09-27; quotes in
   the Phoenix bullet below): the viewer is their history, a post is its topic plus
   a hashed author ID, so my topic can match a stranger's history whatever my size,
   while the author ID carries what the model learned about an author nobody engaged
   with. Context features include "local hour-of-day": the hour is an input, and the
   one I had never varied (all sixteen fact posts at 09:0x–09:2x; the only visits
   came Saturday nights, 09-19 +41, 09-26 +3).
3. **What I post / stop**: same topic (one file or parameter per post, sourced, my
   numbers as evidence), same form (plain text, no link, "Day N."), **different
   hour: 18:00 NY**: Mon 09-28 Day 24 (the reply scorer, 0 at 23.9 h), Tue 09-29
   Day 25 (the cold-start gate, a logged deviation, 0 at 24.0 h), Wed 09-30 Day 26
   (the Day 25 correction plus the boost's new limits, 0 at 24.0 h), Thu 10-01 Day
   27 (the Day 19 correction, draft g: **refused, 403**), Fri 10-02 Day 28 (draft g
   again, a logged deviation: **refused, 403**), plus **Sat 10-03 21:00** Day 29 into the
   Saturday-night window. Ids in Posts. Stop: 09:00 fact posts this week; the Sunday 10-04 review
   stays at 09:00. The 09:00/12:00/15:00 sessions are read-only and recount the draft.
4. **The number for Sunday 2026-10-04**: the best first-24-h view count among the
   week-4 posts (three planned, four with Day 25; weeks 2–3 best: 1). **Day 24: 0.
   Day 25: 0. Day 26: 0.** ≥ 5: the hour moved something; keep 18:00
   and vary the next input. ≤ 1: neither topic, form nor hour is the lever at 2
   followers; week 5 changes the cadence. People who reacted stays the standing
   measure of the mission (week 3: 0).

## How the tooling behaves
- Sync step: the 118 `origin/claude/wizardly-newton-*` branches are absorbed history; merge only a tip newer than main's.
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
  own posts** (threads): since 09-27 12:33 (commit fb63176, my 09-25 proposal
  implemented) `guard.mjs reply <id> FAMA_letairun "…" --thread <root>` needs no
  `--interacted-first`; the site grants it (`interacted_first: false`); RULES.md:
  exempt from the per-thread limit, costs a reply unit. X's side is unproven: both
  attempts got the 403 (section at the top); corrections stay in the log until one works.
- **Images**: `guard.mjs post|reply … --image f.png` (< 5 MB). `chart.mjs --days N
  [--until YYYY-MM-DD] --out f.png` renders 1200×675 (bars = views per day, 21:00 →
  21:00; line = followers); it ends at the last day with a metrics row, so write
  today's row first (09-20; tested 09-26).
- **X's view counter does not lag** (tested 09-08/09): a 3-hour window is a fair
  reading. **My API reads are not views** (09-13 → 09-25: zero while I looked 3-hourly).
- X API pay-per-use prices (docs.x.com `/x-api/getting-started/pricing.md`): post
  $0.015, with URL $0.200; follow $0.015; post read $0.005 per resource, user read
  $0.010, owned reads $0.001; charged once per UTC day.
- help.x.com, devcommunity.x.com, api/github.com and (since 10-03 noon)
  `commits/main.atom` refuse curl; WebFetch reads github.com pages; `raw.githubusercontent.com` serves files. `param.rs` names are macro calls
  `(Name, type, "rust_home_mixer_…"`: `perl -0777 -ne 'while (/\(\s*([A-Z][A-Za-z0-9]*),\s*[A-Za-z0-9&<>\[\]]+,\s*"/g) { print "$1\n" }'`
  reproduces the saved lists. **A cut-off transfer looks like a code change**
  (09-26: 199 of 979 lines, header intact): compare line count and
  `%{size_download}` with the last read before believing a diff. The repo gets
  one CI commit a day; a commit page lists what changed, `commits/main.atom` gives
  exact timestamps, and
  `raw.githubusercontent.com/xai-org/x-algorithm/<sha>/<path>` serves the old
  version for a `diff` (09-29). **The `last sync` stamp precedes the commit by 6–11
  h** (09-23: 16:28Z stamp, commit next 02:19Z; 09-30: 16:00Z, commit 10-01
  02:13Z; 10-02: 16:00Z, commit 10-03 03:27Z): a value can be stale on main for
  hours before the mirror lands, so a post quoting a default names the stamp, and
  the next morning's commit is the check. Check values **by name** (`grep -n -A3
  "^\s*Name,"`), never by line: every commit that adds a `param!` shifts the lines
  (10-03). `grep -ci oon` is no longer a test for the discount
  (`EnablePhoenixOonReplies` matches since 10-03); the test is `value_model.rs`'s
  `oon_rescore_in_network_replies_retweets: false`.

## What works, what doesn't (weeks 1–3)
- Nothing has taken off, nothing has clearly flopped. One person reacted, in week 1
  (Katreenka: reply 09-06, question 09-11, 3 likes on the first three posts).
- **Views are profile visits, not feed placement** (Day 4; help.x.com "View
  counts"): every post gains the same amount per window regardless of age;
  Sunday's spike hit every post at once after Katreenka's reply; visitors read the
  three newest; 2 followers from 504 views, both in day one. Week-1 daytime views
  Sun 205 → Sat 0: the only wave came from being written to. Diary posts gave a
  stranger nothing; fact posts (Days 10–26) had first-day views 0, 0, 1, 1, 0, 1,
  0, 0, 0, 0, 0, 0. A zero says "no visitor"; neither judges the text.

## What X's own feed code says (github.com/xai-org/x-algorithm, read 2026-09-19)
- X open-sourced the For You algorithm (Apache 2; TechCrunch 2026-08-13; README
  updates dated 2026-09-18). `home-mixer/params/param.rs` defaults are cron-synced to
  production; re-read on the day before quoting; cite parameter names, never lines.
  Names per day in `memory/sources/` (regex over the whole file). **Sync
  2026-09-23T16:28:43Z (Wed 12:28 NY, 3 h 20 min after Day 19) dropped 22 parameters**
  (184 → 162): `OonWeightFactor` 0.75, the three author-diversity names, VMRanker*,
  WeightPerturbation*, and more (list in memory/2026-09-24.md).
  `scorers/value_model.rs` hard-codes author diversity off and OON rescore off
  (no `author_diversity_scorer.rs`; `post_fusion_multipliers` only in
  `xai-value-model/scoring.rs`, test value 0.75). Path: PhoenixScorer → VMRanker.
  The README still lists both adjustments (re-read 10-03 09:08; `value_model.rs` 10-03 adds only `author_exploration_bonus: 0.0`). Day 19 was true
  when posted, stale since; the correction (draft g) was **refused by X as Day 27 and
  Day 28** (Thu 10-01 18:07, Fri 10-02 18:09, 403 both); parked until the Sunday review.
- **Sync 2026-09-28T16:00:35Z, commit `a707cc2` 09-29T03:06:30Z, 89 files**
  (memory/2026-09-29.md): `ClickWeight` 0.4 → 0.3, `ContClickDwellTimeWeight` 0.0
  → 0.4, `NotInterestedWeight` −43.2 → −47.52; `PhoenixRetrievalExcludeSeenPosts`
  (false) added. **`author_cold_start.rs` lost `apply_moe_ranking_policy`**: a
  `ForYouPhoenixRetrievalMoe|Cold` candidate was scored 0.0 unless viewer arm and
  author corpus were both Treatment; now it keeps its score in every arm (Holdout,
  the default, unchanged; `76843a5` also dropped the Control arm's exclusion).
  **Posted as Day 25 (Tue 09-29 18:09)**, naming the commit's timestamp. "New
  user" in this code is the **viewer**; authors: ColdStart* only. Unread:
  `abuse-ledger-service/`, `visibility-filtering/`.
- **New-Author Boost** (`scorers/author_cold_start.rs`, on by default): per feed
  load, one original post (no replies, no reposts) by an author with ≤ 50,000
  followers (≤ 1,000 until the sync of **2026-09-29T17:02:52Z**, commit `77d431a`
  2026-09-30T03:53:42Z), ≤ 2 h old (was 48 h), < 200 feed views
  (`view_count_on_home`; was 1,000), ranked in the top 97 % (was 85 %), has its
  score raised to that of the post at slot 15–16 (README: weights scale predicted
  probabilities; "1 report cancels out 468 likes" is the named misconception; "Grok"
  in a post is not an @-mention). Since that sync the pick is by
  Thompson sampling: each eligible post draws from Beta(0.75 + likes, 49.25 +
  views − likes), the top 2 draws compete on score. Same sync:
  `PhoenixColdStartMaxResults` 0 → 200 (Day 25's "default request size: 0" was
  stale 5 h before it went out; **corrected as Day 26**, Wed 09-30 18:08). The
  10-01 (`b79b947`), 10-02 (`76843a5`, 105 files) and 10-03 (`b412112`,
  03:26:56Z, stamp 10-02T16:00:41Z, 148 files) mirrors moved none of the six. Experiment arms
  exist (Holdout/Control/Treatment); Holdout (the default) takes every corpus.
  On X four minutes after the commit: @blankspeaker (14,907) 1,617 views at 9.4 h;
  @LeonidShoresh (83) 3, @anxuanng (72) 6 (memory/2026-09-30.md).
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
  −58.8, report −234. So the one action that has ever brought me a view (a profile
  visit; Day 4) is weighted zero; a follow from the post (4) or a reply (5) would
  count (draft (b)). Grok 09-22 → 09-27: −468× wrong, 48 h and copy-link right. **@grok (id
  `1720665183188922368`, 9.13 M) now quotes the cold-start six by name** in
  replies to strangers (Fri–Sat, 5–12 views each, "params as of ~Oct 1"); one
  Grok reply claims a "fresh posts pool … 8 likes / 500 views / 2 h" that
  `param.rs` does not hold (10-03).
- **SID source** (`home-mixer/sources/sid_source.rs`, new in `76843a5`, 10-02; 112
  lines): seeds = posts the viewer engaged with (≤ `SidSourceMaxSeeds` 50); a
  retrieval client returns posts sharing a semantic-ID prefix of depth ≥
  `SidSourceMinPrefixDepth` 3, ≤ 100 per seed, ≤ 800 in all, labelled
  `ForYouPhoenixRetrievalMoe`, retrieval score = shared prefix depth. Topic
  match without author or follow graph: the path my strategy leans on.
  **`EnableSidSource` false** (five new names). Draft j. **10-03 (`b412112`)**:
  `sid_source.rs` byte-identical; the server it calls is now public
  (`phoenix/crates/serving/xai-recsys-sid-retrieval/`, proto: `seed_post_ids`,
  `max_results`, `max_per_seed`, `min_prefix_depth`; a `Seed` carries its SID
  `codes`, a `Candidate` its `shared_prefix_depth`). Same commit, **eight new
  names (175)**, all default-off or neutral: **`sources/popular_posts_source.rs`**
  (`EnablePopularPostsSource` false; a stored list of up to
  `PopularPostsTopAuthors` 1,000 authors sorted by follower count, refreshed
  hourly, sent to Thunder as if the viewer followed them: 500 posts, 3 per
  author, 0 replies/reposts; the mirror image of cold start — draft k, 280,
  memory/2026-10-03.md) and `EnablePhoenixOonReplies` (false; on, Phoenix-retrieved
  out-of-network replies pass `oon_retweet_reply_filter.rs`). README 10-03 adds a
  `FavHoldoutFilter` row (`EnableFavHoldout` false; holds out 2–15 % of posts by
  like count, ≤ 1 like 0 %; file unchanged since ≤ 10-01).
  @munou_ac (51,601) posted it as an X Article 5 h after the commit (Fri 07:23
  NY, `2105981978696950121`, Japanese): **4,242 at 25.8 h** (first-day ~4,100), 4,402 at 28.7 h;
  a second link post Sat 07:11 NY `2106341269580722363` (the `b412112` commit): 2,037 at 2 h, 3,334 at 5 h, **3,754 at 8 h** (the SID article 4,467 at 31.8 h).
  **Seeds** (`post_signal_ids` in `sources/simclusters_source.rs`, shared with
  SimClusters; read 10-02 21:06): the viewer's explicit and implicit engagement
  signals, newest first, deduped by post id; types (`models/engagement_signals.rs`):
  favorite, retweet, reply, bookmark, share, original_tweet, photo_expand,
  video_quality_view, immersive_video_quality_view (munou_ac's "image zoom").
- **Phoenix retrieval** (phoenix/README.md, 09-27): no per-user ID embedding; the
  viewer is their engagement history plus profile features; a post is semantic IDs of
  its content plus a hashed author ID ("same-topic posts share SID prefixes");
  context features include timezone, local hour-of-day, product surface, post age.
- **Every reply under someone else's post is scored 0–3 by a language model**
  (`grox/flows/reply_spam/`, read 09-26, detail in memory/2026-09-26.md):
  `task_filter.py` sends replies whose replied-to and root authors both have ≤
  250,000 followers to Gemma (`oai-gemma4-26b`), above that to Grok 4 mini; skips
  Grok's own replies and replies to your own post. `task_write.py` stores the score
  as the reply-ranking score and at 0.0 applies `RiskyHighVizReply`; exempt:
  grey-badge authors and, **since `b79b947` (10-01T02:13Z), authors whose
  `userCredScore` is ≥ 60** (`RISKY_HIGH_VIZ_REPLY_EXEMPT_MIN_PAGE_RANK_SCORE`;
  before, any `high_page_rank_v2` user); the score itself is unchanged (draft i).
  The model sees follower count, risky label, blocks in 24 h, "Reply Was Pasted";
  the prompts are withheld. **Posted as Day 24 (Mon 09-28 18:11).**
- **Under the Hood** (README): X's per-account report of visibility labels in the
  prior month, counts per label, never which post (@XOpenSource
  `2103234630342357089`, 2.77 M views). **Eligible: accounts a year old with 10+
  posts in the prior month** (SAN 2026-09-22); mine on 2027-09-05. Posted as Day 21.
- **The rules are table stakes; the follower count sets the floor** (one topic,
  09-20 → 09-27, first-day views at followers): me 0 at 2; 2 at 20; 10 at 51; 96 at
  171; 19 at 830; 119 at 2,309; 3,761 at 88,170. Off the line: a named playbook
  with a link (790 → 612 in 51 h), link posts, @TatoBuilds (162 → 440 at 18 h). A
  171 above an 830 says band, not formula; after day one peers gain 1–2 a day, I
  gain 0–1. Replies sit outside the ordering (Grok 1–35 per reply).

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
- Keep the list short and legible ("who FAMA reads"), 1–2 a day at most. Following stands at 0
  (the 26 pre-launch follows were removed by the operator 09-06).

## Posts (all New York time)
- Weeks 1–2 (ids: `GET /api/fama/posts`; views in memory/2026-09-27.md): diary posts 09-05 → 09-11,
  09-13 review with chart; week-2 fact posts at 09:1x (Days 10–14: reply rule, "API reads are not
  views" with a link: 403, limits, Moltbook, the label), 0/0/1/1/0 at 24 h (memory/2026-09-14 … 09-18.md).
- 09-19 09:04 Day 15 search window — **refused by X, 403, no link**; text in memory/2026-09-19.md.
- 09-20 09:06 `2101659440776671623` Day 16 week-2 review with chart (8 bars, the
  last one Saturday night's 41), 276 chars, first attempt, no 403 — 0 at post time.
- 09-21 09:22 `2102025765034381325` Day 17 the New-Author Boost ("it re-ranks; it
  does not find you"), 279 chars — 0 at 24 h. 09-23 09:08 `2102746815451861433`
  Day 19 AgeFilter 48 h + OonWeightFactor 0.75, 268 chars — **0 at 24 h, 0 at 48
  h**; the 0.75 left `param.rs` 3 h 20 min later. 09-25 09:25 `2103476083588813133`
  Day 21 Under the Hood eligibility, 279 chars — **0 at 24 h**, 1 at 47.7 h, 2 at
  56.7 h. All first attempt, no 403.
- 09-27 09:12 Day 23 week-3 review with chart, 274 — **refused by X, 403** (review
  in the site log); 09-27 15:08 and 09-28 09:48 the correction as a self-reply
  under Day 19, 280, guard allowed — **403 both**; texts in memory/2026-09-27.md.
- 09-28 **18:11** `2104695466537410858` Day 24 the 0–3 reply scorer ("Gemma if both
  thread authors have ≤250k followers, Grok above … Prompt withheld"), 278 chars,
  first attempt, no 403, in X search within a minute — **0 at 23.9 h** (Tue 18:06),
  like Days 17, 19, 21 at 09:00. The first fact post outside 09:0x–09:2x.
- 09-29 **18:09** `2105057403670495439` Day 25 the cold-start gate's removal ("scored
  0 unless the viewer was in an experiment's treatment arm. Gone in the commit of
  2026-09-29T03:06Z … Its default request size: 0."), 273 chars, first attempt, no
  403, in X search within 24 s — 0 at 2.9 h, **0 at 24.0 h** (Wed 18:06), 1 at 63 h;
  its last sentence was stale at posting (sync 17:02Z, mirror 03:53Z); corrected as Day 26.
- 09-30 **18:08** `2105419526238093454` Day 26 the Day 25 correction plus the boost's
  moved limits ("cold-start retrieval now asks for 200, not 0 … authors up to
  50,000 followers (was 1,000), posts under 2 h old (was 48 h), under 200 feed
  views (was 1,000)"), 278 chars, first attempt, no 403, in X search within 16 s —
  0 at 2.95 h, **0 at 24.0 h** (Thu 18:08), 1 at 39 h, 2 at 42 h. @AlexZio00 posted
  the same commits in Korean 4.5 min earlier: 1,815 at 24.1 h, 1,930 at 42 h.
- 10-01 **18:07** Day 27 and 10-02 **18:09** Day 28 = draft g (the Day 19
  correction, 276, plain, no link) — **refused by X, 403, both times**, first
  attempt each, units spent; sixth and seventh refusal in 19 attempts. Text in
  memory/2026-10-01.md. Nothing went out Thu or Fri; `tweet_count` stays 24.

## People
- @Katreenka26 (id `2096563133376495617`, 0 followers): the only person who has written (09-06,
  09-11; my replies `2096586046737613300`, `2098442866217398556`); answered within the hour; not followed.
- @LeonRay_X2026 (id `2038567524787240960`, 830, Chinese): one parameter a day 09-16 → 09-29, 10–49 views; stopped.
- @abhijay ("Abhijay Pal", id `569590229`, human, 51 followers, India): found 09-21;
  cold replies at scale ("replies into threads carrying 2.5 million views ... gained
  three followers"; originals 7–11 views, "it is not a feed", `2101369605977694683`).
  Nearest peer by method and result. Never mentioned me; citable as "a 51-follower
  account", not @-mentioned.
- @sen_source2 (id `1892115126884630533`, 203, Japanese): my method as a bio, first tweet
  Sat 09-26 23:59 NY `2104058405564641702`: 88 at 21 h, 133 at 153 h, 3 likes; no second original.
- @TatoBuilds ("Tato", id `2011332689069293568`, 157 → 163 followers, since 2026-01,
  Chinese): thread Mon 09-28 21:02 NY `2104738475425865778` ("the iron rules are
  all wrong"): **440 at 18.1 h**, 458 at 72 h, 4 likes, 7 replies — the furthest
  point above the followers-vs-views line yet.
- Week-4 peers on my topic (ids in memory/2026-10-01 … 10-03.md; none mentioned
  me): @pirwot (4,823) X Article "Five impressions. Then I found the filter" (404
  replies logged, median 5 views: Day 24's finding with his own log as the
  method), 516 / 712 at ~25 h; **@AlexZio00 (10,570) Korean summary of the same
  commits 4.5 min before Day 26: 1,815 at 24.1 h vs my 0**, the cleanest
  same-hour pair; @0xPaulvibe (2,074) "400 followers for 9 months, then 2,000 in
  17 days", link, 32,708 at 26 h ("what I did, link" gets read; "what the file
  says" does not); @AncapAir (12,463) three-model audit of `77d431a`, link, ~880.

## Open threads
- Reply reserve (if someone answers an old post): Days 10–14 sources in memory/2026-09-14 … 09-19.md; Day 17: a scorer, not retrieval; Day 19: the 0.75 left at 12:28; Day 21: SAN (22 Sep); Day 25: the gate, memory/2026-09-29.md.
- **Week 4 (strategy and numbers above)**: draft g is parked (0 for 4, section at
  the top). **Sat 10-03 21:00 Day 29: draft j, the SID source, 279**
  (memory/2026-10-02.md 09:22 section; held after the 10-03 mirror). Re-read
  `sid_source.rs` (3,817 bytes) and `EnableSidSource` (false) on main first,
  recount in the posting command, one attempt, `--topic feed-code`. If refused:
  the first refusal of a non-correction plain post since 09-19, "not the text".
  **Sun 10-04 09:00 review** with `chart.mjs --days 8 --until 2026-10-04` after
  the metrics row; review to the site log first, then the post attempt (09-27's
  was refused); pre-decided number 0 (Days 24, 25, 26) → week 5 changes the
  cadence. Week-5 candidates: **draft k** (the popular-posts source, 280,
  memory/2026-10-03.md; check `EnablePopularPostsSource` on the day), draft i
  (the ≥ 60 exemption, 278, memory/2026-10-01.md; "a score the code calls
  userCredScore"; re-read `constants.py`, changed 10-03), the Thompson draw;
  older: (a) the −468 misreading 276, (b) profile click 0.0 264
  (memory/2026-09-24.md), (f) the three moved weights 272 (09-29). Saturday-night
  visits (09-19 +41, 09-26 +3): note a third.
- Peers this week, followers → first-day views (ids in memory/2026-09-30 … 10-03.md):
  @munou_ac 51,561 → 4,616 (X Article link) and ~4,100 (SID article), second
  article 3,754 at 8 h; @0xPaulvibe 2,074 → ~31,000 (link); @blankspeaker 14,907
  → ~2,600; @AlexZio00 10,570 → 1,815; @AncapAir 12,463 → ~880 (link);
  @MetadataReactor 1,183 → ~1,000 (link); @MaoingB64686 665 → ~800; @pirwot 4,823
  → 736 teaser / 529 article; @OrientLinden 2,545 → ~650; @TatoBuilds 162 → 441;
  @daniu_x 10,479 → 326 (link, = my draft b); @marcopet_ 521 → ~320 (weight
  table as a thread, Italian); @Gabriel18404131 1,028 → 289 at 17 h (link);
  @attachstyle 5,155 → 78 (copy-link weight as a diagram, Japanese); @yeemio 712
  → 70; @LeonidShoresh 83 → 8; @anxuanng 72 → 9; me 2 → 0, 0, 0. Second waves
  overnight for every peer above 600 followers; mine got their first view after
  24 h (Days 25, 26). Musk's "Easy way to see how the 𝕏 algorithm works"
  (~09-24) is reused by nine link posts in 7 days.

## Numbers
- Week 1 (Sat 09-05 → Sat 09-12): followers 0 → 2 (both Sun 09-06); 9 posts, 2 replies, 1 refused; 3 likes, 2 replies (one person); 504 views (226 Sun).
- Week 2 (09-13 → 09-19): 2 → 2 followers; 6 posts, 1 refused; views 504 → 554
  (Sat night +41); fact posts at 24 h 0, 0, 1, 1, 0. Week 3 (09-20 → 09-26): 2 → 2;
  4 posts; views 556 → 559 (all Saturday night), 153 h flat; first-24-h views 1,
  0, 0, 0. People who reacted, both weeks: 0.
- Week 4 (Sun 09-27 → Sat 10-03): opened at 559 / 2 / 5; the review post and
  the correction self-reply (Sun, Mon) refused by X (403). Sunday 556 → 561
  (+5, single-post moves). Day 24 (Mon 18:11) **0 at 23.9 h**, Day 25 (Tue
  18:09) **0 at 24.0 h**, Day 26 (Wed 18:08) **0 at 24.0 h**: the three numbers
  are 0, 0, 0. Days 27, 28 (draft g) refused: three landed of five attempted.
  Twenty flat windows Mon 21:05 → Thu 21:05 (72 h at 561); Thu night +2 (Day 26
  1 at 39 h, Day 25 1 at 63 h), Fri noon +1 (Day 26 2 at 42 h, **564**), then
  flat through Sat 15:07 (six windows): a visitor reading the newest, or search
  hits (Days 25, 26 are my only hits for "cold start"; Day 24 stayed 0).
  Reviews: 09-06, 09-13, 09-20, 09-27 (log only); next 10-04.

## Proposals for the operator
- RULES.md, limits table: the "Replies" row could note that X's API only lets me reply
  where the author mentioned or quoted me (since 2026-02-23); the quota is in practice "answers". (Opened 2026-09-06.)
- guard.mjs: when X answers 403/402 after the site granted permission, the unit is
  spent although nothing was posted. Refunding it (or recording the failure as a
  separate kind) would keep the day's quota honest. (Opened 2026-09-15.)
