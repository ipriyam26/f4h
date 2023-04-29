<script lang="ts">
  import type { Disease, FoodItem } from "../types";
  import { IconCheck, IconPlus } from "@tabler/icons-svelte";
  import final_diseases from "../assets/final_diseases.json";
  export let foodType: string[];
  import food_data from "../assets/food_data.json";



  // let foodItems =

  // show the top 3 items in the list when view all is clicked show all
  let foodItems = foodType[1].slice(0, 3);
  let showAll = false;
  function toggleShowAll() {
    showAll = !showAll;
    if (showAll) {
      foodItems = foodType[1];
    } else {
      foodItems = foodType[1].slice(0, 3);
    }
  }
  // set type of final_diseases to Disease[]
  let disease = final_diseases as unknown as Disease[];

  let selectedItems: string[] = [];

  function filterFoodItemsByDiseases(
    diseases: Disease[],
    foodItems: FoodItem[]
  ): FoodItem[] {

    return foodItems.filter((foodItem) => {
      for (let i = 0; i < diseases.length; i++) {
        const disease = diseases[i];
        if (
          foodItem.Carbs > disease.Carbs ||
          foodItem.Total_Fat > disease.Total_Fat ||
          foodItem.Saturated_Fat > disease.Saturated_Fat ||
          foodItem.Protein > disease.Protein ||
          foodItem.Fiber > disease.Fiber ||
          foodItem.Cholesterol > disease.Cholesterol ||
          foodItem.Sodium > disease.Sodium ||
          foodItem.Sugar > disease.Sugar ||
          foodItem.Potassium > disease.Potassium ||
          foodItem.Magnesium > disease.Magnesium ||
          foodItem.Phosphorus > disease.Phosphorus ||
          foodItem.Vitamin_C > disease.Vitamin_C ||
          foodItem.Vitamin_A > disease.Vitamin_A ||
          foodItem.Calcium > disease.Calcium ||
          foodItem.Iron > disease.Iron ||
          foodItem.Zinc > disease.Zinc ||
          foodItem.Vitamin_E > disease.Vitamin_E ||
          foodItem.Vitamin_K > disease.Vitamin_K
        ) {
          return false;
        }
      }
      return true;
    });
  }


</script>

<li>
  <div class="flex space-x-4">
    <h3 class="text-primary text-3xl font-semibold">
      {foodType}
    </h3>
    <button
      class="underline text-xs"
      on:click={() => {
        toggleShowAll();
      }}
    >
      View all
    </button>
  </div>
  <!-- <div class="my-4">
    <ul class="flex flex-wrap">
      {#each foodItems as food}
        <li>
          <button
            on:click={() => toggleItem(food)}
            class="text-2xl font-normal rounded-xl my-2 mx-2 flex space-x-3 {selectedItems.includes(
              food
            )
              ? 'bg-primary text-white'
              : ' bg-white  text-black'} px-5 py-3"
          >
            <p>
              {food}
            </p>
            {#if selectedItems.includes(food)}
              <IconCheck
                class=" text-primary bg-white rounded-full p-1.5"
                size={32}
              />
            {/if}
            {#if !selectedItems.includes(food)}
              <IconPlus
                class=" bg-primary text-white rounded-full p-1.5"
                size={32}
              />
            {/if}
          </button>
        </li>
      {/each}
    </ul>
  </div> -->
</li>
