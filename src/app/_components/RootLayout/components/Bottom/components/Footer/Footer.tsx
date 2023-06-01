import type {FC} from 'react'
import Link from 'next/link'
import Container from '@/components/Container'

const Footer: FC = () => {
  const year = new Date().getFullYear()

  return (
    <footer className="py-10 text-white/80 text-center relative z-10">
      <Container className="px-0">
        <p className="mb-4">
          &copy; {year} <span className="font-heading font-bold">DPLGroup</span>
        </p>
        <p>
          <Link className="hover:underline hover:text-white" href="/privacy" prefetch={false}>
            Privacy
          </Link>
          <span className="mx-2 text-white/50">•</span>
          <Link className="hover:underline hover:text-white" href="/terms" prefetch={false}>
            Terms
          </Link>
        </p>
      </Container>
    </footer>
  )
}

export default Footer
