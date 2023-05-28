import getData from './getData'
import ContentBlocks from './components/ContentBlocks'
import HeroBanner from './components/HeroBanner'

const HomePage = async () => {
  const data = getData()
  const {hero, contentBlocks} = await data
  const {title, description, image, cta} = hero ?? {}

  return (
    <>
      {hero && <HeroBanner title={title} description={description} image={image} cta={cta} />}
      <ContentBlocks contentBlocks={contentBlocks} />
    </>
  )
}

export default HomePage
