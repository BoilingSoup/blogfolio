<script lang="ts">
  export let hash: string;
  export let title: string;
</script>

<a id={hash} href="#{hash}">
  <h2 class="text-3xl font-bold text-gray-800 dark:text-blue-400">{title}</h2>
</a>
