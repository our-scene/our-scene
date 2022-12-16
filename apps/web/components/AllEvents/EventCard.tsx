import Image from "next/image";
import { Event } from "@our-scene/api-hooks/resources/events/types";

type EventCardProps = {
  event: Event
};

// id,
// title,
// blurb,
// address,
// start,
// end,
// hostName,
// hostEmail,

export const EventCard = ({ event }: EventCardProps) => {
  const { id, title, blurb, address, start, end, user } = event;
  let startDate = new Date(start);
  let endDate = new Date(end);
  let formattedStartDate = startDate.toLocaleString();
  let formattedEndDate = endDate.toLocaleString();

  return (
    <div key={id} className="container px-4 mx-auto my-12 md:px-12">
      <div className="flex flex-wrap -mx-1 lg:-mx-4">
        <div className="w-full px-1 my-1 md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
          <article className="overflow-hidden rounded-lg shadow-lg">
            <a href="#">
              <Image
                alt="Placeholder"
                className="block w-full h-auto"
                src="/assets/defaults/Default_landscape.svg"
                width={50}
                height={50}
              />
            </a>
            <header className="flex items-center justify-between p-2 leading-tight md:p-4">
              <h1 className="text-lg">
                <a className="text-black no-underline hover:underline" href="#">
                  {title}
                </a>
              </h1>
            </header>
            <article>
              <h2 className="text-base">{blurb}</h2>
              <p className="text-sm text-grey-darker">
                {address}
                <br />
                <span>Start: </span> {formattedStartDate}
                <br />
                <span>End: </span> {formattedEndDate}
              </p>
            </article>
            <footer className="flex items-center justify-between p-2 leading-none md:p-4" />
            <a
              className="flex items-center text-black no-underline hover:underline"
              href="#"
            >
              <Image
                alt="Placeholder"
                className="block rounded-full"
                src="/assets/defaults/Default_pfp.svg"
                width={50}
                height={50}
              />
              <p className="ml-2 text-sm">{user.name}</p>
            </a>
            <a
              className="no-underline text-grey-darker hover:text-red-dark"
              href="#"
            >
              <span className="hidden">Like</span>
              <i className="fa fa-heart"></i>
            </a>
          </article>
        </div>
      </div>
    </div>
  );
};
