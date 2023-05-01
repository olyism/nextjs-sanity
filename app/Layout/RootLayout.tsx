import {ReactNode} from 'react'
import {Open_Sans} from 'next/font/google'
import getSettingsData from './getSettingsData'
import Footer from './components/Footer'
import Navigation from './components/Navigation'
import './globals.css'

const openSans = Open_Sans({
  subsets: ['latin'],
  variable: '--open-sans-font',
})

const settingsData = getSettingsData()

export async function generateMetadata() {
  const {title, description} = await settingsData
  return {
    title,
    description,
  }
}

const RootLayout = async ({children}: {children: ReactNode}) => {
  const {nav: navData, cta, tel} = await settingsData

  return (
    <html lang="en">
      <body className={`bg-cobalt-100 ${openSans.variable}`}>
        <div className="mx-auto max-w-screen-2xl min-h-screen flex flex-col bg-white drop-shadow-2xl">
          <Navigation navData={navData} cta={cta} tel={tel} />
          <main className="grow">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  )
}

export default RootLayout
