<script lang="ts">
  import emblaCarouselSvelte from "embla-carousel-svelte";
  import Autoplay from "embla-carousel-autoplay";
  import { WheelGesturesPlugin } from "embla-carousel-wheel-gestures";

  let options = { loop: true };
  let plugins = [Autoplay({ delay: 2500 }), WheelGesturesPlugin()];
</script>

<div class="embla h-full w-full" use:emblaCarouselSvelte={{ options, plugins }}>
  <div class="embla__container h-full w-full">
    <div class="embla__slide flex h-full w-full items-center justify-center bg-green-500">Slide 1</div>
    <div class="embla__slide flex h-full w-full items-center justify-center bg-orange-200">Slide 2</div>
    <div class="embla__slide flex h-full w-full items-center justify-center bg-gray-500">Slide 3</div>
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
