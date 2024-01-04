<script>
  import { darkModeStore } from "$lib";
  import BSoupFrog from "./BSoupFrog.svelte";
  import PrettyLink from "./PrettyLink.svelte";

  $: frogColor = $darkModeStore ? "#f1f5f9" : "#27272a";
</script>

<svelte:head>
  <title>BoilingSoup | Home</title>
</svelte:head>

<main class="h-[calc(100%_-_theme(space.14))]">
  <div class={"flex h-full items-center justify-center"}>
    <div class="animate-fade-in-up text-center transition ease-in-out">
      <p class="text-left text-4xl text-zinc-800 transition ease-in-out dark:text-slate-200 lg:text-7xl">Hi, I'm BoilingSoup.</p>
      <p class="mt-4 text-left text-4xl text-zinc-800 transition ease-in-out dark:text-slate-200 lg:text-7xl">Welcome to my portfolio!</p>

      <div
        class="mt-8 flex flex-col items-center justify-between gap-4 lg:mt-28 lg:flex-row lg:items-end lg:gap-0 [&>svg]:h-[100px] [&>svg]:w-[100px] lg:[&>svg]:h-[300px] lg:[&>svg]:w-[300px]"
      >
        <BSoupFrog color={frogColor} />
        <div class="flex w-full flex-col gap-5 lg:w-1/2">
          <p class="text-center text-2xl font-bold text-black transition ease-in-out dark:text-white">
            Check out my <span class="align-middle text-3xl">👇</span>
          </p>
          <PrettyLink href="/projects" text="Projects" />
          <PrettyLink href="/blog" text="Blog" />
          <PrettyLink href="https://github.com/boilingsoup" text="GitHub" targetBlank={true} />
        </div>
      </div>
    </div>
  </div>
</main>
