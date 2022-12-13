  import { EventsMapValues } from "../../pages/events/index"
  
interface UpcomingEventProps {
  data: (values: EventsMapValues) => void | Promise<void>
}

export const UpcomingEvents = ({ data }: UpcomingEventProps) => {
  console.log('data', data);

  return (
    <div>
        {data.map((event) => (
          <div key={event.id}>
            
          </div>
        ))}
    </div>
    )
}