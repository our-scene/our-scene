import { EventsForm } from "../../components/Forms/EventsForm";
import { EventsFormValues } from "../../components/Forms/EventsForm";

export default function Events() {
  const handleAddEventSubmit = (values: EventsFormValues) => {
    console.log(values)
    // to use react query to post to db eventually. 
  }
  return (
    <div>
      <EventsForm handleSubmit={handleAddEventSubmit} />
    </div>
  )
}