import type {FC} from 'react'
import ContentBlockProps, {BlockType} from '@/types/ContentBlock'
import BannerBlock from './components/BannerBlock'
import ContentBlock from './components/ContentBlock'

interface Props {
  contentBlocks: ContentBlockProps[]
}

const ContentBlocks: FC<Props> = ({contentBlocks}) =>
  contentBlocks ? (
    <section>
      <ul>
        {contentBlocks.map((contentBlock) => {
          if (!contentBlock) return null

          const {_id, _type, name, content, slug, featuredImage} = contentBlock

          return (
            <li
              aria-label={`Content for ${name}`}
              className="my-16"
              id={slug ?? '' + Math.random()}
              key={_id}
            >
              {_type === BlockType.Banner ? (
                <BannerBlock name={name} content={content} featuredImage={featuredImage} />
              ) : (
                <ContentBlock content={content} featuredImage={featuredImage} />
              )}
            </li>
          )
        })}
      </ul>
    </section>
  ) : null

export default ContentBlocks
