import Image from 'next/image';
import { Event } from '@our-scene/api-hooks/resources/events/types';

type EventCardProps = {
  event: Event;
  handleSelect: (event: Event) => void | Promise<void>;
  isFocused: boolean;
};

export const EventCardPreview = ({ event, handleSelect, isFocused }: EventCardProps) => {
  const { title, blurb, address, start, end } = event;

  const startDate = new Date(start);
  const endDate = new Date(end);
  const formattedStartDate = startDate.toLocaleString();
  const formattedEndDate = endDate.toLocaleString();

  const focusedClasses = 'shadow-xl card card-compact card-side bg-slate-100';
  const nonFocusedClasses = 'shadow-xl card card-compact card-side bg-base-100';

  return (
    <div>
      <div className={isFocused ? focusedClasses : nonFocusedClasses} onClick={() => handleSelect(event)}>
        <figure>
          <Image alt="Placeholder" src="/assets/defaults/Default_landscape.svg" width={25} height={25} />
        </figure>
        <div className="card-body">
          <h3 className="card-title">{title}</h3>
          <p className="leading-loose">
            {address}
            <br />
            {blurb}
            <br />
            <span>Start: </span> {formattedStartDate}
            <br />
            <span>End: </span> {formattedEndDate}
          </p>
        </div>
      </div>
    </div>
  );
};
