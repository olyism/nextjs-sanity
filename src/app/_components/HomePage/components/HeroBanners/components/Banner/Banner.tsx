import type {FC} from 'react'
import cn from 'classnames'
import urlFor from '@/lib/urlFor'
import {ButtonStyle} from '@/components/Button'
import CallToActionButton from '@/app/_components/CallToActionButton'
import Container from '@/components/Container'
import type {Banner as BannerProps} from '@/app/_components/HomePage/getData'

interface Props {
  banner: BannerProps
}

const Banner: FC<Props> = ({banner}) => {
  const {title, description, image, cta, overlay} = banner
  const bgStyles = image
    ? {
        backgroundImage: `url('${urlFor(image).width(1240).url()}')`,
      }
    : undefined

  return (
    <header
      className={cn(
        ['w-full', 'relative', 'bg-cover', 'md:bg-fixed', 'bg-center'],
        ['h-[calc(100vh-theme(height.header))]', 'max-h-[664px]'],
        ['py-8', 'sm:py-12'],
        ['flex', 'items-center']
      )}
      style={bgStyles}
    >
      <Container className="w-full my-8">
        <article
          className={cn(
            'p-6',
            'sm:p-8',
            'sm:max-w-md',
            'bg-white/90',
            'text-base-color',
            'rounded',
            'drop-shadow-lg',
            'relative',
            'z-10'
          )}
        >
          {title && (
            <h1 className="mb-3 font-heading font-bold text-template text-3xl sm:text-4xl">
              {title}
            </h1>
          )}
          {description && <p className="mb-4 mt-3 sm:text-lg">{description}</p>}
          {cta && <CallToActionButton cta={cta} buttonStyle={ButtonStyle.Primary} />}
        </article>
      </Container>
      {overlay && (
        <div className="bg-black absolute inset-0" style={{opacity: overlay * 0.01}}></div>
      )}
    </header>
  )
}

export default Banner
