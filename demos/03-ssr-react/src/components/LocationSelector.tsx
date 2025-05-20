import { OfficeLocationId, officeLocations } from "../utils/office-locations";

interface LocationSelectorProps {
    selectedLocationId: OfficeLocationId | null;
    onLocationIdChange: (locationId: OfficeLocationId) => void;
}

const LocationSelector = ({ selectedLocationId, onLocationIdChange }: LocationSelectorProps) => {
    const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const selectedLocationId = e.target.value as OfficeLocationId;
        onLocationIdChange(selectedLocationId);
    };

    return (
        <section>
            <h1>🍕 Wiesbaden Lunchfinder (React SSR) 🍕</h1>
            <label htmlFor="location-selector">Your location:</label>
            <select
                id="location-selector"
                aria-label="Select your current location"
                required
                value={selectedLocationId ?? ""}
                onChange={handleChange}
            >
                <option disabled value="">Select your office</option>
                {Object.entries(officeLocations).map(([id, location]) => (
                    <option key={id} value={id}>
                        {location.name}
                    </option>
                ))}
            </select>
        </section>
    );
};

export default LocationSelector; 