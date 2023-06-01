import type {SanityImageSource} from '@sanity/image-url/lib/types/types'
import client from '@/lib/client'
import CallToAction from '@/types/CallToAction'
import ContentBlock from '@/types/ContentBlock'

export type HomepageSettings = {
  title: string | null
  hero: {
    title?: string | null
    description?: string | null
    image?: SanityImageSource | null
    cta: CallToAction
  }
  contentBlocks: ContentBlock[]
}

const getData = async (): Promise<HomepageSettings> => {
  const data = await client.fetch(`
    *[_id == 'homepageSettings']{
      title,
      "hero": coalesce(hero{
        title,
        description,
        image,
        "cta": coalesce(cta{
          buttonLabel,
          jumpToContactForm,
          "goTo": goTo->slug
        }, {}),
      }, {}),
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
