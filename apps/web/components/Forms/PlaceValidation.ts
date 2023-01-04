import { object, string } from 'yup';

export const PlaceValidationSchema = object({
  title: string().required(),
  blurb: string().required(),
  description: string().required(),
  // address
});
