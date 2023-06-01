import type {FC} from 'react'
import cn from 'classnames'
import getNavHref from '@/lib/getNavHref'
import type CallToAction from '@/types/CallToAction'
import {ButtonDisplay, ButtonStyle} from '@/components/Button'
import {type NavItemProps} from '@/app/_components/RootLayout/getData'
import CallToActionButton from '@/app/_components/CallToActionButton'
import NavLink from './components/NavLink'

interface Props {
  nav: NavItemProps[]
  cta: CallToAction
  currentPath?: string | null
}

const MobileMenu: FC<Props> = ({nav, cta, currentPath = undefined}) => (
  <nav aria-hidden className={cn('bg-template', 'px-2', 'py-2', 'lg:hidden')}>
    <ul>
      <li>
        <NavLink name="Home" href="/" currentPath={currentPath} />
      </li>
      {nav &&
        nav.map((navItem: NavItemProps) => {
          const {_id, _type, name, slug} = navItem

          return (
            name && (
              <li className="mt-1" key={_id}>
                <NavLink
                  name={name}
                  href={getNavHref(slug, _type)}
                  currentPath={currentPath}
                  navType={_type}
                />
              </li>
            )
          )
        })}
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
