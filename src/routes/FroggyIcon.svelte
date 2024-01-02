<script lang="ts">
  import BSoupFrog from "./BSoupFrog.svelte";

  let hoverEffect: HTMLDivElement;

  const addHoverEffect = function () {
    hoverEffect.classList.add("hover-effect");
  };

  const removeHoverEffect = function () {
    hoverEffect.classList.remove("hover-effect");
  };
</script>

<a
  class="z-10"
  href="/"
  on:mouseover={addHoverEffect}
  on:mouseleave={removeHoverEffect}
  on:focus={addHoverEffect}
  on:blur={removeHoverEffect}
>
  <div
    class="absolute left-1 top-1 lg:left-1 [&>svg]:m-2 [&>svg]:hidden [&>svg]:h-[30px] [&>svg]:w-[30px] [&>svg]:animate-fade-in-up [&>svg]:transition [&>svg]:ease-in-out [&>svg]:2xs:inline [&>svg]:md:m-2 [&>svg]:lg:ml-8"
  >
    <BSoupFrog />
  </div>
  <div
    bind:this={hoverEffect}
    id="hover-effect"
    class="absolute bottom-0 left-2 z-10 h-6 w-[40px] before:absolute before:bottom-0 before:h-[0px] before:w-[100%] before:rounded before:bg-gray-900 before:opacity-75 before:transition-all before:duration-200 before:content-[''] before:dark:bg-slate-50 md:left-2 lg:left-8"
  />
</a>
