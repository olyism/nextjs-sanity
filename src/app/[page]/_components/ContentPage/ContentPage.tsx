import getData from './getData'
import Container from '@/components/Container'
import BlockContent from './components/BlockContent'

interface Props {
  params: {
    page: string
  }
}

const ContentPage = async ({params}: Props) => {
  const pageData = await getData(params.page)
  const heading = pageData?.title || pageData?.name
  const content = pageData?.content

  return (
    <article>
      {heading && (
        <header className="pb-8 pt-24 bg-[var(--brand-color)]">
          <Container>
            <h1 className="font-display font-bold text-5xl text-white">{heading}</h1>
          </Container>
        </header>
      )}
      <Container className="my-8 sm:my-12">{content && <BlockContent value={content} />}</Container>
    </article>
  )
}

export default ContentPage
