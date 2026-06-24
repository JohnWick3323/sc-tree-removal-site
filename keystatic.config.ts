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
      format: { contentField: 'content' },
      schema: {
        title: fields.slug({ name: { label: 'Title' } }),
        publishDate: fields.date({ label: 'Publish Date', defaultValue: { kind: 'today' } }),
        author: fields.relationship({
          label: 'Author',
          collection: 'authors',
        }),
        category: fields.relationship({
          label: 'Category',
          collection: 'categories',
        }),
        tags: fields.array(
          fields.relationship({
            label: 'Tag',
            collection: 'tags',
          }),
          { label: 'Tags', itemLabel: props => props.value || 'Please select a tag' }
        ),
        featuredImage: fields.image({
          label: 'Featured Image',
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
