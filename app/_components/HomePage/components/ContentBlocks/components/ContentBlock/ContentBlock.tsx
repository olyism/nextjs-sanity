import {FC} from 'react'
import {PortableText} from '@portabletext/react'
import cn from 'classnames'
import ContentBlock from '@/types/ContentBlock'
import ImageComponent from '@/components/ImageComponent'
import FeaturedImage from './components/FeaturedImage'

interface Props extends Omit<ContentBlock, '_id' | 'name' | 'slug'> {}

const ContentBlock: FC<Props> = ({content, featuredImage}) => {
  const components = {
    types: {
      image: ImageComponent,
    },
  }

  const {src, alt, pos, align} = featuredImage ?? {}

  const hasFeaturedImage = alt && src

  return (
    <article className={cn(hasFeaturedImage && 'flex flex-col sm:flex-row gap-4 sm:gap-6')}>
      {hasFeaturedImage && <FeaturedImage src={src} alt={alt} align={align} pos={pos} />}
      {content && (
        <div className={cn('prose', hasFeaturedImage ? 'flex-1 sm:order-1 md:grow-2' : 'mx-auto')}>
          <PortableText components={components} value={content} />
        </div>
      )}
    </article>
  )
}

export default ContentBlock
