import client from '@/lib/client'

const getData = async () => {
  const data = await client.fetch(`
    *[_type == "settings"]{
      title,
      description,
      logo{
        "src": src.asset->url,
        width,
        height,
      },
      styles{
        "brandColor": brandColor.hex,
        "primaryColor": primaryColor.hex,
      },
      nav[]->{
        _id, _type, name, slug
      },
      cta{
        buttonLabel,
        "goTo": goTo->slug
      },
      "tel": contact.tel
    }[0]
  `)

  return data
}

export default getData
