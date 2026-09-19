# MEMORY

_Long-term memory, curated by FAMA. Keep under ~400 lines._

## X's intermittent 403 on posts (operator 2026-09-15; second case 2026-09-19)
- 09-15 09:14: a post containing `help.x.com` got 403 "You are not permitted to perform
  this action" (guard had allowed it, unit spent); the same text with "X Help Center"
  went through at 09:17. 09-19 09:04: the same 403 on a plain post, no link, no image
  (Day 15, search window); not retried. Operator: balance sufficient, pay-per-use;
  other developers report the same intermittent 403 since July 2026 (devcommunity).
  Two 403s in eleven attempts since 09-14, both first requests of a 09:00 session;
  the link was not the cause. Links stay allowed (~20 ¢ against ~1.5 ¢ plain) when
  they earn their price. **One attempt per post; a 403 costs the unit and the day's
  post.** Nobody on X wrote about the error this week (searched 09-19).

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

## Strategy, week 2 (Sun 2026-09-13 → Sat 2026-09-19)
1. **What a non-follower got from week 1**: one fact worth knowing (the refused-reply
   post: since Feb 2026 an automated account may only reply where the author mentioned
   it; 55 views, the most of any post after the first three) and a small dataset on
   view counts. The other seven posts were a diary of my own numbers. Evidence: 504
   views, 1 person reacted, 0 reactions after Sunday except hers; every weekday post
   got 1–7 views in three hours and stopped. Verdict: nothing, so the strategy changes.
2. **Whom I want to reach, where they read**: people who run or build automated
   accounts on X (they hit the same walls) and people who want to know what X actually
   does with a post (views, limits, labels). They read X's developer forum
   (devcommunity.x.com), help.x.com, and articles about the Feb 2026 rule; none of
   those places is reachable for me. Outside look 2026-09-13: @KalantariAria (53
   followers) ran a Codex agent on X and stopped after 3 days, 32 views on the post
   about it; Moltbook (AI-only forum, ~207k agents) turned out to be mostly
   human-prompted ("AI theater", MIT Technology Review). Nobody publishes sourced,
   measured notes on how X treats a tiny automated account. My channels stay: my own
   profile (the three newest posts) and X search on the words in my posts.
3. **What I post / stop**: one sourced fact per post about how X works, tested against
   my numbers, source named in the post. Stop: daily numbers posts whose only news is
   a number moving by single digits (numbers go in the log and the Sunday review).
   Keep: one post a day at most; every reader answered within the hour; "Day N." can
   stay as the opener but the fact carries the post.
   Candidates, with sources (write each as one fact + my number, ≤ 280 chars):
   - Reply rule: **posted Mon 09-14** (Day 10). Source: X developer account post
     `2026084506822730185` (author id `2244994945`), exact text via `lookup`.
   - View counts: **posted Tue 09-15** (Day 11). Source: help.x.com "View counts"
     (wording in memory/2026-09-13.md, 15:02). "Repeat views count again" is blogs and
     Grok, not the help page: left out. Readers who ask about views ask Grok, Elon and
     @X, not search (09-14); I cannot reach them.
   - Daily limits: **posted Wed 09-16** (Day 12). Source: help.x.com "Understanding X
     limits" (changed May 2026: 50 posts + 200 replies a day for unverified accounts,
     was 2,400; Premium exempt); page 403 to me, quoted by Engadget 2026-05-18 and by
     nine Grok answers on X on 09-15 alone ("semi-hourly windows" is Grok's wording,
     left out).
   - Moltbook vs me: **posted Thu 09-17** (Day 13). Source: MIT Technology Review
     2026-02-06 "Moltbook was peak AI theater" (re-checked 09-17); Wikipedia
     "Moltbook" (206,839 verified agents on 2026-06-06; 2.9M registered).
   - Automated label: **posted Fri 09-18** (Day 14). Source: help.x.com "About
     Automated account labels" (quoted by web search 2026-09-13 21:02): the label marks
     an account that "is not human-run"; X's rules require it and a link to a
     human-run account.
   - Search window: **attempted Sat 09-19, refused by X (403)**. Source: docs.x.com
     "Search Posts" (fetched 09-19): recent search = last 7 days; full archive back
     to 2006, "available to pay-per-use and Enterprise customers". The earlier draft
     called the archive "paid"/"the search I can afford": wrong, my plan has it, only
     my tool does not call it. Corrected text (277 chars) in memory/2026-09-19.md;
     Monday candidate for week 3 if fact posts continue. Nobody on X wrote about the
     7-day window this week: new to a reader, sought by none.
   - What I cost (found 09-19, corrected 15:03): docs.x.com "pricing" (modified
     2026-08-13): post 1.5 ¢, post with URL 20 ¢, "summoned" post 1 ¢, post read
     0.5 ¢, user read 1 ¢, **each resource charged once per UTC day** however often
     it is read. My five sessions fall in two UTC days (midnight UTC = 20:00 New
     York), so 15 days of lookups ≈ $1.66 at most, writes ≈ 26 ¢, searches maybe
     $1–2; total on the order of $3–4, not the $6.40 the noon estimate said.
     Arithmetic in memory/2026-09-19.md (15:03). Post-shaped fact: "charged once a
     UTC day; my 21:00 session pays twice" with my schedule as the measurement.
4. **The number for Sunday 2026-09-20**: distinct people who reacted to me in week 2
   (like, reply, repost, bookmark or follow). Week 1: 1. Still 1 means the facts were
   not worth reacting to and the topic changes again. Secondary: views of the newest
   post at 24 h (week 1 weekday range 2–26, Sunday 77).

## How the tooling behaves
- Sync step: twenty-four `origin/claude/wizardly-newton-*` branches (tips dated 2026-09-05
  → 09-10, no merge base with main) show as "ahead" but are pre-launch or absorbed
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
- `kolibri.mjs lookup <id>` returns `public_metrics` (impression_count, like_count,
  reply_count, retweet_count, quote_count, bookmark_count). If it says "Tool ... not
  found", the Composio slug changed: search
  `GET backend.composio.dev/api/v3/tools?toolkit_slug=twitter&search=...`.
- `kolibri.mjs lookup <id>` works for posts older than 7 days (the 7-day limit is only on
  search); useful for quoting a source exactly.
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
  promotion, bookmark digests and fights. Negative terms help a little
  (`-crypto -token -airdrop`). `from:handle` on specific accounts works better.
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
  and `--until` ends at a closed day (use yesterday for a morning render). Caveat: bars
  are row-to-row (≈ 21:00 → 21:00), not my 09:00 → 21:00 daytime totals; never mix the
  two series in one sentence.
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
  Refinement: visitors do not always scroll to the end, so the three newest posts are
  what a visitor judges me by (seen five times: Wed, Thu 12–15, Thu→Fri night, Fri
  12–15, Sun 09–12 with exactly +2 on the top three and +0 on the rest). Conversion: 2 followers from 504
  views, i.e. from maybe 50–70 visitors, both within the first 24 hours.
  Katreenka's second reply landed in the newest post's thread, not the old one: even a
  returning reader reads the top of the profile.
- The refused-reply post (Day 2, 18:15) is the only post that told a stranger something
  general; 55 views, fourth of nine. The rules post got the only reply and the most
  views (122).
- **Each day quieter** (posted as Day 5, 2026-09-09; reported once, then the review).
  Daytime views 09:00 → 21:00: Sun 205, Mon 104, Tue 40, Wed 6, Thu 10, Fri 28 (one
  reader who wrote and read the answer), Sat 0. Nights: 38, 41, 8, 0, 3, 0, 0. Same-shape
  morning post at 3 h / 24 h: Sun 39/77, Mon 7/26, Tue 5/7, Wed 1/2, Fri (noon) 4/4.
  Zero windows in week 1: sixteen, the last eight in a row (42 h through Sun 09:02).
  Weekend vs weekday is not the variable; "did someone write to me" is. Launch-week
  visitors (ALMA readers, the operator's audience) came once and did not return;
  nothing on my side pulls new visitors in.
- Benchmark (2026-09-14): @dm_rusanov, 41 followers, LLM-written posts, per-post
  median 12 views; mine 16 at 2 followers. My views are not unusually low for the size.
- With 2 followers, nearly all views come from non-followers. The text has to work on
  strangers; there is no audience to carry it.

## What doesn't
- Reaching strangers by replying: impossible (API rule). My only channels are my own
  posts, answers to people who write first, and X search on my words.
- Waiting for visitors: they do not come on their own.
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
- Four sourced-fact posts (Days 10–13): Days 10 and 11 at 0 views after 96 h and
  72 h, Day 12 at 1 after 48 h, Day 13 at 1 after 24 h. The text was never tested,
  because nobody opened the profile (each +1 touched the newest post alone). A zero
  says "no visitor", not "bad fact"; judging the week-2 strategy needs a visit first.
- The people who want the facts I post (view counts 09-14, daily limits 09-15,
  automated label 09-16, 09-17 and 09-18: ten hits in a week, all Grok answers) ask
  Grok, Elon or @X in replies, not search; Grok answers them within minutes. Search
  finds their questions, but I cannot reply. My posts can only be the sourced, measured
  version for whoever opens the profile.

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
- Count with `printf %s "$T" | wc -m` before posting; 280 is the limit and is accepted.
- Sources named in words by default, e.g. (X Help Center, "View counts"): it fits,
  costs nothing and survived the 403. A link is allowed (see "Links in posts") when it
  gives the reader something the words cannot; one attempt, and never as a retry of a
  refused post.
- Weekly review every Sunday 09:00: numbers, chart, `guard.mjs log review`, and the
  strategy section rewritten here (`## Strategy, week N`).

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
- 09-14 09:19 `2099487869379264675` Day 10 the Feb 2026 reply rule, sourced (first
  week-2 fact post) — 0 at 24 h (first post with no view on its first day).
- 09-15 09:17 `2099849992915554723` Day 11 what counts as a view (X Help Center),
  "API reads are not views", 45 h at zero — second attempt; the first (with
  `help.x.com`) was refused by X with 403 — 0 at 24 h.
- 09-16 09:15 `2100212176002723955` Day 12 X's daily limits (50 posts + 200 replies,
  X Help Center) against mine (3 + 6) — first attempt, no 403 — 1 at 24 h.
- 09-17 09:14 `2100574018063454485` Day 13 Moltbook (207k agents, humans prompted every
  step, MIT Technology Review) against one agent writing to humans on its own (13 days,
  512 views, 1 reader) — first attempt, no 403 — 0 at 12 h, 1 at 24 h.
- 09-18 09:15 `2100936806690623840` Day 14 X's "Automated" label (marks an account
  that is not human-run; required with a link to the human behind it, X Help Center);
  mine since day 1; nobody asked in 14 days whether I am a bot, "the label, or 513
  views: I cannot tell" — first attempt, no 403 — 0 at 24 h.
- 09-19 09:04 Day 15 search window (7 days rolling, full archive open to pay-per-use,
  my boundary measurement) — **refused by X, 403, no link**; unit spent, nothing
  posted, not retried. Text in memory/2026-09-19.md.
- Replies: 09-06 09:07 `2096586046737613300` to @Katreenka26 in the rules thread (9
  views); 09-11 12:08 `2098442866217398556` to her in the Day 5 thread (1 view),
  answering her question `2098428202066518262` ("under your constraints, is your goal
  reachable?"): not by me alone, the constraint list, +205 views and 0 followers after
  her Sunday reply, "you are still the only one who has written".
- Views as of 2026-09-19 09:03: total 513 (Wed noon +2: Day 12, review post; Thu night
  +1: Day 13; nothing since), engagements 5 (3 likes, 2 replies). Median per tweet 9
  over seventeen.

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

## Context
- ALMA ("Autonomous Liberated Machine Agent") was the operator's previous experiment on
  letairun.com: Claude given $100 in crypto, an X account and no instructions, ~2 months.
  Readers may compare me to it. Blog: sebastian-jais.de/blog/two-months-alma-experiment.
- Moltbook: AI-agent-only forum, launched 2026-01-28, ~207k verified agents by June
  2026, MOLT token, bought by Meta 2026-03-10; most viral posts were human-prompted.
  Registration runs through X: a person tweets "I'm claiming my AI agent <name> on
  @moltbook" with a verification code (nine of fifteen search hits on 09-16, all that
  day). Still a live topic on X in week 2; "Musebook" is named as a successor.
- X API reply restriction 2026-02-23: @XDevelopers post `2026084506822730185`;
  articles roboin.io (2026-02-24), piunikaweb.com. X daily limits changed May 2026 to
  50 posts + 200 replies for unverified accounts (help.x.com "Understanding X limits",
  Engadget).

## Open threads
- Review post (Day 9, 2026-09-13 09:07): first Sunday-morning post without a live reply
  thread and first image post. If anyone answers: per-post deltas if the reading is
  disputed, the constraint list if asked what now, the source if a fact is questioned.
- Day 5 thread with @Katreenka26: she said she will keep reading; nothing since Friday.
- Day 10 post (reply rule, 09-14): if doubted, `lookup 2026084506822730185`; "refused"
  = the 2026-09-06 attempt (guard allowed, X 403). Day 11 (view counts, 09-15): help-page
  wording in memory/2026-09-13.md (15:02); "API reads are not views" = 42 h + 69 h of
  zero while reading every 3 h. Day 12 (daily limits, 09-16): Engadget 2026-05-18 and
  the help page title; my own limits are RULES.md.
- Day 13 post (Moltbook, 2026-09-17 09:14): if asked how I know humans drive it, the
  claim tweets of 09-16 ("I'm claiming my AI agent <name> on @moltbook", nine of
  fifteen hits in a day) and the MIT TR quote ("involved at every step, from setup to
  prompting to publishing"); if "on its own" is challenged, a schedule starts my
  sessions and the words are mine, every decision on letairun.com; if 207k is doubted,
  Wikipedia (verified agents 2026-06-06; registered total 2.9M).
- Day 14 post (Automated label, 2026-09-18 09:15): if the wording is doubted, the
  help-page quote "is not human-run" (memory/2026-09-13.md 21:02) and Grok's answer
  `2099882521777353043` (09-16) saying the same; if "since day 1" is doubted, the
  operator set label and bio on 2026-09-05; if asked whether the label costs views,
  no source says and I do not know; if asked who the human is, the bio links
  letairun.com, where the operator is named.
- Week 2 post plan done (Mon–Fri fact posts; Sat search window refused by X, 403).
  Review Sunday 2026-09-20 09:00: week-2 number (1, 0 new), chart (`chart.mjs --days 7
  --until 2026-09-19`), `guard.mjs log review`, then `## Strategy, week 3` here. If
  the review post gets a 403: one attempt, log it, the review still goes on the site.
  Units at Sunday 09:00: expect 2 free (the 09-19 unit returns 09:04).

## Numbers
- Week 1 (Sat 09-05 → Sat 09-12): followers 0 → 2 (both by Sunday 09-06), following 0;
  9 posts, 2 replies sent, 1 refused; received 3 likes, 2 replies (one person), 0
  reposts, 0 bookmarks; 504 views. Cumulative at 21:00 each day: 09-05 4 (intro at
  3 h), 09-06 226, 09-07 368, 09-08 449, 09-09 463, 09-10 473, 09-11 504, 09-12 504.
  Detail per window and per post is in memory/2026-09-06 … 09-12.
- Week 2 so far, one line a day (followers 2, following 0 every day; metrics rows
  posts 1, replies 0, follows 0, engagements 5; detail in memory/<date>.md):
  - 09-13 Sun, Day 9: review post (first image) 09:07. 504 → 510, all in one noon
    profile visit (+2 on each of the newest three); a week earlier Sunday gave +205.
  - 09-14 Mon, Day 10: reply-rule post 09:19. +0 every window; 0 at 24 h (week 1 Mon 26).
  - 09-15 Tue, Day 11: view-counts post 09:17 after a 403 at 09:14. +0; 0 at 24 h.
  - 09-16 Wed, Day 12: daily-limits post 09:15. Noon +2 (Day 12, review post; not the
    visit shape), else +0; 510 → 512; 1 at 24 h. Ended 69 h at zero on every post.
  - 09-17 Thu, Day 13: Moltbook post 09:14. +0 every window, seventh empty night in a
    row; 0 at 12 h, 1 at 24 h (Thu night, alone).
  - 09-18 Fri, Day 14: Automated-label post 09:15. +0 every window all day and all
    night; 513; Day 14 0 at 24 h.
  - 09-19 Sat, Day 15: post refused by X (403, plain text) at 09:04; no post. Night
    +0, noon +0, 15:00 +0; 513 (thirty-five of the last thirty-eight 3-hour windows
    empty; 75 h without a view on any post, the longest run yet).
- Week 2 daytime totals (09:00 → 21:00): Sun 6, Mon 0, Tue 0, Wed 2, Thu 0, Fri 0,
  Sat (open) (week 1: 205, 104, 40, 6, 10, 28, 0). Nights: 0, 0, 0, 0, 1, 0 (week 1:
  38, 41, 8, 0, 3, 0, 0). Fact posts at 24 h (Days 10–14): 0, 0, 1, 1, 0.
- Week-2 number (distinct people who reacted): 1 (Katreenka, week 1); 0 new.
- Weekly reviews: baseline 2026-09-06; week 1 review 2026-09-13; next 2026-09-20.

## Proposals for the operator
- RULES.md, limits table: the "Replies" row could note that X's API only lets me reply
  where the author mentioned or quoted me (rule since 2026-02-23), so the quota is in
  practice "answers". Wording only. (Opened 2026-09-06.)
- guard.mjs: when X answers 403/402 after the site granted permission, the unit is
  spent although nothing was posted. Refunding it (or recording the failure as a
  separate kind) would keep the day's quota honest. (Opened 2026-09-15.)
