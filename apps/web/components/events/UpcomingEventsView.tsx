import { Event } from '@our-scene/api-hooks/resources/events/types';
import { EventCardPreview } from './EventCard';
import { useState, useEffect } from 'react';
import { EventCardDetailed } from './SingleEventCard';

interface UpcomingEventProps {
  data: Event[];
}

export const UpcomingEvents = ({ data }: UpcomingEventProps) => {
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);
  // const [isFocused, setIsFocused] = useState<Event | null>(null);
  const handleEventSelect = (event: Event) => {
    setSelectedEvent(event);
  };

  useEffect(() => {
    setSelectedEvent(data[0]);
  }, [data]);

  return (
    <div className="flex flex-grow py-10">
      <div className="grid grid-cols-2 gap-4">
        {/* <div></div> */}
        <div className="flex flex-col px-2 space-y-2">
          {selectedEvent &&
            data.map((event: Event) => (
              <div key={event.id}>
                <EventCardPreview
                  event={event}
                  handleSelect={handleEventSelect}
                  isFocused={event.id === selectedEvent.id}
                />
              </div>
            ))}
        </div>
        {selectedEvent && <EventCardDetailed event={selectedEvent} />}
      </div>
    </div>
  );
};
