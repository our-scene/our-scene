import { Formik, Form } from 'formik';
import { EventsSchema } from './validation';
import { TextInput } from '../lib/inputs/TextInput';
import { DateInput } from '../lib/inputs/DateInput';
import { Event } from '@our-scene/api-hooks/resources/events/types';

export type EventFormValues = Pick<Event, 'title' | 'blurb' | 'address' | 'description' | 'start' | 'end'>;

interface EventsFormProps {
  handleSubmit: (values: EventFormValues) => void | Promise<void>;
}

export const EventsForm = ({ handleSubmit }: EventsFormProps) => {
  // date constructor that will default form to select today's date for the form's int. state
  const todaysDate = new Date();
  const todaysDateStr = todaysDate.toISOString().split('T')[0];

  // set up forms initial values
  const initialValues: EventFormValues = {
    title: '',
    blurb: '',
    address: '',
    description: '',
    start: todaysDate,
    end: todaysDate,
  };

  return (
    <Formik onSubmit={handleSubmit} initialValues={initialValues} validationSchema={EventsSchema}>
      {({ touched, values, errors, handleSubmit: handleFormikSubmit, handleChange }) => {
        console.log('Errors here', errors);
        return (
          <Form>
            <TextInput
              name="title"
              label="Title"
              handleChange={handleChange}
              value={values.title}
              error={errors.title}
            />
            <TextInput
              name="summary"
              label="Summary"
              handleChange={handleChange}
              value={values.blurb}
              error={errors.blurb}
            />
            <TextInput
              name="location"
              label="Location"
              handleChange={handleChange}
              value={values.address}
              error={errors.address}
            />
            <TextInput
              name="description"
              label="Description"
              handleChange={handleChange}
              value={values.description}
              error={errors.description}
            />
            <DateInput
              name="start"
              label="Start"
              handleChange={handleChange}
              value={values.start}
              min={todaysDateStr}
              error={errors.start}
            />
            <DateInput
              name="end"
              label="End"
              handleChange={handleChange}
              value={values.end}
              min={todaysDateStr}
              error={errors.end}
            />
            <button className="p-2 text-white bg-blue-500 rounded hover:bg-blue-700" type="submit">
              Submit
            </button>
          </Form>
        );
      }}
    </Formik>
  );
};
