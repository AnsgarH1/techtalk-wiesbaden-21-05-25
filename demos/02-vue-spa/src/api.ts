import type { Restaurant } from './types'
import type { OfficeLocation } from './office-locations'

const API_BASE_URL = "http://localhost:4002/api";

/**
 * Fetches lunch places for a given location
 */
export async function fetchLunchPlaces(location: OfficeLocation): Promise<Restaurant[]> {
  try {
    console.log("Fetching lunch places for location:", location);
    const url = new URL(`${API_BASE_URL}/nearest`, window.location.origin);
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