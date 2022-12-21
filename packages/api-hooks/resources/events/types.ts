import { User } from '../users/types';
import { EmptyObject } from '../../lib/generic_types';

export interface Event {
  id: number;
  title: string;
  blurb: string;
  address: string;
  description: string;
  start: Date;
  end: Date;
  user: User;
}

export declare namespace GetAllEvents {
  type Request = {};

  type Response = Event[];

  type Error = {}; // TODO
}

export declare namespace GetUpcomingEvents {
  type Request = EmptyObject;

  type Response = Event[];

  type Error = {}; // TODO
}
