import {defineField, defineType} from 'sanity'

export const about = defineType({
  name: 'about',
  title: 'About',
  type: 'document',
  groups: [
    {name: 'content', title: 'Content', default: true},
    {name: 'seo', title: 'SEO'},
  ],
  fields: [
    defineField({
      name: 'heading',
      title: 'Heading',
      type: 'string',
      group: 'content',
    }),
    defineField({
      name: 'content',
      title: 'Content',
      type: 'array',
      of: [
        {type: 'block'},
        {
          type: 'image',
          options: {hotspot: true},
          fields: [
            defineField({name: 'alt', title: 'Alt text', type: 'string'}),
            defineField({name: 'caption', title: 'Caption', type: 'string'}),
          ],
        },
      ],
      group: 'content',
    }),
    defineField({
      name: 'skills',
      title: 'Skills',
      type: 'array',
      of: [{type: 'string'}],
      options: {layout: 'tags'},
      group: 'content',
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {hotspot: true},
      group: 'content',
    }),
    defineField({
      name: 'seo',
      title: 'SEO',
      type: 'seo',
      group: 'seo',
    }),
  ],
  preview: {
    prepare: () => ({title: 'About'}),
  },
})
