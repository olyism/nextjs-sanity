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
      <body className={`min-h-screen flex flex-col ${openSans.variable}`}>
        <Header
          isMobileMenuShown={isMobileMenuShown}
          onClickMobileMenu={() => setIsMobileMenuShown(!isMobileMenuShown)}
        />
        <MobileMenu isMobileMenuShown={isMobileMenuShown} />
        {children}
        <div className="mt-auto">
          <Footer />
        </div>
      </body>
    </html>
  )
}

export default RootLayout
