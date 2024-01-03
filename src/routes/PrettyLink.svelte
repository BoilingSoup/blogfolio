<script lang="ts">
  export let href: string;
  export let targetBlank: boolean = false;
  export let text: string;
</script>

{#if targetBlank}
  <a
    {href}
    target="_blank"
    class="w-40 rounded-xl border border-gray-500 text-2xl text-black transition ease-in dark:border-slate-500 dark:text-white">{text}</a
  >
{:else}
  <a {href} class="w-40 rounded-xl border border-gray-500 text-2xl text-black transition ease-in dark:border-slate-500 dark:text-white"
    >{text}</a
  >
{/if}
