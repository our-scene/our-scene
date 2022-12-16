import { EmptyObject } from "../../lib/types";

export type User = {
  email: string;
  name: string;
};

export declare namespace GetUsers {
  type Request = EmptyObject;
  type Response = User[];
  // TODO: type Error
}
