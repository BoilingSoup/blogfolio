<script lang="ts">
  import { getProjectIndex, projectData, projectList } from "$lib/projectData";
  import ProjectRadioInput from "./ProjectRadioInput.svelte";
  import type { IndexData } from "./types";
  import SelectArrow from "$lib/assets/select-arrow.png";
  import { selectedProjectStore } from "$lib";
  import Badge from "./Badge.svelte";
  import Carousel from "../Carousel.svelte";
  import { onMount } from "svelte";

  export let onchange: () => void;

  let arrowRef: HTMLImageElement;

  onMount(() => {
    const gapHeight = 12;
    const selectOptionHeight = 96;

    const pxPerIndex = gapHeight + selectOptionHeight;

    arrowRef.style.transform = `translateY(${pxPerIndex * getProjectIndex($selectedProjectStore.id)}px)`;
  });

  function handleChange(e: CustomEvent<IndexData>) {
    const newIndex = e.detail.index;

    const gapHeight = 12;
    const selectOptionHeight = 96;

    const pxPerIndex = gapHeight + selectOptionHeight;

    arrowRef.style.transform = `translateY(${pxPerIndex * newIndex}px)`;

    $selectedProjectStore = projectData[projectData.order[newIndex]];
    onchange();
  }
</script>

<div class="relative hidden h-full w-full flex-col-reverse items-center transition ease-in-out lg:flex lg:flex-row">
  <div class="mx-auto flex w-full flex-col items-center justify-center p-4 transition ease-in-out">
    <p class="mb-4 text-center text-xl font-bold text-black transition ease-in-out dark:text-white">
      Select a project to view its details:
    </p>
    <form class="max-w-8 relative mx-auto flex h-full w-1/2 flex-col gap-[12px] lg:w-1/2">
      <img
        bind:this={arrowRef}
        class="duration-400 absolute left-[-41px] top-[28px] h-9 transition"
        alt="arrow currently selecting {$selectedProjectStore.title}"
        src={SelectArrow}
      />
      {#each projectList as post, i}
        <ProjectRadioInput on:change={handleChange} {i} title={post.title} />
      {/each}
    </form>
  </div>
  <div class="mx-1 mt-1 hidden h-full w-full flex-col justify-evenly lg:flex">
    <div class="rounded bg-slate-300 p-4 text-black transition ease-in-out dark:bg-zinc-900/80 dark:text-white">
      {#key $selectedProjectStore}
        <h1 class="animate-fade text-2xl text-black transition ease-in-out dark:text-white">
          {$selectedProjectStore.title}
        </h1>
      {/key}
      <h2 class="text-gray-600">
        {#key $selectedProjectStore}
          Languages: {#each $selectedProjectStore.languages as lang}<Badge color={lang.color}>{lang.name}</Badge>{/each}
        {/key}
      </h2>
      <h2 class="text-gray-600">
        {#key $selectedProjectStore}
          Frameworks: {#each $selectedProjectStore.frameworks as framework}<Badge color={framework.color}>{framework.name}</Badge>{/each}
        {/key}
      </h2>
    </div>
    <Carousel loop={true} data={$selectedProjectStore.carousel} dots={true} delay={5000} classes="m-1 rounded" autoplay={true} />
    <div
      class="relative flex-grow animate-fade overflow-auto rounded bg-slate-300 p-4 text-black transition ease-in-out dark:bg-zinc-900 dark:text-white"
    >
      {#key $selectedProjectStore}
        <h2 class="mb-4 text-xl font-bold">About</h2>
        <p class="absolute animate-fade text-black transition ease-in-out dark:text-white">{@html $selectedProjectStore.description}</p>
      {/key}
    </div>
  </div>
</div>
