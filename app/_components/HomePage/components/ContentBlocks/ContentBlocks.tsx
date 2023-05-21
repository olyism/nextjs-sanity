import type {FC} from 'react'
import {PortableText} from '@portabletext/react'
import type ContentBlock from '@/types/ContentBlock'
import Container from '@/components/Container'
import ImageComponent from '@/components/ImageComponent'

interface Props {
  contentBlocks: ContentBlock[] | null
}

const ContentBlocks: FC<Props> = ({contentBlocks}) =>
  contentBlocks && (
    <section className="py-12">
      <Container>
        <ul>
          {contentBlocks.map((contentBlock) => {
            const {_id, name, content, slug} = contentBlock

            const components = {
              types: {
                image: ImageComponent,
              },
            }

            return (
              <li
                aria-label={`Content for ${name}`}
                id={slug ?? '' + Math.random()}
                key={_id ?? '' + Math.random()}
              >
                <article className="prose">
                  <PortableText components={components} value={content} />
                </article>
              </li>
            )
          })}
        </ul>
      </Container>
    </section>
  )

export default ContentBlocks
