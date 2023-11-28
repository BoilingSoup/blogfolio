<script lang="ts">
  import { projectData } from "$lib/projectData";
  import Carousel from "../Carousel.svelte";
  import ProjectRadioInput from "./ProjectRadioInput.svelte";
  import type { IndexData } from "./types";
  import SelectArrow from "$lib/assets/select-arrow.png";
  import Badge from "./Badge.svelte";
  import { writable } from "svelte/store";

  let arrowRef: HTMLImageElement;

  let selectedIndex = writable<number>(0);
  $: selectedProject = projectData[$selectedIndex];

  function handleChange(e: CustomEvent<IndexData>) {
    const newIndex = e.detail.index;

    const gapHeight = 12;
    const selectOptionHeight = 96;

    const pxPerIndex = gapHeight + selectOptionHeight;

    arrowRef.style.transform = `translateY(${pxPerIndex * newIndex}px)`;

    $selectedIndex = newIndex;
  }
</script>

<main class="mx-auto transition ease-in-out dark:text-white dark:ease-in-out lg:h-[calc(100%-theme(space.14))]">
  <div class="relative flex h-full w-full flex-col-reverse items-center transition ease-in-out lg:flex-row">
    <div class="mx-auto hidden w-full flex-col items-center justify-center bg-slate-300 p-4 dark:bg-zinc-900/70 lg:flex">
      <p class="mb-4 text-center text-xl font-bold text-black transition ease-in-out dark:text-white">
        Select a project to view its details:
      </p>
      <form class="max-w-8 relative mx-auto flex h-full w-1/2 flex-col gap-[12px] lg:w-1/2">
        <img
          bind:this={arrowRef}
          class="duration-400 absolute left-[-41px] top-[28px] h-9 transition"
          alt="arrow currently selecting {projectData[$selectedIndex].title}"
          src={SelectArrow}
        />
        {#each projectData as post, i}
          <ProjectRadioInput on:change={handleChange} {i} title={post.title} />
        {/each}
      </form>
    </div>
    <div class="mx-1 mt-1 hidden h-full w-full flex-col justify-evenly lg:flex">
      <div class="rounded bg-slate-300 p-4 text-black transition ease-in-out dark:bg-zinc-900/80 dark:text-white">
        <!-- {#key selectedProject} -->
        <!--   <h1 class="text-2xl" in:fade={{ duration: 500 }}> -->
        <!--     {selectedProject.title} -->
        <!--   </h1> -->
        <!-- {/key} -->
        <h2 class="text-gray-600">
          {#key selectedProject}
            Languages: {#each selectedProject.languages as lang}<Badge color={lang.color}>{lang.name}</Badge>{/each}
          {/key}
        </h2>
        <h2 class="text-gray-600">
          {#key selectedProject}
            Frameworks: {#each selectedProject.frameworks as framework}<Badge color={framework.color}>{framework.name}</Badge>{/each}
          {/key}
        </h2>
      </div>
      <Carousel loop={true} data={selectedProject.carousel} dots={true} delay={5000} classes="m-1 rounded" autoplay={true} />
      <div
        class="relative flex-grow animate-fade overflow-auto rounded bg-slate-300 p-4 text-black transition ease-in-out dark:bg-zinc-900 dark:text-white"
      >
        {#key selectedProject}
          <!-- <h2 class="mb-4 text-xl font-bold">About</h2> -->
          <p class="absolute animate-fade transition ease-in-out">{@html selectedProject.description}</p>
        {/key}
      </div>
    </div>
  </div>
</main>
