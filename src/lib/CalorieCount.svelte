<script lang="ts">

  import type { FoodItem, selectedItem } from "src/types";
  import {
    selectedBreakfast,
    selectedDinner,
    selectedLunch,
    selectedSnacks,
  } from "../store/selectedFood";

  import Cal from "./Cal.svelte";
  import type { Writable } from "svelte/store";

  export let foodType: string;
  let selectedItem: FoodItem[];

  function findCurrent(category: string) {
    if (category == "Breakfast") {
      return selectedBreakfast;
    } else if (category == "Lunch") {
      return selectedLunch;
    } else if (category == "Snacks") {
      return selectedSnacks;
    } else if (category == "Dinner") {
      return selectedDinner;
    }
    
  }
  let selectedStore:Writable<selectedItem>;
  $:  selectedStore = findCurrent(foodType);
  // $: selectedItem = $findCurrent(foodType);

  let calories: string,
    protein: string,
    fat: string,
    carbs: string = "0";

  $: calories = $selectedStore.item.reduce((acc, curr) => {
    return acc + curr.Calories;
  }, 0).toFixed(2);

  $: protein = $selectedStore.item.reduce((acc, curr) => {
    return acc + curr.Protein;
  }, 0).toFixed(2);

  $: fat = $selectedStore.item.reduce((acc, curr) => {
    return acc + curr.Total_Fat;
  }, 0).toFixed(2);

  $: carbs = $selectedStore.item.reduce((acc, curr) => {
    return acc + curr.Carbs;
  }, 0).toFixed(2);
</script>

<div class="col-span-1 rounded-2xl shadow-xl py-16 px-8">
  <h3 class="text-3xl font-bold text-primary mx-auto mb-12">Calculator</h3>
  <ul class="space-y-12 w-full">
    <Cal title="Calories" value={calories} />
    <Cal title="Protien" value={protein} />
    <Cal title="Fat" value={fat} />
    <Cal title="Carbs" value={carbs} />
  </ul>

  <div class="bg-primary text-3xl mt-12 font-semibold py-4 rounded-xl text-white">
    Diet Chart
  </div>
</div>
