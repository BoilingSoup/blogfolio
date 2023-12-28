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

<div id="light-bg" />
<div id="dark-bg" />

<header
  class="header fixed z-10 flex h-14 w-full animate-fade-in-up items-center justify-end border-b border-dotted border-gray-500 transition ease-in-out dark:border-slate-400/20 md:justify-between"
>
  <div id="header-light-bg" />
  <div id="header-dark-bg" />
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
      class="absolute bottom-0 left-1 z-10 h-6 w-[40px] before:absolute before:bottom-0 before:h-[0px] before:w-[100%] before:rounded before:bg-gray-900 before:opacity-75 before:transition-all before:duration-200 before:content-[''] before:dark:bg-slate-50 md:left-2 lg:left-8"
    />
  </a>
  <div class="z-10 flex h-full items-center">
    <div class="mr-2 hidden h-full dark:text-white lg:flex">
      <NavLink href="/projects" text="Projects" />
      <NavLink href="/blog" text="Blog" />
    </div>
    <DarkModeButton />
  </div>
</header>

<div class="z-0 h-14" />
