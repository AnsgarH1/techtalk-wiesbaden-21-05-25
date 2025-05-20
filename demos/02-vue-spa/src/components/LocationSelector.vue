<script setup lang="ts">
import { officeLocations } from '../office-locations'

// Define props and emits
const props = defineProps<{
  selectedLocation: string
}>()

const emit = defineEmits<{
  'update:selectedLocation': [value: string]
  'locationChange': []
}>()

// Handle location change
function handleChange(event: Event) {
  const target = event.target as HTMLSelectElement
  emit('update:selectedLocation', target.value)
  emit('locationChange')
}
</script>

<template>
  <section>
    <h1>🍕 Wiesbaden Lunchfinder (Vue.js) 🍕</h1>
    <label for="location-selector">Your location:</label>
    <select 
      id="location-selector"
      :value="selectedLocation" 
      @change="handleChange" 
      aria-label="Select your current location" 
      required
    >
      <option disabled value="">Select your office</option>
      <option 
        v-for="location in officeLocations" 
        :key="location.id" 
        :value="location.id"
      >
        {{ location.name }}
      </option>
    </select>
  </section>
</template> 