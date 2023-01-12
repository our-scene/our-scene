/* eslint-disable no-unused-vars */
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
  // address: Address;
  user: User;
  createdAt: string;
};

export declare namespace AdminGetPlaces {
  type Request = EmptyObject;

  type Response = Place[];

  type Error = {}; // TODO
}

export declare namespace AdminGetPlace {
  type Request = {
    pathParams: {
      id: string;
    };
  };

  type Response = Place;

  type Error = {}; // TODO
}

type AdminCreatePlaceRequestBody = Omit<Place, 'id' | 'user' | 'createdAt'> & { userId: number };
export declare namespace AdminCreatePlace {
  type Request = {
    body: AdminCreatePlaceRequestBody;
  };

  type Response = Place;

  type Error = {}; // TODO
}

type AdminUpdatePlaceRequestBody = Partial<Omit<Place, 'id' | 'createdAt'>>;
export declare namespace AdminUpdatePlace {
  type Request = {
    pathParams: {
      id: string;
    };
    body: AdminUpdatePlaceRequestBody;
  };

  type Response = EmptyObject;

  type Error = {}; // TODO
}

export declare namespace AdminDeletePlace {
  type Request = {
    pathParams: {
      id: string;
    };
  };

  type Response = EmptyObject;

  type Error = {}; // TODO
}
