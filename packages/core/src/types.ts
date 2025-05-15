export type Restaurant = {
    name: string;
    address: string;
    openNow: boolean | undefined;
    nextOpeningHours: Date | undefined;
    category: string;
    rating: number;
    walkingTime?: number; // Walking time in minutes
    location: google.maps.LatLng | undefined | null;
}