<script>
  import {
    IconBrandFacebook,
    IconBrandInstagram,
    IconBrandTwitter,
  } from "@tabler/icons-svelte";
</script>

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
