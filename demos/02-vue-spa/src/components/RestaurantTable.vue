<script setup lang="ts">
import type { Restaurant } from '../types'
import RestaurantRow from './RestaurantRow.vue'

// Define props
defineProps<{
  restaurants: Restaurant[]
}>()
</script>

<template>
  <article>
    <h2>Lunch Locations</h2>
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Cuisine</th>
          <th>Distance</th>
          <th>Diet Options</th>
          <th>Card Payment</th>
          <th>Address</th>
        </tr>
      </thead>
      <tbody>
        <RestaurantRow 
          v-for="place in restaurants" 
          :key="place.id" 
          :restaurant="place" 
        />
      </tbody>
    </table>
  </article>
</template> 