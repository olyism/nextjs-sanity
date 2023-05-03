import {FC} from 'react'
import cn from 'classnames'
import type {SanityImageSource} from '@sanity/image-url/lib/types/types'
import Button, {ButtonType} from '@/components/Button'
import Container from '@/components/Container'
import BackgroundImage from './components/BackgroundImage'

interface Props {
  hero: {
    title: string | null
    description: string | null
    image: SanityImageSource | null
    button: {
      label: string | null
      link: string | null
    } | null
  } | null
}

const HeroBanner: FC<Props> = ({hero}) => {
  if (!hero) return null

  const {title, description, image, button} = hero

  return (
    <header className={cn(['py-4', 'relative'], ['sm:py-8', 'sm:min-h-[400px]'])}>
      <Container className="relative z-10 mt-[168px] sm:mt-0">
        <article
          className={cn(
            'p-6',
            'sm:p-8',
            'sm:max-w-md',
            'bg-white',
            'text-base-color',
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
      {image && <BackgroundImage image={image} title={title} />}
    </header>
  )
}

export default HeroBanner
