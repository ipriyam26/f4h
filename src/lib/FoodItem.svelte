<script lang="ts">

  import type { Disease, FoodItem } from "../types";
  import { IconCheck, IconPlus } from "@tabler/icons-svelte";

  export let category: string = "Breakfast";
  export let filtered_food:FoodItem[] = [];

    function filterFoodItemsByCategory(
        category: string,
        foodItems: FoodItem[]
    ): FoodItem[] {
        return foodItems.filter((foodItem) => {
        return foodItem.Category === category;
        });
    }
    let selectedItems:FoodItem[] = []
      function toggleItem(item: FoodItem) {
      if (selectedItems.includes(item)) {
        selectedItems = selectedItems.filter((i) => i !== item);
      } else {
        selectedItems = [...selectedItems, item];
      }
  }
  let foodItems = filterFoodItemsByCategory(category, filtered_food);
</script>

 <div class="my-4">
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
  </div>