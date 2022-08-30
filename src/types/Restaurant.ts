import { Dishie } from "./Dishie";
import { Image } from "./Image";

export type Restaurant = {
  _createdAt: string;
  _id: string;
  _rev: string;
  _type: string;
  _updatedAt: string;
  address: string;
  image: Image;
  lat: number;
  long: number;
  name: string;
  rating: number;
  short_description: string;
  type: {
    _ref: string;
    _type: string;
  };
  dishies: Dishie[];
};
