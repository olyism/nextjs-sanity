import type {FC} from 'react'

interface Props {
  styles: {
    primaryColor: string | null
    brandColor: string | null
  } | null
}

const Style: FC<Props> = ({styles}) => (
  <style>
    {`
      :root {
        --primary-color: ${styles?.primaryColor || '#46108a'};
        --brand-color: ${styles?.brandColor || '#46108a'};
      }
    `}
  </style>
)

export default Style
