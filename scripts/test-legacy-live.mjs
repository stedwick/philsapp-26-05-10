import { execFile } from 'node:child_process';
import { promisify } from 'node:util';
import {
  cleanupNoteFor,
  extractLegacySite,
  loadImportedData,
  normalizeComparable,
  normalizeText,
  SOURCE_URL,
} from './legacy-site.mjs';

const execFileAsync = promisify(execFile);
const SESSION = `legacy-live-${Date.now()}`;
const errors = [];

const COMPARISON_FIELDS = {
  profile: ['name', 'headline', 'tagline', 'socialLinks', 'primaryAction'],
  sections: ['title', 'body', 'links'],
  skills: ['title', 'url', 'description', 'iconAlt'],
  experience: [
    'company',
    'websiteUrl',
    'description',
    'visitLabel',
    'roles',
    'footerLines',
    'location',
    'logoAlt',
    'screenshotAlt',
  ],
  education: ['title', 'url', 'addendum', 'description', 'links', 'iconName'],
  projects: ['title', 'url', 'description', 'links', 'iconName'],
  personalLinks: ['title', 'url', 'description', 'links', 'iconAlt'],
  contact: [
    'intro',
    'name',
    'location',
    'phoneDisplay',
    'phoneHref',
    'email',
    'emailHref',
    'linkedInLabel',
    'linkedInUrl',
    'resumeLabel',
    'formAction',
  ],
};

function fail(message) {
  errors.push(message);
}

async function agentBrowser(args) {
  const { stdout } = await execFileAsync('agent-browser', args, {
    maxBuffer: 1024 * 1024 * 20,
  });
  return stdout;
}

function parseEvalJson(stdout) {
  const trimmed = stdout.trim();
  const start = trimmed.indexOf('{');
  const end = trimmed.lastIndexOf('}');

  if (start === -1 || end === -1 || end <= start) {
    throw new Error(`Could not parse agent-browser eval output:\n${stdout}`);
  }

  return JSON.parse(trimmed.slice(start, end + 1));
}

async function extractLiveHtml() {
  await agentBrowser([
    '--session',
    SESSION,
    '--allowed-domains',
    'philipbrocoum.com',
    'open',
    SOURCE_URL,
  ]);
  await agentBrowser(['--session', SESSION, 'wait', '--load', 'networkidle']);

  const result = await agentBrowser([
    '--session',
    SESSION,
    'eval',
    'JSON.stringify({ html: document.documentElement.outerHTML, title: document.title, url: location.href })',
  ]);

  return parseEvalJson(result);
}

function byId(entries) {
  return new Map(entries.map((entry) => [entry.id, entry]));
}

function valuesEqual(left, right) {
  return JSON.stringify(normalizeComparable(left)) === JSON.stringify(normalizeComparable(right));
}

function compareStringField(localData, collection, entryId, field, expectedValue, actualValue) {
  if (normalizeText(expectedValue) === normalizeText(actualValue)) return;

  const note = cleanupNoteFor(localData, collection, entryId, field, expectedValue, actualValue);
  if (note) return;

  fail(
    `${collection}/${entryId}.${field} differs from live site without cleanup note:\n` +
      `  live:  ${expectedValue}\n` +
      `  local: ${actualValue}`,
  );
}

function compareField(localData, collection, entryId, field, expectedValue, actualValue) {
  if (typeof expectedValue === 'string' && typeof actualValue === 'string') {
    compareStringField(localData, collection, entryId, field, expectedValue, actualValue);
    return;
  }

  if (Array.isArray(expectedValue) && Array.isArray(actualValue)) {
    if (expectedValue.every((value) => typeof value === 'string')) {
      if (expectedValue.length !== actualValue.length) {
        fail(`${collection}/${entryId}.${field} has ${actualValue.length} items; live has ${expectedValue.length}`);
        return;
      }

      expectedValue.forEach((value, index) => {
        compareStringField(localData, collection, entryId, `${field}.${index}`, value, actualValue[index]);
      });
      return;
    }

    if (!valuesEqual(expectedValue, actualValue)) {
      fail(`${collection}/${entryId}.${field} differs from live site`);
    }
    return;
  }

  if (!valuesEqual(expectedValue, actualValue)) {
    fail(`${collection}/${entryId}.${field} differs from live site`);
  }
}

function compareCollection(localData, liveData, collection) {
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

    for (const field of COMPARISON_FIELDS[collection]) {
      compareField(localData, collection, expected.id, field, expected[field], actual[field]);
    }
  }

  for (const actual of actualEntries) {
    if (!expectedById.has(actual.id)) {
      fail(`${collection}/${actual.id} exists locally but is not traceable to the live site`);
    }
  }
}

function compareAssets(localData, liveData) {
  const liveSources = new Set(liveData.assets.map((asset) => asset.sourceUrl));
  const localSources = new Set(localData.assets.map((asset) => asset.sourceUrl));

  for (const sourceUrl of liveSources) {
    if (!localSources.has(sourceUrl)) {
      fail(`Missing local asset for live source ${sourceUrl}`);
    }
  }

  for (const sourceUrl of localSources) {
    if (!liveSources.has(sourceUrl)) {
      fail(`Local asset is not traceable to the live site: ${sourceUrl}`);
    }
  }
}

let livePage;

try {
  livePage = await extractLiveHtml();
} finally {
  try {
    await agentBrowser(['--session', SESSION, 'close']);
  } catch {
    // The comparison result matters more than a failed browser cleanup.
  }
}

if (livePage.url !== SOURCE_URL) {
  fail(`agent-browser ended on ${livePage.url}; expected ${SOURCE_URL}`);
}

const liveData = extractLegacySite(livePage.html, { applyTextCleanups: false });
const localData = await loadImportedData();

for (const collection of Object.keys(COMPARISON_FIELDS)) {
  compareCollection(localData, liveData, collection);
}

compareAssets(localData, liveData);

if (errors.length > 0) {
  console.error(`Live-site parity failed with ${errors.length} issue(s):`);
  for (const error of errors) {
    console.error(`- ${error}`);
  }
  process.exit(1);
}

console.log('Live-site parity test passed.');

