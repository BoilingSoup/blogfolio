<script lang="ts">
  import NewTabIcon from "../../NewTabIcon.svelte";
  import { DOMAIN } from "../../constants";
  import Badge from "../Badge.svelte";
  import Framework from "./Framework.svelte";
  import Language from "./Language.svelte";
  import ProjectLabel from "./ProjectLabel.svelte";

  export let data;
</script>

<svelte:head>
  <title>{DOMAIN} | {data.title}</title>
</svelte:head>

<div class="lg:grid lg:h-[calc(100%-theme(space.14))] lg:place-items-center">
  <main class="mx-auto rounded-md bg-slate-300 py-12 transition ease-in-out lg:container dark:bg-zinc-900 lg:py-20">
    <div class="px-8 lg:px-16">
      <h1
        class="rounded-lg bg-slate-300 text-center text-2xl font-bold text-black transition ease-in-out dark:bg-zinc-900 dark:text-white xs:text-3xl lg:text-4xl"
      >
        {data.title}
        <a class="link-light-dark whitespace-nowrap text-xl underline xs:text-2xl lg:text-3xl" href={data.link.url} target="_blank"
          >{data.link.text ?? data.link.url}<span class="h-[30px] w-[30px]"><NewTabIcon --size="30px" /></span></a
        >
      </h1>
      <div class="flex flex-col justify-center gap-4 overflow-hidden py-12 md:py-20 md:text-lg xl:flex-row xl:gap-10">
        <div class="flex flex-col gap-4 lg:hidden">
          <Language {data} />
          <Framework {data} />
        </div>
        <div class="hidden lg:block">
          <Language {data} />
        </div>
        <div class="hidden lg:block">
          <Framework {data} />
        </div>
        <div class="flex gap-2">
          <div class="w-[14ch] text-right">
            <ProjectLabel>Source Code:</ProjectLabel>
          </div>
          {#if !data.source.public}
            <div class="h-min">
              <Badge color="bg-gray-700">Private</Badge>
            </div>
          {/if}
          {#if data.source.public}
            <ul class="list-none overflow-hidden text-ellipsis whitespace-nowrap">
              {#each data.source.urls as link}
                <li>
                  <a class="link-light-dark break-all text-xs underline transition ease-in-out md:text-sm" target="_blank" href={link}
                    >{link}<span><NewTabIcon --size="20px" /></span></a
                  >
                </li>
              {/each}
            </ul>
          {/if}
        </div>
      </div>
    </div>
    <div class="flex w-full flex-wrap-reverse gap-12 px-8 md:flex-wrap md:gap-20 lg:px-16">
      <div class="xl:w-[calc(50%-theme(space.10))]">
        <h2 class="text-xl font-bold text-black transition ease-in-out dark:text-white md:text-2xl">About</h2>
        <p class="whitespace-pre-wrap bg-slate-300 text-lg text-black transition ease-in-out dark:bg-zinc-900 dark:text-white">
          {@html data.description}
        </p>
      </div>
      <div class="xl:w-[calc(50%-theme(space.10))]">
        <!-- svelte-ignore a11y-media-has-caption -->
        <video class="max-w-4x w-full" width={400} height={100} src={data.video} title="demo" loop controls />
      </div>
    </div>
  </main>
</div>

<style>
  video::-webkit-media-controls-volume-slider {
    display: none;
  }

  video::-webkit-media-controls-mute-button {
    display: none;
  }
</style>
