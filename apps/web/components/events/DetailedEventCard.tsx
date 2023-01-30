import Image from 'next/image';
import { Event } from '@our-scene/api-hooks/resources/events/types';

export type DetailedEventCardProps = {
  event: Event;
};

export const EventCardDetailed = ({ event }: DetailedEventCardProps) => {
  const { title, address, start, end, description, user } = event;

  const startDate = new Date(start);
  const endDate = new Date(end);
  const formattedStartDate = startDate.toLocaleString();
  const formattedEndDate = endDate.toLocaleString();

  return (
    <div className="flex-grow w-1/2 card place-items-center">
      <div className="shadow-xl card w-96 bg-base-100">
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
    </div>
  );
};
