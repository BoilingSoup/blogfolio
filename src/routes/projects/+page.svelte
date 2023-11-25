<script lang="ts">
  import { projectData } from "$lib/projectData";
  import Carousel from "../Carousel.svelte";
  import ProjectRadioInput from "./ProjectRadioInput.svelte";
  import type { IndexData } from "./types";
  import SelectArrow from "$lib/assets/select-arrow.png";
  import { onMount } from "svelte";

  let selectedIndex: number = 0;
  let isDesktop: boolean | undefined = undefined;

  onMount(() => {
    if (window.innerWidth >= 1024) {
      isDesktop = true;
    } else {
      isDesktop = false;
    }

    const handleResize = function () {
      const isResizeToDesktop = window.innerWidth >= 1024 && isDesktop === false;
      if (isResizeToDesktop) {
        const gapHeight = 12;
        const optionsHeight = 64;

        const pxPerIndex = gapHeight + optionsHeight;

        arrow.style.transform = `translateY(${pxPerIndex * selectedIndex}px)`;
        isDesktop = true;
        return;
      }

      const isResizeToMobile = window.innerWidth < 1024 && isDesktop === true;
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

<main class="max-w-8xl mx-auto h-[calc(100%-theme(space.14))] w-[90%] transition ease-in-out dark:text-white dark:ease-in-out">
  <!-- <p class="my-5 text-center text-xl font-bold text-black transition ease-in-out dark:text-white">Showing 3 of 3 Projects:</p> -->
  <div class="flex h-full w-full flex-col-reverse items-center transition ease-in-out lg:flex-row">
    <form class="relative flex flex-col gap-[12px] lg:w-1/2">
      <img
        bind:this={arrow}
        class="duration-400 absolute left-[-50px] h-9 transition lg:top-[13px]"
        alt="arrow currently selecting {projectData[selectedIndex].title}"
        src={SelectArrow}
      />
      {#each projectData as post, i}
        <ProjectRadioInput on:change={handleChange} {i} title={post.title} />
      {/each}
    </form>
    <div class="flex h-full w-full flex-col items-center justify-center">
      <p>wefawf</p>
      <Carousel classes="h-3/4 lg:w-1/2" loop={true} autoplay={true} delay={5000} data={projectData[0].carousel} />
    </div>
  </div>
</main>
