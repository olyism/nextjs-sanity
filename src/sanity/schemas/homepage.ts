import type {Rule} from 'sanity'

const homepage = {
  name: 'homepage',
  type: 'document',
  title: 'Homepage',
  fields: [
    {
      name: 'title',
      title: 'Homepage title',
      type: 'string',
    },
    {
      name: 'hero',
      title: 'Hero banner',
      type: 'array',
      of: [
        {
          name: 'banner',
          type: 'object',
          fields: [
            {
              name: 'title',
              type: 'string',
            },
            {
              name: 'description',
              type: 'string',
            },
            {
              name: 'cta',
              title: 'Call-to-action button',
              type: 'object',
              options: {
                collapsible: true,
                collapsed: true,
              },
              fields: [
                {
                  name: 'buttonLabel',
                  type: 'string',
                },
                {
                  name: 'jumpToContactForm',
                  type: 'boolean',
                },
                {
                  name: 'goTo',
                  type: 'reference',
                  to: [{type: 'page'}, {type: 'contentBlock'}, {type: 'bannerBlock'}],
                  // @ts-ignore
                  hidden: ({document}) => document?.hero?.cta?.jumpToContactForm,
                },
              ],
            },
            {
              name: 'image',
              type: 'image',
            },
            {
              name: 'overlay',
              type: 'number',
              validation: (Rule: Rule) => Rule.min(0).max(100),
            },
          ],
        },
      ],
    },
    {
      name: 'contentBlocks',
      title: 'Blocks',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{type: 'contentBlock'}, {type: 'bannerBlock'}],
        },
      ],
    },
  ],
}

export default homepage
