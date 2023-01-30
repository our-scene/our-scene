import { Event } from '@our-scene/api-hooks/resources/events/types';
import { EventCardPreview } from './EventCardPreview';
import { useState } from 'react';
import { EventCardDetailed } from './DetailedEventCard';

interface UpcomingEventProps {
  data: Event[];
}

export const UpcomingEvents = ({ data }: UpcomingEventProps) => {
  console.log('data: ', data);
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(data[0]);

  const handleEventSelect = (event: Event) => {
    setSelectedEvent(event);
  };

  return (
    <div className="grid grid-cols-2 gap-4 py-10">
      <div className="px-2 space-y-2">
        {data.map((event: Event) => (
          <div key={event.id}>
            <EventCardPreview
              event={event}
              handleSelect={handleEventSelect}
              isFocused={selectedEvent !== null && event.id === selectedEvent.id}
            />
          </div>
        ))}
      </div>
      {selectedEvent && <EventCardDetailed event={selectedEvent} />}
    </div>
  );
};
