import { config, fields, collection } from '@keystatic/core';

const isProd = process.env.NODE_ENV === 'production';

export default config({
  storage: isProd ? {
    kind: 'github',
    repo: 'JohnWick3323/sc-tree-removal-site',
  } : {
    kind: 'local',
  },
  collections: {
    authors: collection({
      label: 'Authors',
      slugField: 'name',
      path: 'src/content/authors/*',
      format: { data: 'json' },
      schema: {
        name: fields.slug({ name: { label: 'Name' } }),
        role: fields.text({ label: 'Role/Credentials', defaultValue: 'ISA Certified Arborist' }),
        avatar: fields.image({
          label: 'Avatar Image',
          directory: 'public/images/authors',
          publicPath: '/images/authors/',
        }),
        bio: fields.text({ label: 'Short Bio', multiline: true }),
      },
    }),
    categories: collection({
      label: 'Categories',
      slugField: 'name',
      path: 'src/content/categories/*',
      format: { data: 'json' },
      schema: {
        name: fields.slug({ name: { label: 'Name' } }),
      },
    }),
    tags: collection({
      label: 'Tags',
      slugField: 'name',
      path: 'src/content/tags/*',
      format: { data: 'json' },
      schema: {
        name: fields.slug({ name: { label: 'Name' } }),
      },
    }),
    posts: collection({
      label: 'Blog Posts',
      slugField: 'title',
      path: 'src/content/posts/*',
      entryLayout: 'content',
      previewUrl: '/blog/{slug}/',
      columns: ['title', 'publishDate', 'author', 'category', 'draft'],
      format: { contentField: 'content' },
      schema: {
        title: fields.slug({ name: { label: 'Title' } }),
        publishDate: fields.date({ label: 'Publish Date', defaultValue: { kind: 'today' } }),
        draft: fields.checkbox({
          label: 'Draft',
          description: 'Hide this post from the site and make its direct URL return 404.',
          defaultValue: false,
        }),
        noindex: fields.checkbox({
          label: 'Noindex',
          description: 'Show this post, but exclude it from the sitemap and add robots noindex,follow.',
          defaultValue: false,
        }),
        author: fields.relationship({
          label: 'Author',
          collection: 'authors',
        }),
        category: fields.relationship({
          label: 'Category',
          collection: 'categories',
        }),
        tags: fields.array(
          fields.relationship({ label: 'Tag', collection: 'tags' }),
          { label: 'Tags', itemLabel: props => props.value || 'Please select a tag' }
        ),
        featuredImage: fields.image({
          label: 'Featured Image',
          directory: 'public/images/blog',
          publicPath: '/images/blog/',
        }),
        ogImage: fields.image({
          label: 'OG / Social Share Image',
          description: 'Optional. If empty, the featured image is used for social previews.',
          directory: 'public/images/blog',
          publicPath: '/images/blog/',
        }),
        excerpt: fields.text({ label: 'Excerpt', multiline: true }),
        seoTitle: fields.text({ label: 'SEO Title' }),
        seoDescription: fields.text({ label: 'SEO Description', multiline: true }),
        canonicalUrl: fields.url({ label: 'Canonical URL' }),
        content: fields.document({
          label: 'Content',
          formatting: true,
          dividers: true,
          links: true,
          images: {
            directory: 'public/images/blog',
            publicPath: '/images/blog/',
          },
        }),
      },
    }),
  },
});
