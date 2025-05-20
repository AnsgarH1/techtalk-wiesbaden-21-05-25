

// Office locations mapping for easier lookup
const OFFICE_LOCATIONS = {
  "AOE HQ": { lat: 50.07868239676358, lon: 8.237258432138866 },
  "Seibert-Media": { lat: 50.079172480082974, lon: 8.23883811715287 },
  "Weltenbauer": { lat: 50.07987928358848, lon: 8.246214753304054 }
};

// Element references
const resultsSection = document.getElementById("lunch-location-results");

/**
 * Shows a loading state in the results section
 */
function showLoading() {
  if (resultsSection) {
    resultsSection.innerHTML = "<article aria-busy='true'></article>";
  }
}

/**
 * Formats the address from address components
 * @param {Restaurant} restaurant - Restaurant object
 * @returns {string} - Formatted address
 */
function formatAddress(restaurant) {
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
 * @param {number} meters - Distance in meters
 * @returns {string} - Formatted distance
 */
function formatDistance(meters) {
  if (meters < 1000) {
    return `${Math.round(meters)} m`;
  } else {
    return `${(meters / 1000).toFixed(1)} km`;
  }
}

/**
 * Formats diet information into a readable string
 * @param {Restaurant} restaurant - Restaurant object
 * @returns {string} - Diet information
 */
function formatDiet(restaurant) {
  const diet = restaurant.diet;
  if (!diet) return "N/A";
  
  const options = [];
  if (diet.vegetarian) options.push("Vegetarian");
  if (diet.vegan) options.push("Vegan");
  
  return options.length > 0 ? options.join(", ") : "None";
}

/**
 * Formats payment information into a readable string
 * @param {Restaurant} restaurant - Restaurant object
 * @returns {string} - Payment information
 */
function formatPayment(restaurant) {
  const payment = restaurant.payment;
  if (!payment) return "N/A";
  
  const options = [];
  if (payment.creditCards) options.push("Credit Cards");
  if (payment.debitCards) options.push("Debit Cards");
  
  return options.length > 0 ? options.join(", ") : "Cash Only";
}

/**
 * Creates a Google Maps link for the restaurant's coordinates
 * @param {Restaurant} restaurant - Restaurant object
 * @returns {string} - Google Maps URL
 */
function createMapsLink(restaurant) {
  return `https://www.google.com/maps?q=${restaurant.lat},${restaurant.lon}`;
}

/**
 * Renders lunch places in a table sorted by distance
 * @param {Array<RestaurantWithDistance>} places - Array of restaurant objects with distance
 */
function renderLunchPlaces(places) {
  // Clear previous results
  if (!resultsSection) return;
  resultsSection.innerHTML = "";
  
  if (places.length === 0) {
    resultsSection.innerHTML = "<p>No lunch places found nearby.</p>";
    return;
  }
  
  // Create a section for the results
  const section = document.createElement("article");
  
  // Create table for all places
  const table = document.createElement("table");
  const thead = document.createElement("thead");
  const headerRow = document.createElement("tr");
  
  // Add table headers
  const headers = ["Name", "Cuisine", "Distance", "Diet Options", "Card Payment", "Address"];
  headers.forEach(headerText => {
    const th = document.createElement("th");
    th.textContent = headerText;
    headerRow.appendChild(th);
  });
  
  thead.appendChild(headerRow);
  table.appendChild(thead);
  
  // Create table body
  const tbody = document.createElement("tbody");
  
  // Add rows for each place
  places.forEach(place => {
    const row = document.createElement("tr");
    
    // Name cell
    const nameCell = document.createElement("th");
    nameCell.setAttribute("scope", "row");
    nameCell.textContent = place.name;
    row.appendChild(nameCell);
    
    // Cuisine cell
    const cuisineCell = document.createElement("td");
    cuisineCell.textContent = place.cuisine ? place.cuisine.join(", ") : "N/A";
    row.appendChild(cuisineCell);
    
    // Distance cell
    const distanceCell = document.createElement("td");
    distanceCell.textContent = formatDistance(place.distance);
    row.appendChild(distanceCell);
    
    // Diet options cell
    const dietCell = document.createElement("td");
    dietCell.textContent = formatDiet(place);
    row.appendChild(dietCell);
    
    // Card Payment cell
    const paymentCell = document.createElement("td");
    paymentCell.textContent = formatPayment(place);
    row.appendChild(paymentCell);
    
    // Address cell
    const addressCell = document.createElement("td");
    const addressText = formatAddress(place);
    
    // Create a link element for the address
    const addressLink = document.createElement("a");
    addressLink.href = createMapsLink(place);
    addressLink.textContent = addressText;
    addressLink.target = "_blank";
    addressLink.rel = "noopener noreferrer";
    
    addressCell.appendChild(addressLink);
    row.appendChild(addressCell);
    
    tbody.appendChild(row);
  });
  
  table.appendChild(tbody);
  section.appendChild(table);
  resultsSection.appendChild(section);
} 