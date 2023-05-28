import {type FC, useContext} from 'react'
import Image from 'next/image'

export interface Props {
  src: string | null
  width: number | null
  height: number | null
}

const Logo: FC<Props> = ({src, width, height}) => {
  return src && width && height ? (
    <Image
      className="h-logo w-auto"
      alt="Logo of DPL Group"
      src={src}
      height={height}
      width={width}
    />
  ) : (
    <div className={`text-[var(--brand-color)] font-display leading-none`}>
      <span className="font-bold text-4xl tracking-tight">DPL</span>{' '}
      <span className="text-2xl uppercase tracking-wide">Group</span>
    </div>
  )
}

export default Logo
