<script setup lang="ts">
import { ref } from 'vue'
import { fetchLunchPlaces } from './api'
import type { Restaurant } from './types'
import { officeLocations } from './office-locations'
import LocationSelector from './components/LocationSelector.vue'
import InitialMessage from './components/InitialMessage.vue'
import LoadingIndicator from './components/LoadingIndicator.vue'
import RestaurantTable from './components/RestaurantTable.vue'

// Reactive state
const selectedLocation = ref('')
const isLoading = ref(false)
const lunchPlaces = ref<Restaurant[]>([])
const showInitialMessage = ref(true)

// Sort function to sort places by distance
function sortPlacesByDistance(places: Restaurant[]): Restaurant[] {
  return [...places].sort((a, b) => a.distance - b.distance)
}

// Handle location change
async function handleLocationChange() {
  if (!selectedLocation.value) return
  
  showInitialMessage.value = false
  isLoading.value = true
  
  try {
    // Find the selected location object
    const selectedOffice = officeLocations.find(loc => loc.id === selectedLocation.value)
    
    if (!selectedOffice) {
      throw new Error("Selected office not found")
    }
    
    const places = await fetchLunchPlaces(selectedOffice)
    lunchPlaces.value = sortPlacesByDistance(places)
  } catch (error) {
    console.error("Error fetching lunch places:", error)
  } finally {
    isLoading.value = false
  }
}
</script>

<template>
  <main class="container">
    <LocationSelector 
      v-model:selectedLocation="selectedLocation"
      @locationChange="handleLocationChange"
    />

    <section>
      <h2>Lunch places near you</h2>
      
      <!-- Initial message -->
      <InitialMessage v-if="showInitialMessage" />
      
      <!-- Loading state -->
      <LoadingIndicator v-else-if="isLoading" />
      
      <!-- Results table -->
      <RestaurantTable 
        v-else 
        :restaurants="lunchPlaces"
      />
    </section>
  </main>
</template> 