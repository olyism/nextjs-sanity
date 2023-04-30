'use client'

import {FC} from 'react'
import Link from 'next/link'
import {HiBars2, HiXMark} from 'react-icons/hi2'
import Container from '@/components/Container'
import Logo from './components/Logo'
import NavLinks from './components/NavLinks'

interface Props {
  isMobileMenuShown: boolean
  onClickMobileMenu: () => void
}

const Header: FC<Props> = ({isMobileMenuShown, onClickMobileMenu}) => {
  return (
    <header>
      <Container>
        <div className="flex justify-between items-center py-2">
          <Link href="/">
            <Logo />
          </Link>
          <button aria-hidden onClick={onClickMobileMenu} className="md:hidden">
            {isMobileMenuShown ? <HiXMark className="h-6 w-6" /> : <HiBars2 className="h-6 w-6" />}
          </button>
          <NavLinks />
        </div>
      </Container>
    </header>
  )
}
export default Header
