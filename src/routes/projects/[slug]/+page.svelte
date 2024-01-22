<script lang="ts">
  import Badge from "../Badge.svelte";

  export let data;
</script>

<svelte:head>
  <title>BoilingSoup | {data.title}</title>
</svelte:head>

<main class="mx-auto mt-8 rounded bg-slate-300 transition ease-in-out lg:container dark:bg-zinc-900">
  <!-- <h1 class="text-4xl text-black dark:text-white">hello!</h1> -->
  <!-- <h1 class="text-4xl text-black dark:text-white">{data.id}</h1> -->
  <div class="px-8 py-5">
    <h1
      class="relative rounded-lg bg-slate-300 py-3 text-center text-4xl font-bold text-black transition ease-in-out dark:bg-zinc-900 dark:text-white"
    >
      {data.title}
      <a href={data.url} class="absolute right-0 border px-6 py-4 text-base" target="_blank">Visit Site</a>
    </h1>
    <div class="flex flex-col justify-center gap-4 py-3 lg:flex-row lg:gap-10">
      <h2 class="text-black transition ease-in-out dark:text-white lg:text-xl">
        Languages: {#each data.techStack.languages as language}
          <Badge color={language.color}>{language.name}</Badge>
        {/each}
      </h2>
      <h2 class="text-black transition ease-in-out dark:text-white lg:text-xl">
        Frameworks: {#each data.techStack.frameworks as framework}
          <Badge color={framework.color}>{framework.name}</Badge>
        {/each}
      </h2>
      <div class="flex gap-2">
        <h2 class="text-black transition ease-in-out dark:text-white lg:text-xl">Source Code:</h2>
        {#if data.source.public}
          <ul class="list-none">
            {#each data.source.urls as link}
              <li><a class="text-blue-700 underline transition ease-in-out dark:text-blue-400" target="_blank" href={link}>{link}</a></li>
            {/each}
          </ul>
        {:else}
          <Badge color="bg-gray-700">Private</Badge>
        {/if}
      </div>
      <!-- <h2 class="text-xl text-black transition ease-in-out dark:text-white"> -->
      <!--   Live URL: <a class="text-base text-blue-700 underline transition ease-in-out dark:text-blue-400" href={data.url} target="_blank" -->
      <!--     >{data.url}</a -->
      <!--   > -->
      <!-- </h2> -->
    </div>
  </div>
  <div class="flex w-full px-8 py-8">
    <p class="w-1/2 whitespace-pre-wrap bg-slate-300 text-black transition ease-in-out dark:bg-zinc-900 dark:text-white">
      {JSON.stringify(data)}
    </p>
    <!-- svelte-ignore a11y-media-has-caption -->
    <video class="w-1/2 max-w-4xl" src={data.video} title="demo" loop controls />
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
