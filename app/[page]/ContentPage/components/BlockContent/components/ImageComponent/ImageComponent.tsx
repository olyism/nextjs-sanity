import {FC} from 'react'
import Image from 'next/image'
import {getImageDimensions, type SanityImageSource} from '@sanity/asset-utils'
import urlFor from '@/lib/urlFor'

interface Props {
  value: {
    alt?: string
  } & SanityImageSource
}

const ImageComponent: FC<Props> = ({value}) => {
  const {width, height} = getImageDimensions(value)
  const src = urlFor(value).width(width).url()

  return (
    <Image
      alt={value?.alt || ''}
      className={`aspect-[${width}/${height}]`}
      height={height}
      loading="lazy"
      src={src}
      width={width}
    />
  )
}

export default ImageComponent
