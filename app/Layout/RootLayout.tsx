'use client'

import {useState} from 'react'
import {Open_Sans} from 'next/font/google'
import './globals.css'
import Header from './components/Header'
import Footer from './components/Footer'
import MobileMenu from './components/MobileMenu'

const openSans = Open_Sans({
  subsets: ['latin'],
  variable: '--open-sans-font',
})

export const metadata = {
  title: 'DPL Group',
  description: '',
}

const RootLayout = ({children}: {children: React.ReactNode}) => {
  const [isMobileMenuShown, setIsMobileMenuShown] = useState(false)

  return (
    <html lang="en">
      <body className={`bg-cobalt-100 ${openSans.variable}`}>
        <div className="mx-auto max-w-screen-2xl min-h-screen flex flex-col bg-white drop-shadow-2xl">
          <Header
            isMobileMenuShown={isMobileMenuShown}
            onClickMobileMenu={() => setIsMobileMenuShown(!isMobileMenuShown)}
          />
          <MobileMenu isMobileMenuShown={isMobileMenuShown} />
          <main className="grow">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  )
}

export default RootLayout
