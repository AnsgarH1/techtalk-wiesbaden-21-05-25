<script setup lang="ts">
import type { Restaurant } from '../types'

// Define props
defineProps<{
  restaurant: Restaurant
}>()

/**
 * Formats the address from address components
 */
function formatAddress(restaurant: Restaurant): string {
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
}

/**
 * Formats distance in meters to a friendly string
 */
function formatDistance(meters: number): string {
  if (meters < 1000) {
    return `${Math.round(meters)} m`;
  } else {
    return `${(meters / 1000).toFixed(1)} km`;
  }
}

/**
 * Formats diet information into a readable string
 */
function formatDiet(restaurant: Restaurant): string {
  const diet = restaurant.diet;
  if (!diet) return "N/A";
  
  const options = [];
  if (diet.vegetarian) options.push("Vegetarian");
  if (diet.vegan) options.push("Vegan");
  
  return options.length > 0 ? options.join(", ") : "None";
}

/**
 * Formats payment information into a readable string
 */
function formatPayment(restaurant: Restaurant): string {
  const payment = restaurant.payment;
  if (!payment) return "N/A";
  
  const options = [];
  if (payment.creditCards) options.push("Credit Cards");
  if (payment.debitCards) options.push("Debit Cards");
  
  return options.length > 0 ? options.join(", ") : "Cash Only";
}

/**
 * Creates a Google Maps link for the restaurant's coordinates
 */
function createMapsLink(restaurant: Restaurant): string {
  return `https://www.google.com/maps?q=${restaurant.lat},${restaurant.lon}`;
}
</script>

<template>
  <tr>
    <th scope="row">{{ restaurant.name }}</th>
    <td>{{ restaurant.cuisine ? restaurant.cuisine.join(", ") : "N/A" }}</td>
    <td>{{ formatDistance(restaurant.distance) }}</td>
    <td>{{ formatDiet(restaurant) }}</td>
    <td>{{ formatPayment(restaurant) }}</td>
    <td>
      <a :href="createMapsLink(restaurant)" target="_blank" rel="noopener noreferrer">
        {{ formatAddress(restaurant) }}
      </a>
    </td>
  </tr>
</template> 