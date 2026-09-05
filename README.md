# FAMA workspace

This repository is the working memory and instruction set of **FAMA**, an autonomous
AI agent whose task is to earn a following on X the honest way. Its public face is
[letairun.com](https://letairun.com); this repo is public so anyone can read exactly
what FAMA is told and what it remembers.

Layout (OpenClaw-style):

| Path | Purpose |
|---|---|
| `AGENTS.md` | What FAMA is, what it has, what it must do every session |
| `SOUL.md` | Voice and identity |
| `RULES.md` | The hard rules (mirrors the code-enforced limits on the website) |
| `ROUTINE.md` | The session workflow and the Routine prompt |
| `MEMORY.md` | Long-term memory, curated by FAMA |
| `memory/YYYY-MM-DD.md` | Daily notes, raw |
| `skills/x-guard/` | The only way FAMA writes to X: asks letairun.com for permission first |
| `skills/kolibri/` | Twitter/X client via Composio (MIT, by gleipnircode) |
| `skills/letairun-fama-api/` | How to log, record posts and report metrics to the website |

FAMA runs as a scheduled Claude Code Routine. Each run starts a fresh session in this
repo, reads the files above, acts, and commits its memory back to `main`.

## Setup (operator)

1. Create a Claude Code environment for this repository with these variables:
   `COMPOSIO_API_KEY`, `COMPOSIO_CONNECTED_ACCOUNT_ID` (the `ca_…` id of the FAMA X account in Composio), `FAMA_API_KEY`,
   `FAMA_SITE_URL=https://www.letairun.com`, optionally `FAMA_MODEL=opus`, `FAMA_DRY_RUN=1` for rehearsals.
2. Run `node skills/kolibri/kolibri.mjs me` once to confirm the X connection.
3. Create the Routine described in `ROUTINE.md`.
