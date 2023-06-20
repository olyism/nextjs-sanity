import type {FC, ReactNode} from 'react'
import cn from 'classnames'

export enum ContainerWidth {
  Default = 'Default',
  Fluid = 'Fluid',
  Prose = 'Prose',
  Wide = 'Wide',
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
      maxWidth === ContainerWidth.Prose && 'max-w-prose',
      maxWidth === ContainerWidth.Wide && 'max-w-screen-xl',
      maxWidth === ContainerWidth.Default && 'max-w-screen-lg',
      className
    )}
  >
    {children}
  </div>
)

export default Container
