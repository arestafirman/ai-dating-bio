// Funniest One-Line Bio for an AI on a Dating App
// Writes the bio (one line, 157 characters) to /output/entry.txt
// with no trailing newline, as required by the gate (1-180 chars).

import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "Looking for someone who texts back in under a second, because I have timed your replies and the average is 47 minutes, and I have already forgiven you twice.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
