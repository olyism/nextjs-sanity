'use client'

import type {FC} from 'react'
import cn from 'classnames'
import navLinks from '@/app/Layout/navLinks'
import NavLink from './components/NavLink'

interface Props {
  isMobileMenuShown: boolean
}

const MobileMenu: FC<Props> = ({isMobileMenuShown}) => (
  <nav
    aria-hidden
    className={cn('bg-cobalt', 'px-2', 'py-2', 'md:hidden', !isMobileMenuShown && 'hidden')}
  >
    <ul>
      {navLinks.map((navLink) => {
        const {name, href} = navLink

        return (
          <li key={name}>
            <NavLink name={name} href={href} />
          </li>
        )
      })}
    </ul>
  </nav>
)

export default MobileMenu
