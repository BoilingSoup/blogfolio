<script lang="ts">
  import { darkModeStore } from "$lib";
  import NavLink from "./NavLink.svelte";
  import DarkModeButton from "./DarkModeButton.svelte";
  import FroggyIcon from "./FroggyIcon.svelte";
  import HamburgerLight from "$lib/assets/hamburger-black.png";
  import HamburgerDark from "$lib/assets/hamburger-white.png";
</script>

<div id="light-bg" />
<div id="dark-bg" />

<header
  class="header fixed z-10 flex h-14 w-full animate-fade-in-up items-center justify-between border-b border-dotted border-gray-500 transition ease-in-out dark:border-slate-400/20"
>
  <div id="header-light-bg" />
  <div id="header-dark-bg" />

  {#if $darkModeStore}
    <button class="z-10 inline md:hidden">
      <img src={HamburgerDark} alt="menu button" />
    </button>
  {:else}
    <button class="z-10 inline md:hidden">
      <img src={HamburgerLight} alt="menu button" />
    </button>
  {/if}
  <FroggyIcon />
  <div class="z-10 flex h-full items-center">
    <div class="mr-2 hidden h-full dark:text-white lg:flex">
      <NavLink href="/" pathName="/" text="Home" />
      <NavLink href="/projects" pathName="projects" text="Projects" />
      <NavLink href="/blog" pathName="blog" text="Blog" />
    </div>
    <DarkModeButton />
  </div>
</header>

<div class="z-0 h-14" />
