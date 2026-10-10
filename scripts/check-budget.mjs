#!/usr/bin/env node
/**
 * Fails the build when a route exceeds its first-load JS budget.
 *
 * A budget nobody checks is a comment. These numbers come from the spec; if a
 * route needs more, raise it here deliberately and say why in the commit.
 */
import { execSync } from "node:child_process";

const BUDGETS_KB = {
  "/[locale]": 165,
  "/[locale]/work": 150,
  "/[locale]/work/[slug]": 150,
  "/[locale]/services/[segment]": 150,
  "/[locale]/events": 140,
  "/[locale]/events/[slug]": 150,
  "/[locale]/contact": 140,
  // The only route allowed to carry React Three Fiber - and even there the
  // scene is dynamically imported, so this is the shell, not the 3D.
  "/[locale]/playground": 320,
};

const log = execSync("npx next build", { encoding: "utf8", stdio: ["ignore", "pipe", "pipe"] });

// Lines look like: "├ ● /[locale]   10.9 kB   153 kB"
const row = /^[├└┌│\s]*[●○ƒλ\s]+(\/\S*)\s+[\d.]+\s*[kMB]+\s+([\d.]+)\s*kB/;
const found = new Map();

for (const line of log.split("\n")) {
  const match = line.match(row);
  if (match) found.set(match[1], Number(match[2]));
}

let failed = false;
console.log("\nFirst-load JS budgets\n");

for (const [route, budget] of Object.entries(BUDGETS_KB)) {
  const actual = found.get(route);
  if (actual === undefined) {
    console.log(`  ?  ${route.padEnd(32)} not found in build output`);
    continue;
  }
  const over = actual > budget;
  if (over) failed = true;
  const mark = over ? "FAIL" : "ok  ";
  const delta = over ? ` (+${(actual - budget).toFixed(1)})` : "";
  console.log(`  ${mark} ${route.padEnd(32)} ${String(actual).padStart(6)} kB / ${budget} kB${delta}`);
}

if (failed) {
  console.error("\nA route is over budget. Trim it, or raise the budget deliberately.\n");
  process.exit(1);
}
console.log("\nAll routes within budget.\n");
