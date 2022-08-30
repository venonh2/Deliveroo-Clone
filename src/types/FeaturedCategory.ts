import { Restaurant } from "./Restaurant";

export type FeaturedCategory = {
  _createdAt: string;
  _id: string;
  _rev: string;
  _type: string;
  _updatedAt: string;
  name: string;
  short_description: string;
  restaurants: Restaurant[];
};
