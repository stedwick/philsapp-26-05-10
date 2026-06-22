import * as cheerio from 'cheerio';
import { readFile } from 'node:fs/promises';
import path from 'node:path';
import { normalizeText, slugify } from './legacy-site.mjs';

export const BLOG_SOURCE_URL = 'https://phils.app/';
export const BLOG_ARCHIVE_URL = 'https://phils.app/blog/';
export const BLOG_FEED_URL = 'https://phils.app/feed/feed.json';
export const BLOG_DATA_DIR = path.join(process.cwd(), 'src/data/imported');
export const BLOG_PUBLIC_ASSET_DIR = path.join(process.cwd(), 'public/blog');

export const BLOG_COLLECTION_FILES = {
  blogPosts: 'blog-posts.json',
  blogAssets: 'blog-assets.json',
};

const BLOG_COLLECTION_ORDER = Object.keys(BLOG_COLLECTION_FILES);

export function absoluteBlogUrl(value, baseUrl = BLOG_SOURCE_URL) {
  if (!value) return '';

  if (/^(mailto|tel|javascript):/i.test(value) || value.startsWith('#')) {
    return value;
  }

  return new URL(value, baseUrl).href;
}

export function postSlugFromUrl(url) {
  const parsed = new URL(url);
  const segments = parsed.pathname.split('/').filter(Boolean);
  return segments.at(-1) || slugify(parsed.pathname);
}

function decodeHtml(value = '') {
  return cheerio.load(`<span>${value}</span>`)('span').text();
}

function filenameFromSource(sourceUrl) {
  const url = new URL(sourceUrl);
  const rawName = decodeURIComponent(url.pathname.split('/').filter(Boolean).pop() || 'asset');
  return rawName.replace(/[^A-Za-z0-9._@-]/g, '-');
}

function srcsetUrls(srcset = '') {
  return srcset
    .split(',')
    .map((candidate) => candidate.trim())
    .filter(Boolean)
    .map((candidate) => {
      const [url, ...descriptors] = candidate.split(/\s+/);
      return { url, descriptor: descriptors.join(' ') };
    });
}

function createBlogAssetRegistry() {
  const bySourceUrl = new Map();
  const usedIds = new Set();
  const usedPaths = new Map();
  const assets = [];

  function uniqueId(base) {
    const normalizedBase = slugify(base) || 'asset';
    let id = normalizedBase;
    let suffix = 2;

    while (usedIds.has(id)) {
      id = `${normalizedBase}-${suffix}`;
      suffix += 1;
    }

    usedIds.add(id);
    return id;
  }

  function uniqueLocalPath(filename, sourceUrl) {
    const existingSource = usedPaths.get(filename);

    if (!existingSource || existingSource === sourceUrl) {
      usedPaths.set(filename, sourceUrl);
      return `/blog/${filename}`;
    }

    const parsed = path.parse(filename);
    let suffix = 2;
    let candidate = `${parsed.name}-${suffix}${parsed.ext}`;

    while (usedPaths.has(candidate) && usedPaths.get(candidate) !== sourceUrl) {
      suffix += 1;
      candidate = `${parsed.name}-${suffix}${parsed.ext}`;
    }

    usedPaths.set(candidate, sourceUrl);
    return `/blog/${candidate}`;
  }

  function registerAsset(source, { alt = '', ownerId, field }) {
    if (!source) return '';

    const sourceUrl = absoluteBlogUrl(source);
    if (!/^https?:\/\//i.test(sourceUrl)) return '';

    const owner = { collection: 'blogPosts', id: ownerId, field };
    const existing = bySourceUrl.get(sourceUrl);

    if (existing) {
      if (!existing.owners.some((entry) => JSON.stringify(entry) === JSON.stringify(owner))) {
        existing.owners.push(owner);
      }
      return existing.id;
    }

    const filename = filenameFromSource(sourceUrl);
    const asset = {
      id: uniqueId(path.parse(filename).name),
      sourceUrl,
      localPath: uniqueLocalPath(filename, sourceUrl),
      kind: 'blog-image',
      alt: normalizeText(decodeHtml(alt)),
      owners: [owner],
      order: assets.length,
    };

    assets.push(asset);
    bySourceUrl.set(sourceUrl, asset);
    return asset.id;
  }

  return { assets, registerAsset, bySourceUrl };
}

function linksFromContent($) {
  const seen = new Set();
  const links = [];

  $('a[href]').each((_, anchor) => {
    const href = $(anchor).attr('href');
    const label = normalizeText($(anchor).text()) || href;
    const url = absoluteBlogUrl(href);
    const key = `${label}|${url}`;

    if (!href || $(anchor).hasClass('header-anchor') || seen.has(key)) return;

    seen.add(key);
    links.push({ label, url });
  });

  return links;
}

function pageMetadata(html, url) {
  const $ = cheerio.load(html || '');
  const tagSet = new Set();

  $('a[href*="/tags/"]').each((_, anchor) => {
    const label = normalizeText($(anchor).text());
    if (label) tagSet.add(label);
  });

  return {
    description: normalizeText($('meta[name="description"]').attr('content') || ''),
    tags: [...tagSet],
    datePublished: $('time[datetime]').first().attr('datetime') || '',
    sourceUrl: url,
  };
}

function localizeContentHtml(contentHtml, registry, postId) {
  const $ = cheerio.load(contentHtml || '', { decodeEntities: false }, false);
  const assetIds = new Set();

  $('source[srcset]').each((_, source) => {
    const alt = $(source).closest('picture').find('img[alt]').first().attr('alt') || '';
    const rewritten = srcsetUrls($(source).attr('srcset'))
      .map(({ url, descriptor }) => {
        const assetId = registry.registerAsset(url, {
          alt,
          ownerId: postId,
          field: 'contentHtml',
        });
        if (assetId) assetIds.add(assetId);

        const asset = registry.bySourceUrl.get(absoluteBlogUrl(url));
        return [asset?.localPath || url, descriptor].filter(Boolean).join(' ');
      })
      .join(', ');

    $(source).attr('srcset', rewritten);
  });

  $('img[src]').each((_, image) => {
    const assetId = registry.registerAsset($(image).attr('src'), {
      alt: $(image).attr('alt') || '',
      ownerId: postId,
      field: 'contentHtml',
    });
    if (assetId) assetIds.add(assetId);

    const asset = registry.bySourceUrl.get(absoluteBlogUrl($(image).attr('src')));
    if (asset) $(image).attr('src', asset.localPath);
    $(image).removeAttr('loading');
  });

  return {
    assetIds: [...assetIds],
    contentHtml: $.root().html() || '',
    contentText: normalizeText($.root().text()),
    links: linksFromContent($),
  };
}

export function extractBlogSite(feedJson, pageHtmlByUrl = {}) {
  const feed = JSON.parse(feedJson);
  const registry = createBlogAssetRegistry();

  const blogPosts = (feed.items || []).map((item, order) => {
    const id = postSlugFromUrl(item.url || item.id);
    const metadata = pageMetadata(pageHtmlByUrl[item.url] || '', item.url);
    const localized = localizeContentHtml(item.content_html || '', registry, id);

    return {
      id,
      title: decodeHtml(item.title || ''),
      url: absoluteBlogUrl(item.url || item.id),
      datePublished: item.date_published || metadata.datePublished,
      description: metadata.description,
      tags: metadata.tags,
      contentText: localized.contentText,
      sourceContentHtml: item.content_html || '',
      contentHtml: localized.contentHtml,
      links: localized.links,
      assetIds: localized.assetIds,
      order,
    };
  });

  return {
    blogPosts,
    blogAssets: registry.assets,
  };
}

export async function loadImportedBlogData() {
  const entries = await Promise.all(
    Object.entries(BLOG_COLLECTION_FILES).map(async ([collection, filename]) => {
      const contents = await readFile(path.join(BLOG_DATA_DIR, filename), 'utf8');
      return [collection, JSON.parse(contents)];
    }),
  );

  return Object.fromEntries(entries);
}

export function blogCollectionFilePath(collection) {
  return path.join(BLOG_DATA_DIR, BLOG_COLLECTION_FILES[collection]);
}

export function blogCollectionsInOrder() {
  return BLOG_COLLECTION_ORDER;
}
