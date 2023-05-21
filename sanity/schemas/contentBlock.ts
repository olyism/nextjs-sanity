export default {
  name: 'contentBlock',
  type: 'document',
  title: 'Content Block',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'content',
      title: 'Content',
      type: 'array',
      of: [
        {
          type: 'block',
        },
        {
          type: 'image',
          fields: [
            {
              name: 'alt',
              type: 'string',
              title: 'Image alt text',
            },
          ],
        },
      ],
    },
  ],
}
