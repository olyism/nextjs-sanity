import {FeaturedImagePos} from '@/types/ContentBlock'

const getBgPosCSSClass = (pos?: FeaturedImagePos) => {
  if (!pos) return ''

  switch (pos) {
    case FeaturedImagePos.Top:
      return 'bg-top'
    case FeaturedImagePos.RightTop:
      return 'bg-right-top'
    case FeaturedImagePos.Right:
      return 'bg-right'
    case FeaturedImagePos.RightBottom:
      return 'bg-right-bottom'
    case FeaturedImagePos.Bottom:
      return 'bg-bottom'
    case FeaturedImagePos.LeftBottom:
      return 'bg-left-bottom'
    case FeaturedImagePos.Left:
      return 'bg-left'
    case FeaturedImagePos.LeftTop:
      return 'bg-left-top'
    case FeaturedImagePos.Center:
      return 'bg-center'
  }
}

export default getBgPosCSSClass
