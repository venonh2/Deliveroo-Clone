import { Dishie } from "./Dishie";
import { ResourceImage } from "./Image";

export type Restaurant = {
  _id: string;
  address: string;
  image: ResourceImage;
  lat: number;
  long: number;
  name: string;
  rating: number;
  _type: string;
  short_description: string;
  dishies: Dishie[];
};
