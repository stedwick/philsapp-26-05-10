import assert from 'node:assert/strict';
import test from 'node:test';
import {
  actionsFromLinks,
  createAssetLookup,
  legacyIconForEntryId,
  legacySocialIconForLabel,
  resolveImage,
  siteLabelFromUrl,
  sortByOrder,
} from '../src/data/resume-data.mjs';

test('sortByOrder returns entries in imported display order', () => {
  assert.deepEqual(
    sortByOrder([
      { id: 'second', order: 2 },
      { id: 'first', order: 1 },
    ]).map((item) => item.id),
    ['first', 'second'],
  );
});

test('resolveImage returns 1x and 2x sources for retina displays', () => {
  const assets = createAssetLookup([
    { id: 'logo', localPath: '/legacy/logo.png', alt: 'Logo' },
    { id: 'logo-2x', localPath: '/legacy/logo@2x.png', alt: 'Logo' },
  ]);

  assert.deepEqual(resolveImage(assets, 'logo', 'logo-2x'), {
    src: '/legacy/logo.png',
    srcSet: '/legacy/logo.png 1x, /legacy/logo@2x.png 2x',
    alt: 'Logo',
  });
});

test('siteLabelFromUrl keeps work-card headers close to the legacy site', () => {
  assert.equal(siteLabelFromUrl('https://syncta.com/'), 'www.syncta.com');
  assert.equal(siteLabelFromUrl('https://www.meritpages.com/'), 'www.meritpages.com');
  assert.equal(
    siteLabelFromUrl('http://web.archive.org/web/20130601003317/http://readabout.me/'),
    'www.readabout.me',
  );
});

test('actionsFromLinks removes duplicate title links and marks GitHub links secondary', () => {
  assert.deepEqual(
    actionsFromLinks({
      title: 'Poker Tracker',
      url: 'https://example.com/',
      links: [
        { label: 'Poker Tracker', url: 'https://example.com/' },
        { label: 'Go all in with Aces', url: 'https://example.com/play' },
        { label: 'View on GitHub', url: 'https://github.com/stedwick/pokertracker' },
      ],
    }),
    [
      { label: 'Go all in with Aces', href: 'https://example.com/play', variant: 'outline' },
      { label: 'View on GitHub', href: 'https://github.com/stedwick/pokertracker', variant: 'secondary' },
    ],
  );
});

test('legacySocialIconForLabel maps profile social links to legacy brand icons', () => {
  assert.deepEqual(
    ['LinkedIn', 'GitHub', 'Stack Overflow', 'Twitter'].map((label) => legacySocialIconForLabel(label)),
    ['linkedin', 'github', 'stackoverflow', 'twitter'],
  );
});

test('legacyIconForEntryId maps education and project entries to legacy icons', () => {
  assert.deepEqual(
    [
      'massachusetts-institute-of-technology',
      'new-york-university',
      'nyc-department-of-education',
      'poker-tracker',
      'munch',
      'sci-fi-voter',
      'docker-dashboard',
      'taggy-for-evernote',
      'arkanoid',
    ].map((id) => legacyIconForEntryId(id)),
    ['mit', 'nyu', 'classroom', 'poker', 'cookie', 'starTrek', 'terminal', 'evernote', 'gamecontroller'],
  );
});
