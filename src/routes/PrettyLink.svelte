<script lang="ts">
  export let href: string;
  export let targetBlank: boolean = false;
  export let text: string;
</script>

{#if targetBlank}
  <a
    {href}
    target="_blank"
    class="rounded-xl border-4 border-gray-600 bg-slate-50 px-12 py-4 text-center text-2xl font-bold text-black transition ease-in-out hover:bg-slate-400 dark:border-slate-500 dark:bg-slate-600/40 dark:text-white hover:dark:bg-slate-500"
    >{text}</a
  >
{:else}
  <a
    {href}
    class="rounded-xl border-4 border-gray-600 bg-slate-50 px-12 py-4 text-center text-2xl font-bold text-black transition ease-in-out hover:bg-slate-400 dark:border-slate-500 dark:bg-slate-600/40 dark:text-white hover:dark:bg-slate-500"
    >{text}</a
  >
{/if}
