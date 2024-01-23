<script lang="ts">
  import Badge from "../Badge.svelte";
  import NewTabIcon from "./NewTabIcon.svelte";

  export let data;
</script>

<svelte:head>
  <title>BoilingSoup | {data.title}</title>
</svelte:head>

<main class="mx-auto mt-8 rounded bg-slate-300 transition ease-in-out lg:container dark:bg-zinc-900">
  <!-- <h1 class="text-4xl text-black dark:text-white">hello!</h1> -->
  <!-- <h1 class="text-4xl text-black dark:text-white">{data.id}</h1> -->
  <div class="px-8 py-5">
    <h1
      class="rounded-lg bg-slate-300 py-6 text-center text-4xl font-bold text-black transition ease-in-out dark:bg-zinc-900 dark:text-white"
    >
      {data.title}
      <a class="text-blue-700 underline transition ease-in-out dark:text-blue-400" href={data.url} target="_blank"
        >{data.url}<span><NewTabIcon size={48} /></span></a
      >
      <!-- <a -->
      <!--   href={data.url} -->
      <!--   class="visit-site-link absolute right-0 rounded-md border border-black px-6 py-4 text-2xl font-bold text-black transition ease-in-out dark:border-white dark:text-white" -->
      <!--   target="_blank">Visit Site</a -->
      <!-- > -->
    </h1>
    <div class="flex flex-col justify-center gap-4 py-6 lg:flex-row lg:gap-10">
      <h2 class="text-black transition ease-in-out dark:text-white lg:text-xl">
        Languages: {#each data.techStack.languages as language}
          <Badge color={language.color}>{language.name}</Badge>
        {/each}
      </h2>
      <h2 class="text-black transition ease-in-out dark:text-white lg:text-xl">
        Frameworks: {#each data.techStack.frameworks as framework}
          <Badge color={framework.color}>{framework.name}</Badge>
        {/each}
      </h2>
      <div class="flex gap-2">
        <h2 class="text-black transition ease-in-out dark:text-white lg:text-xl">Source Code:</h2>
        {#if data.source.public}
          <ul class="list-none">
            {#each data.source.urls as link}
              <li>
                <a class="text-blue-700 underline transition ease-in-out dark:text-blue-400" target="_blank" href={link}
                  >{link}<span><NewTabIcon size={20} /></span></a
                >
              </li>
            {/each}
          </ul>
        {:else}
          <Badge color="bg-gray-700">Private</Badge>
        {/if}
      </div>
      <!-- <h2 class="text-xl text-black transition ease-in-out dark:text-white"> -->
      <!--   Live URL: <a class="text-base text-blue-700 underline transition ease-in-out dark:text-blue-400" href={data.url} target="_blank" -->
      <!--     >{data.url}</a -->
      <!--   > -->
      <!-- </h2> -->
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

  /* .visit-site-link { */
  /*   color: rgba(255, 255, 255, 0.9); */
  /*   background: linear-gradient(-45deg, #ffa63d, #ff3d77, #338aff, #3cf0c5); */
  /*   background-size: 600%; */
  /*   animation: animateLinkButton 16s linear infinite; */
  /*   filter: blur(30px) */
  /* } */

  /* @keyframes animateLinkButton { */
  /*   0% { */
  /*     background-position: 0% 50%; */
  /*   } */
  /*   50% { */
  /*     background-position: 100% 50%; */
  /*   } */
  /*   100% { */
  /*     background-position: 0% 50%; */
  /*   } */
  /* } */
</style>
