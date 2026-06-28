import { getCollection } from 'astro:content';
import { locations } from '../data/locations';
import { services } from '../data/services';
import { site } from '../data/site';

const staticPaths = [
  '/',
  '/about/',
  '/blog/',
  '/contact/',
  '/locations/',
  '/privacy/',
  '/services/',
  '/terms/',
];

const getPostSlug = (post: any) => post.slug || post.id.replace(/\.(md|mdoc)$/, '');

const escapeXml = (value: string) =>
  value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');

const absoluteUrl = (path: string) => `${site.url}${path}`;

export async function GET() {
  const posts = await getCollection('posts');
  const categories = await getCollection('categories');
  const tags = await getCollection('tags');

  const indexablePosts = posts.filter(post => !post.data.draft && !post.data.noindex);
  const postCategorySlugs = new Set(indexablePosts.map(post => post.data.category).filter(Boolean));
  const postTagSlugs = new Set(indexablePosts.flatMap(post => post.data.tags || []));

  const urls = new Set<string>();

  for (const path of staticPaths) urls.add(path);
  for (const service of services) urls.add(`/services/${service.slug}/`);
  for (const location of locations) urls.add(`/locations/${location.slug}/`);
  for (const service of services) {
    for (const location of locations) {
      urls.add(`/services/${service.slug}/${location.slug}/`);
    }
  }
  for (const post of indexablePosts) urls.add(`/blog/${getPostSlug(post)}/`);
  for (const category of categories) {
    const slug = category.id.replace(/\.json$/, '');
    if (postCategorySlugs.has(slug)) urls.add(`/blog/category/${slug}/`);
  }
  for (const tag of tags) {
    const slug = tag.id.replace(/\.json$/, '');
    if (postTagSlugs.has(slug)) urls.add(`/blog/tag/${slug}/`);
  }

  const body = [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
    ...Array.from(urls).map(path => `  <url><loc>${escapeXml(absoluteUrl(path))}</loc></url>`),
    '</urlset>',
  ].join('\n');

  return new Response(body, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
    },
  });
}
