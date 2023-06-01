import type {FC} from 'react'
import Link from 'next/link'
import cn from 'classnames'
import {NavType} from '@/app/_components/RootLayout/getData'

interface Props {
  name: string
  href: string
  currentPath?: string | null
  navType?: NavType
}

const NavLink: FC<Props> = ({name, href, currentPath = undefined, navType = undefined}) => {
  const classNames = cn(
    [
      'px-2',
      'py-3',
      'text-white',
      'text-center',
      'font-display',
      'font-semibold',
      'rounded',
      'block',
    ],
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

  return navType === NavType.ContentBlock ? (
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
