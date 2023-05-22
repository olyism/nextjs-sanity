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
      'border-cobalt',
      'font-display',
      'font-semibold',
      'text-center',
    ],
    buttonStyle === ButtonStyle.Outline && [
      'text-cobalt',
      'hover:text-cobalt-900',
      'hover:border-cobalt-900',
    ],
    buttonStyle === ButtonStyle.Primary && ['text-white', 'bg-cobalt', 'hover:border-cobalt-900'],
    buttonStyle === ButtonStyle.White && [
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
      <button className={classNames} type={type}>
        {children}
      </button>
    )
  }
}

export default Button
