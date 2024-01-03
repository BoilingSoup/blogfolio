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
    <div class="text-center">
      <p class="mt-2 text-left text-3xl text-zinc-800 transition ease-in-out dark:text-slate-200 lg:text-7xl">
        Hi, I'm BoilingSoup.<br />Welcome to my portfolio!
      </p>
      <div class="mt-28 flex items-end justify-between [&>svg]:h-[100px] [&>svg]:w-[100px] lg:[&>svg]:h-[300px] lg:[&>svg]:w-[300px]">
        <BSoupFrog color={frogColor} />
        <div class="flex w-1/2 flex-col gap-5">
          <p class="text-center text-2xl font-bold text-black transition ease-in dark:text-white">Check out my 👇</p>
          <PrettyLink href="/projects" text="Projects" />
          <PrettyLink href="/blog" text="Blog" />
          <PrettyLink href="https://github.com/boilingsoup" text="GitHub" targetBlank={true} />
        </div>
      </div>
    </div>
  </div>
</main>
