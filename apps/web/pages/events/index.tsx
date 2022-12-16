import { EventsForm } from "../../components/Forms/EventsForm";
import { useGetUpcomingEventsQuery } from "@our-scene/api-hooks";
import { useUserAuthContext } from "../../components/contexts/UserAuthContextProvider";
import { UpcomingEvents } from "../../components/AllEvents/UpcomingEventsView";
import { Event } from "@our-scene/api-hooks/resources/events/types";
import { type } from "os";
// import { useGetUsersWithAuth } from "../services/users";
const events = require("../api/fakeData/indexEvents.json");

//can we use export here?
export type EventValues = Pick<Event, "title" | "blurb" | "address" | "description" | "start" | "end">


export default function Events() {
  const { session } = useUserAuthContext();
  const { data = [] } = useGetUpcomingEventsQuery(session?.idToken, {
    enabled: Boolean(session?.idToken),
  });

  const handleAddEventSubmit = (values: EventValues) => {
    console.log(values);
    // to use react query to post to db eventually.
    // const event = (values: EventsMapValues)
    const id = events.length
      ? Math.max(...events.map((event: Event) => event.id)) + 1
      : 1;
  };

  return (
    <div>
      <UpcomingEvents data={data} />
      <EventsForm handleSubmit={handleAddEventSubmit} />
    </div>
  );
}
