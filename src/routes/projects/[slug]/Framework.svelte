<script lang="ts">
  import type { projectData, IDs } from "$lib/projectData";
  import Badge from "../Badge.svelte";
  import ProjectLabel from "./ProjectLabel.svelte";

  export let data: (typeof projectData)[IDs[number]];
</script>

<div class="flex gap-2">
  <div class="w-[14ch] text-right">
    <ProjectLabel>Frameworks:</ProjectLabel>
  </div>
  <div class="flex h-min gap-1">
    {#each data.techStack.frameworks as framework}
      <Badge color={framework.color}>{framework.name}</Badge>
    {/each}
  </div>
</div>
