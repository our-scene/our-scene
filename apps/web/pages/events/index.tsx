import { EventsForm } from "../../components/Forms/EventsForm";
import { EventsFormValues } from "../../components/Forms/EventsForm";
const events = require('../api/fakeData/indexEvents.json')

interface EventsMapValues {
  id: number,
  title: string,
  summary: string,
  location: string,
  description: string,
  start: string,
  end: string
}

export default function Events() {
  const handleAddEventSubmit = (values: EventsFormValues) => {
    console.log(values)
    // to use react query to post to db eventually.
    // const event = (values: EventsMapValues)
    const id = events.length ? Math.max(...events.map((event: EventsMapValues) => event.id)) + 1 : 1;
    
  }
  return (
    <div>
      <EventsForm handleSubmit={handleAddEventSubmit} />
    </div>
  )
}