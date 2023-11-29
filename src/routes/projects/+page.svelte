<script lang="ts">
  import { projectList } from "$lib/projectData";
  import DesktopView from "./DesktopView.svelte";
  import CardLink from "../CardLink.svelte";
  import { onMount } from "svelte";
  import { goto } from "$app/navigation";
  import { selectedProjectStore } from "$lib";

  let hasNavigated = false;

  function handleChange() {
    hasNavigated = true;
  }

  onMount(() => {
    const handleQueryChange = function (mediaQuery: MediaQueryListEvent | MediaQueryList) {
      if (mediaQuery.matches && hasNavigated) {
        goto("/projects/" + $selectedProjectStore.id);
      }
    };

    const mediaQuery = window.matchMedia("(max-width: 1023px)");

    handleQueryChange(mediaQuery);

    mediaQuery.addEventListener("change", handleQueryChange);

    return () => mediaQuery.removeEventListener("change", handleQueryChange);
  });
</script>

<main
  class="mx-auto w-[90%] max-w-4xl transition ease-in-out dark:text-white dark:ease-in-out lg:h-[calc(100%-theme(space.14))] lg:w-auto lg:max-w-max"
>
  <DesktopView onchange={handleChange} />
  <p class="my-5 text-center text-xl font-bold text-black transition ease-in-out dark:text-white lg:hidden">Showing 3 of 3 projects:</p>
  <div class="w-full transition ease-in-out lg:hidden">
    {#each projectList as project, i}
      <CardLink {i} classes={"rounded-xl my-5 border"} icon={project.icon} title={project.title} href={`/projects/${project.id}`} />
    {/each}
  </div>
</main>
