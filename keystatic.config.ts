import { config, fields, collection } from '@keystatic/core';

export default config({
  storage: {
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
    blogs: collection({
      label: 'Blogs',
      slugField: 'title',
      path: 'src/content/blogs/*',
      format: { contentField: 'content' },
      schema: {
        title: fields.slug({ name: { label: 'Title' } }),
        author: fields.relationship({
          label: 'Author',
          collection: 'authors',
          validation: { isRequired: true },
        }),
        publishDate: fields.date({ label: 'Publish Date', validation: { isRequired: true } }),
        updatedDate: fields.date({ label: 'Last Updated Date (Optional)' }),
        coverImage: fields.image({
          label: 'Cover Image',
          directory: 'public/images/blogs',
          publicPath: '/images/blogs/',
        }),
        draft: fields.checkbox({ label: 'Draft', description: 'Set this post to draft to prevent it from being published' }),
        description: fields.text({ label: 'Short Description', multiline: true }),
        content: fields.document({
          label: 'Content',
          formatting: true,
          dividers: true,
          links: true,
          images: {
            directory: 'public/images/blogs',
            publicPath: '/images/blogs/',
          },
        }),
      },
    }),
  },
});
