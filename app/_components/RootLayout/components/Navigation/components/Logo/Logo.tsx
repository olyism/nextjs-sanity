import {type FC} from 'react'
import Image from 'next/image'

interface Props {
  logo: {
    src: string | null
    width: number | null
    height: number | null
  } | null
}

const Logo: FC<Props> = ({logo}) => {
  if (logo) {
    if (logo?.src && logo?.width && logo?.height) {
      return (
        <Image
          className="max-h-logo h-auto w-auto"
          alt="Logo of DPL Group"
          src={logo?.src}
          height={logo?.height}
          width={logo?.width}
        />
      )
    }
  }

  return (
    <div className={`text-[var(--brand-color)] font-display leading-none`}>
      <span className="font-bold text-4xl tracking-tight">DPL</span>{' '}
      <span className="text-2xl uppercase tracking-wide">Group</span>
    </div>
  )
}

export default Logo
