import sanityClient from "../../sanity";
import { FeaturedCategory } from "../types/FeaturedCategory";
import { requestResolver } from "./helpers/requestResolver";

export const sanityService = {
  fetchFeaturedCategories: () => {
    return requestResolver<FeaturedCategory[]>(
      sanityClient.fetch(
        `
        *[_type == 'featured'] {
            ...,
            restaurants[]-> {
              ...,
              dishies[]->
            }
          }
        `
      )
    );
  },
  fetchFeaturedRowRestaurants: (FeaturedRowId: string) => {
    return requestResolver(
      sanityClient.fetch(
        `
      *[_type == 'featured' && _id == $id] {
          ...,
          restaurants[]-> {
            ...,
            dishies[]->,
            type-> {
              name
            }
          }
        }[0]
      `,
        { id: FeaturedRowId }
      )
    );
  },
};
