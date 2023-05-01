import getData from './getData'
import HeroBanner from './HeroBanner'

const HomePage = async () => {
  const data = await getData()

  return <HeroBanner hero={data?.hero} />
}

export default HomePage
