import type {FC} from 'react'
import {useFormContext} from 'react-hook-form'

interface Props {
  name: string
  label?: string
  required?: boolean
}

const Textarea: FC<Props> = ({name, label = undefined, required = undefined}) => {
  const {register} = useFormContext()

  return (
    <div className="mb-4">
      {label && <label htmlFor={name}>{label}</label>}
      <textarea
        {...register(name)}
        id={name}
        className="rounded border-2 border-slate-300 p-3 bg-white block w-full"
        required={required}
        rows={5}
      ></textarea>
    </div>
  )
}

export default Textarea
