import { ChangeEventHandler } from 'react';
import { capitalize } from '../../../lib/string_helpers';

interface TextInputProps {
  name: string;
  handleChange: ChangeEventHandler<HTMLInputElement>;
  value: string;
  error: string | undefined;

}

export function TextInput({ name, handleChange, value, error }: TextInputProps) {
  return (
    <>
      <label htmlFor={name}>{capitalize(name)}:</label>
      <input
        className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
        type="text"
        onChange={handleChange}
        value={value}
        name={name}
      />
      {Boolean(error) && <div className="text-xs text-error">{error}</div>}
    </>
  );
}
