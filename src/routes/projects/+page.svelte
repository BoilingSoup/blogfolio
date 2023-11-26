<script lang="ts">
  import { projectData } from "$lib/projectData";
  import Carousel from "../Carousel.svelte";
  import ProjectRadioInput from "./ProjectRadioInput.svelte";
  import type { IndexData } from "./types";
  import SelectArrow from "$lib/assets/select-arrow.png";
  import { onMount } from "svelte";
  import { fade } from "svelte/transition";
  import Badge from "./Badge.svelte";

  let selectedIndex: number = 0;
  let isDesktop: boolean | undefined = undefined;

  $: selectedProject = projectData[selectedIndex];

  onMount(() => {
    if (window.innerWidth >= 1024) {
      isDesktop = true;
    } else {
      isDesktop = false;
    }

    const handleResize = function () {
      const isLargeScreen = window.innerWidth >= 1024;

      const isResizeToDesktop = isLargeScreen && isDesktop === false;
      if (isResizeToDesktop) {
        const gapHeight = 12;
        const optionsHeight = 64;

        const pxPerIndex = gapHeight + optionsHeight;

        arrow.style.transform = `translateY(${pxPerIndex * selectedIndex}px)`;
        isDesktop = true;
        return;
      }

      const isResizeToMobile = !isLargeScreen && isDesktop === true;
      if (isResizeToMobile) {
        const gapHeight = 12;
        const optionsHeight = 36;

        const pxPerIndex = gapHeight + optionsHeight;

        arrow.style.transform = `translateY(${pxPerIndex * selectedIndex}px)`;
        isDesktop = false;
        return;
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  });

  function handleChange(e: CustomEvent<IndexData>) {
    const newIndex = e.detail.index;

    let gapHeight = 12;
    let optionsHeight = 36;

    const isDesktop = window.innerWidth >= 1024;
    if (isDesktop) {
      optionsHeight = 64;
    }

    const pxPerIndex = gapHeight + optionsHeight;

    arrow.style.transform = `translateY(${pxPerIndex * newIndex}px)`;

    selectedIndex = newIndex;
  }

  let arrow: HTMLImageElement;
</script>

<main class="max-w-8xl mx-auto h-[calc(100%-theme(space.14))] transition ease-in-out dark:text-white dark:ease-in-out">
  <div class="flex h-full w-full flex-col-reverse items-center transition ease-in-out lg:flex-row">
    <div class="mx-auto h-72 w-full items-center justify-center bg-slate-300 pb-4 dark:bg-zinc-700/70">
      <p class="my-4 text-center font-bold">Select a project to view its details:</p>
      <form class="relative mx-auto flex w-3/4 flex-col justify-center gap-[12px] lg:w-1/2">
        <img
          bind:this={arrow}
          class="duration-400 absolute left-[-41px] top-0 h-9 transition lg:top-[13px]"
          alt="arrow currently selecting {projectData[selectedIndex].title}"
          src={SelectArrow}
        />
        {#each projectData as post, i}
          <ProjectRadioInput on:change={handleChange} {i} title={post.title} />
        {/each}
      </form>
    </div>
    <div class="mx-4 mt-4 h-full">
      <Carousel loop={true} data={selectedProject.carousel} dots={true} delay={5000} classes="m-4 rounded" autoplay={true} />
      <div class="rounded bg-slate-300 p-4 text-black transition ease-in-out dark:bg-zinc-900/80 dark:text-white">
        {#key selectedProject}
          <h1 class="text-2xl" in:fade={{ duration: 500 }}>
            {selectedProject.title}
          </h1>
        {/key}
        <h2 class="mt-2 text-gray-600">
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
      {#key selectedProject}
        <div
          class="animate-fade h-60 overflow-auto rounded bg-slate-300 p-4 text-black transition ease-in-out dark:bg-zinc-900 dark:text-white"
        >
          <h2 class="mb-4 text-xl font-bold">About</h2>
          {@html selectedProject.description}
        </div>
      {/key}
    </div>
  </div>
</main>
