import {type FC} from 'react'
import Image from 'next/image'
import type {LogoProps} from '@/app/_components/RootLayout/getData'

const Logo: FC<LogoProps> = ({src, height, width}) => {
  if (src && height && width) {
    return (
      <Image
        className="max-h-logo h-auto w-auto"
        alt="Logo of DPL Group"
        src={src}
        height={height}
        width={width}
      />
    )
  }

  return (
    <div className={`text-[var(--brand-color)] font-display leading-none`}>
      <span className="font-bold text-4xl tracking-tight">DPL</span>{' '}
      <span className="text-2xl uppercase tracking-wide">Group</span>
    </div>
  )
}

export default Logo
