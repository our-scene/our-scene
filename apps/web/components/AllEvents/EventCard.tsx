
export interface EventCardValues {
  id: number;
  title: string;
  blurb: string;
  location: string;
  start: Date;
  end: Date;
  hostName: string;
  hostEmail: string;
}

export const EventCard = ({id, title, blurb, location, start, end, hostName, hostEmail }:EventCardValues) => {
  console.log(location)
  let startDate = new Date(start);
  let endDate = new Date(end);
  let formattedStartDate = startDate.toLocaleString();
  let formattedEndDate = endDate.toLocaleString();

    return (
      <div key={id}>
        <h2>{title}</h2>
        <p>
          {blurb}
          <br />
          Location: {location}
          <br />
          <span>Start Time: </span> {formattedStartDate}
          <br />
          <span>End Time: </span> {formattedEndDate}
          <br />
          <span>Hosted By: </span> {hostName}
        </p>
      </div>
      )
}