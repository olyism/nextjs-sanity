'use client'

import {FC} from 'react'
import {AiOutlineCopyrightCircle} from 'react-icons/ai'

const Footer: FC = () => {
  const year = new Date().getFullYear()
  return (
    <footer className="flex items-center gap-1">
      <AiOutlineCopyrightCircle className="h-4 w-4" />
      <p>{year}</p>
      <p>DPL Group</p>
    </footer>
  )
}

export default Footer
