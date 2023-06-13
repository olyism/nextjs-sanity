import type {FC} from 'react'
import cn from 'classnames'
import type {ParentNavItemProps, NavItemProps} from '@/app/_components/RootLayout/getData'
import NavLink, {navLinkClassNames} from '../NavLink'

interface Props {
  navItem: ParentNavItemProps
  currentPath?: string | null
}

const ParentNav: FC<Props> = ({navItem, currentPath = undefined}) => {
  const {name, nav} = navItem

  if (!name || !nav || !nav.length) return null

  return (
    <span className="group/item relative">
      <span className={cn(navLinkClassNames, 'cursor-default')}>{name}</span>
      <ul
        className={cn(
          ['absolute', 'left-0', 'top-header', 'w-64', 'bg-white', 'shadow-md'],
          ['hidden', 'group-hover/item:block']
        )}
      >
        {nav.map((navItem: NavItemProps) => (
          <li key={navItem._id}>
            <NavLink navItem={navItem} currentPath={currentPath} />
          </li>
        ))}
      </ul>
    </span>
  )
}

export default ParentNav
