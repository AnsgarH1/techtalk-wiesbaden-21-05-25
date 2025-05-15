import type { Restaurant } from "@lunchfinder/core/src/types"

/**
 * Helper function to get today's opening hours
 */
export function getTodaysOpeningHours(openingHours: string[]): string {
  const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
  const today = daysOfWeek[new Date().getDay()]!

  const todayHours = openingHours.find(hours => hours.startsWith(today))
  return todayHours ? todayHours.replace(`${today}: `, "") : "Unknown"
}
/**
 * Returns the days, hours or minutes from now when the restaurant opens
 */
export function getOpeningIn(date: Date): string {
  const now = new Date()
  const diff = date.getTime() - now.getTime()
  const diffMinutes = Math.round(diff / (1000 * 60))

  if (diffMinutes <= 0) {
    return "Now"
  } else if (diffMinutes < 60) {
    return `opens in ${diffMinutes} minutes`
  } else if (diffMinutes < 24 * 60) {
    const hours = Math.floor(diffMinutes / 60)
    return `opens in ${hours} hour${hours > 1 ? 's' : ''}`
  } else {
    const days = Math.floor(diffMinutes / (24 * 60))
    return `opens in ${days} day${days > 1 ? 's' : ''}`
  }
}

/**
 * Cleans up the category name by removing the "Restaurant" suffix
 * If the category is just "Restaurant", it returns a dash ("-")
 */
export function cleanCategoryName(category: string): string {
  // If the category is just "Restaurant" (ignoring case and whitespace), return a dash
  if (/^\s*restaurant\s*$/i.test(category)) {
    return "-"
  }
  // Otherwise, remove "Restaurant" suffix
  return category.replace(/\s+Restaurant$/i, "")
}

