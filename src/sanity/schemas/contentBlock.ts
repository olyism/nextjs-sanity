import type {Rule} from 'sanity'
import slugify from '@/lib/slugify'

export default {
  name: 'contentBlock',
  type: 'document',
  title: 'Content Block',
  initialValue: {
    featuredImage: {
      pos: 'Center',
      align: 'Left',
    },
  },
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      validation: (Rule: Rule) => Rule.required(),
      options: {
        source: 'name',
        slugify: slugify,
      },
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
    {
      name: 'featuredImage',
      title: 'Featured image',
      type: 'object',
      options: {
        collapsible: true,
      },
      fields: [
        {
          name: 'image',
          title: 'Image',
          type: 'image',
          fields: [
            {
              name: 'alt',
              type: 'string',
              title: 'Image alt text',
            },
          ],
        },
        {
          name: 'pos',
          title: 'Image position',
          type: 'string',
          options: {
            list: [
              'Top',
              'RightTop',
              'Right',
              'Rightbottom',
              'Bottom',
              'LeftBottom',
              'Left',
              'LeftTop',
              'Center',
            ],
          },
        },
        {
          name: 'align',
          title: 'Alignment',
          type: 'string',
          options: {
            list: ['Left', 'Right'],
            layout: 'radio',
            direction: 'horizontal',
          },
        },
      ],
    },
  ],
}
