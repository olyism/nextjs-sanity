import {FC} from 'react'
import Link from 'next/link'
import Container from '@/components/Container'

const Footer: FC = () => {
  const year = new Date().getFullYear()

  return (
    <footer className="mt-20 py-10 bg-cobalt text-cobalt-200">
      <Container>
        <div className="flex gap-4">
          <span className="mr-auto">&copy; {year} DPL Group</span>
          <Link className="hover:underline hover:text-white" href="/privacy">
            Privacy
          </Link>
          <Link className="hover:underline hover:text-white" href="/terms">
            Terms
          </Link>
        </div>
      </Container>
    </footer>
  )
}

export default Footer
