import client from '@/lib/client'

const getData = async () => {
  const data = await client.fetch(`
    *[_type == 'homepage']{
      title,
      hero{
        title,
        description,
        image,
        "button": {
          "label": buttonGroup.label,
          "link": buttonGroup.link->slug.current
        }
      }
    }[0]
  `)

  return data
}

export default getData
