import type {FC, ReactNode} from 'react'

interface Props {
  children: ReactNode
}

const Container: FC<Props> = ({children}) => (
  <div className="mx-auto max-w-screen-lg px-4">{children}</div>
)

export default Container
