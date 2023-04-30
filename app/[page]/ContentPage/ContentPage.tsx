import {PortableText} from '@portabletext/react'
import getPageData from './getPageData'
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
      <article className="prose pb-12">
        <h1>{pageData?.title || pageData?.name}</h1>
        <PortableText value={pageData?.content} />
      </article>
    </Container>
  )
}

export default ContentPage
