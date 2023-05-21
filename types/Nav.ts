import type SanitySlug from './SanitySlug'

export enum NavType {
  contentBlock = 'contentBlock',
  page = 'page',
}

export type NavItem = {
  _id: string | null
  _type: NavType | null
  name: string | null
  slug: SanitySlug | null
}

type Nav = NavItem[]

export default Nav
