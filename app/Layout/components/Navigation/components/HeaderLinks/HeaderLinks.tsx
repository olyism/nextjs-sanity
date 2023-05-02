import {FC} from 'react'
import CallToAction from 'types/CallToAction'
import Nav, {NavItem} from '@/types/Nav'
import Button, {ButtonType, ButtonSize} from '@/components/Button'
import NavLink from './components/NavLink'

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
          const {_id, name, slug} = navItem

          return (
            <li key={_id}>
              <NavLink name={name} href={slug} currentPath={currentPath} />
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
