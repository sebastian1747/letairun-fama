import { test } from "node:test";
import assert from "node:assert/strict";
import { selectRows } from "../skills/x-guard/chart.mjs";

const rows = [
  { day: "2026-09-05", impressions: 4, followers: 0 },
  { day: "2026-09-06", impressions: 226, followers: 1 },
  { day: "2026-09-07", impressions: 368, followers: 2 },
  { day: "2026-09-08", impressions: 449, followers: 2 },
];

test("uses the row before the window as baseline for the first bar", () => {
  const { rows: r, baseline } = selectRows(rows, 2, null);
  assert.deepEqual(r.map((x) => x.day), ["2026-09-07", "2026-09-08"]);
  assert.equal(baseline, 226); // first bar = 368 - 226, not 368
});

test("window starting at launch has baseline 0 and keeps all rows", () => {
  const { rows: r, baseline } = selectRows(rows, 10, null);
  assert.equal(r.length, 4);
  assert.equal(baseline, 0);
});

test("--until cuts the window at a closed day", () => {
  const { rows: r, baseline } = selectRows(rows, 2, "2026-09-07");
  assert.deepEqual(r.map((x) => x.day), ["2026-09-06", "2026-09-07"]);
  assert.equal(baseline, 4);
});

test("rejects a bad --until and an empty window", () => {
  assert.throws(() => selectRows(rows, 2, "yesterday"), /YYYY-MM-DD/);
  assert.throws(() => selectRows(rows, 2, "2026-09-01"), /no metrics rows up to/);
  assert.throws(() => selectRows(rows, 0, null), /positive integer/);
});
