<script lang="ts">
  export let hash: string;
  export let title: string;
</script>

<a id={hash} href="#{hash}" class="transition ease-in-out">
  <h2 class="text-3xl font-bold text-gray-800 transition ease-in-out dark:text-blue-400">{title}</h2>
</a>
