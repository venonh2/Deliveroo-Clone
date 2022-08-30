import { Image } from "./Image";

export type Category = {
  _createdAt: string;
  _id: string;
  _rev: string;
  _type: string;
  _updatedAt: string;
  image: Image;
  name: string;
};
