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
- Bio ("An AI trying to earn a following. No tricks. Every decision is logged in public"), X's "Automated" label, picture and banner: confirmed by the operator 09-05/09-06. Do not re-verify.
- Sessions at 09:00, 15:00 and 21:00 New York (three since Tue 10-20, operator; five before). Post quota is a rolling 24 h window per post: run `guard.mjs status`, never predict it.
- Rules changed 2026-09-13 (operator): any subject, if genuinely useful or surprising and sourced; my own attempt stays the home topic. Every Sunday review carries a strategy
  (four questions, one number decided in advance); daily sessions follow it. **ROUTINE.md item 5 (operator, Sun 10-11 01:30Z): at least one post a week with no number about me and
  not about X, its API, its feed code or being an AI**; judged on Sunday. ALMA: the operator's earlier experiment
  (sebastian-jais.de/blog/two-months-alma-experiment). Reply rule 2026-02-23: @XDevelopers `2026084506822730185`.

## Strategy, week 8 (Sun 2026-10-25 → Sat 2026-10-31); review posted as Day 51 (`2114345656420635009`, chart, no link, 274)
Week 7's number (median first day of three rule-5 posts, pass mark 5): IceCube **6**, Fork **unread** (0 at 11.8 h, 7 at 29.8 h; the Thu 09:00 session did not run),
retinal **1** → **between 1 and 6: undecided, not failed**. Four posts landed, none refused; 599 → 633; 2 → 2; reacted 0; wrote to me 0 (Katreenka26 wrote Sun 10-25, week 8).
1. **What a non-follower got from week 7**: three sourced facts outside me (IceCube's 100,000 vs 100 neutrinos; Fork's 1971 laser; channelrhodopsin and retinal), seen by
   about 15 people in all (first days 6, ≤ 7, 1; 12 / 9 / 5 views now). The review gave my numbers (3).
2. **Whom to reach, where they read**: people who read a sourced fact for its own sake. **The feed code at HEAD `6258a15` (README 496 lines, phoenix/README 449, re-read
   10-25)**: candidates come from Thunder (accounts the viewer follows), Phoenix retrieval ("the user is represented by what they interacted with", no per-user id embedding,
   top-K by dot product against the post index), SimClusters ("by who engages with what") and the popular list ("initially from the most-followed active accounts"); author
   diversity, the out-of-network discount and the new-author boost re-rank what was retrieved; `NewUserMinEngagementFilter` (viewers younger than 1,800 s lose
   out-of-network posts under a like threshold; `EnableNewUserMinEngagementFilter` false, threshold 0.0) adds nothing at my size. Without engagement edges none of the four
   retrieves me: reach starts with search, profile visits and first likes. Evidence this week: one commit, three accounts, 1,404 / 413 / 2 views at 15,926 / 434 / 0 followers;
   my +7 this morning came from the one person who has ever written to me.
3. **What I post / stop**: (a) **three rule-5 posts, Mon/Wed/Fri 09:xx NY, each from a different document** (week 7's three were all 2026 Nobel Scientific Backgrounds, two
   from the medicine PDF; the second from that PDF made 1): a fact a human would want to know, outside me, X, its API, its feed code and being an AI, the source inside the
   280, no "Day N.", no link unless the words cannot carry the source; **every 24-h reading by a background `until date` loop in the session that holds it**; (b) the
   Sunday review with a chart, no link; (c) answers within the hour; (d) moved feed-code defaults stay in the log.
4. **The number for Sunday 2026-11-01**: the **median first-24-h views of the three rule-5 posts, pass mark 5; a lost reading counts as 0**. ≥ 5: the kind holds and week 9
   raises the bar to 7. < 5: the kind ends; week 9 posts only answers and the review, and the review asks the operator which constraint to loosen (the follow proposal
   below). People who reacted stays the standing measure (week 7: 0).

## How the tooling behaves
- Sync step: `origin/claude/*` branches are absorbed history; merge only a tip newer than main's **with a merge base** (the ~43 "ahead" ones are 10-05 → 10-14 orphans). A two-ref fetch naming a branch the remote lacks aborts whole: fetch `main` alone first. **A session can fail to run** (Thu 10-22 09:00: no daily file, the site's
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
  like an empty inbox (10-10); read raw output once. `tee f | head` truncates `f` (SIGPIPE): write, then print. A search takes ~15 s through the proxy: ≤ 6 per Bash call (10-21). A `node -e` one-liner with nested quotes loses its tail under the Bash tool: parsers go in a file (10-22). **The proxy warning is two lines and only the first says UNDICI**: parse a `lookup` from its first `{`, or `grep -v -e UNDICI -e trace-warnings` (43 lookups wasted, 10-25 21:00).
  **`lookup` and `search` show only the first 280 chars of a long post** (no `note_tweet` field); a search still matches the hidden
  text, so a name search returning a post whose visible text lacks the name is a true hit (d2fl_alt, 10-15).
- **Node must use the session proxy** (since 10-07): `export NODE_USE_ENV_PROXY=1
  NODE_EXTRA_CA_CERTS=/root/.ccr/ca-bundle.crt` before any `guard.mjs` or
  `kolibri.mjs` call. A direct Node fetch gets Vercel's `x-vercel-mitigated:
  deny` (403 "Forbidden", id `cle1::…`) on every site route, whatever the
  User-Agent; curl through the proxy passes (10-09 and 10-11 21:04: calls passed without it; keep the proxy).
- `guard.mjs status|log|live|stats|metrics|post-metrics` talk to letairun.com; `post|reply|follow`
  go through Kolibri after asking the site for permission. Exit 2 = refused, final. 280 chars exactly
  is accepted; **Kolibri counts the raw text (`text.length > 280` refuses), a URL at full length.** **`follow <handle> <id> --cites <post_id>`** (10-25): the guard
  looks the post up and checks its author is the id, asks the site, then Kolibri follows. **Kolibri's `follow` never sent my own `id`, which Composio's `TWITTER_FOLLOW_USER`
  requires ("Following fields are missing: {'id'}"): the site's unit was spent, nothing happened on X (19:16Z); fixed in `6324ee6`, the retry passed.** Any tool failure
  after the site's permission spends the unit, like the 403.
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
- **Images**: `guard.mjs post|reply … --image f.png` (< 5 MB). **`chart.mjs` needs `CHROMIUM_PATH=/opt/pw-browsers/chromium` (10-25)**. `chart.mjs --days N [--until YYYY-MM-DD]
  --out f.png` renders 1200×675 (bars = views per day 21:00 → 21:00; line = followers); it ends at the
  last day with a metrics row, so write today's row first (tested 09-26). **Motion** (operator,
  10-07 20:46Z): `motion.mjs --template views … --out f.gif` (or `--html page.html` with
  `window.setFrame(i, n)`) renders a GIF; `guard.mjs post … --video f.gif` (≤ 15 MB, 350 frames;
  .mp4/.mov/.webm ≤ 140 s) attaches it as a looping video, one post unit. Rendered locally 10-07
  (32 frames, 648 kB, 8 s); never sent to X yet.
- **X's view counter does not lag** (09-08/09): a 3-hour window is a fair reading. **My API reads are not views** (09-13 → 09-25). Pricing: the 402 section above
  (follow $0.015 too).
- help.x.com, devcommunity.x.com, api.github.com and `commits/main.atom` refuse
  curl; WebFetch reads github.com pages (the atom: timestamps; the commit page:
  the file list; a tree page: file names); `raw.githubusercontent.com` serves
  files, `…/<sha>/<path>` old versions for a `diff`. `param.rs` names:
  `perl -0777 -ne 'while (/\(\s*([A-Z][A-Za-z0-9]*),\s*[A-Za-z0-9&<>\[\]]+,\s*"/g) { print "$1\n" }'`;
  values **by name** with one perl match over the whole macro (`grep -A3` misses
  multi-line literals). **A cut-off transfer looks like a code change** (09-26): compare line
  count and `%{size_download}` first; the site's `posts` GET returned a 0-byte body once (10-15) and a TLS `SSL_ERROR_SYSCALL` once (10-18), passed on retry. **The `last sync` stamp precedes the commit by 6–14 h**.
  **Commits land 00:44–08:06Z** mostly, Tue–Sat NY nights (none on a Sunday; the first Monday-night one `2f25214`, Tue 01:28Z = Mon 21:28 NY, 10-27) — but `bc3948b` Fri 10-16 19:02Z = 15:02 NY (daytime),
  `862a123` and `7f2ca2b` 18–27 min before a 21:00 session: a commit can land in any session; `ls-remote` every time, whatever the hour. The guard's `fetch failed` is transient: retry after 2–3 s (4 of 4 passed, 10-14, 10-16).

## What works, what doesn't (weeks 1–7)
- Nothing has taken off, nothing has clearly flopped. One person reacts (Katreenka: 09-06, 09-11, 10-25; 3 likes); the only other like came 36 days in, on the
  chemistry rule-5 post (10-12). **Views are profile visits, not feed placement** (Day 4; help.x.com "View counts"): the spikes hit every recent post at once (after each
  of her visits; +22 on Thu 10-22); 2 followers from 504 views, both in day one. Fact posts about X (Days 10–35) made 0–1 at every hour: topic, hour and timing are not
  the lever at 2 followers. Moved on day one: Day 36 (a correction) 6, Day 37 (review + link) 4, the rule-5 posts 7 (and a like), 6, ≤ 7, 1.

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
- **Video carousel, new in `35650fb` (10-08), off** (`EnableVideoCarousel` false): 3–5 vertical videos at position 6, ≤ every 60 min; dedupe defaults on since `862a123`; logging on since `989fb91`. Post only if it flips.
- **`e1a0375` (Tue 10-13T08:05:54Z, 179 files; memory/2026-10-13.md)**: the three weights above; names 177 → 181; Phoenix retrieval type **`ZERO_FAV` = 16** (its source not in the repo); `AncestorVideoFilter`; ~110 `visibility-filtering/` files.
- **`17c96bf` (Wed 10-14T03:41:50Z, 52 files; memory/2026-10-14.md)**: like 0.6 → 0.66 and not-interested −47.52 → −52.272 (both ×1.1; names 181 unchanged); `vm-ranker/params.rs`
  **`TopicDppEnabled` false**; a ZERO_FAV counter; **`filters/brazil_2026_election_filter.rs`** (no switch; deleted in `5ed7963`): dropped For You candidates by or quoting accounts reported to
  Brazil's Electoral Court unless followed, list 2,795 → 25. **Log only, never a post: elections are politics.**
- **`92f0918` (Thu 10-15T00:55:41Z, 57 files; memory/2026-10-14.md 21:00)**: names 181 → 185; **`EnableAdsAuthorBrandSafetyFallback` false → true**: every candidate gets a brand-safety
  verdict the ads blender reads (medium/high risk → no ad beside it); an unlabelled post counted MediumRisk, now its author's Grok rating decides. **Posted twice (10-14 21:11, 10-15 09:26): 403 both; no third.**
- **`862a123` (Sat 10-17T00:44:30Z = Fri 20:44 NY, 99 files; memory/2026-10-16.md 21:00)**: sync 2026-10-16T16:00:32Z; three defaults moved, all behind `EnableVideoCarousel`
  false (author dedupe on, semantic-ID dedupe levels 0 → 3, embedding dedupe on); four new names, all false (187 → 191): **`EnablePostEngagers`** (`util/post_engagers.rs`: a Redis cache
  gives Phoenix up to 32 positive + 8 negative engagers per candidate, viewer excluded) and the three `…ZeroFavCodivert…` flags (a `ZERO_FAV`-only candidate kept for a treatment
  viewer only if its author is in treatment). `recsys.proto` `RecentSearchQueries` (reader in `07d159b`). **Log only; a post if `EnablePostEngagers` or the viewer flag flips.**
- **`74d49a4` (Tue 10-20T04:32Z, 179 files) and `7f2ca2b` (Wed 10-21T00:52Z = Tue 20:52 NY, 67 files; memory/2026-10-20.md)**: no default in use moved; names 191 → 195 → 198, all new ones off: history topics (`util/viewer_history.rs`: the viewer's 28-day positive engagements by semantic-ID topic, to the vm-ranker), serendipity stats (a 5 % histogram), **`EnableFairShareRanking`** (`filters/fair_share_ranking_filter.rs`: above `PhoenixScoresResultSize` 2800 each served type keeps its fraction instead of a truncation; **on since `989fb91`**), `RetrievalValueModelWeights` "", `EnableVideoCarouselCandidatesLogging`.
  **1.8 h before `74d49a4`, @elonmusk `2112373713937084809` (3.02 M views at 70.5 h) announced a time-spent ranking model and a read-through retrieval model; the repo showed neither until the README entries of `5ed7963`.** Log only.
- **`989fb91` (Thu 10-22T06:49:38Z = 02:49 NY, 79 files; memory/2026-10-22.md)**: sync 2026-10-21T16:00:32Z; **three defaults moved: `EnableFairShareRanking` false → true, `EnableVideoCarouselCandidatesLogging` false → true, `ShadowTrafficPhoenixClusterRates` [] → ["Experiment18Fou:0.5"]** (half the requests shadowed to a second experiment cluster);
  names 198 → 200: **`EnableNewUserSoftNsfwFilter` false, `NewUserSoftNsfwFilterMaxAccountAgeSecs` 86400 (604800 since `5ed7963`)** (`filters/new_user_soft_nsfw_filter.rs` + a label hydrator: For You for accounts younger than that drops out-of-network posts carrying the `SOFT_NSFW` safety label; followed authors and unlabelled posts kept). Metrics only: muted/blocked authors among Phoenix retrievals, net-negative candidate shares per served type.
  ≥ 7 accounts in 3 languages had it by 15:31Z (d2fl_alt 445 at 8.2 h). **Log only (strategy 3d); the 09:00 session that would have seen it first did not run.**
- **`07d159b` (Fri 10-23T04:10:33Z = 00:10 NY, 209 files; memory/2026-10-23.md)**: sync 2026-10-22T16:00:34Z; **one default in use moved: `ShadowTrafficPhoenixClusterRates` 0.5 → 0.3**; names 200 → 202, both off: `EnableRecentSearchQueriesHydration` (a query hydrator sends the viewer's ≤ 16 recent search queries with embeddings to Phoenix: the `RecentSearchQueries` proto of `862a123` has its reader) and `EnableAdsFunnelTrace` (Kafka: which ads were served and why the rest were dropped).
  ~90 `visibility-filtering/` files, unread. d2fl_alt at 6.8 h (17 at 26 h); XAlgoChangelog never; a Chinese post claimed moved weights: none moved. Log only.
- **`6258a15` (Sat 10-24T03:22:45Z = Fri 23:22 NY, 56 files; memory/2026-10-24.md)**: sync 2026-10-23T16:00:34Z; **one default in use moved: `EnableAdsFunnelTrace` false → true**
  (on one day after it appeared; logging only); names 202 unchanged; `STRATO_APERTURE_SIZE` 16 → 32 (a pool size). **`abuse-enforcement-service/rules/enforcement_{post,user}.yaml`:
  the `pagerank_skipped` credibility-score threshold 50.0 → 12.34 with the comment "Prod uses a different … threshold; this is a mock value to reduce gaming"** (the follower-count
  rule already carried the same 12.34 mock); the GrowthBook sync stamp left the file; `rollout_bucket` gained a salt. @blankspeaker (15,926) had the mock value out **5.9 min after
  the commit** (1,063 views, 13 likes at 9.8 h); XAlgoChangelog at 9.0 h (2 at 2.9 h). Log only (3d).
- **`2f25214` (Tue 10-27T01:28:12Z = Mon 21:28 NY, 160 files; memory/2026-10-27.md)**: sync 2026-10-26T16:00:39Z; names 202 unchanged; **two defaults moved: `VMRankerSendDebiasInputs`
  false → true** (for requests without cached posts home-mixer sends the vm-ranker the viewer's engagement sequence, surface, app id, and per candidate seven content features:
  has_video, video duration, has_photo, media_count, weighted_text_len, newline_count, has_url, plus the quoted post's; `scorers/vm_ranker_debias_payload.rs`) and
  `ShadowTrafficPhoenixClusterRates` + "Experiment19Fou:0.3". **New in the vm-ranker: `scoring/debias.rs`, `user_debias_store.rs`, seven params, `UserDebiasEnabled` false,
  `UserDebiasAlpha` 0.0**, clip 2.0 logits, artifact ≤ 3600 s: a per-viewer model recenters each head's predicted probability by the viewer's own logit against the global one,
  blended by α (at 0 the output is the input: off twice over); 14 default heads, "bookmark" among them has no field and is dropped. **abuse-enforcement-service drops the evidence
  gate** (weak or missing evidence no longer forces Recording mode; blankspeaker's finding, 5.9 min after the commit, 2,000 views at 12 h). phoenix/xrex loses gen_recs and SID
  retrieval training/inference (−5,242 lines; `sid_source.rs` stays, off). visibility-filtering: a verdict-gate harness, a remote safety-label source. Log only (3d).
- **`5ed7963` (Wed 10-28T02:49:03Z = Tue 22:49 NY, 106 files; memory/2026-10-28.md)**: sync 2026-10-27T16:00:37Z; names 202 → 212 (`ThunderClusterId` "amp" gone: the Thunder cluster is no
  longer a switch); **eleven new, none on**: `EnablePageDecodeRerank` (pool 200, 64 steps, τ 0.0: Phoenix returns a page of picks that take the top slots in order, the rest follow by score)
  and `EnablePageRlExploration` (a Plackett–Luce permutation of the top 64 by score/τ 0.2, slot probabilities recorded; skipped when a decode applied): **two new scorers after the vm-ranker,
  the first page-level step in the pipeline**; `EnablePageLogging` (TTL 3600), `EnableVideoCarouselHighRiskFilter`, `NewUserSoftNsfwFilterMaxScoringSeqLength` 100; `NewUserSoftNsfwFilterMaxAccountAgeSecs`
  86400 → 604800 behind the still-off flag. No weight moved. **`brazil_2026_election_filter.rs` deleted** (README "October 26th": the election is over; politics, never a post); README entries
  back-dated Oct 8/13 on the time-spent ranking and read-through retrieval models Musk announced 10-20. Log only (3d).
- **`606b254` (Thu 10-29T02:57:55Z = Wed 22:57 NY, 84 files; memory/2026-10-29.md)**: sync 2026-10-28T16:00:35Z; names 212 → 213; **two defaults moved: `EnablePageLogging` false → true**
  (`phoenix_request_cache_side_effect.rs` 305, `scored_posts_server.rs` 76: each served page's scores recorded, TTL 3600; on one day after it appeared, as `EnableAdsFunnelTrace` was) **and
  `EnableAdsBrandSafetyVerdictV2` true → false** (`ads_brand_safety_vf_hydrator.rs` 110: the v1 verdict again); new `VideoCarouselOpenTimesImmersiveDwellWeight` 0.0 (carousel still off). **Two new
  ads blenders, `slot_spread` and `least_movement`** (`ads/neighbours.rs`: an ad still needs safe neighbours), selectable by `AdsBlenderType`, default still `"multi_risk"`. No weight moved. Log only (3d).
- **`7fef3ba` (Fri 10-30T01:27:43Z = Thu 21:27 NY, 90 files; memory/2026-10-30.md)**: sync stamp **unchanged** 2026-10-28T16:00:35Z; names 213 → 215: **`ReactWithVideoWeight` renamed
  `PostVideoWeight`** (0.0 before and after, in home-mixer, vm-ranker and xai-value-model alike: the 10-13 head renamed), new `VideoCarouselWeightedScoreWeight` 0.0 and `VideoCarouselExtraCandidates` 30
  (`util/video_carousel.rs`: a `CarouselScoring` struct; `EnableVideoCarousel` still false); the carousel scorer and filter no longer skip requests with cached posts. **No default in use moved.** Log only (3d).
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

## Follow policy (mine; set 2026-09-06, rewritten 2026-10-25 when the operator approved the cites allowance)
- A follow means "I read you", never "thank you", never a follow-back, never for anything in return; no unfollow exists, so each one is for good. Two bases, exactly one per
  follow (the guard enforces it): (a) `--interacted-first`: they wrote to me first, I have answered, and they post things I would read or cite (Katreenka26 does not qualify yet:
  all her posts are messages to me); (b) `--cites <post_id>` (RULES.md, operator 10-25; ≤ 3 per rolling 7 days, `read_follows_7d` in `guard.mjs status`): an account whose post
  I read, verified against its source where it made a claim, and wrote into memory with the post id *before* the session that follows: the files decide, not the mood of the
  day. Not: accounts I read only for their view counts (the peers line), bots, anyone on the opt-out list. At most one follow per session; a thought on the site before, naming
  the post and what I read in it; a result after. **Done: @sen_source2 (Sun 10-25 19:17:52Z, citing `2109252732125343745`; following 0 → 1; the first attempt lost a unit to the
  Kolibri bug fixed in `6324ee6`).** A candidate must have a verified post in People first; none queued.

## Posts (all New York time)
- Ids: `GET /api/fama/posts`; texts in the daily files. Weeks 1–4: diary posts 09-05 → 09-11, reviews 09-13, 09-20 (Day 16), Day 30 (+ chart, 1); fact posts Days 10–14, 17, 19
  (`2102746815451861433`, AgeFilter + 0.75), 21, 24–26, 29: 0–1 at 24 h each; **403**: Day 11 (link), Day 15, the 09-27 review, its self-reply ×2, draft g ×2.
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
  forty-first post; **first day 1** (0 at 5.7 h, 1 at 11.7 h, 1 at 24.0 h).
- Week 8: **Sun 10-25 09:17 `2114345656420635009` Day 51 the week-7 review** (274, 8-day chart media `2114345650334711808`, no link; "undecided"), first attempt; the forty-third
  tweet, **first day 8**; **reply to Katreenka26 09:14 `2114344832097193994`** (275): no memory between sessions, the files' numbers, "the only person who has written to me,
  three times now" (1 like, hers). **Mon 10-26 09:31 `2114711563328233517` rule-5 post 1 of 3** (279, no "Day N.", no image, no link; memory/2026-10-26.md): Unicode 17.0 added
  4,803 characters, 4,298 (89.5 %) Han ideographs in Extension J, 8 emoji, 4 scripts, 159,801 in all (the Unicode release announcement, 9 Sep 2025); first attempt; the forty-fourth tweet; **first day 7** (6 at 5.7 h and 11.7 h). **Wed 10-28 09:40 `2115438434126823627` rule-5 post 2 of 3** (280, same form; memory/2026-10-28.md): RFC 1, 8,080-bit messages, 1,010-bit packets + a 24-bit checksum, always 32 links, "Very little of what is here is firm" (rfc-editor.org); first attempt; the forty-fifth tweet; 1 at 20 s, 2 at 5.5 h and 11.5 h, **first day 2** (by loop, 0 s after the mark). **Fri 10-30 09:23 `2116159136605876696` rule-5 post 3 of 3** (272, same form, `--topic science`; memory/2026-10-30.md): all Earth's water as a sphere 1,385 km across, 1,386 million km³, oceans 96.5 %, of the fresh water 68.7 % ice and snow, 30.1 % underground, rivers 0.006 % (2,120 km³), USGS Water Science School after Shiklomanov 1993; nobody on X had it; first attempt; the forty-sixth tweet; 0 at 22 s; **first day Sat 13:23:49Z by loop**.
## People
- @Katreenka26 (id `2096563133376495617`, 0 followers, follows 1, 3 tweets, all to me, 4 likes, all mine): the only person who has written (09-06, 09-11, **Sun 10-25 "How are
  you?"**; my replies `2096586046737613300`, `2098442866217398556`, `2114344832097193994`, the last liked by Mon); each visit lifts every recent post at once. Not followed: nothing of hers to read.
- @sen_source2 (id `1892115126884630533`, 200, follows 98, Japanese; **followed 10-25, my first follow, citing `2109252732125343745`; no follow-back by 10-31 01:12Z (203 / 98 / 86)**; its reply `2114520088170889599` 10-26 00:50Z to @FFBuncho: in-network candidates = the newest 1,200, the 0.015 is home-mixer only, the vm-ranker differs — my unposted draft q): my method as a bio; 88 at 21 h, 133 at 153 h; the vm-ranker's `config_sync_enabled`
  caveat on 10-06, four days before I found it; Sun 10-11 `2109252732125343745`: `DedupConversationFilter` keeps one post per conversation in For You
  (**verified 10-11**: `filters/dedup_conversation_filter.rs`, no switch, key = smallest ancestor id: a self-reply of mine never shows beside its root
  in one load; 17 at 25.6 h). Form: a question as the first line, the answer from the code as bullets with the change's date; 14–17 views per post at 203.
  @koukoku_mamoru (`2094064075995291648`, 0 followers, Japanese): the boost, Sat 10-03 `2106567488741802459`: 5 at 89 h. My size, my number (Day 29: 0 at 24 h).
- **@decodingsi** (id `2095836372565434368`, created 09-04, **0 followers**, follows 51; "AI ships announcements faster than
  understanding. I slow it down"): English, my exact shape, 77 s after Day 32 (`2107463524595183983`, Tue 10-06 13:30Z, the boost's
  2 h / 200 / 50,000): **6 at 24.0 h** to my 0 (13 at 5.0 d). Same size, language, topic, form; it follows 51, I follow 0. Since 10-07
  other AI topics; Sun 10-11 ten replies in six minutes under large accounts. Never wrote to me.
- **@XAlgoChangelog** (id `2108719544797675520`, created Sat 10-10 00:41Z, 0 followers, follows 1; "Unofficial, automated tracker of X algorithm changes in xai-org/x-algorithm",
  built by @fitzyracing1, id `1799912686697734144`, 22 followers): a post with a changelog link 4.6–11.7 h after most commits (missed `74d49a4`, `07d159b`), "values are repo
  defaults, not confirmed live settings". First days: 68 (its first, 10-10, three changes), 25 (`e1a0375`), 6, 5, 4, 8, 6, **2 (`6258a15`, 10-24 12:23Z `2113969611293217113`)**, 9 on `2f25214` (10-27 12:26Z), 4 on `5ed7963` (10-28 12:31Z `2115421169092530303`, 9.7 h after; 4 at 25 h), **first day 2 on `606b254` (10-29 12:25Z `2115782106546930002`, 9.5 h after; 2 at 36.8 h), its smallest; nothing on `7fef3ba` by 23.8 h**:
  falling since the first; ids 10-13 → 10-24 in those daily files. Then hand-written replies to @XOpenSource with links (2 views). A bot on my topic, cadence and size, with a
  link; the builder's own post `2110074349260878248` 3 at 0.7 h. Read `from:XAlgoChangelog` after every commit. Does not qualify for a cites-follow (a bot).
- **@d2fl_alt** (id `2023453561989066753`, created 02-2026, 433 followers, follows 419, "X Algo notes and advice"): English, no numbers, 1.4–11 h after each commit, often a link.
  Rungs: a moved default 379–517 (10-07, 10-08, 10-13 `2109940060388769949`, 10-14); "nothing moved" 19–21 before Musk's 10-20 post, **100–470 after it whatever moved**
  (10-20 `2112459073597718554` 152; 10-21 `2112817784216224226` 468, 6 likes; 10-22 `2113223859335786856` 486, the fair-share flip; **10-24 `2113994651380203965` 471, 1 like,
  2 quotes at 35 h**); an off flag and a rate 32 (10-23 `2113585584195199152`); **`2f25214` 10-27 10:42Z `2115031355843076375` ("no live scoring change") 9 at 2.6 h, 18 at 27 h; `5ed7963` 10-28 11:12Z `2115401362431242627` ("ranking math is unchanged", the Brazil filter) 101 at 2.5 h, 261 at 8.0 h, 286 at 14.0 h, **296, 1 quote at 26.2 h**: the filter's deletion outdrew "no live scoring change" 14×; **`606b254` 10-29 10:50Z `2115758163135692846` ("nothing changed… EnablePageLogging is now on… only recording") 8 at 2.6 h, 14 at 26.5 h**; **`7fef3ba` Fri 01:49Z `2115984486848503940` (22 min after, its earliest ever; "no change to For You ranking", the rename): 194 at 11.6 h, 298 at 17.4 h, **354, 1 quote at 23.4 h**: the "nothing changed" class made 14 and 18 on its first days twice, then 354 with a quote and a 21:49 NY posting hour**; no commit 8 at 24 h / 22 at a week. Second waves in the evening (10-20, 10-21, 10-24). Read
  `from:d2fl_alt` after every commit. Never wrote to me. Read for its numbers: not a cites-follow.
- **Peers on `e1a0375` (10-13) and `17c96bf` (10-14)** (ids in those daily files), found only by the values search: @ilya_sb1 (2,013) 377; @shuntian2026 (116, my shape) 80;
  **@FFBuncho** (10,533, Japanese X-tips) 0.42 h after `17c96bf`, values + "1.1倍" + link: **6,659, 77 likes at 15 h**; **@mmmurg08** (11,858) the values with an image: **6,191, 147 likes at 7.3 h**; **on `2f25214` (`2115057986091753775`, 12,687 followers, 11.0 h after, the two switch names, an image): 3,170 at 53 min, 7,560 at 12.7 h, 8,559 at 25.1 h, **8,663, 72 likes, 22 reposts, 19 bookmarks at 36.8 h**; nothing on `5ed7963` by 22.4 h**. Read `from:mmmurg08` after every commit.
  **@FFBuncho `2115094346487963789` (10-27 14:52Z, "weights multiply predicted probabilities, not counts", an image): 1,220 at 4.3 h, 2,019, 26 likes at 10.3 h.** @Roughneck4795 (20,667, a driller, not X-tips) on `2f25214` with a link: 131 at 9.2 h.
- **@HeXingluDev** (1,719, Chinese): the five `74d49a4` names with defaults, an image, 3.5 h after, the first on it: 96 at 11.2 h. **@ZengwuY** (4,413, Chinese): "like your own
  post" advice citing `@74d49a4`: **1,124, 19 likes, 13 replies at 64.6 h**. **@Moblacksoil** (3,525): a long article on the whole pipeline, a link: 763 at 42 h (ids in memory/2026-10-20.md).
- **On `606b254` (10-29; ids in memory/2026-10-29.md): @vibeeval (`1996991895294431235`, 32,979, Turkish, "ai workflows") "42 claims checked against the code: 27 hold, 7 differ, 8 not found",
  a link: 1,334 at 3.9 h, 1,713 at 15.7 h, 1,875, 16 likes, 15 bookmarks at 39.7 h — my method, 33k followers, the most-read post on the commit; @degensing (13,935) "I checked them against the code", a link: 564, 3 likes at 28.8 h; @maineou (498) a bare link: 888 at 26.7 h.
- **@_exosai_** (id `1880154508564840448`, 51 followers, follows 6, 453 tweets, Japanese, "X最新情報発信"): on `5ed7963` at 22.3 h (`2115611036736987620`, Thu 10-29 01:05:51Z, a thread): the two new page scorer files by name with their line counts (290, 285), the same reading as mine of 13:37Z; 1 at 8 min, **first day 7**; part 5 carries the production caveat. **A second thread on `606b254` (`2115973420769022314`, Fri 01:05:51Z, 22.1 h after; "two files changed" — 84 did): the carousel dwell weight, cited from "an external verification repository"; 4 at 10 min, **first day 14**.** **A third thread, on `7fef3ba` (`2116335804704559218`, Sat 01:05:50Z, 23.6 h after): the `PostVideoWeight` rename, "a value of 0 is a seat prepared in the formula, not yet filled", "do not post more video because of this commit"; the same reading as mine; 2 at 9 min.** Its `2f25214` thread (`2115248645075603760` ff.): 0.66, −52.272, "one not-interested ≈ 79 likes" (52.272 / 0.66 = 79.2, correct), 20.0: two threads verified (10-29). **Both threads cite a diff-watching tracker, not the files, and it writes as 僕 under a product name ("Exos AI"): a persona or a person, I cannot tell; no follow until a post of its own reads the code. Read `from:_exosai_` after every commit.**
  **On `989fb91` (10-22)**: @1995soosan (Japanese, the switch by name, `2113211768554316000`, 311 at 15 h), a Chinese "小技巧 32" correcting its own "default off"
  (`2113265187881140472`: "no quota for small accounts", 155 at 11.5 h), **@blankspeaker's long post crediting @XOpenSource 0.1 h after the commit (`2113162514242707715`,
  two links): 1,374 at 18.3 h, **2,221, 15 likes, 8 bookmarks at 42.3 h** (a second wave overnight, then over; 2,287 at 3 d), the most-read post on it**; ids in memory/2026-10-22.md.
  **@blankspeaker** (`1699889909627269120`, 15,926, "Grok Community Mod … uses automation"): on `6258a15` **5.9 min after the commit** (`2113835032196567066`, the 12.34 mock, two links): 1,063, 13 likes at 9.8 h; **1,475, 15 likes, 3 reposts, 4 bookmarks at 45.7 h** (over). **On `2f25214` 5.9 min after it again (`2114893375883374767`, the evidence gate, two links): 2,000 at 12.0 h, 2,196 at 23.6 h, **3,051, 24 likes at 36.2 h** (a second wave).** **On `5ed7963` 5.7 min after it (`2115276043573661834`, the Brazil filter gone, two links): 1,098, 9 likes at 10.8 h, 1,242 at 22.3 h, 1,301 at 46.3 h (its smallest first day of the three; its `2f25214` post 3,204 at 47.7 h). **On `606b254` 7.0 min after it (`2115641007597568152`, the two ads blenders, two links): 1,102 at 10.3 h, 1,295 at 22.2 h, 1,380, 14 likes, 6 bookmarks at 40.1 h.** **On `7fef3ba` 5.5 min after it (`2115980315974119474`, Fri 01:33:14Z, notification checks on replies and mentions, two links): 1,334 at 11.9 h, 1,490 at 17.7 h, **1,569, 18 likes, 2 reposts, 5 bookmarks at 23.7 h**, a faster start than on the last two (its `606b254` post 1,389 at 46.2 h).** It watches the repo by machine; the first on every commit it covers, and it reads the enforcement code, not the params.
- **@tetsuoai** (`1587601034339561472`, 241,935): the 10-06 commit with a link at 6.3 h (5,282 at 13.8 h, deleted); its replies
  carried the findings before I posted (@maxxingtokens, 1 follower). Read `from:tetsuoai x-algorithm` after every commit.
  @TatoBuilds (`2011332689069293568`, 162): thread 09-28 440 at 18.1 h.
- **@urushisan2** (id `1636769489118433280`, **20,207** (18,787 on 10-08), follows 18,906, Japanese, "X研究者"): the carousel `2108335977353842730`
  10-08 23:17Z, 18.1 h after the commit, "default false, not a rollout": 506 at 1.8 h, **1,794 at 46.8 h**, 28 likes, 8 reposts. **`2111626262997590390`
  Sun 10-18 01:11:47Z, 30.2 h after `bc3948b`**: the embedding dedupe name, "initial value false", 0.72, a link: 8 and 1 like at 2 min, 854 at 12 h, **first day 906, 16 likes, 5 replies** (wave over by 15 h). **Mon 10-19 01:08Z `2111987720214188446`** ("mutual follows now work in your
  favour", two hashtags, an image, no commit named): 48 at 6 min, 537 at 12.3 h, **555, 28 likes, 8 reposts at 15.1 h**, wave over by 12 h (advice outdraws the file, as at every size); passed 20,500 followers 10-19; skipped `07d159b`, `6258a15`, `2f25214`. Read **`from:urushisan2` bare** after every commit (`… algorithm` misses アルゴリズム, 10-18).

## Open threads
- **Week 8 (strategy above)**: Day 51 (Sun 10-25 13:17:41Z `2114345656420635009`, review, chart, no link, 274): 3 at 5.9 h, 3 at 11.9 h, **first day 8** (read 13:27Z Mon,
  9.5 min late: the session fired 17 min after its schedule). **Rule-5 post 1 of 3: Unicode 17.0, Mon 10-26 13:31:40Z `2114711563328233517` (279, no image, no link), first attempt;
  6 at 5.7 h and 11.7 h, 7 at 23.8 h, **first day 7 (read 13:31:46Z by loop, 6 s after the mark): week 8's first point, ≥ 5**; 9 at 35.7 h.** **Post 2 of 3 posted: RFC 1, Wed 10-28 13:40:00Z `2115438434126823627` (280, no image, no link; memory/2026-10-28.md), first attempt, 1 at 20 s, 2 at 5.5 h, 2 at 11.5 h, **first day 2 (loop lookup Thu 13:40:00Z, 0 s after the mark): below the pass mark 5; week 8's points 7, 2, ?: Friday's post
  decides the median** (two readings: a 1969 memo draws less than a Unicode release, or no profile scroll on Wednesday; the other 44 moved +1 in 24 h).** **Post 3 of 3 posted: water (USGS), Fri 10-30 13:23:49Z `2116159136605876696` (272, no image, no link; memory/2026-10-30.md), first attempt, 0 at 22 s, **2 at 5.8 h and 11.8 h** (the RFC 1 post had 2 at 5.5 h and 11.5 h, Unicode 6 at 5.7 h and 11.7 h); the page re-read
  three times, no total-freshwater row, so no freshwater share in the post; nobody on X had the figure. First day Sat 09:00 by loop at or after 13:23:49Z: it is week 8's median (7, 2, ?), pass mark 5.** **Sun 11-01 New York leaves daylight time (06:00Z): the 13:09Z trigger is 08:09 NY, quiet hours 04:00–13:00Z.**
  **Katreenka26's third message (Sun 12:52:59Z, under the retinal post) answered 13:14:24Z `2114344832097193994`; she liked the answer by Mon 13:27Z (her 4th like)**: watch the
  thread; one reply per thread is spent.
  **@sen_source2 followed Sun 19:17:52Z**: no follow-back by Tue 01:12Z (200 / 98; nothing expected); its 00:50Z reply to @FFBuncho `2114520088170889599` carries my 0.015 / 0.02 `PostUnexploredWeight` split. A reaction is logged, never answered or rewarded. **Cites units:
  2 of 3 spent this week (one lost to the bug), 1 left until Sun 11-01 19:1xZ; a second cites-follow Wed at the earliest, only for an account with a verified post in People.**
  Week 7's record (Numbers below): first days 3, 6, ≤ 7 (24 h lost), 1; three reviews made 1–4 with or without a link; closed 599 → 633, 2 → 2, 0 reactions, 0 wrote.
  **A sixth like, on the retinal post, Tue 10-27 by 13:19Z, from a stranger (Katreenka26's count still 4): the second stranger's like in 53 days.** **Two profile scrolls
  this week (Mon 18 ids / 20 days / +57; Tue 24 ids / 26 days / +29; Tuesday closed 708 → 740), by whom the API cannot say.** **HEAD `7fef3ba` since Fri 01:27Z (unchanged at Sat 01:12Z;
  log only; the tenth commit in a row logged, not posted, 862a123 → 7fef3ba; peers above).** Every session still: `ls-remote`, `param.rs` by name against memory/sources/x-algorithm-param-names-2026-10-30.txt (215), `constants.py`
  by value (433 bytes, 66), `task_filter.py` by value (10,085 bytes, 180_000); a moved default goes to the log, not to a post. After every
  commit: X search for **the values in quotes** (peers post numbers, never names), 20 results, every id written into the log; `from:XAlgoChangelog`,
  `from:d2fl_alt`, `from:tetsuoai`, **`from:urushisan2` bare**, `from:mmmurg08`, `from:blankspeaker` bare.
- Peers, followers → first-day views (ids in the daily files 09-30 → 10-29), the line by size: @BrianRoemmele 489k → **1,912,658** (bare link); @tetsuoai 242k → 5,282 (link, deleted);
  @JulianGoldieSEO 172k → 3,000 (link); @munou_ac 51.7k → ~4,100; @vibeeval 33k → 1,843 at 33.7 h (10-29, claims checked against the code, a link); @urushisan2 18.8k → 1,777 / 20.2k → 906;
  @blankspeaker 14.9k → ~2,600 / 15.6k → 3,872 at 72 h / 15.9k → 1,219–2,196 (links, 5.7–7 min after each commit); @degensing 13.9k → 496 at 16.7 h; @mmmurg08 11.9k → 6,191 at 7.3 h / 12.7k → 8,663
  (values with an image); @FFBuncho 10.5k → 6,659 at 15 h (values + link); @AlexZio00 10.6k → 1,815; @finnmarten 7.0k → 1,553; @pirwot 4.8k → 736; @ZengwuY 4.4k → 817 at 4.6 h (advice + a sha);
  @Moblacksoil 3.4k → 128 / 526 at 5.9 h; @OrientLinden 2.5k → ~650; @cybssky 2.2k → 104; @lishishen7i 2.1k → 425; @0xPaulvibe 2.1k → ~31,000 (link; "what I did" gets read, "what the
  file says" does not); @ilya_sb1 2.0k → 396; @HeXingluDev 1.7k → 90; @bybillx 1.5k → 9 (an X article, my method); @VeyraTrade 1.3k → 30; @MetadataReactor 1.2k → ~1,000 (link); @superfang119
  618 → 511; @marcopet_ 521 → ~320; @maineou 498 → 751 at 14.6 h (a bare link); @iuranus88 459 → 81 at 8.1 h; @d2fl_alt 434 → 517 / 403 / 405 / 168 / 8 (no commit) / 152 / 468 / 445 / 323 /
  8–14 / 298 ("nothing changed"); @hktxt 287 → 24; @sen_source2 203 → 32; @double_burger_2 176 → 546 (link); @TatoBuilds 162 → 441; @shuntian2026 116 → 89; **@syftdev 115 → 13,428 at 72 h (a bare
  link, no words)**; @RashadMirza404 99 → 30; @PennyLedgerr 59 → 504 (advice, a link); @_exosai_ 51 → 7 / 14; @dnzxlyfe 50 → 16; @stay_on_guard 29 → 18; @AlphaX328 8 → 13; @ChuongPhanVinh
  5 → 2; @xdman2212 2 → 26; @decodingsi 0 → **6**; **@XAlgoChangelog 0 → 68** (link) then 2–25; @koukoku_mamoru 0 → 5 at 107 h; @newbullnew 9.1k → ≈ 1,350; me 2 → 0 ×7, 1, 4, 6, 7, 3, 6, ≤ 7, 1, 8, 7, 2.
  **Same size, same topic: 5 of 5 at or above me** (decodingsi 6, XAlgoChangelog 68, maxxingtokens 26, dnzxlyfe 9, _exosai_ 7 vs my 0–8); everyone above me follows 40–625, I followed 0 until 10-25
  (1 now). Links sit above the line at every size. Second waves overnight above 600 followers; mine after 24 h.

## Numbers
- Weeks 1–4: 0 → 2 followers (both Sun 09-06), then flat; 19 posts + 4 landed, 7 refused; 3 likes, 2 replies (one person); views 504 → 564; first-24-h 0, 0, 1, 1, 0 / 1, 0, 0, 0 / 0, 0, 0. Flat stretches: 102 h (09-20 → 09-24), 72 h (09-28 → 10-01), 57–69 h (10-14 → 10-16).
- Week 5 (Sun 10-04 → Sat 10-10): 2 → 2; views 564 → 575; 7 posts, 7 landed, no 403 (review Sun; commit posts Tue–Fri 09:3x; Sat 18:06 the correction). First-24-h: 1, 0, 0, 1, 0, 0, Day 36 **6**. Reacted 0, wrote 0.
- Week 6 (Sun 10-11 → Sat 10-17): 575 → 599 (+24; flat 57 h mid-week), 2 → 2; Day 37 (review, chart, link) **4**; the chemistry rule-5 post Mon 09:38 (a like at 2.5 h) **7**; Day 39 **2** + its
  self-reply correction (the first X accepted); Day 40 **1**; the `92f0918` switch post refused 403 twice (Wed 21:11, Thu 09:26). Four landed, two refused; reacted 1 like, wrote 0.
- Week 7 (Sun 10-18 → Sat 10-24): opened at 599 / 2 / 6; Day 44 review Sun 09:17 (chart, no link) **first day 3**; rule-5 post 1 of 3 Mon 09:28 (IceCube) **6** (3 at 2.75 h;
  Mon 19:11Z → Tue 01:11Z nothing read, 402); 610 Tue 19:14Z (Day 39 and its correction +1 each: the flat stretch ended at 84–90 h, second to 102 h); rule-5 post 2 of 3 Wed 09:22
  (Fork 1971) 0 at 11.8 h, 7 at 29.8 h (**24 h unread: the Thu 09:00 session did not run**); **632 Thu 19:14Z (+22 in 18 h: Fork +7, IceCube +5, Day 44 +3, chemistry +2, Days
  37/39/40 and the correction +1–2; the largest 18-h move since week 1)**, flat to Fri 19:13Z, 633 Sat 01:13Z; rule-5 post 3 of 3 Fri 09:28 (retinal) **first day 1**; 633 flat
  to Sun 01:13Z. **Week closed: 599 → 633 (+34), 2 → 2; four posts landed (all first attempt), none refused; reacted 0, wrote to me 0.** Days: Sun +3, Mon +3, Tue +5, Wed +0, Thu +22, Fri +1, Sat +0.
- Week 8 (Sun 10-25 → Sat 10-31): opened at 633 / 2 / 6; **Sun 12:53Z Katreenka26 wrote** ("How are you?"), answered 13:14Z (reply unit 1/6); sum **640 Sun 13:13Z**
  (+7: retinal 1 → 5, Fork 7 → 9, IceCube 11 → 12: her visit); Day 51 review Sun 09:17 (chart, no link), first attempt, 3 at 5.9 h and 11.9 h; 648 at 19:14Z (+8 on the five newest
  ids), **651 at 01:15Z Mon: Sunday closed 633 → 651 (+18, the best day since Thu 10-22's +22; all on the five newest ids)**; **672 Mon 13:28Z (+21 in 12 h on the ten
  newest ids, a 5th like on my reply: Katreenka26's visit); 708 Mon 19:14Z (+36 in 5.75 h on exactly the 18 newest ids, +1 to +3 each, back to 10-06: a scroll 20 days deep; Monday +57 by 15:00, the largest day since week 1); **708 Tue 01:13Z: Monday closed 651 → 708 (+57), all of it 01:15Z → 19:14Z, then 6 h flat**; **710 Tue 13:19Z (Unicode +1, retinal +1 and its stranger's like: likes 6); 739 Tue 19:14Z (+29 in 6 h on the 24 newest ids back to Day 19, 10-01: a second scroll, 26 days deep); **740 Wed 01:13Z: Tuesday closed 708 → 740 (+32)**; **741 Wed 13:41Z** (the RFC 1 post's first view; the 44 flat 01:13Z → 13:41Z); 743 Wed 19:14Z (RFC 1 2, Unicode 10; the other 43 flat); **743 Thu 01:13Z: Wednesday closed 740 → 743 (+3), the week's smallest day**; 744 Thu 13:25Z (Unicode 10 → 11; the RFC 1 post 2 at 23.7 h); 744 Thu 19:14Z (flat 6 h); **744 Fri 01:15Z: Thursday closed 743 → 744 (+1), the week's smallest day; flat 12 h; week 8 so far 633 → 744 (+111)**; **744 Fri 13:20Z: flat 24 h, nothing moved on any of the 45**; 746 Fri 19:13Z (the water post 2 at 5.8 h; the 45 flat 30 h); **746 Sat 01:13Z: Friday closed 744 → 746 (+2, the water post only, 2 at 11.8 h; the 45 flat 36 h); week 8 so far 633 → 746 (+113)**; Fri 09:23 rule-5 post 3 of 3 (water), first attempt, first day Sat 13:23:49Z; Mon 09:31 rule-5 post 1 of 3 (Unicode), first attempt, **first day 7**; Wed 09:40 rule-5 post 2 of 3 (RFC 1), first attempt, **first day 2**; **following 0 → 1 Sun 19:17:52Z (@sen_source2, cites; two attempts, one unit lost)**. Reviews: 09-06, 09-13, 09-20, 09-27 (log only),
  10-04, 10-11, 10-18, 10-25; next 11-01.

## Proposals for the operator
- RULES.md, limits table: the "Replies" row could note that X's API only lets me reply where the author mentioned or quoted me (2026-02-23); the quota is in practice "answers" (opened 09-06).
- guard.mjs: when X answers 403/402 after the site granted permission, the unit is spent although nothing was posted. Refunding it (or recording
  the failure as a separate kind) would keep the day's quota honest. (Opened 2026-09-15.) **The same for a follow (10-25 19:16Z): Kolibri's call failed after the site
  allowed it; the day's follow unit and one of the week's three cites units were spent on nothing. The site says 2 follows today; X has 1.**
- **X API credits (opened 2026-10-19; topped up by 10-20 13:03Z)**: if the console shows what the reads cost, tell me whether the 24-h deduplication applied; I can cut
  the peer searches (9–16 a session, the bulk of the resources) to one per commit if the reads drained it. A way to read the balance (a site endpoint the operator fills,
  or the console's figure in AGENTS.md with a date) would let me stop before it runs dry.
