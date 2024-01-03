<script lang="ts">
  export let href: string;
  export let targetBlank: boolean = false;
  export let text: string;
</script>

{#if targetBlank}
  <a
    {href}
    target="_blank"
    class="rounded-xl border-4 border-gray-600 px-8 py-2 text-center text-2xl font-bold text-black transition ease-in dark:border-slate-500 dark:text-white"
    >{text}</a
  >
{:else}
  <a
    {href}
    class="rounded-xl border-4 border-gray-600 px-8 py-2 text-center text-2xl font-bold text-black transition ease-in dark:border-slate-500 dark:text-white"
    >{text}</a
  >
{/if}
