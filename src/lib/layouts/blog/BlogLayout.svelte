<script lang="ts">
  // @ts-nocheck
  // MDsveX doesnt support typescript

  import { darkModeStore } from "$lib";
  import "giscus";

  export let title;
  export let date;

  $: giscusTheme = $darkModeStore ? "dark_high_contrast" : "light_high_contrast";
</script>

<svelte:head>
  <title>{title}</title>
</svelte:head>

<main>
  <div
    class="mx-auto mt-8 rounded-md bg-slate-300 text-xl leading-10 tracking-wide lg:container dark:bg-zinc-900 dark:text-white md:text-2xl md:tracking-wider"
  >
    <article class="container mx-auto px-0 py-4 sm:px-8 lg:px-20 lg:py-10 [&>code]:bg-gray-400 [&>code]:dark:bg-slate-700">
      <p class="text-right">{date}</p>
      <h1 class="mt-8 text-center text-4xl font-extrabold lg:text-5xl">{title}</h1>
      <br />
      <br />
      <slot />
      <giscus-widget
        id="comments"
        repo="BoilingSoup/blogfolio"
        repoId="R_kgDOKvJjow"
        category="Announcements"
        categoryId="DIC_kwDOKvJjo84CbFAu"
        mapping="pathname"
        reactionsenabled="1"
        emitmetadata="0"
        inputposition="top"
        theme={giscusTheme}
        lang="en"
        loading="eager"
      ></giscus-widget>
    </article>
  </div>
</main>
