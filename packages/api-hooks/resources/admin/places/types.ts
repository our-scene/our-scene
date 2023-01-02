import { EmptyObject, Address } from '../../../lib/generic_types';
import { User } from '../../users/types';

// TODO: use this across most? resources
type Status = 'active' | 'inactive' | 'draft' | 'archived';

// THIS SHOULD BE AS CLOSE TO DB MODEL AS POSSIBLE
// if we need to make a different event type, use this type as base (Ex. Pick / Omit)
export type Place = {
  id: string;
  title: string;
  blurb: string;
  description: string;
  status: Status;
  address: Address;
  author: User;
};

export declare namespace AdminGetAllPlaces {
  type Request = EmptyObject;

  type Response = Place[];

  type Error = {}; // TODO
}

export declare namespace AdminCreatePlace {
  type Request = {
    body: Omit<Place, 'id'>;
  };

  type Response = Place;

  type Error = {}; // TODO
}
