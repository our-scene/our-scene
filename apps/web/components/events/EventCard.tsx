import Image from 'next/image';
import { Event } from '@our-scene/api-hooks/resources/events/types';
import { useContext } from 'react';
import { UpcomingEventContext } from './UpcomingEventsView';

type EventCardProps = {
  event: Event;
};

export const EventCard = ({ event }: EventCardProps) => {
  const { title, blurb, address, start, end, id } = event;
  const { setSelectedEvent } = useContext(UpcomingEventContext);
  
  const startDate = new Date(start);
  const endDate = new Date(end);
  const formattedStartDate = startDate.toLocaleString();
  const formattedEndDate = endDate.toLocaleString();

  // const handleEventSelect = () => {
  //   setSelectedEvent(id)
  // };

  return (
    <div className="shadow-xl card w-96 bg-base-100">
      <figure>
        <Image alt="Placeholder" src="/assets/defaults/Default_landscape.svg" width={25} height={25} />
      </figure>
      <div className="card-body">
        <h3 className="h-10 card-title">{title}</h3>
        <p className="leading-loose h-25">
          {address}
          <br />
          {blurb}
          <br />
          <span>Start: </span> {formattedStartDate}
          <br />
          <span>End: </span> {formattedEndDate}
        </p>
        <div className="justify-end card-actions">
          <div className="badge badge-secondary">Hiking</div>
          <div className="badge badge-secondary">New York</div>
        </div>
      </div>
    </div>
  );
};
