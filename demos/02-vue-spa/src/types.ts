export interface Restaurant {
  id: string;
  name: string;
  address: {
    street?: string;
    housenumber?: string;
    postcode?: string;
    city?: string;
  };
  cuisine: string[];
  walking_time: number;
  distance: number;
  price_category: string;
  rating: number;
  lat: number;
  lon: number;
  diet?: {
    vegetarian?: boolean;
    vegan?: boolean;
  };
  payment?: {
    creditCards?: boolean;
    debitCards?: boolean;
  };
} 