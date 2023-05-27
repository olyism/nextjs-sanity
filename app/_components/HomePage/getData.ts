import client from '@/lib/client'

const getData = async () => {
  const data = await client.fetch(`
    *[_id == 'homepageSettings']{
      title,
      hero{
        title,
        description,
        image,
        "button": {
          "label": buttonGroup.label,
          "link": buttonGroup.link->slug.current,
        },
      },
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
