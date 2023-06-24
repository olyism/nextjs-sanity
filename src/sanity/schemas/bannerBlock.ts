import type {Rule} from 'sanity'
import slugify from '@/lib/slugify'

const bannerBlock = {
  name: 'bannerBlock',
  type: 'document',
  title: 'Banner Block',
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
      ],
    },
    {
      name: 'featuredImage',
      title: 'Featured image',
      type: 'object',
      fields: [
        {
          name: 'image',
          title: 'Image',
          type: 'image',
        },
      ],
    },
  ],
}

export default bannerBlock
