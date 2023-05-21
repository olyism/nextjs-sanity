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
          to: [
            { type: 'page' },
            { type: 'contentBlock' },
          ],
        },
      ],
    },
    {
      name: 'cta',
      title: 'Call to action',
      type: 'object',
      fields: [
        {
          name: 'buttonLabel',
          title: 'Button label',
          type: 'string',
        },
        {
          name: 'goTo',
          type: 'reference',
          to: [{type: 'page'}],
        },
      ],
    },
    {
      name: 'contact',
      title: 'Contact details',
      type: 'object',
      fields: [
        {
          name: 'tel',
          title: 'Phone number',
          type: 'string',
        },
        {
          name: 'email',
          title: 'Email',
          type: 'string',
        },
      ],
    },
    {
      name: 'terms',
      title: 'Terms and conditions',
      type: 'array',
      of: [{type: 'block'}],
    },
    {
      name: 'privacy',
      title: 'Privacy policy',
      type: 'array',
      of: [{type: 'block'}],
    },
  ],
}
