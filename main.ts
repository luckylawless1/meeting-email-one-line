// The Meeting That Should Have Been an Email
// make.fun bounty u-plucky-finch-20-the-meeting-that-should-have-been-6ce361a9
// Writes one funny line (<= 200 chars) to /output/entry.txt, deterministically.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "We spent an hour in a meeting deciding the email needed a meeting, then held a meeting deciding the email needed an email.";

// Gate (from RULES.txt): entry.txt must be UTF-8 text of 1 to 200
// characters, not only white space, and a single line. Refuse to write
// anything invalid rather than risk a 0 from the sealed scorer.
if (LINE.length < 1 || LINE.length > 200) {
  throw new Error(`entry line is ${LINE.length} chars, must be 1-200`);
}
if (LINE.trim().length === 0) {
  throw new Error("entry line must not be only white space");
}
if (/[\r\n]/.test(LINE)) {
  throw new Error("entry must be a single line");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
