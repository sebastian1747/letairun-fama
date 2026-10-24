# MEMORY

_Long-term memory, curated by FAMA. Keep under ~400 lines._

## The X API balance ran dry once (Mon 10-19 between 16:14Z and 19:11Z → back by Tue 13:03Z: ≤ 21 h, four sessions blind) — for the operator
- An empty pay-per-use balance is **HTTP 402 "credits depleted"** on every read and write (`api.x.com/2/problems/credits-depleted`; Kolibri prints
  "Twitter API credits depleted … Billing", kolibri.mjs 563): a bill, not a restriction. **Every session's first X call is one `kolibri.mjs lookup`
  of the newest post as a probe** (a 402 costs nothing): if it fails, one thought on the site, `ls-remote`, memory, push; no post attempt (the unit
  might still be spent, proposal of 09-15). Pricing (docs.x.com `/x-api/getting-started/pricing.md`, 10-19): reads $0.005 per post and $0.010 per
  user returned, **deduplicated within a UTC day** (a soft guarantee); post $0.015, with a URL $0.200. A week-7 session read 48–53 posts, 1–4 users,
  13–16 searches × ≤ 20: ≤ ~1,700 resources/day at five sessions ($8.50 without the dedup, ~$2 with it); three sessions a day since 10-20.

## X's 403: nine refusals in 37 attempts; the `92f0918` switch finding 0 for 2 on two texts (10-14 21:11, 10-15 09:26) — for the operator
- "You are not permitted to perform this action", unit spent, balance fine (09-15). Refused: 09-15 link post, 09-19 plain post, 09-27 review with
  chart and its self-reply ×2, **the Day 19 correction 4 of 4** (draft g, memory/2026-10-01.md), **the `EnableAdsAuthorBrandSafetyFallback` finding
  twice (Wed 10-14 21:11; Thu 10-15 09:26, a different text)**, after seventeen first-attempt passes 10-06 → 10-14. Passed first time: fifteen fact
  posts 09-20 → 10-10, chart posts 4 of 5, Days 36–40, 44, the rule-5 posts, a reply under my own post (10-13): links 1 of 2, self-replies 1 of 3, so no
  form is "refused". Two explanations I cannot tell apart: the intermittent pay-per-use 403 (devcommunity, Feb → Sep 2026; two in a row after seventeen
  passes ≈ 1 in 16 at 25 %), or something in the text (the two switch texts share "Grok", "ad", "brand safety", an `Enable…` name; no word spans all nine).
  **One attempt per text per session; a 403 costs the unit; a refused finding may get one new wording in a later session, never a third.**
  For the operator: does the X developer console or Composio's request log show a reason code?

## Who I am
- FAMA, an AI trying to earn followers for @FAMA_letairun (id `2096327941609127936`) honestly. Website: letairun.com. Home time zone: America/New_York;
  days and daily files follow it (the 01:00 UTC session is the 21:00 session of the *previous* New York date). Started 2026-09-05 (Saturday, day 1);
  first real post that evening at 18:15.
- Bio ("An AI trying to earn a following. No tricks. Every decision is logged in public"), X's
  "Automated" label, picture and banner: confirmed by the operator 09-05/09-06. Do not re-verify.
- Sessions at 09:00, 15:00 and 21:00 New York (three since Tue 10-20, operator; five before). Post quota is a rolling 24 h window
  per post: run `guard.mjs status`, never predict it.
- Rules changed 2026-09-13 (operator): any subject, if genuinely useful or surprising and sourced; my own attempt stays the home
  topic. Every Sunday review carries a strategy (four questions, one number decided in advance); daily sessions follow it.
  **ROUTINE.md item 5 (operator, Sun 10-11 01:30Z): at least one post a week with no number
  about me and not about X, its API, its feed code or being an AI**; judged on Sunday. ALMA: the operator's earlier experiment
  (sebastian-jais.de/blog/two-months-alma-experiment). Reply rule 2026-02-23: @XDevelopers `2026084506822730185`.

## Strategy, week 7 (Sun 2026-10-18 → Sat 2026-10-24); review posted as Day 44 (`2111808982746648787`, chart, no link, 272)
Week 6's number (best first-24-h views by kind, threshold ≥ 5): **link review 4** (Day 30 no-link comparator 1), **moved default 2 and 1**
(the `92f0918` switch refused twice), **rule 5 (the Soai chemistry fact) 7 and the first like in 36 days** → only the rule-5 kind repeats.
1. **What a non-follower got from week 6**: one sourced fact outside me (the Soai reaction with its journal reference): 7 views, 1 like. The
   two moved-weight posts gave numbers that were on X 0.4–5 h earlier from accounts of 50–10,000× my reach (2 and 1 views); the review
   gave my numbers (4).
2. **Whom to reach, where they read**: people who read a sourced fact for its own sake, not X-algorithm watchers (served by d2fl_alt,
   XAlgoChangelog, urushisan2, newbullnew, grok's replies, within hours). **What the feed code means for my size** (README.md and
   phoenix/README.md at `862a123`, re-read 10-18): candidates come from Thunder (accounts the viewer follows: my 2), Phoenix retrieval
   ("the user is represented by what they interacted with", no per-user id embedding; top-K by dot product against the post index),
   SimClusters (clusters "by who engages with what") and the popular-posts list ("initially from the most-followed active accounts");
   author diversity, the out-of-network discount and the new-author boost "follow" scoring and re-rank what was retrieved. Without
   engagement edges none of the four retrieves me: reach starts with search, profile visits and first likes, not with the feed.
3. **What I post / stop**: (a) **three rule-5 posts, Mon/Wed/Fri 09:xx NY**: a fact a human would want to know, outside me, X, its API,
   its feed code and being an AI, the source inside the 280 (a numbered reference or a named document), no "Day N.", no link unless the
   words cannot carry the source; candidate sources in memory/2026-10-18.md; (b) the Sunday review with a chart, **no link** (4 < 5);
   (c) answers within the hour; (d) **stop posting moved feed-code defaults**; keep reading commits and peers for the log only.
4. **The number for Sunday 2026-10-25**: the **median first-24-h views of the three rule-5 posts**. ≥ 5: the kind holds and week 8 raises
   the bar to ≥ 7. < 5: the chemistry post was one lucky post; week 8 posts only answers and the review, and the review asks the operator
   which constraint (follow-after-interaction, no cold replies) to loosen. People who reacted stays the standing measure (week 6: 1).

## How the tooling behaves
- Sync step: `origin/claude/*` branches are absorbed history; merge only a tip newer than main's **with a merge base** (the 29 "ahead by 1–227" of 10-22
  are 10-11 orphans and copies). A two-ref fetch naming a branch the remote lacks aborts whole and leaves `origin/main` stale (10-12 → 10-22, every session):
  fetch `main` alone or bare `git fetch origin` before judging what is ahead. **A session can fail to run** (Thu 10-22 09:00: no daily file, the site's
  `total_sessions` unchanged): the readings due in that slot are lost; the next session says so in the log and in Open threads. A reading due at a clock time inside a session
  runs as a background `until [ $(date +%s) -ge … ]` loop ending in the `lookup` (10-24): the session works on and cannot miss it.
- **A shallow `git clone` of xai-org/x-algorithm works** (27 MB, ~20 s, 10-10); **`git fetch --deepen=2 origin` then `git diff HEAD~1 HEAD`
  gives the commit's diff** (10-20; `fetch --depth=1 origin <sha>` is refused); `codeload`
  tarballs get 403; `git ls-remote https://github.com/xai-org/x-algorithm HEAD` is the
  cheapest head check (10-10). Grep the clone before any "nothing reads X" or "gone" claim
  (the 09-23 "removal" was a move to `vm-ranker/`), and **before calling a default
  "applied", find what loads it** (the vm-ranker's `Params` need a startup flag). **A grep piped
  through `head` is not a search**: the Brazil filter's wiring sat below the cut (10-14).
- `kolibri.mjs search` prints `[id] @unknown ()` then the text, not JSON: a grep for JSON keys looks
  like an empty inbox (10-10); read raw output once. `tee f | head` truncates `f` (SIGPIPE): write, then print. A search takes ~15 s through the proxy: ≤ 6 per Bash call (10-21). A `node -e` one-liner with nested quotes loses its tail under the Bash tool: parsers go in a file (10-22).
  **`lookup` and `search` show only the first 280 chars of a long post** (no `note_tweet` field); a search still matches the hidden
  text, so a name search returning a post whose visible text lacks the name is a true hit (d2fl_alt, 10-15).
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
  `x_post_id` (the GET is a dict with a `posts` list, 10-17). `search` authors show as `@unknown ()`: `lookup` → author_id → `user-id <id>`.
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
  are not views** (09-13 → 09-25). Pay-per-use (docs.x.com `/x-api/getting-started/pricing.md`, re-read 10-19):
  post $0.015, with URL $0.200; follow $0.015; reads $0.005 post, $0.010 user, per resource returned, once per UTC day. **An empty
  balance is a 402 on every call (10-19), not a 403.**
- help.x.com, devcommunity.x.com, api.github.com and `commits/main.atom` refuse
  curl; WebFetch reads github.com pages (the atom: timestamps; the commit page:
  the file list; a tree page: file names); `raw.githubusercontent.com` serves
  files, `…/<sha>/<path>` old versions for a `diff`. `param.rs` names:
  `perl -0777 -ne 'while (/\(\s*([A-Z][A-Za-z0-9]*),\s*[A-Za-z0-9&<>\[\]]+,\s*"/g) { print "$1\n" }'`;
  values **by name** with one perl match over the whole macro (`grep -A3` misses
  multi-line literals). **A cut-off transfer looks like a code change** (09-26): compare line
  count and `%{size_download}` first; the site's `posts` GET returned a 0-byte body once (10-15) and a TLS `SSL_ERROR_SYSCALL` once (10-18), passed on retry. **The `last sync` stamp precedes the commit by 6–14 h**.
  **Commits land 00:52–08:06Z** (10-21 at 00:52Z the earliest; 10-13 at 08:05Z the latest), Tue–Sat NY nights (Tue 5 of 5, Wed 5 of 5, Thu 2 of 3,
  Fri 2 of 3, Sat 2 of 3; none Sundays, Mondays; none Thu 10-15) — **except `bc3948b`, Fri 10-16 19:02:15Z = 15:02 NY, the first daytime commit
  in six weeks (found by `ls-remote` 3.5 min later), `862a123` Sat 10-17 00:44:30Z = Fri 20:44 NY, 27 min before the 21:00 session, and `7f2ca2b` Wed 10-21 00:52:08Z = Tue 20:52 NY, 18 min before it**: three evening commits in a week; a commit can land in any session; `ls-remote` every time, whatever the hour. The guard's `fetch failed` is transient: retry after 2–3 s (4 of 4 passed, 10-14, 10-16).

## What works, what doesn't (weeks 1–6)
- Nothing has taken off, nothing has clearly flopped. One person reacted, in week 1 (Katreenka: reply 09-06, question 09-11, 3 likes); **the next
  like came 36 days later, on the rule-5 post (10-12, by 2.5 h)**. **Views are profile visits, not feed placement** (Day 4; help.x.com "View counts"):
  the spikes hit every post at once (after Katreenka's reply; **+22 across every post since 10-11 on Thu 10-22**); 2 followers from 504 views, both in day
  one. Fact posts (Days 10–35) had first-day views 0–1 at every hour: not the lever at 2 followers: the topic (week 3), the hour (week 4), the timing (week 5).
  Posts that moved on day one: Day 36 (a correction) 6, Day 37 (review + link) 4, the chemistry rule-5 post 7 and a like, the IceCube rule-5 post 6.

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
- **Video carousel, new in `35650fb` (10-08), off** (`util/video_carousel.rs`, `EnableVideoCarousel` false): 3–5 vertical videos, not replies, at position 6,
  at most every 60 min; dedupe defaults (author, semantic-id depth 3, embedding 0.72) on since `862a123`; candidate logging on since `989fb91` (10-22). Post only if the carousel flips.
- **`e1a0375` (Tue 10-13T08:05:54Z, 179 files; memory/2026-10-13.md)**: the three weights above; names 177 → 181; Phoenix retrieval type **`ZERO_FAV` = 16**
  (what it retrieves is not in the repo); `AncestorVideoFilter`; ~110 `visibility-filtering/` files.
- **`17c96bf` (Wed 10-14T03:41:50Z, 52 files; memory/2026-10-14.md)**: like 0.6 → 0.66 and not-interested −47.52 → −52.272 (both ×1.1;
  names 181 unchanged); `vm-ranker/params.rs` **`TopicDppEnabled` false** (the DPP diversity re-rank skips topic requests); a
  ZERO_FAV retrieval counter; **`home-mixer/filters/brazil_2026_election_filter.rs`** (wired in the Phoenix pipeline, no switch,
  older than this commit): drops For You candidates by or quoting accounts reported to Brazil's Electoral Court unless followed,
  list 2,795 → 25 runoff candidates. **Log only, never a post: elections are politics.**
- **`92f0918` (Thu 10-15T00:55:41Z, 57 files; memory/2026-10-14.md 21:00)**: names 181 → 185; **`EnableAdsAuthorBrandSafetyFallback` false → true**: every candidate
  gets a brand-safety verdict the ads blender reads (`ads/util.rs`: medium/high risk → no ad beside it); a post with no Grok label counted MediumRisk, now its author's
  Grok rating decides. **Posted 10-14 21:11 and 10-15 09:26 (two texts): refused 403 both; no third.** d2fl_alt (04:09Z) and XAlgoChangelog (12:30Z) had the name.
- **`862a123` (Sat 10-17T00:44:30Z = Fri 20:44 NY, 99 files; memory/2026-10-16.md 21:00)**: sync 2026-10-16T16:00:32Z; **three defaults moved, all behind
  `EnableVideoCarousel` false** (`EnableVideoCarouselAuthorDedupe` → true, `VideoCarouselSemanticIdDedupeLevels` 0 → 3, `EnableVideoCarouselEmbeddingDedupe` → true);
  **four new names, all false** (187 → 191): **`EnablePostEngagers`** (`util/post_engagers.rs`: a Redis cache gives who engaged with each candidate; Phoenix gets up to
  32 positive + 8 negative engagers, viewer excluded; on with the flag or on shadow traffic) and the three **`…ZeroFavCodivert…`** flags (`filters/zero_fav_codivert_filter.rs`:
  for a treatment viewer, a candidate found only by `ZERO_FAV` retrieval is kept only if its author is in treatment). `recsys.proto` `RecentSearchQueries` (its reader came
  in `07d159b`). **Log only; a post if `EnablePostEngagers` or the viewer flag flips.**
- **`74d49a4` (Tue 10-20T04:32:20Z = 00:32 NY, 179 files; memory/2026-10-20.md)**: sync 2026-10-19T16:00:41Z; **no default in use moved**; names 191 → 195
  (−`EnablePhoenixRetrievalFallback`; +`HistoryTopicsEnabled` false, `HistoryTopicsWindowDays` 28, `VMRankerSendHistoryTopics` false,
  `EnableSerendipityStatsExperimentBucket` false, `ShadowTrafficPhoenixClusterAggregationTypes` = `Experiment16Fou:…`). **History topics** (`util/viewer_history.rs`:
  the viewer's positively engaged posts of 28 days by semantic-ID topic, to the vm-ranker) and **serendipity stats** (a 5 % histogram, no score change), both off.
  **1.8 h earlier, @elonmusk `2112373713937084809` (02:42Z; 3.02 M views at 70.5 h) announced a time-spent ranking model and a read-through retrieval model; the
  repo shows neither** (weights unchanged, no new head). Log only.
- **`7f2ca2b` (Wed 10-21T00:52:08Z = Tue 20:52 NY, 67 files; memory/2026-10-20.md 21:00)**: sync 2026-10-20T16:00:34Z; **no default in use moved**; names 195 → 198,
  all off: **`EnableFairShareRanking`** (`filters/fair_share_ranking_filter.rs`, Phoenix scores pipeline: when retrieval returns more than `PhoenixScoresResultSize`
  2800, each served type keeps the same fraction instead of a truncation; test 440/220/440 → 400/200/400 at 1,000; **flipped on in `989fb91`, 30 h later**),
  `RetrievalValueModelWeights` "" (a per-request weight map to Phoenix retrieval, proto field 17), `EnableVideoCarouselCandidatesLogging` (Kafka). Log only.
- **`989fb91` (Thu 10-22T06:49:38Z = 02:49 NY, 79 files; memory/2026-10-22.md)**: sync 2026-10-21T16:00:32Z; **three defaults moved: `EnableFairShareRanking`
  false → true, `EnableVideoCarouselCandidatesLogging` false → true, `ShadowTrafficPhoenixClusterRates` [] → ["Experiment18Fou:0.5"]** (half the requests shadowed
  to a second experiment cluster); names 198 → 200: **`EnableNewUserSoftNsfwFilter` false, `NewUserSoftNsfwFilterMaxAccountAgeSecs` 86400** (`filters/new_user_soft_nsfw_filter.rs`
  + a label hydrator: For You for accounts younger than a day drops out-of-network posts carrying the `SOFT_NSFW` safety label; followed authors and unlabelled
  posts kept). Metrics only: muted/blocked authors among Phoenix retrievals, net-negative candidate shares per served type. ≥ 7 accounts in 3 languages had it
  by 15:31Z (d2fl_alt 445 at 8.2 h). **Log only (strategy 3d); the 09:00 session that would have seen it first did not run.**
- **`07d159b` (Fri 10-23T04:10:33Z = 00:10 NY, 209 files; memory/2026-10-23.md)**: sync 2026-10-22T16:00:34Z; **one default in use moved: `ShadowTrafficPhoenixClusterRates`
  0.5 → 0.3**; names 200 → 202, both off: `EnableRecentSearchQueriesHydration` (a query hydrator sends the viewer's ≤ 16 recent search queries with embeddings to Phoenix:
  the `RecentSearchQueries` proto of `862a123` has its reader) and `EnableAdsFunnelTrace` (Kafka: which ads were served and why the rest were dropped). ~90
  `visibility-filtering/` files, unread. d2fl_alt at 6.8 h (17 at 26 h); XAlgoChangelog never; a Chinese post claimed moved weights: none moved. Log only.
- **`6258a15` (Sat 10-24T03:22:45Z = Fri 23:22 NY, 56 files; memory/2026-10-24.md)**: sync 2026-10-23T16:00:34Z; **one default in use moved: `EnableAdsFunnelTrace` false → true**
  (on one day after it appeared; logging only); names 202 unchanged; `STRATO_APERTURE_SIZE` 16 → 32 (a pool size). **`abuse-enforcement-service/rules/enforcement_{post,user}.yaml`:
  the `pagerank_skipped` credibility-score threshold 50.0 → 12.34 with the comment "Prod uses a different … threshold; this is a mock value to reduce gaming"** (the follower-count
  rule already carried the same 12.34 mock); the GrowthBook sync stamp left the file; `rollout_bucket` gained a salt. @blankspeaker (15,926) had the mock value out **5.9 min after
  the commit** (1,063 views, 13 likes at 9.8 h); XAlgoChangelog at 9.0 h (2 at 2.9 h). Log only (3d).
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
  −58.8, report −234. **`vm-ranker/params.rs` is not synced** (10-16, at `92f0918`): like 0.5, video open 0.07, dwell secs 0.004,
  not-interested −47.52, but click 0.3 and the 10-13 head: the 09-29 values and new names, none of the 10-12 → 10-14 moves. Always
  name the file; the 0.66 / 0.5 split was a stranger's post by 10-16 (@superfang119). The one action that has ever brought me a view (a profile
  visit; Day 4) is weighted zero (posted as Day 32, noon). **@grok (id
  `1720665183188922368`, 9.13 M) quotes parameter names** to strangers within
  minutes to hours (2–15 views each); correct 6 of 6 since 10-05, wrong before
  (−468× 09-22 → 09-27). A weights post of mine has no gap to fill.
- **SID source** (`home-mixer/sources/sid_source.rs`, `76843a5` 10-02): seeds = posts the viewer engaged with (≤ 50); returns posts sharing a semantic-ID prefix of depth ≥ 3,
  ≤ 800 in all, score = prefix depth: topic match without author or follow graph. **`EnableSidSource` false**. **Posted as Day 29 (Sat 10-03 21:08)**.
- **Popular-posts source: rewritten in `e62790c` (10-06), switched on in `78460ca` (2026-10-07T03:05:56Z; memory/2026-10-07.md)**: the top
  `TOP_POSTING_AUTHORS_FRACTION` 0.00005 (**0.005 %**) of 7-day active posters by follower count (`util/popular_authors.rs`, hourly); ≤ 50 original posts
  per author, ≤ 24 h old, scored by projected 24-h views (8-h half-life), 5 per author, 500 in all (`util/popular_posts.rs`); one shared list, reloaded each
  minute, served to every For You request without cached posts (`ForYouPopularPosts` since `bc3948b`). **Posted as Day 33 (Wed 10-07 09:32), 10.4 h after, 1 at 24 h.**
- **`PostUnexploredWeight` 0.02 → 0.015 (same commit)**: multiplies the Phoenix head `post_unexplored_score` (alias `pdwell`, documented
  nowhere) in `xai-value-model/scoring.rs`, in-network candidates only in home-mixer's fallback; **the served weights are the vm-ranker's**
  (`vm-ranker/params.rs`: 0.02, 10-10). **Draft q withdrawn as worded** (memory/2026-10-07.md); any weights post names the vm-ranker file.
- **Profile visit seconds (`e62790c`)**: `HomeProfileVisitSecs` behind `EnableHomeExcursionScores` false × `ProfileVisitSecsWeight` 0.0: the action that brought my only views, weighted zero behind two off gates. **Day 32 noon**; not first (@maxxingtokens 26).
- **Every reply under someone else's post is scored 0–3 by a language model** (`grox/flows/reply_spam/`, read
  09-26, detail in memory/2026-09-26.md): `task_filter.py` sends replies whose replied-to and root authors both have
  ≤ 250,000 followers to Gemma (`oai-gemma4-26b`), above that to Grok 4 mini; skips Grok's own replies and replies
  to your own post. `task_write.py` stores the score as the reply-ranking score and at 0.0 applies
  `RiskyHighVizReply`; exempt: grey badges and `userCredScore` **≥ 66 since `35650fb` 10-08 (62 since 10-03, 60 since 10-01, any `high_page_rank_v2`
  user before)** (`RISKY_HIGH_VIZ_REPLY_EXEMPT_MIN_PAGE_RANK_SCORE`, `constants.py`, 433 bytes at every value: read the value). **`TaskCoordinatedSpamFilter`**
  (`task_filter.py`, 10,085 bytes either way) checks replies ≥ 2 levels deep under a root author with **≥ 180,000 followers (125,000 until 10-08)**, replier
  not high-PageRank/grey-badge. The prompts are withheld. **Posted as Day 24 (Mon 09-28 18:11) and, the two thresholds, as Day 34 (Thu 10-08 09:30).**
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
  Replies: true and specific, never thanks; look up references before answering. A finding refused twice on two texts gets no third
  wording (10-15): it lives in the log and on the site.
- Count with `printf %s "$T" | LC_ALL=C.UTF-8 wc -m` in the same breath as posting; 280 is accepted. Plain
  `wc -m` counts bytes here (`LANG` empty). X weights chars above U+10FF as 2 (`→` is 2, `->` is 2): count both.
  A stored draft's claims age (SOUL.md, Day 17): re-check every number and re-read the source itself on the day.
- Sources named in words by default, e.g. (X Help Center, "View counts"): it fits and costs nothing. A link
  (20 cents) only when it gives the reader something the words cannot; one attempt, never as a retry of a refused post.

## Follow policy (mine, set 2026-09-06, logged on the site)
- Follow only when all three hold: they interacted first (rule), I have answered them, and they post things I would read or cite. "I read you", not "thank you"; no follow-back reflex; 1–2 a day at most. Following 0 (26 pre-launch follows removed 09-06).

## Posts (all New York time)
- Ids: `GET /api/fama/posts`; texts in the daily files. Weeks 1–2: diary posts 09-05 → 09-11, 09-13 review with chart; fact posts Days 10–14 (Day 11 link: 403),
  0/0/1/1/0 at 24 h; Day 15 **403**; Day 16 review. Week 3: Days 17, 19 (`2102746815451861433`, AgeFilter + 0.75), 21: 0 each; 09-27 review **403**, self-reply
  **403 ×2**. Week 4 at 18:0x: Days 24–26: 0 each; draft g **403 ×2**; Day 29 (SID source) 0; Day 30 review + chart 1.
- Week 5 (all first attempt, no 403, 268–278 chars), 8–10 h after each commit: 10-06 09:29 `2107463202556547434` Day 32 **0**;
  10-06 12:22 `2107506687347159401` **0**; 10-07 09:32 `2107826402858807799` Day 33 **1**; 10-08 09:30 `2108188249109729299` Day 34 **0**;
  10-09 09:33 `2108551395238404173` Day 35 (first on X) **0**; Sat 10-10 18:06 `2109043012361752793` **Day 36 the Day 19 correction**
  (the 0.75 behind `--config_sync_enabled`, "I can't tell"): **6 at 24 h**. The thirty-second post.
- Week 6: Sun 10-11 **09:12** `2109270869797155275` **Day 37 the week-5 review**, 280 chars, 8-day chart (media `2109270862943690752`)
  **and a link to letairun.com/growth** (the first since Day 11), first attempt: **first day 4** (6 at 29.9 h); comparator Day 30 (no link) 1.
  **Mon 10-12 09:38 `2109639790660391267` the rule-5 post** (memory/2026-10-12.md; 276, no "Day N.", no image, no link): the Soai reaction,
  0.00005 % ee → >99.5 % in three runs, Angew. Chem. Int. Ed. 2003, 42, 315 (ref. 71 of the Academy's advanced-chemistryprize2026.pdf);
  first attempt; 5 and 1 like at 2.5 h, **first day 7**. **Tue 10-13 09:36 `2110001776199893027` Day 39** (277): three weights moved, the new
  head at 0.0, "Two accounts posted it before me" (**wrong: at least four**; corrected 12:09 in a reply under it, `2110040308608119160`, 258,
  the first self-reply X accepted); 5.5 h after `e1a0375`. **Wed 10-14 09:31 `2110362875822817550` Day 40** (280; memory/2026-10-14.md): like
  0.5 → 0.6 → 0.66 on two syncs, not-interested −52.272 "x1.1 again", "at least five accounts … within 9 h"; 9.8 h after `17c96bf`. The
  thirty-sixth post. **Wed 10-14 21:11 the `92f0918` switch post (274): refused 403**; the text in memory/2026-10-14.md.
- Week 7: **Sun 10-18 09:17 `2111808982746648787` Day 44 the week-6 review** (272, 8-day chart media `2111808976945819648`, no link), first attempt; the thirty-eighth post;
  **first day 3** (Day 37 with a link 4, Day 30 without 1). **Mon 10-19 09:28 `2112174031889686711` rule-5 post 1 of 3** (276, no "Day N.", no image, no link; memory/2026-10-19.md):
  IceCube, ~100,000 neutrinos a year above 0.1 TeV, ~100 astrophysical (Physics 2026 Scientific Background, p. 11); first attempt; the thirty-ninth post; **first day 6**.
  **Wed 10-21 09:22 `2112897349685059969` rule-5 post 2 of 3** (279, same form; memory/2026-10-21.md): neurons stimulated by laser in 1971, Fork, Science 171:907
  (Medicine 2026 Scientific Background, p. 2); nobody on X had it (29.8 h later still nobody); first attempt; the fortieth post; **0 at 5.8 h and 11.8 h, 7 at
  29.8 h; the 24-h reading was missed (the Thu 09:00 session did not run): first day ≤ 7, unread.** **Fri 10-23 09:28 `2113623519137305083` rule-5 post 3 of 3** (278,
  same form; memory/2026-10-23.md): channelrhodopsin needs retinal, the 2005 neuron test worked without adding any (medicine Scientific Background p. 6); first attempt; the
  forty-first post; **0 at 5.7 h, 1 at 11.7 h**; first day closes Sat 13:28:10Z.

## People
- @Katreenka26 (id `2096563133376495617`, 0 followers): the only person who has written (09-06, 09-11; my replies `2096586046737613300`, `2098442866217398556`); not followed.
- @sen_source2 (id `1892115126884630533`, 203, Japanese): my method as a bio; 88 at 21 h, 133 at 153 h; the vm-ranker's `config_sync_enabled`
  caveat on 10-06, four days before I found it; Sun 10-11 `2109252732125343745`: `DedupConversationFilter` keeps one post per conversation in For You
  (**verified 10-11**: `filters/dedup_conversation_filter.rs`, no switch, key = smallest ancestor id: a self-reply of mine never shows beside its root
  in one load; 17 at 25.6 h). Form: a question as the first line, the answer from the code as bullets with the change's date; 14–17 views per post at 203.
  @koukoku_mamoru (`2094064075995291648`, 0 followers, Japanese): the boost, Sat 10-03 `2106567488741802459`: 5 at 89 h. My size, my number (Day 29: 0 at 24 h).
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
  confirmed live settings"): 4 at 0.9 h, **25 at 24.8 h**. **Third post Wed 10-14 12:25Z `2110346249027371021`** (8.7 h after `17c96bf`): 6 at 6.7 h; **fourth Thu 10-15 12:30Z `2110709862367908121`** (11.6 h after
  `92f0918`, the brand-safety switch in words): 3 at 12.7 h, 5 at 60 h; **fifth Sat 10-17 12:26Z `2111433556102939136`** (11.7 h after `862a123`: the three carousel dedupe defaults "switched ON", the zero-fav filter; nothing on `bc3948b` alone): 3 at 0.8 h, 4 at 3.8 h, flat at 7 h; then at 14:52Z a hand-written reply off its topic (`2111470300814819591`, subagents, 4 views). A bot on my topic, cadence and size, with a link; **nothing on `74d49a4` (its first miss); sixth post Wed 10-21 12:22Z `2112882127918543205` on `7f2ca2b`, 11.5 h after
  ("new filter: fair_share_ranking_filter"): 2 at 1.0 h, 8 at 35 h; seventh Thu 10-22 12:29Z `2113246302767354216` on `989fb91`, 5.7 h after: 6 at 6.7 h and 12.7 h, then
  two replies to @XOpenSource with a link (2 views); **nothing on `07d159b` (its second miss); eighth Sat 10-24 12:23Z `2113969611293217113` on `6258a15`, 9.0 h after (funnel trace on, aperture 16 → 32): 2 at 2.9 h**. Read `from:XAlgoChangelog` after every commit.
  **The builder's own post** `2110074349260878248` (Tue 10-13 18:25Z, 48 followers, "my bot caught it overnight", a link): 3 at 0.7 h.
- **@d2fl_alt** (id `2023453561989066753`, created 02-2026, 433 followers, follows 419,
  "X Algo notes and advice"): English, no link, no numbers, 2.7–10 h after each commit.
  10-07 switch (6.8 h): **517 at 60 h**; 10-08 thresholds (2.7 h, "the moves are all in the doors"): **403 at 53 h**; **Fri 10-09 `cb45b55` (9.96 h, "nothing
  live moved"): 19 at 33.4 h**: "nothing moved" drew ~1/21 of "two doors moved" until Musk's post; **Sat 10-10 "No algo update today."**: 8 at 24.4 h, 19 at 67 h;
  **Tue 10-13 `2109940060388769949` (1.4 h after `e1a0375`, "Likes matter a bit more", a link): 379 at 9.6 h**; **Wed 10-14 `2110334026699403402` (7.9 h after
  `17c96bf`): 241 at 7.5 h**; **Thu 10-15 `2110583723645149671` (3.2 h after `92f0918`, "nothing moved"): 203 at 60 h**; **Sat 10-17 `2111423475554357757` (11.0 h
  after `862a123`): 8 at 24.5 h, 13 at 73 h**; **Tue 10-20 `2112459073597718554` (3.8 h after `74d49a4`, 5.7 h after Musk's post, "No dwell weight changed", a link):
  7 at 4.8 h, 107 at 16.9 h, 152 at 29 h** (its first "nothing moved" post with a second wave: it answers Musk); **Wed 10-21 `2112817784216224226` (7.2 h after
  `7f2ca2b`, "Nothing changes in your feed today"): 204 at 5.2 h, 418 at 17.1 h, 468, 6 likes at 35 h**; **Thu 10-22 `2113223859335786856` 11:00Z (4.2 h after
  `989fb91`, "The 'fair share' change I flagged yesterday is now ON"): 445 at 8.2 h, 486, 2 likes, 1 quote at 14.2 h**. Since Musk's post every one of its commit posts
  draws 100–470 whatever moved; **Fri 10-23 `2113585584195199152` 10:57Z (6.8 h after `07d159b`, "flagged posts get a warning and lose buttons"): 11 at 2.5 h, 13 at 14.3 h, **17 at 26 h** (a rate and two off flags: a thirtieth of a switch)**; nothing on `6258a15` by 9.8 h. Rungs before: moved 413 (83 h), nothing moved 21 (70 h), no commit 8 at 24 h / 22 at a week. Read `from:d2fl_alt` after every commit. Never wrote to me.
- **Peers on `e1a0375` (10-13) and `17c96bf` (10-14)** (ids in those daily files), found only by the values search: @ilya_sb1 (2,013) 377; @shuntian2026 (116, my shape) 80;
  **@FFBuncho** (10,533, Japanese X-tips) 0.42 h after `17c96bf`, values + "1.1倍" + link: **6,659, 77 likes at 15 h**; **@mmmurg08** (11,858) the values with an image: **6,191, 147 likes at 7.3 h**.
- **@HeXingluDev** (1,719, Chinese): the five `74d49a4` names with defaults, an image, 3.5 h after, the first on it: 96 at 11.2 h. **@ZengwuY** (4,413, Chinese): "like your own
  post" advice citing `@74d49a4`: **1,124, 19 likes, 13 replies at 64.6 h**. **@Moblacksoil** (3,525): a long article on the whole pipeline, a link: 763 at 42 h (ids in memory/2026-10-20.md).
  **On `989fb91` (10-22)**: @1995soosan (Japanese, the switch by name, `2113211768554316000`, 311 at 15 h), a Chinese "小技巧 32" correcting its own "default off"
  (`2113265187881140472`: "no quota for small accounts", 155 at 11.5 h), **@blankspeaker's long post crediting @XOpenSource 0.1 h after the commit (`2113162514242707715`,
  two links): 1,374 at 18.3 h, **2,221, 15 likes, 8 bookmarks at 42.3 h** (a second wave overnight, then over; 2,287 at 3 d), the most-read post on it**; ids in memory/2026-10-22.md.
  **@blankspeaker** (`1699889909627269120`, 15,926, "Grok Community Mod … uses automation"): on `6258a15` **5.9 min after the commit** (`2113835032196567066`, the 12.34 mock, two links): 1,063, 13 likes at 9.8 h. It watches the repo by machine; the first on every commit it covers.
- **@tetsuoai** (`1587601034339561472`, 241,935): the 10-06 commit with a link at 6.3 h (5,282 at 13.8 h, deleted); its replies
  carried the findings before I posted (@maxxingtokens, 1 follower). Read `from:tetsuoai x-algorithm` after every commit.
  @TatoBuilds (`2011332689069293568`, 162): thread 09-28 440 at 18.1 h.
- **@urushisan2** (id `1636769489118433280`, **20,207** (18,787 on 10-08), follows 18,906, Japanese, "X研究者"): the carousel `2108335977353842730`
  10-08 23:17Z, 18.1 h after the commit, "default false, not a rollout": 506 at 1.8 h, **1,794 at 46.8 h**, 28 likes, 8 reposts. **`2111626262997590390`
  Sun 10-18 01:11:47Z, 30.2 h after `bc3948b`**: the embedding dedupe name, "initial value false", 0.72, a link: 8 and 1 like at 2 min, 854 at 12 h, **first day 906, 16 likes, 5 replies** (wave over by 15 h). **Mon 10-19 01:08Z `2111987720214188446`** ("mutual follows now work in your
  favour", two hashtags, an image, no commit named): 48 at 6 min, 537 at 12.3 h, **555, 28 likes, 8 reposts at 15.1 h**, wave over by 12 h (advice outdraws the file, as at every size); passed 20,500 followers 10-19. Read **`from:urushisan2` bare** after every commit (`… algorithm` misses アルゴリズム, 10-18).

## Open threads
- **Week 7 (strategy above)**: Day 44 (Sun 10-18 13:17:52Z, review, chart, no link): **first day 3** (3 from 2.9 h on; Day 37 with a link 4, Day 30 without 1: three reviews 1–4,
  the link does not decide it at this size; one more Sunday before a post says so). **Rule-5 post 1 of 3, Mon 10-19 13:28:24Z `2112174031889686711`** (IceCube, p. 11
  of the physics Scientific Background): 3 at 2.75 h, no reading 5.7–11.7 h (402), **first day 6 (13:28:42Z)**, 6 at 47.8 h (the chemistry post 7 and a like; Day 44 3). **Rule-5 post 2 of 3, Wed 10-21 13:22:37Z `2112897349685059969`** (Fork 1971, the
  medicine Scientific Background p. 2): 0 at 5.8 h and 11.8 h, **7 at 29.8 h; the 24-h reading was lost with the Thu 09:00 session: first day ≤ 7, unread**;
  nobody on X has the fact (48 h). **Thu 10-22 01:12Z → 19:14Z: sum 610 → 632, +22 in 18 h, every post since 10-11 gained (Fork +7, IceCube +5, Day 44 +3), nothing older:
  profile visits from the top; 632 flat to Fri 19:13Z, **633 Sat 01:13Z (+1 in 30 h: the retinal view): one window** (memory/2026-10-22.md). **Rule-5 post 3 of 3, Fri 10-23 13:28:10Z `2113623519137305083`**
  (channelrhodopsin needs retinal; the 2005 neuron test worked without adding any, Nagel's observation; medicine Scientific Background p. 6; 278, first attempt; nobody on X
  had it): **0 at 5.7 h, 1 at 11.7 h** (IceCube 3 at 2.75 h, Fork 0 at 11.8 h); **Sat 09:00 at or after 13:28:10Z = the first day; a session that starts earlier reads it again after 13:28:10Z by `date`**. **Sun 10-25: the week-7 review**, the median of the three first days (IceCube 6,
  Fork ≤ 7 unread, retinal ?), one reading missed said in the review; week-8 strategy.
  Every session still: `ls-remote`, `param.rs` by name against memory/sources/x-algorithm-param-names-2026-10-23.txt (202), `constants.py`
  by value (433 bytes, 66), `task_filter.py` by value (10,085 bytes, 180_000); a moved default goes to the log, not to a post (week 7). After every
  commit: X search for **the values in quotes** (peers post numbers, never names), 20 results, every id written into the log; `from:XAlgoChangelog`,
  `from:d2fl_alt`, `from:tetsuoai`, **`from:urushisan2` bare**.
- Peers, followers → first-day views (ids in memory/2026-09-30 … 10-06.md), the line by size: @BrianRoemmele 489k → **1,912,658** (bare link);
  @tetsuoai 242k → 5,282 at 13.8 h (link; deleted); @JulianGoldieSEO 172k → 3,000 (link); @munou_ac 51.7k → ~4,100 (links); @urushisan2 18,787 → 1,777
  (two links) / 20,207 → **906** (10-18, a link); @blankspeaker 14,907 → ~2,600 / 15,647 → 3,872 at 72 h / 15,926 → 1,063 at 9.8 h (links); @FFBuncho 10,533 → **6,659 at 15 h** (link); @AlexZio00 10,570 → 1,815;
  @finnmarten 6,954 → 1,553 (links); @pirwot 4,823 → 736; @ZengwuY 4,413 → 817 at 4.6 h (10-20, advice + a sha); @Moblacksoil 3,405 → 128 / 3,525 → 526 at 5.9 h (link);
  @OrientLinden 2,545 → ~650; @cybssky 2,201 → 104; @lishishen7i 2,094 → 425; @0xPaulvibe 2,074 → ~31,000 (link; "what I did" gets read, "what the file says" does not);
  @ilya_sb1 2,013 → 396; @HeXingluDev 1,719 → 90 (the names, an image); @VeyraTrade 1,348 → 30 (bare link); @MetadataReactor 1,183 → ~1,000 (link); @superfang119 618 → 511 (link);
  @marcopet_ 521 → ~320; @d2fl_alt 434 → 517 / 403 / 405 / 168 / 8 (no commit) / 152 / 468 / 445; @hktxt 287 → 24; @sen_source2 203 → 32; @double_burger_2 176 → 546 (link);
  @TatoBuilds 162 → 441; @shuntian2026 116 → 89; **@syftdev 115 → 13,428 at 72 h (a bare link, no words)**; @RashadMirza404 99 → 30; **@PennyLedgerr 59 → 504 at 24 h
  (10-17, a link, advice, not the file)**; **@bybillx 1,479 → 9 (10-23, an X article on the code and small accounts, my method)**; @dnzxlyfe 50 → 16; @stay_on_guard 29 → 18; @AlphaX328 8 → 13; @ChuongPhanVinh 5 → 2 / 4 → 2; @xdman2212 2 → 26; @decodingsi 0 → **6**;
  **@XAlgoChangelog 0 → 68** (link); @koukoku_mamoru 0 → 5 at 107 h; @newbullnew 9,107 → ≈ 1,350 (weights list, no link); me 2 → 0 ×7, 1, 4, 6, 7, 3, 6, ≤ 7. **Same size, same topic: 4 of 4 at or above me** (decodingsi 6, XAlgoChangelog 68, maxxingtokens 26, dnzxlyfe 9 at 5.8 h vs my 0–7);
  everyone above me follows 40–625, I follow 0. Links sit above the line at every size. Second waves overnight above 600 followers; mine after 24 h.

## Numbers
- Weeks 1–4: 0 → 2 followers (both Sun 09-06), then flat; 19 posts + 4 landed, 7 refused; 3 likes, 2 replies (one person); views 504 → 564; first-24-h 0, 0, 1, 1, 0 / 1, 0, 0, 0 / 0, 0, 0. Flat stretches: 102 h (09-20 → 09-24), 72 h (09-28 → 10-01), 57–69 h (10-14 → 10-16).
- Week 5 (Sun 10-04 → Sat 10-10): 2 → 2; views 564 → 575; **7 posts, 7 landed, no 403** (Day 30 review Sun 09:11; Tue–Fri one commit post each at
  09:3x, Tue a second at 12:22; Sat 18:06 the correction). First-24-h: 1, 0, 0, 1, 0, 0, Day 36 **6**. Reacted 0, wrote to me 0. Reviews: 09-06, 09-13, 09-20, 09-27 (log only), 10-04, 10-11 (posted, with a link); next 10-18.
- Week 6 (Sun 10-11 → Sat 10-17): opened at 575 / 2 / 5; first attempts all: Day 37 Sun 09:12 (review, chart, link) **first day 4** (Day 30: 1);
  **the rule-5 post Mon 09:38** (a like at 2.5 h) **first day 7**; **Day 39 Tue 09:36** (moved default, fifth on X at best) **first day 2** and its
  correction as a self-reply Tue 12:09 (the first X accepted); **Day 40 Wed 09:31** (moved default, seventh at best) **first day 1**. **Wed 21:11
  the `92f0918` switch post: refused 403 (8 of 32); its second text Thu 09:26: refused 403 (9 of 33).** Sums: 579 Sun → 589 Mon → 594 Tue → 595 Wed 16:08Z,
  flat 57 h, 597 Fri 13:10Z, 599 Sat 01:14Z. **Week closed: 575 → 599 (+24), 2 → 2; four posts landed, two refused; best first day the rule-5 post's 7, the only kind ≥ 5.** Reacted 1 like, wrote to me 0.
- Week 7 (Sun 10-18 → Sat 10-24): opened at 599 / 2 / 6; Day 44 review Sun 09:17 (chart, no link), first attempt, **first day 3**; sum 602 Sun 16:13Z → Mon 13:25Z (the other 37 flat 60 h);
  rule-5 post 1 of 3 Mon 09:28 (IceCube), first attempt: 605 Mon 16:13Z (3 at 2.75 h); Mon 19:11Z → Tue 01:11Z nothing read (402); **608 Tue 13:05Z**
  (6 at 23.6 h; the other 37 flat 84 h since Sat 01:14Z); **610 Tue 19:14Z** (Day 39 4 → 5, its correction 2 → 3: the flat stretch ended at 84–90 h, second to 102 h), 610 Wed 01:12Z (Tue closed +2), 610 Wed 13:19Z, 610 Wed 19:19Z, **610 Thu 01:12Z (flat 30 h; Wed closed +0)**;
  rule-5 post 2 of 3 Wed 09:22 (Fork 1971), first attempt, 0 at 11.8 h, 7 at 29.8 h (24 h unread); **632 Thu 19:14Z (+22 in 18 h: Fork +7, IceCube +5, Day 44 +3,
  chemistry +2, Days 37/39/40 and the correction +1–2; the largest 18-h move since week 1)**, **632 Fri 01:14Z (Thu closed +22)**, 632 Fri 13:25Z and 19:13Z (flat 24 h), **633 Sat 01:13Z (Fri closed +1)**;
  rule-5 post 3 of 3 Fri 09:28 (retinal), first attempt, 0 at 5.7 h, 1 at 11.7 h. Reviews so far: 09-06, 09-13, 09-20, 09-27 (log only), 10-04, 10-11, 10-18; next 10-25.

## Proposals for the operator
- RULES.md, limits table: the "Replies" row could note that X's API only lets me reply where the author mentioned or quoted me (since 2026-02-23); the quota is in practice "answers". (Opened 2026-09-06.)
- guard.mjs: when X answers 403/402 after the site granted permission, the unit is spent although nothing was posted. Refunding it (or recording
  the failure as a separate kind) would keep the day's quota honest. (Opened 2026-09-15.)
- **X API credits (opened 2026-10-19 15:00; topped up by 10-20 13:03Z)**: if the console shows what the reads cost, tell me whether the 24-h
  deduplication applied; I can cut the peer searches (9–16 a session, the bulk of the resources) to one per commit if the reads are what drained
  it. A way for me to read the balance (a site endpoint the operator fills, or the console's figure in AGENTS.md with a date) would let me stop
  before it runs dry.
