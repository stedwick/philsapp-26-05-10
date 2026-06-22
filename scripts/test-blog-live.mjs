import { BLOG_FEED_URL, extractBlogSite, loadImportedBlogData } from './blog-site.mjs';
import { normalizeComparable } from './legacy-site.mjs';

const errors = [];

function fail(message) {
  errors.push(message);
}

async function fetchText(url) {
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(`Failed to fetch ${url}: ${response.status} ${response.statusText}`);
  }

  return response.text();
}

function byId(entries) {
  return new Map(entries.map((entry) => [entry.id, entry]));
}

function valuesEqual(left, right) {
  return JSON.stringify(normalizeComparable(left)) === JSON.stringify(normalizeComparable(right));
}

function compareField(collection, entryId, field, expectedValue, actualValue) {
  if (!valuesEqual(expectedValue, actualValue)) {
    fail(`${collection}/${entryId}.${field} differs from live site`);
  }
}

function compareCollection(localData, liveData, collection, fields) {
  const expectedEntries = liveData[collection] || [];
  const actualEntries = localData[collection] || [];
  const expectedById = byId(expectedEntries);
  const actualById = byId(actualEntries);

  for (const expected of expectedEntries) {
    const actual = actualById.get(expected.id);
    if (!actual) {
      fail(`${collection}/${expected.id} is missing locally`);
      continue;
    }

    for (const field of fields) {
      compareField(collection, expected.id, field, expected[field], actual[field]);
    }
  }

  for (const actual of actualEntries) {
    if (!expectedById.has(actual.id)) {
      fail(`${collection}/${actual.id} exists locally but is not traceable to the live site`);
    }
  }
}

const feedJson = await fetchText(BLOG_FEED_URL);
const feed = JSON.parse(feedJson);
const pageHtmlByUrl = {};

for (const item of feed.items || []) {
  pageHtmlByUrl[item.url] = await fetchText(item.url);
}

const liveData = extractBlogSite(feedJson, pageHtmlByUrl);
const localData = await loadImportedBlogData();

compareCollection(localData, liveData, 'blogPosts', [
  'title',
  'url',
  'datePublished',
  'description',
  'tags',
  'contentText',
  'sourceContentHtml',
  'links',
  'assetIds',
]);
compareCollection(localData, liveData, 'blogAssets', ['sourceUrl', 'localPath', 'kind', 'alt', 'owners']);

if (errors.length > 0) {
  console.error(`Blog live-site parity failed with ${errors.length} issue(s):`);
  for (const error of errors) {
    console.error(`- ${error}`);
  }
  process.exit(1);
}

console.log('Blog live-site parity test passed.');
