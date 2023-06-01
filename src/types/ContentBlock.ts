import type {PortableTextBlock, ArbitraryTypedObject} from '@portabletext/types'

export enum FeaturedImagePos {
  Top = 'Top',
  RightTop = 'RightTop',
  Right = 'Right',
  RightBottom = 'RightBottom',
  Bottom = 'Bottom',
  LeftBottom = 'LeftBottom',
  Left = 'Left',
  LeftTop = 'LeftTop',
  Center = 'Center',
}

export enum FeaturedImageAlignment {
  Left = 'Left',
  Right = 'Right',
}

export type FeaturedImage = {
  src: string | null
  alt: string | null
  align: FeaturedImageAlignment | null
  pos: FeaturedImagePos | null
} | null

type Value = PortableTextBlock | ArbitraryTypedObject

type ContentBlock = {
  _id: string | null
  name: string | null
  content: Value | Value[] | null
  slug: string | null
  featuredImage: FeaturedImage
}

export default ContentBlock
