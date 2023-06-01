import type SanitySlug from '@/types/SanitySlug'
import {NavType} from '@/app/_components/RootLayout/getData'

const getNavHref = (slug: SanitySlug | null, navType: NavType | null): string => {
  if (navType === NavType.ContentBlock) {
    return `/#${slug?.current}`
  }

  if (navType === NavType.Page) {
    return `/${slug?.current}`
  }

  return ''
}

export default getNavHref
