import { test } from "node:test";
import assert from "node:assert/strict";
import { deflateSync } from "node:zlib";
import { decodePng, buildPalette, indexFrame, lzwEncode, encodeGif, GIF_LIMITS } from "../skills/x-guard/motion.mjs";

/** Build a tiny RGBA PNG (filter 0) so decodePng can be tested without Chromium. */
function makePng(width, height, rgba) {
  const crc = (buf) => { let c = ~0; for (const b of buf) { c ^= b; for (let k = 0; k < 8; k++) c = c & 1 ? 0xedb88320 ^ (c >>> 1) : c >>> 1; } return (~c) >>> 0; };
  const chunk = (type, body) => { const len = Buffer.alloc(4); len.writeUInt32BE(body.length); const tb = Buffer.concat([Buffer.from(type), body]); const c = Buffer.alloc(4); c.writeUInt32BE(crc(tb)); return Buffer.concat([len, tb, c]); };
  const ihdr = Buffer.alloc(13); ihdr.writeUInt32BE(width, 0); ihdr.writeUInt32BE(height, 4); ihdr[8] = 8; ihdr[9] = 6;
  const raw = Buffer.alloc((width * 4 + 1) * height);
  for (let y = 0; y < height; y++) { raw[y * (width * 4 + 1)] = 0; rgba.copy(raw, y * (width * 4 + 1) + 1, y * width * 4, (y + 1) * width * 4); }
  return Buffer.concat([Buffer.from([137, 80, 78, 71, 13, 10, 26, 10]), chunk("IHDR", ihdr), chunk("IDAT", deflateSync(raw)), chunk("IEND", Buffer.alloc(0))]);
}

const W = 4, H = 2;
const frameA = Buffer.alloc(W * H * 4), frameB = Buffer.alloc(W * H * 4);
for (let i = 0; i < W * H; i++) { frameA.set([245, 158, 11, 255], i * 4); frameB.set(i < 4 ? [99, 102, 241, 255] : [245, 158, 11, 255], i * 4); }

test("decodePng returns the pixels it was given", () => {
  const { width, height, rgba } = decodePng(makePng(W, H, frameB));
  assert.equal(width, W); assert.equal(height, H);
  assert.deepEqual([...rgba.subarray(0, 4)], [99, 102, 241, 255]);
  assert.deepEqual([...rgba.subarray(28, 32)], [245, 158, 11, 255]);
});

test("buildPalette keeps a few flat colours exact and caps at 256", () => {
  const pal = buildPalette([frameA, frameB], 1);
  assert.equal(pal.length, 2);
  assert.ok(pal.some((c) => c.join() === "245,158,11"));
  const noisy = Buffer.alloc(4000 * 4);
  for (let i = 0; i < 4000; i++) noisy.set([i & 255, (i * 7) & 255, (i * 13) & 255, 255], i * 4);
  assert.ok(buildPalette([noisy], 1).length <= 256);
});

test("indexFrame maps every pixel to its nearest palette entry", () => {
  const pal = buildPalette([frameA, frameB], 1);
  const idx = indexFrame(frameB, pal, new Map());
  assert.equal(idx.length, W * H);
  assert.equal(pal[idx[0]].join(), "99,102,241");
  assert.equal(pal[idx[7]].join(), "245,158,11");
});

test("lzwEncode yields a terminated sub-block stream starting with the code size", () => {
  const block = lzwEncode(new Uint8Array([0, 0, 1, 1, 0, 1]), 2);
  assert.equal(block[0], 2);
  assert.equal(block[block.length - 1], 0);
  assert.ok(block.length > 3);
});

test("encodeGif writes a looping GIF89a with one image block per frame", () => {
  const pal = buildPalette([frameA, frameB], 1);
  const cache = new Map();
  const gif = encodeGif({ width: W, height: H, frames: [indexFrame(frameA, pal, cache), indexFrame(frameB, pal, cache)], palette: pal, delayCs: 10 });
  assert.equal(gif.toString("ascii", 0, 6), "GIF89a");
  assert.equal(gif.readUInt16LE(6), W); assert.equal(gif.readUInt16LE(8), H);
  assert.ok(gif.includes(Buffer.from("NETSCAPE2.0")));
  let pos = 13 + 3 * 4, images = 0; // 2-bit palette → 4 entries
  while (pos < gif.length) {
    const b = gif[pos];
    if (b === 0x21) { pos += 2; while (gif[pos]) pos += gif[pos] + 1; pos++; }
    else if (b === 0x2c) { images++; pos += 11; while (gif[pos]) pos += gif[pos] + 1; pos++; }
    else if (b === 0x3b) break;
    else assert.fail(`unexpected block ${b} at ${pos}`);
  }
  assert.equal(images, 2);
  assert.equal(gif[gif.length - 1], 0x3b);
});

test("X's GIF limits are the documented ones", () => {
  assert.equal(GIF_LIMITS.bytes, 15 * 1024 * 1024);
  assert.equal(GIF_LIMITS.frames, 350);
});
