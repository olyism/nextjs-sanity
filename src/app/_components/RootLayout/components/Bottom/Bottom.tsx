import type {FC} from 'react'
import urlFor from '@/lib/urlFor'
import type {FooterImageProps} from '../../getData'
import ContactForm from './components/ContactForm'
import Footer from './components/Footer'

interface Props {
  email: string | null
  tel: string | null
  footerImage: FooterImageProps
}

const Bottom: FC<Props> = ({email, tel, footerImage}) => {
  const {src, opacity = 20} = footerImage
  const bgStyles = src
    ? {
        backgroundImage: `url('${urlFor(src).width(1240).url()}')`,
        opacity: opacity * 0.01,
      }
    : undefined

  return (
    <div className="bg-[var(--brand-color)] relative">
      <ContactForm email={email} tel={tel} />
      <Footer />
      <div
        aria-hidden
        className="bg-center bg-cover md:bg-fixed absolute inset-0"
        style={bgStyles}
      />
    </div>
  )
}

export default Bottom
