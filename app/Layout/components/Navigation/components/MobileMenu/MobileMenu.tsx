import type {FC} from 'react'
import cn from 'classnames'
import CallToAction from '@/types/CallToAction'
import Nav, {NavItem} from '@/types/Nav'
import Button, {ButtonType, ButtonDisplay} from '@/components/Button'
import NavLink from './components/NavLink'

interface Props {
  navData?: Nav | null
  cta: CallToAction
  currentPath?: string | null
}

const MobileMenu: FC<Props> = ({navData = [], cta, currentPath = undefined}) => (
  <nav aria-hidden className={cn('bg-template', 'px-2', 'py-2', 'md:hidden')}>
    <ul>
      <li>
        <NavLink name="Home" href="/" currentPath={currentPath} />
      </li>
      {navData &&
        navData.map((navItem: NavItem) => {
          const {_id, name, slug} = navItem

          return (
            <li className="mt-1" key={_id}>
              <NavLink name={name} href={slug} currentPath={currentPath} />
            </li>
          )
        })}
      {cta?.buttonLabel && cta?.goTo && (
        <li className="mt-1">
          <Button href={cta.goTo} buttonType={ButtonType.White} buttonDisplay={ButtonDisplay.Block}>
            {cta.buttonLabel}
          </Button>
        </li>
      )}
    </ul>
  </nav>
)

export default MobileMenu
