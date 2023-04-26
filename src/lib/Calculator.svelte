<script>
  import TextField from "./TextField.svelte";
  import Select from "./Select.svelte";
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
</script>

<div>
  <img src="src/assets/wave.svg" alt="sin wave" />
  <div class="bg-primary py-16 px-56">
    <h2 class="text-6xl font-bold text-white">Calculator</h2>
    <div class="py-36 space-y-16">
      <div class="flex w-full space-x-6 justify-between">
        <TextField label="Age" width="" />
        <TextField label="Height (cm)" width="" />
        <TextField label="Weight (kg)" width="" />
      </div>
      <div class="flex w-full space-x-6 justify-between">
        <Select items={gender} label="Gender" width="w-4/12" />
        <Select
          items={exercise}
          label="How much you exercise?"
          width="w-8/12"
        />
      </div>
      <div class="flex w-full space-x-6 justify-between">
        <Select items={veg} label="Veg/Nonveg" width="w-4/12" />
        <TextField label="Any Disease" width="w-8/12" />
      </div>
      <button
        class="bg-white text-primary w-full h-24 rounded-lg font-poppins font-semibold text-2xl"
        >Create Diet Plan</button
      >
    </div>
  </div>
</div>
