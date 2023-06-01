import type {FC} from 'react'
import Button, {ButtonStyle, ButtonType} from '@/components/Button'

interface Props {
  isLoading: boolean
  isSent: boolean
  isError: boolean
  isSubmitting: boolean
  isValid: boolean
}

const SubmitButton: FC<Props> = ({isLoading, isSent, isError, isSubmitting, isValid}) => {
  switch (true) {
    case isSent:
      return (
        <Button type={ButtonType.Button} buttonStyle={ButtonStyle.Success} disabled>
          Sent
        </Button>
      )
    case isError:
      return (
        <Button type={ButtonType.Button} buttonStyle={ButtonStyle.Danger} disabled>
          Error
        </Button>
      )
    case isLoading:
      return (
        <Button type={ButtonType.Button} buttonStyle={ButtonStyle.Primary} disabled>
          Loading
        </Button>
      )
    case isSubmitting:
      return (
        <Button type={ButtonType.Button} buttonStyle={ButtonStyle.Primary} disabled>
          Sending
        </Button>
      )
    case isValid:
      return (
        <Button type={ButtonType.Submit} buttonStyle={ButtonStyle.Primary}>
          Get in touch
        </Button>
      )
  }

  return (
    <Button type={ButtonType.Submit} buttonStyle={ButtonStyle.Primary} disabled>
      Get in touch
    </Button>
  )
}

export default SubmitButton
