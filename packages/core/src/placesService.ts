import { Loader } from "@googlemaps/js-api-loader";
import type { Restaurant } from "./types";



const getLoader = async () => {
    const apiKey = "AIzaSyAqbl5nDrKn5kqOX-s2NkJZmc_zBNYVzyg"

    const loader = await new Loader({
        apiKey,
        version: "beta"
    })
    return loader
}

export const placesService = {
    getPlaces: async function () {
        const loader = await getLoader()
        const { Place } = await loader.importLibrary("places")

        // AOE Office: 50.07866131912605, 8.237321177281366

        const currentLocation = new google.maps.LatLng(50.07866131912605, 8.237321177281366)

        const res = await Place.searchNearby({
            fields: ["displayName", "location", "businessStatus"],
            locationRestriction: {
                center: currentLocation,
                radius: 500
            },
            includedPrimaryTypes: ['restaurant'],
        })

        const data = res.places.map(place => place.displayName)
        return data
    },

    calculateWalkingTime: async function (origin: google.maps.LatLng, destination: google.maps.LatLng): Promise<number> {
        const loader = await getLoader()
        const { DirectionsService } = await loader.importLibrary("routes")

        const directionsService = new DirectionsService()

        try {
            const response = await directionsService.route({
                origin: origin,
                destination: destination,
                travelMode: google.maps.TravelMode.WALKING,
            })

            // Safely navigate the response object
            const route = response.routes?.[0]
            if (route && route.legs && route.legs.length > 0) {
                const leg = route.legs[0]
                if (leg && leg.duration && typeof leg.duration.value === 'number') {
                    // Get the duration in seconds and convert to minutes (rounded)
                    return Math.round(leg.duration.value / 60)
                }
            }

            return 0
        } catch (error) {
            console.error("Error calculating walking time:", error)
            return 0
        }
    },

    getLunchPlaces: async function (latitude: number, longitude: number): Promise<Restaurant[]> {
        const loader = await getLoader()
        const { Place } = await loader.importLibrary("places")

        const currentLocation = new google.maps.LatLng(latitude, longitude)

        const res = await Place.searchNearby({
            fields: [
                "displayName",
                "formattedAddress",
                "regularOpeningHours",
                "primaryTypeDisplayName",
                "rating",
                "location",
                "reviews"
            ],
            locationRestriction: {
                center: currentLocation,
                radius: 1000
            },
            includedPrimaryTypes: ['restaurant'],
            maxResultCount: 20
        })

        const restaurants: Restaurant[] = await Promise.all(res.places.map(async place => ({
            name: place.displayName || "",
            address: place.formattedAddress || "",
            next: place.regularOpeningHours?.weekdayDescriptions || [],
            openNow: await place.isOpen(),
            nextOpeningHours: await place.getNextOpeningTime(),
            category: place.primaryTypeDisplayName || "",
            rating: place.rating || 0,
            location: place.location
        })))
        // Calculate walking times for each restaurant
        for (const restaurant of restaurants) {
            const placeLocation = res.places.find(p => p.displayName === restaurant.name)?.location
            if (placeLocation) {
                const walkingTime = await this.calculateWalkingTime(currentLocation, placeLocation)
                restaurant.walkingTime = walkingTime
            }
        }

        return restaurants
    },

    getLunchPlacesWithWalkingTime: async function (latitude: number, longitude: number): Promise<Restaurant[]> {
        const restaurants = await this.getLunchPlaces(latitude, longitude)
        return restaurants
    }
}
