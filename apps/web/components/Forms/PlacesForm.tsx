import { Field, Formik, Form } from 'formik';
import { TextInput } from '../lib/inputs/TextInput';
import { Place } from '@our-scene/api-hooks/resources/admin/places';
import { EmptyObject } from '@our-scene/api-hooks/lib/generic_types';
import { PlaceValidationSchema } from './PlaceValidation';

export type CreatePlaceFormValues = Pick<Place, 'title' | 'blurb' | 'description'>;

type PlaceFormProps = {
  handleSubmit: (createPlaceFormValues: CreatePlaceFormValues) => Promise<void>;
  submitting: boolean;
  success: boolean;
  initialValue?: Place | EmptyObject;
};

const CreatePlaceForm = () => {
  const formInputContainerClass = 'my-2';
  return (
    <>
      <div className={formInputContainerClass}>
        <Field component={TextInput} name="title" />
      </div>
      <div className={formInputContainerClass}>
        <Field component={TextInput} name="blurb" />
      </div>
      <div className={formInputContainerClass}>
        <Field component={TextInput} name="description" />
      </div>
    </>
  );
};

export const CreatePlaceFormikContainer = ({ handleSubmit, initialValue = {}, submitting }: PlaceFormProps) => {
  const initialValues = {
    title: initialValue?.title || '',
    blurb: initialValue?.blurb || '',
    description: initialValue?.description || '',
  };

  return (
    <div className="text-primary">
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
          <Form>
            <CreatePlaceForm />
            <button type="submit" className="btn btn-primary" disabled={submitting}>
              Submit
            </button>
          </Form>
        </Formik>
      </div>
    </div>
  );
};
