<script>
  import Newsletter from "./Newsletter.svelte";
  import Connect from "./Connect.svelte";
</script>

<div class="mt-96">
  <img src="assets/logo.svg" alt="Logo again" class="w-36 h-16 mx-auto" />
  <div>
    <ul class="flex font-poppins text-sm space-x-36 justify-center my-14">
      <li>
        <a href="/"> Create Meal </a>
      </li>
      <li>
        <a href="/"> Create Diet Plan </a>
      </li>
      <li>
        <a href="/"> About Us </a>
      </li>
    </ul>
  </div>
  <Newsletter />
 <Connect/> 
</div>
