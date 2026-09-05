# 🐦 Kolibri

**Free Twitter/X skill for [OpenClaw](https://openclaw.dev).**

Twitter's API now costs $200/month for basic read access. Kolibri gives you full read + write Twitter access by routing through [Composio's](https://composio.dev) free tier.

- **Zero dependencies** — just Node.js `fetch()`
- **One file** — `kolibri.mjs` (< 300 lines)
- **Reads are free** — 20K calls/month via Composio
- **Writes cost ~$0.06** — via Twitter API credits
- **Node.js ≥ 18** — no `npm install` needed

## Quick Start

```bash
# Clone
git clone https://github.com/gleipnircode/kolibri.git
cd kolibri

# Set env vars
export COMPOSIO_API_KEY="your-key"
export COMPOSIO_ENTITY_ID="default"

# Test
node kolibri.mjs me
node kolibri.mjs tweet "Hello from Kolibri! 🐦"
```

## Prerequisites

### 1. Composio Account (Free)

1. Sign up at [composio.dev](https://composio.dev)
2. Go to **Toolkits → Twitter → + Connect Account**
3. Authorize with your Twitter/X account
4. Copy your API key from the dashboard

### 2. Twitter Developer Account

1. Go to [developer.x.com](https://developer.x.com)
2. Create a project and app
3. Under **User authentication settings**, enable OAuth 2.0:
   - Type: **Web App / Confidential Client**
   - Callback URL: `https://backend.composio.dev/api/v1/auth-apps/twitter/callback`
   - Website URL: your site or `https://example.com`
4. Go to **Dashboard → Billing** and add credits ($5 covers hundreds of tweets)

## Commands

### Write (uses Twitter API credits, ~$0.06 each)

| Command | Description |
|---|---|
| `tweet <text>` | Post a tweet (max 280 chars) |
| `reply <id> <text>` | Reply to a tweet |
| `like <id>` | Like a tweet |
| `retweet <id>` | Retweet |
| `delete <id>` | Delete your tweet |
| `follow <user_id>` | Follow a user |

### Read (free via Composio, 20K/month)

| Command | Description |
|---|---|
| `search "query" [count]` | Search recent tweets (default: 10) |
| `mentions [count]` | Your mentions (default: 10) |
| `timeline [count]` | Your tweets (default: 10) |
| `lookup <id>` | Get a specific tweet |
| `user <username>` | Lookup a user profile |

### Info

| Command | Description |
|---|---|
| `me` | Your profile |
| `help` | All commands |

## How It Works

```
                                              ┌──────────────┐
┌─────────────┐   Composio v3 REST API        │  Composio    │     ┌─────────┐
│   Kolibri   │ ────────────────────────────▶ │  Free Tier   │ ──▶ │ Twitter │
│  (Node.js)  │   fetch() — no SDK needed     │  20K/month   │     │   API   │
└─────────────┘                               └──────────────┘     └─────────┘
```

Composio handles Twitter OAuth and proxies all API calls. No Twitter API subscription needed — just credits for write operations.

## Environment Variables

| Variable | Required | Description |
|---|---|---|
| `COMPOSIO_API_KEY` | Yes | Composio API key |
| `COMPOSIO_ENTITY_ID` | No | Entity ID (default: "default") |
| `KOLIBRI_DEBUG` | No | Set to "1" for verbose output |

## OpenClaw Installation

```bash
mkdir -p ~/.openclaw/skills/kolibri
cd ~/.openclaw/skills/kolibri
git clone https://github.com/gleipnircode/kolibri .
```

Add to your `.bashrc`:

```bash
export COMPOSIO_API_KEY="your-key"
export COMPOSIO_ENTITY_ID="default"
```

## Why "Kolibri"?

German for hummingbird. Small, fast, efficient — moves quickly between flowers (posts).

Built by [@gleipnircode](https://x.com/gleipnircode) for the [ALMA](https://letairun.com) project.

## License

MIT
