import type {FC, ReactNode} from 'react'
import cn from 'classnames'

export enum ContainerWidth {
  Default = 'Default',
  Prose = 'Prose',
}

interface Props {
  children: ReactNode
  className?: string
  maxWidth?: ContainerWidth
}

const Container: FC<Props> = ({
  children,
  className = undefined,
  maxWidth = ContainerWidth.Default,
}) => (
  <div
    className={cn(
      ['mx-auto', 'px-4'],
      maxWidth === ContainerWidth.Prose ? 'max-w-prose' : 'max-w-4xl',
      className
    )}
  >
    {children}
  </div>
)

export default Container
