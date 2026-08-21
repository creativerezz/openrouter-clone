#!/usr/bin/env node
// `repo` — print a clean tree view of this repository.
// Excludes VCS-ignored paths plus common noisy dotfiles/build output so the
// output is readable in a terminal (e.g. Ghostty).

import { readdir, stat } from "node:fs/promises";
import { dirname, join, relative, resolve, sep } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(__dirname, "..");

// Paths to always hide (relative to repo root). These cover .gitignore entries
// plus extra noise that's not always in .gitignore.
// Paths to always hide (relative to repo root). These cover .gitignore entries
// plus extra noise that's not always in .gitignore: agent tooling, build
// output, deps, and lockfiles.
const HIDDEN = new Set([
  ".git",
  ".next",
  ".vercel",
  ".DS_Store",
  ".claude", // agent config (not project source)
  ".remember", // agent logs / tmp state
  "node_modules",
  "out",
  "build",
  ".pnp",
  "next-env.d.ts",
  "tsconfig.tsbuildinfo",
  "pnpm-lock.yaml", // big lockfile; flip HIDE_LOCKFILES to false to keep
]);

const HIDE_LOCKFILES = true;

const shouldHide = (name) => {
  if (HIDDEN.has(name)) return true;
  if (name.endsWith(".tsbuildinfo")) return true;
  if (name.endsWith(".pem")) return true;
  if (name.startsWith(".env") && name !== ".env.example") return true;
  if (HIDE_LOCKFILES && /lock\.json$|-lock\.(ya?ml|json)$/.test(name)) return true;
  return false;
};

const BOX = {
  branch: "├── ",
  last: "└── ",
  vert: "│   ",
  empty: "    ",
};

function sortEntries(entries) {
  return entries.sort((a, b) => {
    if (a.dir !== b.dir) return a.dir ? -1 : 1; // dirs first
    return a.name.localeCompare(b.name, undefined, { numeric: true });
  });
}

async function walk(dir, prefix, outLines, depth, maxDepth) {
  let entries;
  try {
    entries = await readdir(dir, { withFileTypes: true });
  } catch {
    return;
  }
  const visible = entries
    .filter((e) => !shouldHide(e.name))
    .map((e) => ({ name: e.name, dir: e.isDirectory() }));
  if (visible.length === 0) return;

  sortEntries(visible);

  for (let i = 0; i < visible.length; i++) {
    const entry = visible[i];
    const isLast = i === visible.length - 1;
    const branch = isLast ? BOX.last : BOX.branch;
    const suffix = entry.dir ? "/" : "";
    outLines.push(`${prefix}${branch}${entry.name}${suffix}`);

    if (entry.dir && (maxDepth === 0 || depth + 1 < maxDepth)) {
      const nextPrefix = prefix + (isLast ? BOX.empty : BOX.vert);
      await walk(join(dir, entry.name), nextPrefix, outLines, depth + 1, maxDepth);
    }
  }
}

async function main() {
  const args = process.argv.slice(2);
  let maxDepth = 0; // 0 = unlimited
  for (const a of args) {
    if (a === "-h" || a === "--help") {
      console.log(`repo — clean repository tree

Usage: repo [depth]
       pnpm repo [depth]

Prints this repository as a directory tree, hiding build output, deps,
lockfiles and dotfile noise so it's readable in a terminal (Ghostty).
Pass a number to limit depth, e.g. \`repo 2\`.`);
      process.exit(0);
    }
    if (/^\d+$/.test(a)) maxDepth = Number(a);
  }

  const relRoot = relative(process.cwd(), ROOT) || ".";
  console.log(relRoot);

  const lines = [];
  await walk(ROOT, "", lines, 0, maxDepth);
  console.log(lines.join("\n"));

  const fileCount = lines.filter((l) => !l.endsWith("/")).length;
  const dirCount = lines.filter((l) => l.endsWith("/")).length;
  console.log(`\n${dirCount} director${dirCount === 1 ? "y" : "ies"}, ${fileCount} files`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});