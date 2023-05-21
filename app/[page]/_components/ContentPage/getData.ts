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
        *[_type == "page" && slug.current == "${page}"]{
          name, title, content
        }[0]
      `
  }
}

const getData = async (page: string) => {
  const groq = getGroq(page)
  const data = await client.fetch(groq)

  return data
}

export default getData
