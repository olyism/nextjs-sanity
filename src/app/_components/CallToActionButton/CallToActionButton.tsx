import type {FC} from 'react'
import CallToAction from '@/types/CallToAction'
import Button, {ButtonDisplay, ButtonSize, ButtonStyle} from '@/components/Button'

interface Props {
  cta: CallToAction
  buttonDisplay?: ButtonDisplay
  buttonStyle?: ButtonStyle
}

const CallToActionButton: FC<Props> = ({
  cta,
  buttonDisplay = undefined,
  buttonStyle = undefined,
}) => {
  const {buttonLabel, jumpToContactForm, goTo} = cta

  const to = jumpToContactForm ? '/#contact' : goTo?.current ?? ''

  return buttonLabel ? (
    <Button
      href={to}
      buttonDisplay={buttonDisplay}
      buttonStyle={buttonStyle}
      buttonSize={ButtonSize.Small}
      className="whitespace-nowrap"
    >
      {buttonLabel}
    </Button>
  ) : null
}

export default CallToActionButton
