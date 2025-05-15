import { fetchLunchPlacesForOffice } from "./api"
import { renderLunchPlaces, showLoading } from "./ui"
import { officeLocations } from "./locations"

// Initialize the application
document.addEventListener("DOMContentLoaded", () => {
  populateLocationSelector()
  setupLocationSelector()
  showInitialMessage()
})

/**
 * Shows initial message prompting the user to select a location
 */
function showInitialMessage() {
  const resultsSection = document.getElementById("lunch-location-results")
  if (resultsSection) {
    resultsSection.innerHTML = `
        <p>Select an office location to see nearby lunch places</p>
    `
  }
}

/**
 * Populates the location selector with options from the officeLocations array
 */
function populateLocationSelector() {
  const locationSelector = document.querySelector("select[name='current-location']") as HTMLSelectElement
  
  if (locationSelector) {
    // Clear existing options except the first placeholder
 
    
    // Add options from the officeLocations array
    officeLocations.forEach(location => {
      const option = document.createElement("option")
      option.value = location.id
      option.textContent = location.name
      locationSelector.appendChild(option)
    })
  }
}

/**
 * Sets up the location selector dropdown
 */
function setupLocationSelector() {
  const locationSelector = document.querySelector("select[name='current-location']") as HTMLSelectElement
  
  if (locationSelector) {
    // Set up event listener for location changes
    locationSelector.addEventListener("change", async () => {
      const selectedLocation = locationSelector.value
      if (!selectedLocation) return
      
      showLoading()
      
      try {
        const places = await fetchLunchPlacesForOffice(selectedLocation)
        renderLunchPlaces(places)
      } catch (error) {
        console.error("Error fetching lunch places:", error)
      }
    })
  }
}
