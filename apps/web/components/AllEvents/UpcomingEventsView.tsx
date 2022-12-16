import { Event } from "@our-scene/api-hooks/resources/events/types";
import { EventCard } from "../AllEvents/EventCard";

interface UpcomingEventProps {
  data: Event[];
}

export const UpcomingEvents = ({ data }: UpcomingEventProps) => {

  return (
    <div>
      {data.map(
        (event: Event) => (
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
