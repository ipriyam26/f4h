<script lang="ts">
  import { IconBrandFacebook, IconBrandInstagram, IconBrandTwitter, IconChevronRight } from "@tabler/icons-svelte";
  import Calculator from "./lib/Calculator.svelte";
  import FaQs from "./lib/FAQs.svelte";
  import Header from "./lib/Header.svelte";
  import Landing from "./lib/Landing.svelte";
  import Newsletter from "./lib/Newsletter.svelte";
  import Footer from "./lib/Footer.svelte";
</script>

<main class="text-center">
  <div class=" mx-16">
    <Header />
    <Landing />
  </div>
  <Calculator />
  <div>
    <FaQs />
   <Footer/> 
  </div>
</main>

<style>
</style>
