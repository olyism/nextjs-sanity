import {FC} from 'react'
import {PortableText} from '@portabletext/react'
import cn from 'classnames'
import type Value from '@/types/Value'
import Container from '@/components/Container'

interface Props {
  name: string | null
  content: Value | Value[] | null
  featuredImage: {
    src: string | null
  } | null
}

const BannerBlock: FC<Props> = ({name, content, featuredImage}) => (
  <section
    className={cn(
      ['bg-[var(--brand-color)]', 'bg-cover'],
      ['h-[calc(100vh-theme(height.header))]', 'max-h-[864px]', 'py-8']
    )}
    style={{backgroundImage: `url('${featuredImage?.src}')`}}
  >
    <Container>
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
        <h2
          className={cn(
            'mb-3',
            'font-heading',
            'font-bold',
            'text-template',
            'text-3xl',
            'sm:text-4xl'
          )}
        >
          {name}
        </h2>
        {content && <PortableText value={content} />}
      </article>
    </Container>
  </section>
)

export default BannerBlock
