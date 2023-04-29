import { writable, type Writable } from "svelte/store";

interface CreateMeal {
    create: boolean;
}
export let createMeal: Writable<CreateMeal> = writable({create: false});
