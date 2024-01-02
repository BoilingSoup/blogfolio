<script lang="ts">
  import NavLink from "./NavLink.svelte";
  import DarkModeButton from "./DarkModeButton.svelte";
  import FroggyIcon from "./FroggyIcon.svelte";
</script>

<div id="light-bg" />
<div id="dark-bg" />

<header
  class="header fixed z-10 flex h-14 w-full animate-fade-in-up items-center justify-between border-b border-dotted border-gray-500 transition ease-in-out dark:border-slate-400/20"
>
  <div id="header-light-bg" />
  <div id="header-dark-bg" />

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
