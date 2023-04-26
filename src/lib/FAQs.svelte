<script>
  import { AccordionItem, Accordion } from 'flowbite-svelte'
</script>

<h3 class="text-6xl font-poppins font-bold mt-36 mb-16">
    FAQs
  </h3>

  <Accordion flush>
    <AccordionItem>
      <span slot="header">Header 2-1</span>
      <p class="mb-2 text-gray-500 dark:text-gray-400">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo ab necessitatibus sint explicabo ...</p>
    </AccordionItem>
    <AccordionItem>
      <span slot="header">Header 2-2</span>
      <p class="mb-2 text-gray-500 dark:text-gray-400">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo ab necessitatibus sint explicabo ...</p>
    </AccordionItem>
  </Accordion>