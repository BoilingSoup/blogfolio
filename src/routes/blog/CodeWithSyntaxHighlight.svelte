<script lang="ts">
  import { darkModeStore } from "$lib";
  import Highlight from "svelte-highlight";
  import type { LanguageType } from "svelte-highlight/languages";
  import { gruvboxDarkCss, hybridCss } from "./constants";

  export let code: string;
  export let language: LanguageType<string>;

  $: syntaxHighlightCss = $darkModeStore ? gruvboxDarkCss : hybridCss;
</script>

<svelte:head>{@html syntaxHighlightCss}</svelte:head>

<Highlight
  {language}
  {code}
  class="overflow-x-auto border-4 border-zinc-600 text-lg transition ease-in-out dark:border-black dark:bg-black"
/>
