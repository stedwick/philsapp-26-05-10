import { access, stat } from 'node:fs/promises';
import path from 'node:path';
import { COLLECTION_FILES, loadImportedData } from './legacy-site.mjs';

const EXPECTED_MINIMUMS = {
  profile: 1,
  sections: 6,
  skills: 12,
  experience: 6,
  education: 3,
  projects: 6,
  personalLinks: 4,
  contact: 1,
  assets: 1,
};

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

function verifyMinimum(collection, entries) {
  const minimum = EXPECTED_MINIMUMS[collection];

  if (minimum && entries.length < minimum) {
    fail(`${collection} has ${entries.length} entries; expected at least ${minimum}`);
  }
}

function verifyOrdered(collection, entries) {
  entries.forEach((entry, index) => {
    if (entry.order !== index) {
      fail(`${collection}/${entry.id} has order ${entry.order}; expected ${index}`);
    }
  });
}

async function verifyAssetFiles(assets) {
  const localPaths = new Set();
  const sourceUrls = new Set();

  for (const asset of assets) {
    if (!asset.sourceUrl?.startsWith('https://philipbrocoum.com/')) {
      fail(`asset/${asset.id} sourceUrl is not from philipbrocoum.com: ${asset.sourceUrl}`);
    }

    if (!asset.localPath?.startsWith('/legacy/')) {
      fail(`asset/${asset.id} localPath must start with /legacy/: ${asset.localPath}`);
      continue;
    }

    if (localPaths.has(asset.localPath)) {
      fail(`Duplicate local asset path: ${asset.localPath}`);
    }
    localPaths.add(asset.localPath);

    if (sourceUrls.has(asset.sourceUrl)) {
      fail(`Duplicate asset source URL: ${asset.sourceUrl}`);
    }
    sourceUrls.add(asset.sourceUrl);

    const filePath = path.join(process.cwd(), 'public', asset.localPath.replace(/^\//, ''));

    try {
      await access(filePath);
      const fileStat = await stat(filePath);
      if (fileStat.size === 0) {
        fail(`asset/${asset.id} file is empty: ${asset.localPath}`);
      }
    } catch {
      fail(`asset/${asset.id} file is missing: ${asset.localPath}`);
    }
  }
}

function verifyRequiredGeneratedFiles(data) {
  for (const collection of Object.keys(COLLECTION_FILES)) {
    if (!data[collection]) {
      fail(`Missing generated collection "${collection}"`);
    }
  }
}

function verifyKnownEntries(data) {
  if (!data.profile.some((entry) => entry.id === 'main' && entry.portraitAssetId)) {
    fail('profile/main must include a portraitAssetId');
  }

  if (!data.contact.some((entry) => entry.id === 'main' && entry.resumeAssetId)) {
    fail('contact/main must include a resumeAssetId');
  }

  const assetIds = new Set(data.assets.map((asset) => asset.id));
  for (const contact of data.contact) {
    if (contact.resumeAssetId && !assetIds.has(contact.resumeAssetId)) {
      fail(`contact/${contact.id} references missing resume asset ${contact.resumeAssetId}`);
    }
  }

  for (const profile of data.profile) {
    if (profile.portraitAssetId && !assetIds.has(profile.portraitAssetId)) {
      fail(`profile/${profile.id} references missing portrait asset ${profile.portraitAssetId}`);
    }
  }

  for (const note of data.cleanupNotes) {
    if (!note.collection || !note.entryId || !note.field || !note.originalText || !note.cleanedText) {
      fail(`cleanupNotes/${note.id} is missing required traceability fields`);
    }
  }
}

const data = await loadImportedData();
verifyRequiredGeneratedFiles(data);

for (const collection of Object.keys(COLLECTION_FILES)) {
  const entries = assertArray(data, collection);
  verifyIds(collection, entries);
  verifyMinimum(collection, entries);
  verifyOrdered(collection, entries);
}

verifyKnownEntries(data);
await verifyAssetFiles(data.assets);

if (errors.length > 0) {
  console.error(`Content verification failed with ${errors.length} issue(s):`);
  for (const error of errors) {
    console.error(`- ${error}`);
  }
  process.exit(1);
}

console.log('Imported content verification passed.');

