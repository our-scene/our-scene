import { date, object, string } from "yup"

export const EventsSchema = object({
  title: string().required(),
  blurb: string().required(),
  address: string().required(),
  description: string().required(),
  start: date().required(),
  end: date().required(),
}); 