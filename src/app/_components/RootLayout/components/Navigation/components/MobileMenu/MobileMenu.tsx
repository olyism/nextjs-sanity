import type {FC} from 'react'
import cn from 'classnames'
import type CallToAction from '@/types/CallToAction'
import {ButtonDisplay, ButtonStyle} from '@/components/Button'
import {NavItemProps, NavType, ParentNavItemProps} from '@/app/_components/RootLayout/getData'
import CallToActionButton from '@/app/_components/CallToActionButton'
import NavLink from './components/NavLink'
import ParentNav from './components/ParentNav'

interface Props {
  nav: NavItemProps[] | ParentNavItemProps[]
  cta: CallToAction
  currentPath?: string | null
}

const MobileMenu: FC<Props> = ({nav, cta, currentPath = undefined}) => (
  <nav aria-hidden className={cn('bg-template', 'px-2', 'py-2', 'lg:hidden')}>
    <ul>
      <li>
        <NavLink
          navItem={{
            _id: 'home',
            _type: NavType.Static,
            name: 'Home',
            slug: {
              _type: 'slug',
              current: '/',
            },
          }}
        />
      </li>
      {nav &&
        nav.map((navItem: NavItemProps | ParentNavItemProps) => (
          <li className="mt-1" key={navItem._id}>
            {navItem._type === NavType.ParentNav ? (
              <ParentNav navItem={navItem} currentPath={currentPath} />
            ) : (
              <NavLink navItem={navItem} currentPath={currentPath} />
            )}
          </li>
        ))}
      <li className="mt-1">
        <CallToActionButton
          cta={cta}
          buttonDisplay={ButtonDisplay.Block}
          buttonStyle={ButtonStyle.White}
        />
      </li>
    </ul>
  </nav>
)

export default MobileMenu
