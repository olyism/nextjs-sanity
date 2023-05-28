import type {FC} from 'react'
import cn from 'classnames'
import Link from 'next/link'

interface Props {
  name: string | null
  href: string
  currentPath?: string | null
}

const NavLink: FC<Props> = ({name, href, currentPath = undefined}) => (
  <Link
    className={cn(
      ['px-4', 'py-3', 'text-sm', 'text-template', 'rounded', 'font-semibold'],
      currentPath === href
        ? [
            'cursor-default',
            'underline',
            'underline-offset-4',
            'decoration-[var(--primary-color)]',
            'decoration-2',
          ]
        : ['hover:bg-gray-50', 'hover:text-gray-800']
    )}
    href={href}
  >
    {name}
  </Link>
)

export default NavLink
