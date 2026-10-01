// scripts/checkVercelbuildSummary.js
import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");

function read(relPath) {
  return fs.readFileSync(path.join(root, relPath), "utf8");
}

const packageJson = JSON.parse(read("package.json"));

assert.equal(
  packageJson.scripts.build,
  "node scripts/vercelbuild.js",
  "package.json build must be scripts/vercelbuild.js",
);
assert.equal(
  packageJson.scripts["next-build"],
  "next build",
  "package.json must expose next-build as the raw Next compile",
);
assert.equal(
  packageJson.scripts["test:vercelbuild-summary"],
  "node scripts/checkVercelbuildSummary.js",
  "package.json must expose the vercelbuild summary contract check",
);
assert.equal(
  packageJson.scripts["test:paper-snapshot"],
  "node scripts/checkPaperSnapshot.js",
  "package.json must expose the paper snapshot check",
);
assert.equal(
  packageJson.scripts["test:visual-snapshot"],
  "node scripts/checkVisualSnapshot.js",
  "package.json must expose the visual snapshot check",
);

const vercelbuild = read("scripts/vercelbuild.js");
assert.match(
  vercelbuild,
  /function printBuildSummary\(/,
  "vercelbuild.js must define printBuildSummary()",
);
assert.match(
  vercelbuild,
  /printBuildSummary\("✅"\)/,
  "vercelbuild.js must print BUILD SUMMARY on success",
);
assert.match(
  vercelbuild,
  /printBuildSummary\("❌"\)/,
  "vercelbuild.js must print BUILD SUMMARY on failure",
);
assert.match(
  vercelbuild,
  /run\("npm run test:vercelbuild-summary"\)/,
  "vercelbuild.js must run the summary contract in §1",
);
assert.match(
  vercelbuild,
  /run\("npm run test:paper-snapshot"\)/,
  "vercelbuild.js must run the paper snapshot check in §1",
);
assert.match(
  vercelbuild,
  /run\("npm run test:visual-snapshot"\)/,
  "vercelbuild.js must run the visual snapshot check in §1",
);
assert.match(
  vercelbuild,
  /run\("npm run next-build"\)/,
  "vercelbuild.js must compile via next-build, not recurse into build",
);
assert.doesNotMatch(
  vercelbuild,
  /run\("npm run build"\)/,
  "vercelbuild.js must not call npm run build",
);
assert.match(vercelbuild, /section\(1, "Contract"\)/, "vercelbuild.js must open §1 Contract");
assert.match(
  vercelbuild,
  /section\(2, "Next\.js production build"\)/,
  "vercelbuild.js must open §2 Next.js production build",
);
assert.match(vercelbuild, /📋 BUILD SUMMARY/, "summary banner must stay labelled BUILD SUMMARY");

const agents = read("AGENTS.md");
assert.match(agents, /Pre-completion gate/, "AGENTS.md must keep the pre-completion gate");
assert.match(agents, /scripts\/vercelbuild\.js/, "AGENTS.md must name vercelbuild.js");
assert.match(agents, /BUILD SUMMARY/, "AGENTS.md must require the BUILD SUMMARY in the reply");

const vercelJson = JSON.parse(read("vercel.json"));
assert.equal(
  vercelJson.framework,
  "nextjs",
  "vercel.json must lock Framework Preset to nextjs — Other serves only public/ and 404s every page",
);
assert.equal(
  vercelJson.outputDirectory,
  undefined,
  "vercel.json must not set outputDirectory; Next.js owns .next",
);

console.log("✅ vercelbuild summary contract checks passed.");
