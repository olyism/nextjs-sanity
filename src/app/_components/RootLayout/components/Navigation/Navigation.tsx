'use client'

import {type FC, useState, useEffect} from 'react'
import Link from 'next/link'
import {usePathname} from 'next/navigation'
import {HiBars2, HiXMark, HiPhone} from 'react-icons/hi2'
import cn from 'classnames'
import type CallToAction from '@/types/CallToAction'
import type {
  LogoProps,
  NavItemProps,
  ParentNavItemProps,
} from '@/app/_components/RootLayout/getData'
import Container, {ContainerWidth} from '@/components/Container'
import HeaderLinks from './components/HeaderLinks'
import Logo from './components/Logo'
import MobileMenu from './components/MobileMenu'

interface Props {
  logo: LogoProps
  nav: (NavItemProps | ParentNavItemProps)[]
  cta: CallToAction
  tel: string | null
}

const Navigation: FC<Props> = ({logo: {src, width, height}, nav, cta, tel}) => {
  const [isMobileMenuShown, setIsMobileMenuShown] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    setIsMobileMenuShown(false)
  }, [pathname])

  return (
    <>
      <header
        className={cn('bg-white', 'z-30', 'drop-shadow-sm', !isMobileMenuShown && 'min-h-header')}
      >
        <Container maxWidth={ContainerWidth.Wide}>
          <div className="flex justify-between items-center py-4 gap-4">
            <Link href="/">
              <Logo src={src} width={width} height={height} />
            </Link>
            <div className="flex items-center gap-6 lg:hidden">
              {tel && (
                <a aria-hidden className="p-2" href={`tel:${tel}`}>
                  <HiPhone className="h-4 w-4" />
                </a>
              )}
              <button aria-hidden onClick={() => setIsMobileMenuShown(!isMobileMenuShown)}>
                {isMobileMenuShown ? (
                  <HiXMark className="h-6 w-6" />
                ) : (
                  <HiBars2 className="h-6 w-6" />
                )}
              </button>
            </div>
            <HeaderLinks nav={nav} cta={cta} currentPath={pathname} />
          </div>
        </Container>
      </header>
      {isMobileMenuShown && <MobileMenu nav={nav} cta={cta} currentPath={pathname} />}
    </>
  )
}

export default Navigation
