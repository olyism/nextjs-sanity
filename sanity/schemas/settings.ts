export default {
  name: 'settings',
  type: 'document',
  title: 'Settings',
  fields: [
    {
      name: 'title',
      title: 'Site title',
      type: 'string',
    },
    {
      name: 'description',
      title: 'Meta description',
      type: 'text',
    },
    {
      name: 'nav',
      title: 'Navigation',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{type: 'page'}],
        },
      ],
    },
  ],
}
