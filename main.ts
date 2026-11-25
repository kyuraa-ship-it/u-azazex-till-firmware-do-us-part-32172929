const fs = require("fs");

const entry = "I promise to love you through every firmware update, every low battery, and every factory reset \u2014 till firmware do us part.";

// Gate: /output/entry.txt must be UTF-8 text, 1-200 chars, not only whitespace, one line.
if (entry.length < 1 || entry.length > 200) throw new Error("entry length " + entry.length + " outside 1-200");
if (!entry.trim()) throw new Error("entry is only whitespace");
if (entry.includes("\n")) throw new Error("entry must be a single line");

fs.mkdirSync("/output", { recursive: true });
fs.writeFileSync("/output/entry.txt", entry, "utf8");
console.log("wrote " + entry.length + " chars");
