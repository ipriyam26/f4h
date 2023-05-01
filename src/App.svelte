<script lang="ts">
	import { createMeal } from './store/create';


  // import Home from "$lib/pages/Home.svelte";
  import Meal from './pages/Meal.svelte';
  import Ingredients from './pages/Ingredients.svelte';
  import About from './pages/About.svelte';



  // let filtered_food = filterFoodItemsByDiseases(disease, foodItems);
</script>

<main class="text-center">
  <!-- {#if $createMeal.create==1}
  <Home/> -->
  {#if $createMeal.create==2}
  <Meal/>
  {:else if $createMeal.create==3}
  <Ingredients/>
  {:else}
  <About/>
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
