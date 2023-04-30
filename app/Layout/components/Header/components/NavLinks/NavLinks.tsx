'use client'

import {FC} from 'react'
import Link from 'next/link'
import navLinks from '@/app/Layout/navLinks'

const NavLinks: FC = () => (
  <nav className="hidden md:block">
    <ul className="flex">
      {navLinks.map((navLink: {name: string; href: string}) => {
        const {name, href} = navLink

        return (
          <li key={name}>
            <Link
              className="px-4 py-3 text-sm text-template rounded font-semibold hover:bg-cobalt-50"
              href={href}
            >
              {name}
            </Link>
          </li>
        )
      })}
    </ul>
  </nav>
)

export default NavLinks
