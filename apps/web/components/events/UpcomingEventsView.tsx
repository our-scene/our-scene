import { Event } from '@our-scene/api-hooks/resources/events/types';
import { EventCard } from './EventCard';
import { createContext, useState } from 'react';

interface UpcomingEventProps {
  data: Event[];
}

export const UpcomingEventContext = createContext();

export const UpcomingEvents = ({ data }: UpcomingEventProps) => {
  const [selectedEvent, setSelectedEvent] = useState('')
  const handleEventSelect = (data: Event) => {};

  return (
    <div className="grid grid-cols-3">
      <UpcomingEventContext.Provider value={{setSelectedEvent}}>
      <div></div>
      <div className="flex flex-col space-y-4 overflow-auto">
        {data.map((event: Event) => (
          <div key={event.id}>
            <EventCard event={event} />
          </div>
        ))}
      </div>
      <div></div>
      </UpcomingEventContext.Provider>
    </div>
  );
};
