const API_BASE_URL = "https://api.techtalk.ansgar.app/api";
/**
 * Fetches lunch places for a given location
 * @param {Object} location - The office location
 * @param {number} location.lat - Latitude
 * @param {number} location.lon - Longitude
 * @returns {Promise<Array<RestaurantWithDistance>>} - Array of restaurant objects with distance
 */
async function fetchLunchPlaces(location) {
  try {
    console.log("Fetching lunch places for location:", location);
    const url = new URL(`${API_BASE_URL}/nearest`);
    url.searchParams.append("lat", location.lat.toString());
    url.searchParams.append("lon", location.lon.toString());
    url.searchParams.append("count", "20");

    const response = await fetch(url.toString());
    
    if (!response.ok) {
      throw new Error(`Error fetching lunch places: ${response.status} ${response.statusText}`);
    }
    
    return await response.json();
  } catch (error) {
    console.error("Failed to fetch lunch places:", error);
    throw error;
  }
} 