import {FC} from 'react'

export enum Color {
  Cobalt = 'cobalt',
  White = 'white',
}

interface Props {
  color?: Color
}

const Logo: FC<Props> = ({color = Color.Cobalt}) => (
  <div className={`text-${color} font-display leading-none`}>
    <span className="font-bold text-4xl tracking-tight">DPL</span>{' '}
    <span className="text-2xl uppercase tracking-wide">Group</span>
  </div>
)

export default Logo
