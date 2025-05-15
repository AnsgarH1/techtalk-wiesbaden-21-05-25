import { getTodaysOpeningHours, cleanCategoryName, getOpeningIn } from "./utils"
import type { Restaurant } from "@lunchfinder/core/src/types"

// Element references
const resultsSection = document.getElementById("lunch-location-results")

/**
 * Shows a loading state in the results section
 */
export function showLoading(): void {
  if (resultsSection) {
    resultsSection.innerHTML = "<article aria-busy='true'></article>"
  }
}

/**
 * Renders lunch places in a single table sorted by walking time
 */
export function renderLunchPlaces(places: Restaurant[]): void {
  // Clear previous results
  if (!resultsSection) return
  resultsSection.innerHTML = ""
  
  // Create a section for the results
  const section = document.createElement("article")
  
  // Add heading
  const heading = document.createElement("h2")
  heading.textContent = "Lunch Locations"
  section.appendChild(heading)
  
  // Create table for all places
  const table = document.createElement("table")
  const thead = document.createElement("thead")
  const headerRow = document.createElement("tr")
  
  // Add table headers
  const headers = ["Name", "Category", "Today's Hours", "Rating", "Walking Time", "Address"]
  headers.forEach(headerText => {
    const th = document.createElement("th")
    th.textContent = headerText
    headerRow.appendChild(th)
  })
  
  thead.appendChild(headerRow)
  table.appendChild(thead)
  
  // Create table body
  const tbody = document.createElement("tbody")
  
  
  // Sort places by walking time (ascending)
  places.sort((a, b) => {
    // Handle undefined walking times (place them at the end)
    if (a.walkingTime === undefined) return 1
    if (b.walkingTime === undefined) return -1
    return a.walkingTime - b.walkingTime
  })
  
  // Add rows for each place
  places.forEach(place => {
    const row = document.createElement("tr")
    
    // Name cell
    const nameCell = document.createElement("th")
    nameCell.setAttribute("scope", "row")
    nameCell.textContent = place.name
    row.appendChild(nameCell)
    
    // Category cell
    const categoryCell = document.createElement("td")
    categoryCell.textContent = cleanCategoryName(place.category)
    row.appendChild(categoryCell)
    
    // Today's hours cell
    const hoursCell = document.createElement("td")
    if (place.openNow) {
      hoursCell.textContent = "Open Now"
    } else if (place.nextOpeningHours) {
      hoursCell.textContent = getOpeningIn(place.nextOpeningHours)
    } else {
      hoursCell.textContent = "N/A"
    }
    row.appendChild(hoursCell)
    
    // Rating cell
    const ratingCell = document.createElement("td")
    ratingCell.textContent =  place.rating ? place.rating.toString() : "N/A"
    row.appendChild(ratingCell)
    
    // Walking time cell
    const walkingTimeCell = document.createElement("td")
    if (place.walkingTime !== undefined) {
      walkingTimeCell.textContent = `${place.walkingTime} min`
    } else {
      walkingTimeCell.textContent = "N/A"
    }
    row.appendChild(walkingTimeCell)
    
    // Address cell
    const addressCell = document.createElement("td")
    addressCell.textContent = place.address
    row.appendChild(addressCell)
    
    tbody.appendChild(row)
  })
  
  table.appendChild(tbody)
  section.appendChild(table)
  resultsSection.appendChild(section)
} 