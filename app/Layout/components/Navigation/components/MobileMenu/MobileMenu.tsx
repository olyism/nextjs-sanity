import type {FC} from 'react'
import cn from 'classnames'
import Nav, {NavItem} from '@/types/Nav'
import NavLink from './components/NavLink'

interface Props {
  navData?: Nav
}

const MobileMenu: FC<Props> = ({navData = []}) => (
  <nav aria-hidden className={cn('bg-cobalt', 'px-2', 'py-2', 'md:hidden')}>
    <ul>
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

export default MobileMenu
