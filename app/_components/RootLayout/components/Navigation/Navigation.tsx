'use client'

import {type FC, useState, useEffect} from 'react'
import Link from 'next/link'
import {usePathname} from 'next/navigation'
import {HiBars2, HiXMark, HiPhone} from 'react-icons/hi2'
import type CallToAction from '@/types/CallToAction'
import type Nav from '@/types/Nav'
import Container from '@/components/Container'
import Logo, {type Props as LogoProps} from './components/Logo'
import MobileMenu from './components/MobileMenu'
import HeaderLinks from './components/HeaderLinks'

interface Props {
  logo: LogoProps
  navData?: Nav | null
  cta: CallToAction
  tel: string | null
}

const Navigation: FC<Props> = ({logo, navData = [], cta, tel}) => {
  const [isMobileMenuShown, setIsMobileMenuShown] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    setIsMobileMenuShown(false)
  }, [pathname])

  return (
    <>
      {tel && (
        <address className="py-1 text-sm text-right not-italic bg-cobalt-100 hidden md:block">
          <Container>
            <a className="inline-flex items-center gap-1" href={`tel:${tel}`}>
              <HiPhone className="h-3 w-3" />
              {tel}
            </a>
          </Container>
        </address>
      )}
      <header className="bg-white drop-shadow-sm sticky top-0 z-20 h-header">
        <Container>
          <div className="flex justify-between items-center py-2">
            <Link href="/">
              <Logo src={logo.src} width={logo.width} height={logo.height} />
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
            <HeaderLinks navData={navData} cta={cta} currentPath={pathname} />
          </div>
        </Container>
      </header>
      {isMobileMenuShown && <MobileMenu navData={navData} cta={cta} currentPath={pathname} />}
    </>
  )
}

export default Navigation
