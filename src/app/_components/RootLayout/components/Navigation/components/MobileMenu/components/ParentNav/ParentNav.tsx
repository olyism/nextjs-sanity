'use client'

import {type FC, useState} from 'react'
import cn from 'classnames'
import type {ParentNavItemProps, NavItemProps} from '@/app/_components/RootLayout/getData'
import NavLink, {navLinkClassNames} from '../NavLink'

interface Props {
  navItem: ParentNavItemProps
  currentPath?: string | null
}

const ParentNav: FC<Props> = ({navItem, currentPath = undefined}) => {
  const [showChildren, setShowChildren] = useState(false)

  const {_id, name, nav} = navItem

  if (!name || !nav || !nav.length) return null

  return (
    <>
      <button
        className={cn(navLinkClassNames, 'flex', 'w-full', 'text-left')}
        onClick={() => setShowChildren(!showChildren)}
      >
        {name}
        <span className="ml-auto text-white/50">{showChildren ? '-' : '+'}</span>
      </button>
      <ul className={cn('bg-black/50', 'pl-4', !showChildren && 'hidden')}>
        {nav.map((navItem: NavItemProps) => (
          <li key={navItem._id}>
            <NavLink navItem={navItem} currentPath={currentPath} />
          </li>
        ))}
      </ul>
    </>
  )
}

export default ParentNav
