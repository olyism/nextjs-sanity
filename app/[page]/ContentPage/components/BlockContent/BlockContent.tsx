import type {FC} from 'react'
import type {PortableTextBlock, ArbitraryTypedObject} from '@portabletext/types'
import {PortableText} from '@portabletext/react'
import ImageComponent from './components/ImageComponent'

type Value = PortableTextBlock | ArbitraryTypedObject

interface Props {
  value: Value | Value[] | null
}

const BlockContent: FC<Props> = ({value}) => {
  if (!value) return null

  const components = {
    types: {
      image: ImageComponent,
    },
  }

  return (
    <section className="prose">
      <PortableText components={components} value={value} />
    </section>
  )
}

export default BlockContent
