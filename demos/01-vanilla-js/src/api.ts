import { getLunchPlacesWithWalkingTime } from "@lunchfinder/core"
import { officeLocations } from "./locations"
import type { Restaurant } from "@lunchfinder/core/src/types"

/**
 * Fetches lunch places near the specified office location
 * @param locationId The ID of the office location
 */
export async function fetchLunchPlacesForOffice(locationId: string): Promise<Restaurant[]> {
  const location = officeLocations.find(loc => loc.id === locationId)
  
  if (!location) {
    throw new Error(`No location found with ID: ${locationId}`)
  }
  
  const { lat, lng } = location.coords
  return getLunchPlacesWithWalkingTime(lat, lng)
} 