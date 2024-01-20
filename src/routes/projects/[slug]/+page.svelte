<script lang="ts">
  import Badge from "../Badge.svelte";

  export let data;
</script>

<svelte:head>
  <title>BoilingSoup | {data.title}</title>
</svelte:head>

<main class="container mx-auto mt-8 rounded bg-slate-300 transition ease-in-out dark:bg-zinc-900">
  <!-- <h1 class="text-4xl text-black dark:text-white">hello!</h1> -->
  <!-- <h1 class="text-4xl text-black dark:text-white">{data.id}</h1> -->
  <div class="px-8 py-5">
    <h1
      class="inline-block rounded-lg bg-slate-300 py-3 text-4xl font-bold text-black transition ease-in-out dark:bg-zinc-900 dark:text-white"
    >
      {data.title}
    </h1>
    <div class="flex gap-10 py-3">
      <h2 class="text-xl text-black transition ease-in-out dark:text-white">
        Languages: {#each data.techStack.languages as language}
          <Badge color={language.color}>{language.name}</Badge>
        {/each}
      </h2>
      <h2 class="text-xl text-black transition ease-in-out dark:text-white">
        Frameworks: {#each data.techStack.frameworks as framework}
          <Badge color={framework.color}>{framework.name}</Badge>
        {/each}
      </h2>
    </div>
  </div>
  <div class="flex">
    <!-- svelte-ignore a11y-media-has-caption -->
    <video class="w-full max-w-4xl" src={data.video} title="demo" autoplay loop controls />
    <!-- <p class="whitespace-pre-wrap bg-slate-300 text-black transition ease-in-out dark:bg-zinc-900 dark:text-white"> -->
    <!--   {JSON.stringify(data)} -->
    <!-- </p> -->
  </div>
</main>

<style>
  video::-webkit-media-controls-volume-slider {
    display: none;
  }

  video::-webkit-media-controls-mute-button {
    display: none;
  }
</style>
