import {FC} from 'react'
import type CallToAction from '@/types/CallToAction'
import type {NavItemProps} from '@/app/_components/RootLayout/getData'
import getNavHref from '@/lib/getNavHref'
import {ButtonStyle} from '@/components/Button'
import NavLink from './components/NavLink'
import CallToActionButton from '@/app/_components/CallToActionButton'

interface Props {
  nav: NavItemProps[]
  cta: CallToAction
  currentPath?: string | null
}

const HeaderLinks: FC<Props> = ({nav, cta, currentPath = undefined}) => (
  <nav className="hidden lg:block">
    <ul className="flex gap-1 items-center">
      <li>
        <NavLink name="Home" href="/" currentPath={currentPath} />
      </li>
      {nav &&
        nav.map((navItem: NavItemProps) => {
          const {_id, _type, name, slug} = navItem

          return (
            slug &&
            name && (
              <li key={_id}>
                <NavLink
                  name={name}
                  href={getNavHref(slug, _type)}
                  navType={_type}
                  currentPath={currentPath}
                />
              </li>
            )
          )
        })}
      <li className="ml-3">
        <CallToActionButton buttonStyle={ButtonStyle.Primary} cta={cta} />
      </li>
    </ul>
  </nav>
)

export default HeaderLinks
