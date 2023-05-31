import type CallToAction from '@/types/CallToAction'
import type SanitySlug from '@/types/SanitySlug'
import client from '@/lib/client'

export enum NavType {
  Page = 'page',
  ContentBlock = 'contentBlock',
}

export type NavItemProps = {
  _id: string
  _type: NavType
  name: string
  slug: SanitySlug
}

export type LogoProps = {
  src?: string
  width?: number
  height?: number
}

export type StylesProps = {
  brandColor?: string
  primaryColor?: string
  systemFont?: string
  headingFont?: string
}

export type Settings = {
  title: string | null
  description: string | null
  logo: LogoProps
  styles: StylesProps
  nav: NavItemProps[]
  cta: CallToAction
  tel: string | null
  email: string | null
} | null

const getData = async (): Promise<Settings> => {
  const data = await client.fetch(`
    *[_type == "settings"]{
      title,
      description,
      "logo": coalesce(logo{
        "src": src.asset->url,
        width,
        height,
      }, {}),
      "styles": coalesce(styles{
        "brandColor": brandColor.hex,
        "primaryColor": primaryColor.hex,
        systemFont,
        headingFont,
      }, {}),
      nav[]->{
        _id, _type, name, slug
      },
      "cta": coalesce(cta{
        buttonLabel,
        jumpToContactForm,
        "goTo": goTo->slug
      }, {}),
      "tel": contact.tel,
      "email": contact.email,
    }[0]
  `)

  return data
}

export default getData
