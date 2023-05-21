import type SanitySlug from './SanitySlug'

export enum NavType {
  contentBlock = 'contentBlock',
  page = 'page',
}

export type NavItem = {
  _id: string | null
  _type: NavType
  name: string | null
  slug: SanitySlug | null
}

type Nav = NavItem[]

export default Nav
