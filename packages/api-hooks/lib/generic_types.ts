export type EmptyObject = { [key: string]: never };

// maybe move these resouce specific types to /resources?
export type Address = {
  street: string;
  city: string;
  state: string;
  zip: number;
  // lat: number; // GOOGLE MAPS API
  // long: number; // GOOGLE MAPS API
};
