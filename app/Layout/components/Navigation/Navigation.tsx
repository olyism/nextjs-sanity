'use client'

import {type FC, useState} from 'react'
import Link from 'next/link'
import {HiBars2, HiXMark} from 'react-icons/hi2'
import type Nav from '@/types/Nav'
import Container from '@/components/Container'
import Logo from '@/components/Logo'
import MobileMenu from './components/MobileMenu'
import HeaderLinks from './components/HeaderLinks'

interface Props {
  navData?: Nav
}

const Navigation: FC<Props> = ({navData = []}) => {
  const [isMobileMenuShown, setIsMobileMenuShown] = useState(false)

  return (
    <>
      <header>
        <Container>
          <div className="flex justify-between items-center py-2">
            <Link href="/">
              <Logo />
            </Link>
            <button
              aria-hidden
              onClick={() => setIsMobileMenuShown(!isMobileMenuShown)}
              className="md:hidden"
            >
              {isMobileMenuShown ? (
                <HiXMark className="h-6 w-6" />
              ) : (
                <HiBars2 className="h-6 w-6" />
              )}
            </button>
            <HeaderLinks navData={navData} />
          </div>
        </Container>
      </header>
      {isMobileMenuShown && <MobileMenu navData={navData} />}
    </>
  )
}

export default Navigation
