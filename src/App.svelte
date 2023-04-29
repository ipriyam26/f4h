<script lang="ts">
  import {
    IconCheck,
    IconCircle0Filled,
    IconPlus,
    IconSelect,
  } from "@tabler/icons-svelte";
  import Header from "./lib/Header.svelte";
  import Home from "./pages/home.svelte";
  import FoodItems from "./lib/FoodItemType.svelte";
  import FoodData from "./assets/food_data.json";
  import type { Disease, FoodItem, SelectedFoodItem } from "./types";

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

  // let filtered_food = filterFoodItemsByDiseases(disease, foodItems);
</script>

<main class="text-center">
  <Home/>
  <!-- <div
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
          <FoodItems {foodType} />
        {/each}
      </ul>
    </div>
    <div class="col-span-1 rounded-2xl shadow-xl py-16 px-14">
      <h3 class="text-3xl font-bold text-primary mx-auto mb-12">Calculator</h3>
      <ul>
        <li class="flex">
          <div class="h-4 w-4 mt-2 rounded-full bg-red-600" />

          <p class="font-semibold text-2xl ml-7 mr-10">Calories</p>
          <p class="text-xl">0.0 Kcal</p>
        </li>
        <li />
        <li />
      </ul>
    </div>
  </div>
   -->
</main>


<svelte:head>
  <!-- Fonts -->
  <link
    rel="stylesheet"
    href="https://fonts.googleapis.com/icon?family=Material+Icons"
  />
  <link
    rel="stylesheet"
    href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,600,700"
  />

  <!-- Material Typography -->
  <link
    rel="stylesheet"
    href="https://unpkg.com/@material/typography@14.0.0/dist/mdc.typography.css"
  />

  <!-- SMUI -->
  <link rel="stylesheet" href="https://unpkg.com/svelte-material-ui/bare.css" />
</svelte:head>
