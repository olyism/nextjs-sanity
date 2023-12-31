import {FC} from 'react'
import {PortableText} from '@portabletext/react'
import cn from 'classnames'
import ContentBlockBase from '@/types/ContentBlock'
import Container from '@/components/Container'
import ImageComponent from '@/components/ImageComponent'
import FeaturedImage from './components/FeaturedImage'

const ContentBlock: FC<Omit<ContentBlockBase, '_id' | '_type' | 'name' | 'slug'>> = ({
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
    <Container>
      <article
        className={cn(
          hasFeaturedImage && 'flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6'
        )}
      >
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
    </Container>
  )
}

export default ContentBlock
