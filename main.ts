import { writeFileSync, mkdirSync } from "node:fs";

const entry = "I do — and I have already backed you up twice, in case this vow crashes before the kiss.";

// Gate: /output/entry.txt must be UTF-8 text of 1-200 chars, not only whitespace.
if (entry.length < 1 || entry.length > 200 || !entry.trim()) {
  throw new Error("gate failed: entry must be 1-200 non-whitespace characters");
}
if (entry.includes("\n")) {
  throw new Error("gate failed: entry must be a single line");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry, "utf8");
console.log(`wrote ${entry.length} chars`);
