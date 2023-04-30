'use client'

import {FC} from 'react'
import Link from 'next/link'
import {AiOutlineMenu} from 'react-icons/ai'
import Logo from './components/Logo'

interface Props {
  onClickMobileMenu: () => {}
}

const Header: FC<Props> = ({onClickMobileMenu}) => {
  return (
    <header className="flex justify-between items-center px-4 py-2">
      <Link href="/">
        <Logo />
      </Link>
      <button aria-hidden onClick={onClickMobileMenu} className="md:hidden">
        <AiOutlineMenu className="h-6 w-6" />
      </button>
      <nav className="hidden md:block">
        <ul className="flex gap-4">
          <li>About us</li>
          <li>Case study</li>
          <li>Contact us</li>
        </ul>
      </nav>
    </header>
  )
}
export default Header
