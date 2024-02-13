<script>
  import { darkModeStore } from "$lib";
  import BSoupFrog from "./BSoupFrog.svelte";
  import NewTabIcon from "./NewTabIcon.svelte";
  import PrettyLink from "./PrettyLink.svelte";
  import { DOMAIN } from "./constants";

  $: frogColor = $darkModeStore ? "#f1f5f9" : "#27272a";
</script>

<svelte:head>
  <title>{DOMAIN} | Home</title>
  <meta name="description" content="BoilingSoup portfolio and blog site. Check out my projects, blog, GitHub." />
</svelte:head>

<main class="grid min-h-[calc(100%-theme(space.14))] place-items-center">
  <div class="grid h-full place-items-center">
    <div class="mx-4 animate-fade-in-up py-4 pb-[theme(space.14)] text-center transition ease-in-out lg:mx-0">
      <p class="text-left text-2xl font-bold text-zinc-800 transition ease-in-out dark:text-slate-200 xs:text-3xl lg:text-6xl">
        Hi, I'm Riki, a full stack developer.
      </p>
      <p class="mt-4 text-left text-2xl font-bold text-zinc-800 transition ease-in-out dark:text-slate-200 xs:text-3xl lg:text-6xl">
        Welcome to my portfolio!
      </p>

      <div
        class="mt-12 flex flex-col items-center justify-between gap-2 2xs:gap-4 lg:mt-28 lg:flex-row lg:items-end lg:gap-0 [&>svg]:h-[100px] [&>svg]:w-[100px] lg:[&>svg]:h-[300px] lg:[&>svg]:w-[300px]"
      >
        <BSoupFrog color={frogColor} />
        <div class="mt-8 flex w-full flex-col gap-5 lg:w-1/2">
          <p class="text-center text-lg font-bold text-black transition ease-in-out dark:text-white xs:text-xl lg:text-2xl">
            Check out my <span class="align-middle text-xl xs:text-2xl lg:text-3xl">👇</span>
          </p>
          <PrettyLink href="/projects" text="Projects" />
          <PrettyLink href="/blog" text="Blog" />
          <PrettyLink href="https://github.com/boilingsoup" textColor="text-[#666666] dark:text-[#aaaaaa]" text="GitHub" target="_blank"
            ><NewTabIcon color={{ dark: "#aaaaaa", light: "#666666" }} --size="30px" /></PrettyLink
          >
        </div>
      </div>
    </div>
  </div>
</main>
