const getGoogleFontCSSValue = (jsonStr: string): string => {
  const {family, category} = JSON.parse(jsonStr)
  const cssValue = [family, category].join(' ,')

  return cssValue
}

export default getGoogleFontCSSValue
