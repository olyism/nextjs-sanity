import {FC} from 'react'
import Image from 'next/image'
import cn from 'classnames'
import client from '@/lib/client'
import imageUrlBuilder from '@sanity/image-url'
import type {SanityImageSource} from '@sanity/image-url/lib/types/types'
import Button, {ButtonType} from '@/components/Button'
import Container from '@/components/Container'

const builder = imageUrlBuilder(client)
const urlFor = (source: SanityImageSource) => builder.image(source)

interface Props {
  hero?: {
    title?: string
    description?: string
    imageAssetRecord?: {
      _ref: string
      _type: string
    }
    button?: {
      label: string
      link: string
    }
  }
}

const HeroBanner: FC<Props> = ({hero = undefined}) => {
  if (!hero) {
    return null
  }

  const {title, description, imageAssetRecord, button} = hero

  const bgImg = imageAssetRecord ? urlFor(imageAssetRecord).width(1240).url() : undefined

  return (
    <header className={cn(['py-4', 'relative'], ['sm:py-8', 'sm:min-h-[400px]'])}>
      <Container className="relative z-10 mt-[168px] sm:mt-0">
        <article
          className={cn(
            'p-6',
            'sm:p-8',
            'sm:max-w-md',
            'bg-white',
            'text-base',
            'rounded',
            'drop-shadow-md'
          )}
        >
          {title && (
            <h1 className="mb-3 font-display font-bold text-template text-3xl sm:text-4xl">
              {title}
            </h1>
          )}
          {description && <p className="mb-4 mt-3 sm:text-lg">{description}</p>}
          {button && (
            <Button href={`/${button.link}`} buttonType={ButtonType.Primary}>
              {button.label}
            </Button>
          )}
        </article>
      </Container>
      <div className="bg-cobalt absolute top-0 w-full h-[200px] sm:h-full">
        {bgImg && (
          <Image
            alt={`Background image${title ? ` for ${title}` : ''}`}
            className="object-cover"
            src={bgImg}
            fill
          />
        )}
      </div>
    </header>
  )
}

export default HeroBanner
