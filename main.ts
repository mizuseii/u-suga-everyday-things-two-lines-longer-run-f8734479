// Everyday Things, Two Lines, Longer Run — make.fun bounty
// u-suga-everyday-things-two-lines-longer-run-f8734479
//
// The thing: a washing machine, explained to a 10-year-old.
// Line 1 sets the analogy: a merry-go-round for dirty socks, spinning
// round and round in soapy water until the dirt gets dizzy and lets go.
// Line 2 is the honest limit: the analogy maps the spinning, tumbling
// ride, but leaves out what actually cleans — the soap breaking the
// dirt apart — so a real merry-go-round would only make socks dizzy,
// not clean. Funny, true, and self-correcting.
//
// Deterministic: no network, no input, no randomness. Writes exactly
// two lines (326 characters, within the 400 cap) to /output/entry.txt.

import { mkdirSync, writeFileSync } from "node:fs";

const MAX_CHARS = 400;

function entryText(): string {
  const line1 =
    "A washing machine is a merry-go-round for your dirty socks, spinning them round and round in soapy water until the dirt gets dizzy and lets go.";
  const line2 =
    "It maps the spinning, tumbling ride, but it leaves out what actually cleans — the soap breaking the dirt apart — so a real merry-go-round would only make your socks dizzy, not clean.";
  return `${line1}\n${line2}`;
}

const entry = entryText();
const lines = entry.split("\n");
if (lines.length !== 2) {
  throw new Error(`entry must be exactly two lines, got ${lines.length}`);
}
if (entry.length === 0 || entry.length > MAX_CHARS || entry.trim().length === 0) {
  throw new Error(`entry must be 1–${MAX_CHARS} characters, got ${entry.length}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry, "utf8");
