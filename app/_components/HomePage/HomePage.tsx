import getData from './getData'
import ContentBlocks from './components/ContentBlocks'
import HeroBanner from './components/HeroBanner'

const HomePage = async () => {
  const data = getData()
  const {hero, contentBlocks} = await data

  return (
    <>
      <HeroBanner hero={hero} />
      <ContentBlocks contentBlocks={contentBlocks} />
    </>
  )
}

export default HomePage
