import type SanitySlug from '@/types/SanitySlug'
import {NavType} from '@/types/Nav'

const getNavHref = (slug: SanitySlug | null, navType: NavType | null): string => {
  if (navType === NavType.contentBlock) {
    return `/#${slug?.current}`
  }

  if (navType === NavType.page) {
    return `/${slug?.current}`
  }

  return ''
}

export default getNavHref
