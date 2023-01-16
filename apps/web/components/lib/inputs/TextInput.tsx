import { capitalize } from '../../../lib/string_helpers';
import { FieldProps } from 'formik';

export function TextInput({ field, form }: FieldProps) {
  const { name } = field;
  const { touched: formTouched, errors } = form;
  const touched = formTouched[name];
  const error = errors[name] || '';
  return (
    <>
      <label htmlFor={name}>{capitalize(name)}:</label>
      <input
        className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
        type="text"
        {...field}
      />
      {touched && Boolean(error) && <div className="text-xs text-error">{error as string}</div>}
    </>
  );
}
