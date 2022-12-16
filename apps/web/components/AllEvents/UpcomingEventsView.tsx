import { string } from "yup";
import { EventValues } from "../../pages/events/index";
import { EventCard } from "../AllEvents/EventCard";

interface UpcomingEventProps {
  data: EventValues[];
}

export interface EventCardValues {
  id: number;
  title: string;
  blurb: string;
  address: string;
  start: Date;
  end: Date;
  hostName: string;
  hostEmail: string;
}

export const UpcomingEvents = ({ data }: UpcomingEventProps) => {

  return (
    <div>
      {data.map(
        (event: EventValues) => (
          <div key={event.id}>
            <EventCard
              id={event.id}
              title={event.title}
              blurb={event.blurb}
              address={event.address}
              start={event.start}
              end={event.end}
              hostName={event.user.name}
              hostEmail={event.user.email}
            />
          </div>
        )
      )}
    </div>
  );
};
