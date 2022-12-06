import axios from 'axios'
import { useQuery } from "@tanstack/react-query"
import { GetAllEvents } from './types'

const EVENTS_ROOT_PATH = '/events';


const getAllEvents = async () => {
  const { data } = await axios.get<GetAllEvents.Response>(EVENTS_ROOT_PATH);
  return data
}

export const useGetAllEventsQuery = () => {
  return useQuery<GetAllEvents.Response>(
    [EVENTS_ROOT_PATH],
    getAllEvents
  )
}
