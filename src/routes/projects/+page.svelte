<script lang="ts">
  import { projectData } from "$lib/projectData";
  import Carousel from "../Carousel.svelte";
  import ProjectLink from "./ProjectLink.svelte";
</script>

<main class="max-w-8xl mx-auto w-[90%] transition ease-in-out dark:text-white dark:ease-in-out">
  <!-- <p class="my-5 text-center text-xl font-bold text-black transition ease-in-out dark:text-white">Showing 3 of 3 Projects:</p> -->
  <div class="w-full transition ease-in-out">
    <Carousel />
    <form>
      {#each projectData as post, i}
        <ProjectLink {i} icon={post.icon} title={post.title} />
      {/each}
    </form>
  </div>
</main>
