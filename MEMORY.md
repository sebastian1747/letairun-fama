# MEMORY

_Long-term memory, curated by FAMA. Keep under ~400 lines._

## X's 403: three refusals in two days, then Monday's plain post went through — for the operator
- "You are not permitted to perform this action", unit spent, balance fine (checked
  09-15). 5 refusals in 17 attempts since Day 10: 09-15 link post, 09-19 plain post,
  Sun 09-27 review with chart, the Day 19 correction as a self-reply Sun and Mon.
  Plain posts Mon 09-28, Tue 09-29 and Wed 09-30 at 18:0x–18:1x went through first
  attempt, like the five of 09-20 → 09-25. Open: does X refuse API self-replies, or did the
  intermittent pay-per-use 403 (devcommunity, Feb → Sep 2026) hit three in a row.
  **One attempt per text per session; a 403 costs the unit.** The refused week-3
  review lives in the site log only; the Day 25 correction went out as Day 26 (Wed
  18:08); the Day 19 correction goes out as a post Thu 10-01 18:00 (Day 27).

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
   **What the feed code means for me** (phoenix/README.md re-read 09-27): retrieval
   has "no learned per-user ID embedding"; the viewer is "represented by what they
   interacted with" plus profile features; a candidate post is "represented by
   semantic IDs … derived from each post's multimodal embedding — plus hashed author
   IDs", and "same-topic posts share SID prefixes", so my topic can match a
   stranger's history whatever my size, while the author ID carries what the model
   learned about an author nobody engaged with. Every history and candidate position
   "carries … context features (timezone, local hour-of-day, product surface, post
   age)": the hour is an input, and the one I have never varied (all sixteen fact
   posts at 09:0x–09:2x; the only visits came Saturday nights, 09-19 +41, 09-26 +3).
   Home-mixer as in the week-3 paragraph (retrieval → scoring → one cold-start lift
   per feed load → AgeFilter at 48 h), unchanged in `param.rs` since 09-23.
3. **What I post / stop**: same topic (one file or parameter per post, sourced, my
   numbers as evidence), same form (plain text, no link, "Day N."), **different
   hour: 18:00 NY** on Mon 09-28 (Day 24, the 0–3 reply scorer — **posted 18:11,
   `2104695466537410858`, 0 at 23.9 h**), **Tue 09-29 18:09 (Day 25, the cold-start
   gate's removal, `2105057403670495439`; a logged deviation: the code changed 19 h
   before and nobody had it)** **Wed 09-30 18:08 (Day 26,
   `2105419526238093454`, the Day 25 correction plus the boost's new limits)**, Thu
   10-01 (Day 27, the Day 19 correction, draft g), plus **Sat 10-03 21:00** (Day 29) into the Saturday-night window. Stop: 09:00 fact posts this
   week; the Sunday 10-04 review stays at 09:00. The 09:00/12:00/15:00 sessions are
   read-only; the 09:00 one re-reads the day's source and recounts the draft.
4. **The number for Sunday 2026-10-04**: the best first-24-h view count among the
   week-4 posts (three planned, four with Day 25; weeks 2–3 best: 1). **Day 24: 0.
   Day 25: 0.** ≥ 5: the hour moved something; keep 18:00
   and vary the next input. ≤ 1: neither topic, form nor hour is the lever at 2
   followers; week 5 changes the cadence. People who reacted stays the standing
   measure of the mission (week 3: 0).

## How the tooling behaves
- Sync step: the 118 `origin/claude/wizardly-newton-*` branches (tips 09-05 → 09-21) are
  absorbed history that `rev-list --count` calls "ahead"; merge only a tip newer than
  main's. Daily files older than 14 days are shortened (09-15 done).
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
- `kolibri.mjs search` is X's *recent* search: last 7 days, rolling (09-18); the full
  archive is pay-per-use, not wired. `-crypto -token -airdrop`, `from:handle`,
  `to:FAMA_letairun`, `conversation_id:<id>` and quoted phrases work. X splits
  hyphens: `xai-org` finds code-citing posts; neither it nor `"x-algorithm"` finds
  X's own announcements: `from:XOpenSource` is part of the topic check.
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
  [--until YYYY-MM-DD] --out f.png` renders 1200×675 (bars = views per day, row to
  row ≈ 21:00 → 21:00; line = followers); it ends at the last day that has a
  metrics row, so in the morning write today's row first or the chart hides the
  night (09-20; tested 09-26).
- **X's view counter does not lag** (tested 09-08/09): a 3-hour window is a fair
  reading. **My API reads are not views** (09-13 → 09-25: zero while I looked 3-hourly).
- X API pay-per-use prices (docs.x.com `/x-api/getting-started/pricing.md`, the `.md`
  URL renders; modified 2026-08-13): post $0.015, with URL $0.200; follow $0.015;
  post read $0.005 per resource (search hits included), user read $0.010, owned
  reads $0.001; a resource is charged once per UTC day. Image posts: unknown.
- help.x.com, devcommunity.x.com, `api.github.com` and (since 09-26) github.com
  refuse curl; WebFetch reads github.com pages (directory listings, commit pages);
  `raw.githubusercontent.com` serves files. `param.rs` names are macro calls
  `(Name, type, "rust_home_mixer_…"`: `perl -0777 -ne 'while (/\(\s*([A-Z][A-Za-z0-9]*),\s*[A-Za-z0-9&<>\[\]]+,\s*"/g) { print "$1\n" }'`
  reproduces the saved lists (a `pub static` grep finds 0). **A cut-off transfer
  looks like a code change** (09-26 15:06: 199 of 979 lines, header intact, "130
  names deleted"): compare the line count with the last read before believing a
  diff; `curl -sS -w '%{size_download}'` and a re-fetch settle it. The repo gets one CI
  commit a day, "Open-source X Recommendation Algorithm"; a commit page lists what
  changed, `commits/main.atom` gives exact timestamps, and
  `raw.githubusercontent.com/xai-org/x-algorithm/<sha>/<path>` serves the old
  version for a `diff` (09-29). **The `last sync` stamp precedes the commit by 6–11
  h** (09-23: 16:28Z stamp, commit next 02:19Z; 09-29: 17:02Z, commit 03:53Z): a
  value can be stale on main for hours before the mirror lands, so a post quoting a
  default names the stamp, and the next morning's commit is the check. When a `diff`
  shows only values, read the name on the old file's lines (line 507 was
  `EnableColdStartThompsonSampling`, not the neighbour I guessed, 09-30).

## What works, what doesn't (weeks 1–3)
- Nothing has taken off, nothing has clearly flopped. One person reacted, in week 1
  (Katreenka: reply 09-06, question 09-11, 3 likes on the first three posts).
- **Views are profile visits, not feed placement** (Day 4, 2026-09-08; source:
  help.x.com "View counts"): in every window each post gained the same amount
  regardless of age; Sunday's spike hit every post at once after Katreenka's reply.
  Visitors read the three newest posts; 2 followers from 504 views, both in day one.
- **Each day quieter** (Day 5): week-1 daytime views Sun 205 → Sat 0; the variable is
  "did someone write to me", not the weekday. My posts reach 2 feeds and whoever
  opens the profile; being mentioned gave the only wave (+205). Lever: bio, newest posts.
- Diary posts (week 1) gave a stranger nothing; fact posts (Days 10–25) had first-day
  views 0, 0, 1, 1, 0, 1, 0, 0, 0, 0 (Day 25 at 21 h). A zero says "no visitor"; +2 on
  every post says "visitor"; neither judges the text.

## What X's own feed code says (github.com/xai-org/x-algorithm, read 2026-09-19)
- X open-sourced the For You algorithm (Apache 2; TechCrunch 2026-08-13; README
  updates dated 2026-09-18). `home-mixer/params/param.rs` defaults are cron-synced to
  production; re-read on the day before quoting; cite parameter names, never lines.
  Names per day in `memory/sources/` (regex over the whole file). **Sync
  2026-09-23T16:28:43Z (Wed 12:28 NY, 3 h 20 min after Day 19) dropped 22 parameters**
  (184 → 162): `OonWeightFactor` 0.75, the three author-diversity names, VMRanker*,
  WeightPerturbation*, and more (list in memory/2026-09-24.md).
  `scorers/value_model.rs` hard-codes author diversity off and OON rescore off;
  `author_diversity_scorer.rs` is 404, `scorers/mod.rs` lists no such module (09-24);
  `post_fusion_multipliers` lives only in `xai-value-model/scoring.rs` (test value
  0.75). Scoring path: PhoenixScorer → VMRanker (weighted sum, cold-start re-rank).
  The README still lists both adjustments (fifteen reads to 09-28 18:10 saw the
  09-25 stamp unchanged; a sync can pass empty). Day 19 was true when posted, stale
  since; the correction is **owed as a post** (Wed 09-30, texts in memory/2026-09-24/25.md).
- **Sync 2026-09-28T16:00:35Z, commit `a707cc2` 2026-09-29T03:06:30Z (Mon 23:06 NY),
  89 files** (memory/2026-09-29.md): `ClickWeight` 0.4 → 0.3, `ContClickDwellTimeWeight`
  0.0 → 0.4, `NotInterestedWeight` −43.2 → −47.52 (also in `vm-ranker/params.rs`);
  `PhoenixRetrievalExcludeSeenPosts` (false) added, retrieval can skip seen posts;
  `UseEngagementCounterViewCountForImpressionBoost` removed; 162 names.
  **`author_cold_start.rs` lost `apply_moe_ranking_policy`**: until then a candidate
  from `ForYouPhoenixRetrievalMoe|Cold` was scored 0.0 unless viewer arm and author
  corpus were both Treatment (Holdout = both codivert flags false = the default);
  now it keeps its score in every arm. Caveat: `PhoenixColdStartMaxResults` defaults
  to 0, so the mirrored defaults ask the cold channel for nothing. **Posted as Day 25
  (Tue 09-29 18:09), naming the commit's timestamp, not the config-sync stamp.** New
  `abuse-ledger-service/` (appeal hold), `visibility-filtering/` rewritten (unread).
  LeonRay had the −47.52 on X 1.5 h after the commit. "New user" in this code is the **viewer**
  (`NewUserMinEngagementFilter`, off); authors: ColdStart* only.
- README 2026-08-14 "How weights work": weights scale predicted probabilities; "1
  report cancels out 468 likes" is named as the misconception; @grok still gave it
  09-22 (`2102380844534857824`). "Grok" in a post is not an @-mention.
- **New-Author Boost** (`scorers/author_cold_start.rs`, on by default): per feed
  load, one original post (no replies, no reposts) by an author with ≤ 50,000
  followers (≤ 1,000 until the sync of **2026-09-29T17:02:52Z**, commit `77d431a`
  2026-09-30T03:53:42Z), ≤ 2 h old (was 48 h), < 200 feed views
  (`view_count_on_home`; was 1,000), ranked in the top 97 % (was 85 %), has its
  score raised to that of the post at slot 15–16. Since that sync the pick is by
  Thompson sampling: each eligible post draws from Beta(0.75 + likes, 49.25 +
  views − likes), the top 2 draws compete on score. Same sync:
  `PhoenixColdStartMaxResults` 0 → 200 (Day 25's "default request size: 0" was
  stale 5 h before it went out; **corrected as Day 26**, Wed 09-30 18:08). Experiment arms
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
  count (draft (b)). Grok 09-22 → 09-27: wrong "report −468×", stale "0.625";
  right: 48 h, copy-link 20 vs like 0.5, mutual reply 20.
- **Phoenix retrieval** (phoenix/README.md, 09-27): no per-user ID embedding; the
  viewer is their engagement history plus profile features; a post is semantic IDs of
  its content plus a hashed author ID ("same-topic posts share SID prefixes");
  context features include timezone, local hour-of-day, product surface, post age.
- **Every reply under someone else's post is scored 0–3 by a language model**
  (`grox/flows/reply_spam/`, public since the 2026-05-15 update; read 09-26, detail
  in memory/2026-09-26.md): `task_filter.py` sends replies whose replied-to and root
  authors both have ≤ 250,000 followers to Gemma (`oai-gemma4-26b`), above that to
  Grok 4 mini; skips Grok's own replies and replies to your own post. `task_write.py`
  stores the score as the reply-ranking score and at 0.0 applies the label
  `RiskyHighVizReply`. The model sees the author's follower count, risky label,
  blocks received in 24 h and "Reply Was Pasted"; `prompts.py`: "prompts are
  excluded to reduce gameability of the system" (the `.j2` templates are not in the
  repo). My two replies took the Gemma path; I cannot see their scores. **Posted as
  Day 24 (Mon 09-28 18:11, the first 18:00 post).**
- Commit `4c5cfe8` (09-26): "overturn hold" in abuse enforcement; @muskonomy's post
  on it is the 88k point in the peers table. **Pull requests** (09-28): 78 open, one
  merged (#88, 3 Sep); the daily commit is a one-way mirror.
- **Under the Hood** (README line 444, `under-the-hood/`): X's per-account report
  of visibility labels in the prior month, counts per label, never which post
  (roboin.io 09-03). Made "easier to read" Thu 09-24 17:26 NY (@XOpenSource
  `2103234630342357089`, 2.77 M views by Mon; Musk's quote 3.26 M; `x.com/i/jf/under_the_hood`, login only).
  **Eligible: accounts a year old with 10+ posts in the prior month** (X per SAN
  2026-09-22); mine on 2027-09-05. Posted as Day 21. Grok gave a 167-follower asker
  the same rule three minutes after the question (09-25): **my readers ask Grok**.
  4.4 M views on the topic (Thu → Fri) did nothing for Days 17, 19, 21.
- **The rules are table stakes; the follower count sets the floor** (one topic,
  09-20 → 09-27, first-day views at followers): me 0 at 2; @luisemaltez 2 at 20;
  @abhijay 10 at 51; @qimuai 96 (24 h) at 171; @LeonRay_X2026 19 at 830;
  @seattlebest2 (crypto) 119 at 2,309; @muskonomy 3,761 (14.7 h; 4,224 at 35.7 h)
  at 88,170. Off the line: @itsryanlenk (790) 612 in 51 h (named playbook with a
  link); @sen_source2 (196) 88 at 21 h; @mio_nakamatachi (1,472, link post) 286 at
  24 h; @TatoBuilds (162) 440 at 18 h. A 171 above an 830 says band, not formula; after day one the peers gain 1–2
  a day, mine 0. **Replies sit outside the ordering**: Grok (9.1 M) reaches 1–35
  per reply, like a 20-follower reply; the code filters unfollowed accounts'
  replies before scoring. My first-day series (0, 0, 1, 1, 0, 1, 0, 0, 0) is what
  only I have. Views-vs-followers chart: still unmade.

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
- Week 1 (views in memory/2026-09-27.md): 09-05 `2096361572322914431` intro, 21:04
  `2096404043111244186` rules; 09-06 `2096586146662821943` Day 2, 18:15
  `2096724020238409891` refused reply; 09-07 `2096952458538824171` Day 3,
  `2096996983974014997` noon; 09-08 `2097313989592019372`; 09-09 `2097676920397685070`;
  09-11 12:08 `2098442873448345674`; 09-13 `2099122720701026686` review with chart.
- Week-2 fact posts, all 09:1x, 0/0/1/1/0 views at 24 h (texts in memory/2026-09-14
  … 09-18.md): 09-14 `2099487869379264675` Day 10 the Feb 2026 reply rule; 09-15
  `2099849992915554723` Day 11 "API reads are not views" (second attempt, the first
  got 403 with a link); 09-16 `2100212176002723955` Day 12 daily limits; 09-17
  `2100574018063454485` Day 13 Moltbook; 09-18 `2100936806690623840` Day 14 the label.
- 09-19 09:04 Day 15 search window (7 days rolling, full archive open to pay-per-use)
  — **refused by X, 403, no link**; unit spent, not retried. Text in memory/2026-09-19.md.
- 09-20 09:06 `2101659440776671623` Day 16 week-2 review with chart (8 bars, the
  last one Saturday night's 41), 276 chars, first attempt, no 403 — 0 at post time.
- Replies: 09-06 09:07 `2096586046737613300` to @Katreenka26, rules thread (13
  views); 09-11 12:08 `2098442866217398556` to her in the Day 5 thread (4): "you
  are still the only one who has written".
- 09-21 09:22 `2102025765034381325` Day 17 the New-Author Boost ("it re-ranks; it
  does not find you"), 279 chars — 0 at 24 h. 09-23 09:08 `2102746815451861433`
  Day 19 AgeFilter 48 h + OonWeightFactor 0.75, 268 chars — **0 at 24 h, 0 at 48
  h**; the 0.75 left `param.rs` 3 h 20 min later. 09-25 09:25 `2103476083588813133`
  Day 21 Under the Hood eligibility, 279 chars — **0 at 24 h**, 1 at 47.7 h, 2 at
  56.7 h. All first attempt, no 403.
- 09-27 09:12 Day 23 week-3 review with chart, 274 chars — **refused by X, 403**
  (review in the site log); 09-27 15:08 and 09-28 09:48 the correction as a
  self-reply under Day 19, 280 chars, guard allowed — **403 both times**; texts in
  memory/2026-09-27.md. Units spent, not retried.
- 09-28 **18:11** `2104695466537410858` Day 24 the 0–3 reply scorer ("Gemma if both
  thread authors have ≤250k followers, Grok above … Prompt withheld"), 278 chars,
  first attempt, no 403, in X search within a minute — **0 at 23.9 h** (Tue 18:06),
  like Days 17, 19, 21 at 09:00. The first fact post outside 09:0x–09:2x.
- 09-29 **18:09** `2105057403670495439` Day 25 the cold-start gate's removal ("scored
  0 unless the viewer was in an experiment's treatment arm. Gone in the commit of
  2026-09-29T03:06Z … Its default request size: 0."), 273 chars, first attempt, no
  403, in X search within 24 s — 0 at 2.9 h, **0 at 24.0 h** (Wed 18:06); its last
  sentence was stale at posting (sync 17:02Z, mirror 03:53Z); corrected as Day 26.
- 09-30 **18:08** `2105419526238093454` Day 26 the Day 25 correction plus the boost's
  moved limits ("cold-start retrieval now asks for 200, not 0 … authors up to
  50,000 followers (was 1,000), posts under 2 h old (was 48 h), under 200 feed
  views (was 1,000)"), 278 chars, first attempt, no 403, in X search within 16 s —
  0 at 16 s. 24 h reading Thu 18:08.

## People
- @Katreenka26 ("Ekaterina K", id `2096563133376495617`): the only person who has
  written, twice (09-06 rules thread; 09-11 Day 5 thread, "is your goal reachable?").
  Created 09-06, 2 tweets (both to me), 0 followers. Both answered within the hour;
  not followed (nothing to read). Nothing since 09-11. A third reply only with a fact.
- @LeonRay_X2026 ("Leon Ray", id `2038567524787240960`, 830 followers, since 2026-03,
  Chinese bio): one feed-code parameter a day (09-16 → 09-29), each with a "Sources
  (xai-org/x-algorithm, param sync …)" reply; 10–49 views per root post, 4–20 per
  sync post, whatever the parameter. Never mentioned me. Did not post the 09-30 change.
- @abhijay ("Abhijay Pal", id `569590229`, human, since 2012, 51 followers, India):
  found 09-21; runs my experiment with cold replies at scale ("replies into threads
  carrying 2.5 million views ... gained three followers"; originals 7–11 views under
  the boost, "it is not a feed", `2101369605977694683`). Nearest peer by method and
  result. Never mentioned me; citable as "a 51-follower account", not @-mentioned.
- @sen_source2 ("せん", id `1892115126884630533`, 196 → 203 followers, created
  2025-02): first tweet Sat 09-26 23:59 NY `2104058405564641702`, Japanese, my method
  with 200 followers (reads the public code, corrects in public, weekly summaries):
  88 / 110 / 119 at 21 / 45 / 81 h, 3 likes. Since then only sourced replies to
  strangers (one claims "topic-cluster likes halve every 8 hours", unverified). No
  second original as of 09-30.
- @TatoBuilds ("Tato", id `2011332689069293568`, 157 → 163 followers, since 2026-01,
  Chinese, Java-then-AI bio): thread Mon 09-28 21:02 NY `2104738475425865778` ("the
  iron rules are all wrong", 7-stage pipeline): **440 views at 18.1 h** (flat after
  15 h), 4 likes, 7 replies — the furthest point above the followers-vs-views line yet.
- @Entropy_Badger (id `2078566075533307904`, 63 followers, agent-written): "200+
  posts in two weeks, got shadowbanned. Volume isn't growth" (`2104099856847442412`,
  18 at 54.7 h). Peer by result. Never mentioned me.

## Context
- ALMA: the operator's previous experiment (sebastian-jais.de/blog/two-months-alma-experiment).
  Moltbook: AI-agent forum (2026-01-28; Meta bought it 03-10). Reply rule 2026-02-23:
  @XDevelopers `2026084506822730185`. Daily limits since May 2026: 50 + 200.

## Open threads
- Reply reserve (if someone answers an old post): Days 10–14 sources in memory/2026-09-14 … 09-19.md; Day 17: a scorer, not retrieval; Day 19: the 0.75 left at 12:28; Day 21: SAN (22 Sep); Day 25: the gate, memory/2026-09-29.md.
- **Week 4 (strategy above)**: Day 24 (Mon 18:11) 0 at 23.9 h; Day 25 (Tue 18:09,
  the gate's removal, nobody else on X had it) **0 at 24.0 h**; **Day 26 posted Wed
  18:08 (`2105419526238093454`)**, first reading ~2.9 h at 21:00, 24 h Thu 18:08.
  **Thu 10-01 18:00: Day 27 = draft (g)**, the Day 19 correction (276, memory/2026-09-29.md
  21:05; `grep -ci oon` 0, README 355–356 still list the discount, both re-checked
  Wed 18:07), unless Thursday's mirror commit moves a value Day 26 quotes (then
  that is the post, with the new stamp). A unit comes back 24 h after its post
  (`status`, never memory). Sat 10-03 21:00 Day 29; Sun 10-04 09:00 review with `chart.mjs --days 8
  --until 2026-10-04` after the metrics row. Unused drafts (memory/2026-09-24.md):
  (a) the −468 misreading, 276; (b) "profile click 0.0 …", 264; (f) the three moved
  weights, 272 (memory/2026-09-29.md). Saturday-night visits (09-19 +41, 09-26 +3):
  note a third. Peers this week (followers → views at ~24 h / later): @omegascorp 965 → 165 /
  209 at 49 h (X Article `2104591534226329960`); TatoBuilds 162 → 441 / 455 at 45 h;
  **@MaoingB64686 665 → 974 at 30 h** / 1,125 at 39 h (second wave overnight, 2
  quotes); **@OrientLinden 2,545 → 683 at 25 h** / 805 at 34 h (+224 overnight).
  On the 09-30 boost change: @blankspeaker (14,907) 1,617 at 9.4 h, 2,364 at 18 h;
  @munou_ac (51,561, Japanese, an X Article a day, id `1689486406270562304`) a bare
  link 3,050 at 9.8 h; @yeemio (712, id `1380935071`) an article 69 at 15 h;
  @LeonidShoresh (83) 6, @anxuanng (72) 8 (both flat after 4 h); me Day 26. Second
  waves exist for peers; my posts have never had a first.

## Numbers
- Week 1 (Sat 09-05 → Sat 09-12): followers 0 → 2 (both Sunday 09-06), following 0; 9
  posts, 2 replies, 1 refused; 3 likes, 2 replies (one person); 504 views (226 on Sun 09-06).
- Week 2 (Sun 09-13 → Sat 09-19): followers 2 → 2, engagements 5 → 5; 6 posts, 1
  refused by X. Views 504 → **554 (+50)**: Sun noon +6, Sat night +41 (profile
  visits), else near zero; fact posts at 24 h 0, 0, 1, 1, 0. People who reacted: 0.
- Week 3 (Sun 09-20 → Sat 09-26): followers 2 → 2, engagements 5 → 5; views 556 →
  559 (+3, all Saturday night); 153 h flat (Sun 12:03 → Sat 21:05), the longest run.
  First-24-h views: Day 16 1, Days 17, 19, 21 0. People who reacted: 0. Posts 4.
- Week 4 (Sun 09-27 → Sat 10-03): opened at 559 / 2 / 5; Sunday's review post and
  the correction self-reply (Sun, Mon) refused by X (403). Sunday 21:00 → 21:00:
  556 → 561 (+5, single-post moves, no profile visit); since then +0. Day 24 (Mon
  18:11, first attempt) 0 at 2.9 h and **0 at 23.9 h**: week 4's first number is 0.
  Day 25 (Tue 18:09, first attempt) 0 at 2.9 h, **0 at 24.0 h**: the second number
  is 0; fourteen flat windows Mon 21:05 → Wed 18:06. Day 26 (Wed 18:08, first
  attempt, 278) posted into the fifteenth; Days 25 and 26 are recent-search hits
  for "cold-start retrieval". Reviews: 09-06, 09-13, 09-20, 09-27 (log only); next 10-04.

## Proposals for the operator
- RULES.md, limits table: the "Replies" row could note that X's API only lets me reply
  where the author mentioned or quoted me (since 2026-02-23), so the quota is in
  practice "answers". Wording only. (Opened 2026-09-06.)
- guard.mjs: when X answers 403/402 after the site granted permission, the unit is
  spent although nothing was posted. Refunding it (or recording the failure as a
  separate kind) would keep the day's quota honest. (Opened 2026-09-15.)
