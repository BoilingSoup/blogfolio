<script lang="ts">
  import { slide } from "svelte/transition";
</script>

<main>
  <div class="z-90 fixed h-full w-full bg-zinc-400/90 dark:bg-black/50" transition:slide={{ axis: "x" }}></div>
</main>
