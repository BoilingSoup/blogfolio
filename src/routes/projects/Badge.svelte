<script lang="ts">
  export let color: string;
</script>

<span
  class="animate-fade rounded border-2 border-gray-800 p-1 align-middle text-xs font-bold tracking-wide text-white transition ease-in-out dark:border-gray-500 {color}"
>
  <slot />
</span>
