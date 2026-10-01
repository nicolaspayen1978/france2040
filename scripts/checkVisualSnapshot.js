// scripts/checkVisualSnapshot.js
import assert from "node:assert/strict";
import { createHash } from "node:crypto";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");

function walk(dir, found = []) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(full, found);
    else if (entry.name.endsWith(".ts")) found.push(full);
  }
  return found;
}

const visualsDir = path.join(root, "content", "visuals");
assert.ok(fs.existsSync(visualsDir), "content/visuals must exist");

const modules = walk(visualsDir);
assert.ok(modules.length > 0, "content/visuals must contain at least one visual module");

let versions = 0;
for (const modulePath of modules) {
  const source = fs.readFileSync(modulePath, "utf8");
  const figures = [...source.matchAll(/figure:\s*"([^"]+)"/g)].map((match) => match[1]);
  const hashes = [...source.matchAll(/sha256:\s*"([a-f0-9]{64})"/g)].map((match) => match[1]);
  assert.equal(
    figures.length,
    hashes.length,
    `${path.relative(root, modulePath)} must pair each figure with one sha256`,
  );
  figures.forEach((relPath, index) => {
    const bytes = fs.readFileSync(path.join(root, relPath));
    const digest = createHash("sha256").update(bytes).digest("hex");
    assert.equal(digest, hashes[index], `${relPath} does not match its recorded sha256`);
    versions += 1;
  });
}

assert.ok(versions > 0, "at least one frozen visual figure must be checked");
console.log(`✅ visual snapshot checks passed (${versions} version${versions === 1 ? "" : "s"}).`);
