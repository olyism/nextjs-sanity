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
          fields: [
            {
              name: 'label',
              type: 'string',
            },
            {
              name: 'link',
              type: 'reference',
              to: [{type: 'page'}],
            },
          ],
        },
        {
          name: 'image',
          type: 'image',
        },
      ],
    },
  ],
}
