<script lang="ts">
  export let href: string;
  export let target: "_blank" | "_self" | "_parent" | "_top" | "framename" | undefined = undefined;
  export let text: string;
  export let textColor: string = "text-black dark:text-white";
</script>

<a
  {href}
  {target}
  class="rounded-xl border-4 border-gray-600 bg-slate-50 px-12 py-4 text-center text-2xl font-bold {textColor} transition ease-in-out hover:bg-gray-400 dark:border-slate-500 dark:bg-slate-600/40 hover:dark:bg-slate-500"
  >{text}<slot />
</a>
