import type {FC, ReactNode} from 'react'
import cn from 'classnames'

interface Props {
  children: ReactNode
  className?: string
}

const Container: FC<Props> = ({children, className = undefined}) => (
  <div className={cn('mx-auto', 'max-w-screen-lg', 'px-4', className)}>{children}</div>
)

export default Container
