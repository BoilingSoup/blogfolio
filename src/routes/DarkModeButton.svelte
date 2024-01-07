<script lang="ts">
  import { darkModeStore } from "$lib";
  import { smallIcon } from "./constants";

  import Sun from "$lib/assets/sun.png";
  import Moon from "$lib/assets/moon.png";
</script>

<button
  aria-label="Dark Mode Toggle"
  on:click={darkModeStore.toggle}
  class="mx-0 rounded-3xl p-2 transition ease-in-out hover:bg-slate-500 dark:hover:bg-gray-500 2xs:mx-1 xs:mx-2 lg:mx-8"
>
  {#if $darkModeStore}
    <img src={Sun} width={smallIcon} height={smallIcon} alt="dark mode icon" />
    <div />
  {:else}
    <img src={Moon} width={smallIcon} height={smallIcon} alt="light mode icon" />
    <div />
  {/if}
</button>
