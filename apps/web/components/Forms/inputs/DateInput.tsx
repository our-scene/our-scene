import { ChangeEventHandler } from "react"

interface DateInputProps {
  name: string,
  label: string,
  handleChange: ChangeEventHandler<HTMLInputElement> | undefined,
  value: string,
  min: string,
  error: string | undefined
}

export function DateInput({ name, label, handleChange, value, min, error }: DateInputProps) {

  return (
    <>
      <label htmlFor={name}>{label}</label>
      <input
        className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
        type="date"
        onChange={handleChange}
        value={value}
        min={min}
        name={name}
      />
      {Boolean(error) && <div id="feedback">{error}</div>}
    </>
  )
} 