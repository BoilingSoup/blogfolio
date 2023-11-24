<script lang="ts">
  import emblaCarouselSvelte from "embla-carousel-svelte";
  import Autoplay from "embla-carousel-autoplay";
  import { WheelGesturesPlugin } from "embla-carousel-wheel-gestures";
  import AutoHeight from "embla-carousel-auto-height";
  import type { ProjectData } from "$lib/projectData";

  export let autoplay: boolean = false;
  export let loop: boolean = false;
  export let classes: string = "";
  export let data: ProjectData[number]["carousel"];
  export let delay: number = 2500;

  let options = { loop };
  let plugins = [WheelGesturesPlugin()];

  $: if (autoplay) {
    plugins.push(Autoplay({ delay }));
    plugins = plugins;
  }
</script>

<div class="embla {classes}" use:emblaCarouselSvelte={{ options, plugins }}>
  <div class="embla__container">
    {#each data as slide}
      <img class="embla__slide" alt={slide.alt} src={slide.src} width={slide.width} height={slide.height} />
    {/each}
    <!-- <div class="embla__slide flex h-full w-full items-center justify-center bg-green-500">Slide 1</div> -->
    <!-- <div class="embla__slide flex h-full w-full items-center justify-center bg-orange-200">Slide 2</div> -->
    <!-- <div class="embla__slide flex h-full w-full items-center justify-center bg-gray-500">Slide 3</div> -->
  </div>
</div>

<style>
  .embla {
    overflow: hidden;
  }
  .embla__container {
    display: flex;
  }
  .embla__slide {
    flex: 0 0 100%;
    min-width: 0;
  }
</style>
