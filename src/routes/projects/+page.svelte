<script lang="ts">
  import { projectData } from "$lib/projectData";
  import DesktopView from "./DesktopView.svelte";
  import CardLink from "../CardLink.svelte";
</script>

<main
  class="mx-auto w-[90%] max-w-4xl transition ease-in-out dark:text-white dark:ease-in-out lg:h-[calc(100%-theme(space.14))] lg:w-auto lg:max-w-max"
>
  <DesktopView />
  <p class="my-5 text-center text-xl font-bold text-black transition ease-in-out dark:text-white lg:hidden">Showing 3 of 3 projects:</p>
  <div class="w-full transition ease-in-out lg:hidden">
    {#each projectData as project, i}
      <CardLink {i} classes={"rounded-xl my-5 border"} icon={project.icon} title={project.title} href={`/projects/${project.id}`} />
    {/each}
  </div>
</main>
