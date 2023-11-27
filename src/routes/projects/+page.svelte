<script lang="ts">
  import { projectData } from "$lib/projectData";
  import Carousel from "../Carousel.svelte";
  import ProjectRadioInput from "./ProjectRadioInput.svelte";
  import type { IndexData } from "./types";
  import SelectArrow from "$lib/assets/select-arrow.png";
  import { onMount } from "svelte";
  import { fade } from "svelte/transition";
  import Badge from "./Badge.svelte";

  let arrowRef: HTMLImageElement;

  let containerRef: HTMLDivElement;

  let selectedIndex: number = 0;
  $: selectedProject = projectData[selectedIndex];

  const GAP_HEIGHT = 12;
  let selectOptionHeight: number | undefined = undefined;

  onMount(() => {
    const createRepositionFunc = (gapHeight: number, optionsHeight: number) => (event: MediaQueryListEvent) => {
      if (!event.matches) {
        return;
      }

      selectOptionHeight = optionsHeight;

      const pxPerIndex = gapHeight + optionsHeight;
      arrowRef.style.transform = `translateY(${pxPerIndex * selectedIndex}px)`;
    };

    const optionHeight = {
      xl: 64,
      lg: 36,
      xs: 24
    };

    const repositionArrowXL = createRepositionFunc(GAP_HEIGHT, optionHeight.xl);
    const queryXL = window.matchMedia("(min-width: 1024px)");
    queryXL.addEventListener("change", repositionArrowXL);

    const repositionArrowLG = createRepositionFunc(GAP_HEIGHT, optionHeight.lg);
    const queryLG = window.matchMedia("(min-width: 640px) and (max-width: 1023px)");
    queryLG.addEventListener("change", repositionArrowLG);

    const repositionArrowXS = createRepositionFunc(GAP_HEIGHT, optionHeight.xs);
    const queryXS = window.matchMedia("(max-width: 639px)");
    queryXS.addEventListener("change", repositionArrowXS);

    switch (true) {
      case queryXL.matches:
        selectOptionHeight = optionHeight.xl;
        break;
      case queryLG.matches:
        selectOptionHeight = optionHeight.lg;
        break;

      case queryXS.matches:
        selectOptionHeight = optionHeight.xs;
        break;

      default:
        break;
    }

    return () => {
      queryXL.removeEventListener("change", repositionArrowXL);
      queryLG.removeEventListener("change", repositionArrowLG);
      queryXS.removeEventListener("change", repositionArrowXS);
    };
  });

  function handleChange(e: CustomEvent<IndexData>) {
    if (typeof selectOptionHeight === "number") {
      const newIndex = e.detail.index;

      const pxPerIndex = GAP_HEIGHT + selectOptionHeight;

      arrowRef.style.transform = `translateY(${pxPerIndex * newIndex}px)`;

      selectedIndex = newIndex;
    }
  }
</script>

<main class="max-w-8xl mx-auto h-[calc(100%-theme(space.14))] transition ease-in-out dark:text-white dark:ease-in-out">
  <div class="relative flex h-full w-full flex-col-reverse items-center transition ease-in-out lg:flex-row">
    <div class="mx-auto flex h-[240px] w-full flex-col items-center justify-center bg-slate-300 pb-4 dark:bg-zinc-700/70 sm:h-72">
      <p class="my-4 text-center font-bold text-black transition ease-in-out dark:text-white">Select a project to view its details:</p>
      <form class="max-w-8 relative mx-auto flex h-full w-1/2 flex-col gap-[12px] lg:w-1/2">
        <img
          bind:this={arrowRef}
          class="duration-400 absolute left-[-41px] top-[-7px] h-9 transition sm:top-0 lg:top-[13px]"
          alt="arrow currently selecting {projectData[selectedIndex].title}"
          src={SelectArrow}
        />
        {#each projectData as post, i}
          <ProjectRadioInput on:change={handleChange} {i} title={post.title} />
        {/each}
      </form>
    </div>
    <div bind:this={containerRef} class="mx-1 mt-1 flex h-full w-full flex-col justify-evenly">
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
          class="animate-fade relative flex-grow overflow-auto rounded bg-slate-300 p-4 text-black transition ease-in-out dark:bg-zinc-900 dark:text-white"
        >
          <h2 class="mb-4 text-xl font-bold">About</h2>
          <p class="absolute">{@html selectedProject.description}</p>
        </div>
      {/key}
    </div>
  </div>
</main>
