import Value from './Value'

export enum BlockType {
  Banner = 'bannerBlock',
  Content = 'contentBlock',
}

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

type ContentBlockBase = {
  _id: string | null
  _type: BlockType
  name: string | null
  content: Value | Value[] | null
  slug: string | null
  featuredImage: FeaturedImage
}

export default ContentBlockBase
