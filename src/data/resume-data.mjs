export function sortByOrder(items) {
  return [...items].sort((a, b) => a.order - b.order);
}

export function createAssetLookup(assets) {
  return new Map(assets.map((asset) => [asset.id, asset]));
}

export function resolveImage(assetLookup, assetId, highResAssetId = '', alt = '') {
  const asset = assetLookup.get(assetId);
  const highResAsset = highResAssetId ? assetLookup.get(highResAssetId) : undefined;

  if (!asset) return undefined;

  return {
    src: asset.localPath,
    srcSet: highResAsset ? `${asset.localPath} 1x, ${highResAsset.localPath} 2x` : undefined,
    alt: alt || asset.alt,
  };
}

export function siteLabelFromUrl(url) {
  const parsedUrl = new URL(url);
  const archiveMatch = parsedUrl.pathname.match(/^\/web\/\d+\/(https?:\/\/.+)$/);
  const displayUrl = archiveMatch ? new URL(archiveMatch[1]) : parsedUrl;
  const hostname = displayUrl.hostname.replace(/^www\./, '');

  return `www.${hostname}`;
}

export function actionsFromLinks(item) {
  return item.links
    .filter((link) => !(link.url === item.url && link.label === item.title))
    .map((link) => ({
      label: link.label,
      href: link.url,
      variant: /github/i.test(link.label) ? 'secondary' : 'outline',
    }));
}

function iconForLabel(label, iconComponents) {
  const iconNameByLabel = {
    GitHub: 'GitFork',
    LinkedIn: 'BriefcaseBusiness',
    'Stack Overflow': 'MessageSquareCode',
    Twitter: 'MessageSquare',
  };

  return iconComponents[iconNameByLabel[label]] ?? iconComponents.CircleUserRound;
}

export function legacySocialIconForLabel(label) {
  const legacyIconByLabel = {
    GitHub: 'github',
    LinkedIn: 'linkedin',
    'Stack Overflow': 'stackoverflow',
    Twitter: 'twitter',
  };

  return legacyIconByLabel[label];
}

export function legacyIconForEntryId(id) {
  const legacyIconById = {
    'massachusetts-institute-of-technology': 'mit',
    'new-york-university': 'nyu',
    'nyc-department-of-education': 'classroom',
    'poker-tracker': 'poker',
    munch: 'cookie',
    'sci-fi-voter': 'starTrek',
    'docker-dashboard': 'terminal',
    'taggy-for-evernote': 'evernote',
    arkanoid: 'gamecontroller',
    opentrackir: 'eye',
    philnav: 'navigation',
    'phils-dictation-app': 'mic',
    'tater-talk': 'chatBubbles',
  };

  return legacyIconById[id];
}

function iconForEntry(entry, iconComponents) {
  const iconNameById = {
    'massachusetts-institute-of-technology': 'GraduationCap',
    'new-york-university': 'GraduationCap',
    'nyc-department-of-education': 'BriefcaseBusiness',
    'poker-tracker': 'Spade',
    munch: 'Gamepad2',
    'sci-fi-voter': 'Trophy',
    'docker-dashboard': 'Terminal',
    'taggy-for-evernote': 'FileText',
    arkanoid: 'Gamepad2',
  };

  return iconComponents[entry.iconName || iconNameById[entry.id]] ?? iconComponents.FileText;
}

function sectionById(sections, id) {
  return sections.find((section) => section.id === id);
}

export function createResumeViewModel(collections, iconComponents) {
  const assetLookup = createAssetLookup(collections.assets);
  const profile = collections.profile[0];
  const contact = collections.contact[0];
  const sections = sortByOrder(collections.sections);

  const profilePortrait = resolveImage(
    assetLookup,
    profile.portraitAssetId,
    profile.portraitHighResAssetId,
    profile.name,
  );

  const coverImages = profile.coverAssetIds.map((assetId) => assetLookup.get(assetId)?.localPath).filter(Boolean);

  return {
    profile: {
      name: profile.name,
      role: profile.headline,
      tagline: profile.tagline,
      credential: profile.credential,
      portrait: profilePortrait,
      heroImages: {
        sm: coverImages[0],
        md: coverImages[1] ?? coverImages[0],
        lg: coverImages[2] ?? coverImages[1] ?? coverImages[0],
      },
      primaryAction: {
        label: profile.primaryAction.label,
        target: profile.primaryAction.target,
      },
    },
    socialLinks: profile.socialLinks.map((link) => ({
      label: link.label,
      href: link.url,
      icon: iconForLabel(link.label, iconComponents),
      legacyIcon: legacySocialIconForLabel(link.label),
    })),
    sections: {
      about: sectionById(sections, 'about'),
      career: sectionById(sections, 'career'),
      education: sectionById(sections, 'education'),
      projects: sectionById(sections, 'fun-stuff'),
      personalLife: sectionById(sections, 'personal-life'),
      contact: sectionById(sections, 'contact'),
    },
    skills: sortByOrder(collections.skills).map((skill) => ({
      title: skill.title,
      href: skill.url,
      body: skill.description,
      image: resolveImage(assetLookup, skill.iconAssetId, skill.iconHighResAssetId, skill.iconAlt),
    })),
    career: sortByOrder(collections.experience).map((entry) => ({
      title: entry.company,
      siteLabel: siteLabelFromUrl(entry.websiteUrl),
      href: entry.websiteUrl,
      logo: resolveImage(assetLookup, entry.logoAssetId, entry.logoHighResAssetId, entry.logoAlt),
      image: resolveImage(assetLookup, entry.screenshotAssetId, entry.screenshotHighResAssetId, entry.screenshotAlt),
      body: entry.description,
      action: entry.visitLabel,
      links: (entry.links ?? []).map((link) => ({ label: link.label, href: link.url })),
      footer: entry.footerLines,
    })),
    education: sortByOrder(collections.education).map((item) => ({
      id: item.id,
      title: item.title,
      href: item.url,
      icon: iconForEntry(item, iconComponents),
      legacyIcon: legacyIconForEntryId(item.id),
      addendum: item.addendum,
      body: item.description,
      actions: actionsFromLinks(item),
    })),
    projects: sortByOrder(collections.projects).map((item) => ({
      title: item.title,
      href: item.url,
      icon: iconForEntry(item, iconComponents),
      legacyIcon: legacyIconForEntryId(item.id),
      body: item.description,
      actions: actionsFromLinks(item),
    })),
    interests: sortByOrder(collections.personalLinks).map((item) => ({
      title: item.title,
      href: item.url,
      body: item.description,
      image: resolveImage(assetLookup, item.iconAssetId, item.iconHighResAssetId, item.iconAlt),
    })),
    contactIntro: contact.intro,
    contactItems: [
      { label: contact.name, icon: iconComponents.CircleUserRound },
      { label: contact.location, icon: iconComponents.MapPin },
      { label: contact.phoneDisplay, href: contact.phoneHref, icon: iconComponents.Phone },
      { label: contact.email, href: contact.emailHref, icon: iconComponents.Mail },
      { label: contact.linkedInLabel, href: contact.linkedInUrl, icon: iconComponents.BriefcaseBusiness },
      {
        label: contact.resumeLabel,
        href: assetLookup.get(contact.resumeAssetId)?.localPath ?? '/site-assets/resume.pdf',
        icon: iconComponents.FileText,
      },
    ],
    formAction: contact.formAction,
  };
}
