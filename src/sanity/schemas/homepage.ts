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
      type: 'object',
      options: {
        collapsible: true,
        collapsed: true,
      },
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
              to: [{type: 'page'}, {type: 'contentBlock'}],
              // @ts-ignore
              hidden: ({document}) => document?.hero?.cta?.jumpToContactForm,
            },
          ],
        },
        {
          name: 'image',
          type: 'image',
        },
      ],
    },
    {
      name: 'contentBlocks',
      title: 'Content Blocks',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{type: 'contentBlock'}],
        },
      ],
    },
  ],
}

export default homepage
