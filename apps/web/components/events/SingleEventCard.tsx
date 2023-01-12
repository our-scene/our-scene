import Image from 'next/image';
import { Event } from '@our-scene/api-hooks/resources/events/types';
// import { UpcomingEventValues } from './UpcomingEventsView';

export type SingleEventCardProps = {
  event: Event;
};

export const EventCardDetailed = ({ event }: SingleEventCardProps) => {
  const { title, address, start, end, description, user } = event;
  // const { setSelectedEvent } = useContext(UpcomingEventContext);

  const startDate = new Date(start);
  const endDate = new Date(end);
  const formattedStartDate = startDate.toLocaleString();
  const formattedEndDate = endDate.toLocaleString();

  // const handleEventSelect = () => {
  //   setSelectedEvent(id)
  // };
  return (
    <div className='flex justify-center'>
      {event && (
        <div className="shadow-xl card w-96 bg-base-100 shrink">
          <figure>
            <Image alt="Placeholder" src="/assets/defaults/Default_landscape.svg" width={300} height={300} />
          </figure>
          <div className="card-body">
            <h3 className="h-10 card-title">{title}</h3>
            <p className="leading-loose h-25">
              {address}
              <br />
              {description}
              <br />
              <span>Start: </span> {formattedStartDate}
              <br />
              <span>End: </span> {formattedEndDate}
              <br />
              {user && <span>Hosted By: {user.name}</span>}
            </p>
            <div className="justify-end card-actions">
              <div className="badge badge-secondary">Hiking</div>
              <div className="badge badge-secondary">New York</div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
