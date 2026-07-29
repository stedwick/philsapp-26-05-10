import assert from 'node:assert/strict';
import test from 'node:test';
import { formatPostDate, localizePostHtml, sortPostsByDate } from '../src/data/blog-data.mjs';

test('sortPostsByDate returns posts newest first without mutating input', () => {
  const posts = [
    { id: 'older', datePublished: '2023-11-16T00:00:00Z' },
    { id: 'newest', datePublished: '2023-12-05T00:00:00Z' },
    { id: 'middle', datePublished: '2023-12-03T00:00:00Z' },
  ];

  assert.deepEqual(
    sortPostsByDate(posts).map((post) => post.id),
    ['newest', 'middle', 'older'],
  );
  assert.deepEqual(
    posts.map((post) => post.id),
    ['older', 'newest', 'middle'],
  );
});

test('formatPostDate renders a stable UTC date', () => {
  assert.equal(formatPostDate('2023-12-05T00:00:00Z'), 'December 5, 2023');
});

test('localizePostHtml rewrites header anchors to in-page fragments', () => {
  const html =
    '<h2 id="rest-in-peace" tabindex="-1">Rest in Peace <a class="header-anchor" href="https://phils.app/blog/riptoast/">#</a></h2>';

  assert.equal(
    localizePostHtml(html),
    '<h2 id="rest-in-peace" tabindex="-1">Rest in Peace <a class="header-anchor" href="#rest-in-peace">#</a></h2>',
  );
});

test('localizePostHtml leaves external links and other markup untouched', () => {
  const html =
    '<p>See <a href="https://speech.phils.app">the app</a>.</p><p>No anchors here.</p>';

  assert.equal(localizePostHtml(html), html);
});
