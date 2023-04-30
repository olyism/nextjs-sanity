import {type FC} from 'react'
import Logo, {Color} from '@/components/Logo'

const Loading: FC = () => (
  <div className="fixed inset-0 z-20 flex items-center justify-center bg-cobalt">
    <span className="sr-only">Loading</span>
    <Logo color={Color.White} />
  </div>
)

export default Loading
