<script>
  import {
    IconBrandFacebook,
    IconBrandInstagram,
    IconBrandTwitter,
  } from "@tabler/icons-svelte";

  import Newsletter from "./Newsletter.svelte";
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
  <div class="mb-5">
    <p class="font-poppins text-2xl font-normal mt-20 mb-6">Connect With Us</p>
    <ul class="flex justify-center space-x-10">
      <li>
        <IconBrandTwitter
          size={36}
          class="text-primary"
          fill="purple"
          color="purple"
        />
      </li>
      <li><IconBrandInstagram size={36} class="text-primary" /></li>
      <li><IconBrandFacebook size={36} class="text-primary" /></li>
    </ul>
  </div>
</div>
