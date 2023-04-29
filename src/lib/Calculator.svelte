<script lang="ts">
  import { userInfo } from "../store/disease";
  import MultiSelect from "./MultiSelect.svelte";
  import TextField from "./TextField.svelte";
  import Select from "./Select.svelte";
  import DiseaseData from "../assets/final_diseases.json";
  import type { Disease } from "src/types";

  let diseases = DiseaseData as unknown as Disease[];
  let gender = ["Male", "Female", "Other"];
  let exercise = [
    "Little or no exercise",
    "Exercise 1-3 times/week",
    "Intense Exercise daily",
    "Intense Exercise 6-7 times/week",
    "Exercise or Intense Exercise 3-4 times/week",
    "Exercise 4-5 times/week",
  ];
  let veg = ["Vegetarian", "Non-Vegetarian"];
  let selectedDiseases: string[] = [];
  let age: number;
  let height: number;
  let weight: number;
  let genderIndex: string;
  let exerciseIndex: string;
  let vegIndex: string;

  // create a function that store diseaes in the store variable
  function getDiseases() {
    // find all the selected diseases whoes name matchs with the selectedDiseases array
    let selectedDiseasesData: Disease[] = diseases.filter((disease) =>
      selectedDiseases.includes(disease.Disease)
    );

    return selectedDiseasesData;
  }

  function store() {
    userInfo.set({
      age: age,
      height: height,
      weight: weight,
      activity: exerciseIndex,
      gender: genderIndex,
      veg_nonveg: vegIndex,
      disease: getDiseases(),
    });
  }
</script>

<div>
  <img src="src/assets/wave.svg" alt="sin wave" />
  <div class="bg-primary py-16 px-56">
    <h2 class="text-6xl font-bold text-white">Calculator</h2>
    <div class="py-36 space-y-16">
      <div class="flex w-full space-x-6 justify-between">
        <TextField label="Age" width="" bind:value={age} />
        <TextField label="Height (cm)" width="" bind:value={height} />
        <TextField label="Weight (kg)" width="" bind:value={weight} />
      </div>
      <div class="flex w-full space-x-6 justify-between">
        <Select
          items={gender}
          label="Gender"
          width="w-4/12"
          bind:value={genderIndex}
        />
        <Select
          items={exercise}
          label="How much you exercise?"
          width="w-8/12"
          bind:value={exerciseIndex}
        />
      </div>
      <div class="flex w-full space-x-6 justify-between">
        <Select
          items={veg}
          label="Veg/Nonveg"
          width="w-4/12"
          bind:value={vegIndex}
        />
        <!-- <div> -->

        <MultiSelect id="lang" bind:value={selectedDiseases}>
          {#each diseases as disease}
            <option value={disease.Disease}>{disease.Disease}</option>
          {/each}
        </MultiSelect>
        <!-- </div> -->
        <!-- <TextField label="Any Disease" width="w-8/12" /> -->
      </div>
      <button
        class="bg-white text-primary w-full h-24 rounded-lg font-poppins font-semibold text-2xl"
        on:click={store}
        >Create Diet Plan</button
      >
    </div>
    <div>
      <p>
        {#each $userInfo.disease as disease}
      <p>
        {disease.Disease}

      </p>
        {/each}
      </p>
    </div>
  </div>
</div>
