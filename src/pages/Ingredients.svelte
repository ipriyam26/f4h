<script lang="ts">
  import SearchBar from "../lib/SearchBar.svelte";
  import Header from "../lib/Header.svelte";
  import type { FoodItem } from "../types";
  import food_items from "../assets/food_data.json";

  let foodItems = food_items as unknown as FoodItem[];
  let value: string[] = [];
</script>

<div class="mx-16">
  <Header style={false} />
  <h2 class="text-4xl font-semibold font-poppins text-black mt-36 mb-9">Add Ingredients</h2>
  <SearchBar id="lang"  bind:value>
    {#each foodItems as foodItem}
      <option value={foodItem.food_items}>{foodItem.food_items}</option>
    {/each}
  </SearchBar>
  <div class="bg-primary mt-9 py-16 rounded-3xl first-letter px-56">
    <h3 class="text-white text-4xl font-poppins font-semibold  ">
        Nutrition
    </h3>
    <ul class="flex font-poppins mt-16 justify-between">

        <li class="bg-secondary py-9 px-12 rounded-2xl ">
            <h4 class="font-semibold text-2xl text-primary">Calories</h4>
            <p class="font-semibold text-5xl mt-9 ">400</p>
        </li>
        <li class="bg-secondary py-9 px-12 rounded-2xl ">
            <h4 class="font-semibold text-2xl text-primary">Protein</h4>
            <p class="font-semibold text-5xl mt-9 ">400</p>
        </li>
  <li class="bg-secondary py-9 px-12 rounded-2xl ">
            <h4 class="font-semibold text-2xl text-primary">Carbs</h4>
            <p class="font-semibold text-5xl mt-9 ">400</p>
        </li>
        <li class="bg-secondary py-9 px-12 rounded-2xl ">
            <h4 class="font-semibold text-2xl text-primary">Fat</h4>
            <p class="font-semibold text-5xl mt-9 ">400</p>
        </li>
    </ul>
  </div>
</div>
