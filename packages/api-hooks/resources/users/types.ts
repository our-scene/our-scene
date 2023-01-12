import { EmptyObject } from "../../lib/generic_types";

export type User = {
  id: number;
  email: string;
  name: string;
  isAdmin: boolean;
};

export declare namespace GetUsers {
  type Request = EmptyObject;
  type Response = User[];
  // TODO: type Error
}
