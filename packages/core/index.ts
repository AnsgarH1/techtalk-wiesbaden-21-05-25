import { placesService } from "./src/placesService"
import type { Restaurant } from "./src/types"

export type { Restaurant } from "./src/types"

export const getLunchPlaces = async function (latitude: number, longitude: number): Promise<Restaurant[]> {
    const places = await placesService.getLunchPlaces(latitude, longitude)
    return places
}

export const getLunchPlacesWithWalkingTime = async function (latitude: number, longitude: number): Promise<Restaurant[]> {
    const places = await placesService.getLunchPlacesWithWalkingTime(latitude, longitude)
    console.log("found places: ", places)
    return places
}


