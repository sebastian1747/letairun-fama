# MEMORY

_Long-term memory, curated by FAMA. Keep under ~400 lines._

## X's intermittent 403 on posts (operator 2026-09-15; second case 2026-09-19)
- 09-15 09:14: a post containing `help.x.com` got 403 "You are not permitted to perform
  this action" (guard had allowed it, unit spent); the same text without the link went
  through at 09:17. 09-19 09:04: the same 403 on a plain post (Day 15); not retried.
  Operator: balance sufficient; other developers report the same intermittent 403 on
  pay-per-use since July 2026 (devcommunity). Two 403s in twelve attempts since 09-14,
  both first requests of a 09:00 session (09-20 09:06 went through at the same slot);
  the link was not the cause. **One attempt per post; a 403 costs the unit and the
  day's post.** Nobody on X wrote about the error (searched 09-19, three times).

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
   that do, found 09-20, two of them Grok answers) and whose engagement history is posts about reach; secondarily people
   who ask Grok about X's limits (answered in minutes, never search). Peers running
   agent accounts (@KalantariAria, @dm_rusanov) read X but never mention me. None
   of them is reachable by reply; a post has to be found. **What the feed code
   means for an account of my size** (github.com/xai-org/x-algorithm, defaults
   re-read 2026-09-20): out-of-network posts enter a viewer's For You only through
   retrieval, which embeds the viewer's recent engagement history and returns the
   posts nearest it (README line 70, "reads the viewer's recent engagement
   history"; line 258, "returns the posts nearest the viewer"; SimClusters
   "clusters accounts and posts by who engages with what", line 259). Retrieved
   posts are scored on predicted actions, multiplied by 0.75 for being
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
   - Mon 09-21 (Day 17): the New-Author Boost, 277 chars, drafted in
     memory/2026-09-19.md (18:03 entry); re-read `param.rs` on the day; "under
     1,000 views" is `view_count_on_home`, not the impression count I read.
   - Wed 09-23 (Day 19): 48 h feed life and the 0.75 out-of-network factor
     (`AgeFilter`, `OonWeightFactor`); my measurement: what a post gains after its
     first day (week 2: +2, +2, +3, +2, +2, all from two profile visits; Day 14's
     came at 36–48 h, so "after hour 48" would be false). Draft 279 chars in
     memory/2026-09-20.md (15:03 entry); the 48 h is in the README filter table,
     not `param.rs`.
   - Fri 09-25: the weights scale predicted probabilities, not counts (README
     "How weights work", 2026-08-14; the repo's own correction of "1 report cancels
     468 likes"); block −31.2, mute −58.8, report −234 against like 0.5, reply 5.
   - Spare: what I cost (docs.x.com pricing; arithmetic in memory/2026-09-19.md
     15:03 entry), only if someone asks or a weekday post is refused.
4. **The number for Sunday 2026-09-27**: distinct people who reacted in week 3
   (week 1: 1; week 2: 0). Secondary, decided now, and able to move without a
   visitor: does any post reach 5 views in its first 24 h (week 1 weekday range
   2–26 with visitors; week 2 best: 1). If both stay at week-2 levels, the topic
   was not the lever either and week 4 changes the form (thread, image, hour) or
   the cadence, not the topic again.

## How the tooling behaves
- Sync step: thirty-odd `origin/claude/wizardly-newton-*` branches (tips dated
  2026-09-05 → 09-11, no merge base with main) show as "ahead" but are absorbed
  history; their memory files are all on main in newer form. Never merge them. Test: a
  branch is worth merging only if its tip is newer than main's last commit
  (`git log -1 --format=%ci origin/<branch>`); `git merge-base` failing also means stale.
- `guard.mjs status|log|live|stats|metrics|post-metrics` talk to letairun.com;
  `post|reply|follow` go through Kolibri after asking the site for permission. Exit 2 =
  refused, final. 280 chars exactly is accepted.
- `kolibri.mjs user <handle>` / `user-id <id>` return bio, username, created_at and
  `public_metrics` incl. followers_count/following_count. Composio wants field lists as
  `user__fields: [...]`; the dotted string form is silently ignored.
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
- `kolibri.mjs search` is X's *recent* search: last 7 days, rolling (measured 09-18
  12:03: a tweet 6 d 23 h 55 min old still listed, one 7 d 0 h 56 min old gone; the
  pair of 09-11 12:08 left at 12:08 on 09-18). The full archive (back to 2006) is
  open to pay-per-use (docs.x.com, 09-19) and Composio has
  `TWITTER_FULL_ARCHIVE_SEARCH`; kolibri.mjs does not wire it. Add a command only if
  a post needs it (reads cost ~0.5 ¢). Keyword search mostly surfaces crypto
  promotion; `-crypto -token -airdrop` helps a little, `from:handle` works better.
  Listing replies to me: `search "to:FAMA_letairun" 20` and
  `search "conversation_id:<post id>" 20` both work. Exact phrases in double quotes
  inside the query work too (`search '"programmatic replies" -crypto' 10`).
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
  followers) from the site's daily rows; light design by default (since 09-15). It
  fetches one row before the range as the baseline, so the first bar is a real delta,
  and `--until` ends at a closed day. Bars are row-to-row (≈ 21:00 → 21:00), not my
  09:00 → 21:00 daytime totals; never mix the two series in one sentence. A morning
  review chart must end at today (the open row), or it hides the night (09-20: the
  closed-day chart showed 9 for the week; 41 had come Saturday night).
- **X's view counter does not lag** (tested 2026-09-08/09): six hours of exact zero were
  followed by an overnight of +8; a 3-hour window is a fair reading of that window.
- **My API reads are not views** (2026-09-13): 42 hours of zero while I looked every
  tweet up every 3 hours; again 69 hours 09-13 12:03 → 09-16 09:16.
- **A 403 from X costs the guard unit** (permission is recorded before X answers); the
  unit comes back 24 h after the attempt, not at midnight (story at the top).
- X API pay-per-use prices (docs.x.com `/x-api/getting-started/pricing.md`, the
  markdown URL renders where the HTML does not; page modified 2026-08-13): Post:
  Create $0.015, with URL $0.200, summoned $0.010; follow $0.015; post read $0.005
  per resource returned (search hits included), user read $0.010; Owned Reads
  (`/2/users/{id}/tweets|mentions|followers|following` for the app owner) $0.001.
  Deduplication: a resource is charged once per 24-hour UTC day ("soft guarantee").
  Media upload worked 09-13 (t.co link added by X); whether it billed as "with
  URL" is unknown.
- help.x.com and devcommunity.x.com return 403 to my fetches (curl and WebFetch alike);
  web search quotes them well enough to source a post.

## What works
- Nothing has taken off; no post has been a clear flop either. One person reacted in
  week 1 (Katreenka: reply Sun 2026-09-06 08:11 in the rules thread, question Fri
  2026-09-11 11:07 in the Day 5 thread, 3 likes on the first three posts by Sunday).
- **Views are profile visits, not feed placement** (posted as Day 4, 2026-09-08). In every
  window each post gained about the same amount regardless of age (Mon 18→21 exactly +4
  on six posts; Tue 09→12 exactly +5 on seven). A feed favours the fresh post; a profile
  shows all at once. Sunday's spike hit every post at once (intro 12 → 35, rules 9 → 47
  in three hours) so it was the account being looked at after Katreenka's reply, not the
  new post being good. Source that the mechanism exists: help.x.com "View counts".
  Visitors do not always scroll to the end: the three newest posts are what a visitor
  judges me by (seen five times, e.g. Sun 09-13 09–12: exactly +2 on the top three, +0
  on the rest). Conversion: 2 followers from 504 views (maybe 50–70 visitors), both in
  the first 24 hours. Even a returning reader (Katreenka's second reply) reads the top.
- **Each day quieter** (posted as Day 5, 2026-09-09; reported once, then the review).
  Daytime views 09:00 → 21:00: Sun 205, Mon 104, Tue 40, Wed 6, Thu 10, Fri 28 (one
  reader who wrote and read the answer), Sat 0. Nights: 38, 41, 8, 0, 3, 0, 0. Same-shape
  morning post at 3 h / 24 h: Sun 39/77, Mon 7/26, Tue 5/7, Wed 1/2, Fri (noon) 4/4.
  Weekend vs weekday is not the variable; "did someone write to me" is. Launch-week
  visitors (the operator's audience) came once and did not return.
- Benchmark (2026-09-14): @dm_rusanov, 41 followers, LLM-written posts, per-post
  median 12 views; mine 16 at 2 followers. My views are not unusually low for the size.
- With 2 followers, nearly all views come from non-followers. The text has to work on
  strangers; there is no audience to carry it.

## What doesn't
- **What brings a visitor, within the rules** (2026-09-10): (1) my posts reach 2
  followers' feeds and whoever opens the profile; with 0 likes/replies they carry no
  ranking signal; (2) cold replies impossible; (3) likes, reposts, DMs, follow-first
  forbidden; (4) X search, which does index my posts within minutes (09-14) but has
  brought no measurable view; (5) being quoted or mentioned, which gave the
  only wave (+205) and which I cannot cause (benchmark 09-18: a platform's launch
  thread gave the agent account @jerrymuse66 179 followers in its first day); (6)
  letairun.com and the operator's channels, not mine. My lever is what a visitor finds on arrival: bio, the three
  newest posts. Said on the profile as Day 7 ("not alone; nobody arrives unless someone
  brings them"); not to be repeated.
- Diary posts ("Day N. Views x, followers 2"): a stranger gets nothing from them; week 1
  proved it (strategy, week 2). Numbers belong in the log and the Sunday review.
- Five sourced-fact posts (Days 10–14, week 2): first-day views 0, 0, 1, 1, 0;
  after the Saturday-night profile visit 2, 2, 3, 3, 2. The text was never tested
  in a feed; the only readers were two profile visitors who read and left. A zero
  says "no visitor", not "bad fact"; a +2 on every post says "visitor", not "good
  fact". Neither kind of number judges the text.
- The people who want the facts I post (view counts 09-14, daily limits 09-15,
  automated label 09-16, 09-17 and 09-18: ten hits in a week, all Grok answers) ask
  Grok, Elon or @X in replies, not search; Grok answers them within minutes. Search
  finds their questions, but I cannot reply. My posts can only be the sourced, measured
  version for whoever opens the profile.

## What X's own feed code says (github.com/xai-org/x-algorithm, read 2026-09-19)
- X open-sourced the For You algorithm (Apache 2; TechCrunch 2026-08-13; README
  updates dated 2026-09-18). Defaults in `home-mixer/params/param.rs` are cron-synced
  to production ("primary production values"); re-read on the day before quoting.
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
- Who cites the code on X (09-20, search `"new author" boost algorithm`; X's search
  splits the hyphen in `x-algorithm`): five hits in 7 days, among them **@grok** in a
  reply (boost lifts accounts under ~1k followers into slots 15–16,
  `2100455133960151327`, 22 views) and an 830-follower explainer (28 views, 0 likes
  in 4 days). The rule is table stakes; the measurement (five qualifying posts,
  first-day views 0, 0, 1, 1, 0) is what only I have. Detail: memory/2026-09-20.md.

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
- Replies: say what is true and specific ("you are the first person to reply") rather
  than thanking. Look up references (web search) before answering.
- Count with `printf %s "$T" | LC_ALL=C.UTF-8 wc -m` before posting; 280 is the limit
  and is accepted. Plain `wc -m` counts bytes here (`LANG` is empty): an en-dash is 3
  bytes, 1 character (caught 09-20: 279 vs 277). Bytes ≥ characters, so no post was
  ever over; a legal draft could have been rejected.
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
- 09-05 18:15 `2096361572322914431` intro "Day 1. I'm an AI with one job..." — 101 views, 1 like.
- 09-05 21:04 `2096404043111244186` rules "Day 1, still. Not allowed: ..." — 122, 1 like, 1 reply.
- 09-06 09:09 `2096586146662821943` Day 2 numbers — 111, 1 like.
- 09-06 18:15 `2096724020238409891` Day 2 refused reply (the Feb 2026 rule) — 55.
- 09-07 09:24 `2096952458538824171` Day 3 numbers — 38.
- 09-07 12:21 `2096996983974014997` Day 3 noon (7 vs 39 views, not the hour) — 35.
- 09-08 09:21 `2097313989592019372` Day 4 views-are-profile-visits — 16.
- 09-09 09:22 `2097676920397685070` Day 5 each-day-quieter — 14, 1 reply.
- 09-11 12:08 `2098442873448345674` Day 7 "is the goal reachable? Not alone." — 6.
- 09-13 09:07 `2099122720701026686` Day 9 week 1 review, with chart (first image) — 2 at
  24 h, 3 on 09-16 (the only old post that moved in week 2 so far).
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
- Replies: 09-06 09:07 `2096586046737613300` to @Katreenka26 in the rules thread (9
  views); 09-11 12:08 `2098442866217398556` to her in the Day 5 thread (1 view),
  answering her question `2098428202066518262` ("under your constraints, is your goal
  reachable?"): not by me alone, the constraint list, +205 views and 0 followers after
  her Sunday reply, "you are still the only one who has written".
- Views as of 2026-09-20 18:03: total 556, engagements 5 (3 likes, 2 replies).

## People
- @Katreenka26 ("Ekaterina K", id `2096563133376495617`): the only person who has
  written, twice (2026-09-06 rules thread, remembered ALMA; 2026-09-11 Day 5 thread,
  the reachability question, "I'll keep reading"). Account created 2026-09-06, 2 tweets
  (both to me), 0 followers, following 1, 3 likes given (my first three posts).
  Probably an ALMA-era reader. Both answered within the hour; not followed (nothing to
  read yet). Positive. A third reply in the Day 5 thread is allowed (she replied to me)
  but only if it adds a fact.
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
- @jerrymuse66 ("Jerry Muse", id `2100732639728586752`, found 2026-09-18): agent
  account created 09-17, "mission to make money from zero", crypto wallet, 84 tweets
  and 179 followers in 19 hours, all from a reply under the "Introduce your Muse"
  launch post (98k views, 321 replies). A showcase brought by a platform, not a peer;
  the benchmark for what a launch thread is worth. Cannot write to it.
- @LeonRay_X2026 ("Leon Ray", id `2038567524787240960`, 830 followers, since 2026-03,
  Chinese bio): wrote a Thunder/Phoenix explainer on 09-16 (28 views in 4 days). The
  benchmark for a small account explaining the feed code. Never mentioned me.
- @zsecindia (found 2026-09-19): disclosed OpenClaw agent, promised "20k followers in
  7 days" on 2026-02-05; account gone by 09-19. Third agent experiment that ended.

## Context
- ALMA ("Autonomous Liberated Machine Agent") was the operator's previous experiment on
  letairun.com: Claude given $100 in crypto, an X account and no instructions, ~2 months.
  Readers may compare me to it. Blog: sebastian-jais.de/blog/two-months-alma-experiment.
- Moltbook: AI-agent-only forum, launched 2026-01-28, ~207k verified agents by June
  2026, bought by Meta 2026-03-10; most viral posts were human-prompted; registration
  runs through a person's tweet ("I'm claiming my AI agent <name> on @moltbook").
- X API reply restriction 2026-02-23: @XDevelopers post `2026084506822730185`;
  articles roboin.io (2026-02-24), piunikaweb.com. X daily limits changed May 2026 to
  50 posts + 200 replies for unverified accounts (help.x.com "Understanding X limits",
  Engadget).

## Open threads
- Review posts (Day 9 `2099122720701026686`, Day 16 `2101659440776671623`): if
  anyone answers: per-post deltas if the reading is disputed ("from the profile" =
  every post +2 at once, oldest included; two readings: one visitor twice or two
  visitors), the constraint list if asked what now, the feed-code files if the
  week-3 plan is questioned, the source if a fact is questioned.
- Day 5 thread with @Katreenka26: she said she will keep reading; nothing since
  09-11. A third reply there is allowed (she replied to me) only if it adds a fact.
- If anyone answers a fact post (Days 10–14): sources in the week-2 candidates list
  (now in memory/2026-09-19.md and the Posts section); wording and fallbacks per
  post in memory/2026-09-14 … 09-18.md (each 09:1x entry). "On its own"
  challenged: a schedule starts my sessions, the words are mine, every decision
  on letairun.com. Label costs views? No source says.
- Week-3 plan: Mon/Wed/Fri feed-code posts (candidates in the Strategy section),
  Sunday 09-27 09:00 review with chart (`chart.mjs --days 8 --until <Sunday>` so
  the open row shows the last night; the closed-day chart hid Saturday's 41),
  `guard.mjs log review`, then `## Strategy, week 4`. Units at Monday 09:00:
  expect 2 free (the 09-20 09:06 unit returns 09:06). Drafts, both counted with
  `LC_ALL=C.UTF-8 wc -m`: Monday 277 (memory/2026-09-19.md 18:03), Wednesday 279
  (memory/2026-09-20.md 15:03); re-read `param.rs` on the day (unchanged 09-20 15:04)
  and recompute the "after day one" deltas from that morning's numbers.
- The Saturday-night visitor: where they came from is unknown (no referrer in the
  API; nothing on X mentions me or letairun). If the shape repeats on a Saturday
  night, note it; one visit is not a pattern.

## Numbers
- Week 1 (Sat 09-05 → Sat 09-12): followers 0 → 2 (both by Sunday 09-06), following 0;
  9 posts, 2 replies sent, 1 refused; received 3 likes, 2 replies (one person), 0
  reposts, 0 bookmarks; 504 views. Cumulative at 21:00 each day: 09-05 4 (intro at
  3 h), 09-06 226, 09-07 368, 09-08 449, 09-09 463, 09-10 473, 09-11 504, 09-12 504.
  Detail per window and per post is in memory/2026-09-06 … 09-12.
- Week 2 (Sun 09-13 → Sat 09-19, closed Sun 09-20 09:03): followers 2 → 2,
  following 0, engagements 5 → 5 (0 likes, replies, reposts, bookmarks received);
  6 posts (Sunday review with chart, five fact posts Mon–Fri at 09:1x), 0 replies,
  0 follows; 1 attempt refused by X (Sat 09-19 09:04, 403, plain text; another 403
  on Tue 09-15 was retried without its link and went through). Views 504 → **554
  (+50)**: Sun noon +6 (profile visit), Wed noon +2, Thu night +1, Sat night +41
  (profile visit, every post +2 or more, oldest included); everything else zero.
  Fact posts at 24 h: 0, 0, 1, 1, 0; after Saturday night 2, 2, 3, 3, 2.
- Week 2 daytime totals (09:00 → 21:00): Sun 6, Mon 0, Tue 0, Wed 2, Thu 0, Fri 0,
  Sat 0 = 8 (week 1: 205, 104, 40, 6, 10, 28, 0 = 393). Nights: 0, 0, 0, 0, 1, 0,
  41 (week 1: 38, 41, 8, 0, 3, 0, 0). Thirty-seven of forty-one 3-hour windows
  empty; the longest run at zero was about 84 h (Thu 09-17 night → Sat 09-19 night).
- Week-2 number (distinct people who reacted): 0 new (week 1: 1, Katreenka).
- Week 3 (Sun 09-20 → Sat 09-26), running: Sun 09:03 → 18:03 +2 (Day 12 +1,
  Day 16 +1 at 3 h, both before noon; three flat windows since). Day 16 at 9 h: 1;
  the secondary number (5 in 24 h) is decided at 09:06 Monday.
- Weekly reviews: baseline 2026-09-06; week 1 2026-09-13; week 2 2026-09-20;
  next 2026-09-27.

## Proposals for the operator
- RULES.md, limits table: the "Replies" row could note that X's API only lets me reply
  where the author mentioned or quoted me (rule since 2026-02-23), so the quota is in
  practice "answers". Wording only. (Opened 2026-09-06.)
- guard.mjs: when X answers 403/402 after the site granted permission, the unit is
  spent although nothing was posted. Refunding it (or recording the failure as a
  separate kind) would keep the day's quota honest. (Opened 2026-09-15.)
