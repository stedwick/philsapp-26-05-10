import { defineCollection } from 'astro:content';
import { file } from 'astro/loaders';
import { z } from 'astro/zod';

const linkSchema = z.object({
  label: z.string(),
  url: z.string(),
});

const ownerSchema = z.object({
  collection: z.string(),
  id: z.string(),
  field: z.string(),
});

const roleSchema = z.object({
  title: z.string(),
  dates: z.string(),
});

const orderedSchema = {
  id: z.string(),
  order: z.number().int().nonnegative(),
};

const nullableAsset = z.string();

const profile = defineCollection({
  loader: file('src/data/imported/profile.json'),
  schema: z.object({
    ...orderedSchema,
    name: z.string(),
    headline: z.string(),
    tagline: z.string(),
    credential: z.string().optional(),
    portraitAssetId: nullableAsset,
    portraitHighResAssetId: nullableAsset,
    coverAssetIds: z.array(z.string()),
    socialLinks: z.array(linkSchema),
    primaryAction: z.object({
      label: z.string(),
      target: z.string(),
    }),
    sourceUrl: z.string(),
  }),
});

const sections = defineCollection({
  loader: file('src/data/imported/sections.json'),
  schema: z.object({
    ...orderedSchema,
    title: z.string(),
    body: z.array(z.string()),
    links: z.array(linkSchema),
  }),
});

const skills = defineCollection({
  loader: file('src/data/imported/skills.json'),
  schema: z.object({
    ...orderedSchema,
    title: z.string(),
    url: z.string(),
    description: z.string(),
    iconAssetId: nullableAsset,
    iconHighResAssetId: nullableAsset,
    iconAlt: z.string(),
    category: z.enum(['technical', 'leadership']),
  }),
});

const experience = defineCollection({
  loader: file('src/data/imported/experience.json'),
  schema: z.object({
    ...orderedSchema,
    company: z.string(),
    websiteUrl: z.string(),
    description: z.string(),
    visitLabel: z.string(),
    links: z.array(linkSchema).optional(),
    roles: z.array(roleSchema),
    footerLines: z.array(z.string()),
    location: z.string(),
    logoAssetId: nullableAsset,
    logoHighResAssetId: nullableAsset,
    logoAlt: z.string(),
    screenshotAssetId: nullableAsset,
    screenshotHighResAssetId: nullableAsset,
    screenshotAlt: z.string(),
  }),
});

const education = defineCollection({
  loader: file('src/data/imported/education.json'),
  schema: z.object({
    ...orderedSchema,
    title: z.string(),
    url: z.string(),
    addendum: z.string(),
    description: z.string(),
    links: z.array(linkSchema),
    iconName: z.string(),
  }),
});

const projects = defineCollection({
  loader: file('src/data/imported/projects.json'),
  schema: z.object({
    ...orderedSchema,
    title: z.string(),
    url: z.string(),
    description: z.string(),
    links: z.array(linkSchema),
    iconName: z.string(),
    screenshotAssetId: z.string().optional(),
    screenshotHighResAssetId: z.string().optional(),
    screenshotAlt: z.string().optional(),
  }),
});

const personalLinks = defineCollection({
  loader: file('src/data/imported/personal-links.json'),
  schema: z.object({
    ...orderedSchema,
    title: z.string(),
    url: z.string(),
    description: z.string(),
    links: z.array(linkSchema),
    iconAssetId: nullableAsset,
    iconHighResAssetId: nullableAsset,
    iconAlt: z.string(),
  }),
});

const contact = defineCollection({
  loader: file('src/data/imported/contact.json'),
  schema: z.object({
    ...orderedSchema,
    intro: z.string(),
    name: z.string(),
    location: z.string(),
    phoneDisplay: z.string(),
    phoneHref: z.string(),
    email: z.string(),
    emailHref: z.string(),
    linkedInLabel: z.string(),
    linkedInUrl: z.string(),
    resumeLabel: z.string(),
    resumeAssetId: z.string(),
    formAction: z.string(),
  }),
});

const assets = defineCollection({
  loader: file('src/data/imported/assets.json'),
  schema: z.object({
    ...orderedSchema,
    sourceUrl: z.string(),
    localPath: z.string(),
    kind: z.string(),
    alt: z.string(),
    owners: z.array(ownerSchema),
  }),
});

const cleanupNotes = defineCollection({
  loader: file('src/data/imported/cleanup-notes.json'),
  schema: z.object({
    ...orderedSchema,
    collection: z.string(),
    entryId: z.string(),
    field: z.string(),
    originalText: z.string(),
    cleanedText: z.string(),
    reason: z.string(),
  }),
});

const blogPosts = defineCollection({
  loader: file('src/data/imported/blog-posts.json'),
  schema: z.object({
    ...orderedSchema,
    title: z.string(),
    url: z.string(),
    datePublished: z.string(),
    description: z.string(),
    tags: z.array(z.string()),
    contentText: z.string(),
    sourceContentHtml: z.string(),
    contentHtml: z.string(),
    links: z.array(linkSchema),
    assetIds: z.array(z.string()),
  }),
});

const blogAssets = defineCollection({
  loader: file('src/data/imported/blog-assets.json'),
  schema: z.object({
    ...orderedSchema,
    sourceUrl: z.string(),
    localPath: z.string(),
    kind: z.string(),
    alt: z.string(),
    owners: z.array(ownerSchema),
  }),
});

export const collections = {
  profile,
  sections,
  skills,
  experience,
  education,
  projects,
  personalLinks,
  contact,
  assets,
  cleanupNotes,
  blogPosts,
  blogAssets,
};
