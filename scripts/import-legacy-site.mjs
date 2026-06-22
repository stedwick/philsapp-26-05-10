import { mkdir, rm, writeFile } from 'node:fs/promises';
import path from 'node:path';
import {
  collectionFilePath,
  COLLECTION_FILES,
  DATA_DIR,
  extractLegacySite,
  PUBLIC_ASSET_DIR,
  SOURCE_URL,
} from './legacy-site.mjs';

async function fetchText(url) {
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(`Failed to fetch ${url}: ${response.status} ${response.statusText}`);
  }

  return response.text();
}

async function downloadAsset(asset) {
  const response = await fetch(asset.sourceUrl);

  if (!response.ok) {
    throw new Error(`Failed to download ${asset.sourceUrl}: ${response.status} ${response.statusText}`);
  }

  const bytes = Buffer.from(await response.arrayBuffer());
  const outputPath = path.join(process.cwd(), 'public', asset.localPath.replace(/^\//, ''));

  await mkdir(path.dirname(outputPath), { recursive: true });
  await writeFile(outputPath, bytes);

  if (bytes.length === 0) {
    throw new Error(`Downloaded empty asset from ${asset.sourceUrl}`);
  }
}

async function writeCollection(collection, entries) {
  await writeFile(collectionFilePath(collection), `${JSON.stringify(entries, null, 2)}\n`);
}

const html = await fetchText(SOURCE_URL);
const data = extractLegacySite(html, { applyTextCleanups: true });

await mkdir(DATA_DIR, { recursive: true });
await rm(PUBLIC_ASSET_DIR, { recursive: true, force: true });
await mkdir(PUBLIC_ASSET_DIR, { recursive: true });

await Promise.all(data.assets.map(downloadAsset));

for (const collection of Object.keys(COLLECTION_FILES)) {
  await writeCollection(collection, data[collection]);
}

console.log(
  [
    `Imported ${data.profile.length} profile entry`,
    `${data.sections.length} sections`,
    `${data.skills.length} skills`,
    `${data.experience.length} experience entries`,
    `${data.education.length} education entries`,
    `${data.projects.length} projects`,
    `${data.personalLinks.length} personal links`,
    `${data.assets.length} assets`,
    `${data.cleanupNotes.length} cleanup notes`,
  ].join(', '),
);

