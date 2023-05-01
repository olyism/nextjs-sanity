import client from '@/lib/client'

const getSettingsData = async () => {
  const settingsData = await client.fetch(`
    *[_type == "settings"]{
      title,
      description,
      nav[]->{
        _id, name, slug
      },
      cta{
        buttonLabel,
        goTo
      },
      "tel": contact.tel
    }[0]
  `)

  return settingsData
}

export default getSettingsData
