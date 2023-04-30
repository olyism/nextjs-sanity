import {FC} from 'react'
import Nav, {NavItem} from '@/types/Nav'
import NavLink from './components/NavLink'

interface Props {
  navData?: Nav
}

const HeaderLinks: FC<Props> = ({navData = []}) => (
  <nav className="hidden md:block">
    <ul className="flex">
      <li>
        <NavLink name="Home" href="/" />
      </li>
      {navData.map((navItem: NavItem) => {
        const {_id, name, slug} = navItem

        return (
          <li key={_id}>
            <NavLink name={name} href={slug} />
          </li>
        )
      })}
    </ul>
  </nav>
)

export default HeaderLinks
