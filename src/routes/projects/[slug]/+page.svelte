<script lang="ts">
  export let data;
</script>

<svelte:head>
  <title>BoilingSoup | {data.title}</title>
</svelte:head>

<main>
  <h1 class="text-4xl text-black dark:text-white">hello!</h1>
  <h1 class="text-4xl text-black dark:text-white">{data.id}</h1>
  <h1 class="text-4xl text-black dark:text-white">{data.title}</h1>
</main>
