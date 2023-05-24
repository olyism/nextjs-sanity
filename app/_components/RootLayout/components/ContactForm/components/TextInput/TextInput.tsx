import type {FC} from 'react'
import {useFormContext} from 'react-hook-form'

export enum TextInputType {
  Email = 'email',
  Text = 'text',
}

interface Props {
  type: TextInputType
  name: string
  label?: string
  required?: boolean
}

const TextInput: FC<Props> = ({type, name, label = undefined, required = undefined}) => {
  const {register} = useFormContext()

  return (
    <div className="mb-4 grow">
      {label && (
        <label htmlFor={name}>
          {label} {!required && <span className="text-gray-600">(Optional)</span>}
        </label>
      )}
      <input
        {...register(name)}
        id={name}
        type={type}
        name={name}
        required={required}
        className="p-3 border-2 bg-white border-slate-300 rounded block w-full"
      />
    </div>
  )
}

export default TextInput
