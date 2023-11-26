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
  let breakpoint: "xs" | "lg" | "xl" | undefined = undefined;

  $: selectedProject = projectData[selectedIndex];

  onMount(() => {
    if (window.innerWidth >= 1024) {
      breakpoint = "xl";
    } else if (window.innerWidth >= 640) {
      breakpoint = "lg";
    } else {
      breakpoint = "xs";
    }

    const handleResize = function () {
      const isXL = window.innerWidth >= 1024;

      const isResizeToXL = isXL && breakpoint !== "xl";
      if (isResizeToXL) {
        const gapHeight = 12;
        const optionsHeight = 64;

        const pxPerIndex = gapHeight + optionsHeight;

        arrow.style.transform = `translateY(${pxPerIndex * selectedIndex}px)`;
        breakpoint = "xl";
        return;
      }

      const isLG = window.innerWidth >= 640 && window.innerWidth < 1024;
      const isResizeToLG = isLG && breakpoint !== "lg";
      if (isResizeToLG) {
        const gapHeight = 12;
        const optionsHeight = 36;

        const pxPerIndex = gapHeight + optionsHeight;

        arrow.style.transform = `translateY(${pxPerIndex * selectedIndex}px)`;
        breakpoint = "lg";
        return;
      }

      const isXS = window.innerWidth < 640;
      const isResizeToXS = isXS && breakpoint !== "xs";
      if (isResizeToXS) {
        const gapHeight = 12;
        const optionsHeight = 24;

        const pxPerIndex = gapHeight + optionsHeight;

        arrow.style.transform = `translateY(${pxPerIndex * selectedIndex}px)`;
        breakpoint = "xs";
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

    const isXL = window.innerWidth >= 1024;
    const isXS = window.innerWidth < 640;

    if (isXL) {
      optionsHeight = 64;
    } else if (isXS) {
      optionsHeight = 24;
    }

    const pxPerIndex = gapHeight + optionsHeight;

    arrow.style.transform = `translateY(${pxPerIndex * newIndex}px)`;

    selectedIndex = newIndex;
  }

  let arrow: HTMLImageElement;
</script>

<main class="max-w-8xl mx-auto h-[calc(100%-theme(space.14))] transition ease-in-out dark:text-white dark:ease-in-out">
  <div class="flex h-full w-full flex-col-reverse items-center transition ease-in-out lg:flex-row">
    <div class="mx-auto flex h-60 w-full flex-col items-center justify-center bg-slate-300 pb-4 dark:bg-zinc-700/70">
      <p class="my-4 text-center font-bold text-black transition ease-in-out dark:text-white">Select a project to view its details:</p>
      <form class="max-w-8 relative mx-auto flex h-full w-1/2 flex-col gap-[12px] lg:w-1/2">
        <img
          bind:this={arrow}
          class="duration-400 absolute left-[-41px] top-[-7px] h-9 transition md:top-0 lg:top-[13px]"
          alt="arrow currently selecting {projectData[selectedIndex].title}"
          src={SelectArrow}
        />
        {#each projectData as post, i}
          <ProjectRadioInput on:change={handleChange} {i} title={post.title} />
        {/each}
      </form>
    </div>
    <div class="mx-1 mt-1 flex h-full flex-col">
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
      <Carousel loop={true} data={selectedProject.carousel} dots={true} delay={5000} classes="m-1 rounded" autoplay={true} />
      {#key selectedProject}
        <div
          id="about"
          class="animate-fade h-8 overflow-auto rounded bg-slate-300 p-4 text-black transition ease-in-out dark:bg-zinc-900 dark:text-white"
        >
          <h2 class="mb-4 text-xl font-bold">About</h2>
          {@html selectedProject.description}
        </div>
      {/key}
    </div>
  </div>
</main>
