<script lang="ts">
	import { createMeal } from './store/create';


  import Home from "./pages/home.svelte";
  import Meal from './pages/Meal.svelte';



  // let filtered_food = filterFoodItemsByDiseases(disease, foodItems);
</script>

<main class="text-center">
  <!-- <p>
    {$createMeal.create}
  </p> -->
  {#if $createMeal.create}
  <Meal/>
  {:else}
  <Home/>
  {/if}
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
