import {defineField, defineType} from 'sanity'

export const work = defineType({
  name: 'work',
  title: 'Work',
  type: 'document',
  groups: [
    {name: 'content', title: 'Content', default: true},
    {name: 'seo', title: 'SEO'},
  ],
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
      group: 'content',
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {source: 'title'},
      validation: (Rule) => Rule.required(),
      group: 'content',
    }),
    defineField({
      name: 'client',
      title: 'Client',
      type: 'string',
      group: 'content',
    }),
    defineField({
      name: 'role',
      title: 'Role',
      type: 'string',
      group: 'content',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 3,
      group: 'content',
    }),
    defineField({
      name: 'collaborators',
      title: 'Collaborators',
      type: 'string',
      group: 'content',
    }),
    defineField({
      name: 'year',
      title: 'Year',
      type: 'number',
      group: 'content',
    }),
    defineField({
      name: 'coverImage',
      title: 'Cover Image',
      type: 'image',
      options: {hotspot: true},
      group: 'content',
    }),
    defineField({
      name: 'content',
      title: 'Content',
      type: 'array',
      of: [
        // Rich text
        {type: 'block'},
        // Full-width image
        {
          type: 'image',
          options: {hotspot: true},
          fields: [
            defineField({
              name: 'caption',
              title: 'Caption',
              type: 'string',
            }),
            defineField({
              name: 'alt',
              title: 'Alt text',
              type: 'string',
            }),
          ],
        },
      ],
      group: 'content',
    }),
    defineField({
      name: 'projectImages',
      title: 'Project Images',
      type: 'array',
      of: [
        {
          type: 'image',
          options: {hotspot: true},
          fields: [
            defineField({
              name: 'alt',
              title: 'Alt text',
              type: 'string',
            }),
            defineField({
              name: 'caption',
              title: 'Caption',
              type: 'string',
            }),
          ],
        },
        {
          type: 'object',
          name: 'muxVideo',
          title: 'Video',
          fields: [
            defineField({
              name: 'playbackId',
              title: 'Mux Playback ID',
              type: 'string',
            }),
            defineField({
              name: 'autoplay',
              title: 'Autoplay (muted loop)',
              type: 'boolean',
              initialValue: false,
            }),
            defineField({
              name: 'caption',
              title: 'Caption',
              type: 'string',
            }),
          ],
          preview: {
            select: {title: 'playbackId'},
            prepare: ({title}) => ({title: title ? `Video: ${title}` : 'Video (no ID)'}),
          },
        },
      ],
      options: {layout: 'grid'},
      group: 'content',
    }),
    defineField({
      name: 'credits',
      title: 'Credits',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({
              name: 'role',
              title: 'Role',
              type: 'string',
              placeholder: 'e.g. Team, Strategy, Design',
            }),
            defineField({
              name: 'names',
              title: 'Names',
              type: 'string',
            }),
          ],
          preview: {
            select: {title: 'role', subtitle: 'names'},
          },
        },
      ],
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
    select: {title: 'title', media: 'content'},
    prepare: ({title}) => ({title}),
  },
})
