<script lang="ts">
  import type { FoodItem } from "src/types";
      import {
    selectedBreakfast,
    selectedLunch,
    selectedSnacks,
    selectedDinner,
  } from "../store/selectedFood";
    export let mealTime: string;
    export let foodType: String;

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
    let selectedStore = findCurrent(mealTime);
let selectedItems:FoodItem[] = [];
  $: selectedStore = findCurrent(mealTime);
  $: selectedItems = $selectedStore.item.filter((item) => {
    return item.Category === foodType;
  });

</script>


