<script lang="ts">
  import SearchBar from "../lib/SearchBar.svelte";
  import Header from "../lib/Header.svelte";
  import type { FoodItem } from "../types";
  import SelectedList from "../lib/SelectedList.svelte";
  import food_items from "../assets/food_data.json";
  import Footer from "../lib/Footer.svelte";

  let foodItems = food_items as unknown as FoodItem[];
  let value: string[] = [];

  // function to find element in array value matching foodItems.food_items
  let selectedFoods: FoodItem[] = [];
  $: selectedFoods = value.map((v) =>
    foodItems.find((f) => f.food_items === v)
  );

//   export interface FoodItem {
//   food_items: string;
//   Avg_Serving_Size: number;
//   Calories: number;
//   Category: string;
//   Carbs: number;
//   Total_Fat: number;
//   Saturated_Fat: number;
//   Protein: number;
//   Fiber: number;
//   Cholesterol: number;
//   Sodium: number;
//   Sugar: number;
//   Potassium: number;
//   Magnesium: number;
//   Phosphorus: number;
//   Vitamin_C: number;
//   Vitamin_A: number;
//   Calcium: number;
//   Iron: number;
//   Zinc: number;
//   Vitamin_E: number;
//   Vitamin_K: number;
// }

let displayItems=['Calories','Protein','Carbs','Total_Fat']
let keys =['Calories','Protein','Carbs','Total_Fat','Saturated_Fat','Fiber','Cholesterol','Sodium','Sugar','Potassium','Magnesium','Phosphorus','Vitamin_C','Vitamin_A','Calcium','Iron','Zinc','Vitamin_E','Vitamin_K'] 
let showItems = false;
let selectedLine = "Detailed Nutrition";
// function that changes the displayItems array to show all the keys in the foodItems array and vice versa
function toggleDisplayItems(){
  if(showItems){
    displayItems=['Calories','Protein','Carbs','Total_Fat'];
    showItems=false;
    selectedLine="Detailed Nutrition";
  }else{
    displayItems=keys;
    showItems=true;
    selectedLine="See Only Macro Nutrients"
  }
}

</script>

<div class="mx-16">
  <Header style={false} />
  <h2 class="text-4xl font-semibold font-poppins text-black mt-36 mb-9">
    Add Ingredients
  </h2>
  <SearchBar id="lang" bind:value>
    {#each foodItems as foodItem}
      <option value={foodItem.food_items}>{foodItem.food_items}</option>
    {/each}
  </SearchBar>
  <div class="bg-primary mt-9 py-16 rounded-3xl first-letter px-36 ">
    <h3 class="text-white text-4xl font-poppins font-semibold">Nutrition</h3>
    <ul class="flex-wrap flex font-poppins mt-16 justify-between">
      {#each displayItems as displayItem}
   
        <li class="bg-secondary w-52 h-52 py-9  mt-8 rounded-2xl">
          <h4 class="font-semibold text-2xl text-primary">{
            displayItem.replaceAll('_',' ')
            }</h4>
          <p class="font-semibold text-5xl text-center mt-9">{
            selectedFoods.reduce((acc, food) => acc + food[displayItem], 0).toFixed(2)
            }</p>
        </li>
      {/each}
     
      <!-- <li class="bg-secondary py-9 px-12 rounded-2xl">
        <h4 class="font-semibold text-2xl text-primary">Protein</h4>
        <p class="font-semibold text-5xl mt-9">{
          selectedFoods.reduce((acc, food) => acc + food.Protein, 0).toFixed(2)
          }g</p>
      </li>
      <li class="bg-secondary py-9 px-12 rounded-2xl">
        <h4 class="font-semibold text-2xl text-primary">Carbs</h4>
        <p class="font-semibold text-5xl mt-9">{
          selectedFoods.reduce((acc, food) => acc + food.Carbs, 0).toFixed(2)
          }g</p>
      </li>
      <li class="bg-secondary py-9 px-12 rounded-2xl">
        <h4 class="font-semibold text-2xl text-primary">Fat</h4>
        <p class="font-semibold text-5xl mt-9">{
          selectedFoods.reduce((acc, food) => acc + food.Total_Fat, 0).toFixed(2)
          }g</p>
      </li> -->
    </ul>
    <button
    on:click={toggleDisplayItems}
    class="mt-12 underline text-white font-poppins text-2xl ">
{selectedLine}
  </button>
   
  </div>

  <div class="mt-16 w-full bg-white p-12 rounded-2xl">
    <ul class="flex justify-between ">
      <li>
        <ul>
          <li class="text-primary font-poppins font-semibold text-2xl mb-11">
            Ingredients
          </li>
          {#each selectedFoods as food}
            <li class="font-poppins font-medium text-2xl text-black mb-11 ">
              {food.food_items}
            </li>
          {/each}
        </ul>
      </li>
      <li>
        <ul>
          <li class="text-black font-poppins font-semibold text-2xl mb-11">
           Weight 
          </li>
          {#each selectedFoods as food}
            <li class="font-poppins font-medium text-2xl text-black mb-11">
              {food.Avg_Serving_Size}
            </li>
          {/each}
        </ul>
      </li>
      <li>
        <ul>
          <li class="text-black font-poppins font-normal text-2xl mb-11">
           Calories 
          </li>
          {#each selectedFoods as food}
            <li class="font-poppins font-medium text-2xl text-black mb-11">
              {food.Calories}
            </li>
          {/each}
        </ul>
      </li>
      <li>
        <ul>
          <li class="text-black font-poppins font-normal text-2xl mb-11">
           Protein 
          </li>
          {#each selectedFoods as food}
            <li class="font-poppins font-medium text-2xl text-black mb-11">
              {food.Protein}
            </li>
          {/each}
        </ul>
      </li>
      <li>
        <ul>
          <li class="text-black font-poppins font-normal text-2xl mb-11">
           Carbs 
          </li>
          {#each selectedFoods as food}
            <li class="font-poppins font-medium text-2xl text-black mb-11">
              {food.Carbs}
            </li>
          {/each}
        </ul>
      </li><li>
        <ul>
          <li class="text-black font-poppins font-normal text-2xl mb-11">
           Fat 
          </li>
          {#each selectedFoods as food}
            <li class="font-poppins font-medium text-2xl text-black mb-11">
              {food.Total_Fat}
            </li>
          {/each}
        </ul>
      </li>
      <li>
        <ul>
          <li class="text-white font-poppins font-normal text-2xl mb-11">
          hello
          </li>
          {#each selectedFoods as food}
            <li class="mb-9"  >
              <button 
              class="font-poppins text-base font-medium bg-[#FF8787] px-5 py-2 rounded-full "
              on:click="{()=>{
                // remove food from selectedFoods
                selectedFoods = selectedFoods.filter((f) => f.food_items !== food.food_items);
              }}">
                Remove

              </button>
            </li>
          {/each}
        </ul>
      </li>

    </ul>
  </div>

  <Footer />
</div>
