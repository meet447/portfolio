#!/usr/bin/env node
// Compress project thumbnails to AVIF + WebP + a fallback PNG.
// Usage:
//   node scripts/optimize-images.mjs                 # process public/projects
//   node scripts/optimize-images.mjs path/to/dir     # custom dir
//
// Output: writes <name>.avif, <name>.webp, and overwrites <name>.png
// (compressed) next to each source. Originals are backed up to
// public/projects/_originals/ on first run.

import { readdir, mkdir, copyFile, stat } from "node:fs/promises";
import { existsSync } from "node:fs";
import path from "node:path";
import sharp from "sharp";

const MAX_WIDTH = 1200;
const AVIF_QUALITY = 55;
const WEBP_QUALITY = 75;
const PNG_QUALITY = 80;

const targetDir = path.resolve(process.argv[2] ?? "public/projects");
const backupDir = path.join(targetDir, "_originals");

const isImage = (f) => /\.(png|jpe?g)$/i.test(f);
const fmtKB = (b) => `${(b / 1024).toFixed(1)} KB`;

async function ensureBackup(file) {
  const dest = path.join(backupDir, path.basename(file));
  if (!existsSync(dest)) {
    await mkdir(backupDir, { recursive: true });
    await copyFile(file, dest);
  }
}

async function processFile(file) {
  const ext = path.extname(file).toLowerCase();
  const base = file.slice(0, -ext.length);
  const originalSize = (await stat(file)).size;

  await ensureBackup(file);

  const source = path.join(backupDir, path.basename(file));
  const pipeline = sharp(source).rotate().resize({
    width: MAX_WIDTH,
    withoutEnlargement: true,
  });

  const [avifInfo, webpInfo, pngInfo] = await Promise.all([
    pipeline.clone().avif({ quality: AVIF_QUALITY, effort: 6 }).toFile(`${base}.avif`),
    pipeline.clone().webp({ quality: WEBP_QUALITY, effort: 6 }).toFile(`${base}.webp`),
    pipeline.clone().png({ quality: PNG_QUALITY, compressionLevel: 9, palette: true }).toFile(`${base}.png`),
  ]);

  console.log(
    `${path.basename(file)}: ${fmtKB(originalSize)} → ` +
      `avif ${fmtKB(avifInfo.size)}, webp ${fmtKB(webpInfo.size)}, png ${fmtKB(pngInfo.size)}`
  );
}

async function main() {
  if (!existsSync(targetDir)) {
    console.error(`Directory not found: ${targetDir}`);
    process.exit(1);
  }
  const entries = (await readdir(targetDir)).filter((f) => isImage(f) && !f.startsWith("_"));
  if (entries.length === 0) {
    console.log("No images to process.");
    return;
  }
  for (const name of entries) {
    try {
      await processFile(path.join(targetDir, name));
    } catch (err) {
      console.error(`Failed: ${name}`, err.message);
    }
  }
  console.log(`\nOriginals backed up to ${path.relative(process.cwd(), backupDir)}`);
}

main();
