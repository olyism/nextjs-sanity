import {FC} from 'react'
import CallToAction from 'types/CallToAction'
import Nav, {NavItem, NavType} from '@/types/Nav'
import Button, {ButtonType, ButtonSize} from '@/components/Button'
import NavLink from './components/NavLink'
import getNavHref from '@/lib/getNavHref'

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

          return name && (
            <li key={_id}>
              <NavLink name={name} href={getNavHref(slug, _type)} currentPath={currentPath} />
            </li>
          )
        })}
      {cta?.buttonLabel && cta?.goTo && (
        <li>
          <Button href={cta.goTo} buttonType={ButtonType.Primary} buttonSize={ButtonSize.Small}>
            {cta.buttonLabel}
          </Button>
        </li>
      )}
    </ul>
  </nav>
)

export default HeaderLinks
