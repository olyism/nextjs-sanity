import type {FC, ReactNode} from 'react'
import Link from 'next/link'
import cn from 'classnames'

export enum ButtonType {
  Primary = 'Primary',
  Outline = 'Outline',
}

interface Props {
  children: ReactNode
  href: string
  buttonType?: ButtonType
  title?: string
  newWindow?: boolean
}

const Button: FC<Props> = ({
  children,
  href,
  buttonType = ButtonType.Outline,
  title = undefined,
  newWindow = false,
}) => (
  <Link
    className={cn(
      [
        'rounded-md',
        'px-6',
        'py-2',
        'box-border',
        'border-2',
        'border-cobalt',
        'font-semibold',
        'inline-block',
      ],
      buttonType === ButtonType.Outline && [
        'text-cobalt',
        'hover:text-cobalt-900',
        'hover:border-cobalt-900',
      ],
      buttonType === ButtonType.Primary && ['text-white', 'bg-cobalt', 'hover:border-cobalt-900']
    )}
    href={href}
    target={newWindow ? '_blank' : undefined}
    title={title}
  >
    {children}
  </Link>
)

export default Button
