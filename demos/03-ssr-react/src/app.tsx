import { useState } from "react";
import { OfficeLocationId, officeLocations } from "./utils/office-locations";
import { RestaurantWithDistance } from "./utils/types";
import { fetchLunchPlaces } from "./utils/api";
import LocationSelector from "./components/LocationSelector";
import InitialMessage from "./components/InitialMessage";
import LoadingIndicator from "./components/LoadingIndicator";
import RestaurantTable from "./components/RestaurantTable";
import NoResults from "./components/NoResults";

export const App = () => {
    const [selectedLocationId, setSelectedLocationId] = useState<OfficeLocationId | null>(null);
    const [restaurants, setRestaurants] = useState<RestaurantWithDistance[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [showInitialMessage, setShowInitialMessage] = useState(true);

    // Sort places by distance
    const sortPlacesByDistance = (places: RestaurantWithDistance[]): RestaurantWithDistance[] => {
        return [...places].sort((a, b) => a.distance - b.distance);
    };

    // Handle location change
    const updateRestaurants = async (locationId: OfficeLocationId) => {
        setSelectedLocationId(locationId);

        setShowInitialMessage(false);
        setIsLoading(true);

        try {
            const selectedOffice = officeLocations[locationId as OfficeLocationId   ];

            if (!selectedOffice) {
                throw new Error("Selected office not found");
            }

            const places = await fetchLunchPlaces(selectedOffice);
            setRestaurants(sortPlacesByDistance(places));
        } catch (error) {
            console.error("Error fetching lunch places:", error);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <main className="container">
            <LocationSelector
                selectedLocationId={selectedLocationId}
                onLocationIdChange={updateRestaurants}
            />

            <section>
                <h2>Lunch places near you</h2>
                {showInitialMessage && <InitialMessage />}
                {isLoading && <LoadingIndicator />}
                {!isLoading && !showInitialMessage && restaurants.length === 0 && <NoResults />}
                {!isLoading && !showInitialMessage && restaurants.length > 0 && (
                    <RestaurantTable restaurants={restaurants} />
                )}
            </section>
        </main>
    );
};
