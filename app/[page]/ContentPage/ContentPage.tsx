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
  const heading = pageData?.title || pageData?.name

  return (
    <article>
      {heading && (
        <header className="pb-8 pt-24 bg-cobalt">
          <Container>
            <h1 className="font-display font-bold text-5xl text-white">{heading}</h1>
          </Container>
        </header>
      )}
      <Container>
        <div className="prose mt-8">
          <PortableText value={pageData?.content} />
        </div>
      </Container>
    </article>
  )
}

export default ContentPage
