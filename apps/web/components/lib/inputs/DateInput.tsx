import { ChangeEventHandler } from 'react';
import { capitalize } from '../../../lib/string_helpers';

interface DateInputProps {
  name: string;
  handleChange: ChangeEventHandler<HTMLInputElement> | undefined;
  value: any;
  min: string;
  error: any | undefined;
}

export function DateInput({ name, handleChange, value, min, error }: DateInputProps) {
  return (
    <>
      <label htmlFor={name}>{capitalize(name)}</label>
      <input
        className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
        type="datetime-local"
        onChange={handleChange}
        value={value}
        min={min}
        name={name}
      />
      {Boolean(error) && <div id="feedback">{error}</div>}
    </>
  );
}
