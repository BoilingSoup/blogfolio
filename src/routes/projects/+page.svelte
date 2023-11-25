<script lang="ts">
  import { projectData } from "$lib/projectData";
  import Carousel from "../Carousel.svelte";
  import ProjectRadioInput from "./ProjectRadioInput.svelte";
  import type { IndexData } from "./types";
  import SelectArrow from "$lib/assets/select-arrow.png";
  import { onDestroy, onMount } from "svelte";
  import { fade } from "svelte/transition";
  import emblaCarouselSvelte, { type EmblaCarouselType, type EmblaEventType } from "embla-carousel-svelte";
  import PrevButton from "./PrevButton.svelte";
  import NextButton from "./NextButton.svelte";
  import Autoplay from "embla-carousel-autoplay";
  import { WheelGesturesPlugin } from "embla-carousel-wheel-gestures";

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

  let emblaApi: EmblaCarouselType;
  let options = { loop: true };
  let plugins = [Autoplay({ delay: 5000 }), WheelGesturesPlugin()];

  let selectedCarouselIndex: number = 0;
  // let prevBtnDisabled: boolean = true;
  // let nextBtnDisabled: boolean = false;

  const handleSlideSelect = function (carousel: EmblaCarouselType) {
    selectedCarouselIndex = carousel.selectedScrollSnap();
  };

  function onInit(event: CustomEvent<EmblaCarouselType>) {
    emblaApi = event.detail;
    emblaApi.on("select", handleSlideSelect);
  }

  onDestroy(() => {
    emblaApi.off("select", handleSlideSelect);
  });

  let arrow: HTMLImageElement;

  // onMount(() => {
  //   const handleSlideSelect = function (carousel: EmblaCarouselType) {
  //     selectedCarouselIndex = carousel.selectedScrollSnap();
  //     console.log("hello");
  //   };
  //   emblaApi.on("select", handleSlideSelect);

  //   return () => emblaApi.off("select", handleSlideSelect);
  // });

  // function scrollPrev() {
  //   emblaApi.scrollPrev();
  //   prevBtnDisabled = emblaApi.canScrollPrev();
  //   nextBtnDisabled = emblaApi.canScrollNext();
  // }

  // function scrollNext() {
  //   emblaApi.scrollNext();
  //   prevBtnDisabled = emblaApi.canScrollPrev();
  //   nextBtnDisabled = emblaApi.canScrollNext();
  // }
</script>

<main class="max-w-8xl mx-auto h-[calc(100%-theme(space.14))] transition ease-in-out dark:text-white dark:ease-in-out">
  <div class="flex h-full w-full flex-col-reverse items-center transition ease-in-out lg:flex-row">
    <div class="mx-auto h-72 w-full items-center justify-center bg-zinc-900/70 pb-4">
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
    <div class="h-full w-full rounded-xl dark:bg-zinc-900/70">
      <div class="embla m-4" use:emblaCarouselSvelte={{ options, plugins }} on:emblaInit={onInit}>
        <div class="embla__container">
          {#each projectData[0].carousel as img}
            <img class="embla__slide" src={img.src} />
          {/each}
        </div>
        <!-- <div class="embla__buttons"> -->
        <!--   <PrevButton on:click={scrollPrev} disabled={prevBtnDisabled} /> -->
        <!--   <NextButton on:click={scrollNext} disabled={nextBtnDisabled} /> -->
        <!-- </div> -->
        <div class="embla__dots">
          {#each projectData[0].carousel as _, i}
            <button
              class={selectedCarouselIndex === i ? "embla__dot embla__dot--selected" : "embla__dot"}
              type="button"
              on:click={() => emblaApi.scrollTo(i)}
              on:keydown={(e) => {
                if (e.key === "Enter") emblaApi.scrollTo(i);
              }}
            />
          {/each}
        </div>
        <!-- <div class="embla-thumbs"> -->
        <!--   <div class="embla-thumbs__viewport"> -->
        <!--     <div class="embla-thumbs__container"> -->
        <!--       {#each projectData[0].carousel as img} -->
        <!--         <div class="embla-thumbs__slide"> -->
        <!--           <button class="embla-thumbs__slide__button h-[50px]" type="button"> -->
        <!--             <div class="embla-thumbs__slide__number"> -->
        <!--               <span>1</span> -->
        <!--             </div> -->
        <!--             <img class="embla-thumbs__slide__img" src={img.src} alt="Your alt text" /> -->
        <!--           </button> -->
        <!--         </div> -->
        <!--       {/each} -->
        <!--     </div> -->
        <!--   </div> -->
        <!-- </div> -->
      </div>
      <!-- <img class="m-6 mx-auto" width="366" height="186" src={projectData[0].carousel[0].src} alt="cover" /> -->
      {#key selectedProject.title}
        <h1 class="m-6 text-2xl" in:fade={{ duration: 300 }}>
          {selectedProject.title}
        </h1>
      {/key}
      <h2 class="mx-6 text-gray-600">
        Languages:{#each projectData[0].languages as lang}<span>{" "}{lang}</span>{/each}
      </h2>
      <h2 class="mx-6 text-gray-600">
        Frameworks:{#each projectData[0].frameworks as framework}<span>{" "}{framework}</span>{/each}
      </h2>
    </div>
  </div>
</main>

<style>
  .embla {
    --slide-spacing: 0.1rem;
    --slide-size: 100%;
    /* --slide-height: 19rem; */
    /* padding: 1.6rem; */
    overflow: hidden;
    position: relative;
  }

  .embla__container {
    backface-visibility: hidden;
    display: flex;
    touch-action: pan-y;
    margin-left: calc(var(--slide-spacing) * -1);
  }

  .embla__slide {
    flex: 0 0 var(--slide-size);
    min-width: 0;
    padding-left: var(--slide-spacing);
    position: relative;
  }

  .embla__buttons {
    display: flex;
    /* width: 100%; */
    justify-content: space-between;
    align-items: center;
    position: absolute;
    top: 0;
    /* transform: translateY(-50%); */
    /* left: 1.6rem; */
  }

  .embla__dots {
    position: absolute;
    z-index: 1;
    bottom: 10px;
    left: 0;
    right: 0;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .embla__dot {
    width: 1.4rem;
    height: 2.4rem;
    display: flex;
    align-items: center;
    margin-right: 0.5rem;
    margin-left: 0.5rem;
  }

  .embla__dot:after {
    background: gray;
    border-radius: 0.2rem;
    width: 100%;
    height: 2px;
    content: "";
  }

  .embla__dot--selected:after {
    background: white;
  }

  /* .embla-thumbs { */
  /*   --thumbs-slide-spacing: 0.8rem; */
  /*   --thumbs-slide-height: 9rem; */
  /*   margin-top: var(--thumbs-slide-spacing); */
  /* } */
  /* .embla-thumbs__viewport { */
  /*   overflow: hidden; */
  /* } */
  /* .embla-thumbs__container { */
  /*   display: flex; */
  /*   flex-direction: row; */
  /*   margin-left: calc(var(--thumbs-slide-spacing) * -1); */
  /* } */
  /* .embla-thumbs__slide { */
  /*   flex: 0 0 28%; */
  /*   min-width: 0; */
  /*   padding-left: var(--thumbs-slide-spacing); */
  /*   position: relative; */
  /* } */
  /* @media (min-width: 576px) { */
  /*   .embla-thumbs__slide { */
  /*     flex: 0 0 18%; */
  /*   } */
  /* } */
  /* .embla-thumbs__slide__button { */
  /*   -webkit-appearance: none; */
  /*   background-color: transparent; */
  /*   touch-action: manipulation; */
  /*   display: block; */
  /*   text-decoration: none; */
  /*   cursor: pointer; */
  /*   border: 0; */
  /*   padding: 0; */
  /*   margin: 0; */
  /*   width: 100%; */
  /*   opacity: 0.2; */
  /*   transition: opacity 0.2s; */
  /* } */
  /* .embla-thumbs__slide--selected .embla-thumbs__slide__button { */
  /*   opacity: 1; */
  /* } */
  /* .embla-thumbs__slide__img { */
  /*   display: block; */
  /*   height: var(--thumbs-slide-height); */
  /*   width: 100%; */
  /*   object-fit: cover; */
  /* } */
  /* .embla-thumbs__slide__number { */
  /*   width: 3rem; */
  /*   height: 3rem; */
  /*   z-index: 1; */
  /*   position: absolute; */
  /*   top: 0.3rem; */
  /*   right: 0.3rem; */
  /*   border-radius: 50%; */
  /*   background-color: rgba(var(--background-site-rgb-value), 0.85); */
  /*   line-height: 3rem; */
  /*   font-weight: 900; */
  /*   text-align: center; */
  /*   pointer-events: none; */
  /* } */
  /* .embla-thumbs__slide__number > span { */
  /*   color: var(--brand-primary); */
  /*   background-image: linear-gradient(45deg, var(--brand-primary), var(--brand-secondary)); */
  /*   background-clip: text; */
  /*   -webkit-background-clip: text; */
  /*   -webkit-text-fill-color: transparent; */
  /*   font-size: 1.4rem; */
  /*   display: block; */
  /*   position: absolute; */
  /*   top: 0; */
  /*   left: 0; */
  /*   right: 0; */
  /*   bottom: 0; */
  /* } */
</style>
