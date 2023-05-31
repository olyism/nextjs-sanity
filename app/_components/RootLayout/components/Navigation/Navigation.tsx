'use client'

import {type FC, useState, useEffect} from 'react'
import Link from 'next/link'
import {usePathname} from 'next/navigation'
import {HiBars2, HiXMark, HiPhone} from 'react-icons/hi2'
import type CallToAction from '@/types/CallToAction'
import type {NavItemProps, LogoProps} from '@/app/_components/RootLayout/getData'
import Container from '@/components/Container'
import HeaderLinks from './components/HeaderLinks'
import Logo from './components/Logo'
import MobileMenu from './components/MobileMenu'
import Phone from './components/Phone'

interface Props {
  logo: LogoProps
  nav: NavItemProps[]
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
      <Phone tel={tel} />
      <header className="bg-white drop-shadow-sm sticky top-0 z-20 h-header">
        <Container>
          <div className="flex justify-between items-center py-2">
            <Link href="/">
              <Logo src={src} width={width} height={height} />
            </Link>
            <div className="flex items-center gap-6 md:hidden">
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
