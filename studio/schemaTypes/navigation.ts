import {defineField, defineType} from 'sanity'

export const navigation = defineType({
  name: 'navigation',
  title: 'Navigation',
  type: 'document',
  fields: [
    defineField({
      name: 'links',
      title: 'Nav Links',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'navLink',
          title: 'Nav Link',
          fields: [
            defineField({
              name: 'label',
              title: 'Label',
              type: 'string',
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'linkType',
              title: 'Link Type',
              type: 'string',
              options: {
                list: [
                  {title: 'Page', value: 'page'},
                  {title: 'Custom URL', value: 'custom'},
                ],
                layout: 'radio',
              },
              initialValue: 'page',
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'page',
              title: 'Page',
              type: 'reference',
              to: [{type: 'page'}],
              hidden: ({parent}) => parent?.linkType !== 'page',
            }),
            defineField({
              name: 'url',
              title: 'Custom URL',
              type: 'url',
              hidden: ({parent}) => parent?.linkType !== 'custom',
            }),
          ],
          preview: {
            select: {
              title: 'label',
              linkType: 'linkType',
              slug: 'page.slug.current',
              url: 'url',
            },
            prepare({title, linkType, slug, url}) {
              return {
                title,
                subtitle: linkType === 'page' ? `/${slug}` : url,
              }
            },
          },
        },
      ],
    }),
  ],
  preview: {
    prepare: () => ({title: 'Navigation'}),
  },
})
