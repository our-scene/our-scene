import { Formik, Form } from 'formik';
import { TextInput } from '../lib/inputs/TextInput';
import { Place } from '@our-scene/api-hooks/resources/admin/places';
import { EmptyObject } from '@our-scene/api-hooks/lib/generic_types';
import { PlaceValidationSchema } from './PlaceValidation';

export type PlaceFormValues = Pick<Place, 'title' | 'blurb' | 'description'>;

type PlaceFormProps = {
  handleSubmit: (placeValues: PlaceFormValues) => Promise<void>;
  submitting: boolean;
  success: boolean;
  initialValue?: Place | EmptyObject;
};

export const PlaceForm = ({ handleSubmit, initialValue = {}, submitting }: PlaceFormProps) => {
  const initialValues = {
    title: initialValue?.title || '',
    blurb: initialValue?.blurb || '',
    description: initialValue?.description || '',
  };

  const formInputContainerClass = 'my-2';
  return (
    <div className="p-4 shadow-sm card bg-neutral text-primary">
      <div className="text-lg">Create Place:</div>
      <div className="w-1/2">
        <Formik
          onSubmit={async (values, { resetForm }) => {
            await handleSubmit(values);
            resetForm();
            // TODO: navigate out of the form
          }}
          initialValues={initialValues}
          validationSchema={PlaceValidationSchema}
        >
          {({ touched, values, errors, handleChange }) => {
            return (
              <Form>
                <div className={formInputContainerClass}>
                  <TextInput
                    name="title"
                    handleChange={handleChange}
                    value={values.title}
                    error={errors.title}
                    touched={touched.title}
                  />
                </div>
                <div className={formInputContainerClass}>
                  <TextInput
                    name="blurb"
                    handleChange={handleChange}
                    value={values.blurb}
                    error={errors.blurb}
                    touched={touched.blurb}
                  />
                </div>
                <div className={formInputContainerClass}>
                  <TextInput
                    name="description"
                    handleChange={handleChange}
                    value={values.description}
                    error={errors.description}
                    touched={touched.description}
                  />
                </div>
                <button type="submit" className="btn btn-primary" disabled={submitting}>
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
