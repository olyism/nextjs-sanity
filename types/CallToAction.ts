import SanitySlug from './SanitySlug'

export type CallToAction = {
  buttonLabel?: string | null
  jumpToContactForm?: boolean | null
  goTo?: SanitySlug
}

export default CallToAction
