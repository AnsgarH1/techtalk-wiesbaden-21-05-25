
import { point, distance as turfDistance } from '@turf/turf';
import type { Restaurant, RestaurantWithDistance } from '../schemas/restaurant';

/**
 * Find the nearest restaurants to the given coordinates.
 * @param lat Latitude of the reference point
 * @param lon Longitude of the reference point
 * @param restaurants List of restaurants to search
 * @param count Number of results to return (default 5)
 * @returns Array of nearest restaurants, sorted by distance (closest first)
 */
export function findNearestRestaurants(
  lat: number,
  lon: number,
  restaurants: Restaurant[],
  count = 5
): RestaurantWithDistance[] {
  const from = point([lon, lat]);
  const withDistance = restaurants
    .filter(r => typeof r.lat === 'number' && typeof r.lon === 'number')
    .map(r => ({
      ...r,
      distance: turfDistance(from, point([r.lon, r.lat]), { units: 'meters' })
    }));
  return withDistance.sort((a, b) => a.distance - b.distance).slice(0, count);
} 