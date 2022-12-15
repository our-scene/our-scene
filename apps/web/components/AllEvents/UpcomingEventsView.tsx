  import { EventValues } from "../../pages/events/index"
  // import {EventCard} from "../AllEvents/EventCard"

interface UpcomingEventProps {
  [index: number]: EventValues;
}

export const UpcomingEvents = ({ data }: UpcomingEventProps) => {

  console.log('data', data);
  console.log('is data an array?', Array.isArray(data));

  return (
    <div>
      {data.map}
    </div>
    )
}