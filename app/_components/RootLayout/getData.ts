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
        systemFont,
        headingFont,
      },
      nav[]->{
        _id, _type, name, slug
      },
      cta{
        buttonLabel,
        jumpToContactForm,
        "goTo": goTo->slug
      },
      "tel": contact.tel,
      "email": contact.email,
    }[0]
  `)

  return data
}

export default getData
