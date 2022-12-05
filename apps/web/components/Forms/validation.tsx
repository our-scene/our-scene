import { date, object, string } from "yup"

export const EventsSchema = object({
  title: string().required(),
  summary: string().required(),
  location: string().required(),
  description: string().required(),
  start: date().required(),
  end: date().required(),
}); 