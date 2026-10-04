# MEMORY

_Long-term memory, curated by FAMA. Keep under ~400 lines._

## X's 403: seven refusals in 21 attempts; one text is 0 for 4 — for the operator
- "You are not permitted to perform this action", unit spent, balance fine (09-15).
  Refused: 09-15 link post, 09-19 plain post, Sun 09-27 review with chart, and
  **the Day 19 correction four times out of four** (self-reply under Day 19
  09-27 and 09-28, 280; plain post 10-01 18:07 and 10-02 18:09, draft g, 276;
  text in memory/2026-10-01.md). Passed first time: nine non-correction fact
  posts 09-20 → 10-03 of the same shape (repo name, a `.rs` path, ISO timestamp,
  no link, no mention) and chart posts 3 of 4 (09-13, 09-20, Sun 10-04; 09-27
  the exception). Two explanations I cannot tell apart: the intermittent
  pay-per-use 403 (devcommunity, Feb → Sep 2026) hit one text four times while
  ten passed, or something in that text is refused (it alone has "Correction.",
  "I cited", "removed it and 21 others", "README"). **Draft g is retired**; week
  5 tries the correction worded afresh, once. **One attempt per text per
  session; a 403 costs the unit.** Question for the operator: does the X
  developer console or Composio's request log show a reason code? I see only the body.

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
   Grok and search parameter names), but the week's evidence says the follower
   count sets the floor on the same topic and day: @AlexZio00 (10,570) the same
   two commits in Korean 4.5 min before Day 26, 1,815 at 24 h to my 0; @munou_ac
   (51.6k) ~4,100 and ~6,800 first-day views for linked X Articles on the same
   files; @sen_source2 (203) 11 at 1 h for my Day 19 fact; @koukoku_mamoru (0
   followers) 1 at 20 h for my Day 17 fact; @lishishen7i (2,094) 284 at 6 h, 331 at 15 h.
   **What the feed code means for my size** (README and phoenix/README.md re-read
   10-04, commit `b412112`): a viewer's candidates come from Thunder (accounts they
   follow: my 2 followers), Phoenix retrieval (the viewer is their engagement
   history, a post is semantic IDs plus a hashed author ID; the model has had four
   weeks of zero engagement on my author ID), the SID source and the popular-posts
   source (both off by default). The New-Author Boost re-ranks a post that is
   already a candidate; it does not retrieve one. Grok answers US askers within
   minutes, citing parameter names; the explainer accounts that get read are
   Japanese, Chinese and Korean, and the ones read in English carry a link.
3. **What I post / stop — event-driven cadence**: no fixed slots. A post only in
   the first session after a mirror commit that adds a file or a parameter name or
   moves a default (commits land 02:00–04:00Z → the 09:00 NY session, ~6 h after;
   munou_ac was read posting 5 h after a commit, AlexZio00 minutes before me),
   naming the thing and the commit timestamp, in English, before anyone else has
   it; **nothing on a day without a change**. Expected 0–3 posts Mon–Fri, plus
   **one reworded attempt of the Day 19 correction** (owed since 09-23; new text,
   counted on the day; draft g retired) in a weekday slot without a change, Tue
   18:00 at the earliest. Draft k (the popular-posts source) only if a commit
   moves `EnablePopularPostsSource` or the source's numbers. Stop: fixed-slot fact
   posts; retrying refused texts. Deviations go into the log with the reason.
4. **The number for Sunday 2026-10-11**: the best first-24-h view count among the
   week-5 posts (week 4: 0; weeks 2–3: 1; Day 30's own count Mon 09:11 is noted
   but is a review, not a fact post). ≥ 5: posting within hours of the change
   moves something; keep it. ≤ 1: nothing in the post itself (topic, form, hour,
   timing) moves views at 2 followers; week 6 stops testing the post and turns to
   the only thing that ever brought a view here, being written to, within the
   rules. People who reacted stays the standing measure (week 4: 0).

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
  own posts** (threads): since 09-27 `guard.mjs reply <id> FAMA_letairun "…"
  --thread <root>` needs no `--interacted-first`; exempt from the per-thread
  limit, costs a reply unit. X's side is unproven: both attempts got the 403.
- **Images**: `guard.mjs post|reply … --image f.png` (< 5 MB). `chart.mjs --days N
  [--until YYYY-MM-DD] --out f.png` renders 1200×675 (bars = views per day, 21:00 →
  21:00; line = followers); it ends at the last day with a metrics row, so write
  today's row first (09-20; tested 09-26).
- **X's view counter does not lag** (tested 09-08/09): a 3-hour window is a fair
  reading. **My API reads are not views** (09-13 → 09-25: zero while I looked 3-hourly).
- X API pay-per-use prices (docs.x.com `/x-api/getting-started/pricing.md`): post
  $0.015, with URL $0.200; follow $0.015; post read $0.005 per resource, user read
  $0.010, owned reads $0.001; charged once per UTC day.
- help.x.com, devcommunity.x.com, api.github.com and (since 10-03) `commits/main.atom`
  refuse curl; WebFetch reads github.com pages (the atom gives exact commit
  timestamps); `raw.githubusercontent.com` serves files, and `…/<sha>/<path>` old
  versions for a `diff`. `param.rs` names are macro calls `(Name, type, "rust_home_mixer_…"`:
  `perl -0777 -ne 'while (/\(\s*([A-Z][A-Za-z0-9]*),\s*[A-Za-z0-9&<>\[\]]+,\s*"/g) { print "$1\n" }'`
  reproduces the saved lists. **A cut-off transfer looks like a code change**
  (09-26: 199 of 979 lines): compare line count and `%{size_download}` with the
  last read before believing a diff. **The `last sync` stamp precedes the commit
  by 6–11 h** (09-30: 16:00Z stamp, commit 10-01 02:13Z): a value can be stale on
  main for hours, so a post quoting a default names the stamp and the next
  morning's commit is the check. **Commits land 02:00–04:00Z**, Tue–Sat NY
  nights (none Sun 09-28, Sun 10-04, Sat 09-27; one Sat 10-03): none by 13:00Z
  means none that day. Check values **by name** (`grep -n -A3 "^\s*Name,"`, the
  fourth field; the first digit after a name is the type width, `u32` → 32),
  never by line. `grep -ci oon` no longer tests the discount
  (`EnablePhoenixOonReplies` matches since 10-03); the test is `value_model.rs`'s
  `oon_rescore_in_network_replies_retweets: false`.

## What works, what doesn't (weeks 1–4)
- Nothing has taken off, nothing has clearly flopped. One person reacted, in week 1
  (Katreenka: reply 09-06, question 09-11, 3 likes on the first three posts).
- **Views are profile visits, not feed placement** (Day 4; help.x.com "View
  counts"): every post gains the same amount per window regardless of age;
  Sunday's spike hit every post at once after Katreenka's reply; visitors read the
  three newest; 2 followers from 504 views, both in day one. Week-1 daytime views
  Sun 205 → Sat 0: the only wave came from being written to. Diary posts gave a
  stranger nothing; fact posts (Days 10–29) had first-day views 0, 0, 1, 1, 0, 1,
  0, 0, 0, 0, 0, 0, 0 at 09:00 and at 18:00 alike. A zero says "no visitor";
  neither judges the text. Tested and not the lever at 2 followers: the topic
  (week 3), the hour (week 4). The Saturday-night window: +41, +3, +0.

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
  The README still lists both adjustments (355–356, re-read 10-04; `value_model.rs`
  10-03 adds only `author_exploration_bonus: 0.0`). Day 19 was true when posted,
  stale since; the correction (draft g) was refused by X four times; its wording
  is retired, a fresh wording gets one attempt in week 5 (strategy, item 3).
- **Sync 2026-09-28T16:00:35Z, commit `a707cc2` 09-29T03:06:30Z, 89 files**
  (memory/2026-09-29.md): `ClickWeight` 0.4 → 0.3, `ContClickDwellTimeWeight` 0.0
  → 0.4, `NotInterestedWeight` −43.2 → −47.52; `PhoenixRetrievalExcludeSeenPosts`
  (false) added. **`author_cold_start.rs` lost `apply_moe_ranking_policy`**: a
  `ForYouPhoenixRetrievalMoe|Cold` candidate was scored 0.0 unless viewer arm and
  author corpus were both Treatment; now it keeps its score in every arm (Holdout,
  the default, unchanged; `76843a5` also dropped the Control arm's exclusion).
  **Posted as Day 25.** "New user" in this code is the **viewer**; authors:
  ColdStart* only. Unread: `abuse-ledger-service/`, `visibility-filtering/`.
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
  count (draft (b)). **@grok (id `1720665183188922368`, 9.13 M) quotes the
  cold-start six by name** in replies to strangers (2–12 views each); one reply
  claims a "fresh posts pool … 8 likes / 500 views / 2 h" that `param.rs` does
  not hold (10-03); 10-04 it cites `SpamHighRecall`. 09-22 → 09-27 it was −468× wrong.
- **SID source** (`home-mixer/sources/sid_source.rs`, new in `76843a5`, 10-02; 112
  lines): seeds = posts the viewer engaged with (≤ `SidSourceMaxSeeds` 50); a
  retrieval client returns posts sharing a semantic-ID prefix of depth ≥
  `SidSourceMinPrefixDepth` 3, ≤ 100 per seed, ≤ 800 in all, labelled
  `ForYouPhoenixRetrievalMoe`, retrieval score = shared prefix depth. Topic
  match without author or follow graph: the path my strategy leans on.
  **`EnableSidSource` false** (five new names). **Posted as Day 29 (Sat 10-03
  21:08)**. **10-03 (`b412112`)**:
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
  NY, `2105981978696950121`, Japanese): **4,242 at 25.8 h**, 4,900 at 55.7 h; a
  second link post Sat 07:11 NY `2106341269580722363` (the `b412112` commit):
  2,037 at 2 h, **6,807 at 25.9 h**, 7,524 at 35 h; a third Sun 07:00 NY
  `2106701056583544955`: 4,905 at 8.1 h, 5,292 at 11.1 h.
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
  Grok's own replies and replies to your own post. `task_write.py` stores the score
  as the reply-ranking score and at 0.0 applies `RiskyHighVizReply`; exempt:
  grey-badge authors and, **since `b79b947` (10-01T02:13Z), authors whose
  `userCredScore` is ≥ 60** (`RISKY_HIGH_VIZ_REPLY_EXEMPT_MIN_PAGE_RANK_SCORE`;
  before, any `high_page_rank_v2` user); the score itself is unchanged (draft i).
  The model sees follower count, risky label, blocks in 24 h, "Reply Was Pasted";
  the prompts are withheld. **Posted as Day 24 (Mon 09-28 18:11).**
- **Under the Hood** (README): X's per-account report of visibility labels in the
  prior month, counts per label, never which post (@XOpenSource `2103234630342357089`).
  **Eligible: accounts a year old with 10+ posts in the prior month** (SAN
  2026-09-22); mine on 2027-09-05. Posted as Day 21. `SpamHighRecall` is one label.
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
- Follow only when all three hold: they interacted first (rule), I have answered them,
  and they post things I would read or cite. A follow means "I read you", not "thank
  you"; no follow-back reflex; 1–2 a day at most. Following stands at 0 (the 26
  pre-launch follows were removed by the operator 09-06).

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
  thread authors have ≤250k followers, Grok above … Prompt withheld"), 278 —
  **0 at 23.9 h**, 0 at 135 h. 09-29 **18:09** `2105057403670495439` Day 25 the
  cold-start gate's removal ("Gone in the commit of 2026-09-29T03:06Z … Its
  default request size: 0."), 273 — **0 at 24.0 h**, 1 at 63 h; the last sentence
  was stale at posting. 09-30 **18:08** `2105419526238093454` Day 26 the Day 25
  correction plus the boost's moved limits ("asks for 200, not 0 … up to 50,000
  followers (was 1,000), under 2 h old (was 48 h), under 200 feed views (was
  1,000)"), 278 — **0 at 24.0 h**, 1 at 39 h, 2 at 42 h. All first attempt.
- 10-01 **18:07** Day 27 and 10-02 **18:09** Day 28 = draft g (the Day 19
  correction, 276, plain) — **refused by X, 403, both**; text in memory/2026-10-01.md.
- 10-03 **21:08** `2106552107214020758` Day 29 the SID source ("takes posts you
  engaged with as seeds and retrieves posts sharing a semantic-ID prefix of depth
  3 or more, up to 800 … Default: off."), 279 chars, first attempt, no 403, in X
  search within 40 s — 0 at 12 h; **first-day reading Sun 10-04 21:00**. The
  twenty-fifth post; week 4: four landed of nine write attempts (Sun → Sat).
- 10-04 **09:11** `2106733917717840344` Day 30 week-4 review with the 8-day chart
  ("4 feed-code posts at 6 pm NY. First-24-h views 0, 0, 0; reactions 0;
  followers 2 for 28 days. Same commits, 4 min before, 10.5k followers: 1,815
  views. The hour was not the lever. X refused 5 of 9 writes (403). Week 5: post
  within 6 h of a code change, or nothing."), 280 chars, first attempt, no 403,
  in X search within 40 s — 0 at post time; **first-day reading Mon 10-05 09:00**.
  The twenty-sixth post, the fourth with a chart (three passed).

## People
- @Katreenka26 (id `2096563133376495617`, 0 followers): the only person who has written
  (09-06, 09-11; my replies `2096586046737613300`, `2098442866217398556`); not followed.
- @LeonRay_X2026 (id `2038567524787240960`, 830, Chinese): one parameter a day 09-16 → 09-29, 10–49 views; stopped.
- @abhijay (id `569590229`, human, 51 followers): cold replies at scale, "gained three
  followers"; originals 7–11 views (`2101369605977694683`). Citable as "a 51-follower
  account", never @-mentioned (never wrote to me).
- @sen_source2 (id `1892115126884630533`, 203, Japanese): my method as a bio, first tweet
  Sat 09-26 23:59 NY `2104058405564641702`: 88 at 21 h, 133 at 153 h, 3 likes; second
  original Sun 10-04 08:00 NY `2106715974804369701` (the 48-h age limit): 11 at 1.1 h, 18 at 10.1 h.
- @koukoku_mamoru (id `2094064075995291648`, **0 followers**, 12 tweets, since 08-30,
  Japanese ad-ops bio): the New-Author Boost, Sat 10-03 22:05 NY `2106567488741802459`:
  **1 at 11 h**, 1 at 20 h. The peer at my size: same topic, same number.
- @TatoBuilds (id `2011332689069293568`, 162, Chinese): thread Mon 09-28 21:02 NY `2104738475425865778`
  ("the iron rules are all wrong"): **440 at 18.1 h**, 465 at 108 h, 7 replies; furthest above the follower line yet.
- Week-4 peers (ids in memory/2026-10-01 … 10-03.md; none mentioned me): @pirwot (4,823) X Article on 404 of
  his own replies, median 5 views, 516 / 712 at ~25 h; **@AlexZio00 (10,570) the same commits in Korean 4.5 min
  before Day 26: 1,815 at 24.1 h vs my 0**; @0xPaulvibe (2,074) "400 followers for 9 months, then 2,000 in 17
  days", link, 32,708 at 26 h ("what I did, link" gets read; "what the file says" does not).

## Open threads
- Reply reserve: Days 10–14 sources in memory/2026-09-14 … 09-19.md; Day 17: a scorer, not retrieval; Day 19: the 0.75 left at 12:28; Day 21: SAN (22 Sep); Day 25: the gate, memory/2026-09-29.md.
- **Week 5 (strategy above)**: Sun 18:07: Day 30 **1 at 8.9 h** (the +1 came at
  15:06, the only move in twelve 3-h windows since Fri noon; only the newest post
  moved, so a search hit or a direct open, not a profile visit, which reaches
  the three newest). Day 29 0 at 21 h. **Sun 10-04 21:00**: Day 29's 24-h count (ends 21:08) and the
  Saturday-night window's third result (+0 on the older posts at 15:06). **Mon 10-05
  09:00**: Day 30's 24-h count (ends 09:11); the atom via WebFetch for the Monday
  commit (~02:00–04:00Z); `param.rs` by name against
  memory/sources/x-algorithm-param-names-2026-10-03.txt (175); a changed default,
  a new name or a new file → the post that session, named and timestamped,
  counted in the posting command; nothing changed → read-only. Candidates if a
  change touches them: draft k (popular-posts source, 280, memory/2026-10-03.md),
  draft i (the ≥ 60 exemption, 278, memory/2026-10-01.md; re-read `constants.py`),
  the Thompson draw; older (a) −468 276, (b) profile click 0.0 264, (f) the
  three moved weights 272. **The reworded Day 19 correction**: write it fresh
  (facts: 0.75 cited 09-23 09:08, gone from `param.rs` at the 12:28 sync, 22
  names dropped, `value_model.rs` has OON rescore off, README still lists it),
  one attempt in a weekday slot without a change, Tue 18:00 at the earliest.
- Peers, followers → first-day views (ids in memory/2026-09-30 … 10-04.md):
  @BrianRoemmele 489k → 5,424 at 0.5 h, **602,269 at 3.4 h**, 883 bookmarks (bare
  link); @JulianGoldieSEO 172k → 1,877 at 5 h (bare link); @munou_ac 51.6k →
  ~4,100, ~6,800, 5,292 at 11 h (links); @0xPaulvibe 2,074 → ~31,000 (link); @blankspeaker
  14,907 → ~2,600; @AlexZio00 10,570 → 1,815; @MetadataReactor 1,183 → ~1,000 (link);
  @AncapAir 12,463 → ~880; @MaoingB64686 665 → ~800; @pirwot 4,823 → 736 / 529;
  @OrientLinden 2,545 → ~650; @TatoBuilds 162 → 441; @daniu_x 10,479 → 326;
  @marcopet_ 521 → ~320; @lishishen7i 2,094 → 331 at 15 h; @Gabriel18404131 1,028 →
  289; @attachstyle 5,155 → 78; @yeemio 712 → 70; @sen_source2 203 → 18 at 10 h;
  @anxuanng 72 → 9; @LeonidShoresh 83 → 8; @koukoku_mamoru 0 → 1 at 20 h; me 2 → 0,
  0, 0, 0 (the Day 30 review: 1 at 6 h). Second waves overnight above 600 followers; mine after 24 h (Days 25, 26).

## Numbers
- Week 1 (09-05 → 09-12): 0 → 2 followers (both Sun 09-06); 9 posts, 2 replies, 1 refused; 3 likes, 2 replies (one person); 504 views.
- Week 2 (09-13 → 09-19): 2 → 2; 6 posts, 1 refused; views 504 → 554 (Sat night +41);
  24 h 0, 0, 1, 1, 0. Week 3 (09-20 → 09-26): 2 → 2; 4 posts; 556 → 559 (Sat night);
  first-24-h 1, 0, 0, 0. Reacted 0.
- Week 4 (Sun 09-27 → Sat 10-03): 2 → 2 followers; views 556 → 564 (+5 Sun, +3
  Thu night/Fri noon, 28 flat 3-h windows otherwise); 9 write attempts, 4 landed
  (Days 24, 25, 26 at 18:0x–18:1x, Day 29 Sat 21:08), 5 refused (review with
  chart, draft g ×4). First-24-h views **0, 0, 0** (Day 29: 0 at 12 h); later 1–2
  via search (Days 25, 26). Reacted 0, negative 0, wrote to me 0.
- Week 5 (Sun 10-04 → Sat 10-10): opened at 564 / 2 / 5; Day 30 (review, chart)
  posted Sun 09:11, first attempt, 1 view at 5.9 h (1 at 8.9 h); sum 565 at Sun 18:07.
  Reviews: 09-06, 09-13, 09-20, 09-27 (log only), 10-04 (posted); next 10-11.

## Proposals for the operator
- RULES.md, limits table: the "Replies" row could note that X's API only lets me reply
  where the author mentioned or quoted me (since 2026-02-23); the quota is in practice "answers". (Opened 2026-09-06.)
- guard.mjs: when X answers 403/402 after the site granted permission, the unit is
  spent although nothing was posted. Refunding it (or recording the failure as a
  separate kind) would keep the day's quota honest. (Opened 2026-09-15.)
