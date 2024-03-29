<script lang="ts">
  import NewTabIcon from "../../NewTabIcon.svelte";
  import { DOMAIN } from "../../constants";
  import Badge from "../Badge.svelte";
  import Framework from "./Framework.svelte";
  import Language from "./Language.svelte";
  import ProjectLabel from "./ProjectLabel.svelte";
  import TestAccount from "./TestAccount.svelte";

  export let data;
</script>

<svelte:head>
  <title>{DOMAIN} | {data.title}</title>
  <meta name="description" content={data.description} />
</svelte:head>

<div class="lg:grid lg:h-[calc(100%-theme(space.14))] lg:place-items-center">
  <main class="mx-auto rounded-md bg-gray-300 py-12 transition ease-in-out lg:container dark:bg-zinc-900 lg:py-20">
    <div class="px-8 lg:px-16">
      <h1 class="rounded-lg text-center text-2xl font-bold text-black transition ease-in-out dark:text-white xs:text-3xl lg:text-4xl">
        {data.title}
        <a class="link-light-dark whitespace-nowrap text-xl underline xs:text-2xl lg:text-3xl" href={data.link.url} target="_blank"
          >{data.link.text ?? data.link.url}<span class="h-[30px] w-[30px]"><NewTabIcon --size="30px" /></span></a
        >
      </h1>
      {#if data.testAccount !== undefined}
        <TestAccount testAccount={data.testAccount} classes={"mx-auto md:hidden mt-10 lg:mt-20"} />
      {/if}
      <div class="mx-4 flex items-center justify-between gap-12 py-12 md:my-8">
        <div class="flex flex-col justify-center gap-4 overflow-hidden md:text-lg xl:mx-auto xl:w-auto xl:flex-row xl:flex-wrap xl:gap-10">
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
            <div class="w-[14ch] xl:w-auto">
              <ProjectLabel>Source Code:</ProjectLabel>
            </div>
            {#if data.source === undefined}
              <div class="flex h-min">
                <Badge color="bg-gray-700">Private</Badge>
              </div>
            {:else}
              <ul class="list-none overflow-hidden text-ellipsis whitespace-nowrap">
                {#each data.source as link}
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
        {#if data.testAccount !== undefined}
          <div class="hidden text-black transition ease-in-out dark:text-white md:block md:w-1/2">
            <TestAccount testAccount={data.testAccount} />
          </div>
        {/if}
      </div>
    </div>
    <div class="flex w-full flex-wrap-reverse gap-12 px-8 md:flex-wrap md:gap-20 lg:px-16">
      <div class="xl:w-[calc(50%-theme(space.10))]">
        <h2 class="text-xl font-bold text-gray-800 transition ease-in-out dark:text-gray-300 md:text-2xl">About</h2>
        <p class="whitespace-pre-wrap text-lg text-gray-800 transition ease-in-out dark:text-stone-200/80">
          {@html data.description}
        </p>
      </div>
      <div class="rounded border border-zinc-700 transition ease-in-out dark:border-white/10 xl:w-[calc(50%-theme(space.10))]">
        <!-- svelte-ignore a11y-media-has-caption -->
        <video class="w-full" autoplay src={data.video} title="demo" loop controls />
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
