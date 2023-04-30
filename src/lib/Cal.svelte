<script lang="ts">  
    export let title:string;
    export let value:string;
    export let color:string = "yellow";
    export let unit:string; 
    let bgcolor= "bg-yellow-500";

 $:   if (color == "yellow") {
      bgcolor = "bg-yellow-500";
    } else if (color == "green") {
      bgcolor = "bg-green-500";
    } else {
      bgcolor = "bg-red-500";
    }
</script>
<li class="flex justify-between w-full">
    <div class="h-4 w-4 mt-2 rounded-full {bgcolor}" />
    <p class="font-semibold text-start text-2xl ml-7 mr-10">{title}</p>
    <p class="text-xl">{value} {unit}</p>
  </li>