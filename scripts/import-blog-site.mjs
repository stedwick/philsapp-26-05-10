import { mkdir, rm, writeFile } from 'node:fs/promises';
import path from 'node:path';
import {
  BLOG_ARCHIVE_URL,
  BLOG_COLLECTION_FILES,
  BLOG_DATA_DIR,
  BLOG_FEED_URL,
  BLOG_PUBLIC_ASSET_DIR,
  blogCollectionFilePath,
  extractBlogSite,
} from './blog-site.mjs';

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
  await writeFile(blogCollectionFilePath(collection), `${JSON.stringify(entries, null, 2)}\n`);
}

const feedJson = await fetchText(BLOG_FEED_URL);
const feed = JSON.parse(feedJson);
const pageHtmlByUrl = {};

for (const item of feed.items || []) {
  pageHtmlByUrl[item.url] = await fetchText(item.url);
}

const data = extractBlogSite(feedJson, pageHtmlByUrl);

await mkdir(BLOG_DATA_DIR, { recursive: true });
await rm(BLOG_PUBLIC_ASSET_DIR, { recursive: true, force: true });
await mkdir(BLOG_PUBLIC_ASSET_DIR, { recursive: true });

await Promise.all(data.blogAssets.map(downloadAsset));

for (const collection of Object.keys(BLOG_COLLECTION_FILES)) {
  await writeCollection(collection, data[collection]);
}

console.log(
  [
    `Imported ${data.blogPosts.length} blog posts from ${BLOG_ARCHIVE_URL}`,
    `${data.blogAssets.length} blog assets`,
  ].join(', '),
);
