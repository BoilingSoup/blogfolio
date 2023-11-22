<script lang="ts">
  import BSoupFrog from "./BSoupFrog.svelte";
  import NavLink from "./NavLink.svelte";
  import DarkModeButton from "./DarkModeButton.svelte";

  let hoverEffect: HTMLDivElement;

  const addHoverEffect = function () {
    hoverEffect.classList.add("hover-effect");
  };

  const removeHoverEffect = function () {
    hoverEffect.classList.remove("hover-effect");
  };
</script>

<header
  class="header fixed z-10 flex h-14 w-full animate-fade-in-up items-center border-b border-dotted border-gray-500 transition ease-in-out dark:border-slate-400/20 md:justify-between"
>
  <a href="/" on:mouseover={addHoverEffect} on:mouseleave={removeHoverEffect} on:focus={addHoverEffect} on:blur={removeHoverEffect}>
    <div
      class="[&>svg]:m-2 [&>svg]:hidden [&>svg]:h-[30px] [&>svg]:w-[30px] [&>svg]:animate-fade-in-up [&>svg]:transition [&>svg]:ease-in-out [&>svg]:2xs:inline [&>svg]:md:m-2 [&>svg]:lg:ml-8"
    >
      <BSoupFrog />
      <div
        bind:this={hoverEffect}
        id="hover-effect"
        class="absolute bottom-0 left-1 h-6 w-[40px] before:absolute before:bottom-0 before:h-[0px] before:w-[100%] before:rounded before:bg-gray-900 before:opacity-75 before:transition-all before:content-[''] before:dark:bg-slate-50 lg:left-7"
      />
    </div>
  </a>
  <div class="flex h-full items-center">
    <div class="mr-2 hidden h-full transition ease-in-out dark:text-white sm:flex">
      <NavLink href="/blog" text="Blog" />
      <NavLink href="/projects" text="Projects" />
      <NavLink href="/demos" text="Demos" />
      <NavLink href="/contact" text="Contact" />
    </div>
    <DarkModeButton />
  </div>
</header>
<div class="h-14" />
