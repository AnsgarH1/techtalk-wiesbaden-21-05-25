import { RestaurantWithDistance } from "./types";

// Format address
export const formatAddress = (restaurant: RestaurantWithDistance): string => {
    const address = restaurant.address;
    if (!address) return "N/A";
    
    const parts = [];
    if (address.street) parts.push(address.street);
    if (address.housenumber) parts.push(address.housenumber);
    if (parts.length > 0 && (address.postcode || address.city)) {
        parts.push(",");
    }
    if (address.postcode) parts.push(address.postcode);
    if (address.city) parts.push(address.city);
    
    return parts.length > 0 ? parts.join(" ") : "N/A";
};

// Format distance
export const formatDistance = (meters: number): string => {
    if (meters < 1000) {
        return `${Math.round(meters)} m`;
    } else {
        return `${(meters / 1000).toFixed(1)} km`;
    }
};

// Format diet information
export const formatDiet = (restaurant: RestaurantWithDistance): string => {
    const diet = restaurant.diet;
    if (!diet) return "-";
    
    const options = [];
    if (diet.vegetarian) options.push("Vegetarian");
    if (diet.vegan) options.push("Vegan");
    
    return options.length > 0 ? options.join(", ") : "None";
};

// Format payment information
export const formatPayment = (restaurant: RestaurantWithDistance): string => {
    const payment = restaurant.payment;
    if (!payment) return "-";
    
    const options = [];
    if (payment.creditCards) options.push("Credit Cards");
    if (payment.debitCards) options.push("Debit Cards");
    
    return options.length > 0 ? options.join(", ") : "Cash Only";
};

// Create Google Maps link
export const createMapsLink = (restaurant: RestaurantWithDistance): string => {
    return `https://www.google.com/maps?q=${restaurant.lat},${restaurant.lon}`;
};