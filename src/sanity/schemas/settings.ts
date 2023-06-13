import type {Rule} from 'sanity'
import GoogleFontSelector from './components/GoogleFontSelector'

const settings = {
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
      name: 'logo',
      type: 'object',
      options: {
        collapsible: true,
        collapsed: true,
      },
      fields: [
        {
          name: 'src',
          type: 'image',
        },
        {
          name: 'width',
          type: 'number',
        },
        {
          name: 'height',
          type: 'number',
        },
      ],
    },
    {
      name: 'styles',
      type: 'object',
      options: {
        collapsible: true,
        collapsed: true,
      },
      fields: [
        {
          name: 'brandColor',
          type: 'color',
          title: 'Brand color',
        },
        {
          name: 'primaryColor',
          type: 'color',
          title: 'Primary color',
        },
        {
          name: 'systemFont',
          type: 'string',
          components: {
            input: GoogleFontSelector,
          },
        },
        {
          name: 'headingFont',
          type: 'string',
          components: {
            input: GoogleFontSelector,
          },
        },
      ],
    },
    {
      name: 'nav',
      title: 'Navigation',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{type: 'page'}, {type: 'contentBlock'}],
        },
        {
          name: 'parentNav',
          title: 'Parent navigation',
          type: 'object',
          fields: [
            {
              name: 'name',
              type: 'string',
            },
            {
              name: 'nav',
              title: 'Navigation',
              type: 'array',
              of: [
                {
                  type: 'reference',
                  to: [{type: 'page'}, {type: 'contentBlock'}],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      name: 'cta',
      title: 'Call to action',
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
          hidden: ({document}) => document?.cta?.jumpToContactForm,
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
    {
      name: 'footerImage',
      type: 'object',
      fields: [
        {
          name: 'src',
          title: 'Image',
          type: 'image',
        },
        {
          name: 'opacity',
          type: 'number',
          validation: (Rule: Rule) => Rule.min(0).max(100),
        },
      ],
    },
  ],
  initialValue: {
    footerImage: {
      opacity: 20,
    },
  },
}

export default settings
