import sanityClient from "../../sanity";
import { Category } from "../types/Category";
import { requestResolver } from "./helpers/requestResolver";

export const categoriesService = {
  fetchCategories: () => {
    return requestResolver<Category[]>(
      sanityClient.fetch(
        `
        *[_type == 'category'] {
          ...
        }
        `
      )
    );
  },
};
