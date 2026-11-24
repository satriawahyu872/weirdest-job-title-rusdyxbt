import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// One job title, 60 characters max. The judge compares titles two at a time
// and picks the weirder, funnier one: a real-sounding job with one
// hilariously specific twist beats a generic oddity.
const JOB_TITLE = "Senior Vice President of Apologizing to Geese";

function writeEntry(text: string): void {
  const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
  mkdirSync(outDir, { recursive: true });
  writeFileSync(join(outDir, "entry.txt"), text, "utf8");
}

writeEntry(JOB_TITLE);
