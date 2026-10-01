// scripts/vercelbuild.js
// Vercel quality gate. Always prints a BUILD SUMMARY.
import { execSync as _execSync } from "node:child_process";
import process from "node:process";

const BANNER_WIDTH = 72;
const buildSections = [];
let currentSection = null;
let globalStepCount = 0;
let globalSkipCount = 0;
let globalFailAllowedCount = 0;
const startedAt = Date.now();

const vercelEnv = process.env.VERCEL_ENV || (process.env.VERCEL === "1" ? "preview" : "local");
const gitSha = (process.env.VERCEL_GIT_COMMIT_SHA || "").slice(0, 7);

function section(num, name) {
  if (currentSection) sectionEnd();
  const label = `§${num} · ${name.toUpperCase()}`;
  console.log("");
  console.log(`┏${"━".repeat(BANNER_WIDTH)}┓`);
  console.log(`┃  ${label.padEnd(BANNER_WIDTH - 2)}┃`);
  console.log(`┗${"━".repeat(BANNER_WIDTH)}┛`);
  currentSection = {
    num,
    name,
    startedAt: Date.now(),
    stepCount: 0,
    runCount: 0,
    skipCount: 0,
  };
}

function sectionEnd(status = "✅") {
  if (!currentSection) return;
  const durationS = (Date.now() - currentSection.startedAt) / 1000;
  const resolved =
    status === "✅" && currentSection.runCount === 0 && currentSection.skipCount > 0
      ? "⏭️"
      : status;
  console.log("");
  console.log(
    `  ${resolved} §${currentSection.num} · ${currentSection.name}  (${currentSection.stepCount} checks, ${durationS.toFixed(1)}s)`,
  );
  buildSections.push({
    num: currentSection.num,
    name: currentSection.name,
    status: resolved,
    stepCount: currentSection.stepCount,
    runCount: currentSection.runCount,
    skipCount: currentSection.skipCount,
    durationS,
  });
  currentSection = null;
}

function skip(cmd, reason) {
  if (currentSection) {
    currentSection.stepCount += 1;
    currentSection.skipCount += 1;
    globalSkipCount += 1;
    globalStepCount += 1;
    const stepNum = String(currentSection.stepCount).padStart(2, "0");
    console.log(`  [§${currentSection.num}.${stepNum}] ⏭️  ${cmd}  SKIPPED (${reason})`);
  }
}

function run(cmd, allowFailure = false) {
  const started = Date.now();
  let stepLabel = "";
  if (currentSection) {
    currentSection.stepCount += 1;
    currentSection.runCount += 1;
    globalStepCount += 1;
    const stepNum = String(currentSection.stepCount).padStart(2, "0");
    stepLabel = `[§${currentSection.num}.${stepNum}] `;
  }
  try {
    console.log(`  ${stepLabel}→ ${cmd}`);
    _execSync(cmd, { stdio: "inherit", shell: true, env: process.env });
    const elapsed = ((Date.now() - started) / 1000).toFixed(1);
    console.log(`  ${stepLabel}✅  (${elapsed}s)`);
  } catch (error) {
    const elapsed = ((Date.now() - started) / 1000).toFixed(1);
    if (allowFailure) {
      globalFailAllowedCount += 1;
      console.warn(`  ${stepLabel}⚠️  (${elapsed}s)  FAILED (non-blocking): ${cmd}`);
      return;
    }
    console.error(`  ${stepLabel}❌  (${elapsed}s)  FAILED: ${cmd}`);
    throw error;
  }
}

function printBuildSummary(finalStatus) {
  const total = buildSections.reduce((sum, item) => sum + item.durationS, 0);
  const totalChecks = buildSections.reduce((sum, item) => sum + item.stepCount, 0);
  const minutes = Math.floor(total / 60);
  const seconds = Math.round(total % 60);
  const durationHuman = minutes > 0 ? `${minutes}m ${seconds}s` : `${total.toFixed(1)}s`;
  const wall = ((Date.now() - startedAt) / 1000).toFixed(1);

  console.log("");
  console.log(`╔${"═".repeat(BANNER_WIDTH)}╗`);
  console.log(`║${"📋 BUILD SUMMARY".padStart(28).padEnd(BANNER_WIDTH)}║`);
  console.log(`╠${"═".repeat(BANNER_WIDTH)}╣`);
  for (const item of buildSections) {
    const name = item.name.length > 28 ? `${item.name.slice(0, 27)}…` : item.name.padEnd(28);
    const checks = `${item.stepCount} checks`.padStart(10);
    const dur = `${item.durationS.toFixed(1)}s`.padStart(8);
    const line = `  §${String(item.num).padEnd(2)} ${name} ${checks}   ${item.status}  ${dur}`;
    console.log(`║${line.padEnd(BANNER_WIDTH)}║`);
  }
  console.log(`╠${"═".repeat(BANNER_WIDTH)}╣`);
  const totalLine = `  TOTAL${" ".repeat(25)} ${String(totalChecks).padStart(3)} checks   ${finalStatus}  ${total.toFixed(1)}s`;
  console.log(`║${totalLine.padEnd(BANNER_WIDTH)}║`);
  if (globalSkipCount || globalFailAllowedCount) {
    console.log(
      `║  (${globalSkipCount} skipped · ${globalFailAllowedCount} non-blocking failures)`.padEnd(
        BANNER_WIDTH + 1,
      ) + "║",
    );
  }
  console.log(`╠${"═".repeat(BANNER_WIDTH)}╣`);
  const shaBit = gitSha ? `  ·  sha: ${gitSha}` : "";
  const meta = `  ${finalStatus === "✅" ? "SUCCESS" : "FAILED"}  ·  env: ${vercelEnv}  ·  duration: ${durationHuman}  ·  wall: ${wall}s${shaBit}`;
  console.log(`║${meta.padEnd(BANNER_WIDTH)}║`);
  console.log(`╚${"═".repeat(BANNER_WIDTH)}╝`);
}

function main() {
  console.log(`france2040 vercelbuild  ·  env=${vercelEnv}${gitSha ? `  ·  ${gitSha}` : ""}`);

  section(1, "Contract");
  run("npm run test:vercelbuild-summary");
  run("npm run test:paper-snapshot");
  sectionEnd();

  section(2, "Next.js production build");
  run("npm run next-build");
  sectionEnd();

  printBuildSummary("✅");
}

try {
  main();
} catch {
  if (currentSection) sectionEnd("❌");
  printBuildSummary("❌");
  process.exit(1);
}
