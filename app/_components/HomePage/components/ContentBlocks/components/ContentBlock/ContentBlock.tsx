import {FC} from 'react'
import {PortableText} from '@portabletext/react'
import cn from 'classnames'
import ContentBlockProps from '@/types/ContentBlock'
import ImageComponent from '@/components/ImageComponent'
import FeaturedImage from './components/FeaturedImage'

const ContentBlock: FC<Omit<ContentBlockProps, '_id' | 'name' | 'slug'>> = ({
  content,
  featuredImage,
}) => {
  const components = {
    types: {
      image: ImageComponent,
    },
  }

  const {src, alt, pos, align} = featuredImage ?? {}

  const hasFeaturedImage = alt && src

  return (
    <article className={cn(hasFeaturedImage && 'flex flex-col sm:flex-row gap-4 sm:gap-6')}>
      {/* @ts-ignore */}
      {hasFeaturedImage && <FeaturedImage src={src} alt={alt} align={align} pos={pos} />}
      {content && (
        <div
          className={cn(
            ['prose', 'prose-headings:font-heading'],
            hasFeaturedImage ? 'flex-1 sm:order-1 md:grow-2' : 'mx-auto'
          )}
        >
          <PortableText components={components} value={content} />
        </div>
      )}
    </article>
  )
}

export default ContentBlock
