import type {FC} from 'react'
import cn from 'classnames'

interface Props {
  slide: number
  length: number
  onSetSlide: (i: number) => void
}

const Controller: FC<Props> = ({slide, length, onSetSlide}) => (
  <ul className="absolute w-full bottom-4 z-10 text-center">
    {[...Array(length)].map((_, i) => (
      <li className="inline-block mx-[6px]" key={i}>
        <button
          className={cn('rounded-full', 'w-3', 'h-3', i === slide ? 'bg-white/90' : 'bg-white/50')}
          onClick={() => onSetSlide(i)}
        >
          <span className="sr-only">Go to {i + 1}</span>
        </button>
      </li>
    ))}
  </ul>
)

export default Controller
