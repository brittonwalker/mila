import {defineField, defineType} from 'sanity'

export const selectedWorksBlock = defineType({
  name: 'selectedWorksBlock',
  title: 'Selected Works',
  type: 'object',
  fields: [
    defineField({
      name: 'heading',
      title: 'Heading',
      type: 'string',
    }),
    defineField({
      name: 'works',
      title: 'Works',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{type: 'work'}],
        },
      ],
    }),
  ],
  preview: {
    select: {heading: 'heading'},
    prepare: ({heading}) => ({title: 'Selected Works', subtitle: heading}),
  },
})
