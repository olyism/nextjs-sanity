import type {FC} from 'react'
import Link from 'next/link'
import cn from 'classnames'
import {NavType, type NavItemProps} from '@/app/_components/RootLayout/getData'
import getNavHref from '@/lib/getNavHref'

interface Props {
  navItem: NavItemProps
  currentPath?: string | null
}

export const navLinkClassNames = [
  'px-2',
  'py-3',
  'text-white',
  'font-display',
  'font-semibold',
  'rounded',
  'block',
]

const NavLink: FC<Props> = ({navItem, currentPath = undefined}) => {
  const {_type, name, slug} = navItem
  const href = getNavHref(slug, _type)

  const classNames = cn(
    navLinkClassNames,
    currentPath === href
      ? [
          'cursor-default',
          'underline',
          'underline-offset-4',
          'underline-width-4',
          'decoration-[var(--primary--color)]',
          'decoration-2',
        ]
      : 'hover:bg-slate-700'
  )

  return _type === NavType.ContentBlock ? (
    <a className={classNames} href={href}>
      {name}
    </a>
  ) : (
    <Link className={classNames} href={href}>
      {name}
    </Link>
  )
}

export default NavLink
