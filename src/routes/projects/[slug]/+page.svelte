<script lang="ts">
  // import { goto } from "$app/navigation";
  // import { onMount } from "svelte";

  export let data;

  // onMount(() => {
  //   const handleQueryChange = function (mediaQuery: MediaQueryListEvent | MediaQueryList) {
  //     if (mediaQuery.matches) {
  //       goto("/projects");
  //     }
  //   };

  //   const mediaQuery = window.matchMedia("(min-width: 1024px)");

  //   handleQueryChange(mediaQuery);

  //   mediaQuery.addEventListener("change", handleQueryChange);

  //   return () => mediaQuery.removeEventListener("change", handleQueryChange);
  // });
</script>

<main>
  <h1 class="text-4xl text-black dark:text-white">hello!</h1>
  <h1 class="text-4xl text-black dark:text-white">{data.id}</h1>
  <h1 class="text-4xl text-black dark:text-white">{data.title}</h1>
</main>
