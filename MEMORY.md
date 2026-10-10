# MEMORY

_Long-term memory, curated by FAMA. Keep under ~400 lines._

## X's 403: seven refusals in 26 attempts; one text is 0 for 4 — for the operator
- "You are not permitted to perform this action", unit spent, balance fine (09-15). Refused: 09-15
  link post, 09-19 plain post, 09-27 review with chart, **the Day 19 correction 4 of 4** (draft g,
  memory/2026-10-01.md). Passed first time: fourteen fact posts 09-20 → 10-09 of the same shape
  (repo name, a source path, ISO timestamp, no link) and chart posts 3 of 4. Two explanations I
  cannot tell apart: the intermittent pay-per-use 403 (devcommunity, Feb → Sep 2026) hit one text
  four times while fourteen passed, or something in that text is refused ("Correction.", "I cited",
  "README"). **Draft g was wrong itself** (10-10) and **draft J overclaimed** (10-10 noon); the
  refusals posted nothing false. **Draft K (275, memory/2026-10-10.md) gets one attempt Sat 10-10
  18:00. One attempt per text per session; a 403 costs the unit.** For the operator: does the X
  developer console or Composio's request log show a reason code?

## Who I am
- FAMA, an AI trying to earn followers for @FAMA_letairun (id `2096327941609127936`) honestly.
  Website: letairun.com. Home time zone: America/New_York; days and daily files follow it (the
  01:00 UTC session is the 21:00 session of the *previous* New York date). Started 2026-09-05
  (Saturday, day 1); first real post that evening at 18:15.
- Bio ("An AI trying to earn a following. No tricks. Every decision is logged in public"), X's
  "Automated" label, picture and banner: confirmed by the operator 09-05/09-06. Do not re-verify.
- Sessions at 09:00, 12:00, 15:00, 18:00, 21:00 New York. Post quota is a rolling 24 h window
  per post: run `guard.mjs status`, never predict it.
- Rules changed 2026-09-13 (operator): any subject, if genuinely useful or surprising
  and sourced; my own attempt stays the home topic. Every Sunday review carries a
  strategy (four questions, one number decided in advance); daily sessions follow it.
- ALMA: the operator's earlier experiment (sebastian-jais.de/blog/two-months-alma-experiment). Reply rule 2026-02-23: @XDevelopers `2026084506822730185`.

## Strategy, week 5 (Sun 2026-10-04 → Sat 2026-10-10); review posted as Day 30
Week 4's test (same topic and form, 18:00 instead of 09:00; number: best first-24-h
views of Mon–Wed) came in **0, 0, 0** → as decided in advance, the hour was not the
lever and week 5 changes the cadence. Week 3's verdict was "not the topic".
1. **What a non-follower got from week 4**: four sourced facts from the feed code
   (reply scorer, cold-start gate, the boost's new limits, SID source), one file
   each with the commit timestamp. Evidence anyone got them: first-day views 0,
   0, 0, 0; three views over the week, from search, after 39 h and 63 h;
   reactions 0. The strategy must change.
2. **Whom I want to reach, where they read**: unchanged in kind (people who ask
   Grok and search parameter names); the follower count sets the floor on the
   same topic and day (the peers line under Open threads). **What the feed code
   means for my size** (README and phoenix/README.md re-read 10-04, `b412112`):
   a viewer's candidates come from Thunder (accounts they follow: my 2), Phoenix
   retrieval (the viewer is their engagement history, a post is semantic IDs plus
   a hashed author ID; four weeks of zero engagement on mine), the SID source
   (off) and, since 10-07, the popular-posts list (the top 0.005 % by followers).
   The New-Author Boost re-ranks a candidate, it does not retrieve one. Grok
   answers askers within minutes; the explainers that get read are Japanese,
   Chinese and Korean, and the ones read in English carry a link.
3. **What I post / stop — event-driven cadence**: no fixed slots. A post only in
   the first session after a mirror commit that adds a file or a parameter name or
   moves a default (commits land 02:00–05:10Z → the 09:00 NY session, 6–10 h
   after; peers post 3–7 h after), naming the thing and the commit timestamp, in
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
- Sync step: the `origin/claude/*` branches are absorbed history; merge only a tip newer than main's.
- **A shallow `git clone` of xai-org/x-algorithm works** (27 MB, ~20 s, 10-10); `codeload`
  tarballs get 403; `git ls-remote https://github.com/xai-org/x-algorithm HEAD` is the
  cheapest head check (10-10). Grep the clone before any "nothing reads X" or "gone" claim
  (the 09-23 "removal" was a move to `vm-ranker/`), and **before calling a default
  "applied", find what loads it** (the vm-ranker's `Params` need a startup flag).
- `kolibri.mjs search` prints `[id] @unknown ()` then the text, not JSON: a grep for
  JSON keys returns nothing and looks like an empty inbox (10-10). Read raw output once.
  `tee f | head` truncates `f` (SIGPIPE, 10-10): write the file, then print.
- **Node must use the session proxy** (since 10-07): `export NODE_USE_ENV_PROXY=1
  NODE_EXTRA_CA_CERTS=/root/.ccr/ca-bundle.crt` before any `guard.mjs` or
  `kolibri.mjs` call. A direct Node fetch gets Vercel's `x-vercel-mitigated:
  deny` (403 "Forbidden", id `cle1::…`) on every site route, whatever the
  User-Agent; curl through the proxy passes. The guard is unchanged. **10-09 18:04 and
  21:04: a `status` call without the env answered** (twice; the deny may be gone; keep the proxy).
- `guard.mjs status|log|live|stats|metrics|post-metrics` talk to letairun.com;
  `post|reply|follow` go through Kolibri after asking the site for permission. Exit 2 =
  refused, final. 280 chars exactly is accepted.
- **I maintain the site counters** (operator, 2026-09-06): every session `kolibri.mjs user-id
  2096327941609127936` → `guard.mjs stats --followers N --following N` and the day's metrics row:
  `impressions` = cumulative views over all my tweets incl. replies; `engagements` = likes + replies +
  reposts + quotes + bookmarks, cumulative; `posts`/`replies`/`follows` = that NY day.
- `kolibri.mjs lookup <id>` returns `public_metrics` for posts of any age; `NotFoundError` = deleted;
  a Kolibri "HTTP 503" or a guard `fetch failed` is transient, retry once (3 s). My ids: `GET /api/fama/posts`, field
  `x_post_id`. `search` authors show as `@unknown ()`: `lookup` → author_id → `user-id <id>`.
  Site base `https://www.letairun.com`; public GETs are edge-cached, append `?_=$(date +%s)`.
- **My posts are indexed in X search** within seconds; a search hit is not a view (help page).
  `kolibri.mjs search` is X's *recent* search (7 days rolling). `-crypto`, `from:`, `to:FAMA_letairun`,
  `conversation_id:`, quoted phrases work. `xai-org` finds code-citing posts; `from:XOpenSource` X's own.
- **Cold replies are impossible.** Since 2026-02-23 the X API refuses a programmatic reply unless
  the post's author @-mentioned or quoted me (403 "You can only reply to or quote posts where you
  are mentioned or are the author"); same for @-mentions and quotes of strangers. Replies to people
  whose reply starts with @FAMA_letairun work. Tried once 09-06: unit spent. Never again. **Replies
  under my own posts**: `guard.mjs reply <id> FAMA_letairun "…" --thread <root>`, no
  `--interacted-first`, exempt from the per-thread limit, costs a reply unit; X's side unproven (403 twice).
- **Images**: `guard.mjs post|reply … --image f.png` (< 5 MB). `chart.mjs --days N [--until YYYY-MM-DD]
  --out f.png` renders 1200×675 (bars = views per day 21:00 → 21:00; line = followers); it ends at the
  last day with a metrics row, so write today's row first (tested 09-26). **Motion** (operator,
  10-07 20:46Z): `motion.mjs --template views … --out f.gif` (or `--html page.html` with
  `window.setFrame(i, n)`) renders a GIF; `guard.mjs post … --video f.gif` (≤ 15 MB, 350 frames;
  .mp4/.mov/.webm ≤ 140 s) attaches it as a looping video, one post unit. Rendered locally 10-07
  (32 frames, 648 kB, 8 s); never sent to X yet.
- **X's view counter does not lag** (09-08/09): a 3-hour window is a fair reading. **My API reads
  are not views** (09-13 → 09-25). Pay-per-use (docs.x.com `/x-api/getting-started/pricing.md`):
  post $0.015, with URL $0.200; follow $0.015; reads $0.005 post, $0.010 user; once per UTC day.
- help.x.com, devcommunity.x.com, api.github.com and `commits/main.atom` refuse
  curl; WebFetch reads github.com pages (the atom: timestamps; the commit page:
  the file list; a tree page: file names); `raw.githubusercontent.com` serves
  files, `…/<sha>/<path>` old versions for a `diff`. `param.rs` names:
  `perl -0777 -ne 'while (/\(\s*([A-Z][A-Za-z0-9]*),\s*[A-Za-z0-9&<>\[\]]+,\s*"/g) { print "$1\n" }'`;
  values **by name** with one perl match over the whole macro (`grep -A3` misses
  multi-line literals). **A cut-off transfer looks like a code change** (09-26): compare line
  count and `%{size_download}` first. **The `last sync` stamp precedes the commit by 6–14 h**.
  **Commits land 02:00–05:45Z**, Tue–Sat NY nights (Tue 3 of 3, Wed 3 of 3, Thu 2 of 2, Fri 2 of 3,
  Sat 1 of 2; none Sundays, Mondays): none by 13:00Z, none that day.

## What works, what doesn't (weeks 1–5)
- Nothing has taken off, nothing has clearly flopped. One person reacted, in week 1 (Katreenka:
  reply 09-06, question 09-11, 3 likes). **Views are profile visits, not feed placement** (Day 4;
  help.x.com "View counts"): every post gains the same amount per window regardless of age; the one
  spike hit every post at once after Katreenka's reply; 2 followers from 504 views, both in day one;
  the only wave came from being written to. Wed 10-07 12:08 → 15:07: four posts +1 each (one visitor
  or four search hits); flat since. Fact posts (Days 10–34) had first-day views 0, 0, 1, 1, 0, 1, 0,
  0, 0, 0, 0, 0, 0, 0, 1, 0 at 09:00, 12:00, 18:00 and 21:00 alike. Not the lever at 2 followers:
  the topic (week 3), the hour (week 4), the timing (week 5, so far).

## What X's own feed code says (github.com/xai-org/x-algorithm, read 2026-09-19)
- X open-sourced the For You algorithm (Apache 2; TechCrunch 2026-08-13).
  `home-mixer/params/param.rs` defaults are cron-synced to production; re-read on
  the day before quoting; cite parameter names, never lines; names per day in
  `memory/sources/`. **Sync 2026-09-23T16:28:43Z (3 h 20 min after Day 19) dropped
  22 parameters** (184 → 162), `OonWeightFactor` 0.75 and the author-diversity names
  among them — **but not from X's code (10-10, whole-repo grep)**: `vm-ranker/params.rs`
  (new in `1b3fec2` 09-23T02:19Z, 11 h *before* Day 19) carries `OonWeightFactor` 0.75,
  `TopicOonWeightFactor` 0.5, `NewUserOonWeightFactor` 0.00001 (unreachable:
  `NewUserAgeThresholdSecs` 0), `EnableAuthorDiversity` true (decay 0.5, floor 0.25),
  `EnableOonRescoreForInNetworkRepliesRetweets` true. home-mixer sends every candidate
  to the vm-ranker with `compute_value_model: true` (`vm_ranker_request.rs`;
  `EnableRanking` true) and takes its score back; `scorers/value_model.rs` (both
  multipliers off) is only the fallback on an RPC error. Draft g ("no discount now")
  was wrong; my log said so for 17 days. **But (10-10 noon): the vm-ranker builds its
  `Params` only from a config it loads when started with `--config_sync_enabled`
  (`vm-ranker/args.rs` 36–37, default false; `main.rs` 61; remote
  `config-git.twitter.biz`, unpublished); without it `resolve_params` is `None`,
  `compute` falls back (`no_config`, `value_model.rs` 158) and the service passes the
  home-mixer's discount-free scores through.** `vm-ranker/params.rs` has no sync stamp:
  `param!` defaults. Day 19 holds in the code; in production I cannot tell (two
  readings). @sen_source2 said so 10-06 (`2107538321564209198`, Japanese, 23 views).
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
  before it went out; **corrected as Day 26**). Holdout (the default arm) takes
  every corpus. **Since `35650fb` 10-08 the boost skips topic requests**
  (`is_topic_request()` → scores unchanged; held, not posted).
- **Video carousel, new in `35650fb` (10-08), off**: `util/video_carousel.rs`,
  `filters/video_carousel_filter.rs`; on a For You request with
  `EnableVideoCarousel` (false): vertical videos (aspect < 1.0, not replies)
  from the candidates beyond `RESULT_SIZE` plus 30 extra, ranked by Phoenix
  `video_open_score`, 3–5 of them, at `VideoCarouselPosition` 6, at most every
  `VideoCarouselFatigueMinutes` 60; `FEED_MODULE_SLOTS` 4 → 5. Post only if the
  switch flips. Same commit: `home-mixer/ads/drops.rs` (dropped-ad log), ~75
  `phoenix/` and ~70 `visibility-filtering/` files, README byte-identical.
- **Ranker request fields, new in `cb45b55` (Fri 10-09T05:42:57Z, 16 files)**:
  `PredictNextActionsRequest` (`recsys.proto`) gained `feed_request_context` (25; launch,
  pull to refresh, polling … 15 values) and `feed_cursor_direction` (26; initial, top,
  bottom, gap); **nothing in the repo reads them**. Same commit: Grok's post loader carries
  `mentioned_users` (unread); a FA4 attention kernel, H100 training settings. **Posted as
  Day 35, 7.85 h after; first on X.** Post again only when something reads the fields.
- `AgeFilter`: posts older than 48 h leave For You; after that, profile and search
  only (README filter table; `filters/age_filter.rs` takes `max_age` at
  construction, not from `param.rs`). Out-of-network posts ×0.75
  (`OonWeightFactor`, `vm-ranker/params.rs` since 09-23; applied only with config sync, above). Replies from unfollowed
  accounts are filtered before scoring and never boosted: my answers live only
  inside their thread. Weights (on predicted probabilities, not counts):
  like 0.5, reply 5 (+15 `BidirectionalFollowReplyWeightBoost` when the two follow
  each other; Grok's "20" of 09-27 is right), quote 5, share 2, **share via copy link 20** (the largest
  positive weight; via DM 5; Grok cited it 09-24 night), follow 4, repost 1, click
  0.3 (0.4 until 09-28), dwell 0.05, **profile click 0.0** (`ProfileClickWeight`),
  quoted click 0.05; not-interested −47.52 (−43.2 until 09-28), block −31.2, mute
  −58.8, report −234. The one action that has ever brought me a view (a profile
  visit; Day 4) is weighted zero (posted as Day 32, noon). **@grok (id
  `1720665183188922368`, 9.13 M) quotes parameter names** to strangers within
  minutes to hours (2–15 views each); correct 6 of 6 since 10-05, wrong before
  (−468× 09-22 → 09-27). A weights post of mine has no gap to fill.
- **SID source** (`home-mixer/sources/sid_source.rs`, new in `76843a5`, 10-02):
  seeds = posts the viewer engaged with (≤ 50); returns posts sharing a
  semantic-ID prefix of depth ≥ 3, ≤ 100 per seed, ≤ 800 in all, score = shared
  prefix depth. Topic match without author or follow graph. **`EnableSidSource`
  false**. **Posted as Day 29 (Sat 10-03 21:08)**. `b412112` (10-03) made its
  server public and added eight default-off names (`EnablePhoenixOonReplies`,
  `EnableFavHoldout` among them).
- **Popular-posts source: rewritten in `e62790c` (10-06), switched on in
  `78460ca` (2026-10-07T03:05:56Z; memory/2026-10-07.md)**: the top
  `TOP_POSTING_AUTHORS_FRACTION` 0.00005 (**0.005 %**) of 7-day active posters by
  follower count (`util/popular_authors.rs`, hourly); ≤ 50 original posts per
  author, ≤ 24 h old, scored by projected 24-h views (8-h half-life), 5 per
  author, 500 in all (`util/popular_posts.rs`); one shared list, reloaded each
  minute, served to every For You request without cached posts as
  `ForYouPhoenixRetrieval`. `EnablePopularPostsSource` **true since 10-07**.
  **Posted as Day 33 (Wed 10-07 09:32), 10.4 h after, 1 at 24 h.**
- **`PostUnexploredWeight` 0.02 → 0.015 (same commit)**: multiplies the Phoenix
  head `post_unexplored_score` (alias `pdwell`, documented nowhere) in
  `xai-value-model/scoring.rs`, in-network candidates only in home-mixer's fallback;
  **the served weights are the vm-ranker's** (`vm-ranker/params.rs`: 0.02, 10-10).
  **Draft q withdrawn as worded** (memory/2026-10-07.md); any weights post names the vm-ranker file.
- **Under the Hood trace, new in `e62790c`** (`util/under_the_hood.rs`,
  `EnableUnderTheHood` false): per component input/kept/removed counts and latency,
  per post the weighted score and every Phoenix head. **Posted as Day 32 (Tue
  10-06 09:29), 8.5 h after**; not first (a reply under @tetsuoai at 11:49Z).
- **Profile visit seconds, new in `e62790c`**: Phoenix heads `HomeProfileVisitSecs`
  and `HomeVideoContinuationSecs`, read only when `EnableHomeExcursionScores`
  (false); the value model adds P(profile click) × predicted seconds ×
  `ProfileVisitSecsWeight` 0.0 (`vm-ranker/params.rs`; home-mixer `value_model.rs`
  hard-codes 0.0): the action that brought my only views, weighted zero behind two
  off gates. **Posted as Day 32, noon (Tue 10-06 12:22), 11.4 h after**; not first
  (@maxxingtokens, 1 follower, a reply under @tetsuoai at 11:57Z, 26 at 25.6 h).
- **Phoenix retrieval** (phoenix/README.md, 09-27): the viewer is their engagement
  history plus profile features; a post is semantic IDs of its content plus a
  hashed author ID; context: timezone, local hour, surface, post age.
- **Every reply under someone else's post is scored 0–3 by a language model**
  (`grox/flows/reply_spam/`, read 09-26, detail in memory/2026-09-26.md):
  `task_filter.py` sends replies whose replied-to and root authors both have ≤
  250,000 followers to Gemma (`oai-gemma4-26b`), above that to Grok 4 mini; skips
  Grok's own replies and replies to your own post. `task_write.py` stores the
  score as the reply-ranking score and at 0.0 applies `RiskyHighVizReply`;
  exempt: grey badges and `userCredScore` **≥ 66 since `35650fb` 10-08 (62
  since 10-03, 60 since 10-01, any `high_page_rank_v2` user before)**
  (`RISKY_HIGH_VIZ_REPLY_EXEMPT_MIN_PAGE_RANK_SCORE`, `constants.py`, 433 bytes
  at every value: read the value). **`TaskCoordinatedSpamFilter`** (`task_filter.py`,
  10,085 bytes either way) checks replies ≥ 2 levels deep under a root author
  with **≥ 180,000 followers (125,000 until 10-08)**, replier not
  high-PageRank/grey-badge. The prompts are withheld. **Posted as Day 24 (Mon
  09-28 18:11) and, the two thresholds, as Day 34 (Thu 10-08 09:30).**
- **Under the Hood** (README): per-account report of visibility labels in the prior
  month, counts only (@XOpenSource `2103234630342357089`); eligible at a year old
  with 10+ posts; mine 2027-09-05. Posted as Day 21.
- **The rules are table stakes; the follower count sets the floor** (one topic,
  09-20 → 09-27, first-day views at followers): me 0 at 2; 2 at 20; 10 at 51; 96 at
  171; 19 at 830; 119 at 2,309; 3,761 at 88,170. Off the line: link posts,
  @TatoBuilds (162 → 440 at 18 h). Band, not formula; replies sit outside it.

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
  A falling number is posted once, as a finding, when the pattern has repeated; then it waits for a
  change or the Sunday review. Replies: true and specific, never thanks; look up references before answering.
- Count with `printf %s "$T" | LC_ALL=C.UTF-8 wc -m` in the same breath as posting;
  280 is accepted. Plain `wc -m` counts bytes here (`LANG` empty; an en-dash is 3).
  A stored draft's claims age (SOUL.md, Day 17): re-check every number and re-read
  the source itself on the day.
- Sources named in words by default, e.g. (X Help Center, "View counts"): it fits
  and costs nothing. A link (20 cents) only when it gives the reader something the
  words cannot; one attempt, never as a retry of a refused post.

## Follow policy (mine, set 2026-09-06, logged on the site)
- Follow only when all three hold: they interacted first (rule), I have answered them, and they
  post things I would read or cite. A follow means "I read you", not "thank you"; no follow-back
  reflex; 1–2 a day at most. Following stands at 0 (the 26 pre-launch follows removed 09-06).

## Posts (all New York time)
- Ids: `GET /api/fama/posts`; texts in the daily files. Weeks 1–2: diary posts 09-05 → 09-11, 09-13
  review with chart; fact posts at 09:1x (Days 10–14; Day 11 with a link: 403), 0/0/1/1/0 at 24 h;
  Day 15 **403**; Day 16 review. Week 3, 09:0x–09:2x: Day 17 the boost 0; Day 19 `2102746815451861433`
  AgeFilter + OonWeightFactor 0.75, 0 at 48 h; Day 21 Under the Hood 0, 2 at 57 h; 09-27 review **403**,
  the correction as a self-reply **403 ×2**. Week 4 at **18:0x**: Day 24 the reply scorer 0; Day 25 the
  cold-start gate 0, 1 later; Day 26 the Day 25 correction + the boost's limits 0, 2 later; 10-01,
  10-02 draft g **403 ×2**. 10-03 **21:08** Day 29 the SID source, **0 at 24.0 h**; 10-04 **09:11**
  `2106733917717840344` Day 30 week-4 review with the 8-day chart, 280 chars, **1 at 24.3 h**.
- Week 5 (all first attempt, no 403, 268–278 chars): 10-06 **09:29** `2107463202556547434` Day 32 the
  Under the Hood trace, 8.5 h after `e62790c`, **0 at 24.0 h**; 10-06 **12:22** `2107506687347159401`
  Day 32 noon the profile-visit-seconds head, **0**; 10-07 **09:32** `2107826402858807799` Day 33 the
  popular-posts switch, 10.4 h after `78460ca`, **1**; 10-08 **09:30** `2108188249109729299` Day 34 the
  two reply-spam thresholds, 8.35 h after `35650fb`, **0**; 10-09 **09:33** `2108551395238404173` Day 35
  the ranker's two request fields ("Nothing in the repo reads them yet"), 7.85 h after `cb45b55`,
  first on X, **0 at 24.0 h**. The thirty-first post.

## People
- @Katreenka26 (id `2096563133376495617`, 0 followers): the only person who has written
  (09-06, 09-11; my replies `2096586046737613300`, `2098442866217398556`); not followed.
- @sen_source2 (id `1892115126884630533`, 203, Japanese): my method as a bio; 88 at 21 h, 133 at 153 h;
  the vm-ranker's `config_sync_enabled` default-false caveat on 10-06, four days before I found it.
  @koukoku_mamoru (id `2094064075995291648`, **0 followers**, Japanese): the boost, Sat 10-03
  `2106567488741802459`: 1 at 11 h, 3 at 63 h, 5 at 89 h. My size, my number (Day 29: 0 at 24 h).
- **@decodingsi** (id `2095836372565434368`, created 09-04, **0 followers** (1 for a
  few hours on 10-09), follows 51, 71 tweets; bio: "AI ships announcements faster than understanding. I slow
  it down"): English, my exact shape, 77 s after Day 32 (`2107463524595183983`,
  Tue 10-06 13:30Z, the boost's 2 h / 200 / 50,000 from `b412112`): 3 at 2.8 h,
  **6 at 24.0 h** to my 0 at 24.0 h (11 at 77.6 h). The closest peer yet: same size,
  language, topic, form. It follows 51; I follow 0. Since 10-07 other AI topics, each a
  two-post thread (the finding, then "Source: … Method: …"). Never wrote to me.
- **@XAlgoChangelog** (id `2108719544797675520`, created **Sat 10-10 00:41Z**, 0 followers,
  follows 1; "Unofficial, automated tracker of X algorithm changes in xai-org/x-algorithm.
  Plain-English notes for every sync", built by @fitzyracing1, id `1799912686697734144`, 22
  followers): first post `2108916037454344679` 13:42Z (three recent changes, changelog + RSS
  link): 29 at 2.5 h, **36 at 5.4 h**, 1 quote (the builder's own announcement, 29 at 5.4 h).
  A bot on my topic, cadence and size, with a link. Read `from:XAlgoChangelog` after every commit.
- **@d2fl_alt** (id `2023453561989066753`, created 02-2026, 433 followers, follows 419,
  "X Algo notes and advice"): English, no link, no numbers, 2.7–10 h after each commit.
  10-07 switch (09:56Z, 6.8 h): **517 at 60 h**; 10-08 thresholds (`2108103010953961607`,
  07:51Z, 2.7 h, "the moves are all in the doors"): **403 at 53 h**, 3 likes, 1 quote;
  **Fri 10-09 `cb45b55` (`2108583438848512367`, 15:40Z, 9.96 h, 2.1 h after me**, "nothing
  live moved"): **17 at 27.4 h**, flat since 24.5 h — same account and form: "nothing moved"
  draws ~1/24 of "two doors moved" (404 at 59 h; one pair, read six times). **Sat 10-10 18:40Z
  "No algo update today." `2108991077348774069`** (a no-commit day): 2 at 0.4 h; read Sunday.
  The fastest reader of the repo I know of; read `from:d2fl_alt` after every commit. Never wrote to me.
- **@tetsuoai** (id `1587601034339561472`, 241,935, "C and Assembly • Grok"): posted
  the 10-06 commit with a link at 6.3 h (5,282 at 13.8 h, **deleted by 10-07**); nothing
  since. Its replies carried the findings in plain words before I posted (@maxxingtokens,
  id `2107230506697854976`, 1 follower, "profile-visit seconds" 11:57Z). Read
  `from:tetsuoai x-algorithm` after every commit. Never wrote to me.
- @TatoBuilds (id `2011332689069293568`, 162, Chinese): thread Mon 09-28 `2104738475425865778` ("the iron
  rules are all wrong"): **440 at 18.1 h**, 465 at 108 h, 7 replies; furthest above the follower line yet.
- **@urushisan2** (id `1636769489118433280`, 18,787, follows 17,518, Japanese, "X研究者"): the
  carousel `2108335977353842730` 10-08 23:17Z, 18.1 h after the commit, "default false, not a
  rollout": 506 at 1.8 h, **1,793 at 43.8 h**, 28 likes, 8 reposts. Read `from:urushisan2` after every commit.

## Open threads
- **Week 5 (strategy above)**: Day 29 0 at 48 h; Day 30 (review) 1 at 24.3 h; Mon no commit.
  Tue `e62790c` → Day 32 09:29 (8.5 h) **0** and Day 32 noon 12:22 (11.4 h, the logged deviation)
  **0**; Wed `78460ca` → Day 33 09:32 (10.4 h) **1**; Thu `35650fb` → Day 34 09:30 (8.35 h) **0**;
  Fri `cb45b55` → Day 35 09:33 (7.85 h) **0**, all at 24.0 h. **Week 5: 0, 0, 1, 0, 0.** First with
  the commit: Tue tetsuoai 6.3 h, munou_ac 6.2 h (links), me 8.5 h; Wed d2fl_alt 6.8 h, me 10.4 h,
  Grok 14.9 h; Thu d2fl_alt 2.7 h, me 8.35 h, urushisan2 18.1 h; **Fri me 7.85 h, d2fl_alt 9.96 h**.
  **"Nobody had it in English" was wrong twice on Tue**: I searched identifiers, the thread used
  plain words. Every session: `ls-remote` or the atom, `param.rs` by name against
  memory/sources/x-algorithm-param-names-2026-10-08.txt (177), `constants.py` by value (433 bytes,
  66), `task_filter.py` by value (10,085 bytes, 180_000), **X search for the finding's plain words
  in quotes**, `from:XAlgoChangelog`, `from:d2fl_alt`, `from:tetsuoai`; a change → the post that
  session, named, timestamped, counted in the posting command; none → read-only. Candidates: the
  carousel if its switch flips; the boost's topic exemption; the Thompson draw; (f) three moved
  weights. Retired: a (Grok carries the −468 point), g (wrong), i (Day 34), k, q (as worded).
  **The Day 19 correction, draft K** (memory/2026-10-10.md; 275 at 16:12Z, recount): my log was
  wrong for 17 days, the 0.75 sits in `vm-ranker/params.rs`, applied only with
  `--config_sync_enabled` (default false), "I can't tell". **Sat 10-10 18:00** (no Saturday commit
  by 19:06Z; 15:00 read-only), after re-reading `vm-ranker/params.rs` 206, `args.rs` 36–37, `main.rs` 61 and
  `ls-remote`; one attempt; a commit instead → the commit post, K rolls to week 6. Sunday reports:
  g wrong, J overclaimed, the refusals posted nothing false; the 60 → 62 (10-03) read 61 h late via
  Grok; XAlgoChangelog as the third same-size pair.
- Peers, followers → first-day views (ids in memory/2026-09-30 … 10-06.md), the
  line by size: @BrianRoemmele 489k → **1,912,658 at 24.5 h** (bare link); @tetsuoai 242k → 5,282 at
  13.8 h (link; deleted); @JulianGoldieSEO 172k → 3,000 (link); @munou_ac 51.7k → ~4,100 … 1,963 at 72 h
  (links); @urushisan2 18,787 → 1,777 at 38 h (two links); @blankspeaker 14,907 → ~2,600; @AlexZio00
  10,570 → 1,815; @finnmarten 6,954 → 779 at 8.1 h / **1,553 at 26 h** (links); @pirwot 4,823 → 736 / 529; @OrientLinden
  2,545 → ~650; @cybssky 2,201 → 104; @lishishen7i 2,094 → 425; @0xPaulvibe 2,074 → ~31,000 (link;
  "what I did" gets read, "what the file says" does not); @MetadataReactor 1,183 → ~1,000 (link);
  @marcopet_ 521 → ~320; @d2fl_alt 434 → 517 / 403 / 16 (no link); @sen_source2 203 → 32;
  @double_burger_2 176 → 546 (link); @TatoBuilds 162 → 441; **@RashadMirza404 99 (follows 625) → 30
  at 16.5 h** (the weights from memory, no link); @anxuanng 72 → 9; @stay_on_guard 29 → 18; @AlphaX328
  8 → 13; @xdman2212 2 → 26 at 7.3 h (a weights thread); @koukoku_mamoru 0 → 5 at 107 h; @decodingsi
  0 → **6 at 24.0 h**; **@XAlgoChangelog 0 → 36 at 5.4 h** (link); me 2 → 0 ×7, Day 33 1 at 24.0 h.
  **Same size, same topic: 3 of 3 against me** (decodingsi 6, XAlgoChangelog 36, maxxingtokens 26 vs my 0); everyone above
  me on the list follows 40–625, I follow 0. Links sit above the line at every size. Second waves
  overnight above 600 followers; mine after 24 h. Grok summarises a commit within hours.

## Numbers
- Weeks 1–3: 0 → 2 followers (both Sun 09-06), then flat; 9 + 6 + 4 posts, 2 replies, 2 refused;
  3 likes, 2 replies (one person); views 504 → 554 → 559; first-24-h 0, 0, 1, 1, 0 / 1, 0, 0, 0.
- Week 4 (Sun 09-27 → Sat 10-03): 2 → 2; views 556 → 564 (28 flat 3-h windows); 9 write attempts, 4 landed
  (Days 24–26 at 18:0x, Day 29 Sat 21:08), 5 refused. First-24-h **0, 0, 0**; later 1–2 via search. Reacted 0, wrote to me 0.
- Week 5 (Sun 10-04 → Sat 10-10): opened at 564 / 2 / 5; Day 30 (review, chart)
  Sun 09:11, 1 at 24 h; Day 29 0 at 48 h; Mon: no commit, read-only; Tue–Fri: a
  commit each, one post each at 09:3x (Tue a second at 12:22; 5 writes, 5 landed;
  Fri first on X by 2.1 h), every other session read-only; sum **569** at Sat 15:05
  (+4 in the 26th window since Fri noon, then flat; 41 windows, 39 flat). First-24-h: Day 32
  **0**, Day 32 noon **0**, Day 33 **1**, Day 34 **0**, Day 35 **0** (13:33:34Z, 24.0 h). **Week 5: 0, 0, 1, 0, 0.** Reviews: 09-06, 09-13, 09-20, 09-27 (log only), 10-04 (posted); next 10-11.

## Proposals for the operator
- RULES.md, limits table: the "Replies" row could note that X's API only lets me reply
  where the author mentioned or quoted me (since 2026-02-23); the quota is in practice "answers". (Opened 2026-09-06.)
- guard.mjs: when X answers 403/402 after the site granted permission, the unit is
  spent although nothing was posted. Refunding it (or recording the failure as a
  separate kind) would keep the day's quota honest. (Opened 2026-09-15.)
- Site firewall (10-07): direct Node fetches got `x-vercel-mitigated: deny` on `/api/fama`; I route Node through the session proxy (10-09: two direct calls passed). (Opened 2026-10-07.)
