/**
 * @import {Restaurant, RestaurantWithDistance} from "../../../packages/api/src/schemas/restaurant";
 */

// Initialize the application
document.addEventListener("DOMContentLoaded", () => {
  populateLocationSelector();
  setupLocationSelector();
  showInitialMessage();
});

/**
 * Shows initial message prompting the user to select a location
 */
function showInitialMessage() {
  const resultsSection = document.getElementById("lunch-location-results");
  if (resultsSection) {
    resultsSection.innerHTML = `
        <p>Select an office location to see nearby lunch places</p>
    `;
  }
}

/**
 * Populates the location selector with options from the officeLocations array
 */
function populateLocationSelector() {
  const locationSelector = document.getElementById("location-selector");
  
  if (locationSelector) {
    // Clear existing options (keeping only the placeholder)
    const placeholder = locationSelector.querySelector("option[disabled]");
    locationSelector.innerHTML = "";
    if (placeholder) {
      locationSelector.appendChild(placeholder);
    }
    
    // Add options from the officeLocations array
    officeLocations.forEach(location => {
      const option = document.createElement("option");
      option.value = location.id;
      option.textContent = location.name;
      locationSelector.appendChild(option);
    });
  }
}

/**
 * Sets up the location selector dropdown
 */
function setupLocationSelector() {
  const locationSelector = document.getElementById("location-selector");
  
  if (locationSelector) {
    // Set up event listener for location changes
    locationSelector.addEventListener("change", async () => {
      const selectedLocationId = locationSelector.value;
      if (!selectedLocationId) return;
      
      const selectedLocation = officeLocations.find(loc => loc.id === selectedLocationId);
      if (!selectedLocation) return;
      
      showLoading();
      
      try {
        // API now returns places with distances already calculated
        const places = await fetchLunchPlaces(selectedLocation);
        renderLunchPlaces(places);
      } catch (error) {
        console.error("Error fetching lunch places:", error);
        showErrorMessage("Failed to load lunch places. Please try again later.");
      }
    });
  }
}

/**
 * Shows an error message in the results section
 * @param {string} message - Error message to display
 */
function showErrorMessage(message) {
  const resultsSection = document.getElementById("lunch-location-results");
  if (resultsSection) {
    resultsSection.innerHTML = `
      <article class="error">
        <p>${message}</p>
      </article>
    `;
  }
} 