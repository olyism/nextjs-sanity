import type {PortableTextBlock, ArbitraryTypedObject} from '@portabletext/types'

type Value = PortableTextBlock | ArbitraryTypedObject

type ContentBlock = {
  _id: string | null
  name: string | null
  content: Value | Value[] | null
  slug: string | null
}

export default ContentBlock
