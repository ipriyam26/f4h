<script lang="ts">
  // import logo from "";
export let style:boolean = false ;

</script>

<nav class="{style?"bg-transparent":"bg-secondary"} pt-12">
  <div class="max-w-screen-xl flex flex-wrap items-center justify-between">
    {#if style}

    <img class="w-20 h-9"  alt=""  src="assets/logow.svg"/>
    {:else}
    <img class="w-20 h-9"  alt=""  src="assets/logo.svg"/>
{/if}
    <div class="hidden w-full md:block md:w-auto" id="navbar-default">
      <ul class=" flex font-normal {style?"text-white":"text-black"} space-x-16 font-poppins">
        <li>
          <a href="#" class="" aria-current="page">Create Meal</a>
        </li>
        <li>
          <a href="#" class="">About Us</a>
        </li>
        <li>
          <button class="{
          style?"bg-secondary text-primary":"bg-primary text-white"} px-9 py-4 rounded-full font-bold -mt-4">
            <a href="#" >Create Diet Plan</a>
          </button>
        </li>
      </ul>
    </div>
  </div>
</nav>
