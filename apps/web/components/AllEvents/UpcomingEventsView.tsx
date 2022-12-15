import { string } from "yup";
import { EventValues } from "../../pages/events/index";
import { EventCard } from "../AllEvents/EventCard";

interface UpcomingEventProps {
  [index: number]: EventValues;
}

export interface EventCardValues {
  id: number;
  title: string;
  blurb: string;
  location: string;
  start: Date;
  end: Date;
  hostName: string;
  hostEmail: string;
}

export const UpcomingEvents = ({ data }: UpcomingEventProps) => {
  let event = data.map((event: EventValues): EventCardValues => {
    return {
      id: event.id,
      title: event.title,
      blurb: event.blurb,
      location: event.location,
      start: event.start,
      end: event.end,
      hostName: event.user.name,
      hostEmail: event.user.email,
    };
  });

  return (
    <div>
      {data.map(
        (event: EventValues): EventCardValues => (
          <div key={event.id}>
            <EventCard
              id={event.id}
              title={event.title}
              blurb={event.blurb}
              location={event.location}
              start={event.start}
              end={event.end}
              hostName={event.user.name}
              hostEmail={event.user.email}
            />
            {/* <h2>{event.name}</h2> */}
          </div>
        )
      )}
    </div>
  );
};
