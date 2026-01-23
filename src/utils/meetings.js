// src/utils/meetings.js

// Define UCI holidays
export const UCI_HOLIDAYS = [
  "2025-01-01", // New Year
  "2025-01-20", // Martin Luther King Jr. Day
  "2025-02-17", // Presidents' Day
  "2025-03-28", // Cesar Chavez Day
  "2025-05-26", // Memorial Day
  "2025-06-19", // Juneteenth
  "2025-07-04", // Independence Day
  "2025-09-01", // Labor Day
  "2025-11-11", // Veterans Day
  "2025-11-27", // Thanksgiving
  "2025-11-28", // Thanksgiving Friday
  "2025-12-24", // Christmas Eve
  "2025-12-25", // Christmas
];

// Define quarter breaks / recess periods as ranges [start, end]
export const UCI_RECESSES = [
  ["2025-03-23", "2025-03-27"], // Spring Break
  ["2025-12-15", "2026-01-02"], // Winter Break
];

// Check if a date is a holiday or falls within a recess
export function isHolidayOrRecess(date) {
  const iso = date.toISOString().split("T")[0];

  if (UCI_HOLIDAYS.includes(iso)) return true;

  for (const [start, end] of UCI_RECESSES) {
    if (iso >= start && iso <= end) return true;
  }

  return false;
}

// Get the next Friday that is not a holiday or in a recess
export function getNextMeeting() {
  const today = new Date();
  let next = new Date(today);

  const day = today.getDay(); // Sunday=0, Monday=1, ..., Friday=5
  const daysUntilFriday = (5 - day + 7) % 7 || 7; // Move to next Friday if today is Friday
  next.setDate(today.getDate() + daysUntilFriday);

  while (isHolidayOrRecess(next)) {
    next.setDate(next.getDate() + 7);
  }

  return next;
}

// Format date nicely, e.g., "Friday, October 31"
export function formatDate(date) {
  const options = { weekday: "long", month: "long", day: "numeric" };
  return date.toLocaleDateString(undefined, options);
}
