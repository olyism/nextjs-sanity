import type {FC, ReactNode} from 'react'
import Link from 'next/link'
import cn from 'classnames'

export enum ButtonType {
  Link = 'link',
  Button = 'button',
  Submit = 'submit',
}

export enum ButtonStyle {
  Primary = 'Primary',
  Danger = 'Danger',
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
  children?: ReactNode
  disabled?: boolean
  href?: string
  buttonSize?: ButtonSize
  buttonStyle?: ButtonStyle
  buttonDisplay?: ButtonDisplay
  title?: string
  newWindow?: boolean
  type?: ButtonType
}

const Button: FC<Props> = ({
  children = undefined,
  disabled = undefined,
  href = '#',
  buttonSize = ButtonSize.Default,
  buttonStyle = ButtonStyle.Outline,
  buttonDisplay = ButtonDisplay.InlineBlock,
  title = undefined,
  newWindow = false,
  type = ButtonType.Link,
}) => {
  const classNames = cn(
    [
      'rounded-md',
      'box-border',
      'border-2',
      'border-[var(--primary-color)]',
      'font-display',
      'font-semibold',
      'text-center',
    ],
    buttonStyle === ButtonStyle.Outline && [
      'text-[var(--primary-color)]',
      'hover:text-blue-900',
      'hover:border-blue-900',
    ],
    buttonStyle === ButtonStyle.Primary && [
      'bg-[var(--primary-color)]',
      'text-white',
      'hover:border-blue-900',
    ],
    buttonStyle === ButtonStyle.Danger && [
      'bg-red',
      'text-white',
      'border-red',
      'hover:bg-red-800',
      'hover:border-red-800',
    ],
    buttonStyle === ButtonStyle.White && [
      'text-[var(--primary-color)]',
      'bg-white',
      'border-white',
      'hover:bg-blue-50',
      'hover:text-blue-900',
    ],
    buttonSize === ButtonSize.Default && ['px-6', 'py-2', 'text-base'],
    buttonSize === ButtonSize.Small && ['px-4', 'py-2', 'text-sm'],
    buttonDisplay === ButtonDisplay.InlineBlock && 'inline-block',
    buttonDisplay === ButtonDisplay.Block && 'block',
    disabled && ['opacity-30', 'cursor-not-allowed']
  )

  if (type === ButtonType.Link) {
    return (
      <Link
        className={classNames}
        href={href}
        target={newWindow ? '_blank' : undefined}
        title={title}
      >
        {children}
      </Link>
    )
  } else {
    return (
      <button className={classNames} disabled={disabled} type={type}>
        {children}
      </button>
    )
  }
}

export default Button
