import getData from './getData'
import HeroBanner from './HeroBanner'

const HomePage = async () => {
  const data = getData()
  const {hero} = await data

  return <HeroBanner hero={hero} />
}

export default HomePage
