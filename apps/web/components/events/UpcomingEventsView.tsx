import { Event } from "@our-scene/api-hooks/resources/events/types";
import { EventCard } from "./EventCard";

interface UpcomingEventProps {
  data: Event[];
}

export const UpcomingEvents = ({ data }: UpcomingEventProps) => {
  return (
    <div className="grid grid-cols-3">
      {data.map((event: Event) => (
        <div key={event.id}>
          <EventCard event={event} />
        </div>
      ))}
    </div>
  );
};
