export function sortPostsByDate(posts) {
  return [...posts].sort((a, b) => Date.parse(b.datePublished) - Date.parse(a.datePublished));
}

export function formatPostDate(isoDate) {
  return new Date(isoDate).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    timeZone: 'UTC',
  });
}

// Imported post HTML contains header-anchor links whose hrefs still point at
// the old site (https://phils.app/blog/<slug>/). Rewrite them to the heading's
// own #id fragment so they work as in-page permalinks.
export function localizePostHtml(html) {
  return html.replace(
    /<h([2-4]) id="([^"]+)"([^>]*)>([\s\S]*?)<a class="header-anchor" href="[^"]*">/g,
    (match, level, id, attrs, inner) =>
      `<h${level} id="${id}"${attrs}>${inner}<a class="header-anchor" href="#${id}">`,
  );
}
