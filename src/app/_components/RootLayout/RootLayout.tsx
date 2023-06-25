import type {ReactNode} from 'react'
import Bottom from './components/Bottom'
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

export const revalidate = 60

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
    footerImage,
  } = settingsData

  return (
    <html className="scroll-smooth" lang="en">
      <body className="bg-purple-100 font-system">
        <Styles
          primaryColor={primaryColor}
          brandColor={brandColor}
          systemFont={systemFont}
          headingFont={headingFont}
        />
        <div className="mx-auto max-w-screen-2xl min-h-screen flex flex-col bg-white drop-shadow-2xl relative">
          {nav?.length && <Navigation logo={logo} nav={nav} cta={cta} tel={tel} />}
          <main className="grow">{children}</main>
          <Bottom email={email} tel={tel} footerImage={footerImage} />
        </div>
      </body>
    </html>
  )
}

export default RootLayout
