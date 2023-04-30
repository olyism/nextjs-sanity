import client from 'lib/client'

const getGroq = (page: string) => {
  switch (page) {
    case 'privacy':
    case 'terms':
      return `*[_type == "settings"]{
        "content": ${page}
      }[0]`
    default:
      return `
        *[_type == "page" && slug == "${page}"]{
          name, title, content
        }[0]
      `
  }
}

const getPageData = async (page: string) => {
  const groq = getGroq(page)
  const pageData = await client.fetch(groq)

  return pageData
}

export default getPageData
