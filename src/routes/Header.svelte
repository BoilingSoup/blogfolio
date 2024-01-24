<script lang="ts">
  import NavLink from "./NavLink.svelte";
  import DarkModeButton from "./DarkModeButton.svelte";
  import FroggyIcon from "./FroggyIcon.svelte";
  import { page } from "$app/stores";
  import NewTabIcon from "./NewTabIcon.svelte";

  let showLinks = false;

  let borderB = " ";
  let justify = " justify-end";

  $: if ($page.url.pathname !== "/") {
    showLinks = true;
    borderB = " border-b";
    justify = " justify-between";
  } else {
    showLinks = false;
    borderB = " ";
    justify = " justify-end";
  }
</script>

<div id="light-bg" />
<div id="dark-bg" />

<header
  class={"header fixed z-10 flex h-14 w-full animate-fade-in-up items-center border-dotted border-gray-500 transition ease-in-out dark:border-slate-400/20" +
    borderB +
    justify}
>
  <div id="header-light-bg" />
  <div id="header-dark-bg" />

  {#if showLinks}
    <FroggyIcon />
  {/if}
  <div class="z-10 flex h-full items-center">
    {#if showLinks}
      <div class="mr-2 hidden h-full dark:text-white lg:flex">
        <NavLink href="/projects" pathName="projects" text="Projects" />
        <NavLink href="/blog" pathName="blog" text="Blog" />
        <div class="flex items-center">
          <NavLink
            href="https://github.com/boilingsoup"
            pathName="/"
            text="GitHub"
            margin="ml-10"
            textColor="text-gray-700 dark:text-gray-400"
            hoverColor="before:bg-gray-700 before:dark:bg-gray-400"
            target="_blank"
          />
          <NewTabIcon --size="30px" color={{ dark: "#9ca3af", light: "#374151" }} />
        </div>
      </div>
    {/if}
    <DarkModeButton />
  </div>
</header>

<div class="z-0 h-14" />
