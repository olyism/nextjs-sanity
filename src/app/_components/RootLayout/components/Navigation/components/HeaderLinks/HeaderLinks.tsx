import {FC} from 'react'
import type CallToAction from '@/types/CallToAction'
import {
  NavType,
  type NavItemProps,
  type ParentNavItemProps,
} from '@/app/_components/RootLayout/getData'
import {ButtonStyle} from '@/components/Button'
import CallToActionButton from '@/app/_components/CallToActionButton'
import NavLink from './components/NavLink'
import ParentNav from './components/ParentNav'

interface Props {
  nav: (NavItemProps | ParentNavItemProps)[]
  cta: CallToAction
  currentPath?: string | null
}

const HeaderLinks: FC<Props> = ({nav, cta, currentPath = undefined}) => {
  return (
    <nav className="hidden lg:block">
      <ul className="flex gap-1 items-center">
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
            currentPath={currentPath}
          />
        </li>
        {nav.map((navItem: NavItemProps | ParentNavItemProps) => {
          const {_type} = navItem
          return (
            <li key={navItem._id}>
              {_type === NavType.ParentNav ? (
                <ParentNav navItem={navItem} currentPath={currentPath} />
              ) : (
                <NavLink navItem={navItem} currentPath={currentPath} />
              )}
            </li>
          )
        })}
        <li className="ml-3">
          <CallToActionButton buttonStyle={ButtonStyle.Primary} cta={cta} />
        </li>
      </ul>
    </nav>
  )
}

export default HeaderLinks
