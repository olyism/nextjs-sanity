import {PortableText} from '@portabletext/react'
import client from 'lib/client'
import Container from '@/components/Container'

interface Props {
  params: {
    page: string
  }
}

const ContentPage = async ({params}: Props) => {
  const pageData = await getPageData(params.page)

  return (
    <Container>
      <article className="prose">
        <h1>{pageData?.title || pageData?.name}</h1>
        <PortableText value={pageData?.content} />
      </article>
    </Container>
  )
}

export default ContentPage

async function getPageData(page: string) {
  const pageData = await client.fetch(`
    *[_type == "page" && slug == "${page}"]{
      name, title, content
    }[0]
  `)

  return pageData
}
