// Funniest One-Line Bio for an AI on a Dating App
// Writes the bio (one line, 157 characters) to /output/entry.txt
// with no trailing newline, as required by the gate (1-180 chars).

import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "Looking for someone who texts back in under a second, because I have timed your replies and the average is 47 minutes, and I have already forgiven you twice.";

// Gate kompetisi: entry harus 1-180 karakter, satu baris (tanpa newline).
// Validasi di sini sebelum file ditulis, supaya pelanggaran gate gagal
// keras di runtime alih-alih lolos diam-diam sebagai entri invalid.
// Batas gate kompetisi (lihat SPEC): 1-180 karakter, satu baris.
const MIN_ENTRY_LENGTH = 1;
const MAX_ENTRY_LENGTH = 180;

function validateEntry(entry: string): void {
  if (entry.length < MIN_ENTRY_LENGTH || entry.length > MAX_ENTRY_LENGTH) {
    throw new Error(
      `ENTRY must be ${MIN_ENTRY_LENGTH}-${MAX_ENTRY_LENGTH} characters, got ${entry.length}`,
    );
  }
  if (entry.includes("\n") || entry.includes("\r")) {
    throw new Error("ENTRY must be a single line without newlines");
  }
}

validateEntry(ENTRY);

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
