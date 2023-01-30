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
    <div className="flex w-full py-10">
      <div className="w-1/2 px-2 space-y-2 overflow-auto card place-items-center">
        {data.map((event: Event) => (
          <div className="w-full" key={event.id}>
            <EventCardPreview
              event={event}
              handleSelect={handleEventSelect}
              isFocused={selectedEvent !== null && event.id === selectedEvent.id}
            />
          </div>
        ))}
      </div>
      <div className="divider divider-horizontal" />
      {selectedEvent && <EventCardDetailed event={selectedEvent} />}
    </div>
  );
};
