import type {FC} from 'react'
import Link from 'next/link'

interface Props {
  name: string
  href: string
}

const NavLink: FC<Props> = ({name, href}) => (
  <Link
    className="px-4 py-3 text-sm text-template rounded font-semibold hover:bg-cobalt-50"
    href={`/${href}`}
  >
    {name}
  </Link>
)

export default NavLink
