import { writable, type Writable } from "svelte/store";

// interface Meal {
//   Lunch: number;
//   Dinner: number;
//   Breakfast: number;
//   Snacks: number;
// }

export let maxLunch: Writable<number> = writable(0);
export let maxDinner: Writable<number> = writable(0);
export let maxBreakfast: Writable<number> = writable(0);
export let maxSnacks: Writable<number> = writable(0);
