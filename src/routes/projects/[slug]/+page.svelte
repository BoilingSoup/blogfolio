<script lang="ts">
  import Carousel from "../../Carousel.svelte";

  export let data;
</script>

<svelte:head>
  <title>BoilingSoup | {data.title}</title>
</svelte:head>

<main class="container mx-auto mt-8">
  <!-- <h1 class="text-4xl text-black dark:text-white">hello!</h1> -->
  <!-- <h1 class="text-4xl text-black dark:text-white">{data.id}</h1> -->
  <div class="flex items-center justify-center">
    <h1
      class="inline-block rounded-lg bg-slate-300 px-8 py-5 text-center text-4xl text-black transition ease-in-out dark:bg-zinc-900 dark:text-white"
    >
      {data.title}
    </h1>
  </div>
  <div class="flex">
    <Carousel data={data.carousel} />
    <div class="bg-slate-300 text-black transition ease-in-out dark:bg-zinc-900 dark:text-white">fwefwefwef</div>
  </div>
</main>
