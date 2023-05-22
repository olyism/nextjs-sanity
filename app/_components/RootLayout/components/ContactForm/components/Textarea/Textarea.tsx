import type {FC} from 'react'

interface Props {
  name: string
  label?: string
  required: true
}

const Textarea: FC<Props> = ({name, label = undefined, required = undefined}) => (
  <div className="mb-4">
    {label && <label htmlFor={name}>{label}</label>}
    <textarea
      id={name}
      className="rounded border-2 border-slate-300 p-3 bg-white block w-full"
      required={required}
      rows={5}
    ></textarea>
  </div>
)

export default Textarea
