import { EventCardValues } from "../AllEvents/UpcomingEventsView";

export const EventCard = ({id, title, blurb, location, start, end, hostName, hostEmail }:EventCardValues): JSX.Element => {
  console.log(location)

    return (
      <div key={id}>
        <h2>{title}</h2>
        <p>
          {blurb}
          <br />
          Location: {location}
          <br />
          <span>Start Time: </span> {start.toLocaleDateString}
          <br />
          <span>End Time: </span> {end.toLocaleDateString}
        </p>
      </div>
      )
}