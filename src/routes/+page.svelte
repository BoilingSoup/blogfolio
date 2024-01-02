<script>
  import BSoupFrog from "./BSoupFrog.svelte";
  import PrettyLink from "./PrettyLink.svelte";
</script>

<svelte:head>
  <title>BoilingSoup</title>
</svelte:head>

<main class="flex h-[calc(100%_-_theme(space.14))] flex-col items-center justify-center gap-20">
  <h1 class="text-5xl text-black transition ease-in dark:text-white">Hi, I'm BoilingSoup</h1>

  <div class="flex items-end gap-8">
    <BSoupFrog width={150} height={150} />

    <div class="flex flex-col gap-5">
      <p class="text-xl text-black transition ease-in dark:text-white">Check out My:</p>
      <PrettyLink href="https://github.com/boilingsoup" text="GitHub" target="_blank" />
      <PrettyLink href="/projects" text="Projects" />
      <PrettyLink href="/blog" text="Blog" />
    </div>
  </div>
</main>
