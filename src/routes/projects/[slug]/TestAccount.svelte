<script lang="ts">
  import type { projectData, IDs } from "$lib/projectData";

  export let testAccount: Exclude<(typeof projectData)[IDs[number]]["testAccount"], undefined>;
  export let classes: string | undefined = undefined;
</script>

<div
  class="{classes} max-w-96 rounded-md border border-gray-700 bg-blue-800/30 pb-4 text-black transition ease-in-out dark:border-gray-500 dark:bg-blue-500/20 dark:text-white"
>
  <h2 class="my-4 text-center text-lg font-bold">Test Account</h2>
  <ul class="ml-8 list-none font-bold [&>li]:my-2 [&>li]:first:mt-0">
    <li>
      <span class="inline-block w-[14ch]">Email:</span>
      {testAccount.email}
    </li>
    <li>
      <span class="inline-block w-[14ch]">Password:</span>
      {testAccount.password}
    </li>
  </ul>
</div>
