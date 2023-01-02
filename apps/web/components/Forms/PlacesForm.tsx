import { Formik, Form } from 'formik';
import { TextInput } from '../lib/inputs/TextInput';
import { Place } from '@our-scene/api-hooks/resources/admin/places';
import { PlaceValidationSchema } from './PlaceValidation';

export type PlaceFormValues = Omit<Place, 'id' | 'address' | 'author' | 'status'>;

type PlaceFormProps = {
  handleSubmit: (placeValues: PlaceFormValues) => Promise<Place>;
};

export const PlaceForm = ({ handleSubmit }: PlaceFormProps) => {
  const initialValues = {
    title: '',
    blurb: '',
    description: '',
  };

  const formInputContainerClass = 'my-2';
  return (
    <div className="card bg-neutral text-primary p-4 shadow-sm">
      <div className="text-lg">Create Place:</div>
      <div className="w-1/2">
        <Formik onSubmit={handleSubmit} initialValues={initialValues} validationSchema={PlaceValidationSchema}>
          {({ values, errors, handleSubmit: handleFormikSubmit, handleChange }) => {
            return (
              <Form>
                <div className={formInputContainerClass}>
                  <TextInput name="title" handleChange={handleChange} value={values.title} error={errors.title} />
                </div>
                <div className={formInputContainerClass}>
                  <TextInput name="blurb" handleChange={handleChange} value={values.blurb} error={errors.blurb} />
                </div>
                <div className={formInputContainerClass}>
                  <TextInput
                    name="description"
                    handleChange={handleChange}
                    value={values.description}
                    error={errors.description}
                  />
                </div>
                <button className="btn btn-primary" onClick={() => handleFormikSubmit()}>
                  Submit
                </button>
              </Form>
            );
          }}
        </Formik>
      </div>
    </div>
  );
};
