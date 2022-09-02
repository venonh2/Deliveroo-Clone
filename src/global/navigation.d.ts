import { Dishie } from "../types/Dishie";

export declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {
      Restaurant: {
        id: string;
        imgUrl: string;
        title: string;
        rating: number;
        genre: string;
        address: string;
        short_description: string;
        dishies: Dishie[];
        lat: number;
        long: number;
      };
      Cart: undefined;
    }
  }
}
