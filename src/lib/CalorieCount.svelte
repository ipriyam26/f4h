<script lang="ts">
	import {  maxBreakfast,maxDinner,maxLunch,maxSnacks  } from './../store/maxFood';

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

  function findCurrent(category: string): [Writable<selectedItem>, Writable<number>] {
    if (category == "Breakfast") {
      return [selectedBreakfast, maxBreakfast];
    } else if (category == "Lunch") {
      return [selectedLunch, maxLunch];
    } else if (category == "Snacks") {
      return [selectedSnacks, maxSnacks];
    } else  {
      return [selectedDinner, maxDinner];
    }
    
  }
  let selectedStore:Writable<selectedItem>,maxCalorie:Writable<number>;
  $: [selectedStore,maxCalorie] = findCurrent(foodType);
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
  

  // function isMoreThanNeeded(category:string, carbs:string){
  //   let carbohydrate:number = parseFloat(carbs);
  //   let smaller:boolean=false;
  //   if (category == "Breakfast") {
  //   smaller=   $maxMeal.Breakfast < carbohydrate;
  //   } else if (category == "Lunch") {
  //     smaller= $maxMeal.Lunch < carbohydrate;
  //   } else if (category == "Snacks") {
  //     smaller= $maxMeal.Snacks < carbohydrate;
  //   } else if (category == "Dinner") {
  //     smaller= $maxMeal.Dinner < carbohydrate;
  //   } 
  //   return smaller?"red":"green";

    
  // }
  let color:string = "green";
  $: color = $maxCalorie < parseFloat(calories)?"red":"green";

</script>

<div class="col-span-1 rounded-2xl  shadow-xl py-16 px-8">
  <h3 class="text-3xl font-bold text-primary mx-auto mb-12">Calculator</h3>
  <ul class="space-y-12 w-full">
    <Cal title="Calories" value={calories} color={color} />
    <Cal title="Protien" value={protein}  color={"green"} />
    <Cal title="Fat" value={fat}  color={"green"} />
    <Cal title="Carbs" value={carbs}  color={"green"} />
  </ul>

  <div class="bg-primary text-3xl mt-12 font-semibold py-4 rounded-xl text-white">
    Diet Chart
  </div>
  <!-- <p>
    {color}
    {$maxCalorie}
  </p> -->
</div>
