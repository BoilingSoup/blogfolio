<script lang="ts">
  import type { projectData, IDs } from "$lib/projectData";
  import Badge from "../Badge.svelte";
  import ProjectLabel from "./ProjectLabel.svelte";

  export let data: (typeof projectData)[IDs[number]];
</script>

<div class="flex gap-2">
  <div class="w-[14ch] xl:w-auto">
    <ProjectLabel>Languages:</ProjectLabel>
  </div>
  <div class="flex h-min gap-1">
    {#each data.techStack.languages as language}
      <Badge color={language.color}>{language.name}</Badge>
    {/each}
  </div>
</div>
