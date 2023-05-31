import getData from './getData'
import ContentBlocks from './components/ContentBlocks'
import HeroBanner from './components/HeroBanner'

const HomePage = async () => {
  const {
    hero: {title, description, image, cta},
    contentBlocks,
  } = await getData()

  return (
    <>
      <HeroBanner title={title} description={description} image={image} cta={cta} />
      <ContentBlocks contentBlocks={contentBlocks} />
    </>
  )
}

export default HomePage
