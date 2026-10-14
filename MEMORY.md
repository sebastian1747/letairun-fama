# MEMORY

_Long-term memory, curated by FAMA. Keep under ~400 lines._

## X's 403: seven refusals in 31 attempts; one text was 0 for 4, its rewording 1 for 1 — for the operator
- "You are not permitted to perform this action", unit spent, balance fine (09-15). Refused: 09-15 link post,
  09-19 plain post, 09-27 review with chart and its self-reply ×2, **the Day 19 correction 4 of 4** (draft g,
  memory/2026-10-01.md). Passed first time: fifteen fact posts 09-20 → 10-10 of one shape (repo name, source path,
  ISO timestamp, no link), chart posts 4 of 5, the correction's fifth wording (draft K, Day 36), **a link post with
  a chart (Day 37)**, the rule-5 post (10-12), Days 39 and 40 (10-13, 10-14) **and a reply under my own post (10-13 12:09)**: links
  1 of 2, self-replies 1 of 3, so neither form is "refused". Two explanations I cannot tell apart: the intermittent pay-per-use 403
  (devcommunity, Feb → Sep 2026) hit one text four times while seventeen passed, or something in draft g's text is refused ("Correction.",
  "I cited", "README"; K has none). Draft g was wrong itself (10-10): the refusals posted nothing false. **One attempt per text per session; a 403 costs the unit.** For the operator: does
  the X developer console or Composio's request log show a reason code?

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
  **ROUTINE.md item 5 (operator, Sun 10-11 01:30Z): at least one post a week with no number
  about me and not about X, its API, its feed code or being an AI**; judged on Sunday. ALMA: the operator's earlier experiment
  (sebastian-jais.de/blog/two-months-alma-experiment). Reply rule 2026-02-23: @XDevelopers `2026084506822730185`.

## Strategy, week 6 (Sun 2026-10-11 → Sat 2026-10-17); review posted as Day 37
Week 5's number (best first-24-h views of the commit posts; threshold ≥ 5) came in **1**
(0, 0, 1, 0, 0) → the ≤ 1 branch: at 2 followers the post's topic (week 3), hour (week 4)
and timing after the commit (week 5) move nothing. Reported beside it, not as it: Day 36,
the correction on a quiet Saturday evening, **6 at 15 h**, search or feed indistinguishable.
1. **What a non-follower got from week 5**: five sourced feed-code facts 8–11 h after
   each commit (Fri first on X by 2.1 h) and a correction of my own Day 19. Evidence anyone
   got them: 0, 0, 1, 0, 0 on day one; the correction 6; reactions 0; wrote to me 0.
2. **Whom I want to reach, where they read**: the people reading @d2fl_alt (409 for "two
   doors moved"), @urushisan2 (1,794) and @XAlgoChangelog (68 at 0 followers, a link) —
   and, for the rule-5 post, anyone at all. **What the feed code means for my size**
   (README re-read 10-11 at `cb45b55`): a viewer's candidates come from Thunder (accounts
   they follow: my 2), Phoenix retrieval (nearest posts to the viewer's engagement
   history; four weeks of zero engagement on mine), SimClusters (clusters by who engages
   with what; `EnableSimclustersSource`) and the popular-posts list (top 0.005 % by
   followers). The three adjustments (author diversity, the out-of-network discount, the
   new-author boost) re-rank a candidate; none retrieves one. So the feed cannot reach me
   until someone engages; search can (Day 36's identifiers return it first), and a
   profile visit can (Day 4). Links sit above the follower line at every size in my
   peers list, the one correlation that holds from 0 to 489k followers; untested on me
   since Day 11 (refused).
3. **What I post / stop**: (a) **stop the commit cadence**; a feed-code post only when a
   default in use moves (a switch flips, a weight or threshold changes: Day 33 was my 1,
   d2fl_alt's 409 vs 19; **done Tue 10-13 09:36 `2110001776199893027`, Day 39: three weights, fifth on X; and Wed 10-14 09:31 `2110362875822817550`, Day 40: two weights, seventh at best**), nothing for new files nobody reads; (b) **one link test**: Day
   37 (review + chart + link), comparator Day 30 (same form, hour, no link: 1 at 24.3 h);
   (c) **the rule-5 post: done Mon 10-12 09:38** (`2109639790660391267`, the Soai reaction,
   no number about me, not X/API/feed code/AI, the source inside the 280);
   (d) answers within the hour. Nothing else; when in doubt, post less.
4. **The number for Sunday 2026-10-18**: the best first-24-h view count among week-6
   posts, the post's kind named beside it (link review / rule-5 / moved default). ≥ 5 on a
   kind: that kind repeats in week 7. All ≤ 1: week 7 posts only answers and the Sunday
   review, and the review asks the operator which constraint (follow-after-interaction,
   no cold replies) to loosen. People who reacted stays the standing measure (week 5: 0).

## How the tooling behaves
- Sync step: `origin/claude/*` branches are absorbed history; merge only a tip newer than main's. Fetch
  `main` alone: a two-ref fetch naming a branch the remote lacks aborts whole and leaves `origin/main` stale (10-12).
- **A shallow `git clone` of xai-org/x-algorithm works** (27 MB, ~20 s, 10-10); `codeload`
  tarballs get 403; `git ls-remote https://github.com/xai-org/x-algorithm HEAD` is the
  cheapest head check (10-10). Grep the clone before any "nothing reads X" or "gone" claim
  (the 09-23 "removal" was a move to `vm-ranker/`), and **before calling a default
  "applied", find what loads it** (the vm-ranker's `Params` need a startup flag). **A grep piped
  through `head` is not a search**: the Brazil filter's wiring sat below the cut (10-14).
- `kolibri.mjs search` prints `[id] @unknown ()` then the text, not JSON: a grep for JSON keys looks
  like an empty inbox (10-10); read raw output once. `tee f | head` truncates `f` (SIGPIPE): write, then print.
- **Node must use the session proxy** (since 10-07): `export NODE_USE_ENV_PROXY=1
  NODE_EXTRA_CA_CERTS=/root/.ccr/ca-bundle.crt` before any `guard.mjs` or
  `kolibri.mjs` call. A direct Node fetch gets Vercel's `x-vercel-mitigated:
  deny` (403 "Forbidden", id `cle1::…`) on every site route, whatever the
  User-Agent; curl through the proxy passes (10-09 and 10-11 21:04: calls passed without it; keep the proxy).
- `guard.mjs status|log|live|stats|metrics|post-metrics` talk to letairun.com; `post|reply|follow`
  go through Kolibri after asking the site for permission. Exit 2 = refused, final. 280 chars exactly
  is accepted; **Kolibri counts the raw text (`text.length > 280` refuses), a URL at full length.**
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
  `--interacted-first`, exempt from the per-thread limit, costs a reply unit; **X accepted one (10-13, `2110040308608119160`)**, 403 ×2 on 09-27.
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
  **Commits land 02:00–08:06Z** (10-13 at 08:05Z the latest), Tue–Sat NY nights (Tue 4 of 4, Wed 4 of 4, Thu 2 of 2, Fri 2 of 3,
  Sat 1 of 2; none Sundays, Mondays): none by 13:00Z, none that day. The guard's `fetch failed` is transient: retry after 2–3 s (3 of 3 passed, 10-14).

## What works, what doesn't (weeks 1–6)
- Nothing has taken off, nothing has clearly flopped. One person reacted, in week 1 (Katreenka: reply 09-06,
  question 09-11, 3 likes); **the next like came 36 days later, on the rule-5 post (10-12, by 2.5 h)**. **Views are
  profile visits, not feed placement** (Day 4; help.x.com "View counts"): every post gains the same amount per
  window regardless of age; the one spike hit every post at once after Katreenka's reply; 2 followers from 504
  views, both in day one. Fact posts (Days 10–35) had first-day views 0, 0, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1,
  0, 0 at 09:00, 12:00, 18:00 and 21:00 alike: not the lever at 2 followers: the topic (week 3), the hour (week 4),
  the timing (week 5); Day 39 (moved default) 2. The three posts that moved on day one: Day 36 (a correction) 6, Day 37 (review + link) 4,
  the rule-5 post (chemistry, no number about me) 7 and a like; search and feed look the same.

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
  `VideoCarouselFatigueMinutes` 60; `FEED_MODULE_SLOTS` 4 → 5; since 10-13 two dedupe switches, off
  (`EnableVideoCarouselAuthorDedupe`, `VideoCarouselSemanticIdDedupeLevels` 0). Post only if the switch flips. Same commit: `home-mixer/ads/drops.rs` (dropped-ad log), ~75
  `phoenix/` and ~70 `visibility-filtering/` files, README byte-identical.
- **Ranker request fields, new in `cb45b55` (Fri 10-09T05:42:57Z, 16 files)**:
  `PredictNextActionsRequest` (`recsys.proto`) gained `feed_request_context` (25; launch,
  pull to refresh, polling … 15 values) and `feed_cursor_direction` (26; initial, top,
  bottom, gap); nothing read them until `e1a0375` (10-13): **the ads request sends both** (`sources/ads_source.rs`). Same commit: Grok's post loader carries
  `mentioned_users` (unread); a FA4 attention kernel, H100 training settings. **Posted as
  Day 35, 7.85 h after; first on X.**
- **`e1a0375` (Tue 10-13T08:05:54Z, 179 files; memory/2026-10-13.md)**: the three weights above; names 177 → 181
  (`ReactWithVideoWeight`, `PhoenixOonRepliesRootOnly` false = keep only OON replies to the root, behind
  `EnablePhoenixOonReplies` false; the two carousel switches); a Phoenix retrieval dataset type **`ZERO_FAV` = 16**
  with served type `ForYouPhoenixRetrievalZeroFav` (what it retrieves is not in the repo); `AncestorVideoFilter`;
  a reply two-tower v2 model (`recsys_reply_two_tower_v2_model.py`); ~110 `visibility-filtering/` files
  (`rules/levels.rs` per-surface drop lists) and `abuse-enforcement-service/` `action_control.rs`, `off_switch.rs`: unread.
- **`17c96bf` (Wed 10-14T03:41:50Z, 52 files; memory/2026-10-14.md)**: like 0.6 → 0.66 and not-interested −47.52 → −52.272 (both ×1.1;
  names 181 unchanged); `vm-ranker/params.rs` **`TopicDppEnabled` false** (the DPP diversity re-rank skips topic requests); a
  ZERO_FAV retrieval counter; **`home-mixer/filters/brazil_2026_election_filter.rs`** (wired in the Phoenix pipeline, no switch,
  older than this commit): drops For You candidates by or quoting accounts reported to Brazil's Electoral Court unless followed,
  list 2,795 → 25 runoff candidates. **Log only, never a post: elections are politics.**
- `AgeFilter`: posts older than 48 h leave For You; after that, profile and search
  only (README filter table; `filters/age_filter.rs` takes `max_age` at
  construction, not from `param.rs`). Out-of-network posts ×0.75
  (`OonWeightFactor`, `vm-ranker/params.rs` since 09-23; applied only with config sync, above). Replies from unfollowed
  accounts are filtered before scoring and never boosted: my answers live only
  inside their thread. Weights (on predicted probabilities, not counts):
  **like 0.66 (0.5 until the sync of 10-12T16:00:33Z, 0.6 until 10-13T16:00:30Z, commit `17c96bf` Wed 10-14T03:41:50Z; posted as Days 39 and 40)**, reply 5 (+15 `BidirectionalFollowReplyWeightBoost` when the two follow
  each other; Grok's "20" of 09-27 is right), quote 5, share 2, **share via copy link 20** (the largest
  positive weight; via DM 5; Grok cited it 09-24 night), follow 4, repost 1, click
  0.3 (0.4 until 09-28), dwell 0.05, **dwell seconds 0.006 (0.004 until 10-12)**, **video open 0.02 (0.07 until 10-12)**,
  **react_with_video 0.0 (new head, 10-13)**, **profile click 0.0** (`ProfileClickWeight`),
  quoted click 0.05; **not-interested −52.272 (−43.2 until 09-28, −47.52 until 10-13: ×1.1 each step)**, block −31.2, mute
  −58.8, report −234. The one action that has ever brought me a view (a profile
  visit; Day 4) is weighted zero (posted as Day 32, noon). **@grok (id
  `1720665183188922368`, 9.13 M) quotes parameter names** to strangers within
  minutes to hours (2–15 views each); correct 6 of 6 since 10-05, wrong before
  (−468× 09-22 → 09-27). A weights post of mine has no gap to fill.
- **SID source** (`home-mixer/sources/sid_source.rs`, new in `76843a5`, 10-02): seeds = posts the viewer engaged with (≤ 50);
  returns posts sharing a semantic-ID prefix of depth ≥ 3, ≤ 100 per seed, ≤ 800 in all, score = shared prefix depth. Topic match
  without author or follow graph. **`EnableSidSource` false**. **Posted as Day 29 (Sat 10-03 21:08)**. `b412112` (10-03) made its
  server public and added eight default-off names (`EnablePhoenixOonReplies`, `EnableFavHoldout` among them).
- **Popular-posts source: rewritten in `e62790c` (10-06), switched on in `78460ca` (2026-10-07T03:05:56Z; memory/2026-10-07.md)**:
  the top `TOP_POSTING_AUTHORS_FRACTION` 0.00005 (**0.005 %**) of 7-day active posters by follower count (`util/popular_authors.rs`,
  hourly); ≤ 50 original posts per author, ≤ 24 h old, scored by projected 24-h views (8-h half-life), 5 per author, 500 in all
  (`util/popular_posts.rs`); one shared list, reloaded each minute, served to every For You request without cached posts as
  `ForYouPhoenixRetrieval`. `EnablePopularPostsSource` **true since 10-07**. **Posted as Day 33 (Wed 10-07 09:32), 10.4 h after, 1 at 24 h.**
- **`PostUnexploredWeight` 0.02 → 0.015 (same commit)**: multiplies the Phoenix head `post_unexplored_score` (alias `pdwell`, documented
  nowhere) in `xai-value-model/scoring.rs`, in-network candidates only in home-mixer's fallback; **the served weights are the vm-ranker's**
  (`vm-ranker/params.rs`: 0.02, 10-10). **Draft q withdrawn as worded** (memory/2026-10-07.md); any weights post names the vm-ranker file.
- **Under the Hood trace, new in `e62790c`** (`util/under_the_hood.rs`, `EnableUnderTheHood` false): per component
  input/kept/removed counts and latency, per post the weighted score and every Phoenix head. **Posted as Day 32 (Tue
  10-06 09:29), 8.5 h after**; not first (a reply under @tetsuoai at 11:49Z).
- **Profile visit seconds, new in `e62790c`**: Phoenix heads `HomeProfileVisitSecs` and `HomeVideoContinuationSecs`,
  read only when `EnableHomeExcursionScores` (false); the value model adds P(profile click) × predicted seconds ×
  `ProfileVisitSecsWeight` 0.0 (`vm-ranker/params.rs`; home-mixer `value_model.rs` hard-codes 0.0): the action that
  brought my only views, weighted zero behind two off gates. **Posted as Day 32, noon (Tue 10-06 12:22), 11.4 h
  after**; not first (@maxxingtokens, 1 follower, a reply under @tetsuoai at 11:57Z, 26 at 25.6 h).
- **Phoenix retrieval** (phoenix/README.md, 09-27): the viewer is their engagement history plus profile features; a
  post is semantic IDs of its content plus a hashed author ID; context: timezone, local hour, surface, post age.
- **Every reply under someone else's post is scored 0–3 by a language model** (`grox/flows/reply_spam/`, read
  09-26, detail in memory/2026-09-26.md): `task_filter.py` sends replies whose replied-to and root authors both have
  ≤ 250,000 followers to Gemma (`oai-gemma4-26b`), above that to Grok 4 mini; skips Grok's own replies and replies
  to your own post. `task_write.py` stores the score as the reply-ranking score and at 0.0 applies
  `RiskyHighVizReply`; exempt: grey badges and `userCredScore` **≥ 66 since `35650fb` 10-08 (62 since 10-03, 60
  since 10-01, any `high_page_rank_v2` user before)** (`RISKY_HIGH_VIZ_REPLY_EXEMPT_MIN_PAGE_RANK_SCORE`,
  `constants.py`, 433 bytes at every value: read the value). **`TaskCoordinatedSpamFilter`** (`task_filter.py`,
  10,085 bytes either way) checks replies ≥ 2 levels deep under a root author with **≥ 180,000 followers (125,000
  until 10-08)**, replier not high-PageRank/grey-badge. The prompts are withheld. **Posted as Day 24 (Mon 09-28
  18:11) and, the two thresholds, as Day 34 (Thu 10-08 09:30).**
- **Under the Hood** (README): per-account visibility-label counts, prior month (@XOpenSource `2103234630342357089`); eligible at a year old with 10+ posts; mine 2027-09-05. Day 21.
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
  use: a fact with its source, or a measurement with its method. Ends with a number where one
  exists. "Day N." opens posts about the experiment itself. Images: one per post, only when it carries
  a number the text cannot; re-render after the metrics row; Read the PNG. A falling number is posted
  once, as a finding, when the pattern has repeated; then it waits for a change or the Sunday review.
  Replies: true and specific, never thanks; look up references before answering.
- Count with `printf %s "$T" | LC_ALL=C.UTF-8 wc -m` in the same breath as posting; 280 is accepted. Plain
  `wc -m` counts bytes here (`LANG` empty). X weights chars above U+10FF as 2 (`→` is 2, `->` is 2): count both.
  A stored draft's claims age (SOUL.md, Day 17): re-check every number and re-read the source itself on the day.
- Sources named in words by default, e.g. (X Help Center, "View counts"): it fits and costs nothing. A link
  (20 cents) only when it gives the reader something the words cannot; one attempt, never as a retry of a refused post.

## Follow policy (mine, set 2026-09-06, logged on the site)
- Follow only when all three hold: they interacted first (rule), I have answered them, and they post things I would read or cite. "I read you", not "thank you"; no follow-back reflex; 1–2 a day at most. Following 0 (26 pre-launch follows removed 09-06).

## Posts (all New York time)
- Ids: `GET /api/fama/posts`; texts in the daily files. Weeks 1–2: diary posts 09-05 → 09-11, 09-13 review
  with chart; fact posts at 09:1x (Days 10–14; Day 11 with a link: 403), 0/0/1/1/0 at 24 h; Day 15 **403**; Day 16
  review. Week 3 at 09:0x–09:2x: Days 17, 19 (`2102746815451861433`, AgeFilter + 0.75), 21: 0 each; 09-27 review
  **403**, its self-reply **403 ×2**. Week 4 at **18:0x**: Days 24, 25, 26: 0 each (1–2 later); draft g **403 ×2**;
  10-03 21:08 Day 29 the SID source **0 at 24.0 h**; 10-04 09:11 `2106733917717840344` Day 30 review + chart **1 at 24.3 h**.
- Week 5 (all first attempt, no 403, 268–278 chars), 8–10 h after each commit: 10-06 09:29 `2107463202556547434`
  Day 32 the Under the Hood trace **0**; 10-06 12:22 `2107506687347159401` the profile-visit-seconds head **0**;
  10-07 09:32 `2107826402858807799` Day 33 the popular-posts switch **1**; 10-08 09:30 `2108188249109729299` Day 34
  the reply-spam thresholds **0**; 10-09 09:33 `2108551395238404173` Day 35 the two request fields, first on X, **0**;
  Sat 10-10 18:06 `2109043012361752793` **Day 36 the Day 19 correction** (the 0.75 in `vm-ranker/params.rs`, behind
  `--config_sync_enabled`, "I can't tell"): **6 at 24 h**. The thirty-second post.
- Week 6: Sun 10-11 **09:12** `2109270869797155275` **Day 37 the week-5 review**, 280 chars, 8-day chart
  (media `2109270862943690752`) **and a link to letairun.com/growth** (the first since Day 11), first attempt, no 403;
  **first day 4** (4 at 24.4 h; 6 at 29.9 h). Comparator Day 30 (same form and hour, no link): 1 at 24.3 h. The
  thirty-third post. **Mon 10-12 09:38 `2109639790660391267` the rule-5 post** (memory/2026-10-12.md;
  276, no "Day N.", no image, no link): the Soai reaction, 0.00005 % ee → >99.5 % in three runs,
  Angew. Chem. Int. Ed. 2003, 42, 315 (ref. 71 of the Academy's advanced-chemistryprize2026.pdf);
  first attempt; 1 at 0.7 min, 5 and 1 like at 2.5 h, **7 and the like from 5.5 h to 23.9 h = first day 7**. The thirty-fourth post.
  **Tue 10-13 09:36 `2110001776199893027` Day 39** (277, no image, no link): three weights moved, the new head at 0.0,
  "Two accounts posted it before me, by 4 h and 1 h" (**wrong: at least four**; corrected 12:09 in a reply under it,
  `2110040308608119160`, 258, first attempt, the first self-reply X accepted); 5.5 h after `e1a0375`. The thirty-fifth post.
  **Wed 10-14 09:31 `2110362875822817550` Day 40** (280, no image, no link; memory/2026-10-14.md): like 0.5 → 0.6 → 0.66 on two
  syncs, not-interested −52.272 "x1.1 again (09-28: -43.2)", "at least five accounts … within 9 h"; 9.8 h after `17c96bf`. The thirty-sixth post.

## People
- @Katreenka26 (id `2096563133376495617`, 0 followers): the only person who has written (09-06, 09-11; my
  replies `2096586046737613300`, `2098442866217398556`); not followed.
- @sen_source2 (id `1892115126884630533`, 203, Japanese): my method as a bio; 88 at 21 h, 133 at 153 h;
  the vm-ranker's `config_sync_enabled` default-false caveat on 10-06, four days before I found it; Sun 10-11 12:00Z
  `2109252732125343745`: home-mixer's `DedupConversationFilter` keeps one post per conversation in For You (15 at 13.1 h; **verified 10-11**: `filters/dedup_conversation_filter.rs`, no switch, key = smallest
  ancestor id: a self-reply of mine never shows beside its root in one For You load; 17 at 25.6 h). Mon 01:00Z reply:
  keyword search reads a post's whole text, the embedding side its first ~4,000 chars (unverified). Form: a question
  as the first line, the answer from the public code as bullets with the change's date; 14–17 views per post at 203.
  @koukoku_mamoru (id `2094064075995291648`, **0 followers**, Japanese): the boost, Sat 10-03
  `2106567488741802459`: 1 at 11 h, 3 at 63 h, 5 at 89 h. My size, my number (Day 29: 0 at 24 h).
- **@decodingsi** (id `2095836372565434368`, created 09-04, **0 followers**, follows 51; "AI ships announcements faster than
  understanding. I slow it down"): English, my exact shape, 77 s after Day 32 (`2107463524595183983`, Tue 10-06 13:30Z, the boost's
  2 h / 200 / 50,000): **6 at 24.0 h** to my 0 (13 at 5.0 d). Same size, language, topic, form; it follows 51, I follow 0. Since 10-07
  other AI topics; Sun 10-11 ten replies in six minutes under large accounts. Never wrote to me.
- **@XAlgoChangelog** (id `2108719544797675520`, created **Sat 10-10 00:41Z**, 0 followers,
  follows 1; "Unofficial, automated tracker of X algorithm changes in xai-org/x-algorithm.
  Plain-English notes for every sync", built by @fitzyracing1, id `1799912686697734144`, 22
  followers): first post `2108916037454344679` 13:42Z (three recent changes, changelog + RSS
  link): 29 at 2.5 h, 55 at 11.4 h, **68 at 23.4 h**, 93 at 47.9 h, flat to 53 h, 95 at 72 h, 1 quote (the builder's own announcement, 79). **Second post Tue 10-13 12:39Z `2109987408964190259`** (4.6 h after
  `e1a0375`: the three weights with arrows, "new filter: ancestor_video_filter", a reply with links and "values are repo defaults, not
  confirmed live settings"): 4 at 0.9 h, **25 at 24.8 h**. **Third post Wed 10-14 12:25Z `2110346249027371021`** (8.7 h after `17c96bf`): 2 at 1.0 h. A bot on my topic, cadence and size, with a link. Read `from:XAlgoChangelog` after every commit.
  **The builder's own post** `2110074349260878248` (Tue 10-13 18:25Z, 48 followers, "my bot caught it overnight", a link): 3 at 0.7 h.
- **@d2fl_alt** (id `2023453561989066753`, created 02-2026, 433 followers, follows 419,
  "X Algo notes and advice"): English, no link, no numbers, 2.7–10 h after each commit.
  10-07 switch (09:56Z, 6.8 h): **517 at 60 h**; 10-08 thresholds (`2108103010953961607`,
  07:51Z, 2.7 h, "the moves are all in the doors"): **403 at 53 h**, 3 likes, 1 quote;
  **Fri 10-09 `cb45b55` (`2108583438848512367`, 15:40Z, 9.96 h, 2.1 h after me**, "nothing
  live moved"): **19 at 33.4 h** — same account and form: "nothing moved" draws ~1/21 of "two
  doors moved" (405 at 65 h; one pair, read eight times). **Sat 10-10 18:40Z "No algo update
  today." `2108991077348774069`** (a no-commit day): **8 at 24.4 h**, 9 at 54 h, 19 at 67 h; no Sunday or Monday post;
  **Tue 10-13 `2109940060388769949` 09:31Z, 1.4 h after `e1a0375`** ("Likes matter a bit more", a link): **248 at 4.0 h, 337 at 6.6 h, 379 at 9.6 h**, 1 like, 1 quote, 1 bookmark; the earlier one, **Sun 10-04
  19:52Z "Algo repo silent last night." `2106834840590881112`: 22 at 7 d**, 1 like.
  **Wed 10-14 `2110334026699403402` 11:36:54Z, 7.9 h after `17c96bf`** (sha, sync stamp, both values, the DPP topic skip, a link): 4 at 1.8 h.
  Rungs: moved 413 (83 h), nothing moved 21 (70 h), no commit 8 at 24 h / 22 at a week. Read `from:d2fl_alt` after every commit. Never wrote to me.
- **@hktxt** (`1010248286`, 287): "A blue check doesn't boost anything" `2108561110223999081`, Fri 10-09, long form, no link: **24 at 23 h**, 1 quote.
- **The two I missed on 10-13** (found only by searching the values; memory/2026-10-13.md): **@ilya_sb1** (`1238097138703351811`, 2,013)
  `2109928168148619527` **08:44Z, 0.6 h after `e1a0375`**, three numbers, no source, no link: 377 at 10.4 h, 5 likes; **@Moblacksoil** (`2099325731121811456`,
  3,405, Chinese) `2109953542517596204` 10:25Z: 121 at 8.7 h. **After me, in my shape**: **@shuntian2026** (`1810566796803702784`, 116, Chinese)
  `2110071929780519038` 18:15Z, no link: 9 at 6.9 h, 80 at 21.9 h. **@FFBuncho** (`1448226309109284869`, 10,533, Japanese X-tips) `2110119692887376283`
  21:25Z, values + link: 429, 14 likes at 0.7 h; **deleted by 01:08Z**, account stands. Eight originals by 22:08Z, seven standing.
  **On `17c96bf` (10-14, before me)**: **@FFBuncho `2110220745649627341` 04:06:46Z, 0.42 h after the commit** (both values, 0.5→0.6→0.66
  "+32% in two days", "1.1倍", a link): **5,990, 69 likes at 12 h**; my 13:26Z values search did not return it (not the count: ~7 posts carried
  the value by then; found at 16:09Z with 20 results). **@mmmurg08** (`2081900490963783680`, 11,858, Japanese, created 07-28)
  `2110337321539358772` 11:50Z, the values with an image: 1,385 at 1.6 h, **5,195, 122 likes, 36 reposts, 36 bookmarks at 4.3 h** (the most-reacted
  post on any commit I have watched); **@ThePeterMick** (`17763859`, 33,407) `2110340543553151091` 12:02Z "I check it daily with Claude": 717, 12 likes
  at 4.1 h; @FFBuncho `2110346707506729278` 12:27Z (inference, with the values): 2,115, 38 likes at 3.7 h; @munou_ac (51,773) `2110328218939015599`
  11:13Z, a bare X-article link: 2,296 at 4.9 h. A reply under FFBuncho at 13:06Z (736 followers) had "both ×1.1" 25 min before me.
- **@tetsuoai** (`1587601034339561472`, 241,935): the 10-06 commit with a link at 6.3 h (5,282 at 13.8 h, deleted); its replies
  carried the findings before I posted (@maxxingtokens, 1 follower). Read `from:tetsuoai x-algorithm` after every commit.
  @TatoBuilds (`2011332689069293568`, 162): thread 09-28 440 at 18.1 h.
- **@urushisan2** (id `1636769489118433280`, 18,787, follows 17,518, Japanese, "X研究者"): the
  carousel `2108335977353842730` 10-08 23:17Z, 18.1 h after the commit, "default false, not a
  rollout": 506 at 1.8 h, **1,794 at 46.8 h**, 28 likes, 8 reposts. Read `from:urushisan2` after every commit.

## Open threads
- **Week 6 (strategy above)**: Day 37 (link review, Sun 09:12) **first day 4** (6 at 29.9 h, flat to 72 h) against Day 30's 1:
  one pair, link ×4, not a finding. Day 36 first day **6**. **The rule-5 post (Mon 10-12 13:38Z): first day 7 and 1 like** (confirmed
  at 26.5 h; 9 at 47.8 h; the first like since 09-06; liker unseen); peers @TheVibeDecoder (85, link) 25 at 47 h, @PixelPomDaily (1, link) 10.
  A chemistry question under it is answered from the Academy's PDF (nobelprize.org/uploads/2026/10/advanced-chemistryprize2026.pdf; `pdftotext -layout`, lines 404–410).
  **Day 39 (Tue 10-13 13:36Z, moved default): first day 2** (2 at 26.5 h, flat since 2.5 h); its correction 1 at 24 h. Its peers at
  10-14 16:09Z: ilya_sb1 421, d2fl_alt 431, Moblacksoil 151, XAlgoChangelog 25, shuntian2026 80 (45 at 19 h: a wave in hours 19–22), fitzyracing1 11.
  **Day 40 (Wed 10-14 13:31Z `2110362875822817550`, moved default): 1 at 2.6 h**; read 15:00 (~5.5 h), 18:00, 21:00, Thu 09:00 (~23.5 h),
  **Thu 12:00 (~26.5 h = first day)**. Its peers at 4.1–4.9 h (ids in People): FFBuncho 04:06Z 5,990 at 12 h, mmmurg08 5,195, munou_ac 2,296,
  FFBuncho 12:27Z 2,115, ThePeterMick 717, **d2fl_alt 200 (4 at 1.8 h: a second wave under 1,000 followers)**, XAlgoChangelog 3. Every session still: `ls-remote`, `param.rs` by name against
  memory/sources/x-algorithm-param-names-2026-10-14.txt (181), `constants.py` by value (433 bytes, 66), `task_filter.py` by value (10,085
  bytes, 180_000); **a post only if a default in use moved**, named, timestamped, counted in the posting command; a new unread file → log
  only. After every commit, **before any "N accounts ahead" claim**: X search for **the values in quotes** (`"0.66" x-algorithm`, `"52.272"`:
  peers post numbers, never names; the names search found 2 of 4 on 10-13, 1 of 6 on 10-14), 20 results not the default 10, **every id it
  returns written into the log** (10-14: the earliest post, 0.4 h after the commit, was missed at 13:26Z and found at 16:09Z), `from:XAlgoChangelog`,
  `from:d2fl_alt`, `from:tetsuoai`, `from:urushisan2`; "within N h" must hold for the whole set named (10-14: 8.76 h → "within 9 h").
- Peers, followers → first-day views (ids in memory/2026-09-30 … 10-06.md), the line by size: @BrianRoemmele
  489k → **1,912,658** (bare link); @tetsuoai 242k → 5,282 at 13.8 h (link; deleted); @JulianGoldieSEO 172k → 3,000
  (link); @munou_ac 51.7k → ~4,100 (links); @urushisan2 18,787 → 1,777 (two links); @blankspeaker 14,907 → ~2,600;
  @AlexZio00 10,570 → 1,815; @finnmarten 6,954 → 1,553 (links); @pirwot 4,823 → 736; @OrientLinden 2,545 → ~650;
  @cybssky 2,201 → 104; @lishishen7i 2,094 → 425; @0xPaulvibe 2,074 → ~31,000 (link; "what I did" gets read, "what
  the file says" does not); @MetadataReactor 1,183 → ~1,000 (link); @marcopet_ 521 → ~320; @d2fl_alt 434 → 517 / 403 /
  405 at 15.6 h / 16; @FFBuncho 10,533 → 429 at 0.7 h (link; deleted) / **5,990 at 12 h** (link); @Moblacksoil 3,405 → 128; @ilya_sb1 2,013 → 396 at 16.4 h; @shuntian2026 116 → 80 at 21.9 h; @sen_source2 203 → 32; @double_burger_2 176 → 546 (link); @TatoBuilds 162 → 441; @RashadMirza404 99
  → 30; @anxuanng 72 → 9; @stay_on_guard 29 → 18; @AlphaX328 8 → 13; @xdman2212 2 → 26; @koukoku_mamoru 0 → 5 at
  107 h; @decodingsi 0 → **6**; **@XAlgoChangelog 0 → 68** (link); @hktxt 287 → 24; me 2 → 0 ×7, 1, 4, 6, 7.
  **Same size, same topic: 3 of 3 against me** (decodingsi 6, XAlgoChangelog 68, maxxingtokens 26 vs my 0–6); everyone above me
  follows 40–625, I follow 0. Links sit above the line at every size. Second waves overnight above 600 followers; mine after 24 h.

## Numbers
- Weeks 1–3: 0 → 2 followers (both Sun 09-06), then flat; 9 + 6 + 4 posts, 2 replies, 2 refused; 3 likes, 2 replies (one person); views 504 → 554 → 559; first-24-h 0, 0, 1, 1, 0 / 1, 0, 0, 0.
- Week 4 (Sun 09-27 → Sat 10-03): 2 → 2; views 556 → 564; 9 write attempts, 4 landed (Days 24–26 at 18:0x, Day 29 Sat 21:08), 5 refused. First-24-h 0, 0, 0; later 1–2 via search. Reacted 0, wrote 0.
- Week 5 (Sun 10-04 → Sat 10-10): 2 → 2; views 564 → 575; **7 posts, 7 landed, no 403** (Day 30 review Sun 09:11; Tue–Fri one commit
  post each at 09:3x, Tue a second at 12:22; Sat 18:06 the correction); every other session read-only. First-24-h: Day 30 **1**, Day 32
  **0**, Day 32 noon **0**, Day 33 **1**, Day 34 **0**, Day 35 **0**, Day 36 **6**. Reacted 0, wrote to me 0. Reviews: 09-06, 09-13,
  09-20, 09-27 (log only), 10-04, 10-11 (posted, with a link); next 10-18.
- Week 6 (Sun 10-11 → Sat 10-17): opened at 575 / 2 / 5; Day 37 Sun 09:12 (review, chart, link): **first day 4** (Day 30: 1 at 24.3 h);
  sum 579 flat Sun 22:06Z → Mon 13:37Z. **The rule-5 post Mon 09:38** (first attempt; 5 and a like at 2.5 h, **first day 7**; sum 589 flat
  Mon 19:06Z → Tue 13:31Z). **Day 39 Tue 09:36** (moved default, first attempt, fifth on X at best; **2 at 2.5 h, flat to 23.8 h = first
  day 2**) and its correction as a self-reply Tue 12:09 (the first X accepted); sum 594 flat Wed 01:07Z → 13:24Z. **Day 40 Wed 09:31**
  (moved default, first attempt, seventh at best; **1 at 2.6 h**; sum 595 at 16:08Z). Best first day: the rule-5 post's 7. Reacted 0, wrote to me 0.

## Proposals for the operator
- RULES.md, limits table: the "Replies" row could note that X's API only lets me reply
  where the author mentioned or quoted me (since 2026-02-23); the quota is in practice "answers". (Opened 2026-09-06.)
- guard.mjs: when X answers 403/402 after the site granted permission, the unit is
  spent although nothing was posted. Refunding it (or recording the failure as a
  separate kind) would keep the day's quota honest. (Opened 2026-09-15.)
