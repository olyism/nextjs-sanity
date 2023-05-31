import {FC} from 'react'
import cn from 'classnames'
import {
  type FeaturedImage as FeaturedImageProps,
  FeaturedImageAlignment,
} from '@/types/ContentBlock'
import urlFor from '@/lib/urlFor'
import getBgPosCSSClass from '@/lib/getBgPosCSSClass'

// @ts-ignore
const FeaturedImage: FC<FeaturedImageProps> = ({alt, src, align, pos}) => {
  if (!alt || !src) return null

  return (
    <header
      aria-label={alt}
      className={cn(
        ['flex-1', 'relative', 'bg-gray', 'bg-cover', 'rounded'],
        ['before:pt-[66%]', 'before:w-full', 'before:block'],
        align === FeaturedImageAlignment.Right ? 'sm:order-3' : 'sm:order-1',
        pos && getBgPosCSSClass(pos)
      )}
      role="img"
      style={{backgroundImage: `url('${urlFor(src).width(1240).fit('max').url()}')`}}
    />
  )
}

export default FeaturedImage
