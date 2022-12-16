import { User } from "../users/types";

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
  type Request = {}

  type Response = Event[]

  type Error = {} // TODO
}

export declare namespace GetUpcomingEvents {
  type Request = {}

  type Response = Event[]

  type Error = {} // TODO
}

// export declare namespace GetWorkoutResponse {
//   type Request = {
//     pathParams: {
//       workoutResponseId: string;
//     };
//   };
//   type Response = SerializedWorkoutResponse;
// }
