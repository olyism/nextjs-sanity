import type CallToAction from '@/types/CallToAction'
import type SanitySlug from '@/types/SanitySlug'
import client from '@/lib/client'

export enum NavType {
  Page = 'page',
  ContentBlock = 'contentBlock',
  ParentNav = 'parentNav',
  Static = 'static',
}

export type NavItemProps = {
  _id: string
  _type: NavType.Page | NavType.ContentBlock | NavType.Static
  name: string
  slug: SanitySlug
}

export type ParentNavItemProps = {
  _id: string
  _type: NavType.ParentNav
  name: string | null
  nav: NavItemProps[] | null
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

export type FooterImageProps = {
  src?: string | null
  opacity?: number
}

export type Settings = {
  title: string | null
  description: string | null
  logo: LogoProps
  styles: StylesProps
  nav: (NavItemProps | ParentNavItemProps)[] | null
  cta: CallToAction
  tel: string | null
  email: string | null
  footerImage: FooterImageProps
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
      nav[]{
        _type == "reference" => @-> {
          _id,
          _type,
          name,
          slug,
        },
        _type != "reference" => {
          _type,
          name,
          "_id": _key,
          nav[]->{
            _id,
            _type,
            name,
            slug,
          },
        },
      },
      "cta": coalesce(cta{
        buttonLabel,
        jumpToContactForm,
        "goTo": goTo->slug
      }, {}),
      "tel": contact.tel,
      "email": contact.email,
      "footerImage": coalesce(footerImage{
        "src": src.asset->url,
        opacity,
      }, {}),
    }[0]
  `)

  return data
}

export default getData
