import {ReactNode} from 'react'
import {Open_Sans} from 'next/font/google'
import Container from '@/components/Container'
import ContactForm from './components/ContactForm'
import Footer from './components/Footer'
import Navigation from './components/Navigation'
import getData from './getData'
import './globals.css'

const openSans = Open_Sans({
  subsets: ['latin'],
  variable: '--open-sans-font',
})

const data = getData()

export async function generateMetadata() {
  const {title, description} = await data

  return {
    title,
    description,
  }
}

const RootLayout = async ({children}: {children: ReactNode}) => {
  const {logo, nav: navData, cta, tel, email} = await data

  return (
    <html lang="en">
      <body className={`bg-cobalt-100 ${openSans.variable}`}>
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
