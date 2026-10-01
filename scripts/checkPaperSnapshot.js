// scripts/checkPaperSnapshot.js
import assert from "node:assert/strict";
import { createHash } from "node:crypto";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");

function read(relPath) {
  return fs.readFileSync(path.join(root, relPath), "utf8");
}

const ignore = read(".vercelignore");
assert.match(
  ignore,
  /^private\/?$/m,
  ".vercelignore must exclude private/ so build notes are not uploaded",
);

function walk(dir, found = []) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(full, found);
    else if (entry.name.endsWith(".ts")) found.push(full);
  }
  return found;
}

const papersDir = path.join(root, "content", "papers");
const modules = walk(papersDir);
assert.ok(modules.length > 0, "content/papers must contain at least one paper module");

let versions = 0;
for (const modulePath of modules) {
  const source = fs.readFileSync(modulePath, "utf8");
  const files = [...source.matchAll(/file:\s*"([^"]+)"/g)].map((match) => match[1]);
  const hashes = [...source.matchAll(/sha256:\s*"([a-f0-9]{64})"/g)].map((match) => match[1]);
  assert.equal(
    files.length,
    hashes.length,
    `${path.relative(root, modulePath)} must pair each snapshot file with one sha256`,
  );
  files.forEach((relPath, index) => {
    const bytes = fs.readFileSync(path.join(root, relPath));
    const digest = createHash("sha256").update(bytes).digest("hex");
    assert.equal(digest, hashes[index], `${relPath} does not match its recorded sha256`);
    versions += 1;
  });
}

assert.ok(versions > 0, "at least one frozen paper snapshot must be checked");
console.log(`✅ paper snapshot checks passed (${versions} version${versions === 1 ? "" : "s"}).`);
