import {FC} from 'react'
import Link from 'next/link'
import Nav, {NavItem} from '@/types/Nav'

interface Props {
  navData?: Nav
}

const HeaderLinks: FC<Props> = ({navData = []}) => (
  <nav className="hidden md:block">
    <ul className="flex">
      {navData.map((navItem: NavItem) => {
        const {_id, name, slug} = navItem

        return (
          <li key={_id}>
            <Link
              className="px-4 py-3 text-sm text-template rounded font-semibold hover:bg-cobalt-50"
              href={`/${slug}`}
            >
              {name}
            </Link>
          </li>
        )
      })}
    </ul>
  </nav>
)

export default HeaderLinks
