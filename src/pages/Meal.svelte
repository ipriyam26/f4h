<script lang="ts">
  import Cal from "./../lib/Cal.svelte";
  import Header from "../lib/Header.svelte";
  import FoodItemType from "../lib/FoodItemType.svelte";
  import type { Disease, FoodItem, SelectedFoodItem } from "../types";
  import { userInfo } from "../store/disease";
  import FoodData from "../assets/food_data.json";
  import CalorieCount from "../lib/CalorieCount.svelte";
  // export let disease: Disease[] = [];
  let currentlySelected: string = "Breakfast";
  let foodItems = FoodData as unknown as FoodItem[];
  function changeSelected(index: string) {
    currentlySelected = index;
  }

  const mealTime = ["Breakfast", "Lunch", "Snacks", "Dinner"];
  function findValidCategories(isNonVeg: boolean) {
    const categoriesVeg = {
      Breakfast: [
        "Breakfast grains",
        "Fruits",
        "Vegetables",
        "Protien",
        "Healthy Fats",
        "Breads",
        "Juice",
        "Indian bread",
        "Tea & Coffee",
      ],
      Lunch: [
        "Grains",
        "Indian bread",
        "Vegetables",
        "Salads",
        "Healthy Fats",
        "Soup",
        "Dairy",
      ],
      Snacks: [
        "Tea & Coffee",
        "Sandwich",
        "Nuts & Seeds",
        "Fruits",
        "Beverages",
        "Juice",
      ],
      Dinner: [
        "Grains",
        "Indian bread",
        "Vegetables",
        "Salads",
        "Healthy Fats",
        "Soup",
        "Dairy",
      ],
    };
    const categoriesNonVeg = {
      Breakfast: [
        "Breakfast grains",
        "Fruits",
        "Vegetables",
        "Non-veg Protien",
        "Protien",
        "Healthy Fats",
        "Breads",
        "Juice",
        "Indian bread",
        "Tea & Coffee",
      ],
      Lunch: [
        "Grains",
        "Indian bread",
        "Vegetables",
        "Salads",
        "Healthy Fats",
        "Soup",
        "Dairy",
        "Meat",
        "Non-veg Salads",
        "Non-veg Soup",
      ],
      Snacks: [
        "Tea & Coffee",
        "Sandwich",
        "Nuts & Seeds",
        "Fruits",
        "Beverages",
        "Juice",
        "Non-veg Sandwich",
      ],
      Dinner: [
        "Grains",
        "Indian bread",
        "Vegetables",
        "Salads",
        "Healthy Fats",
        "Soup",
        "Dairy",
        "Meat",
        "Non-veg Salads",
        "Non-veg Soup",
      ],
    };
    return isNonVeg ? categoriesNonVeg : categoriesVeg;
  }

  const validCategories = findValidCategories(false);

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

  let filteredFood = filterFoodItemsByDiseases($userInfo.disease, foodItems);
</script>

<div
  class="	bg-no-repeat bg-cover bg-center
bg-[url('../assets/ellipse.svg')] pb-28 px-32"
>
  <Header style={true} />

  <h1 class="text-5xl font-semibold text-white mt-36">
    Recommended Diet Plans
  </h1>
</div>
<div class="my-24 font-poppins">
  <ul class="flex space-x-36 justify-center">
    {#each mealTime as meal, _}
      <li>
        <button
          on:click={() => changeSelected(meal)}
          class="{currentlySelected == meal
            ? 'bg-primary text-white font-semibold'
            : 'bg-gray-300 text-black font-normal'}  text-2xl px-4 py-3 rounded-xl"
        >
          {meal}
        </button>
      </li>
    {/each}
  </ul>
</div>
<div class="font-poppins grid grid-cols-3 space-x-6 mx-32">
  <div class="col-span-2 rounded-2xl shadow-xl py-16 px-24">
    <ul>
      {#each validCategories[currentlySelected] as foodType}
        <FoodItemType {foodType} {filteredFood} {currentlySelected} />
      {/each}
    </ul>
  </div>
<CalorieCount foodType={currentlySelected}/>
  <!-- <ul>
    {#each filteredFood as fil}
        <li>{fil.food_items}</li>
    {/each}
  </ul> -->
</div>
