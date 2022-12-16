import { ChangeEventHandler } from "react"

interface TextInputProps {
  name: string,
  label: string,
  handleChange: ChangeEventHandler<HTMLInputElement> | undefined,
  value: string,
  error: string | undefined
}

export function TextInput({ name, label, handleChange, value, error }: TextInputProps) {

  return (
    <>
      <label htmlFor={name}>{label}</label>
      <input
        className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
        type="text"
        onChange={handleChange}
        value={value}
        name={name}
      />
      {Boolean(error) && <div id="feedback">{error}</div>}
    </>
  )
} 