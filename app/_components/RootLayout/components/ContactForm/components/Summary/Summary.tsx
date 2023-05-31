import type {FC} from 'react'

interface Props {
  tel: string | null
  email: string | null
}

const Summary: FC<Props> = ({tel, email}) => {
  if (!tel && !email) {
    return <p>Use the contact form below.</p>
  }

  const texts = []

  if (tel) texts.push(`call us on ${tel}`)
  if (email) texts.push(`email ${email}`)

  texts.push('or use the contact form below.')

  const formattedText = texts.join(', ')
  const capitalizedText = formattedText[0].toUpperCase() + formattedText.slice(1)

  return <p className="my-4">{capitalizedText}</p>
}

export default Summary
