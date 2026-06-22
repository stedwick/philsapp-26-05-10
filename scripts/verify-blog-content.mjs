import { access, stat } from 'node:fs/promises';
import path from 'node:path';
import { BLOG_COLLECTION_FILES, loadImportedBlogData } from './blog-site.mjs';

const EXPECTED_POST_IDS = ['philsdictationapp', 'privacy', 'riptoast'];
const errors = [];

function fail(message) {
  errors.push(message);
}

function assertArray(data, collection) {
  if (!Array.isArray(data[collection])) {
    fail(`${collection} must be an array`);
    return [];
  }

  return data[collection];
}

function verifyIds(collection, entries) {
  const ids = new Set();

  for (const entry of entries) {
    if (!entry.id || typeof entry.id !== 'string') {
      fail(`${collection} contains an entry without a string id`);
      continue;
    }

    if (ids.has(entry.id)) {
      fail(`${collection} contains duplicate id "${entry.id}"`);
    }

    ids.add(entry.id);
  }
}

function verifyOrdered(collection, entries) {
  entries.forEach((entry, index) => {
    if (entry.order !== index) {
      fail(`${collection}/${entry.id} has order ${entry.order}; expected ${index}`);
    }
  });
}

async function verifyBlogAssetFiles(assets) {
  const localPaths = new Set();
  const sourceUrls = new Set();

  for (const asset of assets) {
    if (!asset.sourceUrl?.startsWith('https://phils.app/')) {
      fail(`blogAssets/${asset.id} sourceUrl is not from phils.app: ${asset.sourceUrl}`);
    }

    if (!asset.localPath?.startsWith('/blog/')) {
      fail(`blogAssets/${asset.id} localPath must start with /blog/: ${asset.localPath}`);
      continue;
    }

    if (localPaths.has(asset.localPath)) {
      fail(`Duplicate local blog asset path: ${asset.localPath}`);
    }
    localPaths.add(asset.localPath);

    if (sourceUrls.has(asset.sourceUrl)) {
      fail(`Duplicate blog asset source URL: ${asset.sourceUrl}`);
    }
    sourceUrls.add(asset.sourceUrl);

    const filePath = path.join(process.cwd(), 'public', asset.localPath.replace(/^\//, ''));
    try {
      await access(filePath);
      const fileStat = await stat(filePath);
      if (fileStat.size === 0) {
        fail(`blogAssets/${asset.id} file is empty: ${asset.localPath}`);
      }
    } catch {
      fail(`blogAssets/${asset.id} file is missing: ${asset.localPath}`);
    }
  }
}

function verifyBlogPosts(posts, assets) {
  const postIds = new Set(posts.map((post) => post.id));
  const assetIds = new Set(assets.map((asset) => asset.id));

  for (const id of EXPECTED_POST_IDS) {
    if (!postIds.has(id)) {
      fail(`Missing expected blog post "${id}"`);
    }
  }

  for (const post of posts) {
    if (!post.url?.startsWith('https://phils.app/blog/')) {
      fail(`blogPosts/${post.id} has unexpected url: ${post.url}`);
    }

    if (!post.title || !post.datePublished || !post.contentText || !post.sourceContentHtml) {
      fail(`blogPosts/${post.id} is missing title, datePublished, contentText, or sourceContentHtml`);
    }

    for (const assetId of post.assetIds || []) {
      if (!assetIds.has(assetId)) {
        fail(`blogPosts/${post.id} references missing blog asset ${assetId}`);
      }
    }
  }
}

const data = await loadImportedBlogData();

for (const collection of Object.keys(BLOG_COLLECTION_FILES)) {
  const entries = assertArray(data, collection);
  verifyIds(collection, entries);
  verifyOrdered(collection, entries);
}

verifyBlogPosts(data.blogPosts, data.blogAssets);
await verifyBlogAssetFiles(data.blogAssets);

if (errors.length > 0) {
  console.error(`Blog content verification failed with ${errors.length} issue(s):`);
  for (const error of errors) {
    console.error(`- ${error}`);
  }
  process.exit(1);
}

console.log('Imported blog content verification passed.');
