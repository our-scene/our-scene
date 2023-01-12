import { Event } from '@our-scene/api-hooks/resources/events/types';
import { EventCard } from './EventCard';
import { useState, useEffect } from 'react';
import { SingleEventCard } from './SingleEventCard';

interface UpcomingEventProps {
  data: Event[];
}

export const UpcomingEvents = ({ data }: UpcomingEventProps) => {
  const [selectedEvent, setSelectedEvent] = useState({});
  const handleEventSelect = (event: Event) => {
    setSelectedEvent(event);
  };

  useEffect(() => {
    setSelectedEvent(data[0]);
  }, [data]);

  return (
    <div className="grid grid-cols-2 gap-4">
      {/* <div></div> */}
      <div className="flex flex-col space-x-4 space-y-4 overflow-auto">
        {data.map((event: Event) => (
          <div key={event.id}>
            <EventCard event={event} handleSelect={handleEventSelect} />
          </div>
        ))}
      </div>
      <div>{selectedEvent && <SingleEventCard event={selectedEvent} />}</div>
    </div>
  );
};
