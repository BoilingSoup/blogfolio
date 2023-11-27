<script lang="ts">
  import emblaCarouselSvelte, { type EmblaCarouselType } from "embla-carousel-svelte";
  import Autoplay from "embla-carousel-autoplay";
  import { WheelGesturesPlugin } from "embla-carousel-wheel-gestures";
  import type { ProjectData } from "$lib/projectData";
  import { fade } from "svelte/transition";
  import { onMount } from "svelte";

  export let autoplay: boolean = false;
  export let loop: boolean = false;
  export let classes: string = "";
  export let data: ProjectData[number]["carousel"];
  export let delay: number = 2500;
  export let dots: boolean = false;
  export let onEmblaInit: ((e: CustomEvent<EmblaCarouselType>) => void) | undefined = undefined;

  let options = { loop };
  let plugins = [WheelGesturesPlugin()];

  $: if (autoplay) {
    plugins.push(Autoplay({ delay }));
    plugins = plugins;
  }

  let emblaApi: EmblaCarouselType;
  let carouselCurrentIndex = 0;

  function onInit(event: CustomEvent<EmblaCarouselType>) {
    const carousel = event.detail;
    carousel.on("select", () => (carouselCurrentIndex = carousel.selectedScrollSnap()));

    emblaApi = carousel;

    if (onEmblaInit === undefined) {
      return;
    }

    onEmblaInit(event);
  }

  export let height: number = 0;

  onMount(() => {
    const resizeObserver = new ResizeObserver((entries) => {
      height = entries[0].contentBoxSize[0].blockSize;
    });

    resizeObserver.observe(carouselRef);

    return () => resizeObserver.unobserve(carouselRef);
  });

  let carouselRef: HTMLDivElement;
</script>

<div bind:this={carouselRef} class="embla {classes}" use:emblaCarouselSvelte={{ options, plugins }} on:emblaInit={onInit}>
  <div class="embla__container">
    {#each data as slide}
      {#key slide}
        <img in:fade={{ duration: 500 }} class="embla__slide" alt={slide.alt} src={slide.src} width={slide.width} height={slide.height} />
      {/key}
    {/each}
  </div>

  {#if dots}
    <div class="embla__dots">
      {#each data as _, i}
        <button
          class={carouselCurrentIndex === i ? "embla__dot embla__dot--selected" : "embla__dot"}
          type="button"
          on:click={() => emblaApi.scrollTo(i)}
          on:keydown={(e) => {
            if (e.key === "Enter") emblaApi.scrollTo(i);
          }}
        />
      {/each}
    </div>
  {/if}
</div>

<style>
  .embla {
    --slide-spacing: 0.1rem;
    --slide-size: 100%;
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

  .embla__dots {
    position: absolute;
    z-index: 1;
    bottom: -10px;
    left: 0;
    right: 0;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .embla__dot {
    width: 0.7rem;
    height: 2.4rem;
    display: flex;
    align-items: center;
    margin-right: 0.25rem;
    margin-left: 0.25rem;
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
</style>
