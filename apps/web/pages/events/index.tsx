import { EventsForm } from "../../components/Forms/EventsForm";
import { EventsFormValues } from "../../components/Forms/EventsForm";
import { useGetUpcomingEventsQuery } from "@our-scene/api-hooks";
import { useUserAuthContext } from "../../components/contexts/UserAuthContextProvider";
import { UpcomingEvents } from "../../components/AllEvents/UpcomingEventsView";
// import { useGetUsersWithAuth } from "../services/users";
const events = require("../api/fakeData/indexEvents.json");

//can we use export here?
export interface EventValues {
  id: number;
  title: string;
  blurb: string;
  address: string;
  description: string;
  start: Date;
  end: Date;
  user: {
    id: number;
    name: string;
    email: string;
    is_admin: boolean;
  };
}

// interface UpcomingEventProps {
//   [index: number]: EventValues;
// }

function useUpcomingEvents() {
  const { session } = useUserAuthContext();
  const queryResult = useGetUpcomingEventsQuery(session?.idToken, {
    enabled: Boolean(session?.idToken),
  });

  // Handle the undefined case by giving some "initial data"
  return { eventsData: queryResult.data ?? [], ...queryResult };
}

export default function Events() {
  const { eventsData, data } = useUpcomingEvents();

  const handleAddEventSubmit = (values: EventsFormValues) => {
    console.log(values);
    // to use react query to post to db eventually.
    // const event = (values: EventsMapValues)
    const id = events.length
      ? Math.max(...events.map((event: EventValues) => event.id)) + 1
      : 1;
  };

  return (
    <div>
      <UpcomingEvents data={eventsData} />
      <EventsForm handleSubmit={handleAddEventSubmit} />
    </div>
  );
}
