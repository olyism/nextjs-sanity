"use client"

import { AiOutlineCopyrightCircle } from 'react-icons/ai'

const Footer = () => {
  const year = new Date().getFullYear()
  return (
    <div className="flex items-center gap-1">
      <AiOutlineCopyrightCircle className="h-4 w-4"/>
      <p>{year}</p>
      <p>DPL Group</p>
    </div>
  )
}

export default Footer
