import Image from "next/image";
import { Event } from "@our-scene/api-hooks/resources/events/types";

type EventCardProps = {
  event: Event;
};

export const EventCard = ({ event }: EventCardProps) => {
  const { id, title, blurb, address, start, end, user } = event;
  let startDate = new Date(start);
  let endDate = new Date(end);
  let formattedStartDate = startDate.toLocaleString();
  let formattedEndDate = endDate.toLocaleString();

  return (
    <div className="shadow-xl card w-96 bg-base-100">
      <figure>
        <Image
          alt="Placeholder"
          src="/assets/defaults/Default_landscape.svg"
          width={300}
          height={300}
        />
      </figure>
      <div className="card-body">
        <h2 className="h-10 card-title">{title}</h2>
        <p className="leading-loose h-50">
          {address}
          <br />
          {blurb}
          <br />
          <span>Start: </span> {formattedStartDate}
          <br />
          <span>End: </span> {formattedEndDate}
        </p>
        <div className="justify-end card-actions">
          {/* <Image
            alt="Placeholder"
            className="block rounded-full"
            src="/assets/defaults/Default_pfp.svg"
            width={50}
            height={50}
          />
          <p className="ml-2 text-sm">{user.name}</p> */}
          <div className="badge badge-secondary">Hiking</div>
          <div className="badge badge-secondary">New York</div>
          {/* <button className="btn btn-primary">Buy Now</button> */}
        </div>
      </div>
    </div>
  );
};
// <div key={id} className="container px-4 mx-auto my-12 md:px-12">
//   <div className="flex flex-wrap -mx-1 lg:-mx-4">
//     <div className="w-full px-1 my-1 md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
//       <article className="overflow-hidden rounded-lg shadow-lg">
//         <a href="#">
//           <Image
//             alt="Placeholder"
//             className="block w-full h-auto"
//             src="/assets/defaults/Default_landscape.svg"
//             width={50}
//             height={50}
//           />
//         </a>
//         <header className="flex items-center justify-between p-2 leading-tight md:p-4">
//           <h1 className="text-lg">
//             <a className="text-black no-underline hover:underline" href="#">
//               {title}
//             </a>
//           </h1>
//         </header>
//         <article>
//           <h2 className="text-base">{blurb}</h2>
//           <p className="text-sm text-grey-darker">
//             {address}
//             <br />
//             <span>Start: </span> {formattedStartDate}
//             <br />
//             <span>End: </span> {formattedEndDate}
//           </p>
//         </article>
//         <footer className="flex items-center justify-between p-2 leading-none md:p-4" />
//         <a
//           className="flex items-center text-black no-underline hover:underline"
//           href="#"
//         >
//           <Image
//             alt="Placeholder"
//             className="block rounded-full"
//             src="/assets/defaults/Default_pfp.svg"
//             width={50}
//             height={50}
//           />
//           <p className="ml-2 text-sm">{user.name}</p>
//         </a>
//         <a
//           className="no-underline text-grey-darker hover:text-red-dark"
//           href="#"
//         >
//           <span className="hidden">Like</span>
//           <i className="fa fa-heart"></i>
//         </a>
//       </article>
//     </div>
//   </div>
// </div>
