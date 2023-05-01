import type {FC, ReactNode} from 'react'
import Link from 'next/link'
import cn from 'classnames'

export enum ButtonType {
  Primary = 'Primary',
  Outline = 'Outline',
  White = 'White',
}

export enum ButtonSize {
  Default = 'Default',
  Small = 'Small',
}

export enum ButtonDisplay {
  InlineBlock = 'InlineBlock',
  Block = 'Block',
}

interface Props {
  children: ReactNode
  href: string
  buttonSize?: ButtonSize
  buttonType?: ButtonType
  buttonDisplay?: ButtonDisplay
  title?: string
  newWindow?: boolean
}

const Button: FC<Props> = ({
  children,
  href,
  buttonSize = ButtonSize.Default,
  buttonType = ButtonType.Outline,
  buttonDisplay = ButtonDisplay.InlineBlock,
  title = undefined,
  newWindow = false,
}) => (
  <Link
    className={cn(
      [
        'rounded-md',
        'box-border',
        'border-2',
        'border-cobalt',
        'font-display',
        'font-semibold',
        'text-center',
      ],
      buttonType === ButtonType.Outline && [
        'text-cobalt',
        'hover:text-cobalt-900',
        'hover:border-cobalt-900',
      ],
      buttonType === ButtonType.Primary && ['text-white', 'bg-cobalt', 'hover:border-cobalt-900'],
      buttonType === ButtonType.White && [
        'text-cobalt',
        'bg-white',
        'border-white',
        'hover:bg-cobalt-50',
        'hover:text-cobalt-900',
      ],
      buttonSize === ButtonSize.Default && ['px-6', 'py-2', 'text-base'],
      buttonSize === ButtonSize.Small && ['px-4', 'py-2', 'text-sm'],
      buttonDisplay === ButtonDisplay.InlineBlock && 'inline-block',
      buttonDisplay === ButtonDisplay.Block && 'block'
    )}
    href={href}
    target={newWindow ? '_blank' : undefined}
    title={title}
  >
    {children}
  </Link>
)

export default Button
