import type {ReactNode} from 'react'
import ContactForm from './components/ContactForm'
import Footer from './components/Footer'
import Navigation from './components/Navigation'
import Styles from './components/Styles'
import getData from './getData'
import './globals.css'

const data = getData()

export async function generateMetadata() {
  const {title, description} = (await data) || {}

  return {
    title,
    description,
  }
}

const RootLayout = async ({children}: {children: ReactNode}) => {
  const settingsData = await data

  if (!settingsData) {
    return (
      <html>
        <body>
          <p>Website error. Please contact admin@dplgroup.com.au for assistance.</p>
        </body>
      </html>
    )
  }

  const {
    logo,
    styles: {primaryColor, brandColor, systemFont, headingFont},
    nav,
    cta,
    tel,
    email,
  } = settingsData

  return (
    <html className="scroll-smooth" lang="en">
      <body className="bg-gray-100 font-system">
        <Styles
          primaryColor={primaryColor}
          brandColor={brandColor}
          systemFont={systemFont}
          headingFont={headingFont}
        />
        <div className="mx-auto max-w-screen-2xl min-h-screen flex flex-col bg-white drop-shadow-2xl relative">
          <Navigation logo={logo} nav={nav} cta={cta} tel={tel} />
          <main className="grow">{children}</main>
          <ContactForm email={email} tel={tel} />
          <Footer />
        </div>
      </body>
    </html>
  )
}

export default RootLayout
