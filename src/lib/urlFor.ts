import imageUrlBuilder from '@sanity/image-url'
import type {SanityImageSource} from '@sanity/image-url/lib/types/types'
import client from './client'

const builder = imageUrlBuilder(client)
const urlFor = (source: SanityImageSource) => builder.image(source)

export default urlFor
