import seedrandom from "seedrandom";
import { writeFileSync } from "fs";

function getSeedFromArgs(args) {
  if (args.length === 0) return undefined;
  return args[0];
}

const seed = getSeedFromArgs(process.argv.slice(2));
const rng = seed ? seedrandom(seed) : Math.random;

const randomNumber = typeof rng === "function" ? rng() : rng;

const output = [
  "=== Random Number Generator ===",
  `Seed: ${seed ?? "(none)"}`,
  `Random: ${randomNumber}`,
  "===============================",
  "",
].join("\n");

console.log(output);

// Write report.txt (artifact)
writeFileSync("report.txt", output);
