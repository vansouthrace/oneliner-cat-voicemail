import { mkdirSync, writeFileSync } from "node:fs";

// Funniest Cat Voicemail Greeting — one line a cat would record.
const ENTRY =
  "Meow. You've reached Tuna. I am currently inside the box you bought me a bed for. Leave a message.";
const MAX_CHARS = 120;

if (ENTRY.length < 1 || ENTRY.length > MAX_CHARS) {
  throw new Error(`entry must be 1-${MAX_CHARS} chars, got ${ENTRY.length}`);
}
// The gate also rejects whitespace-only text, so check that explicitly.
if (!ENTRY.trim()) {
  throw new Error("entry must not be only whitespace");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
console.log(`wrote ${ENTRY.length} chars to /output/entry.txt`);
