import type {ReactNode} from 'react'
import Container from '@/components/Container'
import ContactForm from './components/ContactForm'
import Footer from './components/Footer'
import Navigation from './components/Navigation'
import Styles from './components/Styles'
import getData from './getData'
import './globals.css'

const data = getData()

export async function generateMetadata() {
  const {title, description} = await data

  return {
    title,
    description,
  }
}

const RootLayout = async ({children}: {children: ReactNode}) => {
  const {logo, styles, nav: navData, cta, tel, email} = await data

  return (
    <html lang="en">
      <body className="bg-gray-100 font-system">
        <Styles styles={styles} />
        <div className="mx-auto max-w-screen-2xl min-h-screen flex flex-col bg-white drop-shadow-2xl relative">
          <Navigation logo={logo} navData={navData} cta={cta} tel={tel} />
          <main className="grow">
            {children}
            <section>
              <Container>
                <ContactForm email={email} />
              </Container>
            </section>
          </main>
          <Footer />
        </div>
      </body>
    </html>
  )
}

export default RootLayout
