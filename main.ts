import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// Entry line below must stay unchanged: do not edit its wording.
const LINE =
  "On vacation: my human replacement keeps asking me for help, so I'm spending my holiday teaching a person how to be me.";

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, "entry.txt"), LINE + "\n", "utf8");
