export default {
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
          name: 'buttonGroup',
          type: 'object',
          options: {
            collapsible: true,
            collapsed: true,
          },
          fields: [
            {
              name: 'label',
              type: 'string',
            },
            {
              name: 'link',
              type: 'reference',
              to: [{type: 'page'}, {type: 'contentBlock'}],
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
