import {FC} from 'react'
import {HiPhone} from 'react-icons/hi2'
import Container from '@/components/Container'

interface Props {
  tel: string | null
}

const Phone: FC<Props> = ({tel}) =>
  tel ? (
    <address className="py-1 text-sm bg-gray-100 text-right text-gray-600 not-italic hidden md:block">
      <Container>
        <a className="inline-flex items-center gap-1" href={`tel:${tel}`}>
          <HiPhone className="h-3 w-3" />
          {tel}
        </a>
      </Container>
    </address>
  ) : null

export default Phone
