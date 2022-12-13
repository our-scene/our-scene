import { EventsForm } from "../../components/Forms/EventsForm";
import { EventsFormValues } from "../../components/Forms/EventsForm";
import { useGetUpcomingEventsQuery } from "@our-scene/api-hooks";
import { useUserAuthContext } from "../../components/contexts/UserAuthContextProvider";
import { UpcomingEvents } from "../../components/AllEvents/UpcomingEventsView"
// import { useGetUsersWithAuth } from "../services/users";
const events = require('../api/fakeData/indexEvents.json')

export interface EventsMapValues {
  id: number,
  title: string,
  blurb: string,
  location: string,
  description: string,
  start: Date,
  end: Date
}


export default function Events() {
  const { session } = useUserAuthContext();
  const { data } = useGetUpcomingEventsQuery(session?.idToken, { enabled: Boolean(session?.idToken) });

  // let eventsArr:EventsMapValues[] = data
  // console.log('events arr', eventsArr)
  // data: EventsMapValues
  //events = array of events
  //type an array of that
  //


  const handleAddEventSubmit = (values: EventsFormValues) => {
    console.log(values)
    // to use react query to post to db eventually.
    // const event = (values: EventsMapValues)
    const id = events.length ? Math.max(...events.map((event: EventsMapValues) => event.id)) + 1 : 1;
    
  }
  return (
    <div>
      <UpcomingEvents data={data}/>
      <EventsForm handleSubmit={handleAddEventSubmit} />
    </div>
  )
}