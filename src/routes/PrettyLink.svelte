<script lang="ts">
  export let href: string;
  export let target: "_self" | "_top" | "_blank" | "_parent" = "_self";
  export let text: string;
</script>

<a
  {href}
  {target}
  class="w-40 rounded-xl border border-gray-500 text-2xl text-black transition ease-in dark:border-slate-500 dark:text-white">{text}</a
>
