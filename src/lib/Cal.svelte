<script lang="ts">  
    export let title:string;
    export let value:string;
</script>
<li class="flex justify-between w-full">
    <div class="h-4 w-4 mt-2 rounded-full bg-red-600" />

    <p class="font-semibold text-start text-2xl ml-7 mr-10">{title}</p>
    <p class="text-xl">{value} Kcal</p>
  </li>