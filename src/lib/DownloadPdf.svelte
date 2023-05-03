<script>

  import { IconDownload } from "@tabler/icons-svelte";
  import { downloadDataAsPDF } from "../Download";
  import { selectedBreakfast, selectedDinner, selectedLunch, selectedSnacks } from "../store/selectedFood";

</script>
<div class="mt-24">
    <button
    on:click={() => {
      downloadDataAsPDF([
        $selectedBreakfast,
        $selectedLunch,
        $selectedSnacks,
        $selectedDinner,
      ]);
    }}
    class="flex space-x-3 py-4 px-6 font-poppins  bg-white mx-auto rounded-xl">
      <div class="bg-primary p-1.5 rounded-full">
        <IconDownload color="white" stroke={3}/>
      </div>
      <p class="text-primary font-semibold text-2xl">Download as PDF</p>
    </button>
  </div>