<script>
  import BlogPreview from "./BlogPreview.svelte";
  import ProjectPreview from "./ProjectPreview.svelte";
  import Section from "./Section.svelte";
</script>

<svelte:head>
  <title>BoilingSoup</title>
</svelte:head>

<main class="flex h-[calc(100%_-_theme(space.14))] flex-col justify-center sm:h-auto">
  <Section />
  <!-- <div class="lg:flex"> -->
  <ProjectPreview />
  <BlogPreview />
  <!-- </div> -->
</main>
