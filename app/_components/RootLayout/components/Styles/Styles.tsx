import type {FC} from 'react'
import LinkGoogleFonts from './components/LinkGoogleFonts'
import getGoogleFontCSSValue from './getGoogleFontCSSValue'

interface Props {
  styles: {
    primaryColor: string | null
    brandColor: string | null
    systemFont: string | null
    headingFont: string | null
  } | null
}

const fallbackFonts =
  '-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol'

const Styles: FC<Props> = ({styles}) => {
  const {primaryColor, brandColor, systemFont, headingFont} = styles ?? {}

  return (
    <>
      <LinkGoogleFonts systemFont={systemFont} headingFont={headingFont} />
      <style>
        {`
          :root {
            --primary-color: ${primaryColor || '#46108a'};
            --brand-color: ${brandColor || '#46108a'};
            --system-font: ${systemFont ? getGoogleFontCSSValue(systemFont) : fallbackFonts};
            --heading-font: ${headingFont ? getGoogleFontCSSValue(headingFont) : fallbackFonts};
          }
        `}
      </style>
    </>
  )
}

export default Styles
