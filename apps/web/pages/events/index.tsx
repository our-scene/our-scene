import { EventsForm } from '../../components/forms/EventsForm';
import { useGetUpcomingEventsQuery } from '@our-scene/api-hooks';
import { useUserAuthContext } from '../../components/contexts/UserAuthContextProvider';
import { UpcomingEvents } from '../../components/events/UpcomingEventsView';
import { Event } from '@our-scene/api-hooks/resources/events/types';
import { useState } from 'react';
import { Modal } from '../../components/lib/Modal';
// import events from "../api/fakeData/indexEvents.json";

//can we use export here?
export type EventValues = Pick<Event, 'title' | 'blurb' | 'address' | 'description' | 'start' | 'end'>;

export default function Events() {
  console.log();
  const { session } = useUserAuthContext();
  const { data = [] } = useGetUpcomingEventsQuery(session?.idToken as string, {
    enabled: Boolean(session),
  });
  const [isQuickAddModalOpen, setQuickAddModalOpen] = useState(false);

  const handleAddEventSubmit = (values: EventValues) => {
    // to use react query to post to db eventually.
    // const event = (values: EventsMapValues)
    // const id = events.length
    //   ? Math.max(...events.map((event: Event) => event.id)) + 1
    //   : 1;
  };

  const handleModalClose = () => {
    setQuickAddModalOpen(false);
  };

  return (
    <div>
      <button className="w-1/3 m-5 btn btn-ghost modal-button" onClick={() => setQuickAddModalOpen(true)}>
        ADD TO-DO
      </button>
      <UpcomingEvents data={data} />
      <Modal isOpen={isQuickAddModalOpen} close={handleModalClose}>
        <EventsForm handleSubmit={handleAddEventSubmit} />
      </Modal>
    </div>
  );
}
