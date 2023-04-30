<script lang="ts">  
    export let title:string;
    export let value:string;
    export let color:string;
    
</script>
<li class="flex justify-between w-full">
    <div class="h-4 w-4 mt-2 rounded-full {color==="red"?"bg-red-600":"bg-green-600"}" />

    <p class="font-semibold text-start text-2xl ml-7 mr-10">{title}</p>
    <p class="text-xl">{value} Kcal</p>
  </li>