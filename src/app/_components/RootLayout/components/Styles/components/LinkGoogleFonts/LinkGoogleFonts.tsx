import type {FC} from 'react'
import toFontParam from './toFontParam'

interface Props {
  headingFont?: string | null
  systemFont?: string | null
}

const LinkGoogleFonts: FC<Props> = ({headingFont = undefined, systemFont = undefined}) => {
  if (!headingFont && !systemFont) return null

  const fonts = []

  if (headingFont) fonts.push(toFontParam(headingFont))

  if (systemFont) fonts.push(toFontParam(systemFont))

  return (
    <link href={`https://fonts.googleapis.com/css?family=${fonts.join('|')}`} rel="stylesheet" />
  )
}

export default LinkGoogleFonts
