import type SanitySlug from '@/types/SanitySlug'
import {NavType} from '@/types/Nav'

const getNavHref = (slug: SanitySlug, navType: NavType): string | null => {
  if (navType === NavType.contentBlock) {
    return `/#${slug.current}`
  }

  if (navType === NavType.page) {
    return `/${slug.current}`
  }

  return null
}

export default getNavHref
