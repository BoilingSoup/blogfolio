<script lang="ts">
  import { projectList } from "$lib/projectData";
  import CardLink from "../CardLink.svelte";
  import { DOMAIN } from "../constants";
</script>

<svelte:head>
  <title>{DOMAIN} | Projects</title>
  <meta name="description" content="Some of my public projects. Click to view a project's details." />
</svelte:head>

<main class="mx-auto w-[90%] max-w-4xl transition ease-in-out dark:text-white dark:ease-in-out">
  <p class="my-5 text-center text-xl font-bold text-black transition ease-in-out dark:text-white">Showing 4 of 4 Projects:</p>
  <div class="w-full transition ease-in-out">
    {#each projectList as project}
      <CardLink
        classes={"rounded-xl my-5 "}
        icon={project.icon}
        title={project.title}
        href={`/projects/${project.id}`}
        subtitle={project.blurb}
      />
    {/each}
  </div>
</main>
