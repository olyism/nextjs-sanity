import type {FC} from 'react'
import type ContentBlockProps from '@/types/ContentBlock'
import Container from '@/components/Container'
import ContentBlock from './components/ContentBlock'

interface Props {
  contentBlocks: ContentBlockProps[]
}

const ContentBlocks: FC<Props> = ({contentBlocks}) =>
  contentBlocks ? (
    <section className="py-12">
      <Container>
        <ul>
          {contentBlocks.map((contentBlock) => {
            if (!contentBlock) return null

            const {_id, name, content, slug, featuredImage} = contentBlock

            return (
              <li
                aria-label={`Content for ${name}`}
                className="mb-10"
                id={slug ?? '' + Math.random()}
                key={_id}
              >
                <ContentBlock content={content} featuredImage={featuredImage} />
              </li>
            )
          })}
        </ul>
      </Container>
    </section>
  ) : null

export default ContentBlocks
