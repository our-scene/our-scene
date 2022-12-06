type Event = {
  title: string;
  blurb: string;
  location: string;
  description: string;
  start: string;
  end: string;
}

export declare namespace GetAllEvents {
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
