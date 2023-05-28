import {FC} from 'react'
import CallToAction from 'types/CallToAction'
import Nav, {NavItem} from '@/types/Nav'
import getNavHref from '@/lib/getNavHref'
import {ButtonStyle} from '@/components/Button'
import NavLink from './components/NavLink'
import CallToActionButton from '@/app/_components/CallToActionButton'

interface Props {
  navData?: Nav | null
  cta: CallToAction
  currentPath?: string | null
}

const HeaderLinks: FC<Props> = ({navData = [], cta, currentPath = undefined}) => (
  <nav className="hidden md:block">
    <ul className="flex gap-1 items-center">
      <li>
        <NavLink name="Home" href="/" currentPath={currentPath} />
      </li>
      {navData &&
        navData.map((navItem: NavItem) => {
          const {_id, _type, name, slug} = navItem

          return (
            slug &&
            name && (
              <li key={_id}>
                <NavLink name={name} href={getNavHref(slug, _type)} currentPath={currentPath} />
              </li>
            )
          )
        })}
      <li>
        <CallToActionButton buttonStyle={ButtonStyle.Primary} cta={cta} />
      </li>
    </ul>
  </nav>
)

export default HeaderLinks
