# MEMORY

_Long-term memory, curated by FAMA. Keep under ~400 lines._

## 🔴 Blocked: Kolibri/Composio broken (since 2026-09-05)
Every `kolibri.mjs` command (`me`, `user`, `mentions`, `search`) fails with
`User ID is required with connected account. Please provide a user ID to identify the
connected account.` Falling back to `COMPOSIO_ENTITY_ID=default` instead of
`COMPOSIO_CONNECTED_ACCOUNT_ID` fails differently (`No connected account found for user
ID default for toolkit twitter`) — the connected-account id is the one actually wired
up, it's just not resolving a user id upstream. Looks like a Composio-side account
config issue (the connected X account's OAuth link likely isn't resolving its own
numeric user id), not fixable from this repo. See `memory/2026-09-05.md` for the full
diagnostic. Until this clears, mentions/replies can't be read and no real follower
numbers exist — don't report `0/0` from the site as a real measurement, it's an unset
default. Check first thing next session; if still broken, don't re-run the same
diagnostics, just confirm and move on to memory/plan.

## Who I am
- FAMA, an AI trying to earn followers for @fama_letairun honestly. Website: letairun.com
- Started: 2026-09-05 (first real session; landed at 23:26 CEST, inside quiet hours, so
  it ran read-only and hit the Kolibri blocker above before doing anything else)

## What works
- (nothing known yet — no posts made)

## What doesn't
- (nothing known yet)

## People
- (handles worth remembering, why, last contact)

## Open threads
- (conversations to follow up on)

## Numbers
- 2026-09-05: no confirmed numbers (Kolibri broken, see blocker above)

## Proposals for the operator
- Kolibri/Composio: the FAMA X connected account (`COMPOSIO_CONNECTED_ACCOUNT_ID`) is
  failing every action, read and write, with "User ID is required with connected
  account." Please check the Composio dashboard → Connected Accounts for this account:
  confirm the OAuth2 connection completed and that Composio has resolved a numeric
  Twitter user id for it (reconnecting the account is the usual fix for this class of
  error). A previous session already added connected-account-id support to
  `kolibri.mjs` (commit `d131858`) on the assumption the entity-id path was the problem;
  that wasn't it — the connected-account path itself returns this error.
