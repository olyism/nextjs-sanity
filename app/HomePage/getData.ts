import client from '@/lib/client'

const getData = async () => {
  const data = await client.fetch(`
    *[_type == 'homepage']{
      title,
      hero{
        title,
        description,
        "imageAssetRecord": image.asset,
        "button": {
          "label": buttonGroup.label,
          "link": buttonGroup.link->slug
        }
      }
    }[0]
  `)

  return data
}

export default getData
