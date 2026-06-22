import assert from 'node:assert/strict';
import test from 'node:test';
import { absoluteBlogUrl, extractBlogSite, postSlugFromUrl } from './blog-site.mjs';

test('postSlugFromUrl extracts the post path slug', () => {
  assert.equal(postSlugFromUrl('https://phils.app/blog/riptoast/'), 'riptoast');
});

test('absoluteBlogUrl keeps blog URLs canonical', () => {
  assert.equal(absoluteBlogUrl('/blog/privacy/'), 'https://phils.app/blog/privacy/');
});

test('extractBlogSite parses posts and rewrites image assets locally', () => {
  const feed = JSON.stringify({
    items: [
      {
        id: 'https://phils.app/blog/example/',
        url: 'https://phils.app/blog/example/',
        title: 'Example &#39;Post&#39;',
        date_published: '2023-01-01T00:00:00Z',
        content_html:
          '<p>Hello <a href="/about/">there</a></p><picture><source srcset="https://phils.app/img/example-600.avif 600w"><img alt="Example image" src="https://phils.app/img/example-600.jpeg"></picture>',
      },
    ],
  });
  const pages = {
    'https://phils.app/blog/example/':
      '<html><head><meta name="description" content="Example description"></head><body><a href="/tags/testing/">testing</a></body></html>',
  };

  const data = extractBlogSite(feed, pages);

  assert.equal(data.blogPosts.length, 1);
  assert.equal(data.blogPosts[0].id, 'example');
  assert.equal(data.blogPosts[0].title, "Example 'Post'");
  assert.deepEqual(data.blogPosts[0].tags, ['testing']);
  assert.equal(data.blogAssets.length, 2);
  assert.match(data.blogPosts[0].contentHtml, /\/blog\/example-600\.avif/);
  assert.match(data.blogPosts[0].contentHtml, /\/blog\/example-600\.jpeg/);
});
