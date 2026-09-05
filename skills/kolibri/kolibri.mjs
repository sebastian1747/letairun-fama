#!/usr/bin/env node

/**
 * Kolibri 🐦 — Free Twitter/X skill for OpenClaw
 *
 * All operations via Composio v3 REST API (Free Tier, 20K calls/month)
 * No Twitter API subscription. No SDK dependencies. Zero cost.
 *
 * Env vars required:
 *   COMPOSIO_API_KEY
 *   COMPOSIO_ENTITY_ID (default: "default")
 *   COMPOSIO_CONNECTED_ACCOUNT_ID (optional, "ca_…": pins one connected account
 *     regardless of the user id Composio assigned; FAMA uses this)
 *
 * https://github.com/gleipnircode/kolibri
 */

const API_BASE = "https://backend.composio.dev/api/v3/tools/execute";
const API_KEY = process.env.COMPOSIO_API_KEY;
const ENTITY_ID = process.env.COMPOSIO_ENTITY_ID || "default";
const CONNECTED_ACCOUNT_ID = process.env.COMPOSIO_CONNECTED_ACCOUNT_ID;

if (!API_KEY) {
  console.error("❌ Missing COMPOSIO_API_KEY");
  console.error("   Get one at https://composio.dev");
  console.error('   Then: export COMPOSIO_API_KEY="your-key"');
  process.exit(1);
}

// === Composio v3 REST API ===

// Reason: Composio v3 requires a user_id alongside connected_account_id, and the
// user id is auto-assigned in the dashboard. Look it up once from the connected
// account itself so only the ca_… id has to be configured.
let _connectedUserId = null;
async function connectedUserId() {
  if (_connectedUserId) return _connectedUserId;
  const res = await fetch(
    `https://backend.composio.dev/api/v3/connected_accounts/${CONNECTED_ACCOUNT_ID}`,
    { headers: { "x-api-key": API_KEY } }
  );
  if (!res.ok) throw new Error(`Could not read connected account ${CONNECTED_ACCOUNT_ID}: HTTP ${res.status}`);
  const data = await res.json();
  _connectedUserId = data?.user_id || data?.userId || data?.entity_id || data?.entityId;
  if (!_connectedUserId) throw new Error(`Connected account ${CONNECTED_ACCOUNT_ID} has no user_id in its record`);
  return _connectedUserId;
}

async function exec(action, args = {}) {
  const url = `${API_BASE}/${action}`;
  const body = CONNECTED_ACCOUNT_ID
    ? { user_id: await connectedUserId(), connected_account_id: CONNECTED_ACCOUNT_ID, arguments: args }
    : { entity_id: ENTITY_ID, arguments: args };
  const res = await fetch(url, {
    method: "POST",
    headers: {
      "x-api-key": API_KEY,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });

  if (!res.ok) {
    const err = await res.json().catch(() => ({}));
    const msg = err?.error?.message || `HTTP ${res.status}`;
    throw new Error(msg);
  }

  const result = await res.json();

  // Composio returns 200 but with successful:false on upstream errors
  if (result.successful === false) {
    const msg = result.error || result.data?.message || "Unknown error";
    const statusCode = result.data?.status_code || result.data?.http_error;
    const err = new Error(msg);
    err.statusCode = statusCode;
    err.raw = result;
    throw err;
  }

  return result;
}

// === Helpers ===
function formatTweet(t) {
  const author = t.username || t.author_id || "unknown";
  const date = t.created_at ? new Date(t.created_at).toLocaleString() : "";
  const parts = [];
  if (t.public_metrics) {
    const m = t.public_metrics;
    if (m.like_count) parts.push(`❤️ ${m.like_count}`);
    if (m.retweet_count) parts.push(`🔁 ${m.retweet_count}`);
    if (m.reply_count) parts.push(`💬 ${m.reply_count}`);
  }
  const metrics = parts.length > 0 ? ` | ${parts.join(" ")}` : "";
  return `[${t.id}] @${author} (${date})${metrics}\n${t.text}\n---`;
}

function printTweets(result) {
  try {
    const data =
      result?.data?.data || result?.data || result?.response_data?.data;
    if (Array.isArray(data) && data.length > 0) {
      for (const t of data) {
        console.log(formatTweet(t));
      }
      console.log(`\n📊 ${data.length} tweets`);
    } else {
      console.log("No tweets found.");
      if (process.env.KOLIBRI_DEBUG) {
        console.log(JSON.stringify(result, null, 2));
      }
    }
  } catch (e) {
    console.log("Could not parse response:");
    console.log(JSON.stringify(result, null, 2));
  }
}

function printResult(result, successMsg) {
  const data = result?.data || result?.response_data || result;
  if (data?.errors) {
    console.error(`❌ ${JSON.stringify(data.errors, null, 2)}`);
  } else {
    const id = data?.data?.id || data?.id;
    if (id) {
      console.log(`✅ ${successMsg}: ${id}`);
      console.log(`   https://x.com/i/status/${id}`);
    } else {
      console.log(`✅ ${successMsg}`);
      if (process.env.KOLIBRI_DEBUG) {
        console.log(JSON.stringify(data, null, 2));
      }
    }
  }
}

// === CLI ===
const [, , command, ...args] = process.argv;

async function main() {
  switch (command) {
    // ============ WRITE ============

    case "tweet":
    case "post": {
      const text = args.join(" ");
      if (!text) {
        console.error("Usage: kolibri tweet <text>");
        process.exit(1);
      }
      if (text.length > 280) {
        console.error(
          `❌ Too long: ${text.length}/280 chars. Trim ${text.length - 280} characters.`
        );
        process.exit(1);
      }
      const result = await exec("TWITTER_CREATION_OF_A_POST", { text });
      printResult(result, "Posted");
      break;
    }

    case "reply": {
      const tweetId = args[0];
      const text = args.slice(1).join(" ");
      if (!tweetId || !text) {
        console.error("Usage: kolibri reply <tweet_id> <text>");
        process.exit(1);
      }
      const result = await exec("TWITTER_CREATION_OF_A_POST", {
        text,
        reply__in__reply__to__tweet__id: tweetId,
      });
      printResult(result, "Reply");
      break;
    }

    case "like": {
      const tweetId = args[0];
      if (!tweetId) {
        console.error("Usage: kolibri like <tweet_id>");
        process.exit(1);
      }
      const myId = await getMyId();
      const result = await exec("TWITTER_USER_LIKE_POST", {
        id: myId,
        tweet_id: tweetId,
      });
      printResult(result, `Liked ${tweetId}`);
      break;
    }

    case "retweet":
    case "rt": {
      const tweetId = args[0];
      if (!tweetId) {
        console.error("Usage: kolibri retweet <tweet_id>");
        process.exit(1);
      }
      const myId = await getMyId();
      const result = await exec("TWITTER_RETWEET_POST", {
        id: myId,
        tweet_id: tweetId,
      });
      printResult(result, `Retweeted ${tweetId}`);
      break;
    }

    case "delete":
    case "del": {
      const tweetId = args[0];
      if (!tweetId) {
        console.error("Usage: kolibri delete <tweet_id>");
        process.exit(1);
      }
      const result = await exec("TWITTER_POST_DELETE_BY_POST_ID", {
        id: tweetId,
      });
      printResult(result, `Deleted ${tweetId}`);
      break;
    }

    case "follow": {
      const userId = args[0];
      if (!userId) {
        console.error("Usage: kolibri follow <user_id>");
        process.exit(1);
      }
      const result = await exec("TWITTER_FOLLOW_USER", {
        target_user_id: userId,
      });
      printResult(result, `Followed ${userId}`);
      break;
    }

    // ============ READ ============

    case "mentions": {
      const count = parseInt(args[0]) || 10;
      // Workaround: search for @username since dedicated mentions endpoint not available
      const result = await exec("TWITTER_USER_LOOKUP_ME", {});
      const username = result?.data?.data?.username || result?.data?.username;
      if (!username) {
        console.error("❌ Could not get username for mentions search");
        process.exit(1);
      }
      const searchResult = await exec("TWITTER_RECENT_SEARCH", {
        query: `@${username}`,
        max_results: Math.max(10, Math.min(count, 100)),
        "tweet.fields": "created_at,author_id,public_metrics",
      });
      printTweets(searchResult);
      break;
    }

    case "search": {
      const query = args[0];
      const count = parseInt(args[1]) || 10;
      if (!query) {
        console.error('Usage: kolibri search "query" [count]');
        process.exit(1);
      }
      const result = await exec("TWITTER_RECENT_SEARCH", {
        query,
        max_results: Math.max(10, Math.min(count, 100)),
        "tweet.fields": "created_at,author_id,public_metrics",
      });
      printTweets(result);
      break;
    }

    case "lookup":
    case "get": {
      const tweetId = args[0];
      if (!tweetId) {
        console.error("Usage: kolibri lookup <tweet_id>");
        process.exit(1);
      }
      const result = await exec("TWITTER_GET_SINGLE_TWEET_BY_ID", {
        id: tweetId,
        "tweet.fields":
          "created_at,author_id,public_metrics,conversation_id",
      });
      const data = result?.data?.data || result?.data || result;
      console.log(JSON.stringify(data, null, 2));
      break;
    }

    case "timeline":
    case "tl": {
      const count = parseInt(args[0]) || 10;
      // Workaround: search for from:username since dedicated timeline endpoint not available
      const result = await exec("TWITTER_USER_LOOKUP_ME", {});
      const username = result?.data?.data?.username || result?.data?.username;
      if (!username) {
        console.error("❌ Could not get username for timeline search");
        process.exit(1);
      }
      const searchResult = await exec("TWITTER_RECENT_SEARCH", {
        query: `from:${username}`,
        max_results: Math.max(10, Math.min(count, 100)),
        "tweet.fields": "created_at,author_id,public_metrics",
      });
      printTweets(searchResult);
      break;
    }

    case "user": {
      const username = args[0];
      if (!username) {
        console.error("Usage: kolibri user <username>");
        process.exit(1);
      }
      const result = await exec("TWITTER_USER_LOOKUP_BY_USERNAMES", {
        usernames: [username.replace("@", "")],
        "user.fields": "description,public_metrics,created_at",
      });
      const data = result?.data?.data || result?.data || result;
      console.log(JSON.stringify(data, null, 2));
      break;
    }

    // ============ INFO ============

    case "me":
    case "whoami": {
      const result = await exec("TWITTER_USER_LOOKUP_ME", {});
      const data = result?.data?.data || result?.data || result;
      if (data?.username || data?.name) {
        console.log(`\n🐦 @${data.username} (${data.name})`);
        console.log(`   ID: ${data.id}`);
        if (data.description) console.log(`   Bio: ${data.description}`);
        if (data.public_metrics) {
          const m = data.public_metrics;
          console.log(
            `   ${m.followers_count} followers · ${m.following_count} following · ${m.tweet_count} tweets`
          );
        }
        console.log();
      } else {
        console.log(JSON.stringify(data, null, 2));
      }
      break;
    }

    case "help":
    case "--help":
    case "-h":
    default:
      console.log(`
🐦 Kolibri — Free Twitter/X skill for OpenClaw
   All operations via Composio v3 REST API (20K calls/month, $0)

WRITE:
  tweet <text>              Post a tweet (max 280 chars)
  reply <id> <text>         Reply to a tweet
  like <id>                 Like a tweet
  retweet|rt <id>           Retweet
  delete|del <id>           Delete your tweet
  follow <user_id>          Follow a user

READ:
  mentions [count]          Your mentions (default: 10)
  search "query" [count]    Search tweets (default: 10)
  lookup|get <id>           Get a specific tweet
  timeline|tl [count]       Your tweets (default: 10)
  user <username>           Lookup a user profile

INFO:
  me|whoami                 Your profile
  help                      This message

EXAMPLES:
  node kolibri.mjs tweet "Hello world!"
  node kolibri.mjs mentions 5
  node kolibri.mjs search "OpenClaw" 20
  node kolibri.mjs reply 1893847261039 "Thanks!"

ENV VARS:
  COMPOSIO_API_KEY           Composio API Key (required)
  COMPOSIO_ENTITY_ID         Composio Entity ID (default: "default")
  KOLIBRI_DEBUG              Set to "1" for verbose output
`);
  }
}

// Helper: get own user ID
let _myId = null;
async function getMyId() {
  if (!_myId) {
    const result = await exec("TWITTER_USER_LOOKUP_ME", {});
    const data = result?.data?.data || result?.data || result;
    _myId = data?.id;
    if (!_myId) {
      console.error(
        "❌ Could not get user ID. Is your Twitter connected in Composio?"
      );
      if (process.env.KOLIBRI_DEBUG) {
        console.log(JSON.stringify(result, null, 2));
      }
      process.exit(1);
    }
  }
  return _myId;
}

main().catch((err) => {
  if (err.message.includes("CreditsDepleted") || err.message.includes("402")) {
    console.error("❌ Twitter API credits depleted.");
    console.error("   Go to developer.x.com → Dashboard → Billing to add credits.");
  } else {
    console.error(`❌ ${err.message}`);
  }
  if (process.env.KOLIBRI_DEBUG) {
    if (err.raw) console.error(JSON.stringify(err.raw, null, 2));
    console.error(err.stack);
  }
  process.exit(1);
});
