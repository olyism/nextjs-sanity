import type {FC} from 'react'
import Image from 'next/image'
import type {SanityImageSource} from '@sanity/image-url/lib/types/types'
import urlFor from '@/lib/urlFor'

interface Props {
  image: SanityImageSource
  title: string | null
}

const BackgroundImage: FC<Props> = ({image, title = undefined}) => {
  const src = urlFor(image).width(1240).url()

  return (
    <div className="bg-cobalt absolute top-0 w-full h-[200px] sm:h-full">
      <Image
        alt={`Background image${title ? ` for ${title}` : ''}`}
        className="object-cover"
        src={src}
        fill
      />
    </div>
  )
}

export default BackgroundImage
