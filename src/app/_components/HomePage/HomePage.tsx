import getData from './getData'
import ContentBlocks from './components/ContentBlocks'
import HeroBanners from './components/HeroBanners'

const HomePage = async () => {
  const {hero, contentBlocks} = await getData()

  return (
    <>
      <HeroBanners hero={hero} />
      <ContentBlocks contentBlocks={contentBlocks} />
    </>
  )
}

export default HomePage
