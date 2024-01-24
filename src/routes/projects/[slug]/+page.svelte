<script lang="ts">
  import NewTabIcon from "../../NewTabIcon.svelte";
  import { DOMAIN } from "../../constants";
  import Badge from "../Badge.svelte";
  import ProjectLabel from "./ProjectLabel.svelte";

  export let data;
</script>

<svelte:head>
  <title>{DOMAIN} | {data.title}</title>
</svelte:head>

<main class="mx-auto mt-8 rounded bg-slate-300 transition ease-in-out lg:container dark:bg-zinc-900">
  <div class="px-8 py-5">
    <h1
      class="rounded-lg bg-slate-300 py-6 text-center text-2xl font-bold text-black transition ease-in-out dark:bg-zinc-900 dark:text-white xs:text-3xl lg:text-4xl"
    >
      {data.title}
      <a
        class="whitespace-nowrap text-xl text-blue-700 underline transition ease-in-out dark:text-blue-400 xs:text-2xl lg:text-3xl"
        href={data.link.url}
        target="_blank">{data.link.text ?? data.link.url}<span class="h-[30px] w-[30px]"><NewTabIcon --size="30px" /></span></a
      >
    </h1>
    <div class="flex flex-col justify-center gap-4 py-6 xl:flex-row xl:gap-10">
      <div class="flex gap-2">
        <div class="w-[14ch] text-right xl:w-auto">
          <ProjectLabel>Languages:</ProjectLabel>
        </div>
        <div class="flex h-min gap-1">
          {#each data.techStack.languages as language}
            <Badge color={language.color}>{language.name}</Badge>
          {/each}
        </div>
      </div>
      <div class="flex gap-2">
        <div class="w-[14ch] text-right xl:w-auto">
          <ProjectLabel>Frameworks:</ProjectLabel>
        </div>
        <div class="flex h-min gap-1">
          {#each data.techStack.frameworks as framework}
            <Badge color={framework.color}>{framework.name}</Badge>
          {/each}
        </div>
      </div>
      <div class="flex gap-2">
        <div class="w-[14ch] text-right xl:w-auto">
          <ProjectLabel>Source Code:</ProjectLabel>
        </div>
        {#if !data.source.public}
          <Badge color="bg-gray-700">Private</Badge>
        {/if}
        {#if data.source.public}
          <ul class="list-none">
            {#each data.source.urls as link}
              <li>
                <a class="break-all text-xs text-blue-700 underline transition ease-in-out dark:text-blue-400" target="_blank" href={link}
                  >{link}<span><NewTabIcon --size="20px" /></span></a
                >
              </li>
            {/each}
          </ul>
        {/if}
      </div>
    </div>
  </div>
  <div class="flex w-full flex-wrap px-8 py-8">
    <div class="lg:w-1/2">
      <h2 class="text-3xl text-black transition ease-in-out dark:text-white">About</h2>
      <p class="whitespace-pre-wrap bg-slate-300 text-black transition ease-in-out dark:bg-zinc-900 dark:text-white">
        {@html data.description}
      </p>
    </div>
    <div class="lg:w-1/2">
      <!-- svelte-ignore a11y-media-has-caption -->
      <video class="w-full max-w-4xl" src={data.video} title="demo" loop controls />
    </div>
  </div>
</main>

<style>
  video::-webkit-media-controls-volume-slider {
    display: none;
  }

  video::-webkit-media-controls-mute-button {
    display: none;
  }
</style>
