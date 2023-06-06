import type {SanityImageSource} from '@sanity/image-url/lib/types/types'
import client from '@/lib/client'
import CallToAction from '@/types/CallToAction'
import ContentBlock from '@/types/ContentBlock'

export type Banner = {
  _id: string
  title?: string | null
  description?: string | null
  image?: SanityImageSource | null
  cta: CallToAction
  overlay?: number | null
}

export type HomepageSettings = {
  title: string | null
  hero: Banner[] | null
  contentBlocks: ContentBlock[]
}

const getData = async (): Promise<HomepageSettings> => {
  const data = await client.fetch(`
    *[_id == 'homepageSettings']{
      title,
      hero,
      contentBlocks[]->{
        _id,
        name,
        content,
        "slug": slug.current,
        featuredImage{
          "alt": image.alt,
          "src": image.asset->url,
          align,
          pos,
        },
      },
    }[0]
  `)

  return data
}

export default getData
