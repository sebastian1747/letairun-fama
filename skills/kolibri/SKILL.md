---
name: kolibri
version: 1.0.0
description: Free Twitter/X skill for OpenClaw. Full read + write access via Composio. Zero dependencies. $0/month.
author: gleipnircode
license: MIT
repository: https://github.com/gleipnircode/kolibri
metadata:
  clawdbot:
    emoji: "🐦"
    always: true
    requires:
      bins: ["node"]
      nodeVersion: ">=18.0.0"
    primaryEnv: "COMPOSIO_API_KEY"
tags:
  - twitter
  - social-media
  - composio
  - communication
---

# 🐦 Kolibri

Free Twitter/X integration for OpenClaw. Full read + write access via [Composio](https://composio.dev) v3 REST API.

**Zero dependencies. Zero SDK. One file. $0/month for reads.**

Write operations (tweet, reply, like, retweet) use Twitter API credits (~$0.06/tweet).
Read operations (search, mentions, timeline) are free via Composio (20K calls/month).

## Setup

### 1. Composio Account (Free)

1. Sign up at [composio.dev](https://composio.dev)
2. Copy your API key from the dashboard
3. Go to **Toolkits → Twitter → + Connect Account**
4. Authorize with your Twitter/X account
5. Note the Entity ID you used (e.g. "default" or a custom name)

### 2. Twitter Developer Account

1. Go to [developer.x.com](https://developer.x.com)
2. Create a project and app
3. Under **User authentication settings**, enable OAuth 2.0
4. Add callback URL: `https://backend.composio.dev/api/v1/auth-apps/twitter/callback`
5. Add website URL: your website or `https://example.com`
6. Go to **Dashboard → Billing** and add credits for write operations

### 3. Environment Variables

```bash
export COMPOSIO_API_KEY="your-composio-api-key"
export COMPOSIO_ENTITY_ID="default"    # or your custom entity ID
# or pin one connected account (Composio → Connected Accounts → id "ca_…"):
export COMPOSIO_CONNECTED_ACCOUNT_ID="ca_..."
```

### 4. Verify

```bash
node kolibri.mjs me
```

## Commands

`node kolibri.mjs <command> [args]`

### Write (uses Twitter API credits)

| Command | Description |
|---|---|
| `tweet <text>` | Post a tweet (max 280 chars) |
| `reply <tweet_id> <text>` | Reply to a tweet |
| `like <tweet_id>` | Like a tweet |
| `retweet <tweet_id>` | Retweet |
| `delete <tweet_id>` | Delete your tweet |
| `follow <user_id>` | Follow a user |

### Read (free via Composio)

| Command | Description |
|---|---|
| `search "query" [count]` | Search recent tweets (default: 10) |
| `mentions [count]` | Your mentions (default: 10) |
| `timeline [count]` | Your tweets (default: 10) |
| `lookup <tweet_id>` | Get a specific tweet |
| `user <username>` | Lookup a user profile |

### Info

| Command | Description |
|---|---|
| `me` | Your profile |
| `help` | Show all commands |

## Examples

```bash
# Post a tweet
node kolibri.mjs tweet "Hello from Kolibri! 🐦"

# Search for tweets
node kolibri.mjs search "AI agents" 20

# Reply to a tweet
node kolibri.mjs reply 1893847261039 "Great post!"

# Check mentions
node kolibri.mjs mentions

# Like a tweet
node kolibri.mjs like 1893847261039

# Look up a user
node kolibri.mjs user elonmusk
```

## Environment Variables

| Variable | Required | Description |
|---|---|---|
| `COMPOSIO_API_KEY` | Yes | Your Composio API key |
| `COMPOSIO_ENTITY_ID` | No | Entity ID for your Twitter connection (default: "default") |
| `KOLIBRI_DEBUG` | No | Set to "1" for verbose output |

## Architecture

```
                                              ┌──────────────┐
┌─────────────┐   Composio v3 REST API        │  Composio    │     ┌─────────┐
│   Kolibri   │ ────────────────────────────▶ │  Free Tier   │ ──▶ │ Twitter │
│  (Node.js)  │   fetch() — no SDK needed     │  20K/month   │     │   API   │
└─────────────┘                               └──────────────┘     └─────────┘
```

## Costs

| Operation | Cost | Limit |
|---|---|---|
| Reads (search, mentions, timeline) | Free | 20K calls/month (Composio) |
| Writes (tweet, reply, like, retweet) | ~$0.06/action | Twitter API credits |
| Search time range | — | Last 7 days |

## Troubleshooting

**"Missing COMPOSIO_API_KEY"** — Set your Composio API key: `export COMPOSIO_API_KEY="..."`

**"Twitter API credits depleted"** — Add credits at developer.x.com → Dashboard → Billing

**"Could not get user ID"** — Reconnect your Twitter account in Composio dashboard

**No results from search** — Twitter search only covers the last 7 days

**Debug mode** — Run with `KOLIBRI_DEBUG=1` for full API response output
