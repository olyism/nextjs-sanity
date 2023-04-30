'use client'

import type {FC} from 'react'
import Link from 'next/link'

interface Props {
  name: string
  href: string
}

const NavLink: FC<Props> = ({name, href}) => (
  <Link
    className="px-2 py-3 text-cobalt-50 text-center font-semibold rounded block hover:bg-cobalt-800"
    href={href}
  >
    {name}
  </Link>
)

export default NavLink
