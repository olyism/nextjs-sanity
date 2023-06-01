import type {FC} from 'react'
import type {StylesProps} from '@/app/_components/RootLayout/getData'
import LinkGoogleFonts from './components/LinkGoogleFonts'
import getGoogleFontCSSValue from './getGoogleFontCSSValue'

const fallbackFonts =
  '-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol'

const Styles: FC<StylesProps> = ({
  primaryColor = undefined,
  brandColor = undefined,
  systemFont = undefined,
  headingFont = undefined,
}) => (
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

export default Styles
