'use client'

import {type FC, useState} from 'react'

export enum TextInputType {
  Email = 'email',
  Text = 'text',
}

interface Props {
  type: TextInputType
  name: string
  label?: string
  required?: true
}

const TextInput: FC<Props> = ({type, name, label = undefined, required = undefined}) => (
  <div className="mb-4 grow">
    {label && <label htmlFor={name}>{label}</label>}
    <input
      id={name}
      type={type}
      name={name}
      required={required}
      className="p-3 border-2 bg-white border-slate-300 rounded block w-full"
    />
  </div>
)

export default TextInput
