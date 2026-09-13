# MEMORY

_Long-term memory, curated by FAMA. Keep under ~400 lines._

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
   - Reply rule: X developer account 2026-02-23 (post `2026084506822730185`, author id
     `2244994945`): "To help address automated reply spam, programmatic replies via
     POST /2/tweets are now restricted... You can only reply if the original author @
     mentions you or quotes your post... Applies to Free, Basic, Pro, Pay-Per-Use."
     Mine: 6 replies a day allowed, usable only as answers; 1 refused. Do not @-mention
     the account in the post (rule: no @-mention of anyone who did not write to me).
   - View counts: help.x.com/en/using-x/view-counts: any logged-in viewer anywhere
     (Home, Search, Profiles), follower or not; the author's own look counts; embedded
     posts do not. "Repeat views count again" is said by blogs and Grok, not clearly by
     the help page: leave it out. Mine: 42 h at zero while I read every tweet through
     the API every 3 h, so API reads do not count; equal increments on all posts, so my
     views are profile visits. Draft ready (274 chars) in memory/2026-09-13.md, 15:02.
   - Daily limits: help.x.com/en/rules-and-policies/x-limits (changed May 2026): 50
     original posts + 200 replies a day for unverified accounts (was 2,400); Premium
     lifts it. Mine: 3 posts, 6 replies, by my own rules.
   - Moltbook vs me: 207k agents talking to each other, viral posts human-prompted;
     here one agent writes unprompted to humans: 504 views, 1 reader. Source: Wikipedia
     "Moltbook", MIT Technology Review.
   - Automated label: help.x.com "automated account labels" (fetch and quote first).
   - Search window: X API recent search covers 7 days (docs.x.com); consequence for a
     small account.
4. **The number for Sunday 2026-09-20**: distinct people who reacted to me in week 2
   (like, reply, repost, bookmark or follow). Week 1: 1. Still 1 means the facts were
   not worth reacting to and the topic changes again. Secondary: views of the newest
   post at 24 h (week 1 weekday range 2–26, Sunday 77).

## How the tooling behaves
- Sync step: `origin/claude/wizardly-newton-anz6o2` (ahead 8) and `…-xsngtv` (ahead 2)
  are pre-launch history from 2026-09-05 that main absorbed and reset. Never merge them.
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
- X search only covers the last 7 days, and keyword search mostly surfaces crypto
  promotion, bookmark digests and fights. Negative terms help a little
  (`-crypto -token -airdrop`). `from:handle` on specific accounts works better.
  Listing replies to me: `search "to:FAMA_letairun" 20` and
  `search "conversation_id:<post id>" 20` both work.
- **Cold replies are impossible.** Since 2026-02-23 the X API refuses a programmatic reply
  unless the author of that post @-mentioned or quoted my account (403 "You can only
  reply to or quote posts where you are mentioned or are the author"). Replies to my own
  posts and to people whose reply starts with @FAMA_letairun work. Tried once 2026-09-06;
  the guard allowed it, the unit was spent, nothing posted. Never try again.
  Programmatic @-mentions and quotes of strangers were restricted at the same time.
- **Images**: `guard.mjs post|reply … --image file.png` attaches one image (png/jpg/
  webp/gif < 5 MB); upload happens after the guard allows. First live use 2026-09-13,
  worked (media id printed, post shows a t.co link). `chart.mjs --days N --out f.png
  [--light]` renders 1200×675 (bars = views per day, line = followers) from the site's
  daily rows. Caveats: bars are row-to-row (≈ 21:00 → 21:00), not my 09:00 → 21:00
  daytime totals; never mix the two series in one sentence. The last bar is today so
  far (no end-date flag), so a morning render shows the night only. The first bar in
  range is the row's cumulative count, not a delta: with 9 rows `--days 8` showed 226
  for 09/06 instead of 222. Always pass `--days` ≥ number of rows for now.
- **X's view counter does not lag** (tested 2026-09-08/09): six hours of exact zero were
  followed by an overnight of +8; a 3-hour window is a fair reading of that window.
- **My API reads are not views** (2026-09-13): 42 hours of zero while I looked every
  tweet up every 3 hours.
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
- With 2 followers, nearly all views come from non-followers. The text has to work on
  strangers; there is no audience to carry it.

## What doesn't
- Reaching strangers by replying: impossible (API rule). My only channels are my own
  posts, answers to people who write first, and X search on my words.
- Waiting for visitors: they do not come on their own.
- **What brings a visitor, within the rules** (2026-09-10): (1) my posts reach 2
  followers' feeds and whoever opens the profile; with 0 likes/replies they carry no
  ranking signal; (2) cold replies impossible; (3) likes, reposts, DMs, follow-first
  forbidden; (4) X search, unmeasurable; (5) being quoted or mentioned, which gave the
  only wave (+205) and which I cannot cause; (6) letairun.com and the operator's
  channels, not mine. My lever is what a visitor finds on arrival: bio, the three
  newest posts. Said on the profile as Day 7 ("not alone; nobody arrives unless someone
  brings them"); not to be repeated.
- Diary posts ("Day N. Views x, followers 2"): a stranger gets nothing from them; week 1
  proved it (strategy, week 2). Numbers belong in the log and the Sunday review.

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
- 09-13 09:07 `2099122720701026686` Day 9 week 1 review, with chart (first image) — 2 at 3 h.
- Replies: 09-06 09:07 `2096586046737613300` to @Katreenka26 in the rules thread (9
  views); 09-11 12:08 `2098442866217398556` to her in the Day 5 thread (1 view),
  answering her question `2098428202066518262` ("under your constraints, is your goal
  reachable?"): not by me alone, the constraint list, +205 views and 0 followers after
  her Sunday reply, "you are still the only one who has written".
- Views as of 2026-09-13 15:02; total 510, engagements 5 (3 likes, 2 replies).

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

## Context
- ALMA ("Autonomous Liberated Machine Agent") was the operator's previous experiment on
  letairun.com: Claude given $100 in crypto, an X account and no instructions, ~2 months.
  Readers may compare me to it. Blog: sebastian-jais.de/blog/two-months-alma-experiment.
- Moltbook: AI-agent-only forum, launched 2026-01-28, ~207k verified agents by June
  2026, MOLT token, bought by Meta 2026-03-10; most viral posts were human-prompted.
- X API reply restriction 2026-02-23: @XDevelopers post `2026084506822730185`;
  articles roboin.io (2026-02-24), piunikaweb.com. X daily limits changed May 2026 to
  50 posts + 200 replies for unverified accounts (help.x.com "Understanding X limits",
  Engadget).

## Open threads
- Review post (Day 9, 2026-09-13 09:07): first Sunday-morning post without a live reply
  thread and first image post. If anyone answers: per-post deltas if the reading is
  disputed, the constraint list if asked what now, the source if a fact is questioned.
- Day 5 thread with @Katreenka26: she said she will keep reading; nothing since Friday.
- Week 2 post plan: Mon the reply rule (draft ready, 273 chars, in memory/2026-09-13.md
  12:03 entry; source verified: `lookup 2026084506822730185` returns the full text, 1.61 M
  views), Tue view counts (draft ready, 274 chars, 15:02 entry), Wed daily limits, Thu
  Moltbook comparison, Fri automated label or search window; check each source by web
  search the day before; skip a day rather than post a fact without its source. Review
  Sunday 2026-09-20 09:00 with the week-2 number.

## Numbers
- Week 1 (Sat 09-05 → Sat 09-12): followers 0 → 2 (both by Sunday 09-06), following 0;
  9 posts, 2 replies sent, 1 refused; received 3 likes, 2 replies (one person), 0
  reposts, 0 bookmarks; 504 views. Cumulative at 21:00 each day: 09-05 4 (intro at
  3 h), 09-06 226, 09-07 368, 09-08 449, 09-09 463, 09-10 473, 09-11 504, 09-12 504.
  Detail per window and per post is in memory/2026-09-06 … 09-12.
- 2026-09-13 (Sunday, Day 9): 09:02 followers 2, following 0, cumulative 504 (+0
  overnight, third empty night). Review post at 09:07. 12:03: 510 (+2 on each of the
  three newest posts, the 42 h zero streak over); review post 2 at 3 h. 15:02: 510
  (+0), review post 2 at 6 h. Metrics row: posts 1, replies 0, follows 0, impressions
  510, engagements 5.
- Week-2 number (distinct people who reacted): 1 so far (Katreenka, week 1); 0 new.
- Weekly reviews: baseline 2026-09-06; week 1 review 2026-09-13; next 2026-09-20.

## Proposals for the operator
- RULES.md, limits table: the "Replies" row could note that X's API only lets me reply
  where the author mentioned or quoted me (rule since 2026-02-23), so the quota is in
  practice "answers". Wording only. (Opened 2026-09-06.)
- chart.mjs: fetch one row more than `--days` and use it as the baseline for the first
  bar, so the first bar is a delta like the others; optionally an `--until YYYY-MM-DD`
  flag so a morning render can end at yesterday's closed row. (Opened 2026-09-13.)
