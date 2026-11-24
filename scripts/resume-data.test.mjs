import assert from 'node:assert/strict';
import test from 'node:test';
import {
  actionsFromLinks,
  createAssetLookup,
  formatCareerMeta,
  formatCareerRoles,
  formatDateRange,
  groupSkillsByCategory,
  legacyIconForEntryId,
  legacySocialIconForLabel,
  normalizeRoleTitle,
  resolveImage,
  siteLabelFromUrl,
  sortByOrder,
  summarizeCareerTenure,
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
    ['LinkedIn', 'GitHub', 'World Vibe Web', 'Twitter', 'YouTube'].map((label) => legacySocialIconForLabel(label)),
    ['linkedin', 'github', 'storefront', 'twitter', 'youtube'],
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

test('groupSkillsByCategory partitions skills and preserves order within each group', () => {
  const groups = groupSkillsByCategory([
    { id: 'leadership-second', category: 'leadership', order: 4 },
    { id: 'technical-second', category: 'technical', order: 3 },
    { id: 'leadership-first', category: 'leadership', order: 2 },
    { id: 'technical-first', category: 'technical', order: 1 },
  ]);

  assert.deepEqual(
    groups.technical.map((skill) => skill.id),
    ['technical-first', 'technical-second'],
  );
  assert.deepEqual(
    groups.leadership.map((skill) => skill.id),
    ['leadership-first', 'leadership-second'],
  );
});

test('formatDateRange replaces en/em dashes with plain punctuation', () => {
  assert.equal(formatDateRange('May 2025 – Present'), 'May 2025 to Present');
  assert.equal(formatDateRange('2014 — 2016'), '2014 to 2016');
  assert.equal(formatDateRange(''), '');
});

test('normalizeRoleTitle standardizes slash-delimited specializations', () => {
  assert.equal(
    normalizeRoleTitle('Senior Software Engineer / Ruby on Rails'),
    'Senior Software Engineer, Ruby on Rails',
  );
  assert.equal(normalizeRoleTitle('Lead Software Engineer'), 'Lead Software Engineer');
});

test('formatCareerRoles normalizes role titles and date ranges consistently', () => {
  assert.deepEqual(
    formatCareerRoles([
      { title: 'Senior Software Engineer / Ruby on Rails', dates: '2014 – 2016' },
      { title: 'Software Engineer', dates: '2008 – 2014' },
    ]),
    [
      { title: 'Senior Software Engineer, Ruby on Rails', dates: '2014 to 2016' },
      { title: 'Software Engineer', dates: '2008 to 2014' },
    ],
  );
});

test('summarizeCareerTenure spans earliest start to latest end across roles', () => {
  assert.equal(
    summarizeCareerTenure([{ title: 'Lead Software Engineer', dates: 'May 2025 – Present' }]),
    'May 2025 to Present',
  );
  assert.equal(
    summarizeCareerTenure([
      { title: 'Senior Software Engineering Manager', dates: '2019 – April 2025' },
      { title: 'Lead Software Engineer', dates: '2018 – 2019' },
    ]),
    '2018 to April 2025',
  );
  assert.equal(
    summarizeCareerTenure([
      { title: 'Senior Software Engineer / Ruby on Rails', dates: '2014 – 2016' },
      { title: 'Software Engineer', dates: '2008 – 2014' },
    ]),
    '2008 to 2016',
  );
  assert.equal(summarizeCareerTenure([]), '');
});

test('formatCareerMeta joins city and full tenure uniformly', () => {
  assert.equal(
    formatCareerMeta('Portland, OR', [{ title: 'Lead', dates: 'May 2025 – Present' }]),
    'Portland, OR · May 2025 to Present',
  );
  assert.equal(
    formatCareerMeta('New York, NY', [
      { title: 'Senior Software Engineer / Ruby on Rails', dates: '2014 – 2016' },
      { title: 'Software Engineer', dates: '2008 – 2014' },
    ]),
    'New York, NY · 2008 to 2016',
  );
  assert.equal(formatCareerMeta('Portland, OR', []), 'Portland, OR');
});
