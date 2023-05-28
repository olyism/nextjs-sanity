const toFontParam = (jsonStr: string): string => {
  const {family} = JSON.parse(jsonStr)
  const fontParam = family.replace(' ', '+') + ':400,700,i,bi'

  return fontParam
}

export default toFontParam
