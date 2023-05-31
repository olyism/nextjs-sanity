import {FC} from 'react'
import cn from 'classnames'
import type {SanityImageSource} from '@sanity/image-url/lib/types/types'
import type {CallToAction} from '@/types/CallToAction'
import urlFor from '@/lib/urlFor'
import {ButtonStyle} from '@/components/Button'
import CallToActionButton from '@/app/_components/CallToActionButton'
import Container from '@/components/Container'

interface Props {
  title?: string | null
  description?: string | null
  image?: SanityImageSource | null
  cta: CallToAction
}

const HeroBanner: FC<Props> = ({
  title = undefined,
  description = undefined,
  image = undefined,
  cta,
}) => {
  const bgStyles = image
    ? {
        backgroundImage: `url('${urlFor(image).width(1240).url()}')`,
      }
    : undefined

  return (
    <header
      className={cn(
        ['py-8', 'sm:py-12'],
        ['min-h-[calc(100vh-theme(height.header))]', 'sm:min-h-[500px]'],
        ['flex', 'items-center', 'sm:block'],
        ['bg-cover', 'bg-fixed', 'bg-center']
      )}
      style={bgStyles}
    >
      <Container className="w-full">
        <article
          className={cn(
            'p-6',
            'sm:p-8',
            'sm:max-w-md',
            'bg-white/90',
            'text-base-color',
            'rounded',
            'drop-shadow-lg'
          )}
        >
          {title && (
            <h1 className="mb-3 font-heading font-bold text-template text-3xl sm:text-4xl">
              {title}
            </h1>
          )}
          {description && <p className="mb-4 mt-3 sm:text-lg">{description}</p>}
          <CallToActionButton cta={cta} buttonStyle={ButtonStyle.Primary} />
        </article>
      </Container>
    </header>
  )
}

export default HeroBanner
