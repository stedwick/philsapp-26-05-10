import * as cheerio from 'cheerio';
import { readFile } from 'node:fs/promises';
import path from 'node:path';

export const SOURCE_URL = 'https://philipbrocoum.com/';
export const DATA_DIR = path.join(process.cwd(), 'src/data/imported');
export const PUBLIC_ASSET_DIR = path.join(process.cwd(), 'public/legacy');

export const COLLECTION_FILES = {
  profile: 'profile.json',
  sections: 'sections.json',
  skills: 'skills.json',
  experience: 'experience.json',
  education: 'education.json',
  projects: 'projects.json',
  personalLinks: 'personal-links.json',
  contact: 'contact.json',
  assets: 'assets.json',
  cleanupNotes: 'cleanup-notes.json',
};

const COLLECTION_ORDER = Object.keys(COLLECTION_FILES);

export function normalizeText(value = '') {
  return value
    .replace(/\u00a0/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

export function slugify(value) {
  return normalizeText(value)
    .toLowerCase()
    .replace(/&/g, 'and')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');
}

export function normalizeComparable(value) {
  if (Array.isArray(value)) {
    return value.map(normalizeComparable);
  }

  if (value && typeof value === 'object') {
    return Object.fromEntries(
      Object.entries(value)
        .filter(([key]) => key !== 'order')
        .map(([key, entryValue]) => [key, normalizeComparable(entryValue)]),
    );
  }

  if (typeof value === 'string') {
    return normalizeText(value);
  }

  return value;
}

export function absoluteUrl(value, baseUrl = SOURCE_URL) {
  if (!value) return '';

  const normalizedValue = String(value).replace(/^assets\/\//, 'assets/');

  if (/^(mailto|tel|javascript):/i.test(normalizedValue) || normalizedValue.startsWith('#')) {
    return normalizedValue;
  }

  return new URL(normalizedValue, baseUrl).href;
}

function cleanObjectText(value) {
  if (typeof value !== 'string') return value;
  return normalizeText(value);
}

function textWithout($, element, selectorsToRemove = []) {
  const clone = $(element).clone();
  selectorsToRemove.forEach((selector) => clone.find(selector).remove());
  return normalizeText(clone.text());
}

function linksFrom($, element) {
  const seen = new Set();
  const links = [];

  $(element)
    .find('a[href]')
    .each((_, anchor) => {
      const href = $(anchor).attr('href');
      const url = absoluteUrl(href);
      const label = normalizeText($(anchor).text()) || normalizeText($(anchor).attr('title')) || url;
      const key = `${label}|${url}`;

      if (!href || seen.has(key) || /^javascript:/i.test(href)) return;

      seen.add(key);
      links.push({ label, url });
    });

  return links;
}

function firstLink($, element) {
  const anchor = $(element).find('a[href]').first();
  return {
    label: normalizeText(anchor.text()),
    url: absoluteUrl(anchor.attr('href')),
  };
}

function iconName($, element) {
  const href = $(element).find('svg use').first().attr('xlink:href') || '';
  return href.replace('#icon-', '');
}

function filenameFromSource(sourceUrl) {
  const url = new URL(sourceUrl);
  const rawName = decodeURIComponent(url.pathname.split('/').filter(Boolean).pop() || 'asset');
  return rawName.replace(/[^A-Za-z0-9._@-]/g, '-');
}

function createAssetRegistry() {
  const bySourceUrl = new Map();
  const usedIds = new Set();
  const usedPaths = new Map();
  const assets = [];

  function uniqueId(base) {
    let id = slugify(base) || 'asset';
    let suffix = 2;

    while (usedIds.has(id)) {
      id = `${slugify(base)}-${suffix}`;
      suffix += 1;
    }

    usedIds.add(id);
    return id;
  }

  function uniqueLocalPath(filename, sourceUrl) {
    const existingSource = usedPaths.get(filename);

    if (!existingSource || existingSource === sourceUrl) {
      usedPaths.set(filename, sourceUrl);
      return `/legacy/${filename}`;
    }

    const parsed = path.parse(filename);
    let suffix = 2;
    let candidate = `${parsed.name}-${suffix}${parsed.ext}`;

    while (usedPaths.has(candidate) && usedPaths.get(candidate) !== sourceUrl) {
      suffix += 1;
      candidate = `${parsed.name}-${suffix}${parsed.ext}`;
    }

    usedPaths.set(candidate, sourceUrl);
    return `/legacy/${candidate}`;
  }

  function registerAsset(source, { kind, alt = '', ownerCollection, ownerId, field }) {
    if (!source) return '';

    const sourceUrl = absoluteUrl(source);
    if (!/^https?:\/\//i.test(sourceUrl)) return '';

    const existing = bySourceUrl.get(sourceUrl);
    const owner = { collection: ownerCollection, id: ownerId, field };

    if (existing) {
      if (!existing.owners.some((entry) => JSON.stringify(entry) === JSON.stringify(owner))) {
        existing.owners.push(owner);
      }
      return existing.id;
    }

    const filename = filenameFromSource(sourceUrl);
    const id = uniqueId(path.parse(filename).name);
    const asset = {
      id,
      sourceUrl,
      localPath: uniqueLocalPath(filename, sourceUrl),
      kind,
      alt: normalizeText(alt),
      owners: [owner],
      order: assets.length,
    };

    assets.push(asset);
    bySourceUrl.set(sourceUrl, asset);
    return id;
  }

  return { assets, registerAsset };
}

function registerImageAssets($, image, registry, ownerCollection, ownerId, field) {
  const alt = $(image).attr('alt') || '';
  const assetId = registry.registerAsset($(image).attr('src'), {
    kind: 'image',
    alt,
    ownerCollection,
    ownerId,
    field,
  });
  const highResAssetId = registry.registerAsset($(image).attr('data-rjs'), {
    kind: 'image-2x',
    alt,
    ownerCollection,
    ownerId,
    field: `${field}HighRes`,
  });

  return { assetId, highResAssetId, alt: normalizeText(alt) };
}

function parseStyleAssets($, registry) {
  $('style').each((_, style) => {
    const css = $(style).html() || '';
    const matches = css.matchAll(/url\((['"]?)(.*?)\1\)/g);

    for (const match of matches) {
      registry.registerAsset(match[2], {
        kind: 'cover-background',
        alt: 'Cover background',
        ownerCollection: 'profile',
        ownerId: 'main',
        field: 'coverBackgrounds',
      });
    }
  });
}

function sectionEntry($, id, title, bodyElements, order) {
  const body = bodyElements.map((element) => normalizeText($(element).text())).filter(Boolean);
  const wrapper = cheerio.load('<div></div>');
  bodyElements.forEach((element) => wrapper('div').append(wrapper.html($(element).clone())));

  return {
    id,
    title,
    body,
    links: bodyElements.flatMap((element) => linksFrom($, element)),
    order,
  };
}

function introductionByHeading($, headingText) {
  const heading = $('h3')
    .filter((_, element) => normalizeText($(element).text()) === headingText)
    .first();

  return heading.parent().find('p').first();
}

function parseFooterLines($, footer) {
  const clone = $(footer).clone();
  clone.find('br').replaceWith('\n');

  return clone
    .text()
    .split('\n')
    .map(normalizeText)
    .filter(Boolean);
}

function parseRoles(footerLines) {
  return footerLines
    .filter((line) => !/^[A-Z][A-Za-z .-]+,\s[A-Z]{2}(?:\s+\(.*\))?$/.test(line))
    .map((line) => {
      const match = line.match(/^(.*?)\s*\((.*?)\)$/);
      return {
        title: match ? normalizeText(match[1]) : line,
        dates: match ? normalizeText(match[2]) : '',
      };
    });
}

function parseProfile($, registry) {
  const profileImage = $('#profile-pic-container img').first();
  const { assetId, highResAssetId } = registerImageAssets(
    $,
    profileImage,
    registry,
    'profile',
    'main',
    'portrait',
  );
  const coverAssetIds = registry.assets
    .filter((asset) => asset.kind === 'cover-background')
    .map((asset) => asset.id);

  return [
    {
      id: 'main',
      name: normalizeText($('#cover h1').first().text()),
      headline: normalizeText($('#cover p.lead').first().text()),
      tagline: normalizeText($('#cover p.mb-4').first().text()),
      portraitAssetId: assetId,
      portraitHighResAssetId: highResAssetId,
      coverAssetIds,
      socialLinks: linksFrom($, $('#cover p.icons').first()),
      primaryAction: {
        label: normalizeText($('#cover .btn-info').first().text()),
        target: '#contact',
      },
      sourceUrl: SOURCE_URL,
      order: 0,
    },
  ];
}

function parseSections($) {
  const sectionSources = [
    {
      id: 'about',
      title: 'About Me',
      bodyElements: $('#about p')
        .filter((_, element) => normalizeText($(element).text()))
        .toArray(),
    },
    {
      id: 'career',
      title: 'My Career',
      bodyElements: $('#career p')
        .filter((_, element) => normalizeText($(element).text()))
        .toArray(),
    },
    {
      id: 'education',
      title: 'Education',
      bodyElements: [introductionByHeading($, 'Education').get(0)].filter(Boolean),
    },
    {
      id: 'fun-stuff',
      title: 'Fun Stuff',
      bodyElements: [introductionByHeading($, 'Fun Stuff').get(0)].filter(Boolean),
    },
    {
      id: 'personal-life',
      title: 'Personal Life',
      bodyElements: [$('#interests > .row > .col-12 p').first().get(0)].filter(Boolean),
    },
    {
      id: 'contact',
      title: 'Contact Me',
      bodyElements: [$('#contact .col-12.col-xl-11 p').first().get(0)].filter(Boolean),
    },
  ];

  return sectionSources.map((source, order) =>
    sectionEntry($, source.id, source.title, source.bodyElements, order),
  );
}

function parseSkills($, registry) {
  return $('#about-skills .media')
    .toArray()
    .map((element, order) => {
      const title = normalizeText($(element).find('h5').first().text());
      const id = slugify(title);
      const image = $(element).find('img').first();
      const { assetId, highResAssetId, alt } = registerImageAssets(
        $,
        image,
        registry,
        'skills',
        id,
        'icon',
      );

      return {
        id,
        title,
        url: firstLink($, $(element).find('h5').first()).url,
        description: normalizeText($(element).find('p').first().text()),
        iconAssetId: assetId,
        iconHighResAssetId: highResAssetId,
        iconAlt: alt,
        order,
      };
    });
}

function parseExperience($, registry) {
  return $('#career-sites .card')
    .toArray()
    .map((card, order) => {
      const company = normalizeText($(card).find('.card-title').first().text());
      const id = slugify(company);
      const logo = $(card).find('.card-header img').first();
      const screenshot = $(card).find('.fixed-ratio-content').first();
      const logoAssets = registerImageAssets($, logo, registry, 'experience', id, 'logo');
      const screenshotAssets = registerImageAssets(
        $,
        screenshot,
        registry,
        'experience',
        id,
        'screenshot',
      );
      const footerLines = parseFooterLines($, $(card).find('.card-footer').first());
      const locationLine = footerLines.find((line) => /^[A-Z][A-Za-z .-]+,\s[A-Z]{2}/.test(line)) || '';

      return {
        id,
        company,
        websiteUrl: firstLink($, $(card).find('.card-header').first()).url,
        description: normalizeText($(card).find('.card-text').first().text()),
        visitLabel: normalizeText($(card).find('.btn').first().text()),
        roles: parseRoles(footerLines),
        footerLines,
        location: locationLine.replace(/\s*\(.*\)$/, ''),
        logoAssetId: logoAssets.assetId,
        logoHighResAssetId: logoAssets.highResAssetId,
        logoAlt: logoAssets.alt,
        screenshotAssetId: screenshotAssets.assetId,
        screenshotHighResAssetId: screenshotAssets.highResAssetId,
        screenshotAlt: screenshotAssets.alt,
        order,
      };
    });
}

function parseEducation($) {
  return $('#education .media')
    .toArray()
    .map((element, order) => {
      const title = normalizeText($(element).find('h5').first().text());
      const id = slugify(title);

      return {
        id,
        title,
        url: firstLink($, $(element).find('h5').first()).url,
        addendum: normalizeText($(element).find('.addendum').first().text()).replace(/^—\s*/, ''),
        description: normalizeText(
          $(element)
            .find('p')
            .toArray()
            .map((paragraph) => normalizeText($(paragraph).text()))
            .filter(Boolean)
            .join(' '),
        ),
        links: linksFrom($, $(element).find('.media-body').first()),
        iconName: iconName($, element),
        order,
      };
    });
}

function parseProjects($) {
  return $('#projects .media')
    .toArray()
    .map((element, order) => {
      const title = normalizeText($(element).find('h5').first().text());
      const id = slugify(title);

      return {
        id,
        title,
        url: firstLink($, $(element).find('h5').first()).url,
        description: normalizeText($(element).find('.media-body > p').first().text()),
        links: linksFrom($, $(element).find('.media-body').first()),
        iconName: iconName($, element),
        order,
      };
    });
}

function parsePersonalLinks($, registry) {
  return $('#interests .media')
    .toArray()
    .map((element, order) => {
      const title = normalizeText($(element).find('h5').first().text());
      const id = slugify(title);
      const image = $(element).find('img').first();
      const { assetId, highResAssetId, alt } = registerImageAssets(
        $,
        image,
        registry,
        'personalLinks',
        id,
        'icon',
      );

      return {
        id,
        title,
        url: firstLink($, $(element).find('h5').first()).url,
        description: normalizeText($(element).find('p').first().text()),
        links: linksFrom($, $(element).find('.media-body').first()),
        iconAssetId: assetId,
        iconHighResAssetId: highResAssetId,
        iconAlt: alt,
        order,
      };
    });
}

function parseContact($, registry) {
  const contactInfo = $('#contact .contactInfo').first();
  const items = contactInfo
    .find('li')
    .toArray()
    .map((item) => textWithout($, item, ['.icon-container']))
    .filter(Boolean);
  const phoneLink = contactInfo.find('a[href^="tel:"]').first();
  const emailLink = contactInfo.find('a[href^="mailto:"]').first();
  const linkedInLink = contactInfo.find('a[href*="linkedin.com"]').first();
  const resumeLink = contactInfo.find('a[href$=".pdf"]').first();
  const resumeAssetId = registry.registerAsset(resumeLink.attr('href'), {
    kind: 'resume-pdf',
    alt: normalizeText(resumeLink.text()),
    ownerCollection: 'contact',
    ownerId: 'main',
    field: 'resume',
  });

  return [
    {
      id: 'main',
      intro: normalizeText($('#contact .col-12.col-xl-11 p').first().text()),
      name: items[0] || '',
      location: items[1] || '',
      phoneDisplay: normalizeText(phoneLink.text()),
      phoneHref: absoluteUrl(phoneLink.attr('href')),
      email: normalizeText(emailLink.text()),
      emailHref: absoluteUrl(emailLink.attr('href')),
      linkedInLabel: normalizeText(linkedInLink.text()),
      linkedInUrl: absoluteUrl(linkedInLink.attr('href')),
      resumeLabel: normalizeText(resumeLink.text()),
      resumeAssetId,
      formAction: absoluteUrl($('#contact form').first().attr('action')),
      order: 0,
    },
  ];
}

function cleanupValue(value, { collection, id, field, notes }) {
  if (typeof value !== 'string') return value;

  const rules = [
    {
      collection: 'sections',
      id: 'contact',
      field: 'body.0',
      match: /^H+Hi there!/,
      replace: 'Hi there!',
      reason: 'Removed duplicate drop-cap text from the rendered contact intro.',
    },
    {
      collection: 'contact',
      id: 'main',
      field: 'intro',
      match: /^H+Hi there!/,
      replace: 'Hi there!',
      reason: 'Removed duplicate drop-cap text from the rendered contact intro.',
    },
    {
      collection: 'personalLinks',
      id: 'toast-the-dog',
      field: 'description',
      match: /Such a good dog, but he sometimes sits onkjf ssadkl/,
      replace: 'Such a good dog.',
      reason: 'Removed obvious trailing keyboard-mash artifact from the Toast description.',
    },
  ];

  const rule = rules.find(
    (candidate) =>
      candidate.collection === collection &&
      candidate.id === id &&
      candidate.field === field &&
      candidate.match.test(value),
  );

  if (!rule) return value;

  const cleanedText = normalizeText(value.replace(rule.match, rule.replace));
  notes.push({
    id: `${collection}-${id}-${slugify(field)}`,
    collection,
    entryId: id,
    field,
    originalText: value,
    cleanedText,
    reason: rule.reason,
    order: notes.length,
  });

  return cleanedText;
}

function applyCleanups(data) {
  const notes = [];

  for (const section of data.sections) {
    section.body = section.body.map((paragraph, index) =>
      cleanupValue(paragraph, {
        collection: 'sections',
        id: section.id,
        field: `body.${index}`,
        notes,
      }),
    );
  }

  for (const link of data.personalLinks) {
    link.description = cleanupValue(link.description, {
      collection: 'personalLinks',
      id: link.id,
      field: 'description',
      notes,
    });
  }

  for (const contact of data.contact) {
    contact.intro = cleanupValue(contact.intro, {
      collection: 'contact',
      id: contact.id,
      field: 'intro',
      notes,
    });
  }

  data.cleanupNotes = notes;
  return data;
}

export function extractLegacySite(html, { applyTextCleanups = true } = {}) {
  const $ = cheerio.load(html);
  const registry = createAssetRegistry();

  parseStyleAssets($, registry);

  const data = {
    profile: parseProfile($, registry),
    sections: parseSections($),
    skills: parseSkills($, registry),
    experience: parseExperience($, registry),
    education: parseEducation($),
    projects: parseProjects($),
    personalLinks: parsePersonalLinks($, registry),
    contact: [],
    assets: registry.assets,
    cleanupNotes: [],
  };

  data.contact = parseContact($, registry);

  if (applyTextCleanups) {
    applyCleanups(data);
  }

  for (const collection of COLLECTION_ORDER) {
    data[collection] = (data[collection] || []).map((entry) => {
      const cleaned = {};
      for (const [key, value] of Object.entries(entry)) {
        cleaned[key] = cleanObjectText(value);
      }
      return cleaned;
    });
  }

  return data;
}

export async function loadImportedData() {
  const entries = await Promise.all(
    Object.entries(COLLECTION_FILES).map(async ([collection, filename]) => {
      const contents = await readFile(path.join(DATA_DIR, filename), 'utf8');
      return [collection, JSON.parse(contents)];
    }),
  );

  return Object.fromEntries(entries);
}

export function cleanupNoteFor(data, collection, entryId, field, originalText, cleanedText) {
  return data.cleanupNotes.find(
    (note) =>
      note.collection === collection &&
      note.entryId === entryId &&
      note.field === field &&
      normalizeText(note.originalText) === normalizeText(originalText) &&
      normalizeText(note.cleanedText) === normalizeText(cleanedText),
  );
}

export function collectionFilePath(collection) {
  return path.join(DATA_DIR, COLLECTION_FILES[collection]);
}
