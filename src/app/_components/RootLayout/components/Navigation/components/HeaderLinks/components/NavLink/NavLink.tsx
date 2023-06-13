import type {FC} from 'react'
import cn from 'classnames'
import Link from 'next/link'
import {NavType, type NavItemProps} from '@/app/_components/RootLayout/getData'
import getNavHref from '@/lib/getNavHref'

interface Props {
  navItem: NavItemProps
  currentPath?: string | null
}

export const navLinkClassNames = [
  'px-4',
  'py-3',
  'text-[14px]',
  'text-template',
  'rounded',
  'leading-tight',
  'block',
]

const NavLink: FC<Props> = ({navItem, currentPath = undefined}) => {
  const {name, _type, slug} = navItem

  const href = getNavHref(slug, _type)

  const classNames = cn(
    navLinkClassNames,
    currentPath === href
      ? [
          'cursor-default',
          'underline',
          'underline-offset-4',
          'decoration-[var(--primary-color)]',
          'decoration-2',
          'font-semibold',
        ]
      : ['hover:bg-gray-50', 'hover:text-gray-800']
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
